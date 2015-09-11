// Generated by CoffeeScript 1.9.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.gen_lines = function(data, scale_coeff, detail, style, filter, filter_style) {
    var border_bold, calc_color, color_border, fn, fn1, i_limit, i_size, j, j_limit, j_size, k, k_limit, k_size, l, line_dashed, m, n, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, results;
    k_size = k_last - k_first;
    j_size = j_last - j_first;
    i_size = i_last - i_first;
    k_limit = Math.ceil(data.length / detail[0]) * detail[0];
    j_limit = Math.ceil(data[0].length / detail[1]) * detail[1];
    i_limit = Math.ceil(data[0][0].length / detail[2]) * detail[2];
    if (style.length < 3) {
      style = [[], [], []];
    }
    if (style[0].length < 3) {
      style[0] = [true, true, true];
    }
    if (style[1].length < 3) {
      calc_color = function(dir, k, j, i) {
        var i_coeff, j_coeff, k_coeff;
        i_coeff = dir === 1 ? 0x88 : (i - k_first) / i_size * 0xff;
        j_coeff = dir === 2 ? 0x88 : (j - k_first) / j_size * 0xff;
        k_coeff = dir === 3 ? 0x88 : (k - k_first) / k_size * 0xff;
        return (k_coeff << 16) + (j_coeff << 8) + i_coeff;
      };
    } else if (style[1].length > 2) {
      calc_color = function(dir, k, j, i) {
        return style[1][dir - 1];
      };
    }
    if (style.length > 2 && style[2].length > 0) {
      line_dashed = style[2][0];
    } else {
      line_dashed = false;
    }
    if (style.length > 2 && style[1].length > 3 && style[2].length > 1) {
      color_border = style[1][3];
      border_bold = style[2][1];
    } else {
      color_border = '#000000';
      border_bold = true;
    }
    if (style[0][0]) {
      fn = function(k) {
        var j, m, ref3, ref4, ref5, results;
        if (k > k_last) {
          k = k_last;
        }
        results = [];
        for (j = m = ref3 = j_first, ref4 = j_limit, ref5 = detail[1]; ref5 > 0 ? m <= ref4 : m >= ref4; j = m += ref5) {
          results.push((function(j) {
            var color, dashed, fn1, i, n, pnts, ref6, ref7, width;
            if (j > j_last) {
              j = j_last;
            }
            pnts = [];
            fn1 = function(i) {
              return pnts.push(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]);
            };
            for (i = n = ref6 = i_first, ref7 = i_last; ref6 <= ref7 ? n <= ref7 : n >= ref7; i = ref6 <= ref7 ? ++n : --n) {
              fn1(i);
            }
            if (border_bold && (k === k_first || k === k_last) && (j === j_first || j === j_last)) {
              width = 2.5;
            } else {
              width = 1;
            }
            if ((k === k_first || k === k_last) || (j === j_first || j === j_last)) {
              color = color_border;
              dashed = false;
            } else {
              color = calc_color(1, k, j, 0);
              dashed = line_dashed;
            }
            return add_line(pnts, scale_coeff, color, dashed, width);
          })(j));
        }
        return results;
      };
      for (k = l = ref = k_first, ref1 = k_limit, ref2 = detail[0]; ref2 > 0 ? l <= ref1 : l >= ref1; k = l += ref2) {
        fn(k);
      }
    }
    if (style[0][1]) {
      fn1 = function(k) {
        var i, n, ref6, ref7, ref8, results;
        if (k > k_last) {
          k = k_last;
        }
        results = [];
        for (i = n = ref6 = i_first, ref7 = i_limit, ref8 = detail[2]; ref8 > 0 ? n <= ref7 : n >= ref7; i = n += ref8) {
          results.push((function(i) {
            var color, dashed, fn2, j, o, pnts, ref10, ref9, width;
            if (i > i_last) {
              i = i_last;
            }
            pnts = [];
            fn2 = function(j) {
              return pnts.push(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]);
            };
            for (j = o = ref9 = j_first, ref10 = j_last; ref9 <= ref10 ? o <= ref10 : o >= ref10; j = ref9 <= ref10 ? ++o : --o) {
              fn2(j);
            }
            if (border_bold && (k === k_first || k === k_last) && (i === i_first || i === i_last)) {
              width = 2.5;
            } else {
              width = 1;
            }
            if ((k === k_first || k === k_last) || (i === i_first || i === i_last)) {
              color = color_border;
              dashed = false;
            } else {
              color = calc_color(2, k, 0, i);
              dashed = line_dashed;
            }
            return add_line(pnts, scale_coeff, color, dashed, width);
          })(i));
        }
        return results;
      };
      for (k = m = ref3 = k_first, ref4 = k_limit, ref5 = detail[0]; ref5 > 0 ? m <= ref4 : m >= ref4; k = m += ref5) {
        fn1(k);
      }
    }
    if (style[0][2]) {
      results = [];
      for (j = n = ref6 = j_first, ref7 = j_limit, ref8 = detail[1]; ref8 > 0 ? n <= ref7 : n >= ref7; j = n += ref8) {
        results.push((function(j) {
          var i, o, ref10, ref11, ref9, results1;
          if (j > j_last) {
            j = j_last;
          }
          results1 = [];
          for (i = o = ref9 = i_first, ref10 = i_limit, ref11 = detail[2]; ref11 > 0 ? o <= ref10 : o >= ref10; i = o += ref11) {
            results1.push((function(i) {
              var color, dashed, fn2, p, pnts, ref12, ref13, width;
              if (i > i_last) {
                i = i_last;
              }
              pnts = [];
              fn2 = function(k) {
                return pnts.push(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]);
              };
              for (k = p = ref12 = k_first, ref13 = k_last; ref12 <= ref13 ? p <= ref13 : p >= ref13; k = ref12 <= ref13 ? ++p : --p) {
                fn2(k);
              }
              if (border_bold && (j === j_first || j === j_last) && (i === i_first || i === i_last)) {
                width = 2.5;
              } else {
                width = 1;
              }
              if ((j === j_first || j === j_last) || (i === i_first || i === i_last)) {
                color = color_border;
                dashed = false;
              } else {
                color = calc_color(3, 0, j, i);
                dashed = line_dashed;
              }
              return add_line(pnts, scale_coeff, color, dashed, width);
            })(i));
          }
          return results1;
        })(j));
      }
      return results;
    }
  };

  root.gen_surfaces = function(data, scale_coeff, detail, style, filter, filter_style) {
    var color, fn, fn1, fn2, i, i_first, i_last, i_limit, i_lst_back, i_lst_front, i_size, j, j_first, j_last, j_limit, j_lst_back, j_lst_front, j_size, k, k_first, k_index, k_last, k_limit, k_lst_back, k_lst_front, k_size, l, len, m, n, o, opacity, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, results;
    k_first = 0;
    j_first = 0;
    i_first = 0;
    k_last = data.length - 1;
    j_last = data[0].length - 1;
    i_last = data[0][0].length - 1;
    k_size = k_last - k_first;
    j_size = j_last - j_first;
    i_size = i_last - i_first;
    k_limit = Math.ceil(data.length / detail[0]) * detail[0];
    j_limit = Math.ceil(data[0].length / detail[1]) * detail[1];
    i_limit = Math.ceil(data[0][0].length / detail[2]) * detail[2];
    k_lst_front = [];
    k_lst_back = [];
    fn = function(k) {
      if (k > k_last) {
        k = k_last;
      }
      if (k !== k_lst_front[k_lst_front.length - 1]) {
        k_lst_front.push(k);
        return k_lst_back.push(k);
      }
    };
    for (k = l = ref = k_first, ref1 = k_limit, ref2 = detail[0]; ref2 > 0 ? l <= ref1 : l >= ref1; k = l += ref2) {
      fn(k);
    }
    k_lst_back.reverse();
    j_lst_front = [];
    j_lst_back = [];
    fn1 = function(j) {
      if (j > j_last) {
        j = j_last;
      }
      if (j !== j_lst_front[j_lst_front.length - 1]) {
        j_lst_front.push(j);
        return j_lst_back.push(j);
      }
    };
    for (j = m = ref3 = j_first, ref4 = j_limit, ref5 = detail[1]; ref5 > 0 ? m <= ref4 : m >= ref4; j = m += ref5) {
      fn1(j);
    }
    j_lst_back.reverse();
    i_lst_front = [];
    i_lst_back = [];
    fn2 = function(i) {
      if (i > i_last) {
        i = i_last;
      }
      if (i !== i_lst_front[i_lst_front.length - 1]) {
        i_lst_front.push(i);
        return i_lst_back.push(i);
      }
    };
    for (i = n = ref6 = i_first, ref7 = i_limit, ref8 = detail[2]; ref8 > 0 ? n <= ref7 : n >= ref7; i = n += ref8) {
      fn2(i);
    }
    i_lst_back.reverse();
    if (style.length > 2 && style[2].length > 0) {
      opacity = style[2][0];
    } else {
      opacity = 0.5;
    }
    if (style.length > 1 && style[1].length > 2) {
      color = style[1];
    } else {
      color = ['#00ffff', '#ff00ff', '#ffff00'];
    }
    results = [];
    for (k_index = o = 0, len = k_lst_back.length; o < len; k_index = ++o) {
      k = k_lst_back[k_index];
      results.push((function(k) {
        var faces, fn3, fn4, fn5, fn6, fn7, fn8, j_index, len1, len2, p, q, r, ref10, ref11, ref12, ref13, ref14, ref9, s, t, u, vertices;
        vertices = [];
        fn3 = function(j) {
          var q, ref11, ref12, results1;
          results1 = [];
          for (i = q = ref11 = i_first, ref12 = i_last; ref11 <= ref12 ? q <= ref12 : q >= ref12; i = ref11 <= ref12 ? ++q : --q) {
            results1.push((function(i) {
              return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
            })(i));
          }
          return results1;
        };
        for (j = p = ref9 = j_first, ref10 = j_last; ref9 <= ref10 ? p <= ref10 : p >= ref10; j = ref9 <= ref10 ? ++p : --p) {
          fn3(j);
        }
        faces = [];
        fn4 = function(j) {
          var r, ref12, results1;
          results1 = [];
          for (i = r = 0, ref12 = i_size - 1; 0 <= ref12 ? r <= ref12 : r >= ref12; i = 0 <= ref12 ? ++r : --r) {
            results1.push((function(i) {
              var a, b, face_0, face_1;
              a = (i_size + 1) * j + i;
              b = (i_size + 1) * (j + 1) + i;
              face_0 = new THREE.Face3(b, a + 1, a);
              face_1 = new THREE.Face3(b + 1, a + 1, b);
              return faces.push(face_0, face_1);
            })(i));
          }
          return results1;
        };
        for (j = q = 0, ref11 = j_size - 1; 0 <= ref11 ? q <= ref11 : q >= ref11; j = 0 <= ref11 ? ++q : --q) {
          fn4(j);
        }
        if (style[0][0]) {
          add_surface(vertices, scale_coeff, faces, color[0], opacity);
        }
        if (k_index < k_lst_back.length - 1) {
          fn5 = function(j) {
            var fn6, fn7, i_index, k_index_size, len2, ref12, ref13, ref14, results1, s, t, u;
            vertices = [];
            fn6 = function(k) {
              var ref14, ref15, results1, t;
              results1 = [];
              for (i = t = ref14 = i_first, ref15 = i_last; ref14 <= ref15 ? t <= ref15 : t >= ref15; i = ref14 <= ref15 ? ++t : --t) {
                results1.push((function(i) {
                  return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
                })(i));
              }
              return results1;
            };
            for (k = s = ref12 = k_lst_back[k_index + 1], ref13 = k_lst_back[k_index]; ref12 <= ref13 ? s <= ref13 : s >= ref13; k = ref12 <= ref13 ? ++s : --s) {
              fn6(k);
            }
            k_index_size = k_lst_back[k_index] - k_lst_back[k_index + 1];
            faces = [];
            fn7 = function(k) {
              var ref15, results1, u;
              results1 = [];
              for (i = u = 0, ref15 = i_size - 1; 0 <= ref15 ? u <= ref15 : u >= ref15; i = 0 <= ref15 ? ++u : --u) {
                results1.push((function(i) {
                  var a, b, face_0, face_1;
                  a = (i_size + 1) * k + i;
                  b = (i_size + 1) * (k + 1) + i;
                  face_0 = new THREE.Face3(a, a + 1, b);
                  face_1 = new THREE.Face3(b, a + 1, b + 1);
                  return faces.push(face_0, face_1);
                })(i));
              }
              return results1;
            };
            for (k = t = 0, ref14 = k_index_size - 1; 0 <= ref14 ? t <= ref14 : t >= ref14; k = 0 <= ref14 ? ++t : --t) {
              fn7(k);
            }
            if (style[0][1]) {
              add_surface(vertices, scale_coeff, faces, color[1], opacity);
            }
            if (j_index < j_lst_back.length - 1) {
              results1 = [];
              for (i_index = u = 0, len2 = i_lst_back.length; u < len2; i_index = ++u) {
                i = i_lst_back[i_index];
                results1.push((function(i) {
                  var fn8, fn9, j_index_size, ref15, ref16, ref17, v, w;
                  vertices = [];
                  fn8 = function(k) {
                    var ref17, ref18, results2, w;
                    results2 = [];
                    for (j = w = ref17 = j_lst_back[j_index + 1], ref18 = j_lst_back[j_index]; ref17 <= ref18 ? w <= ref18 : w >= ref18; j = ref17 <= ref18 ? ++w : --w) {
                      results2.push((function(j) {
                        return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
                      })(j));
                    }
                    return results2;
                  };
                  for (k = v = ref15 = k_lst_back[k_index + 1], ref16 = k_lst_back[k_index]; ref15 <= ref16 ? v <= ref16 : v >= ref16; k = ref15 <= ref16 ? ++v : --v) {
                    fn8(k);
                  }
                  k_index_size = k_lst_back[k_index] - k_lst_back[k_index + 1];
                  j_index_size = j_lst_back[j_index] - j_lst_back[j_index + 1];
                  faces = [];
                  fn9 = function(k) {
                    var ref18, results2, x;
                    results2 = [];
                    for (j = x = 0, ref18 = j_index_size - 1; 0 <= ref18 ? x <= ref18 : x >= ref18; j = 0 <= ref18 ? ++x : --x) {
                      results2.push((function(j) {
                        var a, b, face_0, face_1;
                        a = (j_index_size + 1) * k + j;
                        b = (j_index_size + 1) * (k + 1) + j;
                        face_0 = new THREE.Face3(b, a + 1, a);
                        face_1 = new THREE.Face3(b + 1, a + 1, b);
                        return faces.push(face_0, face_1);
                      })(j));
                    }
                    return results2;
                  };
                  for (k = w = 0, ref17 = k_index_size - 1; 0 <= ref17 ? w <= ref17 : w >= ref17; k = 0 <= ref17 ? ++w : --w) {
                    fn9(k);
                  }
                  if (style[0][2]) {
                    return add_surface(vertices, scale_coeff, faces, color[2], opacity);
                  }
                })(i));
              }
              return results1;
            }
          };
          for (j_index = r = 0, len1 = j_lst_back.length; r < len1; j_index = ++r) {
            j = j_lst_back[j_index];
            fn5(j);
          }
        }
        k = k_lst_front[k_index];
        if (k_index > 0) {
          fn6 = function(j) {
            var fn7, fn8, fn9, i_index, k_index_size, len3, ref12, ref13, ref14, t, u, v;
            if (j_index > 0) {
              fn7 = function(i) {
                var fn8, fn9, j_index_size, k_index_size, ref12, ref13, ref14, u, v;
                vertices = [];
                fn8 = function(k) {
                  var ref14, ref15, results1, v;
                  results1 = [];
                  for (j = v = ref14 = j_lst_front[j_index - 1], ref15 = j_lst_front[j_index]; ref14 <= ref15 ? v <= ref15 : v >= ref15; j = ref14 <= ref15 ? ++v : --v) {
                    results1.push((function(j) {
                      return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
                    })(j));
                  }
                  return results1;
                };
                for (k = u = ref12 = k_lst_front[k_index - 1], ref13 = k_lst_front[k_index]; ref12 <= ref13 ? u <= ref13 : u >= ref13; k = ref12 <= ref13 ? ++u : --u) {
                  fn8(k);
                }
                k_index_size = k_lst_front[k_index] - k_lst_front[k_index - 1];
                j_index_size = j_lst_front[j_index] - j_lst_front[j_index - 1];
                faces = [];
                fn9 = function(k) {
                  var ref15, results1, w;
                  results1 = [];
                  for (j = w = 0, ref15 = j_index_size - 1; 0 <= ref15 ? w <= ref15 : w >= ref15; j = 0 <= ref15 ? ++w : --w) {
                    results1.push((function(j) {
                      var a, b, face_0, face_1;
                      a = (j_index_size + 1) * k + j;
                      b = (j_index_size + 1) * (k + 1) + j;
                      face_0 = new THREE.Face3(a, a + 1, b);
                      face_1 = new THREE.Face3(b, a + 1, b + 1);
                      return faces.push(face_0, face_1);
                    })(j));
                  }
                  return results1;
                };
                for (k = v = 0, ref14 = k_index_size - 1; 0 <= ref14 ? v <= ref14 : v >= ref14; k = 0 <= ref14 ? ++v : --v) {
                  fn9(k);
                }
                if (style[0][2]) {
                  return add_surface(vertices, scale_coeff, faces, color[2], opacity);
                }
              };
              for (i_index = t = 0, len3 = i_lst_front.length; t < len3; i_index = ++t) {
                i = i_lst_front[i_index];
                fn7(i);
              }
            }
            j = j_lst_front[j_index];
            vertices = [];
            fn8 = function(k) {
              var ref14, ref15, results1, v;
              results1 = [];
              for (i = v = ref14 = i_first, ref15 = i_last; ref14 <= ref15 ? v <= ref15 : v >= ref15; i = ref14 <= ref15 ? ++v : --v) {
                results1.push((function(i) {
                  return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
                })(i));
              }
              return results1;
            };
            for (k = u = ref12 = k_lst_back[k_index], ref13 = k_lst_back[k_index - 1]; ref12 <= ref13 ? u <= ref13 : u >= ref13; k = ref12 <= ref13 ? ++u : --u) {
              fn8(k);
            }
            k_index_size = k_lst_back[k_index - 1] - k_lst_back[k_index];
            faces = [];
            fn9 = function(k) {
              var ref15, results1, w;
              results1 = [];
              for (i = w = 0, ref15 = i_size - 1; 0 <= ref15 ? w <= ref15 : w >= ref15; i = 0 <= ref15 ? ++w : --w) {
                results1.push((function(i) {
                  var a, b, face_0, face_1;
                  a = (i_size + 1) * k + i;
                  b = (i_size + 1) * (k + 1) + i;
                  face_0 = new THREE.Face3(b, a + 1, a);
                  face_1 = new THREE.Face3(b + 1, a + 1, b);
                  return faces.push(face_0, face_1);
                })(i));
              }
              return results1;
            };
            for (k = v = 0, ref14 = k_index_size - 1; 0 <= ref14 ? v <= ref14 : v >= ref14; k = 0 <= ref14 ? ++v : --v) {
              fn9(k);
            }
            if (style[0][1]) {
              return add_surface(vertices, scale_coeff, faces, color[1], opacity);
            }
          };
          for (j_index = s = 0, len2 = j_lst_front.length; s < len2; j_index = ++s) {
            j = j_lst_front[j_index];
            fn6(j);
          }
        }
        k = k_lst_front[k_index];
        vertices = [];
        fn7 = function(j) {
          var ref14, ref15, results1, u;
          results1 = [];
          for (i = u = ref14 = i_first, ref15 = i_last; ref14 <= ref15 ? u <= ref15 : u >= ref15; i = ref14 <= ref15 ? ++u : --u) {
            results1.push((function(i) {
              return vertices.push(new THREE.Vector3(data[k][j][i][0], data[k][j][i][1], data[k][j][i][2]));
            })(i));
          }
          return results1;
        };
        for (j = t = ref12 = j_first, ref13 = j_last; ref12 <= ref13 ? t <= ref13 : t >= ref13; j = ref12 <= ref13 ? ++t : --t) {
          fn7(j);
        }
        faces = [];
        fn8 = function(j) {
          var ref15, results1, v;
          results1 = [];
          for (i = v = 0, ref15 = i_size - 1; 0 <= ref15 ? v <= ref15 : v >= ref15; i = 0 <= ref15 ? ++v : --v) {
            results1.push((function(i) {
              var a, b, face_0, face_1;
              a = (i_size + 1) * j + i;
              b = (i_size + 1) * (j + 1) + i;
              face_0 = new THREE.Face3(a, a + 1, b);
              face_1 = new THREE.Face3(b, a + 1, b + 1);
              return faces.push(face_0, face_1);
            })(i));
          }
          return results1;
        };
        for (j = u = 0, ref14 = j_size - 1; 0 <= ref14 ? u <= ref14 : u >= ref14; j = 0 <= ref14 ? ++u : --u) {
          fn8(j);
        }
        if (style[0][0]) {
          return add_surface(vertices, scale_coeff, faces, color[0], opacity);
        }
      })(k));
    }
    return results;
  };

  root.add_line = function(pnts, scale_coeff, color, dashed, width) {
    var geometry, material, sceneObject;
    if (width == null) {
      width = 1;
    }
    geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(pnts), 3));
    geometry.computeBoundingSphere();
    if (dashed) {
      material = new THREE.LineDashedMaterial({
        color: color,
        linewidth: width,
        dashSize: 0.02,
        gapSize: 0.01
      });
      geometry.computeLineDistances();
    } else {
      material = new THREE.LineBasicMaterial({
        color: color,
        linewidth: width
      });
    }
    sceneObject = new THREE.Line(geometry, material);
    sceneObject.scale.x = scale_coeff;
    sceneObject.scale.y = scale_coeff;
    sceneObject.scale.z = scale_coeff;
    return root.lines.add(sceneObject);
  };

  root.add_surface = function(vertices, scale_coeff, faces, color, opacity) {
    var geometry, material, sceneObject;
    geometry = new THREE.Geometry();
    material = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.FrontSide,
      transparent: true,
      opacity: opacity
    });
    geometry.vertices = vertices;
    geometry.faces = faces;
    geometry.computeBoundingSphere();
    sceneObject = new THREE.Mesh(geometry, material);
    sceneObject.scale.x = scale_coeff;
    sceneObject.scale.y = scale_coeff;
    sceneObject.scale.z = scale_coeff;
    return root.faces.add(sceneObject);
  };

  root.GridLines = {
    init: function(data, scale_coeff, detail, style, filter, filter_style) {
      var ref;
      root.lines = new THREE.Object3D();
      if (style.length < 3) {
        style = [[], [], []];
      }
      ref = [0, 0, 0], root.k_first = ref[0], root.j_first = ref[1], root.i_first = ref[2];
      root.k_last = data.length - 1;
      root.j_last = data[0].length - 1;
      root.i_last = data[0][0].length - 1;
      gen_lines(data, scale_coeff, detail, style, filter, filter_style);
      return root.lines;
    }
  };

  root.GridFaces = {
    init: function(data, scale_coeff, detail, style, filter, filter_style) {
      root.faces = new THREE.Object3D();
      if (style.length < 3) {
        style = [[], [], []];
      }
      if (filter_style.length < 3) {
        filter_style = [[], [], []];
      }
      if (style[0].length < 3) {
        style[0] = [false, false, false];
      }
      if (style[1].length < 3) {
        style[1] = ["#00ffff", "#ff00ff", "#ffff00"];
      }
      if (style[2].length < 1) {
        style[2] = [0.2];
      }
      if (filter_style[0].length < 3) {
        filter_style[0] = [true, true, true];
      }
      if (filter_style[1].length < 3) {
        filter_style[1] = ["#00ffff", "#ff00ff", "#ffff00"];
      }
      if (filter_style[2].length < 1) {
        filter_style[2] = [0.2];
      }
      gen_surfaces(data, scale_coeff, detail, style, filter, filter_style);
      return root.faces;
    }
  };

}).call(this);
