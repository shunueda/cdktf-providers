// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemControlCpuStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#id DataThunderSystemControlCpuStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#stats DataThunderSystemControlCpuStats#stats}
  */
  readonly stats?: DataThunderSystemControlCpuStatsStats;
}
export interface DataThunderSystemControlCpuStatsStats {
  /**
  * Control CPU-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_1 DataThunderSystemControlCpuStats#cpu_1}
  */
  readonly cpu1?: number;
  /**
  * Control CPU-10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_10 DataThunderSystemControlCpuStats#cpu_10}
  */
  readonly cpu10?: number;
  /**
  * Control CPU-11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_11 DataThunderSystemControlCpuStats#cpu_11}
  */
  readonly cpu11?: number;
  /**
  * Control CPU-12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_12 DataThunderSystemControlCpuStats#cpu_12}
  */
  readonly cpu12?: number;
  /**
  * Control CPU-13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_13 DataThunderSystemControlCpuStats#cpu_13}
  */
  readonly cpu13?: number;
  /**
  * Control CPU-14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_14 DataThunderSystemControlCpuStats#cpu_14}
  */
  readonly cpu14?: number;
  /**
  * Control CPU-15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_15 DataThunderSystemControlCpuStats#cpu_15}
  */
  readonly cpu15?: number;
  /**
  * Control CPU-16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_16 DataThunderSystemControlCpuStats#cpu_16}
  */
  readonly cpu16?: number;
  /**
  * Control CPU-17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_17 DataThunderSystemControlCpuStats#cpu_17}
  */
  readonly cpu17?: number;
  /**
  * Control CPU-18
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_18 DataThunderSystemControlCpuStats#cpu_18}
  */
  readonly cpu18?: number;
  /**
  * Control CPU-19
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_19 DataThunderSystemControlCpuStats#cpu_19}
  */
  readonly cpu19?: number;
  /**
  * Control CPU-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_2 DataThunderSystemControlCpuStats#cpu_2}
  */
  readonly cpu2?: number;
  /**
  * Control CPU-20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_20 DataThunderSystemControlCpuStats#cpu_20}
  */
  readonly cpu20?: number;
  /**
  * Control CPU-21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_21 DataThunderSystemControlCpuStats#cpu_21}
  */
  readonly cpu21?: number;
  /**
  * Control CPU-22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_22 DataThunderSystemControlCpuStats#cpu_22}
  */
  readonly cpu22?: number;
  /**
  * Control CPU-23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_23 DataThunderSystemControlCpuStats#cpu_23}
  */
  readonly cpu23?: number;
  /**
  * Control CPU-24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_24 DataThunderSystemControlCpuStats#cpu_24}
  */
  readonly cpu24?: number;
  /**
  * Control CPU-25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_25 DataThunderSystemControlCpuStats#cpu_25}
  */
  readonly cpu25?: number;
  /**
  * Control CPU-26
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_26 DataThunderSystemControlCpuStats#cpu_26}
  */
  readonly cpu26?: number;
  /**
  * Control CPU-27
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_27 DataThunderSystemControlCpuStats#cpu_27}
  */
  readonly cpu27?: number;
  /**
  * Control CPU-28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_28 DataThunderSystemControlCpuStats#cpu_28}
  */
  readonly cpu28?: number;
  /**
  * Control CPU-29
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_29 DataThunderSystemControlCpuStats#cpu_29}
  */
  readonly cpu29?: number;
  /**
  * Control CPU-3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_3 DataThunderSystemControlCpuStats#cpu_3}
  */
  readonly cpu3?: number;
  /**
  * Control CPU-30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_30 DataThunderSystemControlCpuStats#cpu_30}
  */
  readonly cpu30?: number;
  /**
  * Control CPU-31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_31 DataThunderSystemControlCpuStats#cpu_31}
  */
  readonly cpu31?: number;
  /**
  * Control CPU-32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_32 DataThunderSystemControlCpuStats#cpu_32}
  */
  readonly cpu32?: number;
  /**
  * Control CPU-33
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_33 DataThunderSystemControlCpuStats#cpu_33}
  */
  readonly cpu33?: number;
  /**
  * Control CPU-34
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_34 DataThunderSystemControlCpuStats#cpu_34}
  */
  readonly cpu34?: number;
  /**
  * Control CPU-35
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_35 DataThunderSystemControlCpuStats#cpu_35}
  */
  readonly cpu35?: number;
  /**
  * Control CPU-36
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_36 DataThunderSystemControlCpuStats#cpu_36}
  */
  readonly cpu36?: number;
  /**
  * Control CPU-37
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_37 DataThunderSystemControlCpuStats#cpu_37}
  */
  readonly cpu37?: number;
  /**
  * Control CPU-38
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_38 DataThunderSystemControlCpuStats#cpu_38}
  */
  readonly cpu38?: number;
  /**
  * Control CPU-39
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_39 DataThunderSystemControlCpuStats#cpu_39}
  */
  readonly cpu39?: number;
  /**
  * Control CPU-4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_4 DataThunderSystemControlCpuStats#cpu_4}
  */
  readonly cpu4?: number;
  /**
  * Control CPU-40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_40 DataThunderSystemControlCpuStats#cpu_40}
  */
  readonly cpu40?: number;
  /**
  * Control CPU-41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_41 DataThunderSystemControlCpuStats#cpu_41}
  */
  readonly cpu41?: number;
  /**
  * Control CPU-42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_42 DataThunderSystemControlCpuStats#cpu_42}
  */
  readonly cpu42?: number;
  /**
  * Control CPU-43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_43 DataThunderSystemControlCpuStats#cpu_43}
  */
  readonly cpu43?: number;
  /**
  * Control CPU-44
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_44 DataThunderSystemControlCpuStats#cpu_44}
  */
  readonly cpu44?: number;
  /**
  * Control CPU-45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_45 DataThunderSystemControlCpuStats#cpu_45}
  */
  readonly cpu45?: number;
  /**
  * Control CPU-46
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_46 DataThunderSystemControlCpuStats#cpu_46}
  */
  readonly cpu46?: number;
  /**
  * Control CPU-47
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_47 DataThunderSystemControlCpuStats#cpu_47}
  */
  readonly cpu47?: number;
  /**
  * Control CPU-48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_48 DataThunderSystemControlCpuStats#cpu_48}
  */
  readonly cpu48?: number;
  /**
  * Control CPU-49
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_49 DataThunderSystemControlCpuStats#cpu_49}
  */
  readonly cpu49?: number;
  /**
  * Control CPU-5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_5 DataThunderSystemControlCpuStats#cpu_5}
  */
  readonly cpu5?: number;
  /**
  * Control CPU-50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_50 DataThunderSystemControlCpuStats#cpu_50}
  */
  readonly cpu50?: number;
  /**
  * Control CPU-51
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_51 DataThunderSystemControlCpuStats#cpu_51}
  */
  readonly cpu51?: number;
  /**
  * Control CPU-52
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_52 DataThunderSystemControlCpuStats#cpu_52}
  */
  readonly cpu52?: number;
  /**
  * Control CPU-53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_53 DataThunderSystemControlCpuStats#cpu_53}
  */
  readonly cpu53?: number;
  /**
  * Control CPU-54
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_54 DataThunderSystemControlCpuStats#cpu_54}
  */
  readonly cpu54?: number;
  /**
  * Control CPU-55
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_55 DataThunderSystemControlCpuStats#cpu_55}
  */
  readonly cpu55?: number;
  /**
  * Control CPU-56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_56 DataThunderSystemControlCpuStats#cpu_56}
  */
  readonly cpu56?: number;
  /**
  * Control CPU-57
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_57 DataThunderSystemControlCpuStats#cpu_57}
  */
  readonly cpu57?: number;
  /**
  * Control CPU-58
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_58 DataThunderSystemControlCpuStats#cpu_58}
  */
  readonly cpu58?: number;
  /**
  * Control CPU-59
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_59 DataThunderSystemControlCpuStats#cpu_59}
  */
  readonly cpu59?: number;
  /**
  * Control CPU-6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_6 DataThunderSystemControlCpuStats#cpu_6}
  */
  readonly cpu6?: number;
  /**
  * Control CPU-60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_60 DataThunderSystemControlCpuStats#cpu_60}
  */
  readonly cpu60?: number;
  /**
  * Control CPU-61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_61 DataThunderSystemControlCpuStats#cpu_61}
  */
  readonly cpu61?: number;
  /**
  * Control CPU-62
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_62 DataThunderSystemControlCpuStats#cpu_62}
  */
  readonly cpu62?: number;
  /**
  * Control CPU-63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_63 DataThunderSystemControlCpuStats#cpu_63}
  */
  readonly cpu63?: number;
  /**
  * Control CPU-64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_64 DataThunderSystemControlCpuStats#cpu_64}
  */
  readonly cpu64?: number;
  /**
  * Control CPU-7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_7 DataThunderSystemControlCpuStats#cpu_7}
  */
  readonly cpu7?: number;
  /**
  * Control CPU-8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_8 DataThunderSystemControlCpuStats#cpu_8}
  */
  readonly cpu8?: number;
  /**
  * Control CPU-9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#cpu_9 DataThunderSystemControlCpuStats#cpu_9}
  */
  readonly cpu9?: number;
  /**
  * Number of ctrl cpus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#ctrl_cpu_number DataThunderSystemControlCpuStats#ctrl_cpu_number}
  */
  readonly ctrlCpuNumber?: number;
}

