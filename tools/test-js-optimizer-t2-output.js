function shifty($id) {
  $id >>= 2;
  q(HEAP32[$id]);
  q(HEAP32[$id + 10]);
  q(HEAP32[$id + 20]);
  q(HEAP32[(unknown1 + unknown2 >> 2) + $id]);
  q(HEAP32[(unknown1 + unknown2 >> 2) + $id]);
  var localUnchanged1 = get(1), localUnchanged2 = get(1);
  q(HEAP32[(localUnchanged1 + localUnchanged2 >> 2) + $id]);
  q($id << 2 >> _something_);
  q($id << 2 << _somethingElse_);
  pause(-1);
  var $id2;
  $id2 = get(54) >> 1;
  q(HEAP32[$id2]);
  q(HEAP32[$id2 + 20]);
  q(HEAP32[$id2 + 40]);
  var $id3 = get(74) >> 3;
  q(HEAP32[$id3]);
  q(HEAP32[$id3 + 5]);
  q(HEAP32[$id3 + 10]);
  pause(0);
  var _idents = get("abc") >> 2;
  q(HEAP32[(HEAP32[_idents] >> 2) + 2]);
  q(HEAP32[(HEAP32[_idents] >> 2) + 2]);
  q(HEAP32[(HEAP32[_idents] >> 2) + 2]);
  pause(1);
  var $sn_addr = get(12), $a_addr = get(999) >> 2;
  var $i = get(112233);
  q(HEAP32[($sn_addr - 1 << 1) + $a_addr + 1]);
  q(HEAP32[($i - 1 << 1) + $a_addr + 1]);
  $a_addr = $a_addr + 1;
  q(HEAP32[($i << 1) + $a_addr]);
  q(HEAP32[$a_addr + $i]);
  q($a_addr, z($a_addr));
  pause(2);
  var $level = HEAP[get(322) >> 2];
  var _dwt_norms_real = get("a") >> 2, $orient = get("cheez");
  q(HEAP32[($level << 1) + _dwt_norms_real + $orient * 20]);
  q(HEAP32[($level << 1) + _dwt_norms_real + $orient * 20 + 1]);
  q(HEAP32[($level << 1) + _dwt_norms_real + $orient * 20 + 2]);
  pause(3);
  var $wavelet38 = get(38) >> 2;
  $k = $a_addr << 2;
  q(HEAPF32[(HEAP32[$wavelet38] >> 2) + ($k << 2) + 2]);
  q(HEAPF32[(HEAP32[$wavelet38] >> 2) + ($k << 2) + 3]);
  q(HEAPF32[(HEAP32[$wavelet38] >> 2) + ($k << 2) + 100]);
  pause(4);
  var $p = $k, $parameters_addr = get("burger") >> 2;
  q(HEAP32[$parameters_addr + $p + 1406]);
  q(HEAP32[$parameters_addr + $p + 1411]);
  q(HEAP32[$parameters_addr + $p + 1416]);
  pause(5);
  var $res_spec242 = get($real), $cp = get("b"), $tileno = arguments[2];
  while (get(1)) {
    q(HEAP32[$parameters_addr + ($res_spec242 - 1) + 1406]);
    q(HEAP32[(HEAP32[($cp >> 2) + 27] >> 2) + $tileno * 1397 + 105]);
  }
  pause(6);
  q($idx << 3);
  q(1 << $idx << 1);
  print(INDENT + "Entering: _main" + "hi");
  pause(7);
  var $tp = get("tp") >> 2;
  q($tp);
  q($tp);
  q($tp);
  HEAP32[$H400] = $tp << 2;
  HEAP32[$tp << 2] = 5;
  HEAP32[$tp] = 5;
  HEAP32[HEAP[$tp]] = 5;
  HEAP32[HEAP[$tp] >> 2] = 5;
  pause(7);
  q(go());
  q(go() >> 8 << 8);
  q(go() + 2 >> 2);
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["shifty"]