export function dataThunderSystemControlCpuStatsStatsToTerraform(struct?: DataThunderSystemControlCpuStatsStatsOutputReference | DataThunderSystemControlCpuStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_1: cdktf.numberToTerraform(struct!.cpu1),
    cpu_10: cdktf.numberToTerraform(struct!.cpu10),
    cpu_11: cdktf.numberToTerraform(struct!.cpu11),
    cpu_12: cdktf.numberToTerraform(struct!.cpu12),
    cpu_13: cdktf.numberToTerraform(struct!.cpu13),
    cpu_14: cdktf.numberToTerraform(struct!.cpu14),
    cpu_15: cdktf.numberToTerraform(struct!.cpu15),
    cpu_16: cdktf.numberToTerraform(struct!.cpu16),
    cpu_17: cdktf.numberToTerraform(struct!.cpu17),
    cpu_18: cdktf.numberToTerraform(struct!.cpu18),
    cpu_19: cdktf.numberToTerraform(struct!.cpu19),
    cpu_2: cdktf.numberToTerraform(struct!.cpu2),
    cpu_20: cdktf.numberToTerraform(struct!.cpu20),
    cpu_21: cdktf.numberToTerraform(struct!.cpu21),
    cpu_22: cdktf.numberToTerraform(struct!.cpu22),
    cpu_23: cdktf.numberToTerraform(struct!.cpu23),
    cpu_24: cdktf.numberToTerraform(struct!.cpu24),
    cpu_25: cdktf.numberToTerraform(struct!.cpu25),
    cpu_26: cdktf.numberToTerraform(struct!.cpu26),
    cpu_27: cdktf.numberToTerraform(struct!.cpu27),
    cpu_28: cdktf.numberToTerraform(struct!.cpu28),
    cpu_29: cdktf.numberToTerraform(struct!.cpu29),
    cpu_3: cdktf.numberToTerraform(struct!.cpu3),
    cpu_30: cdktf.numberToTerraform(struct!.cpu30),
    cpu_31: cdktf.numberToTerraform(struct!.cpu31),
    cpu_32: cdktf.numberToTerraform(struct!.cpu32),
    cpu_33: cdktf.numberToTerraform(struct!.cpu33),
    cpu_34: cdktf.numberToTerraform(struct!.cpu34),
    cpu_35: cdktf.numberToTerraform(struct!.cpu35),
    cpu_36: cdktf.numberToTerraform(struct!.cpu36),
    cpu_37: cdktf.numberToTerraform(struct!.cpu37),
    cpu_38: cdktf.numberToTerraform(struct!.cpu38),
    cpu_39: cdktf.numberToTerraform(struct!.cpu39),
    cpu_4: cdktf.numberToTerraform(struct!.cpu4),
    cpu_40: cdktf.numberToTerraform(struct!.cpu40),
    cpu_41: cdktf.numberToTerraform(struct!.cpu41),
    cpu_42: cdktf.numberToTerraform(struct!.cpu42),
    cpu_43: cdktf.numberToTerraform(struct!.cpu43),
    cpu_44: cdktf.numberToTerraform(struct!.cpu44),
    cpu_45: cdktf.numberToTerraform(struct!.cpu45),
    cpu_46: cdktf.numberToTerraform(struct!.cpu46),
    cpu_47: cdktf.numberToTerraform(struct!.cpu47),
    cpu_48: cdktf.numberToTerraform(struct!.cpu48),
    cpu_49: cdktf.numberToTerraform(struct!.cpu49),
    cpu_5: cdktf.numberToTerraform(struct!.cpu5),
    cpu_50: cdktf.numberToTerraform(struct!.cpu50),
    cpu_51: cdktf.numberToTerraform(struct!.cpu51),
    cpu_52: cdktf.numberToTerraform(struct!.cpu52),
    cpu_53: cdktf.numberToTerraform(struct!.cpu53),
    cpu_54: cdktf.numberToTerraform(struct!.cpu54),
    cpu_55: cdktf.numberToTerraform(struct!.cpu55),
    cpu_56: cdktf.numberToTerraform(struct!.cpu56),
    cpu_57: cdktf.numberToTerraform(struct!.cpu57),
    cpu_58: cdktf.numberToTerraform(struct!.cpu58),
    cpu_59: cdktf.numberToTerraform(struct!.cpu59),
    cpu_6: cdktf.numberToTerraform(struct!.cpu6),
    cpu_60: cdktf.numberToTerraform(struct!.cpu60),
    cpu_61: cdktf.numberToTerraform(struct!.cpu61),
    cpu_62: cdktf.numberToTerraform(struct!.cpu62),
    cpu_63: cdktf.numberToTerraform(struct!.cpu63),
    cpu_64: cdktf.numberToTerraform(struct!.cpu64),
    cpu_7: cdktf.numberToTerraform(struct!.cpu7),
    cpu_8: cdktf.numberToTerraform(struct!.cpu8),
    cpu_9: cdktf.numberToTerraform(struct!.cpu9),
    ctrl_cpu_number: cdktf.numberToTerraform(struct!.ctrlCpuNumber),
  }
}


export function dataThunderSystemControlCpuStatsStatsToHclTerraform(struct?: DataThunderSystemControlCpuStatsStatsOutputReference | DataThunderSystemControlCpuStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_1: {
      value: cdktf.numberToHclTerraform(struct!.cpu1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_10: {
      value: cdktf.numberToHclTerraform(struct!.cpu10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_11: {
      value: cdktf.numberToHclTerraform(struct!.cpu11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_12: {
      value: cdktf.numberToHclTerraform(struct!.cpu12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_13: {
      value: cdktf.numberToHclTerraform(struct!.cpu13),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_14: {
      value: cdktf.numberToHclTerraform(struct!.cpu14),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_15: {
      value: cdktf.numberToHclTerraform(struct!.cpu15),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_16: {
      value: cdktf.numberToHclTerraform(struct!.cpu16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_17: {
      value: cdktf.numberToHclTerraform(struct!.cpu17),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_18: {
      value: cdktf.numberToHclTerraform(struct!.cpu18),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_19: {
      value: cdktf.numberToHclTerraform(struct!.cpu19),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_2: {
      value: cdktf.numberToHclTerraform(struct!.cpu2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_20: {
      value: cdktf.numberToHclTerraform(struct!.cpu20),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_21: {
      value: cdktf.numberToHclTerraform(struct!.cpu21),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_22: {
      value: cdktf.numberToHclTerraform(struct!.cpu22),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_23: {
      value: cdktf.numberToHclTerraform(struct!.cpu23),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_24: {
      value: cdktf.numberToHclTerraform(struct!.cpu24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_25: {
      value: cdktf.numberToHclTerraform(struct!.cpu25),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_26: {
      value: cdktf.numberToHclTerraform(struct!.cpu26),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_27: {
      value: cdktf.numberToHclTerraform(struct!.cpu27),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_28: {
      value: cdktf.numberToHclTerraform(struct!.cpu28),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_29: {
      value: cdktf.numberToHclTerraform(struct!.cpu29),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_3: {
      value: cdktf.numberToHclTerraform(struct!.cpu3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_30: {
      value: cdktf.numberToHclTerraform(struct!.cpu30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_31: {
      value: cdktf.numberToHclTerraform(struct!.cpu31),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_32: {
      value: cdktf.numberToHclTerraform(struct!.cpu32),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_33: {
      value: cdktf.numberToHclTerraform(struct!.cpu33),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_34: {
      value: cdktf.numberToHclTerraform(struct!.cpu34),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_35: {
      value: cdktf.numberToHclTerraform(struct!.cpu35),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_36: {
      value: cdktf.numberToHclTerraform(struct!.cpu36),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_37: {
      value: cdktf.numberToHclTerraform(struct!.cpu37),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_38: {
      value: cdktf.numberToHclTerraform(struct!.cpu38),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_39: {
      value: cdktf.numberToHclTerraform(struct!.cpu39),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_4: {
      value: cdktf.numberToHclTerraform(struct!.cpu4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_40: {
      value: cdktf.numberToHclTerraform(struct!.cpu40),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_41: {
      value: cdktf.numberToHclTerraform(struct!.cpu41),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_42: {
      value: cdktf.numberToHclTerraform(struct!.cpu42),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_43: {
      value: cdktf.numberToHclTerraform(struct!.cpu43),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_44: {
      value: cdktf.numberToHclTerraform(struct!.cpu44),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_45: {
      value: cdktf.numberToHclTerraform(struct!.cpu45),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_46: {
      value: cdktf.numberToHclTerraform(struct!.cpu46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_47: {
      value: cdktf.numberToHclTerraform(struct!.cpu47),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_48: {
      value: cdktf.numberToHclTerraform(struct!.cpu48),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_49: {
      value: cdktf.numberToHclTerraform(struct!.cpu49),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_5: {
      value: cdktf.numberToHclTerraform(struct!.cpu5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_50: {
      value: cdktf.numberToHclTerraform(struct!.cpu50),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_51: {
      value: cdktf.numberToHclTerraform(struct!.cpu51),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_52: {
      value: cdktf.numberToHclTerraform(struct!.cpu52),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_53: {
      value: cdktf.numberToHclTerraform(struct!.cpu53),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_54: {
      value: cdktf.numberToHclTerraform(struct!.cpu54),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_55: {
      value: cdktf.numberToHclTerraform(struct!.cpu55),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_56: {
      value: cdktf.numberToHclTerraform(struct!.cpu56),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_57: {
      value: cdktf.numberToHclTerraform(struct!.cpu57),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_58: {
      value: cdktf.numberToHclTerraform(struct!.cpu58),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_59: {
      value: cdktf.numberToHclTerraform(struct!.cpu59),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_6: {
      value: cdktf.numberToHclTerraform(struct!.cpu6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_60: {
      value: cdktf.numberToHclTerraform(struct!.cpu60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_61: {
      value: cdktf.numberToHclTerraform(struct!.cpu61),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_62: {
      value: cdktf.numberToHclTerraform(struct!.cpu62),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_63: {
      value: cdktf.numberToHclTerraform(struct!.cpu63),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_64: {
      value: cdktf.numberToHclTerraform(struct!.cpu64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_7: {
      value: cdktf.numberToHclTerraform(struct!.cpu7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_8: {
      value: cdktf.numberToHclTerraform(struct!.cpu8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_9: {
      value: cdktf.numberToHclTerraform(struct!.cpu9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctrl_cpu_number: {
      value: cdktf.numberToHclTerraform(struct!.ctrlCpuNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemControlCpuStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemControlCpuStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu1 = this._cpu1;
    }
    if (this._cpu10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu10 = this._cpu10;
    }
    if (this._cpu11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu11 = this._cpu11;
    }
    if (this._cpu12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu12 = this._cpu12;
    }
    if (this._cpu13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu13 = this._cpu13;
    }
    if (this._cpu14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu14 = this._cpu14;
    }
    if (this._cpu15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu15 = this._cpu15;
    }
    if (this._cpu16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu16 = this._cpu16;
    }
    if (this._cpu17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu17 = this._cpu17;
    }
    if (this._cpu18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu18 = this._cpu18;
    }
    if (this._cpu19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu19 = this._cpu19;
    }
    if (this._cpu2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu2 = this._cpu2;
    }
    if (this._cpu20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu20 = this._cpu20;
    }
    if (this._cpu21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu21 = this._cpu21;
    }
    if (this._cpu22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu22 = this._cpu22;
    }
    if (this._cpu23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu23 = this._cpu23;
    }
    if (this._cpu24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu24 = this._cpu24;
    }
    if (this._cpu25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu25 = this._cpu25;
    }
    if (this._cpu26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu26 = this._cpu26;
    }
    if (this._cpu27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu27 = this._cpu27;
    }
    if (this._cpu28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu28 = this._cpu28;
    }
    if (this._cpu29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu29 = this._cpu29;
    }
    if (this._cpu3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu3 = this._cpu3;
    }
    if (this._cpu30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu30 = this._cpu30;
    }
    if (this._cpu31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu31 = this._cpu31;
    }
    if (this._cpu32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu32 = this._cpu32;
    }
    if (this._cpu33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu33 = this._cpu33;
    }
    if (this._cpu34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu34 = this._cpu34;
    }
    if (this._cpu35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu35 = this._cpu35;
    }
    if (this._cpu36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu36 = this._cpu36;
    }
    if (this._cpu37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu37 = this._cpu37;
    }
    if (this._cpu38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu38 = this._cpu38;
    }
    if (this._cpu39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu39 = this._cpu39;
    }
    if (this._cpu4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu4 = this._cpu4;
    }
    if (this._cpu40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu40 = this._cpu40;
    }
    if (this._cpu41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu41 = this._cpu41;
    }
    if (this._cpu42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu42 = this._cpu42;
    }
    if (this._cpu43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu43 = this._cpu43;
    }
    if (this._cpu44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu44 = this._cpu44;
    }
    if (this._cpu45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu45 = this._cpu45;
    }
    if (this._cpu46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu46 = this._cpu46;
    }
    if (this._cpu47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu47 = this._cpu47;
    }
    if (this._cpu48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu48 = this._cpu48;
    }
    if (this._cpu49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu49 = this._cpu49;
    }
    if (this._cpu5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu5 = this._cpu5;
    }
    if (this._cpu50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu50 = this._cpu50;
    }
    if (this._cpu51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu51 = this._cpu51;
    }
    if (this._cpu52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu52 = this._cpu52;
    }
    if (this._cpu53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu53 = this._cpu53;
    }
    if (this._cpu54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu54 = this._cpu54;
    }
    if (this._cpu55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu55 = this._cpu55;
    }
    if (this._cpu56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu56 = this._cpu56;
    }
    if (this._cpu57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu57 = this._cpu57;
    }
    if (this._cpu58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu58 = this._cpu58;
    }
    if (this._cpu59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu59 = this._cpu59;
    }
    if (this._cpu6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu6 = this._cpu6;
    }
    if (this._cpu60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu60 = this._cpu60;
    }
    if (this._cpu61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu61 = this._cpu61;
    }
    if (this._cpu62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu62 = this._cpu62;
    }
    if (this._cpu63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu63 = this._cpu63;
    }
    if (this._cpu64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu64 = this._cpu64;
    }
    if (this._cpu7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu7 = this._cpu7;
    }
    if (this._cpu8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu8 = this._cpu8;
    }
    if (this._cpu9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu9 = this._cpu9;
    }
    if (this._ctrlCpuNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlCpuNumber = this._ctrlCpuNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemControlCpuStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu1 = undefined;
      this._cpu10 = undefined;
      this._cpu11 = undefined;
      this._cpu12 = undefined;
      this._cpu13 = undefined;
      this._cpu14 = undefined;
      this._cpu15 = undefined;
      this._cpu16 = undefined;
      this._cpu17 = undefined;
      this._cpu18 = undefined;
      this._cpu19 = undefined;
      this._cpu2 = undefined;
      this._cpu20 = undefined;
      this._cpu21 = undefined;
      this._cpu22 = undefined;
      this._cpu23 = undefined;
      this._cpu24 = undefined;
      this._cpu25 = undefined;
      this._cpu26 = undefined;
      this._cpu27 = undefined;
      this._cpu28 = undefined;
      this._cpu29 = undefined;
      this._cpu3 = undefined;
      this._cpu30 = undefined;
      this._cpu31 = undefined;
      this._cpu32 = undefined;
      this._cpu33 = undefined;
      this._cpu34 = undefined;
      this._cpu35 = undefined;
      this._cpu36 = undefined;
      this._cpu37 = undefined;
      this._cpu38 = undefined;
      this._cpu39 = undefined;
      this._cpu4 = undefined;
      this._cpu40 = undefined;
      this._cpu41 = undefined;
      this._cpu42 = undefined;
      this._cpu43 = undefined;
      this._cpu44 = undefined;
      this._cpu45 = undefined;
      this._cpu46 = undefined;
      this._cpu47 = undefined;
      this._cpu48 = undefined;
      this._cpu49 = undefined;
      this._cpu5 = undefined;
      this._cpu50 = undefined;
      this._cpu51 = undefined;
      this._cpu52 = undefined;
      this._cpu53 = undefined;
      this._cpu54 = undefined;
      this._cpu55 = undefined;
      this._cpu56 = undefined;
      this._cpu57 = undefined;
      this._cpu58 = undefined;
      this._cpu59 = undefined;
      this._cpu6 = undefined;
      this._cpu60 = undefined;
      this._cpu61 = undefined;
      this._cpu62 = undefined;
      this._cpu63 = undefined;
      this._cpu64 = undefined;
      this._cpu7 = undefined;
      this._cpu8 = undefined;
      this._cpu9 = undefined;
      this._ctrlCpuNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu1 = value.cpu1;
      this._cpu10 = value.cpu10;
      this._cpu11 = value.cpu11;
      this._cpu12 = value.cpu12;
      this._cpu13 = value.cpu13;
      this._cpu14 = value.cpu14;
      this._cpu15 = value.cpu15;
      this._cpu16 = value.cpu16;
      this._cpu17 = value.cpu17;
      this._cpu18 = value.cpu18;
      this._cpu19 = value.cpu19;
      this._cpu2 = value.cpu2;
      this._cpu20 = value.cpu20;
      this._cpu21 = value.cpu21;
      this._cpu22 = value.cpu22;
      this._cpu23 = value.cpu23;
      this._cpu24 = value.cpu24;
      this._cpu25 = value.cpu25;
      this._cpu26 = value.cpu26;
      this._cpu27 = value.cpu27;
      this._cpu28 = value.cpu28;
      this._cpu29 = value.cpu29;
      this._cpu3 = value.cpu3;
      this._cpu30 = value.cpu30;
      this._cpu31 = value.cpu31;
      this._cpu32 = value.cpu32;
      this._cpu33 = value.cpu33;
      this._cpu34 = value.cpu34;
      this._cpu35 = value.cpu35;
      this._cpu36 = value.cpu36;
      this._cpu37 = value.cpu37;
      this._cpu38 = value.cpu38;
      this._cpu39 = value.cpu39;
      this._cpu4 = value.cpu4;
      this._cpu40 = value.cpu40;
      this._cpu41 = value.cpu41;
      this._cpu42 = value.cpu42;
      this._cpu43 = value.cpu43;
      this._cpu44 = value.cpu44;
      this._cpu45 = value.cpu45;
      this._cpu46 = value.cpu46;
      this._cpu47 = value.cpu47;
      this._cpu48 = value.cpu48;
      this._cpu49 = value.cpu49;
      this._cpu5 = value.cpu5;
      this._cpu50 = value.cpu50;
      this._cpu51 = value.cpu51;
      this._cpu52 = value.cpu52;
      this._cpu53 = value.cpu53;
      this._cpu54 = value.cpu54;
      this._cpu55 = value.cpu55;
      this._cpu56 = value.cpu56;
      this._cpu57 = value.cpu57;
      this._cpu58 = value.cpu58;
      this._cpu59 = value.cpu59;
      this._cpu6 = value.cpu6;
      this._cpu60 = value.cpu60;
      this._cpu61 = value.cpu61;
      this._cpu62 = value.cpu62;
      this._cpu63 = value.cpu63;
      this._cpu64 = value.cpu64;
      this._cpu7 = value.cpu7;
      this._cpu8 = value.cpu8;
      this._cpu9 = value.cpu9;
      this._ctrlCpuNumber = value.ctrlCpuNumber;
    }
  }

  // cpu_1 - computed: false, optional: true, required: false
  private _cpu1?: number; 
  public get cpu1() {
    return this.getNumberAttribute('cpu_1');
  }
  public set cpu1(value: number) {
    this._cpu1 = value;
  }
  public resetCpu1() {
    this._cpu1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu1Input() {
    return this._cpu1;
  }

  // cpu_10 - computed: false, optional: true, required: false
  private _cpu10?: number; 
  public get cpu10() {
    return this.getNumberAttribute('cpu_10');
  }
  public set cpu10(value: number) {
    this._cpu10 = value;
  }
  public resetCpu10() {
    this._cpu10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu10Input() {
    return this._cpu10;
  }

  // cpu_11 - computed: false, optional: true, required: false
  private _cpu11?: number; 
  public get cpu11() {
    return this.getNumberAttribute('cpu_11');
  }
  public set cpu11(value: number) {
    this._cpu11 = value;
  }
  public resetCpu11() {
    this._cpu11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu11Input() {
    return this._cpu11;
  }

  // cpu_12 - computed: false, optional: true, required: false
  private _cpu12?: number; 
  public get cpu12() {
    return this.getNumberAttribute('cpu_12');
  }
  public set cpu12(value: number) {
    this._cpu12 = value;
  }
  public resetCpu12() {
    this._cpu12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu12Input() {
    return this._cpu12;
  }

  // cpu_13 - computed: false, optional: true, required: false
  private _cpu13?: number; 
  public get cpu13() {
    return this.getNumberAttribute('cpu_13');
  }
  public set cpu13(value: number) {
    this._cpu13 = value;
  }
  public resetCpu13() {
    this._cpu13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu13Input() {
    return this._cpu13;
  }

  // cpu_14 - computed: false, optional: true, required: false
  private _cpu14?: number; 
  public get cpu14() {
    return this.getNumberAttribute('cpu_14');
  }
  public set cpu14(value: number) {
    this._cpu14 = value;
  }
  public resetCpu14() {
    this._cpu14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu14Input() {
    return this._cpu14;
  }

  // cpu_15 - computed: false, optional: true, required: false
  private _cpu15?: number; 
  public get cpu15() {
    return this.getNumberAttribute('cpu_15');
  }
  public set cpu15(value: number) {
    this._cpu15 = value;
  }
  public resetCpu15() {
    this._cpu15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu15Input() {
    return this._cpu15;
  }

  // cpu_16 - computed: false, optional: true, required: false
  private _cpu16?: number; 
  public get cpu16() {
    return this.getNumberAttribute('cpu_16');
  }
  public set cpu16(value: number) {
    this._cpu16 = value;
  }
  public resetCpu16() {
    this._cpu16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu16Input() {
    return this._cpu16;
  }

  // cpu_17 - computed: false, optional: true, required: false
  private _cpu17?: number; 
  public get cpu17() {
    return this.getNumberAttribute('cpu_17');
  }
  public set cpu17(value: number) {
    this._cpu17 = value;
  }
  public resetCpu17() {
    this._cpu17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu17Input() {
    return this._cpu17;
  }

  // cpu_18 - computed: false, optional: true, required: false
  private _cpu18?: number; 
  public get cpu18() {
    return this.getNumberAttribute('cpu_18');
  }
  public set cpu18(value: number) {
    this._cpu18 = value;
  }
  public resetCpu18() {
    this._cpu18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu18Input() {
    return this._cpu18;
  }

  // cpu_19 - computed: false, optional: true, required: false
  private _cpu19?: number; 
  public get cpu19() {
    return this.getNumberAttribute('cpu_19');
  }
  public set cpu19(value: number) {
    this._cpu19 = value;
  }
  public resetCpu19() {
    this._cpu19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu19Input() {
    return this._cpu19;
  }

  // cpu_2 - computed: false, optional: true, required: false
  private _cpu2?: number; 
  public get cpu2() {
    return this.getNumberAttribute('cpu_2');
  }
  public set cpu2(value: number) {
    this._cpu2 = value;
  }
  public resetCpu2() {
    this._cpu2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu2Input() {
    return this._cpu2;
  }

  // cpu_20 - computed: false, optional: true, required: false
  private _cpu20?: number; 
  public get cpu20() {
    return this.getNumberAttribute('cpu_20');
  }
  public set cpu20(value: number) {
    this._cpu20 = value;
  }
  public resetCpu20() {
    this._cpu20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu20Input() {
    return this._cpu20;
  }

  // cpu_21 - computed: false, optional: true, required: false
  private _cpu21?: number; 
  public get cpu21() {
    return this.getNumberAttribute('cpu_21');
  }
  public set cpu21(value: number) {
    this._cpu21 = value;
  }
  public resetCpu21() {
    this._cpu21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu21Input() {
    return this._cpu21;
  }

  // cpu_22 - computed: false, optional: true, required: false
  private _cpu22?: number; 
  public get cpu22() {
    return this.getNumberAttribute('cpu_22');
  }
  public set cpu22(value: number) {
    this._cpu22 = value;
  }
  public resetCpu22() {
    this._cpu22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu22Input() {
    return this._cpu22;
  }

  // cpu_23 - computed: false, optional: true, required: false
  private _cpu23?: number; 
  public get cpu23() {
    return this.getNumberAttribute('cpu_23');
  }
  public set cpu23(value: number) {
    this._cpu23 = value;
  }
  public resetCpu23() {
    this._cpu23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu23Input() {
    return this._cpu23;
  }

  // cpu_24 - computed: false, optional: true, required: false
  private _cpu24?: number; 
  public get cpu24() {
    return this.getNumberAttribute('cpu_24');
  }
  public set cpu24(value: number) {
    this._cpu24 = value;
  }
  public resetCpu24() {
    this._cpu24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu24Input() {
    return this._cpu24;
  }

  // cpu_25 - computed: false, optional: true, required: false
  private _cpu25?: number; 
  public get cpu25() {
    return this.getNumberAttribute('cpu_25');
  }
  public set cpu25(value: number) {
    this._cpu25 = value;
  }
  public resetCpu25() {
    this._cpu25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu25Input() {
    return this._cpu25;
  }

  // cpu_26 - computed: false, optional: true, required: false
  private _cpu26?: number; 
  public get cpu26() {
    return this.getNumberAttribute('cpu_26');
  }
  public set cpu26(value: number) {
    this._cpu26 = value;
  }
  public resetCpu26() {
    this._cpu26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu26Input() {
    return this._cpu26;
  }

  // cpu_27 - computed: false, optional: true, required: false
  private _cpu27?: number; 
  public get cpu27() {
    return this.getNumberAttribute('cpu_27');
  }
  public set cpu27(value: number) {
    this._cpu27 = value;
  }
  public resetCpu27() {
    this._cpu27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu27Input() {
    return this._cpu27;
  }

  // cpu_28 - computed: false, optional: true, required: false
  private _cpu28?: number; 
  public get cpu28() {
    return this.getNumberAttribute('cpu_28');
  }
  public set cpu28(value: number) {
    this._cpu28 = value;
  }
  public resetCpu28() {
    this._cpu28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu28Input() {
    return this._cpu28;
  }

  // cpu_29 - computed: false, optional: true, required: false
  private _cpu29?: number; 
  public get cpu29() {
    return this.getNumberAttribute('cpu_29');
  }
  public set cpu29(value: number) {
    this._cpu29 = value;
  }
  public resetCpu29() {
    this._cpu29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu29Input() {
    return this._cpu29;
  }

  // cpu_3 - computed: false, optional: true, required: false
  private _cpu3?: number; 
  public get cpu3() {
    return this.getNumberAttribute('cpu_3');
  }
  public set cpu3(value: number) {
    this._cpu3 = value;
  }
  public resetCpu3() {
    this._cpu3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu3Input() {
    return this._cpu3;
  }

  // cpu_30 - computed: false, optional: true, required: false
  private _cpu30?: number; 
  public get cpu30() {
    return this.getNumberAttribute('cpu_30');
  }
  public set cpu30(value: number) {
    this._cpu30 = value;
  }
  public resetCpu30() {
    this._cpu30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu30Input() {
    return this._cpu30;
  }

  // cpu_31 - computed: false, optional: true, required: false
  private _cpu31?: number; 
  public get cpu31() {
    return this.getNumberAttribute('cpu_31');
  }
  public set cpu31(value: number) {
    this._cpu31 = value;
  }
  public resetCpu31() {
    this._cpu31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu31Input() {
    return this._cpu31;
  }

  // cpu_32 - computed: false, optional: true, required: false
  private _cpu32?: number; 
  public get cpu32() {
    return this.getNumberAttribute('cpu_32');
  }
  public set cpu32(value: number) {
    this._cpu32 = value;
  }
  public resetCpu32() {
    this._cpu32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu32Input() {
    return this._cpu32;
  }

  // cpu_33 - computed: false, optional: true, required: false
  private _cpu33?: number; 
  public get cpu33() {
    return this.getNumberAttribute('cpu_33');
  }
  public set cpu33(value: number) {
    this._cpu33 = value;
  }
  public resetCpu33() {
    this._cpu33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu33Input() {
    return this._cpu33;
  }

  // cpu_34 - computed: false, optional: true, required: false
  private _cpu34?: number; 
  public get cpu34() {
    return this.getNumberAttribute('cpu_34');
  }
  public set cpu34(value: number) {
    this._cpu34 = value;
  }
  public resetCpu34() {
    this._cpu34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu34Input() {
    return this._cpu34;
  }

  // cpu_35 - computed: false, optional: true, required: false
  private _cpu35?: number; 
  public get cpu35() {
    return this.getNumberAttribute('cpu_35');
  }
  public set cpu35(value: number) {
    this._cpu35 = value;
  }
  public resetCpu35() {
    this._cpu35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu35Input() {
    return this._cpu35;
  }

  // cpu_36 - computed: false, optional: true, required: false
  private _cpu36?: number; 
  public get cpu36() {
    return this.getNumberAttribute('cpu_36');
  }
  public set cpu36(value: number) {
    this._cpu36 = value;
  }
  public resetCpu36() {
    this._cpu36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu36Input() {
    return this._cpu36;
  }

  // cpu_37 - computed: false, optional: true, required: false
  private _cpu37?: number; 
  public get cpu37() {
    return this.getNumberAttribute('cpu_37');
  }
  public set cpu37(value: number) {
    this._cpu37 = value;
  }
  public resetCpu37() {
    this._cpu37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu37Input() {
    return this._cpu37;
  }

  // cpu_38 - computed: false, optional: true, required: false
  private _cpu38?: number; 
  public get cpu38() {
    return this.getNumberAttribute('cpu_38');
  }
  public set cpu38(value: number) {
    this._cpu38 = value;
  }
  public resetCpu38() {
    this._cpu38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu38Input() {
    return this._cpu38;
  }

  // cpu_39 - computed: false, optional: true, required: false
  private _cpu39?: number; 
  public get cpu39() {
    return this.getNumberAttribute('cpu_39');
  }
  public set cpu39(value: number) {
    this._cpu39 = value;
  }
  public resetCpu39() {
    this._cpu39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu39Input() {
    return this._cpu39;
  }

  // cpu_4 - computed: false, optional: true, required: false
  private _cpu4?: number; 
  public get cpu4() {
    return this.getNumberAttribute('cpu_4');
  }
  public set cpu4(value: number) {
    this._cpu4 = value;
  }
  public resetCpu4() {
    this._cpu4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu4Input() {
    return this._cpu4;
  }

  // cpu_40 - computed: false, optional: true, required: false
  private _cpu40?: number; 
  public get cpu40() {
    return this.getNumberAttribute('cpu_40');
  }
  public set cpu40(value: number) {
    this._cpu40 = value;
  }
  public resetCpu40() {
    this._cpu40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu40Input() {
    return this._cpu40;
  }

  // cpu_41 - computed: false, optional: true, required: false
  private _cpu41?: number; 
  public get cpu41() {
    return this.getNumberAttribute('cpu_41');
  }
  public set cpu41(value: number) {
    this._cpu41 = value;
  }
  public resetCpu41() {
    this._cpu41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu41Input() {
    return this._cpu41;
  }

  // cpu_42 - computed: false, optional: true, required: false
  private _cpu42?: number; 
  public get cpu42() {
    return this.getNumberAttribute('cpu_42');
  }
  public set cpu42(value: number) {
    this._cpu42 = value;
  }
  public resetCpu42() {
    this._cpu42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu42Input() {
    return this._cpu42;
  }

  // cpu_43 - computed: false, optional: true, required: false
  private _cpu43?: number; 
  public get cpu43() {
    return this.getNumberAttribute('cpu_43');
  }
  public set cpu43(value: number) {
    this._cpu43 = value;
  }
  public resetCpu43() {
    this._cpu43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu43Input() {
    return this._cpu43;
  }

  // cpu_44 - computed: false, optional: true, required: false
  private _cpu44?: number; 
  public get cpu44() {
    return this.getNumberAttribute('cpu_44');
  }
  public set cpu44(value: number) {
    this._cpu44 = value;
  }
  public resetCpu44() {
    this._cpu44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu44Input() {
    return this._cpu44;
  }

  // cpu_45 - computed: false, optional: true, required: false
  private _cpu45?: number; 
  public get cpu45() {
    return this.getNumberAttribute('cpu_45');
  }
  public set cpu45(value: number) {
    this._cpu45 = value;
  }
  public resetCpu45() {
    this._cpu45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu45Input() {
    return this._cpu45;
  }

  // cpu_46 - computed: false, optional: true, required: false
  private _cpu46?: number; 
  public get cpu46() {
    return this.getNumberAttribute('cpu_46');
  }
  public set cpu46(value: number) {
    this._cpu46 = value;
  }
  public resetCpu46() {
    this._cpu46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu46Input() {
    return this._cpu46;
  }

  // cpu_47 - computed: false, optional: true, required: false
  private _cpu47?: number; 
  public get cpu47() {
    return this.getNumberAttribute('cpu_47');
  }
  public set cpu47(value: number) {
    this._cpu47 = value;
  }
  public resetCpu47() {
    this._cpu47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu47Input() {
    return this._cpu47;
  }

  // cpu_48 - computed: false, optional: true, required: false
  private _cpu48?: number; 
  public get cpu48() {
    return this.getNumberAttribute('cpu_48');
  }
  public set cpu48(value: number) {
    this._cpu48 = value;
  }
  public resetCpu48() {
    this._cpu48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu48Input() {
    return this._cpu48;
  }

  // cpu_49 - computed: false, optional: true, required: false
  private _cpu49?: number; 
  public get cpu49() {
    return this.getNumberAttribute('cpu_49');
  }
  public set cpu49(value: number) {
    this._cpu49 = value;
  }
  public resetCpu49() {
    this._cpu49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu49Input() {
    return this._cpu49;
  }

  // cpu_5 - computed: false, optional: true, required: false
  private _cpu5?: number; 
  public get cpu5() {
    return this.getNumberAttribute('cpu_5');
  }
  public set cpu5(value: number) {
    this._cpu5 = value;
  }
  public resetCpu5() {
    this._cpu5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu5Input() {
    return this._cpu5;
  }

  // cpu_50 - computed: false, optional: true, required: false
  private _cpu50?: number; 
  public get cpu50() {
    return this.getNumberAttribute('cpu_50');
  }
  public set cpu50(value: number) {
    this._cpu50 = value;
  }
  public resetCpu50() {
    this._cpu50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu50Input() {
    return this._cpu50;
  }

  // cpu_51 - computed: false, optional: true, required: false
  private _cpu51?: number; 
  public get cpu51() {
    return this.getNumberAttribute('cpu_51');
  }
  public set cpu51(value: number) {
    this._cpu51 = value;
  }
  public resetCpu51() {
    this._cpu51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu51Input() {
    return this._cpu51;
  }

  // cpu_52 - computed: false, optional: true, required: false
  private _cpu52?: number; 
  public get cpu52() {
    return this.getNumberAttribute('cpu_52');
  }
  public set cpu52(value: number) {
    this._cpu52 = value;
  }
  public resetCpu52() {
    this._cpu52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu52Input() {
    return this._cpu52;
  }

  // cpu_53 - computed: false, optional: true, required: false
  private _cpu53?: number; 
  public get cpu53() {
    return this.getNumberAttribute('cpu_53');
  }
  public set cpu53(value: number) {
    this._cpu53 = value;
  }
  public resetCpu53() {
    this._cpu53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu53Input() {
    return this._cpu53;
  }

  // cpu_54 - computed: false, optional: true, required: false
  private _cpu54?: number; 
  public get cpu54() {
    return this.getNumberAttribute('cpu_54');
  }
  public set cpu54(value: number) {
    this._cpu54 = value;
  }
  public resetCpu54() {
    this._cpu54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu54Input() {
    return this._cpu54;
  }

  // cpu_55 - computed: false, optional: true, required: false
  private _cpu55?: number; 
  public get cpu55() {
    return this.getNumberAttribute('cpu_55');
  }
  public set cpu55(value: number) {
    this._cpu55 = value;
  }
  public resetCpu55() {
    this._cpu55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu55Input() {
    return this._cpu55;
  }

  // cpu_56 - computed: false, optional: true, required: false
  private _cpu56?: number; 
  public get cpu56() {
    return this.getNumberAttribute('cpu_56');
  }
  public set cpu56(value: number) {
    this._cpu56 = value;
  }
  public resetCpu56() {
    this._cpu56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu56Input() {
    return this._cpu56;
  }

  // cpu_57 - computed: false, optional: true, required: false
  private _cpu57?: number; 
  public get cpu57() {
    return this.getNumberAttribute('cpu_57');
  }
  public set cpu57(value: number) {
    this._cpu57 = value;
  }
  public resetCpu57() {
    this._cpu57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu57Input() {
    return this._cpu57;
  }

  // cpu_58 - computed: false, optional: true, required: false
  private _cpu58?: number; 
  public get cpu58() {
    return this.getNumberAttribute('cpu_58');
  }
  public set cpu58(value: number) {
    this._cpu58 = value;
  }
  public resetCpu58() {
    this._cpu58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu58Input() {
    return this._cpu58;
  }

  // cpu_59 - computed: false, optional: true, required: false
  private _cpu59?: number; 
  public get cpu59() {
    return this.getNumberAttribute('cpu_59');
  }
  public set cpu59(value: number) {
    this._cpu59 = value;
  }
  public resetCpu59() {
    this._cpu59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu59Input() {
    return this._cpu59;
  }

  // cpu_6 - computed: false, optional: true, required: false
  private _cpu6?: number; 
  public get cpu6() {
    return this.getNumberAttribute('cpu_6');
  }
  public set cpu6(value: number) {
    this._cpu6 = value;
  }
  public resetCpu6() {
    this._cpu6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu6Input() {
    return this._cpu6;
  }

  // cpu_60 - computed: false, optional: true, required: false
  private _cpu60?: number; 
  public get cpu60() {
    return this.getNumberAttribute('cpu_60');
  }
  public set cpu60(value: number) {
    this._cpu60 = value;
  }
  public resetCpu60() {
    this._cpu60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu60Input() {
    return this._cpu60;
  }

  // cpu_61 - computed: false, optional: true, required: false
  private _cpu61?: number; 
  public get cpu61() {
    return this.getNumberAttribute('cpu_61');
  }
  public set cpu61(value: number) {
    this._cpu61 = value;
  }
  public resetCpu61() {
    this._cpu61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu61Input() {
    return this._cpu61;
  }

  // cpu_62 - computed: false, optional: true, required: false
  private _cpu62?: number; 
  public get cpu62() {
    return this.getNumberAttribute('cpu_62');
  }
  public set cpu62(value: number) {
    this._cpu62 = value;
  }
  public resetCpu62() {
    this._cpu62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu62Input() {
    return this._cpu62;
  }

  // cpu_63 - computed: false, optional: true, required: false
  private _cpu63?: number; 
  public get cpu63() {
    return this.getNumberAttribute('cpu_63');
  }
  public set cpu63(value: number) {
    this._cpu63 = value;
  }
  public resetCpu63() {
    this._cpu63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu63Input() {
    return this._cpu63;
  }

  // cpu_64 - computed: false, optional: true, required: false
  private _cpu64?: number; 
  public get cpu64() {
    return this.getNumberAttribute('cpu_64');
  }
  public set cpu64(value: number) {
    this._cpu64 = value;
  }
  public resetCpu64() {
    this._cpu64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu64Input() {
    return this._cpu64;
  }

  // cpu_7 - computed: false, optional: true, required: false
  private _cpu7?: number; 
  public get cpu7() {
    return this.getNumberAttribute('cpu_7');
  }
  public set cpu7(value: number) {
    this._cpu7 = value;
  }
  public resetCpu7() {
    this._cpu7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu7Input() {
    return this._cpu7;
  }

  // cpu_8 - computed: false, optional: true, required: false
  private _cpu8?: number; 
  public get cpu8() {
    return this.getNumberAttribute('cpu_8');
  }
  public set cpu8(value: number) {
    this._cpu8 = value;
  }
  public resetCpu8() {
    this._cpu8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu8Input() {
    return this._cpu8;
  }

  // cpu_9 - computed: false, optional: true, required: false
  private _cpu9?: number; 
  public get cpu9() {
    return this.getNumberAttribute('cpu_9');
  }
  public set cpu9(value: number) {
    this._cpu9 = value;
  }
  public resetCpu9() {
    this._cpu9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu9Input() {
    return this._cpu9;
  }

  // ctrl_cpu_number - computed: false, optional: true, required: false
  private _ctrlCpuNumber?: number; 
  public get ctrlCpuNumber() {
    return this.getNumberAttribute('ctrl_cpu_number');
  }
  public set ctrlCpuNumber(value: number) {
    this._ctrlCpuNumber = value;
  }
  public resetCtrlCpuNumber() {
    this._ctrlCpuNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCpuNumberInput() {
    return this._ctrlCpuNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats thunder_system_control_cpu_stats}
*/
export class DataThunderSystemControlCpuStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_control_cpu_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemControlCpuStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemControlCpuStats to import
  * @param importFromId The id of the existing DataThunderSystemControlCpuStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemControlCpuStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_control_cpu_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_control_cpu_stats thunder_system_control_cpu_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemControlCpuStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemControlCpuStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_control_cpu_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemControlCpuStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemControlCpuStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSystemControlCpuStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSystemControlCpuStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemControlCpuStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
