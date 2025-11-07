// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#id DataThunderRuleSetStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#name DataThunderRuleSetStats#name}
  */
  readonly name: string;
  /**
  * app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#app DataThunderRuleSetStats#app}
  */
  readonly app?: DataThunderRuleSetStatsApp;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#rule_list DataThunderRuleSetStats#rule_list}
  */
  readonly ruleList?: DataThunderRuleSetStatsRuleListStruct[] | cdktf.IResolvable;
  /**
  * rules_by_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#rules_by_zone DataThunderRuleSetStats#rules_by_zone}
  */
  readonly rulesByZone?: DataThunderRuleSetStatsRulesByZone;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsStats;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#tag DataThunderRuleSetStats#tag}
  */
  readonly tag?: DataThunderRuleSetStatsTag;
  /**
  * track_app_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#track_app_rule_list DataThunderRuleSetStats#track_app_rule_list}
  */
  readonly trackAppRuleList?: DataThunderRuleSetStatsTrackAppRuleListStruct;
}
export interface DataThunderRuleSetStatsAppStats {
  /**
  * counter app stat 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat1 DataThunderRuleSetStats#appstat1}
  */
  readonly appstat1?: number;
  /**
  * counter app stat 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat10 DataThunderRuleSetStats#appstat10}
  */
  readonly appstat10?: number;
  /**
  * counter app stat 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat100 DataThunderRuleSetStats#appstat100}
  */
  readonly appstat100?: number;
  /**
  * counter app stat 101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat101 DataThunderRuleSetStats#appstat101}
  */
  readonly appstat101?: number;
  /**
  * counter app stat 102
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat102 DataThunderRuleSetStats#appstat102}
  */
  readonly appstat102?: number;
  /**
  * counter app stat 103
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat103 DataThunderRuleSetStats#appstat103}
  */
  readonly appstat103?: number;
  /**
  * counter app stat 104
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat104 DataThunderRuleSetStats#appstat104}
  */
  readonly appstat104?: number;
  /**
  * counter app stat 105
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat105 DataThunderRuleSetStats#appstat105}
  */
  readonly appstat105?: number;
  /**
  * counter app stat 106
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat106 DataThunderRuleSetStats#appstat106}
  */
  readonly appstat106?: number;
  /**
  * counter app stat 107
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat107 DataThunderRuleSetStats#appstat107}
  */
  readonly appstat107?: number;
  /**
  * counter app stat 108
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat108 DataThunderRuleSetStats#appstat108}
  */
  readonly appstat108?: number;
  /**
  * counter app stat 109
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat109 DataThunderRuleSetStats#appstat109}
  */
  readonly appstat109?: number;
  /**
  * counter app stat 11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat11 DataThunderRuleSetStats#appstat11}
  */
  readonly appstat11?: number;
  /**
  * counter app stat 110
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat110 DataThunderRuleSetStats#appstat110}
  */
  readonly appstat110?: number;
  /**
  * counter app stat 111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat111 DataThunderRuleSetStats#appstat111}
  */
  readonly appstat111?: number;
  /**
  * counter app stat 112
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat112 DataThunderRuleSetStats#appstat112}
  */
  readonly appstat112?: number;
  /**
  * counter app stat 113
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat113 DataThunderRuleSetStats#appstat113}
  */
  readonly appstat113?: number;
  /**
  * counter app stat 114
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat114 DataThunderRuleSetStats#appstat114}
  */
  readonly appstat114?: number;
  /**
  * counter app stat 115
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat115 DataThunderRuleSetStats#appstat115}
  */
  readonly appstat115?: number;
  /**
  * counter app stat 116
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat116 DataThunderRuleSetStats#appstat116}
  */
  readonly appstat116?: number;
  /**
  * counter app stat 117
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat117 DataThunderRuleSetStats#appstat117}
  */
  readonly appstat117?: number;
  /**
  * counter app stat 118
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat118 DataThunderRuleSetStats#appstat118}
  */
  readonly appstat118?: number;
  /**
  * counter app stat 119
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat119 DataThunderRuleSetStats#appstat119}
  */
  readonly appstat119?: number;
  /**
  * counter app stat 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat12 DataThunderRuleSetStats#appstat12}
  */
  readonly appstat12?: number;
  /**
  * counter app stat 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat120 DataThunderRuleSetStats#appstat120}
  */
  readonly appstat120?: number;
  /**
  * counter app stat 121
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat121 DataThunderRuleSetStats#appstat121}
  */
  readonly appstat121?: number;
  /**
  * counter app stat 122
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat122 DataThunderRuleSetStats#appstat122}
  */
  readonly appstat122?: number;
  /**
  * counter app stat 123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat123 DataThunderRuleSetStats#appstat123}
  */
  readonly appstat123?: number;
  /**
  * counter app stat 124
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat124 DataThunderRuleSetStats#appstat124}
  */
  readonly appstat124?: number;
  /**
  * counter app stat 125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat125 DataThunderRuleSetStats#appstat125}
  */
  readonly appstat125?: number;
  /**
  * counter app stat 126
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat126 DataThunderRuleSetStats#appstat126}
  */
  readonly appstat126?: number;
  /**
  * counter app stat 127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat127 DataThunderRuleSetStats#appstat127}
  */
  readonly appstat127?: number;
  /**
  * counter app stat 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat128 DataThunderRuleSetStats#appstat128}
  */
  readonly appstat128?: number;
  /**
  * counter app stat 129
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat129 DataThunderRuleSetStats#appstat129}
  */
  readonly appstat129?: number;
  /**
  * counter app stat 13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat13 DataThunderRuleSetStats#appstat13}
  */
  readonly appstat13?: number;
  /**
  * counter app stat 130
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat130 DataThunderRuleSetStats#appstat130}
  */
  readonly appstat130?: number;
  /**
  * counter app stat 131
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat131 DataThunderRuleSetStats#appstat131}
  */
  readonly appstat131?: number;
  /**
  * counter app stat 132
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat132 DataThunderRuleSetStats#appstat132}
  */
  readonly appstat132?: number;
  /**
  * counter app stat 133
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat133 DataThunderRuleSetStats#appstat133}
  */
  readonly appstat133?: number;
  /**
  * counter app stat 134
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat134 DataThunderRuleSetStats#appstat134}
  */
  readonly appstat134?: number;
  /**
  * counter app stat 135
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat135 DataThunderRuleSetStats#appstat135}
  */
  readonly appstat135?: number;
  /**
  * counter app stat 136
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat136 DataThunderRuleSetStats#appstat136}
  */
  readonly appstat136?: number;
  /**
  * counter app stat 137
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat137 DataThunderRuleSetStats#appstat137}
  */
  readonly appstat137?: number;
  /**
  * counter app stat 138
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat138 DataThunderRuleSetStats#appstat138}
  */
  readonly appstat138?: number;
  /**
  * counter app stat 139
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat139 DataThunderRuleSetStats#appstat139}
  */
  readonly appstat139?: number;
  /**
  * counter app stat 14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat14 DataThunderRuleSetStats#appstat14}
  */
  readonly appstat14?: number;
  /**
  * counter app stat 140
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat140 DataThunderRuleSetStats#appstat140}
  */
  readonly appstat140?: number;
  /**
  * counter app stat 141
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat141 DataThunderRuleSetStats#appstat141}
  */
  readonly appstat141?: number;
  /**
  * counter app stat 142
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat142 DataThunderRuleSetStats#appstat142}
  */
  readonly appstat142?: number;
  /**
  * counter app stat 143
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat143 DataThunderRuleSetStats#appstat143}
  */
  readonly appstat143?: number;
  /**
  * counter app stat 144
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat144 DataThunderRuleSetStats#appstat144}
  */
  readonly appstat144?: number;
  /**
  * counter app stat 145
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat145 DataThunderRuleSetStats#appstat145}
  */
  readonly appstat145?: number;
  /**
  * counter app stat 146
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat146 DataThunderRuleSetStats#appstat146}
  */
  readonly appstat146?: number;
  /**
  * counter app stat 147
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat147 DataThunderRuleSetStats#appstat147}
  */
  readonly appstat147?: number;
  /**
  * counter app stat 148
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat148 DataThunderRuleSetStats#appstat148}
  */
  readonly appstat148?: number;
  /**
  * counter app stat 149
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat149 DataThunderRuleSetStats#appstat149}
  */
  readonly appstat149?: number;
  /**
  * counter app stat 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat15 DataThunderRuleSetStats#appstat15}
  */
  readonly appstat15?: number;
  /**
  * counter app stat 150
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat150 DataThunderRuleSetStats#appstat150}
  */
  readonly appstat150?: number;
  /**
  * counter app stat 151
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat151 DataThunderRuleSetStats#appstat151}
  */
  readonly appstat151?: number;
  /**
  * counter app stat 152
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat152 DataThunderRuleSetStats#appstat152}
  */
  readonly appstat152?: number;
  /**
  * counter app stat 153
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat153 DataThunderRuleSetStats#appstat153}
  */
  readonly appstat153?: number;
  /**
  * counter app stat 154
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat154 DataThunderRuleSetStats#appstat154}
  */
  readonly appstat154?: number;
  /**
  * counter app stat 155
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat155 DataThunderRuleSetStats#appstat155}
  */
  readonly appstat155?: number;
  /**
  * counter app stat 156
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat156 DataThunderRuleSetStats#appstat156}
  */
  readonly appstat156?: number;
  /**
  * counter app stat 157
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat157 DataThunderRuleSetStats#appstat157}
  */
  readonly appstat157?: number;
  /**
  * counter app stat 158
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat158 DataThunderRuleSetStats#appstat158}
  */
  readonly appstat158?: number;
  /**
  * counter app stat 159
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat159 DataThunderRuleSetStats#appstat159}
  */
  readonly appstat159?: number;
  /**
  * counter app stat 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat16 DataThunderRuleSetStats#appstat16}
  */
  readonly appstat16?: number;
  /**
  * counter app stat 160
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat160 DataThunderRuleSetStats#appstat160}
  */
  readonly appstat160?: number;
  /**
  * counter app stat 161
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat161 DataThunderRuleSetStats#appstat161}
  */
  readonly appstat161?: number;
  /**
  * counter app stat 162
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat162 DataThunderRuleSetStats#appstat162}
  */
  readonly appstat162?: number;
  /**
  * counter app stat 163
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat163 DataThunderRuleSetStats#appstat163}
  */
  readonly appstat163?: number;
  /**
  * counter app stat 164
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat164 DataThunderRuleSetStats#appstat164}
  */
  readonly appstat164?: number;
  /**
  * counter app stat 165
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat165 DataThunderRuleSetStats#appstat165}
  */
  readonly appstat165?: number;
  /**
  * counter app stat 166
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat166 DataThunderRuleSetStats#appstat166}
  */
  readonly appstat166?: number;
  /**
  * counter app stat 167
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat167 DataThunderRuleSetStats#appstat167}
  */
  readonly appstat167?: number;
  /**
  * counter app stat 168
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat168 DataThunderRuleSetStats#appstat168}
  */
  readonly appstat168?: number;
  /**
  * counter app stat 169
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat169 DataThunderRuleSetStats#appstat169}
  */
  readonly appstat169?: number;
  /**
  * counter app stat 17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat17 DataThunderRuleSetStats#appstat17}
  */
  readonly appstat17?: number;
  /**
  * counter app stat 170
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat170 DataThunderRuleSetStats#appstat170}
  */
  readonly appstat170?: number;
  /**
  * counter app stat 171
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat171 DataThunderRuleSetStats#appstat171}
  */
  readonly appstat171?: number;
  /**
  * counter app stat 172
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat172 DataThunderRuleSetStats#appstat172}
  */
  readonly appstat172?: number;
  /**
  * counter app stat 173
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat173 DataThunderRuleSetStats#appstat173}
  */
  readonly appstat173?: number;
  /**
  * counter app stat 174
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat174 DataThunderRuleSetStats#appstat174}
  */
  readonly appstat174?: number;
  /**
  * counter app stat 175
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat175 DataThunderRuleSetStats#appstat175}
  */
  readonly appstat175?: number;
  /**
  * counter app stat 176
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat176 DataThunderRuleSetStats#appstat176}
  */
  readonly appstat176?: number;
  /**
  * counter app stat 177
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat177 DataThunderRuleSetStats#appstat177}
  */
  readonly appstat177?: number;
  /**
  * counter app stat 178
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat178 DataThunderRuleSetStats#appstat178}
  */
  readonly appstat178?: number;
  /**
  * counter app stat 179
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat179 DataThunderRuleSetStats#appstat179}
  */
  readonly appstat179?: number;
  /**
  * counter app stat 18
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat18 DataThunderRuleSetStats#appstat18}
  */
  readonly appstat18?: number;
  /**
  * counter app stat 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat180 DataThunderRuleSetStats#appstat180}
  */
  readonly appstat180?: number;
  /**
  * counter app stat 181
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat181 DataThunderRuleSetStats#appstat181}
  */
  readonly appstat181?: number;
  /**
  * counter app stat 182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat182 DataThunderRuleSetStats#appstat182}
  */
  readonly appstat182?: number;
  /**
  * counter app stat 183
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat183 DataThunderRuleSetStats#appstat183}
  */
  readonly appstat183?: number;
  /**
  * counter app stat 184
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat184 DataThunderRuleSetStats#appstat184}
  */
  readonly appstat184?: number;
  /**
  * counter app stat 185
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat185 DataThunderRuleSetStats#appstat185}
  */
  readonly appstat185?: number;
  /**
  * counter app stat 186
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat186 DataThunderRuleSetStats#appstat186}
  */
  readonly appstat186?: number;
  /**
  * counter app stat 187
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat187 DataThunderRuleSetStats#appstat187}
  */
  readonly appstat187?: number;
  /**
  * counter app stat 188
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat188 DataThunderRuleSetStats#appstat188}
  */
  readonly appstat188?: number;
  /**
  * counter app stat 189
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat189 DataThunderRuleSetStats#appstat189}
  */
  readonly appstat189?: number;
  /**
  * counter app stat 19
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat19 DataThunderRuleSetStats#appstat19}
  */
  readonly appstat19?: number;
  /**
  * counter app stat 190
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat190 DataThunderRuleSetStats#appstat190}
  */
  readonly appstat190?: number;
  /**
  * counter app stat 191
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat191 DataThunderRuleSetStats#appstat191}
  */
  readonly appstat191?: number;
  /**
  * counter app stat 192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat192 DataThunderRuleSetStats#appstat192}
  */
  readonly appstat192?: number;
  /**
  * counter app stat 193
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat193 DataThunderRuleSetStats#appstat193}
  */
  readonly appstat193?: number;
  /**
  * counter app stat 194
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat194 DataThunderRuleSetStats#appstat194}
  */
  readonly appstat194?: number;
  /**
  * counter app stat 195
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat195 DataThunderRuleSetStats#appstat195}
  */
  readonly appstat195?: number;
  /**
  * counter app stat 196
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat196 DataThunderRuleSetStats#appstat196}
  */
  readonly appstat196?: number;
  /**
  * counter app stat 197
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat197 DataThunderRuleSetStats#appstat197}
  */
  readonly appstat197?: number;
  /**
  * counter app stat 198
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat198 DataThunderRuleSetStats#appstat198}
  */
  readonly appstat198?: number;
  /**
  * counter app stat 199
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat199 DataThunderRuleSetStats#appstat199}
  */
  readonly appstat199?: number;
  /**
  * counter app stat 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat2 DataThunderRuleSetStats#appstat2}
  */
  readonly appstat2?: number;
  /**
  * counter app stat 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat20 DataThunderRuleSetStats#appstat20}
  */
  readonly appstat20?: number;
  /**
  * counter app stat 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat200 DataThunderRuleSetStats#appstat200}
  */
  readonly appstat200?: number;
  /**
  * counter app stat 201
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat201 DataThunderRuleSetStats#appstat201}
  */
  readonly appstat201?: number;
  /**
  * counter app stat 202
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat202 DataThunderRuleSetStats#appstat202}
  */
  readonly appstat202?: number;
  /**
  * counter app stat 203
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat203 DataThunderRuleSetStats#appstat203}
  */
  readonly appstat203?: number;
  /**
  * counter app stat 204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat204 DataThunderRuleSetStats#appstat204}
  */
  readonly appstat204?: number;
  /**
  * counter app stat 205
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat205 DataThunderRuleSetStats#appstat205}
  */
  readonly appstat205?: number;
  /**
  * counter app stat 206
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat206 DataThunderRuleSetStats#appstat206}
  */
  readonly appstat206?: number;
  /**
  * counter app stat 207
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat207 DataThunderRuleSetStats#appstat207}
  */
  readonly appstat207?: number;
  /**
  * counter app stat 208
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat208 DataThunderRuleSetStats#appstat208}
  */
  readonly appstat208?: number;
  /**
  * counter app stat 209
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat209 DataThunderRuleSetStats#appstat209}
  */
  readonly appstat209?: number;
  /**
  * counter app stat 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat21 DataThunderRuleSetStats#appstat21}
  */
  readonly appstat21?: number;
  /**
  * counter app stat 210
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat210 DataThunderRuleSetStats#appstat210}
  */
  readonly appstat210?: number;
  /**
  * counter app stat 211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat211 DataThunderRuleSetStats#appstat211}
  */
  readonly appstat211?: number;
  /**
  * counter app stat 212
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat212 DataThunderRuleSetStats#appstat212}
  */
  readonly appstat212?: number;
  /**
  * counter app stat 213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat213 DataThunderRuleSetStats#appstat213}
  */
  readonly appstat213?: number;
  /**
  * counter app stat 214
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat214 DataThunderRuleSetStats#appstat214}
  */
  readonly appstat214?: number;
  /**
  * counter app stat 215
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat215 DataThunderRuleSetStats#appstat215}
  */
  readonly appstat215?: number;
  /**
  * counter app stat 216
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat216 DataThunderRuleSetStats#appstat216}
  */
  readonly appstat216?: number;
  /**
  * counter app stat 217
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat217 DataThunderRuleSetStats#appstat217}
  */
  readonly appstat217?: number;
  /**
  * counter app stat 218
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat218 DataThunderRuleSetStats#appstat218}
  */
  readonly appstat218?: number;
  /**
  * counter app stat 219
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat219 DataThunderRuleSetStats#appstat219}
  */
  readonly appstat219?: number;
  /**
  * counter app stat 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat22 DataThunderRuleSetStats#appstat22}
  */
  readonly appstat22?: number;
  /**
  * counter app stat 220
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat220 DataThunderRuleSetStats#appstat220}
  */
  readonly appstat220?: number;
  /**
  * counter app stat 221
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat221 DataThunderRuleSetStats#appstat221}
  */
  readonly appstat221?: number;
  /**
  * counter app stat 222
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat222 DataThunderRuleSetStats#appstat222}
  */
  readonly appstat222?: number;
  /**
  * counter app stat 223
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat223 DataThunderRuleSetStats#appstat223}
  */
  readonly appstat223?: number;
  /**
  * counter app stat 224
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat224 DataThunderRuleSetStats#appstat224}
  */
  readonly appstat224?: number;
  /**
  * counter app stat 225
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat225 DataThunderRuleSetStats#appstat225}
  */
  readonly appstat225?: number;
  /**
  * counter app stat 226
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat226 DataThunderRuleSetStats#appstat226}
  */
  readonly appstat226?: number;
  /**
  * counter app stat 227
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat227 DataThunderRuleSetStats#appstat227}
  */
  readonly appstat227?: number;
  /**
  * counter app stat 228
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat228 DataThunderRuleSetStats#appstat228}
  */
  readonly appstat228?: number;
  /**
  * counter app stat 229
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat229 DataThunderRuleSetStats#appstat229}
  */
  readonly appstat229?: number;
  /**
  * counter app stat 23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat23 DataThunderRuleSetStats#appstat23}
  */
  readonly appstat23?: number;
  /**
  * counter app stat 230
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat230 DataThunderRuleSetStats#appstat230}
  */
  readonly appstat230?: number;
  /**
  * counter app stat 231
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat231 DataThunderRuleSetStats#appstat231}
  */
  readonly appstat231?: number;
  /**
  * counter app stat 232
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat232 DataThunderRuleSetStats#appstat232}
  */
  readonly appstat232?: number;
  /**
  * counter app stat 233
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat233 DataThunderRuleSetStats#appstat233}
  */
  readonly appstat233?: number;
  /**
  * counter app stat 234
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat234 DataThunderRuleSetStats#appstat234}
  */
  readonly appstat234?: number;
  /**
  * counter app stat 235
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat235 DataThunderRuleSetStats#appstat235}
  */
  readonly appstat235?: number;
  /**
  * counter app stat 236
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat236 DataThunderRuleSetStats#appstat236}
  */
  readonly appstat236?: number;
  /**
  * counter app stat 237
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat237 DataThunderRuleSetStats#appstat237}
  */
  readonly appstat237?: number;
  /**
  * counter app stat 238
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat238 DataThunderRuleSetStats#appstat238}
  */
  readonly appstat238?: number;
  /**
  * counter app stat 239
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat239 DataThunderRuleSetStats#appstat239}
  */
  readonly appstat239?: number;
  /**
  * counter app stat 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat24 DataThunderRuleSetStats#appstat24}
  */
  readonly appstat24?: number;
  /**
  * counter app stat 240
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat240 DataThunderRuleSetStats#appstat240}
  */
  readonly appstat240?: number;
  /**
  * counter app stat 241
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat241 DataThunderRuleSetStats#appstat241}
  */
  readonly appstat241?: number;
  /**
  * counter app stat 242
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat242 DataThunderRuleSetStats#appstat242}
  */
  readonly appstat242?: number;
  /**
  * counter app stat 243
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat243 DataThunderRuleSetStats#appstat243}
  */
  readonly appstat243?: number;
  /**
  * counter app stat 244
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat244 DataThunderRuleSetStats#appstat244}
  */
  readonly appstat244?: number;
  /**
  * counter app stat 245
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat245 DataThunderRuleSetStats#appstat245}
  */
  readonly appstat245?: number;
  /**
  * counter app stat 246
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat246 DataThunderRuleSetStats#appstat246}
  */
  readonly appstat246?: number;
  /**
  * counter app stat 247
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat247 DataThunderRuleSetStats#appstat247}
  */
  readonly appstat247?: number;
  /**
  * counter app stat 248
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat248 DataThunderRuleSetStats#appstat248}
  */
  readonly appstat248?: number;
  /**
  * counter app stat 249
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat249 DataThunderRuleSetStats#appstat249}
  */
  readonly appstat249?: number;
  /**
  * counter app stat 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat25 DataThunderRuleSetStats#appstat25}
  */
  readonly appstat25?: number;
  /**
  * counter app stat 250
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat250 DataThunderRuleSetStats#appstat250}
  */
  readonly appstat250?: number;
  /**
  * counter app stat 251
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat251 DataThunderRuleSetStats#appstat251}
  */
  readonly appstat251?: number;
  /**
  * counter app stat 252
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat252 DataThunderRuleSetStats#appstat252}
  */
  readonly appstat252?: number;
  /**
  * counter app stat 253
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat253 DataThunderRuleSetStats#appstat253}
  */
  readonly appstat253?: number;
  /**
  * counter app stat 254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat254 DataThunderRuleSetStats#appstat254}
  */
  readonly appstat254?: number;
  /**
  * counter app stat 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat255 DataThunderRuleSetStats#appstat255}
  */
  readonly appstat255?: number;
  /**
  * counter app stat 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat256 DataThunderRuleSetStats#appstat256}
  */
  readonly appstat256?: number;
  /**
  * counter app stat 257
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat257 DataThunderRuleSetStats#appstat257}
  */
  readonly appstat257?: number;
  /**
  * counter app stat 258
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat258 DataThunderRuleSetStats#appstat258}
  */
  readonly appstat258?: number;
  /**
  * counter app stat 259
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat259 DataThunderRuleSetStats#appstat259}
  */
  readonly appstat259?: number;
  /**
  * counter app stat 26
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat26 DataThunderRuleSetStats#appstat26}
  */
  readonly appstat26?: number;
  /**
  * counter app stat 260
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat260 DataThunderRuleSetStats#appstat260}
  */
  readonly appstat260?: number;
  /**
  * counter app stat 261
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat261 DataThunderRuleSetStats#appstat261}
  */
  readonly appstat261?: number;
  /**
  * counter app stat 262
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat262 DataThunderRuleSetStats#appstat262}
  */
  readonly appstat262?: number;
  /**
  * counter app stat 263
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat263 DataThunderRuleSetStats#appstat263}
  */
  readonly appstat263?: number;
  /**
  * counter app stat 264
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat264 DataThunderRuleSetStats#appstat264}
  */
  readonly appstat264?: number;
  /**
  * counter app stat 265
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat265 DataThunderRuleSetStats#appstat265}
  */
  readonly appstat265?: number;
  /**
  * counter app stat 266
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat266 DataThunderRuleSetStats#appstat266}
  */
  readonly appstat266?: number;
  /**
  * counter app stat 267
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat267 DataThunderRuleSetStats#appstat267}
  */
  readonly appstat267?: number;
  /**
  * counter app stat 268
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat268 DataThunderRuleSetStats#appstat268}
  */
  readonly appstat268?: number;
  /**
  * counter app stat 269
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat269 DataThunderRuleSetStats#appstat269}
  */
  readonly appstat269?: number;
  /**
  * counter app stat 27
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat27 DataThunderRuleSetStats#appstat27}
  */
  readonly appstat27?: number;
  /**
  * counter app stat 270
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat270 DataThunderRuleSetStats#appstat270}
  */
  readonly appstat270?: number;
  /**
  * counter app stat 271
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat271 DataThunderRuleSetStats#appstat271}
  */
  readonly appstat271?: number;
  /**
  * counter app stat 272
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat272 DataThunderRuleSetStats#appstat272}
  */
  readonly appstat272?: number;
  /**
  * counter app stat 273
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat273 DataThunderRuleSetStats#appstat273}
  */
  readonly appstat273?: number;
  /**
  * counter app stat 274
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat274 DataThunderRuleSetStats#appstat274}
  */
  readonly appstat274?: number;
  /**
  * counter app stat 275
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat275 DataThunderRuleSetStats#appstat275}
  */
  readonly appstat275?: number;
  /**
  * counter app stat 276
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat276 DataThunderRuleSetStats#appstat276}
  */
  readonly appstat276?: number;
  /**
  * counter app stat 277
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat277 DataThunderRuleSetStats#appstat277}
  */
  readonly appstat277?: number;
  /**
  * counter app stat 278
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat278 DataThunderRuleSetStats#appstat278}
  */
  readonly appstat278?: number;
  /**
  * counter app stat 279
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat279 DataThunderRuleSetStats#appstat279}
  */
  readonly appstat279?: number;
  /**
  * counter app stat 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat28 DataThunderRuleSetStats#appstat28}
  */
  readonly appstat28?: number;
  /**
  * counter app stat 280
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat280 DataThunderRuleSetStats#appstat280}
  */
  readonly appstat280?: number;
  /**
  * counter app stat 281
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat281 DataThunderRuleSetStats#appstat281}
  */
  readonly appstat281?: number;
  /**
  * counter app stat 282
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat282 DataThunderRuleSetStats#appstat282}
  */
  readonly appstat282?: number;
  /**
  * counter app stat 283
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat283 DataThunderRuleSetStats#appstat283}
  */
  readonly appstat283?: number;
  /**
  * counter app stat 284
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat284 DataThunderRuleSetStats#appstat284}
  */
  readonly appstat284?: number;
  /**
  * counter app stat 285
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat285 DataThunderRuleSetStats#appstat285}
  */
  readonly appstat285?: number;
  /**
  * counter app stat 286
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat286 DataThunderRuleSetStats#appstat286}
  */
  readonly appstat286?: number;
  /**
  * counter app stat 287
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat287 DataThunderRuleSetStats#appstat287}
  */
  readonly appstat287?: number;
  /**
  * counter app stat 288
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat288 DataThunderRuleSetStats#appstat288}
  */
  readonly appstat288?: number;
  /**
  * counter app stat 289
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat289 DataThunderRuleSetStats#appstat289}
  */
  readonly appstat289?: number;
  /**
  * counter app stat 29
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat29 DataThunderRuleSetStats#appstat29}
  */
  readonly appstat29?: number;
  /**
  * counter app stat 290
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat290 DataThunderRuleSetStats#appstat290}
  */
  readonly appstat290?: number;
  /**
  * counter app stat 291
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat291 DataThunderRuleSetStats#appstat291}
  */
  readonly appstat291?: number;
  /**
  * counter app stat 292
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat292 DataThunderRuleSetStats#appstat292}
  */
  readonly appstat292?: number;
  /**
  * counter app stat 293
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat293 DataThunderRuleSetStats#appstat293}
  */
  readonly appstat293?: number;
  /**
  * counter app stat 294
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat294 DataThunderRuleSetStats#appstat294}
  */
  readonly appstat294?: number;
  /**
  * counter app stat 295
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat295 DataThunderRuleSetStats#appstat295}
  */
  readonly appstat295?: number;
  /**
  * counter app stat 296
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat296 DataThunderRuleSetStats#appstat296}
  */
  readonly appstat296?: number;
  /**
  * counter app stat 297
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat297 DataThunderRuleSetStats#appstat297}
  */
  readonly appstat297?: number;
  /**
  * counter app stat 298
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat298 DataThunderRuleSetStats#appstat298}
  */
  readonly appstat298?: number;
  /**
  * counter app stat 299
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat299 DataThunderRuleSetStats#appstat299}
  */
  readonly appstat299?: number;
  /**
  * counter app stat 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat3 DataThunderRuleSetStats#appstat3}
  */
  readonly appstat3?: number;
  /**
  * counter app stat 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat30 DataThunderRuleSetStats#appstat30}
  */
  readonly appstat30?: number;
  /**
  * counter app stat 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat300 DataThunderRuleSetStats#appstat300}
  */
  readonly appstat300?: number;
  /**
  * counter app stat 301
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat301 DataThunderRuleSetStats#appstat301}
  */
  readonly appstat301?: number;
  /**
  * counter app stat 302
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat302 DataThunderRuleSetStats#appstat302}
  */
  readonly appstat302?: number;
  /**
  * counter app stat 303
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat303 DataThunderRuleSetStats#appstat303}
  */
  readonly appstat303?: number;
  /**
  * counter app stat 304
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat304 DataThunderRuleSetStats#appstat304}
  */
  readonly appstat304?: number;
  /**
  * counter app stat 305
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat305 DataThunderRuleSetStats#appstat305}
  */
  readonly appstat305?: number;
  /**
  * counter app stat 306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat306 DataThunderRuleSetStats#appstat306}
  */
  readonly appstat306?: number;
  /**
  * counter app stat 307
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat307 DataThunderRuleSetStats#appstat307}
  */
  readonly appstat307?: number;
  /**
  * counter app stat 308
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat308 DataThunderRuleSetStats#appstat308}
  */
  readonly appstat308?: number;
  /**
  * counter app stat 309
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat309 DataThunderRuleSetStats#appstat309}
  */
  readonly appstat309?: number;
  /**
  * counter app stat 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat31 DataThunderRuleSetStats#appstat31}
  */
  readonly appstat31?: number;
  /**
  * counter app stat 310
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat310 DataThunderRuleSetStats#appstat310}
  */
  readonly appstat310?: number;
  /**
  * counter app stat 311
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat311 DataThunderRuleSetStats#appstat311}
  */
  readonly appstat311?: number;
  /**
  * counter app stat 312
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat312 DataThunderRuleSetStats#appstat312}
  */
  readonly appstat312?: number;
  /**
  * counter app stat 313
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat313 DataThunderRuleSetStats#appstat313}
  */
  readonly appstat313?: number;
  /**
  * counter app stat 314
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat314 DataThunderRuleSetStats#appstat314}
  */
  readonly appstat314?: number;
  /**
  * counter app stat 315
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat315 DataThunderRuleSetStats#appstat315}
  */
  readonly appstat315?: number;
  /**
  * counter app stat 316
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat316 DataThunderRuleSetStats#appstat316}
  */
  readonly appstat316?: number;
  /**
  * counter app stat 317
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat317 DataThunderRuleSetStats#appstat317}
  */
  readonly appstat317?: number;
  /**
  * counter app stat 318
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat318 DataThunderRuleSetStats#appstat318}
  */
  readonly appstat318?: number;
  /**
  * counter app stat 319
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat319 DataThunderRuleSetStats#appstat319}
  */
  readonly appstat319?: number;
  /**
  * counter app stat 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat32 DataThunderRuleSetStats#appstat32}
  */
  readonly appstat32?: number;
  /**
  * counter app stat 320
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat320 DataThunderRuleSetStats#appstat320}
  */
  readonly appstat320?: number;
  /**
  * counter app stat 321
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat321 DataThunderRuleSetStats#appstat321}
  */
  readonly appstat321?: number;
  /**
  * counter app stat 322
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat322 DataThunderRuleSetStats#appstat322}
  */
  readonly appstat322?: number;
  /**
  * counter app stat 323
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat323 DataThunderRuleSetStats#appstat323}
  */
  readonly appstat323?: number;
  /**
  * counter app stat 324
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat324 DataThunderRuleSetStats#appstat324}
  */
  readonly appstat324?: number;
  /**
  * counter app stat 325
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat325 DataThunderRuleSetStats#appstat325}
  */
  readonly appstat325?: number;
  /**
  * counter app stat 326
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat326 DataThunderRuleSetStats#appstat326}
  */
  readonly appstat326?: number;
  /**
  * counter app stat 327
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat327 DataThunderRuleSetStats#appstat327}
  */
  readonly appstat327?: number;
  /**
  * counter app stat 328
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat328 DataThunderRuleSetStats#appstat328}
  */
  readonly appstat328?: number;
  /**
  * counter app stat 329
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat329 DataThunderRuleSetStats#appstat329}
  */
  readonly appstat329?: number;
  /**
  * counter app stat 33
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat33 DataThunderRuleSetStats#appstat33}
  */
  readonly appstat33?: number;
  /**
  * counter app stat 330
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat330 DataThunderRuleSetStats#appstat330}
  */
  readonly appstat330?: number;
  /**
  * counter app stat 331
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat331 DataThunderRuleSetStats#appstat331}
  */
  readonly appstat331?: number;
  /**
  * counter app stat 332
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat332 DataThunderRuleSetStats#appstat332}
  */
  readonly appstat332?: number;
  /**
  * counter app stat 333
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat333 DataThunderRuleSetStats#appstat333}
  */
  readonly appstat333?: number;
  /**
  * counter app stat 334
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat334 DataThunderRuleSetStats#appstat334}
  */
  readonly appstat334?: number;
  /**
  * counter app stat 335
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat335 DataThunderRuleSetStats#appstat335}
  */
  readonly appstat335?: number;
  /**
  * counter app stat 336
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat336 DataThunderRuleSetStats#appstat336}
  */
  readonly appstat336?: number;
  /**
  * counter app stat 337
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat337 DataThunderRuleSetStats#appstat337}
  */
  readonly appstat337?: number;
  /**
  * counter app stat 338
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat338 DataThunderRuleSetStats#appstat338}
  */
  readonly appstat338?: number;
  /**
  * counter app stat 339
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat339 DataThunderRuleSetStats#appstat339}
  */
  readonly appstat339?: number;
  /**
  * counter app stat 34
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat34 DataThunderRuleSetStats#appstat34}
  */
  readonly appstat34?: number;
  /**
  * counter app stat 340
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat340 DataThunderRuleSetStats#appstat340}
  */
  readonly appstat340?: number;
  /**
  * counter app stat 341
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat341 DataThunderRuleSetStats#appstat341}
  */
  readonly appstat341?: number;
  /**
  * counter app stat 342
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat342 DataThunderRuleSetStats#appstat342}
  */
  readonly appstat342?: number;
  /**
  * counter app stat 343
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat343 DataThunderRuleSetStats#appstat343}
  */
  readonly appstat343?: number;
  /**
  * counter app stat 344
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat344 DataThunderRuleSetStats#appstat344}
  */
  readonly appstat344?: number;
  /**
  * counter app stat 345
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat345 DataThunderRuleSetStats#appstat345}
  */
  readonly appstat345?: number;
  /**
  * counter app stat 346
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat346 DataThunderRuleSetStats#appstat346}
  */
  readonly appstat346?: number;
  /**
  * counter app stat 347
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat347 DataThunderRuleSetStats#appstat347}
  */
  readonly appstat347?: number;
  /**
  * counter app stat 348
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat348 DataThunderRuleSetStats#appstat348}
  */
  readonly appstat348?: number;
  /**
  * counter app stat 349
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat349 DataThunderRuleSetStats#appstat349}
  */
  readonly appstat349?: number;
  /**
  * counter app stat 35
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat35 DataThunderRuleSetStats#appstat35}
  */
  readonly appstat35?: number;
  /**
  * counter app stat 350
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat350 DataThunderRuleSetStats#appstat350}
  */
  readonly appstat350?: number;
  /**
  * counter app stat 351
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat351 DataThunderRuleSetStats#appstat351}
  */
  readonly appstat351?: number;
  /**
  * counter app stat 352
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat352 DataThunderRuleSetStats#appstat352}
  */
  readonly appstat352?: number;
  /**
  * counter app stat 353
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat353 DataThunderRuleSetStats#appstat353}
  */
  readonly appstat353?: number;
  /**
  * counter app stat 354
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat354 DataThunderRuleSetStats#appstat354}
  */
  readonly appstat354?: number;
  /**
  * counter app stat 355
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat355 DataThunderRuleSetStats#appstat355}
  */
  readonly appstat355?: number;
  /**
  * counter app stat 356
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat356 DataThunderRuleSetStats#appstat356}
  */
  readonly appstat356?: number;
  /**
  * counter app stat 357
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat357 DataThunderRuleSetStats#appstat357}
  */
  readonly appstat357?: number;
  /**
  * counter app stat 358
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat358 DataThunderRuleSetStats#appstat358}
  */
  readonly appstat358?: number;
  /**
  * counter app stat 359
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat359 DataThunderRuleSetStats#appstat359}
  */
  readonly appstat359?: number;
  /**
  * counter app stat 36
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat36 DataThunderRuleSetStats#appstat36}
  */
  readonly appstat36?: number;
  /**
  * counter app stat 360
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat360 DataThunderRuleSetStats#appstat360}
  */
  readonly appstat360?: number;
  /**
  * counter app stat 361
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat361 DataThunderRuleSetStats#appstat361}
  */
  readonly appstat361?: number;
  /**
  * counter app stat 362
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat362 DataThunderRuleSetStats#appstat362}
  */
  readonly appstat362?: number;
  /**
  * counter app stat 363
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat363 DataThunderRuleSetStats#appstat363}
  */
  readonly appstat363?: number;
  /**
  * counter app stat 364
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat364 DataThunderRuleSetStats#appstat364}
  */
  readonly appstat364?: number;
  /**
  * counter app stat 365
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat365 DataThunderRuleSetStats#appstat365}
  */
  readonly appstat365?: number;
  /**
  * counter app stat 366
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat366 DataThunderRuleSetStats#appstat366}
  */
  readonly appstat366?: number;
  /**
  * counter app stat 367
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat367 DataThunderRuleSetStats#appstat367}
  */
  readonly appstat367?: number;
  /**
  * counter app stat 368
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat368 DataThunderRuleSetStats#appstat368}
  */
  readonly appstat368?: number;
  /**
  * counter app stat 369
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat369 DataThunderRuleSetStats#appstat369}
  */
  readonly appstat369?: number;
  /**
  * counter app stat 37
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat37 DataThunderRuleSetStats#appstat37}
  */
  readonly appstat37?: number;
  /**
  * counter app stat 370
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat370 DataThunderRuleSetStats#appstat370}
  */
  readonly appstat370?: number;
  /**
  * counter app stat 371
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat371 DataThunderRuleSetStats#appstat371}
  */
  readonly appstat371?: number;
  /**
  * counter app stat 372
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat372 DataThunderRuleSetStats#appstat372}
  */
  readonly appstat372?: number;
  /**
  * counter app stat 373
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat373 DataThunderRuleSetStats#appstat373}
  */
  readonly appstat373?: number;
  /**
  * counter app stat 374
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat374 DataThunderRuleSetStats#appstat374}
  */
  readonly appstat374?: number;
  /**
  * counter app stat 375
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat375 DataThunderRuleSetStats#appstat375}
  */
  readonly appstat375?: number;
  /**
  * counter app stat 376
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat376 DataThunderRuleSetStats#appstat376}
  */
  readonly appstat376?: number;
  /**
  * counter app stat 377
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat377 DataThunderRuleSetStats#appstat377}
  */
  readonly appstat377?: number;
  /**
  * counter app stat 378
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat378 DataThunderRuleSetStats#appstat378}
  */
  readonly appstat378?: number;
  /**
  * counter app stat 379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat379 DataThunderRuleSetStats#appstat379}
  */
  readonly appstat379?: number;
  /**
  * counter app stat 38
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat38 DataThunderRuleSetStats#appstat38}
  */
  readonly appstat38?: number;
  /**
  * counter app stat 380
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat380 DataThunderRuleSetStats#appstat380}
  */
  readonly appstat380?: number;
  /**
  * counter app stat 381
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat381 DataThunderRuleSetStats#appstat381}
  */
  readonly appstat381?: number;
  /**
  * counter app stat 382
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat382 DataThunderRuleSetStats#appstat382}
  */
  readonly appstat382?: number;
  /**
  * counter app stat 383
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat383 DataThunderRuleSetStats#appstat383}
  */
  readonly appstat383?: number;
  /**
  * counter app stat 384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat384 DataThunderRuleSetStats#appstat384}
  */
  readonly appstat384?: number;
  /**
  * counter app stat 385
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat385 DataThunderRuleSetStats#appstat385}
  */
  readonly appstat385?: number;
  /**
  * counter app stat 386
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat386 DataThunderRuleSetStats#appstat386}
  */
  readonly appstat386?: number;
  /**
  * counter app stat 387
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat387 DataThunderRuleSetStats#appstat387}
  */
  readonly appstat387?: number;
  /**
  * counter app stat 388
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat388 DataThunderRuleSetStats#appstat388}
  */
  readonly appstat388?: number;
  /**
  * counter app stat 389
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat389 DataThunderRuleSetStats#appstat389}
  */
  readonly appstat389?: number;
  /**
  * counter app stat 39
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat39 DataThunderRuleSetStats#appstat39}
  */
  readonly appstat39?: number;
  /**
  * counter app stat 390
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat390 DataThunderRuleSetStats#appstat390}
  */
  readonly appstat390?: number;
  /**
  * counter app stat 391
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat391 DataThunderRuleSetStats#appstat391}
  */
  readonly appstat391?: number;
  /**
  * counter app stat 392
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat392 DataThunderRuleSetStats#appstat392}
  */
  readonly appstat392?: number;
  /**
  * counter app stat 393
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat393 DataThunderRuleSetStats#appstat393}
  */
  readonly appstat393?: number;
  /**
  * counter app stat 394
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat394 DataThunderRuleSetStats#appstat394}
  */
  readonly appstat394?: number;
  /**
  * counter app stat 395
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat395 DataThunderRuleSetStats#appstat395}
  */
  readonly appstat395?: number;
  /**
  * counter app stat 396
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat396 DataThunderRuleSetStats#appstat396}
  */
  readonly appstat396?: number;
  /**
  * counter app stat 397
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat397 DataThunderRuleSetStats#appstat397}
  */
  readonly appstat397?: number;
  /**
  * counter app stat 398
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat398 DataThunderRuleSetStats#appstat398}
  */
  readonly appstat398?: number;
  /**
  * counter app stat 399
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat399 DataThunderRuleSetStats#appstat399}
  */
  readonly appstat399?: number;
  /**
  * counter app stat 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat4 DataThunderRuleSetStats#appstat4}
  */
  readonly appstat4?: number;
  /**
  * counter app stat 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat40 DataThunderRuleSetStats#appstat40}
  */
  readonly appstat40?: number;
  /**
  * counter app stat 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat400 DataThunderRuleSetStats#appstat400}
  */
  readonly appstat400?: number;
  /**
  * counter app stat 401
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat401 DataThunderRuleSetStats#appstat401}
  */
  readonly appstat401?: number;
  /**
  * counter app stat 402
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat402 DataThunderRuleSetStats#appstat402}
  */
  readonly appstat402?: number;
  /**
  * counter app stat 403
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat403 DataThunderRuleSetStats#appstat403}
  */
  readonly appstat403?: number;
  /**
  * counter app stat 404
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat404 DataThunderRuleSetStats#appstat404}
  */
  readonly appstat404?: number;
  /**
  * counter app stat 405
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat405 DataThunderRuleSetStats#appstat405}
  */
  readonly appstat405?: number;
  /**
  * counter app stat 406
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat406 DataThunderRuleSetStats#appstat406}
  */
  readonly appstat406?: number;
  /**
  * counter app stat 407
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat407 DataThunderRuleSetStats#appstat407}
  */
  readonly appstat407?: number;
  /**
  * counter app stat 408
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat408 DataThunderRuleSetStats#appstat408}
  */
  readonly appstat408?: number;
  /**
  * counter app stat 409
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat409 DataThunderRuleSetStats#appstat409}
  */
  readonly appstat409?: number;
  /**
  * counter app stat 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat41 DataThunderRuleSetStats#appstat41}
  */
  readonly appstat41?: number;
  /**
  * counter app stat 410
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat410 DataThunderRuleSetStats#appstat410}
  */
  readonly appstat410?: number;
  /**
  * counter app stat 411
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat411 DataThunderRuleSetStats#appstat411}
  */
  readonly appstat411?: number;
  /**
  * counter app stat 412
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat412 DataThunderRuleSetStats#appstat412}
  */
  readonly appstat412?: number;
  /**
  * counter app stat 413
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat413 DataThunderRuleSetStats#appstat413}
  */
  readonly appstat413?: number;
  /**
  * counter app stat 414
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat414 DataThunderRuleSetStats#appstat414}
  */
  readonly appstat414?: number;
  /**
  * counter app stat 415
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat415 DataThunderRuleSetStats#appstat415}
  */
  readonly appstat415?: number;
  /**
  * counter app stat 416
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat416 DataThunderRuleSetStats#appstat416}
  */
  readonly appstat416?: number;
  /**
  * counter app stat 417
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat417 DataThunderRuleSetStats#appstat417}
  */
  readonly appstat417?: number;
  /**
  * counter app stat 418
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat418 DataThunderRuleSetStats#appstat418}
  */
  readonly appstat418?: number;
  /**
  * counter app stat 419
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat419 DataThunderRuleSetStats#appstat419}
  */
  readonly appstat419?: number;
  /**
  * counter app stat 42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat42 DataThunderRuleSetStats#appstat42}
  */
  readonly appstat42?: number;
  /**
  * counter app stat 420
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat420 DataThunderRuleSetStats#appstat420}
  */
  readonly appstat420?: number;
  /**
  * counter app stat 421
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat421 DataThunderRuleSetStats#appstat421}
  */
  readonly appstat421?: number;
  /**
  * counter app stat 422
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat422 DataThunderRuleSetStats#appstat422}
  */
  readonly appstat422?: number;
  /**
  * counter app stat 423
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat423 DataThunderRuleSetStats#appstat423}
  */
  readonly appstat423?: number;
  /**
  * counter app stat 424
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat424 DataThunderRuleSetStats#appstat424}
  */
  readonly appstat424?: number;
  /**
  * counter app stat 425
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat425 DataThunderRuleSetStats#appstat425}
  */
  readonly appstat425?: number;
  /**
  * counter app stat 426
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat426 DataThunderRuleSetStats#appstat426}
  */
  readonly appstat426?: number;
  /**
  * counter app stat 427
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat427 DataThunderRuleSetStats#appstat427}
  */
  readonly appstat427?: number;
  /**
  * counter app stat 428
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat428 DataThunderRuleSetStats#appstat428}
  */
  readonly appstat428?: number;
  /**
  * counter app stat 429
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat429 DataThunderRuleSetStats#appstat429}
  */
  readonly appstat429?: number;
  /**
  * counter app stat 43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat43 DataThunderRuleSetStats#appstat43}
  */
  readonly appstat43?: number;
  /**
  * counter app stat 430
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat430 DataThunderRuleSetStats#appstat430}
  */
  readonly appstat430?: number;
  /**
  * counter app stat 431
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat431 DataThunderRuleSetStats#appstat431}
  */
  readonly appstat431?: number;
  /**
  * counter app stat 432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat432 DataThunderRuleSetStats#appstat432}
  */
  readonly appstat432?: number;
  /**
  * counter app stat 433
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat433 DataThunderRuleSetStats#appstat433}
  */
  readonly appstat433?: number;
  /**
  * counter app stat 434
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat434 DataThunderRuleSetStats#appstat434}
  */
  readonly appstat434?: number;
  /**
  * counter app stat 435
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat435 DataThunderRuleSetStats#appstat435}
  */
  readonly appstat435?: number;
  /**
  * counter app stat 436
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat436 DataThunderRuleSetStats#appstat436}
  */
  readonly appstat436?: number;
  /**
  * counter app stat 437
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat437 DataThunderRuleSetStats#appstat437}
  */
  readonly appstat437?: number;
  /**
  * counter app stat 438
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat438 DataThunderRuleSetStats#appstat438}
  */
  readonly appstat438?: number;
  /**
  * counter app stat 439
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat439 DataThunderRuleSetStats#appstat439}
  */
  readonly appstat439?: number;
  /**
  * counter app stat 44
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat44 DataThunderRuleSetStats#appstat44}
  */
  readonly appstat44?: number;
  /**
  * counter app stat 440
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat440 DataThunderRuleSetStats#appstat440}
  */
  readonly appstat440?: number;
  /**
  * counter app stat 441
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat441 DataThunderRuleSetStats#appstat441}
  */
  readonly appstat441?: number;
  /**
  * counter app stat 442
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat442 DataThunderRuleSetStats#appstat442}
  */
  readonly appstat442?: number;
  /**
  * counter app stat 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat443 DataThunderRuleSetStats#appstat443}
  */
  readonly appstat443?: number;
  /**
  * counter app stat 444
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat444 DataThunderRuleSetStats#appstat444}
  */
  readonly appstat444?: number;
  /**
  * counter app stat 445
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat445 DataThunderRuleSetStats#appstat445}
  */
  readonly appstat445?: number;
  /**
  * counter app stat 446
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat446 DataThunderRuleSetStats#appstat446}
  */
  readonly appstat446?: number;
  /**
  * counter app stat 447
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat447 DataThunderRuleSetStats#appstat447}
  */
  readonly appstat447?: number;
  /**
  * counter app stat 448
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat448 DataThunderRuleSetStats#appstat448}
  */
  readonly appstat448?: number;
  /**
  * counter app stat 449
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat449 DataThunderRuleSetStats#appstat449}
  */
  readonly appstat449?: number;
  /**
  * counter app stat 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat45 DataThunderRuleSetStats#appstat45}
  */
  readonly appstat45?: number;
  /**
  * counter app stat 450
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat450 DataThunderRuleSetStats#appstat450}
  */
  readonly appstat450?: number;
  /**
  * counter app stat 451
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat451 DataThunderRuleSetStats#appstat451}
  */
  readonly appstat451?: number;
  /**
  * counter app stat 452
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat452 DataThunderRuleSetStats#appstat452}
  */
  readonly appstat452?: number;
  /**
  * counter app stat 453
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat453 DataThunderRuleSetStats#appstat453}
  */
  readonly appstat453?: number;
  /**
  * counter app stat 454
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat454 DataThunderRuleSetStats#appstat454}
  */
  readonly appstat454?: number;
  /**
  * counter app stat 455
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat455 DataThunderRuleSetStats#appstat455}
  */
  readonly appstat455?: number;
  /**
  * counter app stat 456
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat456 DataThunderRuleSetStats#appstat456}
  */
  readonly appstat456?: number;
  /**
  * counter app stat 457
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat457 DataThunderRuleSetStats#appstat457}
  */
  readonly appstat457?: number;
  /**
  * counter app stat 458
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat458 DataThunderRuleSetStats#appstat458}
  */
  readonly appstat458?: number;
  /**
  * counter app stat 459
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat459 DataThunderRuleSetStats#appstat459}
  */
  readonly appstat459?: number;
  /**
  * counter app stat 46
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat46 DataThunderRuleSetStats#appstat46}
  */
  readonly appstat46?: number;
  /**
  * counter app stat 460
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat460 DataThunderRuleSetStats#appstat460}
  */
  readonly appstat460?: number;
  /**
  * counter app stat 461
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat461 DataThunderRuleSetStats#appstat461}
  */
  readonly appstat461?: number;
  /**
  * counter app stat 462
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat462 DataThunderRuleSetStats#appstat462}
  */
  readonly appstat462?: number;
  /**
  * counter app stat 463
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat463 DataThunderRuleSetStats#appstat463}
  */
  readonly appstat463?: number;
  /**
  * counter app stat 464
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat464 DataThunderRuleSetStats#appstat464}
  */
  readonly appstat464?: number;
  /**
  * counter app stat 465
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat465 DataThunderRuleSetStats#appstat465}
  */
  readonly appstat465?: number;
  /**
  * counter app stat 466
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat466 DataThunderRuleSetStats#appstat466}
  */
  readonly appstat466?: number;
  /**
  * counter app stat 467
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat467 DataThunderRuleSetStats#appstat467}
  */
  readonly appstat467?: number;
  /**
  * counter app stat 468
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat468 DataThunderRuleSetStats#appstat468}
  */
  readonly appstat468?: number;
  /**
  * counter app stat 469
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat469 DataThunderRuleSetStats#appstat469}
  */
  readonly appstat469?: number;
  /**
  * counter app stat 47
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat47 DataThunderRuleSetStats#appstat47}
  */
  readonly appstat47?: number;
  /**
  * counter app stat 470
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat470 DataThunderRuleSetStats#appstat470}
  */
  readonly appstat470?: number;
  /**
  * counter app stat 471
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat471 DataThunderRuleSetStats#appstat471}
  */
  readonly appstat471?: number;
  /**
  * counter app stat 472
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat472 DataThunderRuleSetStats#appstat472}
  */
  readonly appstat472?: number;
  /**
  * counter app stat 473
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat473 DataThunderRuleSetStats#appstat473}
  */
  readonly appstat473?: number;
  /**
  * counter app stat 474
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat474 DataThunderRuleSetStats#appstat474}
  */
  readonly appstat474?: number;
  /**
  * counter app stat 475
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat475 DataThunderRuleSetStats#appstat475}
  */
  readonly appstat475?: number;
  /**
  * counter app stat 476
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat476 DataThunderRuleSetStats#appstat476}
  */
  readonly appstat476?: number;
  /**
  * counter app stat 477
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat477 DataThunderRuleSetStats#appstat477}
  */
  readonly appstat477?: number;
  /**
  * counter app stat 478
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat478 DataThunderRuleSetStats#appstat478}
  */
  readonly appstat478?: number;
  /**
  * counter app stat 479
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat479 DataThunderRuleSetStats#appstat479}
  */
  readonly appstat479?: number;
  /**
  * counter app stat 48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat48 DataThunderRuleSetStats#appstat48}
  */
  readonly appstat48?: number;
  /**
  * counter app stat 480
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat480 DataThunderRuleSetStats#appstat480}
  */
  readonly appstat480?: number;
  /**
  * counter app stat 481
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat481 DataThunderRuleSetStats#appstat481}
  */
  readonly appstat481?: number;
  /**
  * counter app stat 482
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat482 DataThunderRuleSetStats#appstat482}
  */
  readonly appstat482?: number;
  /**
  * counter app stat 483
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat483 DataThunderRuleSetStats#appstat483}
  */
  readonly appstat483?: number;
  /**
  * counter app stat 484
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat484 DataThunderRuleSetStats#appstat484}
  */
  readonly appstat484?: number;
  /**
  * counter app stat 485
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat485 DataThunderRuleSetStats#appstat485}
  */
  readonly appstat485?: number;
  /**
  * counter app stat 486
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat486 DataThunderRuleSetStats#appstat486}
  */
  readonly appstat486?: number;
  /**
  * counter app stat 487
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat487 DataThunderRuleSetStats#appstat487}
  */
  readonly appstat487?: number;
  /**
  * counter app stat 488
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat488 DataThunderRuleSetStats#appstat488}
  */
  readonly appstat488?: number;
  /**
  * counter app stat 489
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat489 DataThunderRuleSetStats#appstat489}
  */
  readonly appstat489?: number;
  /**
  * counter app stat 49
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat49 DataThunderRuleSetStats#appstat49}
  */
  readonly appstat49?: number;
  /**
  * counter app stat 490
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat490 DataThunderRuleSetStats#appstat490}
  */
  readonly appstat490?: number;
  /**
  * counter app stat 491
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat491 DataThunderRuleSetStats#appstat491}
  */
  readonly appstat491?: number;
  /**
  * counter app stat 492
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat492 DataThunderRuleSetStats#appstat492}
  */
  readonly appstat492?: number;
  /**
  * counter app stat 493
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat493 DataThunderRuleSetStats#appstat493}
  */
  readonly appstat493?: number;
  /**
  * counter app stat 494
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat494 DataThunderRuleSetStats#appstat494}
  */
  readonly appstat494?: number;
  /**
  * counter app stat 495
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat495 DataThunderRuleSetStats#appstat495}
  */
  readonly appstat495?: number;
  /**
  * counter app stat 496
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat496 DataThunderRuleSetStats#appstat496}
  */
  readonly appstat496?: number;
  /**
  * counter app stat 497
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat497 DataThunderRuleSetStats#appstat497}
  */
  readonly appstat497?: number;
  /**
  * counter app stat 498
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat498 DataThunderRuleSetStats#appstat498}
  */
  readonly appstat498?: number;
  /**
  * counter app stat 499
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat499 DataThunderRuleSetStats#appstat499}
  */
  readonly appstat499?: number;
  /**
  * counter app stat 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat5 DataThunderRuleSetStats#appstat5}
  */
  readonly appstat5?: number;
  /**
  * counter app stat 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat50 DataThunderRuleSetStats#appstat50}
  */
  readonly appstat50?: number;
  /**
  * counter app stat 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat500 DataThunderRuleSetStats#appstat500}
  */
  readonly appstat500?: number;
  /**
  * counter app stat 501
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat501 DataThunderRuleSetStats#appstat501}
  */
  readonly appstat501?: number;
  /**
  * counter app stat 502
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat502 DataThunderRuleSetStats#appstat502}
  */
  readonly appstat502?: number;
  /**
  * counter app stat 503
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat503 DataThunderRuleSetStats#appstat503}
  */
  readonly appstat503?: number;
  /**
  * counter app stat 504
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat504 DataThunderRuleSetStats#appstat504}
  */
  readonly appstat504?: number;
  /**
  * counter app stat 505
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat505 DataThunderRuleSetStats#appstat505}
  */
  readonly appstat505?: number;
  /**
  * counter app stat 506
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat506 DataThunderRuleSetStats#appstat506}
  */
  readonly appstat506?: number;
  /**
  * counter app stat 507
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat507 DataThunderRuleSetStats#appstat507}
  */
  readonly appstat507?: number;
  /**
  * counter app stat 508
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat508 DataThunderRuleSetStats#appstat508}
  */
  readonly appstat508?: number;
  /**
  * counter app stat 509
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat509 DataThunderRuleSetStats#appstat509}
  */
  readonly appstat509?: number;
  /**
  * counter app stat 51
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat51 DataThunderRuleSetStats#appstat51}
  */
  readonly appstat51?: number;
  /**
  * counter app stat 510
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat510 DataThunderRuleSetStats#appstat510}
  */
  readonly appstat510?: number;
  /**
  * counter app stat 511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat511 DataThunderRuleSetStats#appstat511}
  */
  readonly appstat511?: number;
  /**
  * counter app stat 52
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat52 DataThunderRuleSetStats#appstat52}
  */
  readonly appstat52?: number;
  /**
  * counter app stat 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat53 DataThunderRuleSetStats#appstat53}
  */
  readonly appstat53?: number;
  /**
  * counter app stat 54
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat54 DataThunderRuleSetStats#appstat54}
  */
  readonly appstat54?: number;
  /**
  * counter app stat 55
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat55 DataThunderRuleSetStats#appstat55}
  */
  readonly appstat55?: number;
  /**
  * counter app stat 56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat56 DataThunderRuleSetStats#appstat56}
  */
  readonly appstat56?: number;
  /**
  * counter app stat 57
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat57 DataThunderRuleSetStats#appstat57}
  */
  readonly appstat57?: number;
  /**
  * counter app stat 58
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat58 DataThunderRuleSetStats#appstat58}
  */
  readonly appstat58?: number;
  /**
  * counter app stat 59
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat59 DataThunderRuleSetStats#appstat59}
  */
  readonly appstat59?: number;
  /**
  * counter app stat 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat6 DataThunderRuleSetStats#appstat6}
  */
  readonly appstat6?: number;
  /**
  * counter app stat 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat60 DataThunderRuleSetStats#appstat60}
  */
  readonly appstat60?: number;
  /**
  * counter app stat 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat61 DataThunderRuleSetStats#appstat61}
  */
  readonly appstat61?: number;
  /**
  * counter app stat 62
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat62 DataThunderRuleSetStats#appstat62}
  */
  readonly appstat62?: number;
  /**
  * counter app stat 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat63 DataThunderRuleSetStats#appstat63}
  */
  readonly appstat63?: number;
  /**
  * counter app stat 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat64 DataThunderRuleSetStats#appstat64}
  */
  readonly appstat64?: number;
  /**
  * counter app stat 65
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat65 DataThunderRuleSetStats#appstat65}
  */
  readonly appstat65?: number;
  /**
  * counter app stat 66
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat66 DataThunderRuleSetStats#appstat66}
  */
  readonly appstat66?: number;
  /**
  * counter app stat 67
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat67 DataThunderRuleSetStats#appstat67}
  */
  readonly appstat67?: number;
  /**
  * counter app stat 68
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat68 DataThunderRuleSetStats#appstat68}
  */
  readonly appstat68?: number;
  /**
  * counter app stat 69
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat69 DataThunderRuleSetStats#appstat69}
  */
  readonly appstat69?: number;
  /**
  * counter app stat 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat7 DataThunderRuleSetStats#appstat7}
  */
  readonly appstat7?: number;
  /**
  * counter app stat 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat70 DataThunderRuleSetStats#appstat70}
  */
  readonly appstat70?: number;
  /**
  * counter app stat 71
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat71 DataThunderRuleSetStats#appstat71}
  */
  readonly appstat71?: number;
  /**
  * counter app stat 72
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat72 DataThunderRuleSetStats#appstat72}
  */
  readonly appstat72?: number;
  /**
  * counter app stat 73
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat73 DataThunderRuleSetStats#appstat73}
  */
  readonly appstat73?: number;
  /**
  * counter app stat 74
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat74 DataThunderRuleSetStats#appstat74}
  */
  readonly appstat74?: number;
  /**
  * counter app stat 75
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat75 DataThunderRuleSetStats#appstat75}
  */
  readonly appstat75?: number;
  /**
  * counter app stat 76
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat76 DataThunderRuleSetStats#appstat76}
  */
  readonly appstat76?: number;
  /**
  * counter app stat 77
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat77 DataThunderRuleSetStats#appstat77}
  */
  readonly appstat77?: number;
  /**
  * counter app stat 78
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat78 DataThunderRuleSetStats#appstat78}
  */
  readonly appstat78?: number;
  /**
  * counter app stat 79
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat79 DataThunderRuleSetStats#appstat79}
  */
  readonly appstat79?: number;
  /**
  * counter app stat 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat8 DataThunderRuleSetStats#appstat8}
  */
  readonly appstat8?: number;
  /**
  * counter app stat 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat80 DataThunderRuleSetStats#appstat80}
  */
  readonly appstat80?: number;
  /**
  * counter app stat 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat81 DataThunderRuleSetStats#appstat81}
  */
  readonly appstat81?: number;
  /**
  * counter app stat 82
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat82 DataThunderRuleSetStats#appstat82}
  */
  readonly appstat82?: number;
  /**
  * counter app stat 83
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat83 DataThunderRuleSetStats#appstat83}
  */
  readonly appstat83?: number;
  /**
  * counter app stat 84
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat84 DataThunderRuleSetStats#appstat84}
  */
  readonly appstat84?: number;
  /**
  * counter app stat 85
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat85 DataThunderRuleSetStats#appstat85}
  */
  readonly appstat85?: number;
  /**
  * counter app stat 86
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat86 DataThunderRuleSetStats#appstat86}
  */
  readonly appstat86?: number;
  /**
  * counter app stat 87
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat87 DataThunderRuleSetStats#appstat87}
  */
  readonly appstat87?: number;
  /**
  * counter app stat 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat88 DataThunderRuleSetStats#appstat88}
  */
  readonly appstat88?: number;
  /**
  * counter app stat 89
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat89 DataThunderRuleSetStats#appstat89}
  */
  readonly appstat89?: number;
  /**
  * counter app stat 9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat9 DataThunderRuleSetStats#appstat9}
  */
  readonly appstat9?: number;
  /**
  * counter app stat 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat90 DataThunderRuleSetStats#appstat90}
  */
  readonly appstat90?: number;
  /**
  * counter app stat 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat91 DataThunderRuleSetStats#appstat91}
  */
  readonly appstat91?: number;
  /**
  * counter app stat 92
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat92 DataThunderRuleSetStats#appstat92}
  */
  readonly appstat92?: number;
  /**
  * counter app stat 93
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat93 DataThunderRuleSetStats#appstat93}
  */
  readonly appstat93?: number;
  /**
  * counter app stat 94
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat94 DataThunderRuleSetStats#appstat94}
  */
  readonly appstat94?: number;
  /**
  * counter app stat 95
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat95 DataThunderRuleSetStats#appstat95}
  */
  readonly appstat95?: number;
  /**
  * counter app stat 96
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat96 DataThunderRuleSetStats#appstat96}
  */
  readonly appstat96?: number;
  /**
  * counter app stat 97
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat97 DataThunderRuleSetStats#appstat97}
  */
  readonly appstat97?: number;
  /**
  * counter app stat 98
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat98 DataThunderRuleSetStats#appstat98}
  */
  readonly appstat98?: number;
  /**
  * counter app stat 99
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#appstat99 DataThunderRuleSetStats#appstat99}
  */
  readonly appstat99?: number;
}

export function dataThunderRuleSetStatsAppStatsToTerraform(struct?: DataThunderRuleSetStatsAppStatsOutputReference | DataThunderRuleSetStatsAppStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appstat1: cdktf.numberToTerraform(struct!.appstat1),
    appstat10: cdktf.numberToTerraform(struct!.appstat10),
    appstat100: cdktf.numberToTerraform(struct!.appstat100),
    appstat101: cdktf.numberToTerraform(struct!.appstat101),
    appstat102: cdktf.numberToTerraform(struct!.appstat102),
    appstat103: cdktf.numberToTerraform(struct!.appstat103),
    appstat104: cdktf.numberToTerraform(struct!.appstat104),
    appstat105: cdktf.numberToTerraform(struct!.appstat105),
    appstat106: cdktf.numberToTerraform(struct!.appstat106),
    appstat107: cdktf.numberToTerraform(struct!.appstat107),
    appstat108: cdktf.numberToTerraform(struct!.appstat108),
    appstat109: cdktf.numberToTerraform(struct!.appstat109),
    appstat11: cdktf.numberToTerraform(struct!.appstat11),
    appstat110: cdktf.numberToTerraform(struct!.appstat110),
    appstat111: cdktf.numberToTerraform(struct!.appstat111),
    appstat112: cdktf.numberToTerraform(struct!.appstat112),
    appstat113: cdktf.numberToTerraform(struct!.appstat113),
    appstat114: cdktf.numberToTerraform(struct!.appstat114),
    appstat115: cdktf.numberToTerraform(struct!.appstat115),
    appstat116: cdktf.numberToTerraform(struct!.appstat116),
    appstat117: cdktf.numberToTerraform(struct!.appstat117),
    appstat118: cdktf.numberToTerraform(struct!.appstat118),
    appstat119: cdktf.numberToTerraform(struct!.appstat119),
    appstat12: cdktf.numberToTerraform(struct!.appstat12),
    appstat120: cdktf.numberToTerraform(struct!.appstat120),
    appstat121: cdktf.numberToTerraform(struct!.appstat121),
    appstat122: cdktf.numberToTerraform(struct!.appstat122),
    appstat123: cdktf.numberToTerraform(struct!.appstat123),
    appstat124: cdktf.numberToTerraform(struct!.appstat124),
    appstat125: cdktf.numberToTerraform(struct!.appstat125),
    appstat126: cdktf.numberToTerraform(struct!.appstat126),
    appstat127: cdktf.numberToTerraform(struct!.appstat127),
    appstat128: cdktf.numberToTerraform(struct!.appstat128),
    appstat129: cdktf.numberToTerraform(struct!.appstat129),
    appstat13: cdktf.numberToTerraform(struct!.appstat13),
    appstat130: cdktf.numberToTerraform(struct!.appstat130),
    appstat131: cdktf.numberToTerraform(struct!.appstat131),
    appstat132: cdktf.numberToTerraform(struct!.appstat132),
    appstat133: cdktf.numberToTerraform(struct!.appstat133),
    appstat134: cdktf.numberToTerraform(struct!.appstat134),
    appstat135: cdktf.numberToTerraform(struct!.appstat135),
    appstat136: cdktf.numberToTerraform(struct!.appstat136),
    appstat137: cdktf.numberToTerraform(struct!.appstat137),
    appstat138: cdktf.numberToTerraform(struct!.appstat138),
    appstat139: cdktf.numberToTerraform(struct!.appstat139),
    appstat14: cdktf.numberToTerraform(struct!.appstat14),
    appstat140: cdktf.numberToTerraform(struct!.appstat140),
    appstat141: cdktf.numberToTerraform(struct!.appstat141),
    appstat142: cdktf.numberToTerraform(struct!.appstat142),
    appstat143: cdktf.numberToTerraform(struct!.appstat143),
    appstat144: cdktf.numberToTerraform(struct!.appstat144),
    appstat145: cdktf.numberToTerraform(struct!.appstat145),
    appstat146: cdktf.numberToTerraform(struct!.appstat146),
    appstat147: cdktf.numberToTerraform(struct!.appstat147),
    appstat148: cdktf.numberToTerraform(struct!.appstat148),
    appstat149: cdktf.numberToTerraform(struct!.appstat149),
    appstat15: cdktf.numberToTerraform(struct!.appstat15),
    appstat150: cdktf.numberToTerraform(struct!.appstat150),
    appstat151: cdktf.numberToTerraform(struct!.appstat151),
    appstat152: cdktf.numberToTerraform(struct!.appstat152),
    appstat153: cdktf.numberToTerraform(struct!.appstat153),
    appstat154: cdktf.numberToTerraform(struct!.appstat154),
    appstat155: cdktf.numberToTerraform(struct!.appstat155),
    appstat156: cdktf.numberToTerraform(struct!.appstat156),
    appstat157: cdktf.numberToTerraform(struct!.appstat157),
    appstat158: cdktf.numberToTerraform(struct!.appstat158),
    appstat159: cdktf.numberToTerraform(struct!.appstat159),
    appstat16: cdktf.numberToTerraform(struct!.appstat16),
    appstat160: cdktf.numberToTerraform(struct!.appstat160),
    appstat161: cdktf.numberToTerraform(struct!.appstat161),
    appstat162: cdktf.numberToTerraform(struct!.appstat162),
    appstat163: cdktf.numberToTerraform(struct!.appstat163),
    appstat164: cdktf.numberToTerraform(struct!.appstat164),
    appstat165: cdktf.numberToTerraform(struct!.appstat165),
    appstat166: cdktf.numberToTerraform(struct!.appstat166),
    appstat167: cdktf.numberToTerraform(struct!.appstat167),
    appstat168: cdktf.numberToTerraform(struct!.appstat168),
    appstat169: cdktf.numberToTerraform(struct!.appstat169),
    appstat17: cdktf.numberToTerraform(struct!.appstat17),
    appstat170: cdktf.numberToTerraform(struct!.appstat170),
    appstat171: cdktf.numberToTerraform(struct!.appstat171),
    appstat172: cdktf.numberToTerraform(struct!.appstat172),
    appstat173: cdktf.numberToTerraform(struct!.appstat173),
    appstat174: cdktf.numberToTerraform(struct!.appstat174),
    appstat175: cdktf.numberToTerraform(struct!.appstat175),
    appstat176: cdktf.numberToTerraform(struct!.appstat176),
    appstat177: cdktf.numberToTerraform(struct!.appstat177),
    appstat178: cdktf.numberToTerraform(struct!.appstat178),
    appstat179: cdktf.numberToTerraform(struct!.appstat179),
    appstat18: cdktf.numberToTerraform(struct!.appstat18),
    appstat180: cdktf.numberToTerraform(struct!.appstat180),
    appstat181: cdktf.numberToTerraform(struct!.appstat181),
    appstat182: cdktf.numberToTerraform(struct!.appstat182),
    appstat183: cdktf.numberToTerraform(struct!.appstat183),
    appstat184: cdktf.numberToTerraform(struct!.appstat184),
    appstat185: cdktf.numberToTerraform(struct!.appstat185),
    appstat186: cdktf.numberToTerraform(struct!.appstat186),
    appstat187: cdktf.numberToTerraform(struct!.appstat187),
    appstat188: cdktf.numberToTerraform(struct!.appstat188),
    appstat189: cdktf.numberToTerraform(struct!.appstat189),
    appstat19: cdktf.numberToTerraform(struct!.appstat19),
    appstat190: cdktf.numberToTerraform(struct!.appstat190),
    appstat191: cdktf.numberToTerraform(struct!.appstat191),
    appstat192: cdktf.numberToTerraform(struct!.appstat192),
    appstat193: cdktf.numberToTerraform(struct!.appstat193),
    appstat194: cdktf.numberToTerraform(struct!.appstat194),
    appstat195: cdktf.numberToTerraform(struct!.appstat195),
    appstat196: cdktf.numberToTerraform(struct!.appstat196),
    appstat197: cdktf.numberToTerraform(struct!.appstat197),
    appstat198: cdktf.numberToTerraform(struct!.appstat198),
    appstat199: cdktf.numberToTerraform(struct!.appstat199),
    appstat2: cdktf.numberToTerraform(struct!.appstat2),
    appstat20: cdktf.numberToTerraform(struct!.appstat20),
    appstat200: cdktf.numberToTerraform(struct!.appstat200),
    appstat201: cdktf.numberToTerraform(struct!.appstat201),
    appstat202: cdktf.numberToTerraform(struct!.appstat202),
    appstat203: cdktf.numberToTerraform(struct!.appstat203),
    appstat204: cdktf.numberToTerraform(struct!.appstat204),
    appstat205: cdktf.numberToTerraform(struct!.appstat205),
    appstat206: cdktf.numberToTerraform(struct!.appstat206),
    appstat207: cdktf.numberToTerraform(struct!.appstat207),
    appstat208: cdktf.numberToTerraform(struct!.appstat208),
    appstat209: cdktf.numberToTerraform(struct!.appstat209),
    appstat21: cdktf.numberToTerraform(struct!.appstat21),
    appstat210: cdktf.numberToTerraform(struct!.appstat210),
    appstat211: cdktf.numberToTerraform(struct!.appstat211),
    appstat212: cdktf.numberToTerraform(struct!.appstat212),
    appstat213: cdktf.numberToTerraform(struct!.appstat213),
    appstat214: cdktf.numberToTerraform(struct!.appstat214),
    appstat215: cdktf.numberToTerraform(struct!.appstat215),
    appstat216: cdktf.numberToTerraform(struct!.appstat216),
    appstat217: cdktf.numberToTerraform(struct!.appstat217),
    appstat218: cdktf.numberToTerraform(struct!.appstat218),
    appstat219: cdktf.numberToTerraform(struct!.appstat219),
    appstat22: cdktf.numberToTerraform(struct!.appstat22),
    appstat220: cdktf.numberToTerraform(struct!.appstat220),
    appstat221: cdktf.numberToTerraform(struct!.appstat221),
    appstat222: cdktf.numberToTerraform(struct!.appstat222),
    appstat223: cdktf.numberToTerraform(struct!.appstat223),
    appstat224: cdktf.numberToTerraform(struct!.appstat224),
    appstat225: cdktf.numberToTerraform(struct!.appstat225),
    appstat226: cdktf.numberToTerraform(struct!.appstat226),
    appstat227: cdktf.numberToTerraform(struct!.appstat227),
    appstat228: cdktf.numberToTerraform(struct!.appstat228),
    appstat229: cdktf.numberToTerraform(struct!.appstat229),
    appstat23: cdktf.numberToTerraform(struct!.appstat23),
    appstat230: cdktf.numberToTerraform(struct!.appstat230),
    appstat231: cdktf.numberToTerraform(struct!.appstat231),
    appstat232: cdktf.numberToTerraform(struct!.appstat232),
    appstat233: cdktf.numberToTerraform(struct!.appstat233),
    appstat234: cdktf.numberToTerraform(struct!.appstat234),
    appstat235: cdktf.numberToTerraform(struct!.appstat235),
    appstat236: cdktf.numberToTerraform(struct!.appstat236),
    appstat237: cdktf.numberToTerraform(struct!.appstat237),
    appstat238: cdktf.numberToTerraform(struct!.appstat238),
    appstat239: cdktf.numberToTerraform(struct!.appstat239),
    appstat24: cdktf.numberToTerraform(struct!.appstat24),
    appstat240: cdktf.numberToTerraform(struct!.appstat240),
    appstat241: cdktf.numberToTerraform(struct!.appstat241),
    appstat242: cdktf.numberToTerraform(struct!.appstat242),
    appstat243: cdktf.numberToTerraform(struct!.appstat243),
    appstat244: cdktf.numberToTerraform(struct!.appstat244),
    appstat245: cdktf.numberToTerraform(struct!.appstat245),
    appstat246: cdktf.numberToTerraform(struct!.appstat246),
    appstat247: cdktf.numberToTerraform(struct!.appstat247),
    appstat248: cdktf.numberToTerraform(struct!.appstat248),
    appstat249: cdktf.numberToTerraform(struct!.appstat249),
    appstat25: cdktf.numberToTerraform(struct!.appstat25),
    appstat250: cdktf.numberToTerraform(struct!.appstat250),
    appstat251: cdktf.numberToTerraform(struct!.appstat251),
    appstat252: cdktf.numberToTerraform(struct!.appstat252),
    appstat253: cdktf.numberToTerraform(struct!.appstat253),
    appstat254: cdktf.numberToTerraform(struct!.appstat254),
    appstat255: cdktf.numberToTerraform(struct!.appstat255),
    appstat256: cdktf.numberToTerraform(struct!.appstat256),
    appstat257: cdktf.numberToTerraform(struct!.appstat257),
    appstat258: cdktf.numberToTerraform(struct!.appstat258),
    appstat259: cdktf.numberToTerraform(struct!.appstat259),
    appstat26: cdktf.numberToTerraform(struct!.appstat26),
    appstat260: cdktf.numberToTerraform(struct!.appstat260),
    appstat261: cdktf.numberToTerraform(struct!.appstat261),
    appstat262: cdktf.numberToTerraform(struct!.appstat262),
    appstat263: cdktf.numberToTerraform(struct!.appstat263),
    appstat264: cdktf.numberToTerraform(struct!.appstat264),
    appstat265: cdktf.numberToTerraform(struct!.appstat265),
    appstat266: cdktf.numberToTerraform(struct!.appstat266),
    appstat267: cdktf.numberToTerraform(struct!.appstat267),
    appstat268: cdktf.numberToTerraform(struct!.appstat268),
    appstat269: cdktf.numberToTerraform(struct!.appstat269),
    appstat27: cdktf.numberToTerraform(struct!.appstat27),
    appstat270: cdktf.numberToTerraform(struct!.appstat270),
    appstat271: cdktf.numberToTerraform(struct!.appstat271),
    appstat272: cdktf.numberToTerraform(struct!.appstat272),
    appstat273: cdktf.numberToTerraform(struct!.appstat273),
    appstat274: cdktf.numberToTerraform(struct!.appstat274),
    appstat275: cdktf.numberToTerraform(struct!.appstat275),
    appstat276: cdktf.numberToTerraform(struct!.appstat276),
    appstat277: cdktf.numberToTerraform(struct!.appstat277),
    appstat278: cdktf.numberToTerraform(struct!.appstat278),
    appstat279: cdktf.numberToTerraform(struct!.appstat279),
    appstat28: cdktf.numberToTerraform(struct!.appstat28),
    appstat280: cdktf.numberToTerraform(struct!.appstat280),
    appstat281: cdktf.numberToTerraform(struct!.appstat281),
    appstat282: cdktf.numberToTerraform(struct!.appstat282),
    appstat283: cdktf.numberToTerraform(struct!.appstat283),
    appstat284: cdktf.numberToTerraform(struct!.appstat284),
    appstat285: cdktf.numberToTerraform(struct!.appstat285),
    appstat286: cdktf.numberToTerraform(struct!.appstat286),
    appstat287: cdktf.numberToTerraform(struct!.appstat287),
    appstat288: cdktf.numberToTerraform(struct!.appstat288),
    appstat289: cdktf.numberToTerraform(struct!.appstat289),
    appstat29: cdktf.numberToTerraform(struct!.appstat29),
    appstat290: cdktf.numberToTerraform(struct!.appstat290),
    appstat291: cdktf.numberToTerraform(struct!.appstat291),
    appstat292: cdktf.numberToTerraform(struct!.appstat292),
    appstat293: cdktf.numberToTerraform(struct!.appstat293),
    appstat294: cdktf.numberToTerraform(struct!.appstat294),
    appstat295: cdktf.numberToTerraform(struct!.appstat295),
    appstat296: cdktf.numberToTerraform(struct!.appstat296),
    appstat297: cdktf.numberToTerraform(struct!.appstat297),
    appstat298: cdktf.numberToTerraform(struct!.appstat298),
    appstat299: cdktf.numberToTerraform(struct!.appstat299),
    appstat3: cdktf.numberToTerraform(struct!.appstat3),
    appstat30: cdktf.numberToTerraform(struct!.appstat30),
    appstat300: cdktf.numberToTerraform(struct!.appstat300),
    appstat301: cdktf.numberToTerraform(struct!.appstat301),
    appstat302: cdktf.numberToTerraform(struct!.appstat302),
    appstat303: cdktf.numberToTerraform(struct!.appstat303),
    appstat304: cdktf.numberToTerraform(struct!.appstat304),
    appstat305: cdktf.numberToTerraform(struct!.appstat305),
    appstat306: cdktf.numberToTerraform(struct!.appstat306),
    appstat307: cdktf.numberToTerraform(struct!.appstat307),
    appstat308: cdktf.numberToTerraform(struct!.appstat308),
    appstat309: cdktf.numberToTerraform(struct!.appstat309),
    appstat31: cdktf.numberToTerraform(struct!.appstat31),
    appstat310: cdktf.numberToTerraform(struct!.appstat310),
    appstat311: cdktf.numberToTerraform(struct!.appstat311),
    appstat312: cdktf.numberToTerraform(struct!.appstat312),
    appstat313: cdktf.numberToTerraform(struct!.appstat313),
    appstat314: cdktf.numberToTerraform(struct!.appstat314),
    appstat315: cdktf.numberToTerraform(struct!.appstat315),
    appstat316: cdktf.numberToTerraform(struct!.appstat316),
    appstat317: cdktf.numberToTerraform(struct!.appstat317),
    appstat318: cdktf.numberToTerraform(struct!.appstat318),
    appstat319: cdktf.numberToTerraform(struct!.appstat319),
    appstat32: cdktf.numberToTerraform(struct!.appstat32),
    appstat320: cdktf.numberToTerraform(struct!.appstat320),
    appstat321: cdktf.numberToTerraform(struct!.appstat321),
    appstat322: cdktf.numberToTerraform(struct!.appstat322),
    appstat323: cdktf.numberToTerraform(struct!.appstat323),
    appstat324: cdktf.numberToTerraform(struct!.appstat324),
    appstat325: cdktf.numberToTerraform(struct!.appstat325),
    appstat326: cdktf.numberToTerraform(struct!.appstat326),
    appstat327: cdktf.numberToTerraform(struct!.appstat327),
    appstat328: cdktf.numberToTerraform(struct!.appstat328),
    appstat329: cdktf.numberToTerraform(struct!.appstat329),
    appstat33: cdktf.numberToTerraform(struct!.appstat33),
    appstat330: cdktf.numberToTerraform(struct!.appstat330),
    appstat331: cdktf.numberToTerraform(struct!.appstat331),
    appstat332: cdktf.numberToTerraform(struct!.appstat332),
    appstat333: cdktf.numberToTerraform(struct!.appstat333),
    appstat334: cdktf.numberToTerraform(struct!.appstat334),
    appstat335: cdktf.numberToTerraform(struct!.appstat335),
    appstat336: cdktf.numberToTerraform(struct!.appstat336),
    appstat337: cdktf.numberToTerraform(struct!.appstat337),
    appstat338: cdktf.numberToTerraform(struct!.appstat338),
    appstat339: cdktf.numberToTerraform(struct!.appstat339),
    appstat34: cdktf.numberToTerraform(struct!.appstat34),
    appstat340: cdktf.numberToTerraform(struct!.appstat340),
    appstat341: cdktf.numberToTerraform(struct!.appstat341),
    appstat342: cdktf.numberToTerraform(struct!.appstat342),
    appstat343: cdktf.numberToTerraform(struct!.appstat343),
    appstat344: cdktf.numberToTerraform(struct!.appstat344),
    appstat345: cdktf.numberToTerraform(struct!.appstat345),
    appstat346: cdktf.numberToTerraform(struct!.appstat346),
    appstat347: cdktf.numberToTerraform(struct!.appstat347),
    appstat348: cdktf.numberToTerraform(struct!.appstat348),
    appstat349: cdktf.numberToTerraform(struct!.appstat349),
    appstat35: cdktf.numberToTerraform(struct!.appstat35),
    appstat350: cdktf.numberToTerraform(struct!.appstat350),
    appstat351: cdktf.numberToTerraform(struct!.appstat351),
    appstat352: cdktf.numberToTerraform(struct!.appstat352),
    appstat353: cdktf.numberToTerraform(struct!.appstat353),
    appstat354: cdktf.numberToTerraform(struct!.appstat354),
    appstat355: cdktf.numberToTerraform(struct!.appstat355),
    appstat356: cdktf.numberToTerraform(struct!.appstat356),
    appstat357: cdktf.numberToTerraform(struct!.appstat357),
    appstat358: cdktf.numberToTerraform(struct!.appstat358),
    appstat359: cdktf.numberToTerraform(struct!.appstat359),
    appstat36: cdktf.numberToTerraform(struct!.appstat36),
    appstat360: cdktf.numberToTerraform(struct!.appstat360),
    appstat361: cdktf.numberToTerraform(struct!.appstat361),
    appstat362: cdktf.numberToTerraform(struct!.appstat362),
    appstat363: cdktf.numberToTerraform(struct!.appstat363),
    appstat364: cdktf.numberToTerraform(struct!.appstat364),
    appstat365: cdktf.numberToTerraform(struct!.appstat365),
    appstat366: cdktf.numberToTerraform(struct!.appstat366),
    appstat367: cdktf.numberToTerraform(struct!.appstat367),
    appstat368: cdktf.numberToTerraform(struct!.appstat368),
    appstat369: cdktf.numberToTerraform(struct!.appstat369),
    appstat37: cdktf.numberToTerraform(struct!.appstat37),
    appstat370: cdktf.numberToTerraform(struct!.appstat370),
    appstat371: cdktf.numberToTerraform(struct!.appstat371),
    appstat372: cdktf.numberToTerraform(struct!.appstat372),
    appstat373: cdktf.numberToTerraform(struct!.appstat373),
    appstat374: cdktf.numberToTerraform(struct!.appstat374),
    appstat375: cdktf.numberToTerraform(struct!.appstat375),
    appstat376: cdktf.numberToTerraform(struct!.appstat376),
    appstat377: cdktf.numberToTerraform(struct!.appstat377),
    appstat378: cdktf.numberToTerraform(struct!.appstat378),
    appstat379: cdktf.numberToTerraform(struct!.appstat379),
    appstat38: cdktf.numberToTerraform(struct!.appstat38),
    appstat380: cdktf.numberToTerraform(struct!.appstat380),
    appstat381: cdktf.numberToTerraform(struct!.appstat381),
    appstat382: cdktf.numberToTerraform(struct!.appstat382),
    appstat383: cdktf.numberToTerraform(struct!.appstat383),
    appstat384: cdktf.numberToTerraform(struct!.appstat384),
    appstat385: cdktf.numberToTerraform(struct!.appstat385),
    appstat386: cdktf.numberToTerraform(struct!.appstat386),
    appstat387: cdktf.numberToTerraform(struct!.appstat387),
    appstat388: cdktf.numberToTerraform(struct!.appstat388),
    appstat389: cdktf.numberToTerraform(struct!.appstat389),
    appstat39: cdktf.numberToTerraform(struct!.appstat39),
    appstat390: cdktf.numberToTerraform(struct!.appstat390),
    appstat391: cdktf.numberToTerraform(struct!.appstat391),
    appstat392: cdktf.numberToTerraform(struct!.appstat392),
    appstat393: cdktf.numberToTerraform(struct!.appstat393),
    appstat394: cdktf.numberToTerraform(struct!.appstat394),
    appstat395: cdktf.numberToTerraform(struct!.appstat395),
    appstat396: cdktf.numberToTerraform(struct!.appstat396),
    appstat397: cdktf.numberToTerraform(struct!.appstat397),
    appstat398: cdktf.numberToTerraform(struct!.appstat398),
    appstat399: cdktf.numberToTerraform(struct!.appstat399),
    appstat4: cdktf.numberToTerraform(struct!.appstat4),
    appstat40: cdktf.numberToTerraform(struct!.appstat40),
    appstat400: cdktf.numberToTerraform(struct!.appstat400),
    appstat401: cdktf.numberToTerraform(struct!.appstat401),
    appstat402: cdktf.numberToTerraform(struct!.appstat402),
    appstat403: cdktf.numberToTerraform(struct!.appstat403),
    appstat404: cdktf.numberToTerraform(struct!.appstat404),
    appstat405: cdktf.numberToTerraform(struct!.appstat405),
    appstat406: cdktf.numberToTerraform(struct!.appstat406),
    appstat407: cdktf.numberToTerraform(struct!.appstat407),
    appstat408: cdktf.numberToTerraform(struct!.appstat408),
    appstat409: cdktf.numberToTerraform(struct!.appstat409),
    appstat41: cdktf.numberToTerraform(struct!.appstat41),
    appstat410: cdktf.numberToTerraform(struct!.appstat410),
    appstat411: cdktf.numberToTerraform(struct!.appstat411),
    appstat412: cdktf.numberToTerraform(struct!.appstat412),
    appstat413: cdktf.numberToTerraform(struct!.appstat413),
    appstat414: cdktf.numberToTerraform(struct!.appstat414),
    appstat415: cdktf.numberToTerraform(struct!.appstat415),
    appstat416: cdktf.numberToTerraform(struct!.appstat416),
    appstat417: cdktf.numberToTerraform(struct!.appstat417),
    appstat418: cdktf.numberToTerraform(struct!.appstat418),
    appstat419: cdktf.numberToTerraform(struct!.appstat419),
    appstat42: cdktf.numberToTerraform(struct!.appstat42),
    appstat420: cdktf.numberToTerraform(struct!.appstat420),
    appstat421: cdktf.numberToTerraform(struct!.appstat421),
    appstat422: cdktf.numberToTerraform(struct!.appstat422),
    appstat423: cdktf.numberToTerraform(struct!.appstat423),
    appstat424: cdktf.numberToTerraform(struct!.appstat424),
    appstat425: cdktf.numberToTerraform(struct!.appstat425),
    appstat426: cdktf.numberToTerraform(struct!.appstat426),
    appstat427: cdktf.numberToTerraform(struct!.appstat427),
    appstat428: cdktf.numberToTerraform(struct!.appstat428),
    appstat429: cdktf.numberToTerraform(struct!.appstat429),
    appstat43: cdktf.numberToTerraform(struct!.appstat43),
    appstat430: cdktf.numberToTerraform(struct!.appstat430),
    appstat431: cdktf.numberToTerraform(struct!.appstat431),
    appstat432: cdktf.numberToTerraform(struct!.appstat432),
    appstat433: cdktf.numberToTerraform(struct!.appstat433),
    appstat434: cdktf.numberToTerraform(struct!.appstat434),
    appstat435: cdktf.numberToTerraform(struct!.appstat435),
    appstat436: cdktf.numberToTerraform(struct!.appstat436),
    appstat437: cdktf.numberToTerraform(struct!.appstat437),
    appstat438: cdktf.numberToTerraform(struct!.appstat438),
    appstat439: cdktf.numberToTerraform(struct!.appstat439),
    appstat44: cdktf.numberToTerraform(struct!.appstat44),
    appstat440: cdktf.numberToTerraform(struct!.appstat440),
    appstat441: cdktf.numberToTerraform(struct!.appstat441),
    appstat442: cdktf.numberToTerraform(struct!.appstat442),
    appstat443: cdktf.numberToTerraform(struct!.appstat443),
    appstat444: cdktf.numberToTerraform(struct!.appstat444),
    appstat445: cdktf.numberToTerraform(struct!.appstat445),
    appstat446: cdktf.numberToTerraform(struct!.appstat446),
    appstat447: cdktf.numberToTerraform(struct!.appstat447),
    appstat448: cdktf.numberToTerraform(struct!.appstat448),
    appstat449: cdktf.numberToTerraform(struct!.appstat449),
    appstat45: cdktf.numberToTerraform(struct!.appstat45),
    appstat450: cdktf.numberToTerraform(struct!.appstat450),
    appstat451: cdktf.numberToTerraform(struct!.appstat451),
    appstat452: cdktf.numberToTerraform(struct!.appstat452),
    appstat453: cdktf.numberToTerraform(struct!.appstat453),
    appstat454: cdktf.numberToTerraform(struct!.appstat454),
    appstat455: cdktf.numberToTerraform(struct!.appstat455),
    appstat456: cdktf.numberToTerraform(struct!.appstat456),
    appstat457: cdktf.numberToTerraform(struct!.appstat457),
    appstat458: cdktf.numberToTerraform(struct!.appstat458),
    appstat459: cdktf.numberToTerraform(struct!.appstat459),
    appstat46: cdktf.numberToTerraform(struct!.appstat46),
    appstat460: cdktf.numberToTerraform(struct!.appstat460),
    appstat461: cdktf.numberToTerraform(struct!.appstat461),
    appstat462: cdktf.numberToTerraform(struct!.appstat462),
    appstat463: cdktf.numberToTerraform(struct!.appstat463),
    appstat464: cdktf.numberToTerraform(struct!.appstat464),
    appstat465: cdktf.numberToTerraform(struct!.appstat465),
    appstat466: cdktf.numberToTerraform(struct!.appstat466),
    appstat467: cdktf.numberToTerraform(struct!.appstat467),
    appstat468: cdktf.numberToTerraform(struct!.appstat468),
    appstat469: cdktf.numberToTerraform(struct!.appstat469),
    appstat47: cdktf.numberToTerraform(struct!.appstat47),
    appstat470: cdktf.numberToTerraform(struct!.appstat470),
    appstat471: cdktf.numberToTerraform(struct!.appstat471),
    appstat472: cdktf.numberToTerraform(struct!.appstat472),
    appstat473: cdktf.numberToTerraform(struct!.appstat473),
    appstat474: cdktf.numberToTerraform(struct!.appstat474),
    appstat475: cdktf.numberToTerraform(struct!.appstat475),
    appstat476: cdktf.numberToTerraform(struct!.appstat476),
    appstat477: cdktf.numberToTerraform(struct!.appstat477),
    appstat478: cdktf.numberToTerraform(struct!.appstat478),
    appstat479: cdktf.numberToTerraform(struct!.appstat479),
    appstat48: cdktf.numberToTerraform(struct!.appstat48),
    appstat480: cdktf.numberToTerraform(struct!.appstat480),
    appstat481: cdktf.numberToTerraform(struct!.appstat481),
    appstat482: cdktf.numberToTerraform(struct!.appstat482),
    appstat483: cdktf.numberToTerraform(struct!.appstat483),
    appstat484: cdktf.numberToTerraform(struct!.appstat484),
    appstat485: cdktf.numberToTerraform(struct!.appstat485),
    appstat486: cdktf.numberToTerraform(struct!.appstat486),
    appstat487: cdktf.numberToTerraform(struct!.appstat487),
    appstat488: cdktf.numberToTerraform(struct!.appstat488),
    appstat489: cdktf.numberToTerraform(struct!.appstat489),
    appstat49: cdktf.numberToTerraform(struct!.appstat49),
    appstat490: cdktf.numberToTerraform(struct!.appstat490),
    appstat491: cdktf.numberToTerraform(struct!.appstat491),
    appstat492: cdktf.numberToTerraform(struct!.appstat492),
    appstat493: cdktf.numberToTerraform(struct!.appstat493),
    appstat494: cdktf.numberToTerraform(struct!.appstat494),
    appstat495: cdktf.numberToTerraform(struct!.appstat495),
    appstat496: cdktf.numberToTerraform(struct!.appstat496),
    appstat497: cdktf.numberToTerraform(struct!.appstat497),
    appstat498: cdktf.numberToTerraform(struct!.appstat498),
    appstat499: cdktf.numberToTerraform(struct!.appstat499),
    appstat5: cdktf.numberToTerraform(struct!.appstat5),
    appstat50: cdktf.numberToTerraform(struct!.appstat50),
    appstat500: cdktf.numberToTerraform(struct!.appstat500),
    appstat501: cdktf.numberToTerraform(struct!.appstat501),
    appstat502: cdktf.numberToTerraform(struct!.appstat502),
    appstat503: cdktf.numberToTerraform(struct!.appstat503),
    appstat504: cdktf.numberToTerraform(struct!.appstat504),
    appstat505: cdktf.numberToTerraform(struct!.appstat505),
    appstat506: cdktf.numberToTerraform(struct!.appstat506),
    appstat507: cdktf.numberToTerraform(struct!.appstat507),
    appstat508: cdktf.numberToTerraform(struct!.appstat508),
    appstat509: cdktf.numberToTerraform(struct!.appstat509),
    appstat51: cdktf.numberToTerraform(struct!.appstat51),
    appstat510: cdktf.numberToTerraform(struct!.appstat510),
    appstat511: cdktf.numberToTerraform(struct!.appstat511),
    appstat52: cdktf.numberToTerraform(struct!.appstat52),
    appstat53: cdktf.numberToTerraform(struct!.appstat53),
    appstat54: cdktf.numberToTerraform(struct!.appstat54),
    appstat55: cdktf.numberToTerraform(struct!.appstat55),
    appstat56: cdktf.numberToTerraform(struct!.appstat56),
    appstat57: cdktf.numberToTerraform(struct!.appstat57),
    appstat58: cdktf.numberToTerraform(struct!.appstat58),
    appstat59: cdktf.numberToTerraform(struct!.appstat59),
    appstat6: cdktf.numberToTerraform(struct!.appstat6),
    appstat60: cdktf.numberToTerraform(struct!.appstat60),
    appstat61: cdktf.numberToTerraform(struct!.appstat61),
    appstat62: cdktf.numberToTerraform(struct!.appstat62),
    appstat63: cdktf.numberToTerraform(struct!.appstat63),
    appstat64: cdktf.numberToTerraform(struct!.appstat64),
    appstat65: cdktf.numberToTerraform(struct!.appstat65),
    appstat66: cdktf.numberToTerraform(struct!.appstat66),
    appstat67: cdktf.numberToTerraform(struct!.appstat67),
    appstat68: cdktf.numberToTerraform(struct!.appstat68),
    appstat69: cdktf.numberToTerraform(struct!.appstat69),
    appstat7: cdktf.numberToTerraform(struct!.appstat7),
    appstat70: cdktf.numberToTerraform(struct!.appstat70),
    appstat71: cdktf.numberToTerraform(struct!.appstat71),
    appstat72: cdktf.numberToTerraform(struct!.appstat72),
    appstat73: cdktf.numberToTerraform(struct!.appstat73),
    appstat74: cdktf.numberToTerraform(struct!.appstat74),
    appstat75: cdktf.numberToTerraform(struct!.appstat75),
    appstat76: cdktf.numberToTerraform(struct!.appstat76),
    appstat77: cdktf.numberToTerraform(struct!.appstat77),
    appstat78: cdktf.numberToTerraform(struct!.appstat78),
    appstat79: cdktf.numberToTerraform(struct!.appstat79),
    appstat8: cdktf.numberToTerraform(struct!.appstat8),
    appstat80: cdktf.numberToTerraform(struct!.appstat80),
    appstat81: cdktf.numberToTerraform(struct!.appstat81),
    appstat82: cdktf.numberToTerraform(struct!.appstat82),
    appstat83: cdktf.numberToTerraform(struct!.appstat83),
    appstat84: cdktf.numberToTerraform(struct!.appstat84),
    appstat85: cdktf.numberToTerraform(struct!.appstat85),
    appstat86: cdktf.numberToTerraform(struct!.appstat86),
    appstat87: cdktf.numberToTerraform(struct!.appstat87),
    appstat88: cdktf.numberToTerraform(struct!.appstat88),
    appstat89: cdktf.numberToTerraform(struct!.appstat89),
    appstat9: cdktf.numberToTerraform(struct!.appstat9),
    appstat90: cdktf.numberToTerraform(struct!.appstat90),
    appstat91: cdktf.numberToTerraform(struct!.appstat91),
    appstat92: cdktf.numberToTerraform(struct!.appstat92),
    appstat93: cdktf.numberToTerraform(struct!.appstat93),
    appstat94: cdktf.numberToTerraform(struct!.appstat94),
    appstat95: cdktf.numberToTerraform(struct!.appstat95),
    appstat96: cdktf.numberToTerraform(struct!.appstat96),
    appstat97: cdktf.numberToTerraform(struct!.appstat97),
    appstat98: cdktf.numberToTerraform(struct!.appstat98),
    appstat99: cdktf.numberToTerraform(struct!.appstat99),
  }
}


export function dataThunderRuleSetStatsAppStatsToHclTerraform(struct?: DataThunderRuleSetStatsAppStatsOutputReference | DataThunderRuleSetStatsAppStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appstat1: {
      value: cdktf.numberToHclTerraform(struct!.appstat1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat10: {
      value: cdktf.numberToHclTerraform(struct!.appstat10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat100: {
      value: cdktf.numberToHclTerraform(struct!.appstat100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat101: {
      value: cdktf.numberToHclTerraform(struct!.appstat101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat102: {
      value: cdktf.numberToHclTerraform(struct!.appstat102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat103: {
      value: cdktf.numberToHclTerraform(struct!.appstat103),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat104: {
      value: cdktf.numberToHclTerraform(struct!.appstat104),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat105: {
      value: cdktf.numberToHclTerraform(struct!.appstat105),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat106: {
      value: cdktf.numberToHclTerraform(struct!.appstat106),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat107: {
      value: cdktf.numberToHclTerraform(struct!.appstat107),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat108: {
      value: cdktf.numberToHclTerraform(struct!.appstat108),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat109: {
      value: cdktf.numberToHclTerraform(struct!.appstat109),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat11: {
      value: cdktf.numberToHclTerraform(struct!.appstat11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat110: {
      value: cdktf.numberToHclTerraform(struct!.appstat110),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat111: {
      value: cdktf.numberToHclTerraform(struct!.appstat111),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat112: {
      value: cdktf.numberToHclTerraform(struct!.appstat112),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat113: {
      value: cdktf.numberToHclTerraform(struct!.appstat113),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat114: {
      value: cdktf.numberToHclTerraform(struct!.appstat114),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat115: {
      value: cdktf.numberToHclTerraform(struct!.appstat115),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat116: {
      value: cdktf.numberToHclTerraform(struct!.appstat116),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat117: {
      value: cdktf.numberToHclTerraform(struct!.appstat117),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat118: {
      value: cdktf.numberToHclTerraform(struct!.appstat118),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat119: {
      value: cdktf.numberToHclTerraform(struct!.appstat119),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat12: {
      value: cdktf.numberToHclTerraform(struct!.appstat12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat120: {
      value: cdktf.numberToHclTerraform(struct!.appstat120),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat121: {
      value: cdktf.numberToHclTerraform(struct!.appstat121),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat122: {
      value: cdktf.numberToHclTerraform(struct!.appstat122),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat123: {
      value: cdktf.numberToHclTerraform(struct!.appstat123),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat124: {
      value: cdktf.numberToHclTerraform(struct!.appstat124),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat125: {
      value: cdktf.numberToHclTerraform(struct!.appstat125),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat126: {
      value: cdktf.numberToHclTerraform(struct!.appstat126),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat127: {
      value: cdktf.numberToHclTerraform(struct!.appstat127),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat128: {
      value: cdktf.numberToHclTerraform(struct!.appstat128),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat129: {
      value: cdktf.numberToHclTerraform(struct!.appstat129),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat13: {
      value: cdktf.numberToHclTerraform(struct!.appstat13),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat130: {
      value: cdktf.numberToHclTerraform(struct!.appstat130),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat131: {
      value: cdktf.numberToHclTerraform(struct!.appstat131),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat132: {
      value: cdktf.numberToHclTerraform(struct!.appstat132),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat133: {
      value: cdktf.numberToHclTerraform(struct!.appstat133),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat134: {
      value: cdktf.numberToHclTerraform(struct!.appstat134),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat135: {
      value: cdktf.numberToHclTerraform(struct!.appstat135),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat136: {
      value: cdktf.numberToHclTerraform(struct!.appstat136),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat137: {
      value: cdktf.numberToHclTerraform(struct!.appstat137),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat138: {
      value: cdktf.numberToHclTerraform(struct!.appstat138),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat139: {
      value: cdktf.numberToHclTerraform(struct!.appstat139),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat14: {
      value: cdktf.numberToHclTerraform(struct!.appstat14),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat140: {
      value: cdktf.numberToHclTerraform(struct!.appstat140),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat141: {
      value: cdktf.numberToHclTerraform(struct!.appstat141),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat142: {
      value: cdktf.numberToHclTerraform(struct!.appstat142),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat143: {
      value: cdktf.numberToHclTerraform(struct!.appstat143),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat144: {
      value: cdktf.numberToHclTerraform(struct!.appstat144),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat145: {
      value: cdktf.numberToHclTerraform(struct!.appstat145),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat146: {
      value: cdktf.numberToHclTerraform(struct!.appstat146),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat147: {
      value: cdktf.numberToHclTerraform(struct!.appstat147),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat148: {
      value: cdktf.numberToHclTerraform(struct!.appstat148),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat149: {
      value: cdktf.numberToHclTerraform(struct!.appstat149),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat15: {
      value: cdktf.numberToHclTerraform(struct!.appstat15),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat150: {
      value: cdktf.numberToHclTerraform(struct!.appstat150),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat151: {
      value: cdktf.numberToHclTerraform(struct!.appstat151),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat152: {
      value: cdktf.numberToHclTerraform(struct!.appstat152),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat153: {
      value: cdktf.numberToHclTerraform(struct!.appstat153),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat154: {
      value: cdktf.numberToHclTerraform(struct!.appstat154),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat155: {
      value: cdktf.numberToHclTerraform(struct!.appstat155),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat156: {
      value: cdktf.numberToHclTerraform(struct!.appstat156),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat157: {
      value: cdktf.numberToHclTerraform(struct!.appstat157),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat158: {
      value: cdktf.numberToHclTerraform(struct!.appstat158),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat159: {
      value: cdktf.numberToHclTerraform(struct!.appstat159),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat16: {
      value: cdktf.numberToHclTerraform(struct!.appstat16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat160: {
      value: cdktf.numberToHclTerraform(struct!.appstat160),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat161: {
      value: cdktf.numberToHclTerraform(struct!.appstat161),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat162: {
      value: cdktf.numberToHclTerraform(struct!.appstat162),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat163: {
      value: cdktf.numberToHclTerraform(struct!.appstat163),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat164: {
      value: cdktf.numberToHclTerraform(struct!.appstat164),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat165: {
      value: cdktf.numberToHclTerraform(struct!.appstat165),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat166: {
      value: cdktf.numberToHclTerraform(struct!.appstat166),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat167: {
      value: cdktf.numberToHclTerraform(struct!.appstat167),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat168: {
      value: cdktf.numberToHclTerraform(struct!.appstat168),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat169: {
      value: cdktf.numberToHclTerraform(struct!.appstat169),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat17: {
      value: cdktf.numberToHclTerraform(struct!.appstat17),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat170: {
      value: cdktf.numberToHclTerraform(struct!.appstat170),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat171: {
      value: cdktf.numberToHclTerraform(struct!.appstat171),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat172: {
      value: cdktf.numberToHclTerraform(struct!.appstat172),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat173: {
      value: cdktf.numberToHclTerraform(struct!.appstat173),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat174: {
      value: cdktf.numberToHclTerraform(struct!.appstat174),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat175: {
      value: cdktf.numberToHclTerraform(struct!.appstat175),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat176: {
      value: cdktf.numberToHclTerraform(struct!.appstat176),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat177: {
      value: cdktf.numberToHclTerraform(struct!.appstat177),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat178: {
      value: cdktf.numberToHclTerraform(struct!.appstat178),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat179: {
      value: cdktf.numberToHclTerraform(struct!.appstat179),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat18: {
      value: cdktf.numberToHclTerraform(struct!.appstat18),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat180: {
      value: cdktf.numberToHclTerraform(struct!.appstat180),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat181: {
      value: cdktf.numberToHclTerraform(struct!.appstat181),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat182: {
      value: cdktf.numberToHclTerraform(struct!.appstat182),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat183: {
      value: cdktf.numberToHclTerraform(struct!.appstat183),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat184: {
      value: cdktf.numberToHclTerraform(struct!.appstat184),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat185: {
      value: cdktf.numberToHclTerraform(struct!.appstat185),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat186: {
      value: cdktf.numberToHclTerraform(struct!.appstat186),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat187: {
      value: cdktf.numberToHclTerraform(struct!.appstat187),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat188: {
      value: cdktf.numberToHclTerraform(struct!.appstat188),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat189: {
      value: cdktf.numberToHclTerraform(struct!.appstat189),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat19: {
      value: cdktf.numberToHclTerraform(struct!.appstat19),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat190: {
      value: cdktf.numberToHclTerraform(struct!.appstat190),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat191: {
      value: cdktf.numberToHclTerraform(struct!.appstat191),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat192: {
      value: cdktf.numberToHclTerraform(struct!.appstat192),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat193: {
      value: cdktf.numberToHclTerraform(struct!.appstat193),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat194: {
      value: cdktf.numberToHclTerraform(struct!.appstat194),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat195: {
      value: cdktf.numberToHclTerraform(struct!.appstat195),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat196: {
      value: cdktf.numberToHclTerraform(struct!.appstat196),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat197: {
      value: cdktf.numberToHclTerraform(struct!.appstat197),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat198: {
      value: cdktf.numberToHclTerraform(struct!.appstat198),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat199: {
      value: cdktf.numberToHclTerraform(struct!.appstat199),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat2: {
      value: cdktf.numberToHclTerraform(struct!.appstat2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat20: {
      value: cdktf.numberToHclTerraform(struct!.appstat20),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat200: {
      value: cdktf.numberToHclTerraform(struct!.appstat200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat201: {
      value: cdktf.numberToHclTerraform(struct!.appstat201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat202: {
      value: cdktf.numberToHclTerraform(struct!.appstat202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat203: {
      value: cdktf.numberToHclTerraform(struct!.appstat203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat204: {
      value: cdktf.numberToHclTerraform(struct!.appstat204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat205: {
      value: cdktf.numberToHclTerraform(struct!.appstat205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat206: {
      value: cdktf.numberToHclTerraform(struct!.appstat206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat207: {
      value: cdktf.numberToHclTerraform(struct!.appstat207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat208: {
      value: cdktf.numberToHclTerraform(struct!.appstat208),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat209: {
      value: cdktf.numberToHclTerraform(struct!.appstat209),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat21: {
      value: cdktf.numberToHclTerraform(struct!.appstat21),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat210: {
      value: cdktf.numberToHclTerraform(struct!.appstat210),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat211: {
      value: cdktf.numberToHclTerraform(struct!.appstat211),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat212: {
      value: cdktf.numberToHclTerraform(struct!.appstat212),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat213: {
      value: cdktf.numberToHclTerraform(struct!.appstat213),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat214: {
      value: cdktf.numberToHclTerraform(struct!.appstat214),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat215: {
      value: cdktf.numberToHclTerraform(struct!.appstat215),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat216: {
      value: cdktf.numberToHclTerraform(struct!.appstat216),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat217: {
      value: cdktf.numberToHclTerraform(struct!.appstat217),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat218: {
      value: cdktf.numberToHclTerraform(struct!.appstat218),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat219: {
      value: cdktf.numberToHclTerraform(struct!.appstat219),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat22: {
      value: cdktf.numberToHclTerraform(struct!.appstat22),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat220: {
      value: cdktf.numberToHclTerraform(struct!.appstat220),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat221: {
      value: cdktf.numberToHclTerraform(struct!.appstat221),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat222: {
      value: cdktf.numberToHclTerraform(struct!.appstat222),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat223: {
      value: cdktf.numberToHclTerraform(struct!.appstat223),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat224: {
      value: cdktf.numberToHclTerraform(struct!.appstat224),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat225: {
      value: cdktf.numberToHclTerraform(struct!.appstat225),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat226: {
      value: cdktf.numberToHclTerraform(struct!.appstat226),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat227: {
      value: cdktf.numberToHclTerraform(struct!.appstat227),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat228: {
      value: cdktf.numberToHclTerraform(struct!.appstat228),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat229: {
      value: cdktf.numberToHclTerraform(struct!.appstat229),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat23: {
      value: cdktf.numberToHclTerraform(struct!.appstat23),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat230: {
      value: cdktf.numberToHclTerraform(struct!.appstat230),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat231: {
      value: cdktf.numberToHclTerraform(struct!.appstat231),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat232: {
      value: cdktf.numberToHclTerraform(struct!.appstat232),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat233: {
      value: cdktf.numberToHclTerraform(struct!.appstat233),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat234: {
      value: cdktf.numberToHclTerraform(struct!.appstat234),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat235: {
      value: cdktf.numberToHclTerraform(struct!.appstat235),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat236: {
      value: cdktf.numberToHclTerraform(struct!.appstat236),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat237: {
      value: cdktf.numberToHclTerraform(struct!.appstat237),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat238: {
      value: cdktf.numberToHclTerraform(struct!.appstat238),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat239: {
      value: cdktf.numberToHclTerraform(struct!.appstat239),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat24: {
      value: cdktf.numberToHclTerraform(struct!.appstat24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat240: {
      value: cdktf.numberToHclTerraform(struct!.appstat240),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat241: {
      value: cdktf.numberToHclTerraform(struct!.appstat241),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat242: {
      value: cdktf.numberToHclTerraform(struct!.appstat242),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat243: {
      value: cdktf.numberToHclTerraform(struct!.appstat243),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat244: {
      value: cdktf.numberToHclTerraform(struct!.appstat244),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat245: {
      value: cdktf.numberToHclTerraform(struct!.appstat245),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat246: {
      value: cdktf.numberToHclTerraform(struct!.appstat246),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat247: {
      value: cdktf.numberToHclTerraform(struct!.appstat247),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat248: {
      value: cdktf.numberToHclTerraform(struct!.appstat248),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat249: {
      value: cdktf.numberToHclTerraform(struct!.appstat249),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat25: {
      value: cdktf.numberToHclTerraform(struct!.appstat25),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat250: {
      value: cdktf.numberToHclTerraform(struct!.appstat250),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat251: {
      value: cdktf.numberToHclTerraform(struct!.appstat251),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat252: {
      value: cdktf.numberToHclTerraform(struct!.appstat252),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat253: {
      value: cdktf.numberToHclTerraform(struct!.appstat253),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat254: {
      value: cdktf.numberToHclTerraform(struct!.appstat254),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat255: {
      value: cdktf.numberToHclTerraform(struct!.appstat255),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat256: {
      value: cdktf.numberToHclTerraform(struct!.appstat256),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat257: {
      value: cdktf.numberToHclTerraform(struct!.appstat257),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat258: {
      value: cdktf.numberToHclTerraform(struct!.appstat258),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat259: {
      value: cdktf.numberToHclTerraform(struct!.appstat259),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat26: {
      value: cdktf.numberToHclTerraform(struct!.appstat26),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat260: {
      value: cdktf.numberToHclTerraform(struct!.appstat260),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat261: {
      value: cdktf.numberToHclTerraform(struct!.appstat261),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat262: {
      value: cdktf.numberToHclTerraform(struct!.appstat262),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat263: {
      value: cdktf.numberToHclTerraform(struct!.appstat263),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat264: {
      value: cdktf.numberToHclTerraform(struct!.appstat264),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat265: {
      value: cdktf.numberToHclTerraform(struct!.appstat265),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat266: {
      value: cdktf.numberToHclTerraform(struct!.appstat266),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat267: {
      value: cdktf.numberToHclTerraform(struct!.appstat267),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat268: {
      value: cdktf.numberToHclTerraform(struct!.appstat268),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat269: {
      value: cdktf.numberToHclTerraform(struct!.appstat269),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat27: {
      value: cdktf.numberToHclTerraform(struct!.appstat27),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat270: {
      value: cdktf.numberToHclTerraform(struct!.appstat270),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat271: {
      value: cdktf.numberToHclTerraform(struct!.appstat271),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat272: {
      value: cdktf.numberToHclTerraform(struct!.appstat272),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat273: {
      value: cdktf.numberToHclTerraform(struct!.appstat273),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat274: {
      value: cdktf.numberToHclTerraform(struct!.appstat274),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat275: {
      value: cdktf.numberToHclTerraform(struct!.appstat275),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat276: {
      value: cdktf.numberToHclTerraform(struct!.appstat276),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat277: {
      value: cdktf.numberToHclTerraform(struct!.appstat277),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat278: {
      value: cdktf.numberToHclTerraform(struct!.appstat278),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat279: {
      value: cdktf.numberToHclTerraform(struct!.appstat279),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat28: {
      value: cdktf.numberToHclTerraform(struct!.appstat28),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat280: {
      value: cdktf.numberToHclTerraform(struct!.appstat280),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat281: {
      value: cdktf.numberToHclTerraform(struct!.appstat281),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat282: {
      value: cdktf.numberToHclTerraform(struct!.appstat282),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat283: {
      value: cdktf.numberToHclTerraform(struct!.appstat283),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat284: {
      value: cdktf.numberToHclTerraform(struct!.appstat284),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat285: {
      value: cdktf.numberToHclTerraform(struct!.appstat285),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat286: {
      value: cdktf.numberToHclTerraform(struct!.appstat286),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat287: {
      value: cdktf.numberToHclTerraform(struct!.appstat287),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat288: {
      value: cdktf.numberToHclTerraform(struct!.appstat288),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat289: {
      value: cdktf.numberToHclTerraform(struct!.appstat289),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat29: {
      value: cdktf.numberToHclTerraform(struct!.appstat29),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat290: {
      value: cdktf.numberToHclTerraform(struct!.appstat290),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat291: {
      value: cdktf.numberToHclTerraform(struct!.appstat291),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat292: {
      value: cdktf.numberToHclTerraform(struct!.appstat292),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat293: {
      value: cdktf.numberToHclTerraform(struct!.appstat293),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat294: {
      value: cdktf.numberToHclTerraform(struct!.appstat294),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat295: {
      value: cdktf.numberToHclTerraform(struct!.appstat295),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat296: {
      value: cdktf.numberToHclTerraform(struct!.appstat296),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat297: {
      value: cdktf.numberToHclTerraform(struct!.appstat297),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat298: {
      value: cdktf.numberToHclTerraform(struct!.appstat298),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat299: {
      value: cdktf.numberToHclTerraform(struct!.appstat299),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat3: {
      value: cdktf.numberToHclTerraform(struct!.appstat3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat30: {
      value: cdktf.numberToHclTerraform(struct!.appstat30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat300: {
      value: cdktf.numberToHclTerraform(struct!.appstat300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat301: {
      value: cdktf.numberToHclTerraform(struct!.appstat301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat302: {
      value: cdktf.numberToHclTerraform(struct!.appstat302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat303: {
      value: cdktf.numberToHclTerraform(struct!.appstat303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat304: {
      value: cdktf.numberToHclTerraform(struct!.appstat304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat305: {
      value: cdktf.numberToHclTerraform(struct!.appstat305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat306: {
      value: cdktf.numberToHclTerraform(struct!.appstat306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat307: {
      value: cdktf.numberToHclTerraform(struct!.appstat307),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat308: {
      value: cdktf.numberToHclTerraform(struct!.appstat308),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat309: {
      value: cdktf.numberToHclTerraform(struct!.appstat309),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat31: {
      value: cdktf.numberToHclTerraform(struct!.appstat31),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat310: {
      value: cdktf.numberToHclTerraform(struct!.appstat310),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat311: {
      value: cdktf.numberToHclTerraform(struct!.appstat311),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat312: {
      value: cdktf.numberToHclTerraform(struct!.appstat312),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat313: {
      value: cdktf.numberToHclTerraform(struct!.appstat313),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat314: {
      value: cdktf.numberToHclTerraform(struct!.appstat314),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat315: {
      value: cdktf.numberToHclTerraform(struct!.appstat315),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat316: {
      value: cdktf.numberToHclTerraform(struct!.appstat316),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat317: {
      value: cdktf.numberToHclTerraform(struct!.appstat317),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat318: {
      value: cdktf.numberToHclTerraform(struct!.appstat318),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat319: {
      value: cdktf.numberToHclTerraform(struct!.appstat319),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat32: {
      value: cdktf.numberToHclTerraform(struct!.appstat32),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat320: {
      value: cdktf.numberToHclTerraform(struct!.appstat320),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat321: {
      value: cdktf.numberToHclTerraform(struct!.appstat321),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat322: {
      value: cdktf.numberToHclTerraform(struct!.appstat322),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat323: {
      value: cdktf.numberToHclTerraform(struct!.appstat323),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat324: {
      value: cdktf.numberToHclTerraform(struct!.appstat324),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat325: {
      value: cdktf.numberToHclTerraform(struct!.appstat325),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat326: {
      value: cdktf.numberToHclTerraform(struct!.appstat326),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat327: {
      value: cdktf.numberToHclTerraform(struct!.appstat327),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat328: {
      value: cdktf.numberToHclTerraform(struct!.appstat328),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat329: {
      value: cdktf.numberToHclTerraform(struct!.appstat329),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat33: {
      value: cdktf.numberToHclTerraform(struct!.appstat33),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat330: {
      value: cdktf.numberToHclTerraform(struct!.appstat330),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat331: {
      value: cdktf.numberToHclTerraform(struct!.appstat331),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat332: {
      value: cdktf.numberToHclTerraform(struct!.appstat332),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat333: {
      value: cdktf.numberToHclTerraform(struct!.appstat333),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat334: {
      value: cdktf.numberToHclTerraform(struct!.appstat334),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat335: {
      value: cdktf.numberToHclTerraform(struct!.appstat335),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat336: {
      value: cdktf.numberToHclTerraform(struct!.appstat336),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat337: {
      value: cdktf.numberToHclTerraform(struct!.appstat337),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat338: {
      value: cdktf.numberToHclTerraform(struct!.appstat338),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat339: {
      value: cdktf.numberToHclTerraform(struct!.appstat339),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat34: {
      value: cdktf.numberToHclTerraform(struct!.appstat34),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat340: {
      value: cdktf.numberToHclTerraform(struct!.appstat340),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat341: {
      value: cdktf.numberToHclTerraform(struct!.appstat341),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat342: {
      value: cdktf.numberToHclTerraform(struct!.appstat342),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat343: {
      value: cdktf.numberToHclTerraform(struct!.appstat343),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat344: {
      value: cdktf.numberToHclTerraform(struct!.appstat344),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat345: {
      value: cdktf.numberToHclTerraform(struct!.appstat345),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat346: {
      value: cdktf.numberToHclTerraform(struct!.appstat346),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat347: {
      value: cdktf.numberToHclTerraform(struct!.appstat347),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat348: {
      value: cdktf.numberToHclTerraform(struct!.appstat348),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat349: {
      value: cdktf.numberToHclTerraform(struct!.appstat349),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat35: {
      value: cdktf.numberToHclTerraform(struct!.appstat35),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat350: {
      value: cdktf.numberToHclTerraform(struct!.appstat350),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat351: {
      value: cdktf.numberToHclTerraform(struct!.appstat351),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat352: {
      value: cdktf.numberToHclTerraform(struct!.appstat352),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat353: {
      value: cdktf.numberToHclTerraform(struct!.appstat353),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat354: {
      value: cdktf.numberToHclTerraform(struct!.appstat354),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat355: {
      value: cdktf.numberToHclTerraform(struct!.appstat355),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat356: {
      value: cdktf.numberToHclTerraform(struct!.appstat356),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat357: {
      value: cdktf.numberToHclTerraform(struct!.appstat357),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat358: {
      value: cdktf.numberToHclTerraform(struct!.appstat358),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat359: {
      value: cdktf.numberToHclTerraform(struct!.appstat359),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat36: {
      value: cdktf.numberToHclTerraform(struct!.appstat36),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat360: {
      value: cdktf.numberToHclTerraform(struct!.appstat360),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat361: {
      value: cdktf.numberToHclTerraform(struct!.appstat361),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat362: {
      value: cdktf.numberToHclTerraform(struct!.appstat362),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat363: {
      value: cdktf.numberToHclTerraform(struct!.appstat363),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat364: {
      value: cdktf.numberToHclTerraform(struct!.appstat364),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat365: {
      value: cdktf.numberToHclTerraform(struct!.appstat365),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat366: {
      value: cdktf.numberToHclTerraform(struct!.appstat366),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat367: {
      value: cdktf.numberToHclTerraform(struct!.appstat367),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat368: {
      value: cdktf.numberToHclTerraform(struct!.appstat368),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat369: {
      value: cdktf.numberToHclTerraform(struct!.appstat369),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat37: {
      value: cdktf.numberToHclTerraform(struct!.appstat37),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat370: {
      value: cdktf.numberToHclTerraform(struct!.appstat370),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat371: {
      value: cdktf.numberToHclTerraform(struct!.appstat371),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat372: {
      value: cdktf.numberToHclTerraform(struct!.appstat372),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat373: {
      value: cdktf.numberToHclTerraform(struct!.appstat373),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat374: {
      value: cdktf.numberToHclTerraform(struct!.appstat374),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat375: {
      value: cdktf.numberToHclTerraform(struct!.appstat375),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat376: {
      value: cdktf.numberToHclTerraform(struct!.appstat376),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat377: {
      value: cdktf.numberToHclTerraform(struct!.appstat377),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat378: {
      value: cdktf.numberToHclTerraform(struct!.appstat378),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat379: {
      value: cdktf.numberToHclTerraform(struct!.appstat379),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat38: {
      value: cdktf.numberToHclTerraform(struct!.appstat38),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat380: {
      value: cdktf.numberToHclTerraform(struct!.appstat380),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat381: {
      value: cdktf.numberToHclTerraform(struct!.appstat381),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat382: {
      value: cdktf.numberToHclTerraform(struct!.appstat382),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat383: {
      value: cdktf.numberToHclTerraform(struct!.appstat383),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat384: {
      value: cdktf.numberToHclTerraform(struct!.appstat384),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat385: {
      value: cdktf.numberToHclTerraform(struct!.appstat385),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat386: {
      value: cdktf.numberToHclTerraform(struct!.appstat386),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat387: {
      value: cdktf.numberToHclTerraform(struct!.appstat387),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat388: {
      value: cdktf.numberToHclTerraform(struct!.appstat388),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat389: {
      value: cdktf.numberToHclTerraform(struct!.appstat389),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat39: {
      value: cdktf.numberToHclTerraform(struct!.appstat39),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat390: {
      value: cdktf.numberToHclTerraform(struct!.appstat390),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat391: {
      value: cdktf.numberToHclTerraform(struct!.appstat391),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat392: {
      value: cdktf.numberToHclTerraform(struct!.appstat392),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat393: {
      value: cdktf.numberToHclTerraform(struct!.appstat393),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat394: {
      value: cdktf.numberToHclTerraform(struct!.appstat394),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat395: {
      value: cdktf.numberToHclTerraform(struct!.appstat395),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat396: {
      value: cdktf.numberToHclTerraform(struct!.appstat396),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat397: {
      value: cdktf.numberToHclTerraform(struct!.appstat397),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat398: {
      value: cdktf.numberToHclTerraform(struct!.appstat398),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat399: {
      value: cdktf.numberToHclTerraform(struct!.appstat399),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat4: {
      value: cdktf.numberToHclTerraform(struct!.appstat4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat40: {
      value: cdktf.numberToHclTerraform(struct!.appstat40),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat400: {
      value: cdktf.numberToHclTerraform(struct!.appstat400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat401: {
      value: cdktf.numberToHclTerraform(struct!.appstat401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat402: {
      value: cdktf.numberToHclTerraform(struct!.appstat402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat403: {
      value: cdktf.numberToHclTerraform(struct!.appstat403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat404: {
      value: cdktf.numberToHclTerraform(struct!.appstat404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat405: {
      value: cdktf.numberToHclTerraform(struct!.appstat405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat406: {
      value: cdktf.numberToHclTerraform(struct!.appstat406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat407: {
      value: cdktf.numberToHclTerraform(struct!.appstat407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat408: {
      value: cdktf.numberToHclTerraform(struct!.appstat408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat409: {
      value: cdktf.numberToHclTerraform(struct!.appstat409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat41: {
      value: cdktf.numberToHclTerraform(struct!.appstat41),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat410: {
      value: cdktf.numberToHclTerraform(struct!.appstat410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat411: {
      value: cdktf.numberToHclTerraform(struct!.appstat411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat412: {
      value: cdktf.numberToHclTerraform(struct!.appstat412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat413: {
      value: cdktf.numberToHclTerraform(struct!.appstat413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat414: {
      value: cdktf.numberToHclTerraform(struct!.appstat414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat415: {
      value: cdktf.numberToHclTerraform(struct!.appstat415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat416: {
      value: cdktf.numberToHclTerraform(struct!.appstat416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat417: {
      value: cdktf.numberToHclTerraform(struct!.appstat417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat418: {
      value: cdktf.numberToHclTerraform(struct!.appstat418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat419: {
      value: cdktf.numberToHclTerraform(struct!.appstat419),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat42: {
      value: cdktf.numberToHclTerraform(struct!.appstat42),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat420: {
      value: cdktf.numberToHclTerraform(struct!.appstat420),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat421: {
      value: cdktf.numberToHclTerraform(struct!.appstat421),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat422: {
      value: cdktf.numberToHclTerraform(struct!.appstat422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat423: {
      value: cdktf.numberToHclTerraform(struct!.appstat423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat424: {
      value: cdktf.numberToHclTerraform(struct!.appstat424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat425: {
      value: cdktf.numberToHclTerraform(struct!.appstat425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat426: {
      value: cdktf.numberToHclTerraform(struct!.appstat426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat427: {
      value: cdktf.numberToHclTerraform(struct!.appstat427),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat428: {
      value: cdktf.numberToHclTerraform(struct!.appstat428),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat429: {
      value: cdktf.numberToHclTerraform(struct!.appstat429),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat43: {
      value: cdktf.numberToHclTerraform(struct!.appstat43),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat430: {
      value: cdktf.numberToHclTerraform(struct!.appstat430),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat431: {
      value: cdktf.numberToHclTerraform(struct!.appstat431),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat432: {
      value: cdktf.numberToHclTerraform(struct!.appstat432),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat433: {
      value: cdktf.numberToHclTerraform(struct!.appstat433),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat434: {
      value: cdktf.numberToHclTerraform(struct!.appstat434),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat435: {
      value: cdktf.numberToHclTerraform(struct!.appstat435),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat436: {
      value: cdktf.numberToHclTerraform(struct!.appstat436),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat437: {
      value: cdktf.numberToHclTerraform(struct!.appstat437),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat438: {
      value: cdktf.numberToHclTerraform(struct!.appstat438),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat439: {
      value: cdktf.numberToHclTerraform(struct!.appstat439),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat44: {
      value: cdktf.numberToHclTerraform(struct!.appstat44),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat440: {
      value: cdktf.numberToHclTerraform(struct!.appstat440),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat441: {
      value: cdktf.numberToHclTerraform(struct!.appstat441),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat442: {
      value: cdktf.numberToHclTerraform(struct!.appstat442),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat443: {
      value: cdktf.numberToHclTerraform(struct!.appstat443),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat444: {
      value: cdktf.numberToHclTerraform(struct!.appstat444),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat445: {
      value: cdktf.numberToHclTerraform(struct!.appstat445),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat446: {
      value: cdktf.numberToHclTerraform(struct!.appstat446),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat447: {
      value: cdktf.numberToHclTerraform(struct!.appstat447),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat448: {
      value: cdktf.numberToHclTerraform(struct!.appstat448),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat449: {
      value: cdktf.numberToHclTerraform(struct!.appstat449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat45: {
      value: cdktf.numberToHclTerraform(struct!.appstat45),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat450: {
      value: cdktf.numberToHclTerraform(struct!.appstat450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat451: {
      value: cdktf.numberToHclTerraform(struct!.appstat451),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat452: {
      value: cdktf.numberToHclTerraform(struct!.appstat452),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat453: {
      value: cdktf.numberToHclTerraform(struct!.appstat453),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat454: {
      value: cdktf.numberToHclTerraform(struct!.appstat454),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat455: {
      value: cdktf.numberToHclTerraform(struct!.appstat455),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat456: {
      value: cdktf.numberToHclTerraform(struct!.appstat456),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat457: {
      value: cdktf.numberToHclTerraform(struct!.appstat457),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat458: {
      value: cdktf.numberToHclTerraform(struct!.appstat458),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat459: {
      value: cdktf.numberToHclTerraform(struct!.appstat459),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat46: {
      value: cdktf.numberToHclTerraform(struct!.appstat46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat460: {
      value: cdktf.numberToHclTerraform(struct!.appstat460),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat461: {
      value: cdktf.numberToHclTerraform(struct!.appstat461),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat462: {
      value: cdktf.numberToHclTerraform(struct!.appstat462),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat463: {
      value: cdktf.numberToHclTerraform(struct!.appstat463),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat464: {
      value: cdktf.numberToHclTerraform(struct!.appstat464),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat465: {
      value: cdktf.numberToHclTerraform(struct!.appstat465),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat466: {
      value: cdktf.numberToHclTerraform(struct!.appstat466),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat467: {
      value: cdktf.numberToHclTerraform(struct!.appstat467),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat468: {
      value: cdktf.numberToHclTerraform(struct!.appstat468),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat469: {
      value: cdktf.numberToHclTerraform(struct!.appstat469),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat47: {
      value: cdktf.numberToHclTerraform(struct!.appstat47),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat470: {
      value: cdktf.numberToHclTerraform(struct!.appstat470),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat471: {
      value: cdktf.numberToHclTerraform(struct!.appstat471),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat472: {
      value: cdktf.numberToHclTerraform(struct!.appstat472),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat473: {
      value: cdktf.numberToHclTerraform(struct!.appstat473),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat474: {
      value: cdktf.numberToHclTerraform(struct!.appstat474),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat475: {
      value: cdktf.numberToHclTerraform(struct!.appstat475),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat476: {
      value: cdktf.numberToHclTerraform(struct!.appstat476),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat477: {
      value: cdktf.numberToHclTerraform(struct!.appstat477),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat478: {
      value: cdktf.numberToHclTerraform(struct!.appstat478),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat479: {
      value: cdktf.numberToHclTerraform(struct!.appstat479),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat48: {
      value: cdktf.numberToHclTerraform(struct!.appstat48),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat480: {
      value: cdktf.numberToHclTerraform(struct!.appstat480),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat481: {
      value: cdktf.numberToHclTerraform(struct!.appstat481),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat482: {
      value: cdktf.numberToHclTerraform(struct!.appstat482),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat483: {
      value: cdktf.numberToHclTerraform(struct!.appstat483),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat484: {
      value: cdktf.numberToHclTerraform(struct!.appstat484),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat485: {
      value: cdktf.numberToHclTerraform(struct!.appstat485),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat486: {
      value: cdktf.numberToHclTerraform(struct!.appstat486),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat487: {
      value: cdktf.numberToHclTerraform(struct!.appstat487),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat488: {
      value: cdktf.numberToHclTerraform(struct!.appstat488),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat489: {
      value: cdktf.numberToHclTerraform(struct!.appstat489),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat49: {
      value: cdktf.numberToHclTerraform(struct!.appstat49),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat490: {
      value: cdktf.numberToHclTerraform(struct!.appstat490),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat491: {
      value: cdktf.numberToHclTerraform(struct!.appstat491),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat492: {
      value: cdktf.numberToHclTerraform(struct!.appstat492),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat493: {
      value: cdktf.numberToHclTerraform(struct!.appstat493),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat494: {
      value: cdktf.numberToHclTerraform(struct!.appstat494),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat495: {
      value: cdktf.numberToHclTerraform(struct!.appstat495),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat496: {
      value: cdktf.numberToHclTerraform(struct!.appstat496),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat497: {
      value: cdktf.numberToHclTerraform(struct!.appstat497),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat498: {
      value: cdktf.numberToHclTerraform(struct!.appstat498),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat499: {
      value: cdktf.numberToHclTerraform(struct!.appstat499),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat5: {
      value: cdktf.numberToHclTerraform(struct!.appstat5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat50: {
      value: cdktf.numberToHclTerraform(struct!.appstat50),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat500: {
      value: cdktf.numberToHclTerraform(struct!.appstat500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat501: {
      value: cdktf.numberToHclTerraform(struct!.appstat501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat502: {
      value: cdktf.numberToHclTerraform(struct!.appstat502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat503: {
      value: cdktf.numberToHclTerraform(struct!.appstat503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat504: {
      value: cdktf.numberToHclTerraform(struct!.appstat504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat505: {
      value: cdktf.numberToHclTerraform(struct!.appstat505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat506: {
      value: cdktf.numberToHclTerraform(struct!.appstat506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat507: {
      value: cdktf.numberToHclTerraform(struct!.appstat507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat508: {
      value: cdktf.numberToHclTerraform(struct!.appstat508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat509: {
      value: cdktf.numberToHclTerraform(struct!.appstat509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat51: {
      value: cdktf.numberToHclTerraform(struct!.appstat51),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat510: {
      value: cdktf.numberToHclTerraform(struct!.appstat510),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat511: {
      value: cdktf.numberToHclTerraform(struct!.appstat511),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat52: {
      value: cdktf.numberToHclTerraform(struct!.appstat52),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat53: {
      value: cdktf.numberToHclTerraform(struct!.appstat53),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat54: {
      value: cdktf.numberToHclTerraform(struct!.appstat54),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat55: {
      value: cdktf.numberToHclTerraform(struct!.appstat55),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat56: {
      value: cdktf.numberToHclTerraform(struct!.appstat56),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat57: {
      value: cdktf.numberToHclTerraform(struct!.appstat57),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat58: {
      value: cdktf.numberToHclTerraform(struct!.appstat58),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat59: {
      value: cdktf.numberToHclTerraform(struct!.appstat59),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat6: {
      value: cdktf.numberToHclTerraform(struct!.appstat6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat60: {
      value: cdktf.numberToHclTerraform(struct!.appstat60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat61: {
      value: cdktf.numberToHclTerraform(struct!.appstat61),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat62: {
      value: cdktf.numberToHclTerraform(struct!.appstat62),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat63: {
      value: cdktf.numberToHclTerraform(struct!.appstat63),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat64: {
      value: cdktf.numberToHclTerraform(struct!.appstat64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat65: {
      value: cdktf.numberToHclTerraform(struct!.appstat65),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat66: {
      value: cdktf.numberToHclTerraform(struct!.appstat66),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat67: {
      value: cdktf.numberToHclTerraform(struct!.appstat67),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat68: {
      value: cdktf.numberToHclTerraform(struct!.appstat68),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat69: {
      value: cdktf.numberToHclTerraform(struct!.appstat69),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat7: {
      value: cdktf.numberToHclTerraform(struct!.appstat7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat70: {
      value: cdktf.numberToHclTerraform(struct!.appstat70),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat71: {
      value: cdktf.numberToHclTerraform(struct!.appstat71),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat72: {
      value: cdktf.numberToHclTerraform(struct!.appstat72),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat73: {
      value: cdktf.numberToHclTerraform(struct!.appstat73),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat74: {
      value: cdktf.numberToHclTerraform(struct!.appstat74),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat75: {
      value: cdktf.numberToHclTerraform(struct!.appstat75),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat76: {
      value: cdktf.numberToHclTerraform(struct!.appstat76),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat77: {
      value: cdktf.numberToHclTerraform(struct!.appstat77),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat78: {
      value: cdktf.numberToHclTerraform(struct!.appstat78),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat79: {
      value: cdktf.numberToHclTerraform(struct!.appstat79),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat8: {
      value: cdktf.numberToHclTerraform(struct!.appstat8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat80: {
      value: cdktf.numberToHclTerraform(struct!.appstat80),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat81: {
      value: cdktf.numberToHclTerraform(struct!.appstat81),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat82: {
      value: cdktf.numberToHclTerraform(struct!.appstat82),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat83: {
      value: cdktf.numberToHclTerraform(struct!.appstat83),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat84: {
      value: cdktf.numberToHclTerraform(struct!.appstat84),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat85: {
      value: cdktf.numberToHclTerraform(struct!.appstat85),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat86: {
      value: cdktf.numberToHclTerraform(struct!.appstat86),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat87: {
      value: cdktf.numberToHclTerraform(struct!.appstat87),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat88: {
      value: cdktf.numberToHclTerraform(struct!.appstat88),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat89: {
      value: cdktf.numberToHclTerraform(struct!.appstat89),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat9: {
      value: cdktf.numberToHclTerraform(struct!.appstat9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat90: {
      value: cdktf.numberToHclTerraform(struct!.appstat90),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat91: {
      value: cdktf.numberToHclTerraform(struct!.appstat91),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat92: {
      value: cdktf.numberToHclTerraform(struct!.appstat92),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat93: {
      value: cdktf.numberToHclTerraform(struct!.appstat93),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat94: {
      value: cdktf.numberToHclTerraform(struct!.appstat94),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat95: {
      value: cdktf.numberToHclTerraform(struct!.appstat95),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat96: {
      value: cdktf.numberToHclTerraform(struct!.appstat96),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat97: {
      value: cdktf.numberToHclTerraform(struct!.appstat97),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat98: {
      value: cdktf.numberToHclTerraform(struct!.appstat98),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    appstat99: {
      value: cdktf.numberToHclTerraform(struct!.appstat99),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsAppStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsAppStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appstat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat1 = this._appstat1;
    }
    if (this._appstat10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat10 = this._appstat10;
    }
    if (this._appstat100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat100 = this._appstat100;
    }
    if (this._appstat101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat101 = this._appstat101;
    }
    if (this._appstat102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat102 = this._appstat102;
    }
    if (this._appstat103 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat103 = this._appstat103;
    }
    if (this._appstat104 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat104 = this._appstat104;
    }
    if (this._appstat105 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat105 = this._appstat105;
    }
    if (this._appstat106 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat106 = this._appstat106;
    }
    if (this._appstat107 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat107 = this._appstat107;
    }
    if (this._appstat108 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat108 = this._appstat108;
    }
    if (this._appstat109 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat109 = this._appstat109;
    }
    if (this._appstat11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat11 = this._appstat11;
    }
    if (this._appstat110 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat110 = this._appstat110;
    }
    if (this._appstat111 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat111 = this._appstat111;
    }
    if (this._appstat112 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat112 = this._appstat112;
    }
    if (this._appstat113 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat113 = this._appstat113;
    }
    if (this._appstat114 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat114 = this._appstat114;
    }
    if (this._appstat115 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat115 = this._appstat115;
    }
    if (this._appstat116 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat116 = this._appstat116;
    }
    if (this._appstat117 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat117 = this._appstat117;
    }
    if (this._appstat118 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat118 = this._appstat118;
    }
    if (this._appstat119 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat119 = this._appstat119;
    }
    if (this._appstat12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat12 = this._appstat12;
    }
    if (this._appstat120 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat120 = this._appstat120;
    }
    if (this._appstat121 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat121 = this._appstat121;
    }
    if (this._appstat122 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat122 = this._appstat122;
    }
    if (this._appstat123 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat123 = this._appstat123;
    }
    if (this._appstat124 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat124 = this._appstat124;
    }
    if (this._appstat125 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat125 = this._appstat125;
    }
    if (this._appstat126 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat126 = this._appstat126;
    }
    if (this._appstat127 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat127 = this._appstat127;
    }
    if (this._appstat128 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat128 = this._appstat128;
    }
    if (this._appstat129 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat129 = this._appstat129;
    }
    if (this._appstat13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat13 = this._appstat13;
    }
    if (this._appstat130 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat130 = this._appstat130;
    }
    if (this._appstat131 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat131 = this._appstat131;
    }
    if (this._appstat132 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat132 = this._appstat132;
    }
    if (this._appstat133 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat133 = this._appstat133;
    }
    if (this._appstat134 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat134 = this._appstat134;
    }
    if (this._appstat135 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat135 = this._appstat135;
    }
    if (this._appstat136 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat136 = this._appstat136;
    }
    if (this._appstat137 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat137 = this._appstat137;
    }
    if (this._appstat138 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat138 = this._appstat138;
    }
    if (this._appstat139 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat139 = this._appstat139;
    }
    if (this._appstat14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat14 = this._appstat14;
    }
    if (this._appstat140 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat140 = this._appstat140;
    }
    if (this._appstat141 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat141 = this._appstat141;
    }
    if (this._appstat142 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat142 = this._appstat142;
    }
    if (this._appstat143 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat143 = this._appstat143;
    }
    if (this._appstat144 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat144 = this._appstat144;
    }
    if (this._appstat145 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat145 = this._appstat145;
    }
    if (this._appstat146 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat146 = this._appstat146;
    }
    if (this._appstat147 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat147 = this._appstat147;
    }
    if (this._appstat148 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat148 = this._appstat148;
    }
    if (this._appstat149 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat149 = this._appstat149;
    }
    if (this._appstat15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat15 = this._appstat15;
    }
    if (this._appstat150 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat150 = this._appstat150;
    }
    if (this._appstat151 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat151 = this._appstat151;
    }
    if (this._appstat152 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat152 = this._appstat152;
    }
    if (this._appstat153 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat153 = this._appstat153;
    }
    if (this._appstat154 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat154 = this._appstat154;
    }
    if (this._appstat155 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat155 = this._appstat155;
    }
    if (this._appstat156 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat156 = this._appstat156;
    }
    if (this._appstat157 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat157 = this._appstat157;
    }
    if (this._appstat158 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat158 = this._appstat158;
    }
    if (this._appstat159 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat159 = this._appstat159;
    }
    if (this._appstat16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat16 = this._appstat16;
    }
    if (this._appstat160 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat160 = this._appstat160;
    }
    if (this._appstat161 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat161 = this._appstat161;
    }
    if (this._appstat162 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat162 = this._appstat162;
    }
    if (this._appstat163 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat163 = this._appstat163;
    }
    if (this._appstat164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat164 = this._appstat164;
    }
    if (this._appstat165 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat165 = this._appstat165;
    }
    if (this._appstat166 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat166 = this._appstat166;
    }
    if (this._appstat167 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat167 = this._appstat167;
    }
    if (this._appstat168 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat168 = this._appstat168;
    }
    if (this._appstat169 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat169 = this._appstat169;
    }
    if (this._appstat17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat17 = this._appstat17;
    }
    if (this._appstat170 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat170 = this._appstat170;
    }
    if (this._appstat171 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat171 = this._appstat171;
    }
    if (this._appstat172 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat172 = this._appstat172;
    }
    if (this._appstat173 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat173 = this._appstat173;
    }
    if (this._appstat174 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat174 = this._appstat174;
    }
    if (this._appstat175 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat175 = this._appstat175;
    }
    if (this._appstat176 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat176 = this._appstat176;
    }
    if (this._appstat177 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat177 = this._appstat177;
    }
    if (this._appstat178 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat178 = this._appstat178;
    }
    if (this._appstat179 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat179 = this._appstat179;
    }
    if (this._appstat18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat18 = this._appstat18;
    }
    if (this._appstat180 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat180 = this._appstat180;
    }
    if (this._appstat181 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat181 = this._appstat181;
    }
    if (this._appstat182 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat182 = this._appstat182;
    }
    if (this._appstat183 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat183 = this._appstat183;
    }
    if (this._appstat184 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat184 = this._appstat184;
    }
    if (this._appstat185 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat185 = this._appstat185;
    }
    if (this._appstat186 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat186 = this._appstat186;
    }
    if (this._appstat187 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat187 = this._appstat187;
    }
    if (this._appstat188 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat188 = this._appstat188;
    }
    if (this._appstat189 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat189 = this._appstat189;
    }
    if (this._appstat19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat19 = this._appstat19;
    }
    if (this._appstat190 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat190 = this._appstat190;
    }
    if (this._appstat191 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat191 = this._appstat191;
    }
    if (this._appstat192 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat192 = this._appstat192;
    }
    if (this._appstat193 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat193 = this._appstat193;
    }
    if (this._appstat194 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat194 = this._appstat194;
    }
    if (this._appstat195 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat195 = this._appstat195;
    }
    if (this._appstat196 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat196 = this._appstat196;
    }
    if (this._appstat197 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat197 = this._appstat197;
    }
    if (this._appstat198 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat198 = this._appstat198;
    }
    if (this._appstat199 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat199 = this._appstat199;
    }
    if (this._appstat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat2 = this._appstat2;
    }
    if (this._appstat20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat20 = this._appstat20;
    }
    if (this._appstat200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat200 = this._appstat200;
    }
    if (this._appstat201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat201 = this._appstat201;
    }
    if (this._appstat202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat202 = this._appstat202;
    }
    if (this._appstat203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat203 = this._appstat203;
    }
    if (this._appstat204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat204 = this._appstat204;
    }
    if (this._appstat205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat205 = this._appstat205;
    }
    if (this._appstat206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat206 = this._appstat206;
    }
    if (this._appstat207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat207 = this._appstat207;
    }
    if (this._appstat208 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat208 = this._appstat208;
    }
    if (this._appstat209 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat209 = this._appstat209;
    }
    if (this._appstat21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat21 = this._appstat21;
    }
    if (this._appstat210 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat210 = this._appstat210;
    }
    if (this._appstat211 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat211 = this._appstat211;
    }
    if (this._appstat212 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat212 = this._appstat212;
    }
    if (this._appstat213 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat213 = this._appstat213;
    }
    if (this._appstat214 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat214 = this._appstat214;
    }
    if (this._appstat215 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat215 = this._appstat215;
    }
    if (this._appstat216 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat216 = this._appstat216;
    }
    if (this._appstat217 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat217 = this._appstat217;
    }
    if (this._appstat218 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat218 = this._appstat218;
    }
    if (this._appstat219 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat219 = this._appstat219;
    }
    if (this._appstat22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat22 = this._appstat22;
    }
    if (this._appstat220 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat220 = this._appstat220;
    }
    if (this._appstat221 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat221 = this._appstat221;
    }
    if (this._appstat222 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat222 = this._appstat222;
    }
    if (this._appstat223 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat223 = this._appstat223;
    }
    if (this._appstat224 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat224 = this._appstat224;
    }
    if (this._appstat225 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat225 = this._appstat225;
    }
    if (this._appstat226 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat226 = this._appstat226;
    }
    if (this._appstat227 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat227 = this._appstat227;
    }
    if (this._appstat228 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat228 = this._appstat228;
    }
    if (this._appstat229 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat229 = this._appstat229;
    }
    if (this._appstat23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat23 = this._appstat23;
    }
    if (this._appstat230 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat230 = this._appstat230;
    }
    if (this._appstat231 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat231 = this._appstat231;
    }
    if (this._appstat232 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat232 = this._appstat232;
    }
    if (this._appstat233 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat233 = this._appstat233;
    }
    if (this._appstat234 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat234 = this._appstat234;
    }
    if (this._appstat235 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat235 = this._appstat235;
    }
    if (this._appstat236 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat236 = this._appstat236;
    }
    if (this._appstat237 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat237 = this._appstat237;
    }
    if (this._appstat238 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat238 = this._appstat238;
    }
    if (this._appstat239 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat239 = this._appstat239;
    }
    if (this._appstat24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat24 = this._appstat24;
    }
    if (this._appstat240 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat240 = this._appstat240;
    }
    if (this._appstat241 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat241 = this._appstat241;
    }
    if (this._appstat242 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat242 = this._appstat242;
    }
    if (this._appstat243 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat243 = this._appstat243;
    }
    if (this._appstat244 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat244 = this._appstat244;
    }
    if (this._appstat245 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat245 = this._appstat245;
    }
    if (this._appstat246 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat246 = this._appstat246;
    }
    if (this._appstat247 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat247 = this._appstat247;
    }
    if (this._appstat248 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat248 = this._appstat248;
    }
    if (this._appstat249 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat249 = this._appstat249;
    }
    if (this._appstat25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat25 = this._appstat25;
    }
    if (this._appstat250 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat250 = this._appstat250;
    }
    if (this._appstat251 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat251 = this._appstat251;
    }
    if (this._appstat252 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat252 = this._appstat252;
    }
    if (this._appstat253 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat253 = this._appstat253;
    }
    if (this._appstat254 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat254 = this._appstat254;
    }
    if (this._appstat255 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat255 = this._appstat255;
    }
    if (this._appstat256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat256 = this._appstat256;
    }
    if (this._appstat257 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat257 = this._appstat257;
    }
    if (this._appstat258 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat258 = this._appstat258;
    }
    if (this._appstat259 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat259 = this._appstat259;
    }
    if (this._appstat26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat26 = this._appstat26;
    }
    if (this._appstat260 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat260 = this._appstat260;
    }
    if (this._appstat261 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat261 = this._appstat261;
    }
    if (this._appstat262 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat262 = this._appstat262;
    }
    if (this._appstat263 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat263 = this._appstat263;
    }
    if (this._appstat264 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat264 = this._appstat264;
    }
    if (this._appstat265 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat265 = this._appstat265;
    }
    if (this._appstat266 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat266 = this._appstat266;
    }
    if (this._appstat267 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat267 = this._appstat267;
    }
    if (this._appstat268 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat268 = this._appstat268;
    }
    if (this._appstat269 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat269 = this._appstat269;
    }
    if (this._appstat27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat27 = this._appstat27;
    }
    if (this._appstat270 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat270 = this._appstat270;
    }
    if (this._appstat271 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat271 = this._appstat271;
    }
    if (this._appstat272 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat272 = this._appstat272;
    }
    if (this._appstat273 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat273 = this._appstat273;
    }
    if (this._appstat274 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat274 = this._appstat274;
    }
    if (this._appstat275 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat275 = this._appstat275;
    }
    if (this._appstat276 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat276 = this._appstat276;
    }
    if (this._appstat277 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat277 = this._appstat277;
    }
    if (this._appstat278 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat278 = this._appstat278;
    }
    if (this._appstat279 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat279 = this._appstat279;
    }
    if (this._appstat28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat28 = this._appstat28;
    }
    if (this._appstat280 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat280 = this._appstat280;
    }
    if (this._appstat281 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat281 = this._appstat281;
    }
    if (this._appstat282 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat282 = this._appstat282;
    }
    if (this._appstat283 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat283 = this._appstat283;
    }
    if (this._appstat284 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat284 = this._appstat284;
    }
    if (this._appstat285 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat285 = this._appstat285;
    }
    if (this._appstat286 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat286 = this._appstat286;
    }
    if (this._appstat287 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat287 = this._appstat287;
    }
    if (this._appstat288 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat288 = this._appstat288;
    }
    if (this._appstat289 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat289 = this._appstat289;
    }
    if (this._appstat29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat29 = this._appstat29;
    }
    if (this._appstat290 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat290 = this._appstat290;
    }
    if (this._appstat291 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat291 = this._appstat291;
    }
    if (this._appstat292 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat292 = this._appstat292;
    }
    if (this._appstat293 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat293 = this._appstat293;
    }
    if (this._appstat294 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat294 = this._appstat294;
    }
    if (this._appstat295 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat295 = this._appstat295;
    }
    if (this._appstat296 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat296 = this._appstat296;
    }
    if (this._appstat297 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat297 = this._appstat297;
    }
    if (this._appstat298 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat298 = this._appstat298;
    }
    if (this._appstat299 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat299 = this._appstat299;
    }
    if (this._appstat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat3 = this._appstat3;
    }
    if (this._appstat30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat30 = this._appstat30;
    }
    if (this._appstat300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat300 = this._appstat300;
    }
    if (this._appstat301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat301 = this._appstat301;
    }
    if (this._appstat302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat302 = this._appstat302;
    }
    if (this._appstat303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat303 = this._appstat303;
    }
    if (this._appstat304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat304 = this._appstat304;
    }
    if (this._appstat305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat305 = this._appstat305;
    }
    if (this._appstat306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat306 = this._appstat306;
    }
    if (this._appstat307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat307 = this._appstat307;
    }
    if (this._appstat308 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat308 = this._appstat308;
    }
    if (this._appstat309 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat309 = this._appstat309;
    }
    if (this._appstat31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat31 = this._appstat31;
    }
    if (this._appstat310 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat310 = this._appstat310;
    }
    if (this._appstat311 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat311 = this._appstat311;
    }
    if (this._appstat312 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat312 = this._appstat312;
    }
    if (this._appstat313 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat313 = this._appstat313;
    }
    if (this._appstat314 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat314 = this._appstat314;
    }
    if (this._appstat315 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat315 = this._appstat315;
    }
    if (this._appstat316 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat316 = this._appstat316;
    }
    if (this._appstat317 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat317 = this._appstat317;
    }
    if (this._appstat318 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat318 = this._appstat318;
    }
    if (this._appstat319 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat319 = this._appstat319;
    }
    if (this._appstat32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat32 = this._appstat32;
    }
    if (this._appstat320 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat320 = this._appstat320;
    }
    if (this._appstat321 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat321 = this._appstat321;
    }
    if (this._appstat322 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat322 = this._appstat322;
    }
    if (this._appstat323 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat323 = this._appstat323;
    }
    if (this._appstat324 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat324 = this._appstat324;
    }
    if (this._appstat325 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat325 = this._appstat325;
    }
    if (this._appstat326 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat326 = this._appstat326;
    }
    if (this._appstat327 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat327 = this._appstat327;
    }
    if (this._appstat328 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat328 = this._appstat328;
    }
    if (this._appstat329 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat329 = this._appstat329;
    }
    if (this._appstat33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat33 = this._appstat33;
    }
    if (this._appstat330 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat330 = this._appstat330;
    }
    if (this._appstat331 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat331 = this._appstat331;
    }
    if (this._appstat332 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat332 = this._appstat332;
    }
    if (this._appstat333 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat333 = this._appstat333;
    }
    if (this._appstat334 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat334 = this._appstat334;
    }
    if (this._appstat335 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat335 = this._appstat335;
    }
    if (this._appstat336 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat336 = this._appstat336;
    }
    if (this._appstat337 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat337 = this._appstat337;
    }
    if (this._appstat338 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat338 = this._appstat338;
    }
    if (this._appstat339 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat339 = this._appstat339;
    }
    if (this._appstat34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat34 = this._appstat34;
    }
    if (this._appstat340 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat340 = this._appstat340;
    }
    if (this._appstat341 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat341 = this._appstat341;
    }
    if (this._appstat342 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat342 = this._appstat342;
    }
    if (this._appstat343 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat343 = this._appstat343;
    }
    if (this._appstat344 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat344 = this._appstat344;
    }
    if (this._appstat345 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat345 = this._appstat345;
    }
    if (this._appstat346 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat346 = this._appstat346;
    }
    if (this._appstat347 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat347 = this._appstat347;
    }
    if (this._appstat348 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat348 = this._appstat348;
    }
    if (this._appstat349 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat349 = this._appstat349;
    }
    if (this._appstat35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat35 = this._appstat35;
    }
    if (this._appstat350 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat350 = this._appstat350;
    }
    if (this._appstat351 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat351 = this._appstat351;
    }
    if (this._appstat352 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat352 = this._appstat352;
    }
    if (this._appstat353 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat353 = this._appstat353;
    }
    if (this._appstat354 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat354 = this._appstat354;
    }
    if (this._appstat355 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat355 = this._appstat355;
    }
    if (this._appstat356 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat356 = this._appstat356;
    }
    if (this._appstat357 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat357 = this._appstat357;
    }
    if (this._appstat358 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat358 = this._appstat358;
    }
    if (this._appstat359 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat359 = this._appstat359;
    }
    if (this._appstat36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat36 = this._appstat36;
    }
    if (this._appstat360 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat360 = this._appstat360;
    }
    if (this._appstat361 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat361 = this._appstat361;
    }
    if (this._appstat362 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat362 = this._appstat362;
    }
    if (this._appstat363 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat363 = this._appstat363;
    }
    if (this._appstat364 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat364 = this._appstat364;
    }
    if (this._appstat365 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat365 = this._appstat365;
    }
    if (this._appstat366 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat366 = this._appstat366;
    }
    if (this._appstat367 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat367 = this._appstat367;
    }
    if (this._appstat368 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat368 = this._appstat368;
    }
    if (this._appstat369 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat369 = this._appstat369;
    }
    if (this._appstat37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat37 = this._appstat37;
    }
    if (this._appstat370 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat370 = this._appstat370;
    }
    if (this._appstat371 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat371 = this._appstat371;
    }
    if (this._appstat372 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat372 = this._appstat372;
    }
    if (this._appstat373 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat373 = this._appstat373;
    }
    if (this._appstat374 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat374 = this._appstat374;
    }
    if (this._appstat375 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat375 = this._appstat375;
    }
    if (this._appstat376 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat376 = this._appstat376;
    }
    if (this._appstat377 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat377 = this._appstat377;
    }
    if (this._appstat378 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat378 = this._appstat378;
    }
    if (this._appstat379 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat379 = this._appstat379;
    }
    if (this._appstat38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat38 = this._appstat38;
    }
    if (this._appstat380 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat380 = this._appstat380;
    }
    if (this._appstat381 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat381 = this._appstat381;
    }
    if (this._appstat382 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat382 = this._appstat382;
    }
    if (this._appstat383 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat383 = this._appstat383;
    }
    if (this._appstat384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat384 = this._appstat384;
    }
    if (this._appstat385 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat385 = this._appstat385;
    }
    if (this._appstat386 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat386 = this._appstat386;
    }
    if (this._appstat387 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat387 = this._appstat387;
    }
    if (this._appstat388 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat388 = this._appstat388;
    }
    if (this._appstat389 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat389 = this._appstat389;
    }
    if (this._appstat39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat39 = this._appstat39;
    }
    if (this._appstat390 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat390 = this._appstat390;
    }
    if (this._appstat391 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat391 = this._appstat391;
    }
    if (this._appstat392 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat392 = this._appstat392;
    }
    if (this._appstat393 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat393 = this._appstat393;
    }
    if (this._appstat394 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat394 = this._appstat394;
    }
    if (this._appstat395 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat395 = this._appstat395;
    }
    if (this._appstat396 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat396 = this._appstat396;
    }
    if (this._appstat397 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat397 = this._appstat397;
    }
    if (this._appstat398 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat398 = this._appstat398;
    }
    if (this._appstat399 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat399 = this._appstat399;
    }
    if (this._appstat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat4 = this._appstat4;
    }
    if (this._appstat40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat40 = this._appstat40;
    }
    if (this._appstat400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat400 = this._appstat400;
    }
    if (this._appstat401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat401 = this._appstat401;
    }
    if (this._appstat402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat402 = this._appstat402;
    }
    if (this._appstat403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat403 = this._appstat403;
    }
    if (this._appstat404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat404 = this._appstat404;
    }
    if (this._appstat405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat405 = this._appstat405;
    }
    if (this._appstat406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat406 = this._appstat406;
    }
    if (this._appstat407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat407 = this._appstat407;
    }
    if (this._appstat408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat408 = this._appstat408;
    }
    if (this._appstat409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat409 = this._appstat409;
    }
    if (this._appstat41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat41 = this._appstat41;
    }
    if (this._appstat410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat410 = this._appstat410;
    }
    if (this._appstat411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat411 = this._appstat411;
    }
    if (this._appstat412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat412 = this._appstat412;
    }
    if (this._appstat413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat413 = this._appstat413;
    }
    if (this._appstat414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat414 = this._appstat414;
    }
    if (this._appstat415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat415 = this._appstat415;
    }
    if (this._appstat416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat416 = this._appstat416;
    }
    if (this._appstat417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat417 = this._appstat417;
    }
    if (this._appstat418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat418 = this._appstat418;
    }
    if (this._appstat419 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat419 = this._appstat419;
    }
    if (this._appstat42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat42 = this._appstat42;
    }
    if (this._appstat420 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat420 = this._appstat420;
    }
    if (this._appstat421 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat421 = this._appstat421;
    }
    if (this._appstat422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat422 = this._appstat422;
    }
    if (this._appstat423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat423 = this._appstat423;
    }
    if (this._appstat424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat424 = this._appstat424;
    }
    if (this._appstat425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat425 = this._appstat425;
    }
    if (this._appstat426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat426 = this._appstat426;
    }
    if (this._appstat427 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat427 = this._appstat427;
    }
    if (this._appstat428 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat428 = this._appstat428;
    }
    if (this._appstat429 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat429 = this._appstat429;
    }
    if (this._appstat43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat43 = this._appstat43;
    }
    if (this._appstat430 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat430 = this._appstat430;
    }
    if (this._appstat431 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat431 = this._appstat431;
    }
    if (this._appstat432 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat432 = this._appstat432;
    }
    if (this._appstat433 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat433 = this._appstat433;
    }
    if (this._appstat434 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat434 = this._appstat434;
    }
    if (this._appstat435 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat435 = this._appstat435;
    }
    if (this._appstat436 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat436 = this._appstat436;
    }
    if (this._appstat437 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat437 = this._appstat437;
    }
    if (this._appstat438 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat438 = this._appstat438;
    }
    if (this._appstat439 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat439 = this._appstat439;
    }
    if (this._appstat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat44 = this._appstat44;
    }
    if (this._appstat440 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat440 = this._appstat440;
    }
    if (this._appstat441 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat441 = this._appstat441;
    }
    if (this._appstat442 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat442 = this._appstat442;
    }
    if (this._appstat443 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat443 = this._appstat443;
    }
    if (this._appstat444 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat444 = this._appstat444;
    }
    if (this._appstat445 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat445 = this._appstat445;
    }
    if (this._appstat446 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat446 = this._appstat446;
    }
    if (this._appstat447 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat447 = this._appstat447;
    }
    if (this._appstat448 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat448 = this._appstat448;
    }
    if (this._appstat449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat449 = this._appstat449;
    }
    if (this._appstat45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat45 = this._appstat45;
    }
    if (this._appstat450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat450 = this._appstat450;
    }
    if (this._appstat451 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat451 = this._appstat451;
    }
    if (this._appstat452 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat452 = this._appstat452;
    }
    if (this._appstat453 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat453 = this._appstat453;
    }
    if (this._appstat454 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat454 = this._appstat454;
    }
    if (this._appstat455 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat455 = this._appstat455;
    }
    if (this._appstat456 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat456 = this._appstat456;
    }
    if (this._appstat457 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat457 = this._appstat457;
    }
    if (this._appstat458 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat458 = this._appstat458;
    }
    if (this._appstat459 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat459 = this._appstat459;
    }
    if (this._appstat46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat46 = this._appstat46;
    }
    if (this._appstat460 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat460 = this._appstat460;
    }
    if (this._appstat461 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat461 = this._appstat461;
    }
    if (this._appstat462 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat462 = this._appstat462;
    }
    if (this._appstat463 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat463 = this._appstat463;
    }
    if (this._appstat464 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat464 = this._appstat464;
    }
    if (this._appstat465 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat465 = this._appstat465;
    }
    if (this._appstat466 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat466 = this._appstat466;
    }
    if (this._appstat467 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat467 = this._appstat467;
    }
    if (this._appstat468 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat468 = this._appstat468;
    }
    if (this._appstat469 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat469 = this._appstat469;
    }
    if (this._appstat47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat47 = this._appstat47;
    }
    if (this._appstat470 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat470 = this._appstat470;
    }
    if (this._appstat471 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat471 = this._appstat471;
    }
    if (this._appstat472 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat472 = this._appstat472;
    }
    if (this._appstat473 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat473 = this._appstat473;
    }
    if (this._appstat474 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat474 = this._appstat474;
    }
    if (this._appstat475 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat475 = this._appstat475;
    }
    if (this._appstat476 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat476 = this._appstat476;
    }
    if (this._appstat477 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat477 = this._appstat477;
    }
    if (this._appstat478 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat478 = this._appstat478;
    }
    if (this._appstat479 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat479 = this._appstat479;
    }
    if (this._appstat48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat48 = this._appstat48;
    }
    if (this._appstat480 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat480 = this._appstat480;
    }
    if (this._appstat481 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat481 = this._appstat481;
    }
    if (this._appstat482 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat482 = this._appstat482;
    }
    if (this._appstat483 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat483 = this._appstat483;
    }
    if (this._appstat484 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat484 = this._appstat484;
    }
    if (this._appstat485 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat485 = this._appstat485;
    }
    if (this._appstat486 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat486 = this._appstat486;
    }
    if (this._appstat487 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat487 = this._appstat487;
    }
    if (this._appstat488 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat488 = this._appstat488;
    }
    if (this._appstat489 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat489 = this._appstat489;
    }
    if (this._appstat49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat49 = this._appstat49;
    }
    if (this._appstat490 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat490 = this._appstat490;
    }
    if (this._appstat491 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat491 = this._appstat491;
    }
    if (this._appstat492 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat492 = this._appstat492;
    }
    if (this._appstat493 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat493 = this._appstat493;
    }
    if (this._appstat494 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat494 = this._appstat494;
    }
    if (this._appstat495 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat495 = this._appstat495;
    }
    if (this._appstat496 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat496 = this._appstat496;
    }
    if (this._appstat497 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat497 = this._appstat497;
    }
    if (this._appstat498 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat498 = this._appstat498;
    }
    if (this._appstat499 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat499 = this._appstat499;
    }
    if (this._appstat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat5 = this._appstat5;
    }
    if (this._appstat50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat50 = this._appstat50;
    }
    if (this._appstat500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat500 = this._appstat500;
    }
    if (this._appstat501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat501 = this._appstat501;
    }
    if (this._appstat502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat502 = this._appstat502;
    }
    if (this._appstat503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat503 = this._appstat503;
    }
    if (this._appstat504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat504 = this._appstat504;
    }
    if (this._appstat505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat505 = this._appstat505;
    }
    if (this._appstat506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat506 = this._appstat506;
    }
    if (this._appstat507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat507 = this._appstat507;
    }
    if (this._appstat508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat508 = this._appstat508;
    }
    if (this._appstat509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat509 = this._appstat509;
    }
    if (this._appstat51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat51 = this._appstat51;
    }
    if (this._appstat510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat510 = this._appstat510;
    }
    if (this._appstat511 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat511 = this._appstat511;
    }
    if (this._appstat52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat52 = this._appstat52;
    }
    if (this._appstat53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat53 = this._appstat53;
    }
    if (this._appstat54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat54 = this._appstat54;
    }
    if (this._appstat55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat55 = this._appstat55;
    }
    if (this._appstat56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat56 = this._appstat56;
    }
    if (this._appstat57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat57 = this._appstat57;
    }
    if (this._appstat58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat58 = this._appstat58;
    }
    if (this._appstat59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat59 = this._appstat59;
    }
    if (this._appstat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat6 = this._appstat6;
    }
    if (this._appstat60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat60 = this._appstat60;
    }
    if (this._appstat61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat61 = this._appstat61;
    }
    if (this._appstat62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat62 = this._appstat62;
    }
    if (this._appstat63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat63 = this._appstat63;
    }
    if (this._appstat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat64 = this._appstat64;
    }
    if (this._appstat65 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat65 = this._appstat65;
    }
    if (this._appstat66 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat66 = this._appstat66;
    }
    if (this._appstat67 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat67 = this._appstat67;
    }
    if (this._appstat68 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat68 = this._appstat68;
    }
    if (this._appstat69 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat69 = this._appstat69;
    }
    if (this._appstat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat7 = this._appstat7;
    }
    if (this._appstat70 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat70 = this._appstat70;
    }
    if (this._appstat71 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat71 = this._appstat71;
    }
    if (this._appstat72 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat72 = this._appstat72;
    }
    if (this._appstat73 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat73 = this._appstat73;
    }
    if (this._appstat74 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat74 = this._appstat74;
    }
    if (this._appstat75 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat75 = this._appstat75;
    }
    if (this._appstat76 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat76 = this._appstat76;
    }
    if (this._appstat77 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat77 = this._appstat77;
    }
    if (this._appstat78 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat78 = this._appstat78;
    }
    if (this._appstat79 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat79 = this._appstat79;
    }
    if (this._appstat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat8 = this._appstat8;
    }
    if (this._appstat80 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat80 = this._appstat80;
    }
    if (this._appstat81 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat81 = this._appstat81;
    }
    if (this._appstat82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat82 = this._appstat82;
    }
    if (this._appstat83 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat83 = this._appstat83;
    }
    if (this._appstat84 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat84 = this._appstat84;
    }
    if (this._appstat85 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat85 = this._appstat85;
    }
    if (this._appstat86 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat86 = this._appstat86;
    }
    if (this._appstat87 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat87 = this._appstat87;
    }
    if (this._appstat88 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat88 = this._appstat88;
    }
    if (this._appstat89 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat89 = this._appstat89;
    }
    if (this._appstat9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat9 = this._appstat9;
    }
    if (this._appstat90 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat90 = this._appstat90;
    }
    if (this._appstat91 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat91 = this._appstat91;
    }
    if (this._appstat92 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat92 = this._appstat92;
    }
    if (this._appstat93 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat93 = this._appstat93;
    }
    if (this._appstat94 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat94 = this._appstat94;
    }
    if (this._appstat95 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat95 = this._appstat95;
    }
    if (this._appstat96 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat96 = this._appstat96;
    }
    if (this._appstat97 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat97 = this._appstat97;
    }
    if (this._appstat98 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat98 = this._appstat98;
    }
    if (this._appstat99 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appstat99 = this._appstat99;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsAppStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appstat1 = undefined;
      this._appstat10 = undefined;
      this._appstat100 = undefined;
      this._appstat101 = undefined;
      this._appstat102 = undefined;
      this._appstat103 = undefined;
      this._appstat104 = undefined;
      this._appstat105 = undefined;
      this._appstat106 = undefined;
      this._appstat107 = undefined;
      this._appstat108 = undefined;
      this._appstat109 = undefined;
      this._appstat11 = undefined;
      this._appstat110 = undefined;
      this._appstat111 = undefined;
      this._appstat112 = undefined;
      this._appstat113 = undefined;
      this._appstat114 = undefined;
      this._appstat115 = undefined;
      this._appstat116 = undefined;
      this._appstat117 = undefined;
      this._appstat118 = undefined;
      this._appstat119 = undefined;
      this._appstat12 = undefined;
      this._appstat120 = undefined;
      this._appstat121 = undefined;
      this._appstat122 = undefined;
      this._appstat123 = undefined;
      this._appstat124 = undefined;
      this._appstat125 = undefined;
      this._appstat126 = undefined;
      this._appstat127 = undefined;
      this._appstat128 = undefined;
      this._appstat129 = undefined;
      this._appstat13 = undefined;
      this._appstat130 = undefined;
      this._appstat131 = undefined;
      this._appstat132 = undefined;
      this._appstat133 = undefined;
      this._appstat134 = undefined;
      this._appstat135 = undefined;
      this._appstat136 = undefined;
      this._appstat137 = undefined;
      this._appstat138 = undefined;
      this._appstat139 = undefined;
      this._appstat14 = undefined;
      this._appstat140 = undefined;
      this._appstat141 = undefined;
      this._appstat142 = undefined;
      this._appstat143 = undefined;
      this._appstat144 = undefined;
      this._appstat145 = undefined;
      this._appstat146 = undefined;
      this._appstat147 = undefined;
      this._appstat148 = undefined;
      this._appstat149 = undefined;
      this._appstat15 = undefined;
      this._appstat150 = undefined;
      this._appstat151 = undefined;
      this._appstat152 = undefined;
      this._appstat153 = undefined;
      this._appstat154 = undefined;
      this._appstat155 = undefined;
      this._appstat156 = undefined;
      this._appstat157 = undefined;
      this._appstat158 = undefined;
      this._appstat159 = undefined;
      this._appstat16 = undefined;
      this._appstat160 = undefined;
      this._appstat161 = undefined;
      this._appstat162 = undefined;
      this._appstat163 = undefined;
      this._appstat164 = undefined;
      this._appstat165 = undefined;
      this._appstat166 = undefined;
      this._appstat167 = undefined;
      this._appstat168 = undefined;
      this._appstat169 = undefined;
      this._appstat17 = undefined;
      this._appstat170 = undefined;
      this._appstat171 = undefined;
      this._appstat172 = undefined;
      this._appstat173 = undefined;
      this._appstat174 = undefined;
      this._appstat175 = undefined;
      this._appstat176 = undefined;
      this._appstat177 = undefined;
      this._appstat178 = undefined;
      this._appstat179 = undefined;
      this._appstat18 = undefined;
      this._appstat180 = undefined;
      this._appstat181 = undefined;
      this._appstat182 = undefined;
      this._appstat183 = undefined;
      this._appstat184 = undefined;
      this._appstat185 = undefined;
      this._appstat186 = undefined;
      this._appstat187 = undefined;
      this._appstat188 = undefined;
      this._appstat189 = undefined;
      this._appstat19 = undefined;
      this._appstat190 = undefined;
      this._appstat191 = undefined;
      this._appstat192 = undefined;
      this._appstat193 = undefined;
      this._appstat194 = undefined;
      this._appstat195 = undefined;
      this._appstat196 = undefined;
      this._appstat197 = undefined;
      this._appstat198 = undefined;
      this._appstat199 = undefined;
      this._appstat2 = undefined;
      this._appstat20 = undefined;
      this._appstat200 = undefined;
      this._appstat201 = undefined;
      this._appstat202 = undefined;
      this._appstat203 = undefined;
      this._appstat204 = undefined;
      this._appstat205 = undefined;
      this._appstat206 = undefined;
      this._appstat207 = undefined;
      this._appstat208 = undefined;
      this._appstat209 = undefined;
      this._appstat21 = undefined;
      this._appstat210 = undefined;
      this._appstat211 = undefined;
      this._appstat212 = undefined;
      this._appstat213 = undefined;
      this._appstat214 = undefined;
      this._appstat215 = undefined;
      this._appstat216 = undefined;
      this._appstat217 = undefined;
      this._appstat218 = undefined;
      this._appstat219 = undefined;
      this._appstat22 = undefined;
      this._appstat220 = undefined;
      this._appstat221 = undefined;
      this._appstat222 = undefined;
      this._appstat223 = undefined;
      this._appstat224 = undefined;
      this._appstat225 = undefined;
      this._appstat226 = undefined;
      this._appstat227 = undefined;
      this._appstat228 = undefined;
      this._appstat229 = undefined;
      this._appstat23 = undefined;
      this._appstat230 = undefined;
      this._appstat231 = undefined;
      this._appstat232 = undefined;
      this._appstat233 = undefined;
      this._appstat234 = undefined;
      this._appstat235 = undefined;
      this._appstat236 = undefined;
      this._appstat237 = undefined;
      this._appstat238 = undefined;
      this._appstat239 = undefined;
      this._appstat24 = undefined;
      this._appstat240 = undefined;
      this._appstat241 = undefined;
      this._appstat242 = undefined;
      this._appstat243 = undefined;
      this._appstat244 = undefined;
      this._appstat245 = undefined;
      this._appstat246 = undefined;
      this._appstat247 = undefined;
      this._appstat248 = undefined;
      this._appstat249 = undefined;
      this._appstat25 = undefined;
      this._appstat250 = undefined;
      this._appstat251 = undefined;
      this._appstat252 = undefined;
      this._appstat253 = undefined;
      this._appstat254 = undefined;
      this._appstat255 = undefined;
      this._appstat256 = undefined;
      this._appstat257 = undefined;
      this._appstat258 = undefined;
      this._appstat259 = undefined;
      this._appstat26 = undefined;
      this._appstat260 = undefined;
      this._appstat261 = undefined;
      this._appstat262 = undefined;
      this._appstat263 = undefined;
      this._appstat264 = undefined;
      this._appstat265 = undefined;
      this._appstat266 = undefined;
      this._appstat267 = undefined;
      this._appstat268 = undefined;
      this._appstat269 = undefined;
      this._appstat27 = undefined;
      this._appstat270 = undefined;
      this._appstat271 = undefined;
      this._appstat272 = undefined;
      this._appstat273 = undefined;
      this._appstat274 = undefined;
      this._appstat275 = undefined;
      this._appstat276 = undefined;
      this._appstat277 = undefined;
      this._appstat278 = undefined;
      this._appstat279 = undefined;
      this._appstat28 = undefined;
      this._appstat280 = undefined;
      this._appstat281 = undefined;
      this._appstat282 = undefined;
      this._appstat283 = undefined;
      this._appstat284 = undefined;
      this._appstat285 = undefined;
      this._appstat286 = undefined;
      this._appstat287 = undefined;
      this._appstat288 = undefined;
      this._appstat289 = undefined;
      this._appstat29 = undefined;
      this._appstat290 = undefined;
      this._appstat291 = undefined;
      this._appstat292 = undefined;
      this._appstat293 = undefined;
      this._appstat294 = undefined;
      this._appstat295 = undefined;
      this._appstat296 = undefined;
      this._appstat297 = undefined;
      this._appstat298 = undefined;
      this._appstat299 = undefined;
      this._appstat3 = undefined;
      this._appstat30 = undefined;
      this._appstat300 = undefined;
      this._appstat301 = undefined;
      this._appstat302 = undefined;
      this._appstat303 = undefined;
      this._appstat304 = undefined;
      this._appstat305 = undefined;
      this._appstat306 = undefined;
      this._appstat307 = undefined;
      this._appstat308 = undefined;
      this._appstat309 = undefined;
      this._appstat31 = undefined;
      this._appstat310 = undefined;
      this._appstat311 = undefined;
      this._appstat312 = undefined;
      this._appstat313 = undefined;
      this._appstat314 = undefined;
      this._appstat315 = undefined;
      this._appstat316 = undefined;
      this._appstat317 = undefined;
      this._appstat318 = undefined;
      this._appstat319 = undefined;
      this._appstat32 = undefined;
      this._appstat320 = undefined;
      this._appstat321 = undefined;
      this._appstat322 = undefined;
      this._appstat323 = undefined;
      this._appstat324 = undefined;
      this._appstat325 = undefined;
      this._appstat326 = undefined;
      this._appstat327 = undefined;
      this._appstat328 = undefined;
      this._appstat329 = undefined;
      this._appstat33 = undefined;
      this._appstat330 = undefined;
      this._appstat331 = undefined;
      this._appstat332 = undefined;
      this._appstat333 = undefined;
      this._appstat334 = undefined;
      this._appstat335 = undefined;
      this._appstat336 = undefined;
      this._appstat337 = undefined;
      this._appstat338 = undefined;
      this._appstat339 = undefined;
      this._appstat34 = undefined;
      this._appstat340 = undefined;
      this._appstat341 = undefined;
      this._appstat342 = undefined;
      this._appstat343 = undefined;
      this._appstat344 = undefined;
      this._appstat345 = undefined;
      this._appstat346 = undefined;
      this._appstat347 = undefined;
      this._appstat348 = undefined;
      this._appstat349 = undefined;
      this._appstat35 = undefined;
      this._appstat350 = undefined;
      this._appstat351 = undefined;
      this._appstat352 = undefined;
      this._appstat353 = undefined;
      this._appstat354 = undefined;
      this._appstat355 = undefined;
      this._appstat356 = undefined;
      this._appstat357 = undefined;
      this._appstat358 = undefined;
      this._appstat359 = undefined;
      this._appstat36 = undefined;
      this._appstat360 = undefined;
      this._appstat361 = undefined;
      this._appstat362 = undefined;
      this._appstat363 = undefined;
      this._appstat364 = undefined;
      this._appstat365 = undefined;
      this._appstat366 = undefined;
      this._appstat367 = undefined;
      this._appstat368 = undefined;
      this._appstat369 = undefined;
      this._appstat37 = undefined;
      this._appstat370 = undefined;
      this._appstat371 = undefined;
      this._appstat372 = undefined;
      this._appstat373 = undefined;
      this._appstat374 = undefined;
      this._appstat375 = undefined;
      this._appstat376 = undefined;
      this._appstat377 = undefined;
      this._appstat378 = undefined;
      this._appstat379 = undefined;
      this._appstat38 = undefined;
      this._appstat380 = undefined;
      this._appstat381 = undefined;
      this._appstat382 = undefined;
      this._appstat383 = undefined;
      this._appstat384 = undefined;
      this._appstat385 = undefined;
      this._appstat386 = undefined;
      this._appstat387 = undefined;
      this._appstat388 = undefined;
      this._appstat389 = undefined;
      this._appstat39 = undefined;
      this._appstat390 = undefined;
      this._appstat391 = undefined;
      this._appstat392 = undefined;
      this._appstat393 = undefined;
      this._appstat394 = undefined;
      this._appstat395 = undefined;
      this._appstat396 = undefined;
      this._appstat397 = undefined;
      this._appstat398 = undefined;
      this._appstat399 = undefined;
      this._appstat4 = undefined;
      this._appstat40 = undefined;
      this._appstat400 = undefined;
      this._appstat401 = undefined;
      this._appstat402 = undefined;
      this._appstat403 = undefined;
      this._appstat404 = undefined;
      this._appstat405 = undefined;
      this._appstat406 = undefined;
      this._appstat407 = undefined;
      this._appstat408 = undefined;
      this._appstat409 = undefined;
      this._appstat41 = undefined;
      this._appstat410 = undefined;
      this._appstat411 = undefined;
      this._appstat412 = undefined;
      this._appstat413 = undefined;
      this._appstat414 = undefined;
      this._appstat415 = undefined;
      this._appstat416 = undefined;
      this._appstat417 = undefined;
      this._appstat418 = undefined;
      this._appstat419 = undefined;
      this._appstat42 = undefined;
      this._appstat420 = undefined;
      this._appstat421 = undefined;
      this._appstat422 = undefined;
      this._appstat423 = undefined;
      this._appstat424 = undefined;
      this._appstat425 = undefined;
      this._appstat426 = undefined;
      this._appstat427 = undefined;
      this._appstat428 = undefined;
      this._appstat429 = undefined;
      this._appstat43 = undefined;
      this._appstat430 = undefined;
      this._appstat431 = undefined;
      this._appstat432 = undefined;
      this._appstat433 = undefined;
      this._appstat434 = undefined;
      this._appstat435 = undefined;
      this._appstat436 = undefined;
      this._appstat437 = undefined;
      this._appstat438 = undefined;
      this._appstat439 = undefined;
      this._appstat44 = undefined;
      this._appstat440 = undefined;
      this._appstat441 = undefined;
      this._appstat442 = undefined;
      this._appstat443 = undefined;
      this._appstat444 = undefined;
      this._appstat445 = undefined;
      this._appstat446 = undefined;
      this._appstat447 = undefined;
      this._appstat448 = undefined;
      this._appstat449 = undefined;
      this._appstat45 = undefined;
      this._appstat450 = undefined;
      this._appstat451 = undefined;
      this._appstat452 = undefined;
      this._appstat453 = undefined;
      this._appstat454 = undefined;
      this._appstat455 = undefined;
      this._appstat456 = undefined;
      this._appstat457 = undefined;
      this._appstat458 = undefined;
      this._appstat459 = undefined;
      this._appstat46 = undefined;
      this._appstat460 = undefined;
      this._appstat461 = undefined;
      this._appstat462 = undefined;
      this._appstat463 = undefined;
      this._appstat464 = undefined;
      this._appstat465 = undefined;
      this._appstat466 = undefined;
      this._appstat467 = undefined;
      this._appstat468 = undefined;
      this._appstat469 = undefined;
      this._appstat47 = undefined;
      this._appstat470 = undefined;
      this._appstat471 = undefined;
      this._appstat472 = undefined;
      this._appstat473 = undefined;
      this._appstat474 = undefined;
      this._appstat475 = undefined;
      this._appstat476 = undefined;
      this._appstat477 = undefined;
      this._appstat478 = undefined;
      this._appstat479 = undefined;
      this._appstat48 = undefined;
      this._appstat480 = undefined;
      this._appstat481 = undefined;
      this._appstat482 = undefined;
      this._appstat483 = undefined;
      this._appstat484 = undefined;
      this._appstat485 = undefined;
      this._appstat486 = undefined;
      this._appstat487 = undefined;
      this._appstat488 = undefined;
      this._appstat489 = undefined;
      this._appstat49 = undefined;
      this._appstat490 = undefined;
      this._appstat491 = undefined;
      this._appstat492 = undefined;
      this._appstat493 = undefined;
      this._appstat494 = undefined;
      this._appstat495 = undefined;
      this._appstat496 = undefined;
      this._appstat497 = undefined;
      this._appstat498 = undefined;
      this._appstat499 = undefined;
      this._appstat5 = undefined;
      this._appstat50 = undefined;
      this._appstat500 = undefined;
      this._appstat501 = undefined;
      this._appstat502 = undefined;
      this._appstat503 = undefined;
      this._appstat504 = undefined;
      this._appstat505 = undefined;
      this._appstat506 = undefined;
      this._appstat507 = undefined;
      this._appstat508 = undefined;
      this._appstat509 = undefined;
      this._appstat51 = undefined;
      this._appstat510 = undefined;
      this._appstat511 = undefined;
      this._appstat52 = undefined;
      this._appstat53 = undefined;
      this._appstat54 = undefined;
      this._appstat55 = undefined;
      this._appstat56 = undefined;
      this._appstat57 = undefined;
      this._appstat58 = undefined;
      this._appstat59 = undefined;
      this._appstat6 = undefined;
      this._appstat60 = undefined;
      this._appstat61 = undefined;
      this._appstat62 = undefined;
      this._appstat63 = undefined;
      this._appstat64 = undefined;
      this._appstat65 = undefined;
      this._appstat66 = undefined;
      this._appstat67 = undefined;
      this._appstat68 = undefined;
      this._appstat69 = undefined;
      this._appstat7 = undefined;
      this._appstat70 = undefined;
      this._appstat71 = undefined;
      this._appstat72 = undefined;
      this._appstat73 = undefined;
      this._appstat74 = undefined;
      this._appstat75 = undefined;
      this._appstat76 = undefined;
      this._appstat77 = undefined;
      this._appstat78 = undefined;
      this._appstat79 = undefined;
      this._appstat8 = undefined;
      this._appstat80 = undefined;
      this._appstat81 = undefined;
      this._appstat82 = undefined;
      this._appstat83 = undefined;
      this._appstat84 = undefined;
      this._appstat85 = undefined;
      this._appstat86 = undefined;
      this._appstat87 = undefined;
      this._appstat88 = undefined;
      this._appstat89 = undefined;
      this._appstat9 = undefined;
      this._appstat90 = undefined;
      this._appstat91 = undefined;
      this._appstat92 = undefined;
      this._appstat93 = undefined;
      this._appstat94 = undefined;
      this._appstat95 = undefined;
      this._appstat96 = undefined;
      this._appstat97 = undefined;
      this._appstat98 = undefined;
      this._appstat99 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appstat1 = value.appstat1;
      this._appstat10 = value.appstat10;
      this._appstat100 = value.appstat100;
      this._appstat101 = value.appstat101;
      this._appstat102 = value.appstat102;
      this._appstat103 = value.appstat103;
      this._appstat104 = value.appstat104;
      this._appstat105 = value.appstat105;
      this._appstat106 = value.appstat106;
      this._appstat107 = value.appstat107;
      this._appstat108 = value.appstat108;
      this._appstat109 = value.appstat109;
      this._appstat11 = value.appstat11;
      this._appstat110 = value.appstat110;
      this._appstat111 = value.appstat111;
      this._appstat112 = value.appstat112;
      this._appstat113 = value.appstat113;
      this._appstat114 = value.appstat114;
      this._appstat115 = value.appstat115;
      this._appstat116 = value.appstat116;
      this._appstat117 = value.appstat117;
      this._appstat118 = value.appstat118;
      this._appstat119 = value.appstat119;
      this._appstat12 = value.appstat12;
      this._appstat120 = value.appstat120;
      this._appstat121 = value.appstat121;
      this._appstat122 = value.appstat122;
      this._appstat123 = value.appstat123;
      this._appstat124 = value.appstat124;
      this._appstat125 = value.appstat125;
      this._appstat126 = value.appstat126;
      this._appstat127 = value.appstat127;
      this._appstat128 = value.appstat128;
      this._appstat129 = value.appstat129;
      this._appstat13 = value.appstat13;
      this._appstat130 = value.appstat130;
      this._appstat131 = value.appstat131;
      this._appstat132 = value.appstat132;
      this._appstat133 = value.appstat133;
      this._appstat134 = value.appstat134;
      this._appstat135 = value.appstat135;
      this._appstat136 = value.appstat136;
      this._appstat137 = value.appstat137;
      this._appstat138 = value.appstat138;
      this._appstat139 = value.appstat139;
      this._appstat14 = value.appstat14;
      this._appstat140 = value.appstat140;
      this._appstat141 = value.appstat141;
      this._appstat142 = value.appstat142;
      this._appstat143 = value.appstat143;
      this._appstat144 = value.appstat144;
      this._appstat145 = value.appstat145;
      this._appstat146 = value.appstat146;
      this._appstat147 = value.appstat147;
      this._appstat148 = value.appstat148;
      this._appstat149 = value.appstat149;
      this._appstat15 = value.appstat15;
      this._appstat150 = value.appstat150;
      this._appstat151 = value.appstat151;
      this._appstat152 = value.appstat152;
      this._appstat153 = value.appstat153;
      this._appstat154 = value.appstat154;
      this._appstat155 = value.appstat155;
      this._appstat156 = value.appstat156;
      this._appstat157 = value.appstat157;
      this._appstat158 = value.appstat158;
      this._appstat159 = value.appstat159;
      this._appstat16 = value.appstat16;
      this._appstat160 = value.appstat160;
      this._appstat161 = value.appstat161;
      this._appstat162 = value.appstat162;
      this._appstat163 = value.appstat163;
      this._appstat164 = value.appstat164;
      this._appstat165 = value.appstat165;
      this._appstat166 = value.appstat166;
      this._appstat167 = value.appstat167;
      this._appstat168 = value.appstat168;
      this._appstat169 = value.appstat169;
      this._appstat17 = value.appstat17;
      this._appstat170 = value.appstat170;
      this._appstat171 = value.appstat171;
      this._appstat172 = value.appstat172;
      this._appstat173 = value.appstat173;
      this._appstat174 = value.appstat174;
      this._appstat175 = value.appstat175;
      this._appstat176 = value.appstat176;
      this._appstat177 = value.appstat177;
      this._appstat178 = value.appstat178;
      this._appstat179 = value.appstat179;
      this._appstat18 = value.appstat18;
      this._appstat180 = value.appstat180;
      this._appstat181 = value.appstat181;
      this._appstat182 = value.appstat182;
      this._appstat183 = value.appstat183;
      this._appstat184 = value.appstat184;
      this._appstat185 = value.appstat185;
      this._appstat186 = value.appstat186;
      this._appstat187 = value.appstat187;
      this._appstat188 = value.appstat188;
      this._appstat189 = value.appstat189;
      this._appstat19 = value.appstat19;
      this._appstat190 = value.appstat190;
      this._appstat191 = value.appstat191;
      this._appstat192 = value.appstat192;
      this._appstat193 = value.appstat193;
      this._appstat194 = value.appstat194;
      this._appstat195 = value.appstat195;
      this._appstat196 = value.appstat196;
      this._appstat197 = value.appstat197;
      this._appstat198 = value.appstat198;
      this._appstat199 = value.appstat199;
      this._appstat2 = value.appstat2;
      this._appstat20 = value.appstat20;
      this._appstat200 = value.appstat200;
      this._appstat201 = value.appstat201;
      this._appstat202 = value.appstat202;
      this._appstat203 = value.appstat203;
      this._appstat204 = value.appstat204;
      this._appstat205 = value.appstat205;
      this._appstat206 = value.appstat206;
      this._appstat207 = value.appstat207;
      this._appstat208 = value.appstat208;
      this._appstat209 = value.appstat209;
      this._appstat21 = value.appstat21;
      this._appstat210 = value.appstat210;
      this._appstat211 = value.appstat211;
      this._appstat212 = value.appstat212;
      this._appstat213 = value.appstat213;
      this._appstat214 = value.appstat214;
      this._appstat215 = value.appstat215;
      this._appstat216 = value.appstat216;
      this._appstat217 = value.appstat217;
      this._appstat218 = value.appstat218;
      this._appstat219 = value.appstat219;
      this._appstat22 = value.appstat22;
      this._appstat220 = value.appstat220;
      this._appstat221 = value.appstat221;
      this._appstat222 = value.appstat222;
      this._appstat223 = value.appstat223;
      this._appstat224 = value.appstat224;
      this._appstat225 = value.appstat225;
      this._appstat226 = value.appstat226;
      this._appstat227 = value.appstat227;
      this._appstat228 = value.appstat228;
      this._appstat229 = value.appstat229;
      this._appstat23 = value.appstat23;
      this._appstat230 = value.appstat230;
      this._appstat231 = value.appstat231;
      this._appstat232 = value.appstat232;
      this._appstat233 = value.appstat233;
      this._appstat234 = value.appstat234;
      this._appstat235 = value.appstat235;
      this._appstat236 = value.appstat236;
      this._appstat237 = value.appstat237;
      this._appstat238 = value.appstat238;
      this._appstat239 = value.appstat239;
      this._appstat24 = value.appstat24;
      this._appstat240 = value.appstat240;
      this._appstat241 = value.appstat241;
      this._appstat242 = value.appstat242;
      this._appstat243 = value.appstat243;
      this._appstat244 = value.appstat244;
      this._appstat245 = value.appstat245;
      this._appstat246 = value.appstat246;
      this._appstat247 = value.appstat247;
      this._appstat248 = value.appstat248;
      this._appstat249 = value.appstat249;
      this._appstat25 = value.appstat25;
      this._appstat250 = value.appstat250;
      this._appstat251 = value.appstat251;
      this._appstat252 = value.appstat252;
      this._appstat253 = value.appstat253;
      this._appstat254 = value.appstat254;
      this._appstat255 = value.appstat255;
      this._appstat256 = value.appstat256;
      this._appstat257 = value.appstat257;
      this._appstat258 = value.appstat258;
      this._appstat259 = value.appstat259;
      this._appstat26 = value.appstat26;
      this._appstat260 = value.appstat260;
      this._appstat261 = value.appstat261;
      this._appstat262 = value.appstat262;
      this._appstat263 = value.appstat263;
      this._appstat264 = value.appstat264;
      this._appstat265 = value.appstat265;
      this._appstat266 = value.appstat266;
      this._appstat267 = value.appstat267;
      this._appstat268 = value.appstat268;
      this._appstat269 = value.appstat269;
      this._appstat27 = value.appstat27;
      this._appstat270 = value.appstat270;
      this._appstat271 = value.appstat271;
      this._appstat272 = value.appstat272;
      this._appstat273 = value.appstat273;
      this._appstat274 = value.appstat274;
      this._appstat275 = value.appstat275;
      this._appstat276 = value.appstat276;
      this._appstat277 = value.appstat277;
      this._appstat278 = value.appstat278;
      this._appstat279 = value.appstat279;
      this._appstat28 = value.appstat28;
      this._appstat280 = value.appstat280;
      this._appstat281 = value.appstat281;
      this._appstat282 = value.appstat282;
      this._appstat283 = value.appstat283;
      this._appstat284 = value.appstat284;
      this._appstat285 = value.appstat285;
      this._appstat286 = value.appstat286;
      this._appstat287 = value.appstat287;
      this._appstat288 = value.appstat288;
      this._appstat289 = value.appstat289;
      this._appstat29 = value.appstat29;
      this._appstat290 = value.appstat290;
      this._appstat291 = value.appstat291;
      this._appstat292 = value.appstat292;
      this._appstat293 = value.appstat293;
      this._appstat294 = value.appstat294;
      this._appstat295 = value.appstat295;
      this._appstat296 = value.appstat296;
      this._appstat297 = value.appstat297;
      this._appstat298 = value.appstat298;
      this._appstat299 = value.appstat299;
      this._appstat3 = value.appstat3;
      this._appstat30 = value.appstat30;
      this._appstat300 = value.appstat300;
      this._appstat301 = value.appstat301;
      this._appstat302 = value.appstat302;
      this._appstat303 = value.appstat303;
      this._appstat304 = value.appstat304;
      this._appstat305 = value.appstat305;
      this._appstat306 = value.appstat306;
      this._appstat307 = value.appstat307;
      this._appstat308 = value.appstat308;
      this._appstat309 = value.appstat309;
      this._appstat31 = value.appstat31;
      this._appstat310 = value.appstat310;
      this._appstat311 = value.appstat311;
      this._appstat312 = value.appstat312;
      this._appstat313 = value.appstat313;
      this._appstat314 = value.appstat314;
      this._appstat315 = value.appstat315;
      this._appstat316 = value.appstat316;
      this._appstat317 = value.appstat317;
      this._appstat318 = value.appstat318;
      this._appstat319 = value.appstat319;
      this._appstat32 = value.appstat32;
      this._appstat320 = value.appstat320;
      this._appstat321 = value.appstat321;
      this._appstat322 = value.appstat322;
      this._appstat323 = value.appstat323;
      this._appstat324 = value.appstat324;
      this._appstat325 = value.appstat325;
      this._appstat326 = value.appstat326;
      this._appstat327 = value.appstat327;
      this._appstat328 = value.appstat328;
      this._appstat329 = value.appstat329;
      this._appstat33 = value.appstat33;
      this._appstat330 = value.appstat330;
      this._appstat331 = value.appstat331;
      this._appstat332 = value.appstat332;
      this._appstat333 = value.appstat333;
      this._appstat334 = value.appstat334;
      this._appstat335 = value.appstat335;
      this._appstat336 = value.appstat336;
      this._appstat337 = value.appstat337;
      this._appstat338 = value.appstat338;
      this._appstat339 = value.appstat339;
      this._appstat34 = value.appstat34;
      this._appstat340 = value.appstat340;
      this._appstat341 = value.appstat341;
      this._appstat342 = value.appstat342;
      this._appstat343 = value.appstat343;
      this._appstat344 = value.appstat344;
      this._appstat345 = value.appstat345;
      this._appstat346 = value.appstat346;
      this._appstat347 = value.appstat347;
      this._appstat348 = value.appstat348;
      this._appstat349 = value.appstat349;
      this._appstat35 = value.appstat35;
      this._appstat350 = value.appstat350;
      this._appstat351 = value.appstat351;
      this._appstat352 = value.appstat352;
      this._appstat353 = value.appstat353;
      this._appstat354 = value.appstat354;
      this._appstat355 = value.appstat355;
      this._appstat356 = value.appstat356;
      this._appstat357 = value.appstat357;
      this._appstat358 = value.appstat358;
      this._appstat359 = value.appstat359;
      this._appstat36 = value.appstat36;
      this._appstat360 = value.appstat360;
      this._appstat361 = value.appstat361;
      this._appstat362 = value.appstat362;
      this._appstat363 = value.appstat363;
      this._appstat364 = value.appstat364;
      this._appstat365 = value.appstat365;
      this._appstat366 = value.appstat366;
      this._appstat367 = value.appstat367;
      this._appstat368 = value.appstat368;
      this._appstat369 = value.appstat369;
      this._appstat37 = value.appstat37;
      this._appstat370 = value.appstat370;
      this._appstat371 = value.appstat371;
      this._appstat372 = value.appstat372;
      this._appstat373 = value.appstat373;
      this._appstat374 = value.appstat374;
      this._appstat375 = value.appstat375;
      this._appstat376 = value.appstat376;
      this._appstat377 = value.appstat377;
      this._appstat378 = value.appstat378;
      this._appstat379 = value.appstat379;
      this._appstat38 = value.appstat38;
      this._appstat380 = value.appstat380;
      this._appstat381 = value.appstat381;
      this._appstat382 = value.appstat382;
      this._appstat383 = value.appstat383;
      this._appstat384 = value.appstat384;
      this._appstat385 = value.appstat385;
      this._appstat386 = value.appstat386;
      this._appstat387 = value.appstat387;
      this._appstat388 = value.appstat388;
      this._appstat389 = value.appstat389;
      this._appstat39 = value.appstat39;
      this._appstat390 = value.appstat390;
      this._appstat391 = value.appstat391;
      this._appstat392 = value.appstat392;
      this._appstat393 = value.appstat393;
      this._appstat394 = value.appstat394;
      this._appstat395 = value.appstat395;
      this._appstat396 = value.appstat396;
      this._appstat397 = value.appstat397;
      this._appstat398 = value.appstat398;
      this._appstat399 = value.appstat399;
      this._appstat4 = value.appstat4;
      this._appstat40 = value.appstat40;
      this._appstat400 = value.appstat400;
      this._appstat401 = value.appstat401;
      this._appstat402 = value.appstat402;
      this._appstat403 = value.appstat403;
      this._appstat404 = value.appstat404;
      this._appstat405 = value.appstat405;
      this._appstat406 = value.appstat406;
      this._appstat407 = value.appstat407;
      this._appstat408 = value.appstat408;
      this._appstat409 = value.appstat409;
      this._appstat41 = value.appstat41;
      this._appstat410 = value.appstat410;
      this._appstat411 = value.appstat411;
      this._appstat412 = value.appstat412;
      this._appstat413 = value.appstat413;
      this._appstat414 = value.appstat414;
      this._appstat415 = value.appstat415;
      this._appstat416 = value.appstat416;
      this._appstat417 = value.appstat417;
      this._appstat418 = value.appstat418;
      this._appstat419 = value.appstat419;
      this._appstat42 = value.appstat42;
      this._appstat420 = value.appstat420;
      this._appstat421 = value.appstat421;
      this._appstat422 = value.appstat422;
      this._appstat423 = value.appstat423;
      this._appstat424 = value.appstat424;
      this._appstat425 = value.appstat425;
      this._appstat426 = value.appstat426;
      this._appstat427 = value.appstat427;
      this._appstat428 = value.appstat428;
      this._appstat429 = value.appstat429;
      this._appstat43 = value.appstat43;
      this._appstat430 = value.appstat430;
      this._appstat431 = value.appstat431;
      this._appstat432 = value.appstat432;
      this._appstat433 = value.appstat433;
      this._appstat434 = value.appstat434;
      this._appstat435 = value.appstat435;
      this._appstat436 = value.appstat436;
      this._appstat437 = value.appstat437;
      this._appstat438 = value.appstat438;
      this._appstat439 = value.appstat439;
      this._appstat44 = value.appstat44;
      this._appstat440 = value.appstat440;
      this._appstat441 = value.appstat441;
      this._appstat442 = value.appstat442;
      this._appstat443 = value.appstat443;
      this._appstat444 = value.appstat444;
      this._appstat445 = value.appstat445;
      this._appstat446 = value.appstat446;
      this._appstat447 = value.appstat447;
      this._appstat448 = value.appstat448;
      this._appstat449 = value.appstat449;
      this._appstat45 = value.appstat45;
      this._appstat450 = value.appstat450;
      this._appstat451 = value.appstat451;
      this._appstat452 = value.appstat452;
      this._appstat453 = value.appstat453;
      this._appstat454 = value.appstat454;
      this._appstat455 = value.appstat455;
      this._appstat456 = value.appstat456;
      this._appstat457 = value.appstat457;
      this._appstat458 = value.appstat458;
      this._appstat459 = value.appstat459;
      this._appstat46 = value.appstat46;
      this._appstat460 = value.appstat460;
      this._appstat461 = value.appstat461;
      this._appstat462 = value.appstat462;
      this._appstat463 = value.appstat463;
      this._appstat464 = value.appstat464;
      this._appstat465 = value.appstat465;
      this._appstat466 = value.appstat466;
      this._appstat467 = value.appstat467;
      this._appstat468 = value.appstat468;
      this._appstat469 = value.appstat469;
      this._appstat47 = value.appstat47;
      this._appstat470 = value.appstat470;
      this._appstat471 = value.appstat471;
      this._appstat472 = value.appstat472;
      this._appstat473 = value.appstat473;
      this._appstat474 = value.appstat474;
      this._appstat475 = value.appstat475;
      this._appstat476 = value.appstat476;
      this._appstat477 = value.appstat477;
      this._appstat478 = value.appstat478;
      this._appstat479 = value.appstat479;
      this._appstat48 = value.appstat48;
      this._appstat480 = value.appstat480;
      this._appstat481 = value.appstat481;
      this._appstat482 = value.appstat482;
      this._appstat483 = value.appstat483;
      this._appstat484 = value.appstat484;
      this._appstat485 = value.appstat485;
      this._appstat486 = value.appstat486;
      this._appstat487 = value.appstat487;
      this._appstat488 = value.appstat488;
      this._appstat489 = value.appstat489;
      this._appstat49 = value.appstat49;
      this._appstat490 = value.appstat490;
      this._appstat491 = value.appstat491;
      this._appstat492 = value.appstat492;
      this._appstat493 = value.appstat493;
      this._appstat494 = value.appstat494;
      this._appstat495 = value.appstat495;
      this._appstat496 = value.appstat496;
      this._appstat497 = value.appstat497;
      this._appstat498 = value.appstat498;
      this._appstat499 = value.appstat499;
      this._appstat5 = value.appstat5;
      this._appstat50 = value.appstat50;
      this._appstat500 = value.appstat500;
      this._appstat501 = value.appstat501;
      this._appstat502 = value.appstat502;
      this._appstat503 = value.appstat503;
      this._appstat504 = value.appstat504;
      this._appstat505 = value.appstat505;
      this._appstat506 = value.appstat506;
      this._appstat507 = value.appstat507;
      this._appstat508 = value.appstat508;
      this._appstat509 = value.appstat509;
      this._appstat51 = value.appstat51;
      this._appstat510 = value.appstat510;
      this._appstat511 = value.appstat511;
      this._appstat52 = value.appstat52;
      this._appstat53 = value.appstat53;
      this._appstat54 = value.appstat54;
      this._appstat55 = value.appstat55;
      this._appstat56 = value.appstat56;
      this._appstat57 = value.appstat57;
      this._appstat58 = value.appstat58;
      this._appstat59 = value.appstat59;
      this._appstat6 = value.appstat6;
      this._appstat60 = value.appstat60;
      this._appstat61 = value.appstat61;
      this._appstat62 = value.appstat62;
      this._appstat63 = value.appstat63;
      this._appstat64 = value.appstat64;
      this._appstat65 = value.appstat65;
      this._appstat66 = value.appstat66;
      this._appstat67 = value.appstat67;
      this._appstat68 = value.appstat68;
      this._appstat69 = value.appstat69;
      this._appstat7 = value.appstat7;
      this._appstat70 = value.appstat70;
      this._appstat71 = value.appstat71;
      this._appstat72 = value.appstat72;
      this._appstat73 = value.appstat73;
      this._appstat74 = value.appstat74;
      this._appstat75 = value.appstat75;
      this._appstat76 = value.appstat76;
      this._appstat77 = value.appstat77;
      this._appstat78 = value.appstat78;
      this._appstat79 = value.appstat79;
      this._appstat8 = value.appstat8;
      this._appstat80 = value.appstat80;
      this._appstat81 = value.appstat81;
      this._appstat82 = value.appstat82;
      this._appstat83 = value.appstat83;
      this._appstat84 = value.appstat84;
      this._appstat85 = value.appstat85;
      this._appstat86 = value.appstat86;
      this._appstat87 = value.appstat87;
      this._appstat88 = value.appstat88;
      this._appstat89 = value.appstat89;
      this._appstat9 = value.appstat9;
      this._appstat90 = value.appstat90;
      this._appstat91 = value.appstat91;
      this._appstat92 = value.appstat92;
      this._appstat93 = value.appstat93;
      this._appstat94 = value.appstat94;
      this._appstat95 = value.appstat95;
      this._appstat96 = value.appstat96;
      this._appstat97 = value.appstat97;
      this._appstat98 = value.appstat98;
      this._appstat99 = value.appstat99;
    }
  }

  // appstat1 - computed: false, optional: true, required: false
  private _appstat1?: number; 
  public get appstat1() {
    return this.getNumberAttribute('appstat1');
  }
  public set appstat1(value: number) {
    this._appstat1 = value;
  }
  public resetAppstat1() {
    this._appstat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat1Input() {
    return this._appstat1;
  }

  // appstat10 - computed: false, optional: true, required: false
  private _appstat10?: number; 
  public get appstat10() {
    return this.getNumberAttribute('appstat10');
  }
  public set appstat10(value: number) {
    this._appstat10 = value;
  }
  public resetAppstat10() {
    this._appstat10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat10Input() {
    return this._appstat10;
  }

  // appstat100 - computed: false, optional: true, required: false
  private _appstat100?: number; 
  public get appstat100() {
    return this.getNumberAttribute('appstat100');
  }
  public set appstat100(value: number) {
    this._appstat100 = value;
  }
  public resetAppstat100() {
    this._appstat100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat100Input() {
    return this._appstat100;
  }

  // appstat101 - computed: false, optional: true, required: false
  private _appstat101?: number; 
  public get appstat101() {
    return this.getNumberAttribute('appstat101');
  }
  public set appstat101(value: number) {
    this._appstat101 = value;
  }
  public resetAppstat101() {
    this._appstat101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat101Input() {
    return this._appstat101;
  }

  // appstat102 - computed: false, optional: true, required: false
  private _appstat102?: number; 
  public get appstat102() {
    return this.getNumberAttribute('appstat102');
  }
  public set appstat102(value: number) {
    this._appstat102 = value;
  }
  public resetAppstat102() {
    this._appstat102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat102Input() {
    return this._appstat102;
  }

  // appstat103 - computed: false, optional: true, required: false
  private _appstat103?: number; 
  public get appstat103() {
    return this.getNumberAttribute('appstat103');
  }
  public set appstat103(value: number) {
    this._appstat103 = value;
  }
  public resetAppstat103() {
    this._appstat103 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat103Input() {
    return this._appstat103;
  }

  // appstat104 - computed: false, optional: true, required: false
  private _appstat104?: number; 
  public get appstat104() {
    return this.getNumberAttribute('appstat104');
  }
  public set appstat104(value: number) {
    this._appstat104 = value;
  }
  public resetAppstat104() {
    this._appstat104 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat104Input() {
    return this._appstat104;
  }

  // appstat105 - computed: false, optional: true, required: false
  private _appstat105?: number; 
  public get appstat105() {
    return this.getNumberAttribute('appstat105');
  }
  public set appstat105(value: number) {
    this._appstat105 = value;
  }
  public resetAppstat105() {
    this._appstat105 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat105Input() {
    return this._appstat105;
  }

  // appstat106 - computed: false, optional: true, required: false
  private _appstat106?: number; 
  public get appstat106() {
    return this.getNumberAttribute('appstat106');
  }
  public set appstat106(value: number) {
    this._appstat106 = value;
  }
  public resetAppstat106() {
    this._appstat106 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat106Input() {
    return this._appstat106;
  }

  // appstat107 - computed: false, optional: true, required: false
  private _appstat107?: number; 
  public get appstat107() {
    return this.getNumberAttribute('appstat107');
  }
  public set appstat107(value: number) {
    this._appstat107 = value;
  }
  public resetAppstat107() {
    this._appstat107 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat107Input() {
    return this._appstat107;
  }

  // appstat108 - computed: false, optional: true, required: false
  private _appstat108?: number; 
  public get appstat108() {
    return this.getNumberAttribute('appstat108');
  }
  public set appstat108(value: number) {
    this._appstat108 = value;
  }
  public resetAppstat108() {
    this._appstat108 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat108Input() {
    return this._appstat108;
  }

  // appstat109 - computed: false, optional: true, required: false
  private _appstat109?: number; 
  public get appstat109() {
    return this.getNumberAttribute('appstat109');
  }
  public set appstat109(value: number) {
    this._appstat109 = value;
  }
  public resetAppstat109() {
    this._appstat109 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat109Input() {
    return this._appstat109;
  }

  // appstat11 - computed: false, optional: true, required: false
  private _appstat11?: number; 
  public get appstat11() {
    return this.getNumberAttribute('appstat11');
  }
  public set appstat11(value: number) {
    this._appstat11 = value;
  }
  public resetAppstat11() {
    this._appstat11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat11Input() {
    return this._appstat11;
  }

  // appstat110 - computed: false, optional: true, required: false
  private _appstat110?: number; 
  public get appstat110() {
    return this.getNumberAttribute('appstat110');
  }
  public set appstat110(value: number) {
    this._appstat110 = value;
  }
  public resetAppstat110() {
    this._appstat110 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat110Input() {
    return this._appstat110;
  }

  // appstat111 - computed: false, optional: true, required: false
  private _appstat111?: number; 
  public get appstat111() {
    return this.getNumberAttribute('appstat111');
  }
  public set appstat111(value: number) {
    this._appstat111 = value;
  }
  public resetAppstat111() {
    this._appstat111 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat111Input() {
    return this._appstat111;
  }

  // appstat112 - computed: false, optional: true, required: false
  private _appstat112?: number; 
  public get appstat112() {
    return this.getNumberAttribute('appstat112');
  }
  public set appstat112(value: number) {
    this._appstat112 = value;
  }
  public resetAppstat112() {
    this._appstat112 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat112Input() {
    return this._appstat112;
  }

  // appstat113 - computed: false, optional: true, required: false
  private _appstat113?: number; 
  public get appstat113() {
    return this.getNumberAttribute('appstat113');
  }
  public set appstat113(value: number) {
    this._appstat113 = value;
  }
  public resetAppstat113() {
    this._appstat113 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat113Input() {
    return this._appstat113;
  }

  // appstat114 - computed: false, optional: true, required: false
  private _appstat114?: number; 
  public get appstat114() {
    return this.getNumberAttribute('appstat114');
  }
  public set appstat114(value: number) {
    this._appstat114 = value;
  }
  public resetAppstat114() {
    this._appstat114 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat114Input() {
    return this._appstat114;
  }

  // appstat115 - computed: false, optional: true, required: false
  private _appstat115?: number; 
  public get appstat115() {
    return this.getNumberAttribute('appstat115');
  }
  public set appstat115(value: number) {
    this._appstat115 = value;
  }
  public resetAppstat115() {
    this._appstat115 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat115Input() {
    return this._appstat115;
  }

  // appstat116 - computed: false, optional: true, required: false
  private _appstat116?: number; 
  public get appstat116() {
    return this.getNumberAttribute('appstat116');
  }
  public set appstat116(value: number) {
    this._appstat116 = value;
  }
  public resetAppstat116() {
    this._appstat116 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat116Input() {
    return this._appstat116;
  }

  // appstat117 - computed: false, optional: true, required: false
  private _appstat117?: number; 
  public get appstat117() {
    return this.getNumberAttribute('appstat117');
  }
  public set appstat117(value: number) {
    this._appstat117 = value;
  }
  public resetAppstat117() {
    this._appstat117 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat117Input() {
    return this._appstat117;
  }

  // appstat118 - computed: false, optional: true, required: false
  private _appstat118?: number; 
  public get appstat118() {
    return this.getNumberAttribute('appstat118');
  }
  public set appstat118(value: number) {
    this._appstat118 = value;
  }
  public resetAppstat118() {
    this._appstat118 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat118Input() {
    return this._appstat118;
  }

  // appstat119 - computed: false, optional: true, required: false
  private _appstat119?: number; 
  public get appstat119() {
    return this.getNumberAttribute('appstat119');
  }
  public set appstat119(value: number) {
    this._appstat119 = value;
  }
  public resetAppstat119() {
    this._appstat119 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat119Input() {
    return this._appstat119;
  }

  // appstat12 - computed: false, optional: true, required: false
  private _appstat12?: number; 
  public get appstat12() {
    return this.getNumberAttribute('appstat12');
  }
  public set appstat12(value: number) {
    this._appstat12 = value;
  }
  public resetAppstat12() {
    this._appstat12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat12Input() {
    return this._appstat12;
  }

  // appstat120 - computed: false, optional: true, required: false
  private _appstat120?: number; 
  public get appstat120() {
    return this.getNumberAttribute('appstat120');
  }
  public set appstat120(value: number) {
    this._appstat120 = value;
  }
  public resetAppstat120() {
    this._appstat120 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat120Input() {
    return this._appstat120;
  }

  // appstat121 - computed: false, optional: true, required: false
  private _appstat121?: number; 
  public get appstat121() {
    return this.getNumberAttribute('appstat121');
  }
  public set appstat121(value: number) {
    this._appstat121 = value;
  }
  public resetAppstat121() {
    this._appstat121 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat121Input() {
    return this._appstat121;
  }

  // appstat122 - computed: false, optional: true, required: false
  private _appstat122?: number; 
  public get appstat122() {
    return this.getNumberAttribute('appstat122');
  }
  public set appstat122(value: number) {
    this._appstat122 = value;
  }
  public resetAppstat122() {
    this._appstat122 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat122Input() {
    return this._appstat122;
  }

  // appstat123 - computed: false, optional: true, required: false
  private _appstat123?: number; 
  public get appstat123() {
    return this.getNumberAttribute('appstat123');
  }
  public set appstat123(value: number) {
    this._appstat123 = value;
  }
  public resetAppstat123() {
    this._appstat123 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat123Input() {
    return this._appstat123;
  }

  // appstat124 - computed: false, optional: true, required: false
  private _appstat124?: number; 
  public get appstat124() {
    return this.getNumberAttribute('appstat124');
  }
  public set appstat124(value: number) {
    this._appstat124 = value;
  }
  public resetAppstat124() {
    this._appstat124 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat124Input() {
    return this._appstat124;
  }

  // appstat125 - computed: false, optional: true, required: false
  private _appstat125?: number; 
  public get appstat125() {
    return this.getNumberAttribute('appstat125');
  }
  public set appstat125(value: number) {
    this._appstat125 = value;
  }
  public resetAppstat125() {
    this._appstat125 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat125Input() {
    return this._appstat125;
  }

  // appstat126 - computed: false, optional: true, required: false
  private _appstat126?: number; 
  public get appstat126() {
    return this.getNumberAttribute('appstat126');
  }
  public set appstat126(value: number) {
    this._appstat126 = value;
  }
  public resetAppstat126() {
    this._appstat126 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat126Input() {
    return this._appstat126;
  }

  // appstat127 - computed: false, optional: true, required: false
  private _appstat127?: number; 
  public get appstat127() {
    return this.getNumberAttribute('appstat127');
  }
  public set appstat127(value: number) {
    this._appstat127 = value;
  }
  public resetAppstat127() {
    this._appstat127 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat127Input() {
    return this._appstat127;
  }

  // appstat128 - computed: false, optional: true, required: false
  private _appstat128?: number; 
  public get appstat128() {
    return this.getNumberAttribute('appstat128');
  }
  public set appstat128(value: number) {
    this._appstat128 = value;
  }
  public resetAppstat128() {
    this._appstat128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat128Input() {
    return this._appstat128;
  }

  // appstat129 - computed: false, optional: true, required: false
  private _appstat129?: number; 
  public get appstat129() {
    return this.getNumberAttribute('appstat129');
  }
  public set appstat129(value: number) {
    this._appstat129 = value;
  }
  public resetAppstat129() {
    this._appstat129 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat129Input() {
    return this._appstat129;
  }

  // appstat13 - computed: false, optional: true, required: false
  private _appstat13?: number; 
  public get appstat13() {
    return this.getNumberAttribute('appstat13');
  }
  public set appstat13(value: number) {
    this._appstat13 = value;
  }
  public resetAppstat13() {
    this._appstat13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat13Input() {
    return this._appstat13;
  }

  // appstat130 - computed: false, optional: true, required: false
  private _appstat130?: number; 
  public get appstat130() {
    return this.getNumberAttribute('appstat130');
  }
  public set appstat130(value: number) {
    this._appstat130 = value;
  }
  public resetAppstat130() {
    this._appstat130 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat130Input() {
    return this._appstat130;
  }

  // appstat131 - computed: false, optional: true, required: false
  private _appstat131?: number; 
  public get appstat131() {
    return this.getNumberAttribute('appstat131');
  }
  public set appstat131(value: number) {
    this._appstat131 = value;
  }
  public resetAppstat131() {
    this._appstat131 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat131Input() {
    return this._appstat131;
  }

  // appstat132 - computed: false, optional: true, required: false
  private _appstat132?: number; 
  public get appstat132() {
    return this.getNumberAttribute('appstat132');
  }
  public set appstat132(value: number) {
    this._appstat132 = value;
  }
  public resetAppstat132() {
    this._appstat132 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat132Input() {
    return this._appstat132;
  }

  // appstat133 - computed: false, optional: true, required: false
  private _appstat133?: number; 
  public get appstat133() {
    return this.getNumberAttribute('appstat133');
  }
  public set appstat133(value: number) {
    this._appstat133 = value;
  }
  public resetAppstat133() {
    this._appstat133 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat133Input() {
    return this._appstat133;
  }

  // appstat134 - computed: false, optional: true, required: false
  private _appstat134?: number; 
  public get appstat134() {
    return this.getNumberAttribute('appstat134');
  }
  public set appstat134(value: number) {
    this._appstat134 = value;
  }
  public resetAppstat134() {
    this._appstat134 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat134Input() {
    return this._appstat134;
  }

  // appstat135 - computed: false, optional: true, required: false
  private _appstat135?: number; 
  public get appstat135() {
    return this.getNumberAttribute('appstat135');
  }
  public set appstat135(value: number) {
    this._appstat135 = value;
  }
  public resetAppstat135() {
    this._appstat135 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat135Input() {
    return this._appstat135;
  }

  // appstat136 - computed: false, optional: true, required: false
  private _appstat136?: number; 
  public get appstat136() {
    return this.getNumberAttribute('appstat136');
  }
  public set appstat136(value: number) {
    this._appstat136 = value;
  }
  public resetAppstat136() {
    this._appstat136 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat136Input() {
    return this._appstat136;
  }

  // appstat137 - computed: false, optional: true, required: false
  private _appstat137?: number; 
  public get appstat137() {
    return this.getNumberAttribute('appstat137');
  }
  public set appstat137(value: number) {
    this._appstat137 = value;
  }
  public resetAppstat137() {
    this._appstat137 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat137Input() {
    return this._appstat137;
  }

  // appstat138 - computed: false, optional: true, required: false
  private _appstat138?: number; 
  public get appstat138() {
    return this.getNumberAttribute('appstat138');
  }
  public set appstat138(value: number) {
    this._appstat138 = value;
  }
  public resetAppstat138() {
    this._appstat138 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat138Input() {
    return this._appstat138;
  }

  // appstat139 - computed: false, optional: true, required: false
  private _appstat139?: number; 
  public get appstat139() {
    return this.getNumberAttribute('appstat139');
  }
  public set appstat139(value: number) {
    this._appstat139 = value;
  }
  public resetAppstat139() {
    this._appstat139 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat139Input() {
    return this._appstat139;
  }

  // appstat14 - computed: false, optional: true, required: false
  private _appstat14?: number; 
  public get appstat14() {
    return this.getNumberAttribute('appstat14');
  }
  public set appstat14(value: number) {
    this._appstat14 = value;
  }
  public resetAppstat14() {
    this._appstat14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat14Input() {
    return this._appstat14;
  }

  // appstat140 - computed: false, optional: true, required: false
  private _appstat140?: number; 
  public get appstat140() {
    return this.getNumberAttribute('appstat140');
  }
  public set appstat140(value: number) {
    this._appstat140 = value;
  }
  public resetAppstat140() {
    this._appstat140 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat140Input() {
    return this._appstat140;
  }

  // appstat141 - computed: false, optional: true, required: false
  private _appstat141?: number; 
  public get appstat141() {
    return this.getNumberAttribute('appstat141');
  }
  public set appstat141(value: number) {
    this._appstat141 = value;
  }
  public resetAppstat141() {
    this._appstat141 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat141Input() {
    return this._appstat141;
  }

  // appstat142 - computed: false, optional: true, required: false
  private _appstat142?: number; 
  public get appstat142() {
    return this.getNumberAttribute('appstat142');
  }
  public set appstat142(value: number) {
    this._appstat142 = value;
  }
  public resetAppstat142() {
    this._appstat142 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat142Input() {
    return this._appstat142;
  }

  // appstat143 - computed: false, optional: true, required: false
  private _appstat143?: number; 
  public get appstat143() {
    return this.getNumberAttribute('appstat143');
  }
  public set appstat143(value: number) {
    this._appstat143 = value;
  }
  public resetAppstat143() {
    this._appstat143 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat143Input() {
    return this._appstat143;
  }

  // appstat144 - computed: false, optional: true, required: false
  private _appstat144?: number; 
  public get appstat144() {
    return this.getNumberAttribute('appstat144');
  }
  public set appstat144(value: number) {
    this._appstat144 = value;
  }
  public resetAppstat144() {
    this._appstat144 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat144Input() {
    return this._appstat144;
  }

  // appstat145 - computed: false, optional: true, required: false
  private _appstat145?: number; 
  public get appstat145() {
    return this.getNumberAttribute('appstat145');
  }
  public set appstat145(value: number) {
    this._appstat145 = value;
  }
  public resetAppstat145() {
    this._appstat145 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat145Input() {
    return this._appstat145;
  }

  // appstat146 - computed: false, optional: true, required: false
  private _appstat146?: number; 
  public get appstat146() {
    return this.getNumberAttribute('appstat146');
  }
  public set appstat146(value: number) {
    this._appstat146 = value;
  }
  public resetAppstat146() {
    this._appstat146 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat146Input() {
    return this._appstat146;
  }

  // appstat147 - computed: false, optional: true, required: false
  private _appstat147?: number; 
  public get appstat147() {
    return this.getNumberAttribute('appstat147');
  }
  public set appstat147(value: number) {
    this._appstat147 = value;
  }
  public resetAppstat147() {
    this._appstat147 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat147Input() {
    return this._appstat147;
  }

  // appstat148 - computed: false, optional: true, required: false
  private _appstat148?: number; 
  public get appstat148() {
    return this.getNumberAttribute('appstat148');
  }
  public set appstat148(value: number) {
    this._appstat148 = value;
  }
  public resetAppstat148() {
    this._appstat148 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat148Input() {
    return this._appstat148;
  }

  // appstat149 - computed: false, optional: true, required: false
  private _appstat149?: number; 
  public get appstat149() {
    return this.getNumberAttribute('appstat149');
  }
  public set appstat149(value: number) {
    this._appstat149 = value;
  }
  public resetAppstat149() {
    this._appstat149 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat149Input() {
    return this._appstat149;
  }

  // appstat15 - computed: false, optional: true, required: false
  private _appstat15?: number; 
  public get appstat15() {
    return this.getNumberAttribute('appstat15');
  }
  public set appstat15(value: number) {
    this._appstat15 = value;
  }
  public resetAppstat15() {
    this._appstat15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat15Input() {
    return this._appstat15;
  }

  // appstat150 - computed: false, optional: true, required: false
  private _appstat150?: number; 
  public get appstat150() {
    return this.getNumberAttribute('appstat150');
  }
  public set appstat150(value: number) {
    this._appstat150 = value;
  }
  public resetAppstat150() {
    this._appstat150 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat150Input() {
    return this._appstat150;
  }

  // appstat151 - computed: false, optional: true, required: false
  private _appstat151?: number; 
  public get appstat151() {
    return this.getNumberAttribute('appstat151');
  }
  public set appstat151(value: number) {
    this._appstat151 = value;
  }
  public resetAppstat151() {
    this._appstat151 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat151Input() {
    return this._appstat151;
  }

  // appstat152 - computed: false, optional: true, required: false
  private _appstat152?: number; 
  public get appstat152() {
    return this.getNumberAttribute('appstat152');
  }
  public set appstat152(value: number) {
    this._appstat152 = value;
  }
  public resetAppstat152() {
    this._appstat152 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat152Input() {
    return this._appstat152;
  }

  // appstat153 - computed: false, optional: true, required: false
  private _appstat153?: number; 
  public get appstat153() {
    return this.getNumberAttribute('appstat153');
  }
  public set appstat153(value: number) {
    this._appstat153 = value;
  }
  public resetAppstat153() {
    this._appstat153 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat153Input() {
    return this._appstat153;
  }

  // appstat154 - computed: false, optional: true, required: false
  private _appstat154?: number; 
  public get appstat154() {
    return this.getNumberAttribute('appstat154');
  }
  public set appstat154(value: number) {
    this._appstat154 = value;
  }
  public resetAppstat154() {
    this._appstat154 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat154Input() {
    return this._appstat154;
  }

  // appstat155 - computed: false, optional: true, required: false
  private _appstat155?: number; 
  public get appstat155() {
    return this.getNumberAttribute('appstat155');
  }
  public set appstat155(value: number) {
    this._appstat155 = value;
  }
  public resetAppstat155() {
    this._appstat155 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat155Input() {
    return this._appstat155;
  }

  // appstat156 - computed: false, optional: true, required: false
  private _appstat156?: number; 
  public get appstat156() {
    return this.getNumberAttribute('appstat156');
  }
  public set appstat156(value: number) {
    this._appstat156 = value;
  }
  public resetAppstat156() {
    this._appstat156 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat156Input() {
    return this._appstat156;
  }

  // appstat157 - computed: false, optional: true, required: false
  private _appstat157?: number; 
  public get appstat157() {
    return this.getNumberAttribute('appstat157');
  }
  public set appstat157(value: number) {
    this._appstat157 = value;
  }
  public resetAppstat157() {
    this._appstat157 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat157Input() {
    return this._appstat157;
  }

  // appstat158 - computed: false, optional: true, required: false
  private _appstat158?: number; 
  public get appstat158() {
    return this.getNumberAttribute('appstat158');
  }
  public set appstat158(value: number) {
    this._appstat158 = value;
  }
  public resetAppstat158() {
    this._appstat158 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat158Input() {
    return this._appstat158;
  }

  // appstat159 - computed: false, optional: true, required: false
  private _appstat159?: number; 
  public get appstat159() {
    return this.getNumberAttribute('appstat159');
  }
  public set appstat159(value: number) {
    this._appstat159 = value;
  }
  public resetAppstat159() {
    this._appstat159 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat159Input() {
    return this._appstat159;
  }

  // appstat16 - computed: false, optional: true, required: false
  private _appstat16?: number; 
  public get appstat16() {
    return this.getNumberAttribute('appstat16');
  }
  public set appstat16(value: number) {
    this._appstat16 = value;
  }
  public resetAppstat16() {
    this._appstat16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat16Input() {
    return this._appstat16;
  }

  // appstat160 - computed: false, optional: true, required: false
  private _appstat160?: number; 
  public get appstat160() {
    return this.getNumberAttribute('appstat160');
  }
  public set appstat160(value: number) {
    this._appstat160 = value;
  }
  public resetAppstat160() {
    this._appstat160 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat160Input() {
    return this._appstat160;
  }

  // appstat161 - computed: false, optional: true, required: false
  private _appstat161?: number; 
  public get appstat161() {
    return this.getNumberAttribute('appstat161');
  }
  public set appstat161(value: number) {
    this._appstat161 = value;
  }
  public resetAppstat161() {
    this._appstat161 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat161Input() {
    return this._appstat161;
  }

  // appstat162 - computed: false, optional: true, required: false
  private _appstat162?: number; 
  public get appstat162() {
    return this.getNumberAttribute('appstat162');
  }
  public set appstat162(value: number) {
    this._appstat162 = value;
  }
  public resetAppstat162() {
    this._appstat162 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat162Input() {
    return this._appstat162;
  }

  // appstat163 - computed: false, optional: true, required: false
  private _appstat163?: number; 
  public get appstat163() {
    return this.getNumberAttribute('appstat163');
  }
  public set appstat163(value: number) {
    this._appstat163 = value;
  }
  public resetAppstat163() {
    this._appstat163 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat163Input() {
    return this._appstat163;
  }

  // appstat164 - computed: false, optional: true, required: false
  private _appstat164?: number; 
  public get appstat164() {
    return this.getNumberAttribute('appstat164');
  }
  public set appstat164(value: number) {
    this._appstat164 = value;
  }
  public resetAppstat164() {
    this._appstat164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat164Input() {
    return this._appstat164;
  }

  // appstat165 - computed: false, optional: true, required: false
  private _appstat165?: number; 
  public get appstat165() {
    return this.getNumberAttribute('appstat165');
  }
  public set appstat165(value: number) {
    this._appstat165 = value;
  }
  public resetAppstat165() {
    this._appstat165 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat165Input() {
    return this._appstat165;
  }

  // appstat166 - computed: false, optional: true, required: false
  private _appstat166?: number; 
  public get appstat166() {
    return this.getNumberAttribute('appstat166');
  }
  public set appstat166(value: number) {
    this._appstat166 = value;
  }
  public resetAppstat166() {
    this._appstat166 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat166Input() {
    return this._appstat166;
  }

  // appstat167 - computed: false, optional: true, required: false
  private _appstat167?: number; 
  public get appstat167() {
    return this.getNumberAttribute('appstat167');
  }
  public set appstat167(value: number) {
    this._appstat167 = value;
  }
  public resetAppstat167() {
    this._appstat167 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat167Input() {
    return this._appstat167;
  }

  // appstat168 - computed: false, optional: true, required: false
  private _appstat168?: number; 
  public get appstat168() {
    return this.getNumberAttribute('appstat168');
  }
  public set appstat168(value: number) {
    this._appstat168 = value;
  }
  public resetAppstat168() {
    this._appstat168 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat168Input() {
    return this._appstat168;
  }

  // appstat169 - computed: false, optional: true, required: false
  private _appstat169?: number; 
  public get appstat169() {
    return this.getNumberAttribute('appstat169');
  }
  public set appstat169(value: number) {
    this._appstat169 = value;
  }
  public resetAppstat169() {
    this._appstat169 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat169Input() {
    return this._appstat169;
  }

  // appstat17 - computed: false, optional: true, required: false
  private _appstat17?: number; 
  public get appstat17() {
    return this.getNumberAttribute('appstat17');
  }
  public set appstat17(value: number) {
    this._appstat17 = value;
  }
  public resetAppstat17() {
    this._appstat17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat17Input() {
    return this._appstat17;
  }

  // appstat170 - computed: false, optional: true, required: false
  private _appstat170?: number; 
  public get appstat170() {
    return this.getNumberAttribute('appstat170');
  }
  public set appstat170(value: number) {
    this._appstat170 = value;
  }
  public resetAppstat170() {
    this._appstat170 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat170Input() {
    return this._appstat170;
  }

  // appstat171 - computed: false, optional: true, required: false
  private _appstat171?: number; 
  public get appstat171() {
    return this.getNumberAttribute('appstat171');
  }
  public set appstat171(value: number) {
    this._appstat171 = value;
  }
  public resetAppstat171() {
    this._appstat171 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat171Input() {
    return this._appstat171;
  }

  // appstat172 - computed: false, optional: true, required: false
  private _appstat172?: number; 
  public get appstat172() {
    return this.getNumberAttribute('appstat172');
  }
  public set appstat172(value: number) {
    this._appstat172 = value;
  }
  public resetAppstat172() {
    this._appstat172 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat172Input() {
    return this._appstat172;
  }

  // appstat173 - computed: false, optional: true, required: false
  private _appstat173?: number; 
  public get appstat173() {
    return this.getNumberAttribute('appstat173');
  }
  public set appstat173(value: number) {
    this._appstat173 = value;
  }
  public resetAppstat173() {
    this._appstat173 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat173Input() {
    return this._appstat173;
  }

  // appstat174 - computed: false, optional: true, required: false
  private _appstat174?: number; 
  public get appstat174() {
    return this.getNumberAttribute('appstat174');
  }
  public set appstat174(value: number) {
    this._appstat174 = value;
  }
  public resetAppstat174() {
    this._appstat174 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat174Input() {
    return this._appstat174;
  }

  // appstat175 - computed: false, optional: true, required: false
  private _appstat175?: number; 
  public get appstat175() {
    return this.getNumberAttribute('appstat175');
  }
  public set appstat175(value: number) {
    this._appstat175 = value;
  }
  public resetAppstat175() {
    this._appstat175 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat175Input() {
    return this._appstat175;
  }

  // appstat176 - computed: false, optional: true, required: false
  private _appstat176?: number; 
  public get appstat176() {
    return this.getNumberAttribute('appstat176');
  }
  public set appstat176(value: number) {
    this._appstat176 = value;
  }
  public resetAppstat176() {
    this._appstat176 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat176Input() {
    return this._appstat176;
  }

  // appstat177 - computed: false, optional: true, required: false
  private _appstat177?: number; 
  public get appstat177() {
    return this.getNumberAttribute('appstat177');
  }
  public set appstat177(value: number) {
    this._appstat177 = value;
  }
  public resetAppstat177() {
    this._appstat177 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat177Input() {
    return this._appstat177;
  }

  // appstat178 - computed: false, optional: true, required: false
  private _appstat178?: number; 
  public get appstat178() {
    return this.getNumberAttribute('appstat178');
  }
  public set appstat178(value: number) {
    this._appstat178 = value;
  }
  public resetAppstat178() {
    this._appstat178 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat178Input() {
    return this._appstat178;
  }

  // appstat179 - computed: false, optional: true, required: false
  private _appstat179?: number; 
  public get appstat179() {
    return this.getNumberAttribute('appstat179');
  }
  public set appstat179(value: number) {
    this._appstat179 = value;
  }
  public resetAppstat179() {
    this._appstat179 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat179Input() {
    return this._appstat179;
  }

  // appstat18 - computed: false, optional: true, required: false
  private _appstat18?: number; 
  public get appstat18() {
    return this.getNumberAttribute('appstat18');
  }
  public set appstat18(value: number) {
    this._appstat18 = value;
  }
  public resetAppstat18() {
    this._appstat18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat18Input() {
    return this._appstat18;
  }

  // appstat180 - computed: false, optional: true, required: false
  private _appstat180?: number; 
  public get appstat180() {
    return this.getNumberAttribute('appstat180');
  }
  public set appstat180(value: number) {
    this._appstat180 = value;
  }
  public resetAppstat180() {
    this._appstat180 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat180Input() {
    return this._appstat180;
  }

  // appstat181 - computed: false, optional: true, required: false
  private _appstat181?: number; 
  public get appstat181() {
    return this.getNumberAttribute('appstat181');
  }
  public set appstat181(value: number) {
    this._appstat181 = value;
  }
  public resetAppstat181() {
    this._appstat181 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat181Input() {
    return this._appstat181;
  }

  // appstat182 - computed: false, optional: true, required: false
  private _appstat182?: number; 
  public get appstat182() {
    return this.getNumberAttribute('appstat182');
  }
  public set appstat182(value: number) {
    this._appstat182 = value;
  }
  public resetAppstat182() {
    this._appstat182 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat182Input() {
    return this._appstat182;
  }

  // appstat183 - computed: false, optional: true, required: false
  private _appstat183?: number; 
  public get appstat183() {
    return this.getNumberAttribute('appstat183');
  }
  public set appstat183(value: number) {
    this._appstat183 = value;
  }
  public resetAppstat183() {
    this._appstat183 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat183Input() {
    return this._appstat183;
  }

  // appstat184 - computed: false, optional: true, required: false
  private _appstat184?: number; 
  public get appstat184() {
    return this.getNumberAttribute('appstat184');
  }
  public set appstat184(value: number) {
    this._appstat184 = value;
  }
  public resetAppstat184() {
    this._appstat184 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat184Input() {
    return this._appstat184;
  }

  // appstat185 - computed: false, optional: true, required: false
  private _appstat185?: number; 
  public get appstat185() {
    return this.getNumberAttribute('appstat185');
  }
  public set appstat185(value: number) {
    this._appstat185 = value;
  }
  public resetAppstat185() {
    this._appstat185 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat185Input() {
    return this._appstat185;
  }

  // appstat186 - computed: false, optional: true, required: false
  private _appstat186?: number; 
  public get appstat186() {
    return this.getNumberAttribute('appstat186');
  }
  public set appstat186(value: number) {
    this._appstat186 = value;
  }
  public resetAppstat186() {
    this._appstat186 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat186Input() {
    return this._appstat186;
  }

  // appstat187 - computed: false, optional: true, required: false
  private _appstat187?: number; 
  public get appstat187() {
    return this.getNumberAttribute('appstat187');
  }
  public set appstat187(value: number) {
    this._appstat187 = value;
  }
  public resetAppstat187() {
    this._appstat187 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat187Input() {
    return this._appstat187;
  }

  // appstat188 - computed: false, optional: true, required: false
  private _appstat188?: number; 
  public get appstat188() {
    return this.getNumberAttribute('appstat188');
  }
  public set appstat188(value: number) {
    this._appstat188 = value;
  }
  public resetAppstat188() {
    this._appstat188 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat188Input() {
    return this._appstat188;
  }

  // appstat189 - computed: false, optional: true, required: false
  private _appstat189?: number; 
  public get appstat189() {
    return this.getNumberAttribute('appstat189');
  }
  public set appstat189(value: number) {
    this._appstat189 = value;
  }
  public resetAppstat189() {
    this._appstat189 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat189Input() {
    return this._appstat189;
  }

  // appstat19 - computed: false, optional: true, required: false
  private _appstat19?: number; 
  public get appstat19() {
    return this.getNumberAttribute('appstat19');
  }
  public set appstat19(value: number) {
    this._appstat19 = value;
  }
  public resetAppstat19() {
    this._appstat19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat19Input() {
    return this._appstat19;
  }

  // appstat190 - computed: false, optional: true, required: false
  private _appstat190?: number; 
  public get appstat190() {
    return this.getNumberAttribute('appstat190');
  }
  public set appstat190(value: number) {
    this._appstat190 = value;
  }
  public resetAppstat190() {
    this._appstat190 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat190Input() {
    return this._appstat190;
  }

  // appstat191 - computed: false, optional: true, required: false
  private _appstat191?: number; 
  public get appstat191() {
    return this.getNumberAttribute('appstat191');
  }
  public set appstat191(value: number) {
    this._appstat191 = value;
  }
  public resetAppstat191() {
    this._appstat191 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat191Input() {
    return this._appstat191;
  }

  // appstat192 - computed: false, optional: true, required: false
  private _appstat192?: number; 
  public get appstat192() {
    return this.getNumberAttribute('appstat192');
  }
  public set appstat192(value: number) {
    this._appstat192 = value;
  }
  public resetAppstat192() {
    this._appstat192 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat192Input() {
    return this._appstat192;
  }

  // appstat193 - computed: false, optional: true, required: false
  private _appstat193?: number; 
  public get appstat193() {
    return this.getNumberAttribute('appstat193');
  }
  public set appstat193(value: number) {
    this._appstat193 = value;
  }
  public resetAppstat193() {
    this._appstat193 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat193Input() {
    return this._appstat193;
  }

  // appstat194 - computed: false, optional: true, required: false
  private _appstat194?: number; 
  public get appstat194() {
    return this.getNumberAttribute('appstat194');
  }
  public set appstat194(value: number) {
    this._appstat194 = value;
  }
  public resetAppstat194() {
    this._appstat194 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat194Input() {
    return this._appstat194;
  }

  // appstat195 - computed: false, optional: true, required: false
  private _appstat195?: number; 
  public get appstat195() {
    return this.getNumberAttribute('appstat195');
  }
  public set appstat195(value: number) {
    this._appstat195 = value;
  }
  public resetAppstat195() {
    this._appstat195 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat195Input() {
    return this._appstat195;
  }

  // appstat196 - computed: false, optional: true, required: false
  private _appstat196?: number; 
  public get appstat196() {
    return this.getNumberAttribute('appstat196');
  }
  public set appstat196(value: number) {
    this._appstat196 = value;
  }
  public resetAppstat196() {
    this._appstat196 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat196Input() {
    return this._appstat196;
  }

  // appstat197 - computed: false, optional: true, required: false
  private _appstat197?: number; 
  public get appstat197() {
    return this.getNumberAttribute('appstat197');
  }
  public set appstat197(value: number) {
    this._appstat197 = value;
  }
  public resetAppstat197() {
    this._appstat197 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat197Input() {
    return this._appstat197;
  }

  // appstat198 - computed: false, optional: true, required: false
  private _appstat198?: number; 
  public get appstat198() {
    return this.getNumberAttribute('appstat198');
  }
  public set appstat198(value: number) {
    this._appstat198 = value;
  }
  public resetAppstat198() {
    this._appstat198 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat198Input() {
    return this._appstat198;
  }

  // appstat199 - computed: false, optional: true, required: false
  private _appstat199?: number; 
  public get appstat199() {
    return this.getNumberAttribute('appstat199');
  }
  public set appstat199(value: number) {
    this._appstat199 = value;
  }
  public resetAppstat199() {
    this._appstat199 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat199Input() {
    return this._appstat199;
  }

  // appstat2 - computed: false, optional: true, required: false
  private _appstat2?: number; 
  public get appstat2() {
    return this.getNumberAttribute('appstat2');
  }
  public set appstat2(value: number) {
    this._appstat2 = value;
  }
  public resetAppstat2() {
    this._appstat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat2Input() {
    return this._appstat2;
  }

  // appstat20 - computed: false, optional: true, required: false
  private _appstat20?: number; 
  public get appstat20() {
    return this.getNumberAttribute('appstat20');
  }
  public set appstat20(value: number) {
    this._appstat20 = value;
  }
  public resetAppstat20() {
    this._appstat20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat20Input() {
    return this._appstat20;
  }

  // appstat200 - computed: false, optional: true, required: false
  private _appstat200?: number; 
  public get appstat200() {
    return this.getNumberAttribute('appstat200');
  }
  public set appstat200(value: number) {
    this._appstat200 = value;
  }
  public resetAppstat200() {
    this._appstat200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat200Input() {
    return this._appstat200;
  }

  // appstat201 - computed: false, optional: true, required: false
  private _appstat201?: number; 
  public get appstat201() {
    return this.getNumberAttribute('appstat201');
  }
  public set appstat201(value: number) {
    this._appstat201 = value;
  }
  public resetAppstat201() {
    this._appstat201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat201Input() {
    return this._appstat201;
  }

  // appstat202 - computed: false, optional: true, required: false
  private _appstat202?: number; 
  public get appstat202() {
    return this.getNumberAttribute('appstat202');
  }
  public set appstat202(value: number) {
    this._appstat202 = value;
  }
  public resetAppstat202() {
    this._appstat202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat202Input() {
    return this._appstat202;
  }

  // appstat203 - computed: false, optional: true, required: false
  private _appstat203?: number; 
  public get appstat203() {
    return this.getNumberAttribute('appstat203');
  }
  public set appstat203(value: number) {
    this._appstat203 = value;
  }
  public resetAppstat203() {
    this._appstat203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat203Input() {
    return this._appstat203;
  }

  // appstat204 - computed: false, optional: true, required: false
  private _appstat204?: number; 
  public get appstat204() {
    return this.getNumberAttribute('appstat204');
  }
  public set appstat204(value: number) {
    this._appstat204 = value;
  }
  public resetAppstat204() {
    this._appstat204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat204Input() {
    return this._appstat204;
  }

  // appstat205 - computed: false, optional: true, required: false
  private _appstat205?: number; 
  public get appstat205() {
    return this.getNumberAttribute('appstat205');
  }
  public set appstat205(value: number) {
    this._appstat205 = value;
  }
  public resetAppstat205() {
    this._appstat205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat205Input() {
    return this._appstat205;
  }

  // appstat206 - computed: false, optional: true, required: false
  private _appstat206?: number; 
  public get appstat206() {
    return this.getNumberAttribute('appstat206');
  }
  public set appstat206(value: number) {
    this._appstat206 = value;
  }
  public resetAppstat206() {
    this._appstat206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat206Input() {
    return this._appstat206;
  }

  // appstat207 - computed: false, optional: true, required: false
  private _appstat207?: number; 
  public get appstat207() {
    return this.getNumberAttribute('appstat207');
  }
  public set appstat207(value: number) {
    this._appstat207 = value;
  }
  public resetAppstat207() {
    this._appstat207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat207Input() {
    return this._appstat207;
  }

  // appstat208 - computed: false, optional: true, required: false
  private _appstat208?: number; 
  public get appstat208() {
    return this.getNumberAttribute('appstat208');
  }
  public set appstat208(value: number) {
    this._appstat208 = value;
  }
  public resetAppstat208() {
    this._appstat208 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat208Input() {
    return this._appstat208;
  }

  // appstat209 - computed: false, optional: true, required: false
  private _appstat209?: number; 
  public get appstat209() {
    return this.getNumberAttribute('appstat209');
  }
  public set appstat209(value: number) {
    this._appstat209 = value;
  }
  public resetAppstat209() {
    this._appstat209 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat209Input() {
    return this._appstat209;
  }

  // appstat21 - computed: false, optional: true, required: false
  private _appstat21?: number; 
  public get appstat21() {
    return this.getNumberAttribute('appstat21');
  }
  public set appstat21(value: number) {
    this._appstat21 = value;
  }
  public resetAppstat21() {
    this._appstat21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat21Input() {
    return this._appstat21;
  }

  // appstat210 - computed: false, optional: true, required: false
  private _appstat210?: number; 
  public get appstat210() {
    return this.getNumberAttribute('appstat210');
  }
  public set appstat210(value: number) {
    this._appstat210 = value;
  }
  public resetAppstat210() {
    this._appstat210 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat210Input() {
    return this._appstat210;
  }

  // appstat211 - computed: false, optional: true, required: false
  private _appstat211?: number; 
  public get appstat211() {
    return this.getNumberAttribute('appstat211');
  }
  public set appstat211(value: number) {
    this._appstat211 = value;
  }
  public resetAppstat211() {
    this._appstat211 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat211Input() {
    return this._appstat211;
  }

  // appstat212 - computed: false, optional: true, required: false
  private _appstat212?: number; 
  public get appstat212() {
    return this.getNumberAttribute('appstat212');
  }
  public set appstat212(value: number) {
    this._appstat212 = value;
  }
  public resetAppstat212() {
    this._appstat212 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat212Input() {
    return this._appstat212;
  }

  // appstat213 - computed: false, optional: true, required: false
  private _appstat213?: number; 
  public get appstat213() {
    return this.getNumberAttribute('appstat213');
  }
  public set appstat213(value: number) {
    this._appstat213 = value;
  }
  public resetAppstat213() {
    this._appstat213 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat213Input() {
    return this._appstat213;
  }

  // appstat214 - computed: false, optional: true, required: false
  private _appstat214?: number; 
  public get appstat214() {
    return this.getNumberAttribute('appstat214');
  }
  public set appstat214(value: number) {
    this._appstat214 = value;
  }
  public resetAppstat214() {
    this._appstat214 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat214Input() {
    return this._appstat214;
  }

  // appstat215 - computed: false, optional: true, required: false
  private _appstat215?: number; 
  public get appstat215() {
    return this.getNumberAttribute('appstat215');
  }
  public set appstat215(value: number) {
    this._appstat215 = value;
  }
  public resetAppstat215() {
    this._appstat215 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat215Input() {
    return this._appstat215;
  }

  // appstat216 - computed: false, optional: true, required: false
  private _appstat216?: number; 
  public get appstat216() {
    return this.getNumberAttribute('appstat216');
  }
  public set appstat216(value: number) {
    this._appstat216 = value;
  }
  public resetAppstat216() {
    this._appstat216 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat216Input() {
    return this._appstat216;
  }

  // appstat217 - computed: false, optional: true, required: false
  private _appstat217?: number; 
  public get appstat217() {
    return this.getNumberAttribute('appstat217');
  }
  public set appstat217(value: number) {
    this._appstat217 = value;
  }
  public resetAppstat217() {
    this._appstat217 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat217Input() {
    return this._appstat217;
  }

  // appstat218 - computed: false, optional: true, required: false
  private _appstat218?: number; 
  public get appstat218() {
    return this.getNumberAttribute('appstat218');
  }
  public set appstat218(value: number) {
    this._appstat218 = value;
  }
  public resetAppstat218() {
    this._appstat218 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat218Input() {
    return this._appstat218;
  }

  // appstat219 - computed: false, optional: true, required: false
  private _appstat219?: number; 
  public get appstat219() {
    return this.getNumberAttribute('appstat219');
  }
  public set appstat219(value: number) {
    this._appstat219 = value;
  }
  public resetAppstat219() {
    this._appstat219 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat219Input() {
    return this._appstat219;
  }

  // appstat22 - computed: false, optional: true, required: false
  private _appstat22?: number; 
  public get appstat22() {
    return this.getNumberAttribute('appstat22');
  }
  public set appstat22(value: number) {
    this._appstat22 = value;
  }
  public resetAppstat22() {
    this._appstat22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat22Input() {
    return this._appstat22;
  }

  // appstat220 - computed: false, optional: true, required: false
  private _appstat220?: number; 
  public get appstat220() {
    return this.getNumberAttribute('appstat220');
  }
  public set appstat220(value: number) {
    this._appstat220 = value;
  }
  public resetAppstat220() {
    this._appstat220 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat220Input() {
    return this._appstat220;
  }

  // appstat221 - computed: false, optional: true, required: false
  private _appstat221?: number; 
  public get appstat221() {
    return this.getNumberAttribute('appstat221');
  }
  public set appstat221(value: number) {
    this._appstat221 = value;
  }
  public resetAppstat221() {
    this._appstat221 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat221Input() {
    return this._appstat221;
  }

  // appstat222 - computed: false, optional: true, required: false
  private _appstat222?: number; 
  public get appstat222() {
    return this.getNumberAttribute('appstat222');
  }
  public set appstat222(value: number) {
    this._appstat222 = value;
  }
  public resetAppstat222() {
    this._appstat222 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat222Input() {
    return this._appstat222;
  }

  // appstat223 - computed: false, optional: true, required: false
  private _appstat223?: number; 
  public get appstat223() {
    return this.getNumberAttribute('appstat223');
  }
  public set appstat223(value: number) {
    this._appstat223 = value;
  }
  public resetAppstat223() {
    this._appstat223 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat223Input() {
    return this._appstat223;
  }

  // appstat224 - computed: false, optional: true, required: false
  private _appstat224?: number; 
  public get appstat224() {
    return this.getNumberAttribute('appstat224');
  }
  public set appstat224(value: number) {
    this._appstat224 = value;
  }
  public resetAppstat224() {
    this._appstat224 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat224Input() {
    return this._appstat224;
  }

  // appstat225 - computed: false, optional: true, required: false
  private _appstat225?: number; 
  public get appstat225() {
    return this.getNumberAttribute('appstat225');
  }
  public set appstat225(value: number) {
    this._appstat225 = value;
  }
  public resetAppstat225() {
    this._appstat225 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat225Input() {
    return this._appstat225;
  }

  // appstat226 - computed: false, optional: true, required: false
  private _appstat226?: number; 
  public get appstat226() {
    return this.getNumberAttribute('appstat226');
  }
  public set appstat226(value: number) {
    this._appstat226 = value;
  }
  public resetAppstat226() {
    this._appstat226 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat226Input() {
    return this._appstat226;
  }

  // appstat227 - computed: false, optional: true, required: false
  private _appstat227?: number; 
  public get appstat227() {
    return this.getNumberAttribute('appstat227');
  }
  public set appstat227(value: number) {
    this._appstat227 = value;
  }
  public resetAppstat227() {
    this._appstat227 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat227Input() {
    return this._appstat227;
  }

  // appstat228 - computed: false, optional: true, required: false
  private _appstat228?: number; 
  public get appstat228() {
    return this.getNumberAttribute('appstat228');
  }
  public set appstat228(value: number) {
    this._appstat228 = value;
  }
  public resetAppstat228() {
    this._appstat228 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat228Input() {
    return this._appstat228;
  }

  // appstat229 - computed: false, optional: true, required: false
  private _appstat229?: number; 
  public get appstat229() {
    return this.getNumberAttribute('appstat229');
  }
  public set appstat229(value: number) {
    this._appstat229 = value;
  }
  public resetAppstat229() {
    this._appstat229 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat229Input() {
    return this._appstat229;
  }

  // appstat23 - computed: false, optional: true, required: false
  private _appstat23?: number; 
  public get appstat23() {
    return this.getNumberAttribute('appstat23');
  }
  public set appstat23(value: number) {
    this._appstat23 = value;
  }
  public resetAppstat23() {
    this._appstat23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat23Input() {
    return this._appstat23;
  }

  // appstat230 - computed: false, optional: true, required: false
  private _appstat230?: number; 
  public get appstat230() {
    return this.getNumberAttribute('appstat230');
  }
  public set appstat230(value: number) {
    this._appstat230 = value;
  }
  public resetAppstat230() {
    this._appstat230 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat230Input() {
    return this._appstat230;
  }

  // appstat231 - computed: false, optional: true, required: false
  private _appstat231?: number; 
  public get appstat231() {
    return this.getNumberAttribute('appstat231');
  }
  public set appstat231(value: number) {
    this._appstat231 = value;
  }
  public resetAppstat231() {
    this._appstat231 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat231Input() {
    return this._appstat231;
  }

  // appstat232 - computed: false, optional: true, required: false
  private _appstat232?: number; 
  public get appstat232() {
    return this.getNumberAttribute('appstat232');
  }
  public set appstat232(value: number) {
    this._appstat232 = value;
  }
  public resetAppstat232() {
    this._appstat232 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat232Input() {
    return this._appstat232;
  }

  // appstat233 - computed: false, optional: true, required: false
  private _appstat233?: number; 
  public get appstat233() {
    return this.getNumberAttribute('appstat233');
  }
  public set appstat233(value: number) {
    this._appstat233 = value;
  }
  public resetAppstat233() {
    this._appstat233 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat233Input() {
    return this._appstat233;
  }

  // appstat234 - computed: false, optional: true, required: false
  private _appstat234?: number; 
  public get appstat234() {
    return this.getNumberAttribute('appstat234');
  }
  public set appstat234(value: number) {
    this._appstat234 = value;
  }
  public resetAppstat234() {
    this._appstat234 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat234Input() {
    return this._appstat234;
  }

  // appstat235 - computed: false, optional: true, required: false
  private _appstat235?: number; 
  public get appstat235() {
    return this.getNumberAttribute('appstat235');
  }
  public set appstat235(value: number) {
    this._appstat235 = value;
  }
  public resetAppstat235() {
    this._appstat235 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat235Input() {
    return this._appstat235;
  }

  // appstat236 - computed: false, optional: true, required: false
  private _appstat236?: number; 
  public get appstat236() {
    return this.getNumberAttribute('appstat236');
  }
  public set appstat236(value: number) {
    this._appstat236 = value;
  }
  public resetAppstat236() {
    this._appstat236 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat236Input() {
    return this._appstat236;
  }

  // appstat237 - computed: false, optional: true, required: false
  private _appstat237?: number; 
  public get appstat237() {
    return this.getNumberAttribute('appstat237');
  }
  public set appstat237(value: number) {
    this._appstat237 = value;
  }
  public resetAppstat237() {
    this._appstat237 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat237Input() {
    return this._appstat237;
  }

  // appstat238 - computed: false, optional: true, required: false
  private _appstat238?: number; 
  public get appstat238() {
    return this.getNumberAttribute('appstat238');
  }
  public set appstat238(value: number) {
    this._appstat238 = value;
  }
  public resetAppstat238() {
    this._appstat238 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat238Input() {
    return this._appstat238;
  }

  // appstat239 - computed: false, optional: true, required: false
  private _appstat239?: number; 
  public get appstat239() {
    return this.getNumberAttribute('appstat239');
  }
  public set appstat239(value: number) {
    this._appstat239 = value;
  }
  public resetAppstat239() {
    this._appstat239 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat239Input() {
    return this._appstat239;
  }

  // appstat24 - computed: false, optional: true, required: false
  private _appstat24?: number; 
  public get appstat24() {
    return this.getNumberAttribute('appstat24');
  }
  public set appstat24(value: number) {
    this._appstat24 = value;
  }
  public resetAppstat24() {
    this._appstat24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat24Input() {
    return this._appstat24;
  }

  // appstat240 - computed: false, optional: true, required: false
  private _appstat240?: number; 
  public get appstat240() {
    return this.getNumberAttribute('appstat240');
  }
  public set appstat240(value: number) {
    this._appstat240 = value;
  }
  public resetAppstat240() {
    this._appstat240 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat240Input() {
    return this._appstat240;
  }

  // appstat241 - computed: false, optional: true, required: false
  private _appstat241?: number; 
  public get appstat241() {
    return this.getNumberAttribute('appstat241');
  }
  public set appstat241(value: number) {
    this._appstat241 = value;
  }
  public resetAppstat241() {
    this._appstat241 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat241Input() {
    return this._appstat241;
  }

  // appstat242 - computed: false, optional: true, required: false
  private _appstat242?: number; 
  public get appstat242() {
    return this.getNumberAttribute('appstat242');
  }
  public set appstat242(value: number) {
    this._appstat242 = value;
  }
  public resetAppstat242() {
    this._appstat242 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat242Input() {
    return this._appstat242;
  }

  // appstat243 - computed: false, optional: true, required: false
  private _appstat243?: number; 
  public get appstat243() {
    return this.getNumberAttribute('appstat243');
  }
  public set appstat243(value: number) {
    this._appstat243 = value;
  }
  public resetAppstat243() {
    this._appstat243 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat243Input() {
    return this._appstat243;
  }

  // appstat244 - computed: false, optional: true, required: false
  private _appstat244?: number; 
  public get appstat244() {
    return this.getNumberAttribute('appstat244');
  }
  public set appstat244(value: number) {
    this._appstat244 = value;
  }
  public resetAppstat244() {
    this._appstat244 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat244Input() {
    return this._appstat244;
  }

  // appstat245 - computed: false, optional: true, required: false
  private _appstat245?: number; 
  public get appstat245() {
    return this.getNumberAttribute('appstat245');
  }
  public set appstat245(value: number) {
    this._appstat245 = value;
  }
  public resetAppstat245() {
    this._appstat245 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat245Input() {
    return this._appstat245;
  }

  // appstat246 - computed: false, optional: true, required: false
  private _appstat246?: number; 
  public get appstat246() {
    return this.getNumberAttribute('appstat246');
  }
  public set appstat246(value: number) {
    this._appstat246 = value;
  }
  public resetAppstat246() {
    this._appstat246 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat246Input() {
    return this._appstat246;
  }

  // appstat247 - computed: false, optional: true, required: false
  private _appstat247?: number; 
  public get appstat247() {
    return this.getNumberAttribute('appstat247');
  }
  public set appstat247(value: number) {
    this._appstat247 = value;
  }
  public resetAppstat247() {
    this._appstat247 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat247Input() {
    return this._appstat247;
  }

  // appstat248 - computed: false, optional: true, required: false
  private _appstat248?: number; 
  public get appstat248() {
    return this.getNumberAttribute('appstat248');
  }
  public set appstat248(value: number) {
    this._appstat248 = value;
  }
  public resetAppstat248() {
    this._appstat248 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat248Input() {
    return this._appstat248;
  }

  // appstat249 - computed: false, optional: true, required: false
  private _appstat249?: number; 
  public get appstat249() {
    return this.getNumberAttribute('appstat249');
  }
  public set appstat249(value: number) {
    this._appstat249 = value;
  }
  public resetAppstat249() {
    this._appstat249 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat249Input() {
    return this._appstat249;
  }

  // appstat25 - computed: false, optional: true, required: false
  private _appstat25?: number; 
  public get appstat25() {
    return this.getNumberAttribute('appstat25');
  }
  public set appstat25(value: number) {
    this._appstat25 = value;
  }
  public resetAppstat25() {
    this._appstat25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat25Input() {
    return this._appstat25;
  }

  // appstat250 - computed: false, optional: true, required: false
  private _appstat250?: number; 
  public get appstat250() {
    return this.getNumberAttribute('appstat250');
  }
  public set appstat250(value: number) {
    this._appstat250 = value;
  }
  public resetAppstat250() {
    this._appstat250 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat250Input() {
    return this._appstat250;
  }

  // appstat251 - computed: false, optional: true, required: false
  private _appstat251?: number; 
  public get appstat251() {
    return this.getNumberAttribute('appstat251');
  }
  public set appstat251(value: number) {
    this._appstat251 = value;
  }
  public resetAppstat251() {
    this._appstat251 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat251Input() {
    return this._appstat251;
  }

  // appstat252 - computed: false, optional: true, required: false
  private _appstat252?: number; 
  public get appstat252() {
    return this.getNumberAttribute('appstat252');
  }
  public set appstat252(value: number) {
    this._appstat252 = value;
  }
  public resetAppstat252() {
    this._appstat252 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat252Input() {
    return this._appstat252;
  }

  // appstat253 - computed: false, optional: true, required: false
  private _appstat253?: number; 
  public get appstat253() {
    return this.getNumberAttribute('appstat253');
  }
  public set appstat253(value: number) {
    this._appstat253 = value;
  }
  public resetAppstat253() {
    this._appstat253 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat253Input() {
    return this._appstat253;
  }

  // appstat254 - computed: false, optional: true, required: false
  private _appstat254?: number; 
  public get appstat254() {
    return this.getNumberAttribute('appstat254');
  }
  public set appstat254(value: number) {
    this._appstat254 = value;
  }
  public resetAppstat254() {
    this._appstat254 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat254Input() {
    return this._appstat254;
  }

  // appstat255 - computed: false, optional: true, required: false
  private _appstat255?: number; 
  public get appstat255() {
    return this.getNumberAttribute('appstat255');
  }
  public set appstat255(value: number) {
    this._appstat255 = value;
  }
  public resetAppstat255() {
    this._appstat255 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat255Input() {
    return this._appstat255;
  }

  // appstat256 - computed: false, optional: true, required: false
  private _appstat256?: number; 
  public get appstat256() {
    return this.getNumberAttribute('appstat256');
  }
  public set appstat256(value: number) {
    this._appstat256 = value;
  }
  public resetAppstat256() {
    this._appstat256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat256Input() {
    return this._appstat256;
  }

  // appstat257 - computed: false, optional: true, required: false
  private _appstat257?: number; 
  public get appstat257() {
    return this.getNumberAttribute('appstat257');
  }
  public set appstat257(value: number) {
    this._appstat257 = value;
  }
  public resetAppstat257() {
    this._appstat257 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat257Input() {
    return this._appstat257;
  }

  // appstat258 - computed: false, optional: true, required: false
  private _appstat258?: number; 
  public get appstat258() {
    return this.getNumberAttribute('appstat258');
  }
  public set appstat258(value: number) {
    this._appstat258 = value;
  }
  public resetAppstat258() {
    this._appstat258 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat258Input() {
    return this._appstat258;
  }

  // appstat259 - computed: false, optional: true, required: false
  private _appstat259?: number; 
  public get appstat259() {
    return this.getNumberAttribute('appstat259');
  }
  public set appstat259(value: number) {
    this._appstat259 = value;
  }
  public resetAppstat259() {
    this._appstat259 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat259Input() {
    return this._appstat259;
  }

  // appstat26 - computed: false, optional: true, required: false
  private _appstat26?: number; 
  public get appstat26() {
    return this.getNumberAttribute('appstat26');
  }
  public set appstat26(value: number) {
    this._appstat26 = value;
  }
  public resetAppstat26() {
    this._appstat26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat26Input() {
    return this._appstat26;
  }

  // appstat260 - computed: false, optional: true, required: false
  private _appstat260?: number; 
  public get appstat260() {
    return this.getNumberAttribute('appstat260');
  }
  public set appstat260(value: number) {
    this._appstat260 = value;
  }
  public resetAppstat260() {
    this._appstat260 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat260Input() {
    return this._appstat260;
  }

  // appstat261 - computed: false, optional: true, required: false
  private _appstat261?: number; 
  public get appstat261() {
    return this.getNumberAttribute('appstat261');
  }
  public set appstat261(value: number) {
    this._appstat261 = value;
  }
  public resetAppstat261() {
    this._appstat261 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat261Input() {
    return this._appstat261;
  }

  // appstat262 - computed: false, optional: true, required: false
  private _appstat262?: number; 
  public get appstat262() {
    return this.getNumberAttribute('appstat262');
  }
  public set appstat262(value: number) {
    this._appstat262 = value;
  }
  public resetAppstat262() {
    this._appstat262 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat262Input() {
    return this._appstat262;
  }

  // appstat263 - computed: false, optional: true, required: false
  private _appstat263?: number; 
  public get appstat263() {
    return this.getNumberAttribute('appstat263');
  }
  public set appstat263(value: number) {
    this._appstat263 = value;
  }
  public resetAppstat263() {
    this._appstat263 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat263Input() {
    return this._appstat263;
  }

  // appstat264 - computed: false, optional: true, required: false
  private _appstat264?: number; 
  public get appstat264() {
    return this.getNumberAttribute('appstat264');
  }
  public set appstat264(value: number) {
    this._appstat264 = value;
  }
  public resetAppstat264() {
    this._appstat264 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat264Input() {
    return this._appstat264;
  }

  // appstat265 - computed: false, optional: true, required: false
  private _appstat265?: number; 
  public get appstat265() {
    return this.getNumberAttribute('appstat265');
  }
  public set appstat265(value: number) {
    this._appstat265 = value;
  }
  public resetAppstat265() {
    this._appstat265 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat265Input() {
    return this._appstat265;
  }

  // appstat266 - computed: false, optional: true, required: false
  private _appstat266?: number; 
  public get appstat266() {
    return this.getNumberAttribute('appstat266');
  }
  public set appstat266(value: number) {
    this._appstat266 = value;
  }
  public resetAppstat266() {
    this._appstat266 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat266Input() {
    return this._appstat266;
  }

  // appstat267 - computed: false, optional: true, required: false
  private _appstat267?: number; 
  public get appstat267() {
    return this.getNumberAttribute('appstat267');
  }
  public set appstat267(value: number) {
    this._appstat267 = value;
  }
  public resetAppstat267() {
    this._appstat267 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat267Input() {
    return this._appstat267;
  }

  // appstat268 - computed: false, optional: true, required: false
  private _appstat268?: number; 
  public get appstat268() {
    return this.getNumberAttribute('appstat268');
  }
  public set appstat268(value: number) {
    this._appstat268 = value;
  }
  public resetAppstat268() {
    this._appstat268 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat268Input() {
    return this._appstat268;
  }

  // appstat269 - computed: false, optional: true, required: false
  private _appstat269?: number; 
  public get appstat269() {
    return this.getNumberAttribute('appstat269');
  }
  public set appstat269(value: number) {
    this._appstat269 = value;
  }
  public resetAppstat269() {
    this._appstat269 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat269Input() {
    return this._appstat269;
  }

  // appstat27 - computed: false, optional: true, required: false
  private _appstat27?: number; 
  public get appstat27() {
    return this.getNumberAttribute('appstat27');
  }
  public set appstat27(value: number) {
    this._appstat27 = value;
  }
  public resetAppstat27() {
    this._appstat27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat27Input() {
    return this._appstat27;
  }

  // appstat270 - computed: false, optional: true, required: false
  private _appstat270?: number; 
  public get appstat270() {
    return this.getNumberAttribute('appstat270');
  }
  public set appstat270(value: number) {
    this._appstat270 = value;
  }
  public resetAppstat270() {
    this._appstat270 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat270Input() {
    return this._appstat270;
  }

  // appstat271 - computed: false, optional: true, required: false
  private _appstat271?: number; 
  public get appstat271() {
    return this.getNumberAttribute('appstat271');
  }
  public set appstat271(value: number) {
    this._appstat271 = value;
  }
  public resetAppstat271() {
    this._appstat271 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat271Input() {
    return this._appstat271;
  }

  // appstat272 - computed: false, optional: true, required: false
  private _appstat272?: number; 
  public get appstat272() {
    return this.getNumberAttribute('appstat272');
  }
  public set appstat272(value: number) {
    this._appstat272 = value;
  }
  public resetAppstat272() {
    this._appstat272 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat272Input() {
    return this._appstat272;
  }

  // appstat273 - computed: false, optional: true, required: false
  private _appstat273?: number; 
  public get appstat273() {
    return this.getNumberAttribute('appstat273');
  }
  public set appstat273(value: number) {
    this._appstat273 = value;
  }
  public resetAppstat273() {
    this._appstat273 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat273Input() {
    return this._appstat273;
  }

  // appstat274 - computed: false, optional: true, required: false
  private _appstat274?: number; 
  public get appstat274() {
    return this.getNumberAttribute('appstat274');
  }
  public set appstat274(value: number) {
    this._appstat274 = value;
  }
  public resetAppstat274() {
    this._appstat274 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat274Input() {
    return this._appstat274;
  }

  // appstat275 - computed: false, optional: true, required: false
  private _appstat275?: number; 
  public get appstat275() {
    return this.getNumberAttribute('appstat275');
  }
  public set appstat275(value: number) {
    this._appstat275 = value;
  }
  public resetAppstat275() {
    this._appstat275 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat275Input() {
    return this._appstat275;
  }

  // appstat276 - computed: false, optional: true, required: false
  private _appstat276?: number; 
  public get appstat276() {
    return this.getNumberAttribute('appstat276');
  }
  public set appstat276(value: number) {
    this._appstat276 = value;
  }
  public resetAppstat276() {
    this._appstat276 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat276Input() {
    return this._appstat276;
  }

  // appstat277 - computed: false, optional: true, required: false
  private _appstat277?: number; 
  public get appstat277() {
    return this.getNumberAttribute('appstat277');
  }
  public set appstat277(value: number) {
    this._appstat277 = value;
  }
  public resetAppstat277() {
    this._appstat277 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat277Input() {
    return this._appstat277;
  }

  // appstat278 - computed: false, optional: true, required: false
  private _appstat278?: number; 
  public get appstat278() {
    return this.getNumberAttribute('appstat278');
  }
  public set appstat278(value: number) {
    this._appstat278 = value;
  }
  public resetAppstat278() {
    this._appstat278 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat278Input() {
    return this._appstat278;
  }

  // appstat279 - computed: false, optional: true, required: false
  private _appstat279?: number; 
  public get appstat279() {
    return this.getNumberAttribute('appstat279');
  }
  public set appstat279(value: number) {
    this._appstat279 = value;
  }
  public resetAppstat279() {
    this._appstat279 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat279Input() {
    return this._appstat279;
  }

  // appstat28 - computed: false, optional: true, required: false
  private _appstat28?: number; 
  public get appstat28() {
    return this.getNumberAttribute('appstat28');
  }
  public set appstat28(value: number) {
    this._appstat28 = value;
  }
  public resetAppstat28() {
    this._appstat28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat28Input() {
    return this._appstat28;
  }

  // appstat280 - computed: false, optional: true, required: false
  private _appstat280?: number; 
  public get appstat280() {
    return this.getNumberAttribute('appstat280');
  }
  public set appstat280(value: number) {
    this._appstat280 = value;
  }
  public resetAppstat280() {
    this._appstat280 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat280Input() {
    return this._appstat280;
  }

  // appstat281 - computed: false, optional: true, required: false
  private _appstat281?: number; 
  public get appstat281() {
    return this.getNumberAttribute('appstat281');
  }
  public set appstat281(value: number) {
    this._appstat281 = value;
  }
  public resetAppstat281() {
    this._appstat281 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat281Input() {
    return this._appstat281;
  }

  // appstat282 - computed: false, optional: true, required: false
  private _appstat282?: number; 
  public get appstat282() {
    return this.getNumberAttribute('appstat282');
  }
  public set appstat282(value: number) {
    this._appstat282 = value;
  }
  public resetAppstat282() {
    this._appstat282 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat282Input() {
    return this._appstat282;
  }

  // appstat283 - computed: false, optional: true, required: false
  private _appstat283?: number; 
  public get appstat283() {
    return this.getNumberAttribute('appstat283');
  }
  public set appstat283(value: number) {
    this._appstat283 = value;
  }
  public resetAppstat283() {
    this._appstat283 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat283Input() {
    return this._appstat283;
  }

  // appstat284 - computed: false, optional: true, required: false
  private _appstat284?: number; 
  public get appstat284() {
    return this.getNumberAttribute('appstat284');
  }
  public set appstat284(value: number) {
    this._appstat284 = value;
  }
  public resetAppstat284() {
    this._appstat284 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat284Input() {
    return this._appstat284;
  }

  // appstat285 - computed: false, optional: true, required: false
  private _appstat285?: number; 
  public get appstat285() {
    return this.getNumberAttribute('appstat285');
  }
  public set appstat285(value: number) {
    this._appstat285 = value;
  }
  public resetAppstat285() {
    this._appstat285 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat285Input() {
    return this._appstat285;
  }

  // appstat286 - computed: false, optional: true, required: false
  private _appstat286?: number; 
  public get appstat286() {
    return this.getNumberAttribute('appstat286');
  }
  public set appstat286(value: number) {
    this._appstat286 = value;
  }
  public resetAppstat286() {
    this._appstat286 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat286Input() {
    return this._appstat286;
  }

  // appstat287 - computed: false, optional: true, required: false
  private _appstat287?: number; 
  public get appstat287() {
    return this.getNumberAttribute('appstat287');
  }
  public set appstat287(value: number) {
    this._appstat287 = value;
  }
  public resetAppstat287() {
    this._appstat287 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat287Input() {
    return this._appstat287;
  }

  // appstat288 - computed: false, optional: true, required: false
  private _appstat288?: number; 
  public get appstat288() {
    return this.getNumberAttribute('appstat288');
  }
  public set appstat288(value: number) {
    this._appstat288 = value;
  }
  public resetAppstat288() {
    this._appstat288 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat288Input() {
    return this._appstat288;
  }

  // appstat289 - computed: false, optional: true, required: false
  private _appstat289?: number; 
  public get appstat289() {
    return this.getNumberAttribute('appstat289');
  }
  public set appstat289(value: number) {
    this._appstat289 = value;
  }
  public resetAppstat289() {
    this._appstat289 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat289Input() {
    return this._appstat289;
  }

  // appstat29 - computed: false, optional: true, required: false
  private _appstat29?: number; 
  public get appstat29() {
    return this.getNumberAttribute('appstat29');
  }
  public set appstat29(value: number) {
    this._appstat29 = value;
  }
  public resetAppstat29() {
    this._appstat29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat29Input() {
    return this._appstat29;
  }

  // appstat290 - computed: false, optional: true, required: false
  private _appstat290?: number; 
  public get appstat290() {
    return this.getNumberAttribute('appstat290');
  }
  public set appstat290(value: number) {
    this._appstat290 = value;
  }
  public resetAppstat290() {
    this._appstat290 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat290Input() {
    return this._appstat290;
  }

  // appstat291 - computed: false, optional: true, required: false
  private _appstat291?: number; 
  public get appstat291() {
    return this.getNumberAttribute('appstat291');
  }
  public set appstat291(value: number) {
    this._appstat291 = value;
  }
  public resetAppstat291() {
    this._appstat291 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat291Input() {
    return this._appstat291;
  }

  // appstat292 - computed: false, optional: true, required: false
  private _appstat292?: number; 
  public get appstat292() {
    return this.getNumberAttribute('appstat292');
  }
  public set appstat292(value: number) {
    this._appstat292 = value;
  }
  public resetAppstat292() {
    this._appstat292 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat292Input() {
    return this._appstat292;
  }

  // appstat293 - computed: false, optional: true, required: false
  private _appstat293?: number; 
  public get appstat293() {
    return this.getNumberAttribute('appstat293');
  }
  public set appstat293(value: number) {
    this._appstat293 = value;
  }
  public resetAppstat293() {
    this._appstat293 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat293Input() {
    return this._appstat293;
  }

  // appstat294 - computed: false, optional: true, required: false
  private _appstat294?: number; 
  public get appstat294() {
    return this.getNumberAttribute('appstat294');
  }
  public set appstat294(value: number) {
    this._appstat294 = value;
  }
  public resetAppstat294() {
    this._appstat294 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat294Input() {
    return this._appstat294;
  }

  // appstat295 - computed: false, optional: true, required: false
  private _appstat295?: number; 
  public get appstat295() {
    return this.getNumberAttribute('appstat295');
  }
  public set appstat295(value: number) {
    this._appstat295 = value;
  }
  public resetAppstat295() {
    this._appstat295 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat295Input() {
    return this._appstat295;
  }

  // appstat296 - computed: false, optional: true, required: false
  private _appstat296?: number; 
  public get appstat296() {
    return this.getNumberAttribute('appstat296');
  }
  public set appstat296(value: number) {
    this._appstat296 = value;
  }
  public resetAppstat296() {
    this._appstat296 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat296Input() {
    return this._appstat296;
  }

  // appstat297 - computed: false, optional: true, required: false
  private _appstat297?: number; 
  public get appstat297() {
    return this.getNumberAttribute('appstat297');
  }
  public set appstat297(value: number) {
    this._appstat297 = value;
  }
  public resetAppstat297() {
    this._appstat297 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat297Input() {
    return this._appstat297;
  }

  // appstat298 - computed: false, optional: true, required: false
  private _appstat298?: number; 
  public get appstat298() {
    return this.getNumberAttribute('appstat298');
  }
  public set appstat298(value: number) {
    this._appstat298 = value;
  }
  public resetAppstat298() {
    this._appstat298 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat298Input() {
    return this._appstat298;
  }

  // appstat299 - computed: false, optional: true, required: false
  private _appstat299?: number; 
  public get appstat299() {
    return this.getNumberAttribute('appstat299');
  }
  public set appstat299(value: number) {
    this._appstat299 = value;
  }
  public resetAppstat299() {
    this._appstat299 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat299Input() {
    return this._appstat299;
  }

  // appstat3 - computed: false, optional: true, required: false
  private _appstat3?: number; 
  public get appstat3() {
    return this.getNumberAttribute('appstat3');
  }
  public set appstat3(value: number) {
    this._appstat3 = value;
  }
  public resetAppstat3() {
    this._appstat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat3Input() {
    return this._appstat3;
  }

  // appstat30 - computed: false, optional: true, required: false
  private _appstat30?: number; 
  public get appstat30() {
    return this.getNumberAttribute('appstat30');
  }
  public set appstat30(value: number) {
    this._appstat30 = value;
  }
  public resetAppstat30() {
    this._appstat30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat30Input() {
    return this._appstat30;
  }

  // appstat300 - computed: false, optional: true, required: false
  private _appstat300?: number; 
  public get appstat300() {
    return this.getNumberAttribute('appstat300');
  }
  public set appstat300(value: number) {
    this._appstat300 = value;
  }
  public resetAppstat300() {
    this._appstat300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat300Input() {
    return this._appstat300;
  }

  // appstat301 - computed: false, optional: true, required: false
  private _appstat301?: number; 
  public get appstat301() {
    return this.getNumberAttribute('appstat301');
  }
  public set appstat301(value: number) {
    this._appstat301 = value;
  }
  public resetAppstat301() {
    this._appstat301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat301Input() {
    return this._appstat301;
  }

  // appstat302 - computed: false, optional: true, required: false
  private _appstat302?: number; 
  public get appstat302() {
    return this.getNumberAttribute('appstat302');
  }
  public set appstat302(value: number) {
    this._appstat302 = value;
  }
  public resetAppstat302() {
    this._appstat302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat302Input() {
    return this._appstat302;
  }

  // appstat303 - computed: false, optional: true, required: false
  private _appstat303?: number; 
  public get appstat303() {
    return this.getNumberAttribute('appstat303');
  }
  public set appstat303(value: number) {
    this._appstat303 = value;
  }
  public resetAppstat303() {
    this._appstat303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat303Input() {
    return this._appstat303;
  }

  // appstat304 - computed: false, optional: true, required: false
  private _appstat304?: number; 
  public get appstat304() {
    return this.getNumberAttribute('appstat304');
  }
  public set appstat304(value: number) {
    this._appstat304 = value;
  }
  public resetAppstat304() {
    this._appstat304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat304Input() {
    return this._appstat304;
  }

  // appstat305 - computed: false, optional: true, required: false
  private _appstat305?: number; 
  public get appstat305() {
    return this.getNumberAttribute('appstat305');
  }
  public set appstat305(value: number) {
    this._appstat305 = value;
  }
  public resetAppstat305() {
    this._appstat305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat305Input() {
    return this._appstat305;
  }

  // appstat306 - computed: false, optional: true, required: false
  private _appstat306?: number; 
  public get appstat306() {
    return this.getNumberAttribute('appstat306');
  }
  public set appstat306(value: number) {
    this._appstat306 = value;
  }
  public resetAppstat306() {
    this._appstat306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat306Input() {
    return this._appstat306;
  }

  // appstat307 - computed: false, optional: true, required: false
  private _appstat307?: number; 
  public get appstat307() {
    return this.getNumberAttribute('appstat307');
  }
  public set appstat307(value: number) {
    this._appstat307 = value;
  }
  public resetAppstat307() {
    this._appstat307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat307Input() {
    return this._appstat307;
  }

  // appstat308 - computed: false, optional: true, required: false
  private _appstat308?: number; 
  public get appstat308() {
    return this.getNumberAttribute('appstat308');
  }
  public set appstat308(value: number) {
    this._appstat308 = value;
  }
  public resetAppstat308() {
    this._appstat308 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat308Input() {
    return this._appstat308;
  }

  // appstat309 - computed: false, optional: true, required: false
  private _appstat309?: number; 
  public get appstat309() {
    return this.getNumberAttribute('appstat309');
  }
  public set appstat309(value: number) {
    this._appstat309 = value;
  }
  public resetAppstat309() {
    this._appstat309 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat309Input() {
    return this._appstat309;
  }

  // appstat31 - computed: false, optional: true, required: false
  private _appstat31?: number; 
  public get appstat31() {
    return this.getNumberAttribute('appstat31');
  }
  public set appstat31(value: number) {
    this._appstat31 = value;
  }
  public resetAppstat31() {
    this._appstat31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat31Input() {
    return this._appstat31;
  }

  // appstat310 - computed: false, optional: true, required: false
  private _appstat310?: number; 
  public get appstat310() {
    return this.getNumberAttribute('appstat310');
  }
  public set appstat310(value: number) {
    this._appstat310 = value;
  }
  public resetAppstat310() {
    this._appstat310 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat310Input() {
    return this._appstat310;
  }

  // appstat311 - computed: false, optional: true, required: false
  private _appstat311?: number; 
  public get appstat311() {
    return this.getNumberAttribute('appstat311');
  }
  public set appstat311(value: number) {
    this._appstat311 = value;
  }
  public resetAppstat311() {
    this._appstat311 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat311Input() {
    return this._appstat311;
  }

  // appstat312 - computed: false, optional: true, required: false
  private _appstat312?: number; 
  public get appstat312() {
    return this.getNumberAttribute('appstat312');
  }
  public set appstat312(value: number) {
    this._appstat312 = value;
  }
  public resetAppstat312() {
    this._appstat312 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat312Input() {
    return this._appstat312;
  }

  // appstat313 - computed: false, optional: true, required: false
  private _appstat313?: number; 
  public get appstat313() {
    return this.getNumberAttribute('appstat313');
  }
  public set appstat313(value: number) {
    this._appstat313 = value;
  }
  public resetAppstat313() {
    this._appstat313 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat313Input() {
    return this._appstat313;
  }

  // appstat314 - computed: false, optional: true, required: false
  private _appstat314?: number; 
  public get appstat314() {
    return this.getNumberAttribute('appstat314');
  }
  public set appstat314(value: number) {
    this._appstat314 = value;
  }
  public resetAppstat314() {
    this._appstat314 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat314Input() {
    return this._appstat314;
  }

  // appstat315 - computed: false, optional: true, required: false
  private _appstat315?: number; 
  public get appstat315() {
    return this.getNumberAttribute('appstat315');
  }
  public set appstat315(value: number) {
    this._appstat315 = value;
  }
  public resetAppstat315() {
    this._appstat315 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat315Input() {
    return this._appstat315;
  }

  // appstat316 - computed: false, optional: true, required: false
  private _appstat316?: number; 
  public get appstat316() {
    return this.getNumberAttribute('appstat316');
  }
  public set appstat316(value: number) {
    this._appstat316 = value;
  }
  public resetAppstat316() {
    this._appstat316 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat316Input() {
    return this._appstat316;
  }

  // appstat317 - computed: false, optional: true, required: false
  private _appstat317?: number; 
  public get appstat317() {
    return this.getNumberAttribute('appstat317');
  }
  public set appstat317(value: number) {
    this._appstat317 = value;
  }
  public resetAppstat317() {
    this._appstat317 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat317Input() {
    return this._appstat317;
  }

  // appstat318 - computed: false, optional: true, required: false
  private _appstat318?: number; 
  public get appstat318() {
    return this.getNumberAttribute('appstat318');
  }
  public set appstat318(value: number) {
    this._appstat318 = value;
  }
  public resetAppstat318() {
    this._appstat318 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat318Input() {
    return this._appstat318;
  }

  // appstat319 - computed: false, optional: true, required: false
  private _appstat319?: number; 
  public get appstat319() {
    return this.getNumberAttribute('appstat319');
  }
  public set appstat319(value: number) {
    this._appstat319 = value;
  }
  public resetAppstat319() {
    this._appstat319 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat319Input() {
    return this._appstat319;
  }

  // appstat32 - computed: false, optional: true, required: false
  private _appstat32?: number; 
  public get appstat32() {
    return this.getNumberAttribute('appstat32');
  }
  public set appstat32(value: number) {
    this._appstat32 = value;
  }
  public resetAppstat32() {
    this._appstat32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat32Input() {
    return this._appstat32;
  }

  // appstat320 - computed: false, optional: true, required: false
  private _appstat320?: number; 
  public get appstat320() {
    return this.getNumberAttribute('appstat320');
  }
  public set appstat320(value: number) {
    this._appstat320 = value;
  }
  public resetAppstat320() {
    this._appstat320 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat320Input() {
    return this._appstat320;
  }

  // appstat321 - computed: false, optional: true, required: false
  private _appstat321?: number; 
  public get appstat321() {
    return this.getNumberAttribute('appstat321');
  }
  public set appstat321(value: number) {
    this._appstat321 = value;
  }
  public resetAppstat321() {
    this._appstat321 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat321Input() {
    return this._appstat321;
  }

  // appstat322 - computed: false, optional: true, required: false
  private _appstat322?: number; 
  public get appstat322() {
    return this.getNumberAttribute('appstat322');
  }
  public set appstat322(value: number) {
    this._appstat322 = value;
  }
  public resetAppstat322() {
    this._appstat322 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat322Input() {
    return this._appstat322;
  }

  // appstat323 - computed: false, optional: true, required: false
  private _appstat323?: number; 
  public get appstat323() {
    return this.getNumberAttribute('appstat323');
  }
  public set appstat323(value: number) {
    this._appstat323 = value;
  }
  public resetAppstat323() {
    this._appstat323 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat323Input() {
    return this._appstat323;
  }

  // appstat324 - computed: false, optional: true, required: false
  private _appstat324?: number; 
  public get appstat324() {
    return this.getNumberAttribute('appstat324');
  }
  public set appstat324(value: number) {
    this._appstat324 = value;
  }
  public resetAppstat324() {
    this._appstat324 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat324Input() {
    return this._appstat324;
  }

  // appstat325 - computed: false, optional: true, required: false
  private _appstat325?: number; 
  public get appstat325() {
    return this.getNumberAttribute('appstat325');
  }
  public set appstat325(value: number) {
    this._appstat325 = value;
  }
  public resetAppstat325() {
    this._appstat325 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat325Input() {
    return this._appstat325;
  }

  // appstat326 - computed: false, optional: true, required: false
  private _appstat326?: number; 
  public get appstat326() {
    return this.getNumberAttribute('appstat326');
  }
  public set appstat326(value: number) {
    this._appstat326 = value;
  }
  public resetAppstat326() {
    this._appstat326 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat326Input() {
    return this._appstat326;
  }

  // appstat327 - computed: false, optional: true, required: false
  private _appstat327?: number; 
  public get appstat327() {
    return this.getNumberAttribute('appstat327');
  }
  public set appstat327(value: number) {
    this._appstat327 = value;
  }
  public resetAppstat327() {
    this._appstat327 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat327Input() {
    return this._appstat327;
  }

  // appstat328 - computed: false, optional: true, required: false
  private _appstat328?: number; 
  public get appstat328() {
    return this.getNumberAttribute('appstat328');
  }
  public set appstat328(value: number) {
    this._appstat328 = value;
  }
  public resetAppstat328() {
    this._appstat328 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat328Input() {
    return this._appstat328;
  }

  // appstat329 - computed: false, optional: true, required: false
  private _appstat329?: number; 
  public get appstat329() {
    return this.getNumberAttribute('appstat329');
  }
  public set appstat329(value: number) {
    this._appstat329 = value;
  }
  public resetAppstat329() {
    this._appstat329 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat329Input() {
    return this._appstat329;
  }

  // appstat33 - computed: false, optional: true, required: false
  private _appstat33?: number; 
  public get appstat33() {
    return this.getNumberAttribute('appstat33');
  }
  public set appstat33(value: number) {
    this._appstat33 = value;
  }
  public resetAppstat33() {
    this._appstat33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat33Input() {
    return this._appstat33;
  }

  // appstat330 - computed: false, optional: true, required: false
  private _appstat330?: number; 
  public get appstat330() {
    return this.getNumberAttribute('appstat330');
  }
  public set appstat330(value: number) {
    this._appstat330 = value;
  }
  public resetAppstat330() {
    this._appstat330 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat330Input() {
    return this._appstat330;
  }

  // appstat331 - computed: false, optional: true, required: false
  private _appstat331?: number; 
  public get appstat331() {
    return this.getNumberAttribute('appstat331');
  }
  public set appstat331(value: number) {
    this._appstat331 = value;
  }
  public resetAppstat331() {
    this._appstat331 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat331Input() {
    return this._appstat331;
  }

  // appstat332 - computed: false, optional: true, required: false
  private _appstat332?: number; 
  public get appstat332() {
    return this.getNumberAttribute('appstat332');
  }
  public set appstat332(value: number) {
    this._appstat332 = value;
  }
  public resetAppstat332() {
    this._appstat332 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat332Input() {
    return this._appstat332;
  }

  // appstat333 - computed: false, optional: true, required: false
  private _appstat333?: number; 
  public get appstat333() {
    return this.getNumberAttribute('appstat333');
  }
  public set appstat333(value: number) {
    this._appstat333 = value;
  }
  public resetAppstat333() {
    this._appstat333 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat333Input() {
    return this._appstat333;
  }

  // appstat334 - computed: false, optional: true, required: false
  private _appstat334?: number; 
  public get appstat334() {
    return this.getNumberAttribute('appstat334');
  }
  public set appstat334(value: number) {
    this._appstat334 = value;
  }
  public resetAppstat334() {
    this._appstat334 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat334Input() {
    return this._appstat334;
  }

  // appstat335 - computed: false, optional: true, required: false
  private _appstat335?: number; 
  public get appstat335() {
    return this.getNumberAttribute('appstat335');
  }
  public set appstat335(value: number) {
    this._appstat335 = value;
  }
  public resetAppstat335() {
    this._appstat335 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat335Input() {
    return this._appstat335;
  }

  // appstat336 - computed: false, optional: true, required: false
  private _appstat336?: number; 
  public get appstat336() {
    return this.getNumberAttribute('appstat336');
  }
  public set appstat336(value: number) {
    this._appstat336 = value;
  }
  public resetAppstat336() {
    this._appstat336 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat336Input() {
    return this._appstat336;
  }

  // appstat337 - computed: false, optional: true, required: false
  private _appstat337?: number; 
  public get appstat337() {
    return this.getNumberAttribute('appstat337');
  }
  public set appstat337(value: number) {
    this._appstat337 = value;
  }
  public resetAppstat337() {
    this._appstat337 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat337Input() {
    return this._appstat337;
  }

  // appstat338 - computed: false, optional: true, required: false
  private _appstat338?: number; 
  public get appstat338() {
    return this.getNumberAttribute('appstat338');
  }
  public set appstat338(value: number) {
    this._appstat338 = value;
  }
  public resetAppstat338() {
    this._appstat338 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat338Input() {
    return this._appstat338;
  }

  // appstat339 - computed: false, optional: true, required: false
  private _appstat339?: number; 
  public get appstat339() {
    return this.getNumberAttribute('appstat339');
  }
  public set appstat339(value: number) {
    this._appstat339 = value;
  }
  public resetAppstat339() {
    this._appstat339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat339Input() {
    return this._appstat339;
  }

  // appstat34 - computed: false, optional: true, required: false
  private _appstat34?: number; 
  public get appstat34() {
    return this.getNumberAttribute('appstat34');
  }
  public set appstat34(value: number) {
    this._appstat34 = value;
  }
  public resetAppstat34() {
    this._appstat34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat34Input() {
    return this._appstat34;
  }

  // appstat340 - computed: false, optional: true, required: false
  private _appstat340?: number; 
  public get appstat340() {
    return this.getNumberAttribute('appstat340');
  }
  public set appstat340(value: number) {
    this._appstat340 = value;
  }
  public resetAppstat340() {
    this._appstat340 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat340Input() {
    return this._appstat340;
  }

  // appstat341 - computed: false, optional: true, required: false
  private _appstat341?: number; 
  public get appstat341() {
    return this.getNumberAttribute('appstat341');
  }
  public set appstat341(value: number) {
    this._appstat341 = value;
  }
  public resetAppstat341() {
    this._appstat341 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat341Input() {
    return this._appstat341;
  }

  // appstat342 - computed: false, optional: true, required: false
  private _appstat342?: number; 
  public get appstat342() {
    return this.getNumberAttribute('appstat342');
  }
  public set appstat342(value: number) {
    this._appstat342 = value;
  }
  public resetAppstat342() {
    this._appstat342 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat342Input() {
    return this._appstat342;
  }

  // appstat343 - computed: false, optional: true, required: false
  private _appstat343?: number; 
  public get appstat343() {
    return this.getNumberAttribute('appstat343');
  }
  public set appstat343(value: number) {
    this._appstat343 = value;
  }
  public resetAppstat343() {
    this._appstat343 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat343Input() {
    return this._appstat343;
  }

  // appstat344 - computed: false, optional: true, required: false
  private _appstat344?: number; 
  public get appstat344() {
    return this.getNumberAttribute('appstat344');
  }
  public set appstat344(value: number) {
    this._appstat344 = value;
  }
  public resetAppstat344() {
    this._appstat344 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat344Input() {
    return this._appstat344;
  }

  // appstat345 - computed: false, optional: true, required: false
  private _appstat345?: number; 
  public get appstat345() {
    return this.getNumberAttribute('appstat345');
  }
  public set appstat345(value: number) {
    this._appstat345 = value;
  }
  public resetAppstat345() {
    this._appstat345 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat345Input() {
    return this._appstat345;
  }

  // appstat346 - computed: false, optional: true, required: false
  private _appstat346?: number; 
  public get appstat346() {
    return this.getNumberAttribute('appstat346');
  }
  public set appstat346(value: number) {
    this._appstat346 = value;
  }
  public resetAppstat346() {
    this._appstat346 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat346Input() {
    return this._appstat346;
  }

  // appstat347 - computed: false, optional: true, required: false
  private _appstat347?: number; 
  public get appstat347() {
    return this.getNumberAttribute('appstat347');
  }
  public set appstat347(value: number) {
    this._appstat347 = value;
  }
  public resetAppstat347() {
    this._appstat347 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat347Input() {
    return this._appstat347;
  }

  // appstat348 - computed: false, optional: true, required: false
  private _appstat348?: number; 
  public get appstat348() {
    return this.getNumberAttribute('appstat348');
  }
  public set appstat348(value: number) {
    this._appstat348 = value;
  }
  public resetAppstat348() {
    this._appstat348 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat348Input() {
    return this._appstat348;
  }

  // appstat349 - computed: false, optional: true, required: false
  private _appstat349?: number; 
  public get appstat349() {
    return this.getNumberAttribute('appstat349');
  }
  public set appstat349(value: number) {
    this._appstat349 = value;
  }
  public resetAppstat349() {
    this._appstat349 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat349Input() {
    return this._appstat349;
  }

  // appstat35 - computed: false, optional: true, required: false
  private _appstat35?: number; 
  public get appstat35() {
    return this.getNumberAttribute('appstat35');
  }
  public set appstat35(value: number) {
    this._appstat35 = value;
  }
  public resetAppstat35() {
    this._appstat35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat35Input() {
    return this._appstat35;
  }

  // appstat350 - computed: false, optional: true, required: false
  private _appstat350?: number; 
  public get appstat350() {
    return this.getNumberAttribute('appstat350');
  }
  public set appstat350(value: number) {
    this._appstat350 = value;
  }
  public resetAppstat350() {
    this._appstat350 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat350Input() {
    return this._appstat350;
  }

  // appstat351 - computed: false, optional: true, required: false
  private _appstat351?: number; 
  public get appstat351() {
    return this.getNumberAttribute('appstat351');
  }
  public set appstat351(value: number) {
    this._appstat351 = value;
  }
  public resetAppstat351() {
    this._appstat351 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat351Input() {
    return this._appstat351;
  }

  // appstat352 - computed: false, optional: true, required: false
  private _appstat352?: number; 
  public get appstat352() {
    return this.getNumberAttribute('appstat352');
  }
  public set appstat352(value: number) {
    this._appstat352 = value;
  }
  public resetAppstat352() {
    this._appstat352 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat352Input() {
    return this._appstat352;
  }

  // appstat353 - computed: false, optional: true, required: false
  private _appstat353?: number; 
  public get appstat353() {
    return this.getNumberAttribute('appstat353');
  }
  public set appstat353(value: number) {
    this._appstat353 = value;
  }
  public resetAppstat353() {
    this._appstat353 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat353Input() {
    return this._appstat353;
  }

  // appstat354 - computed: false, optional: true, required: false
  private _appstat354?: number; 
  public get appstat354() {
    return this.getNumberAttribute('appstat354');
  }
  public set appstat354(value: number) {
    this._appstat354 = value;
  }
  public resetAppstat354() {
    this._appstat354 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat354Input() {
    return this._appstat354;
  }

  // appstat355 - computed: false, optional: true, required: false
  private _appstat355?: number; 
  public get appstat355() {
    return this.getNumberAttribute('appstat355');
  }
  public set appstat355(value: number) {
    this._appstat355 = value;
  }
  public resetAppstat355() {
    this._appstat355 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat355Input() {
    return this._appstat355;
  }

  // appstat356 - computed: false, optional: true, required: false
  private _appstat356?: number; 
  public get appstat356() {
    return this.getNumberAttribute('appstat356');
  }
  public set appstat356(value: number) {
    this._appstat356 = value;
  }
  public resetAppstat356() {
    this._appstat356 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat356Input() {
    return this._appstat356;
  }

  // appstat357 - computed: false, optional: true, required: false
  private _appstat357?: number; 
  public get appstat357() {
    return this.getNumberAttribute('appstat357');
  }
  public set appstat357(value: number) {
    this._appstat357 = value;
  }
  public resetAppstat357() {
    this._appstat357 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat357Input() {
    return this._appstat357;
  }

  // appstat358 - computed: false, optional: true, required: false
  private _appstat358?: number; 
  public get appstat358() {
    return this.getNumberAttribute('appstat358');
  }
  public set appstat358(value: number) {
    this._appstat358 = value;
  }
  public resetAppstat358() {
    this._appstat358 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat358Input() {
    return this._appstat358;
  }

  // appstat359 - computed: false, optional: true, required: false
  private _appstat359?: number; 
  public get appstat359() {
    return this.getNumberAttribute('appstat359');
  }
  public set appstat359(value: number) {
    this._appstat359 = value;
  }
  public resetAppstat359() {
    this._appstat359 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat359Input() {
    return this._appstat359;
  }

  // appstat36 - computed: false, optional: true, required: false
  private _appstat36?: number; 
  public get appstat36() {
    return this.getNumberAttribute('appstat36');
  }
  public set appstat36(value: number) {
    this._appstat36 = value;
  }
  public resetAppstat36() {
    this._appstat36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat36Input() {
    return this._appstat36;
  }

  // appstat360 - computed: false, optional: true, required: false
  private _appstat360?: number; 
  public get appstat360() {
    return this.getNumberAttribute('appstat360');
  }
  public set appstat360(value: number) {
    this._appstat360 = value;
  }
  public resetAppstat360() {
    this._appstat360 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat360Input() {
    return this._appstat360;
  }

  // appstat361 - computed: false, optional: true, required: false
  private _appstat361?: number; 
  public get appstat361() {
    return this.getNumberAttribute('appstat361');
  }
  public set appstat361(value: number) {
    this._appstat361 = value;
  }
  public resetAppstat361() {
    this._appstat361 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat361Input() {
    return this._appstat361;
  }

  // appstat362 - computed: false, optional: true, required: false
  private _appstat362?: number; 
  public get appstat362() {
    return this.getNumberAttribute('appstat362');
  }
  public set appstat362(value: number) {
    this._appstat362 = value;
  }
  public resetAppstat362() {
    this._appstat362 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat362Input() {
    return this._appstat362;
  }

  // appstat363 - computed: false, optional: true, required: false
  private _appstat363?: number; 
  public get appstat363() {
    return this.getNumberAttribute('appstat363');
  }
  public set appstat363(value: number) {
    this._appstat363 = value;
  }
  public resetAppstat363() {
    this._appstat363 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat363Input() {
    return this._appstat363;
  }

  // appstat364 - computed: false, optional: true, required: false
  private _appstat364?: number; 
  public get appstat364() {
    return this.getNumberAttribute('appstat364');
  }
  public set appstat364(value: number) {
    this._appstat364 = value;
  }
  public resetAppstat364() {
    this._appstat364 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat364Input() {
    return this._appstat364;
  }

  // appstat365 - computed: false, optional: true, required: false
  private _appstat365?: number; 
  public get appstat365() {
    return this.getNumberAttribute('appstat365');
  }
  public set appstat365(value: number) {
    this._appstat365 = value;
  }
  public resetAppstat365() {
    this._appstat365 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat365Input() {
    return this._appstat365;
  }

  // appstat366 - computed: false, optional: true, required: false
  private _appstat366?: number; 
  public get appstat366() {
    return this.getNumberAttribute('appstat366');
  }
  public set appstat366(value: number) {
    this._appstat366 = value;
  }
  public resetAppstat366() {
    this._appstat366 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat366Input() {
    return this._appstat366;
  }

  // appstat367 - computed: false, optional: true, required: false
  private _appstat367?: number; 
  public get appstat367() {
    return this.getNumberAttribute('appstat367');
  }
  public set appstat367(value: number) {
    this._appstat367 = value;
  }
  public resetAppstat367() {
    this._appstat367 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat367Input() {
    return this._appstat367;
  }

  // appstat368 - computed: false, optional: true, required: false
  private _appstat368?: number; 
  public get appstat368() {
    return this.getNumberAttribute('appstat368');
  }
  public set appstat368(value: number) {
    this._appstat368 = value;
  }
  public resetAppstat368() {
    this._appstat368 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat368Input() {
    return this._appstat368;
  }

  // appstat369 - computed: false, optional: true, required: false
  private _appstat369?: number; 
  public get appstat369() {
    return this.getNumberAttribute('appstat369');
  }
  public set appstat369(value: number) {
    this._appstat369 = value;
  }
  public resetAppstat369() {
    this._appstat369 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat369Input() {
    return this._appstat369;
  }

  // appstat37 - computed: false, optional: true, required: false
  private _appstat37?: number; 
  public get appstat37() {
    return this.getNumberAttribute('appstat37');
  }
  public set appstat37(value: number) {
    this._appstat37 = value;
  }
  public resetAppstat37() {
    this._appstat37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat37Input() {
    return this._appstat37;
  }

  // appstat370 - computed: false, optional: true, required: false
  private _appstat370?: number; 
  public get appstat370() {
    return this.getNumberAttribute('appstat370');
  }
  public set appstat370(value: number) {
    this._appstat370 = value;
  }
  public resetAppstat370() {
    this._appstat370 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat370Input() {
    return this._appstat370;
  }

  // appstat371 - computed: false, optional: true, required: false
  private _appstat371?: number; 
  public get appstat371() {
    return this.getNumberAttribute('appstat371');
  }
  public set appstat371(value: number) {
    this._appstat371 = value;
  }
  public resetAppstat371() {
    this._appstat371 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat371Input() {
    return this._appstat371;
  }

  // appstat372 - computed: false, optional: true, required: false
  private _appstat372?: number; 
  public get appstat372() {
    return this.getNumberAttribute('appstat372');
  }
  public set appstat372(value: number) {
    this._appstat372 = value;
  }
  public resetAppstat372() {
    this._appstat372 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat372Input() {
    return this._appstat372;
  }

  // appstat373 - computed: false, optional: true, required: false
  private _appstat373?: number; 
  public get appstat373() {
    return this.getNumberAttribute('appstat373');
  }
  public set appstat373(value: number) {
    this._appstat373 = value;
  }
  public resetAppstat373() {
    this._appstat373 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat373Input() {
    return this._appstat373;
  }

  // appstat374 - computed: false, optional: true, required: false
  private _appstat374?: number; 
  public get appstat374() {
    return this.getNumberAttribute('appstat374');
  }
  public set appstat374(value: number) {
    this._appstat374 = value;
  }
  public resetAppstat374() {
    this._appstat374 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat374Input() {
    return this._appstat374;
  }

  // appstat375 - computed: false, optional: true, required: false
  private _appstat375?: number; 
  public get appstat375() {
    return this.getNumberAttribute('appstat375');
  }
  public set appstat375(value: number) {
    this._appstat375 = value;
  }
  public resetAppstat375() {
    this._appstat375 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat375Input() {
    return this._appstat375;
  }

  // appstat376 - computed: false, optional: true, required: false
  private _appstat376?: number; 
  public get appstat376() {
    return this.getNumberAttribute('appstat376');
  }
  public set appstat376(value: number) {
    this._appstat376 = value;
  }
  public resetAppstat376() {
    this._appstat376 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat376Input() {
    return this._appstat376;
  }

  // appstat377 - computed: false, optional: true, required: false
  private _appstat377?: number; 
  public get appstat377() {
    return this.getNumberAttribute('appstat377');
  }
  public set appstat377(value: number) {
    this._appstat377 = value;
  }
  public resetAppstat377() {
    this._appstat377 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat377Input() {
    return this._appstat377;
  }

  // appstat378 - computed: false, optional: true, required: false
  private _appstat378?: number; 
  public get appstat378() {
    return this.getNumberAttribute('appstat378');
  }
  public set appstat378(value: number) {
    this._appstat378 = value;
  }
  public resetAppstat378() {
    this._appstat378 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat378Input() {
    return this._appstat378;
  }

  // appstat379 - computed: false, optional: true, required: false
  private _appstat379?: number; 
  public get appstat379() {
    return this.getNumberAttribute('appstat379');
  }
  public set appstat379(value: number) {
    this._appstat379 = value;
  }
  public resetAppstat379() {
    this._appstat379 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat379Input() {
    return this._appstat379;
  }

  // appstat38 - computed: false, optional: true, required: false
  private _appstat38?: number; 
  public get appstat38() {
    return this.getNumberAttribute('appstat38');
  }
  public set appstat38(value: number) {
    this._appstat38 = value;
  }
  public resetAppstat38() {
    this._appstat38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat38Input() {
    return this._appstat38;
  }

  // appstat380 - computed: false, optional: true, required: false
  private _appstat380?: number; 
  public get appstat380() {
    return this.getNumberAttribute('appstat380');
  }
  public set appstat380(value: number) {
    this._appstat380 = value;
  }
  public resetAppstat380() {
    this._appstat380 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat380Input() {
    return this._appstat380;
  }

  // appstat381 - computed: false, optional: true, required: false
  private _appstat381?: number; 
  public get appstat381() {
    return this.getNumberAttribute('appstat381');
  }
  public set appstat381(value: number) {
    this._appstat381 = value;
  }
  public resetAppstat381() {
    this._appstat381 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat381Input() {
    return this._appstat381;
  }

  // appstat382 - computed: false, optional: true, required: false
  private _appstat382?: number; 
  public get appstat382() {
    return this.getNumberAttribute('appstat382');
  }
  public set appstat382(value: number) {
    this._appstat382 = value;
  }
  public resetAppstat382() {
    this._appstat382 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat382Input() {
    return this._appstat382;
  }

  // appstat383 - computed: false, optional: true, required: false
  private _appstat383?: number; 
  public get appstat383() {
    return this.getNumberAttribute('appstat383');
  }
  public set appstat383(value: number) {
    this._appstat383 = value;
  }
  public resetAppstat383() {
    this._appstat383 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat383Input() {
    return this._appstat383;
  }

  // appstat384 - computed: false, optional: true, required: false
  private _appstat384?: number; 
  public get appstat384() {
    return this.getNumberAttribute('appstat384');
  }
  public set appstat384(value: number) {
    this._appstat384 = value;
  }
  public resetAppstat384() {
    this._appstat384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat384Input() {
    return this._appstat384;
  }

  // appstat385 - computed: false, optional: true, required: false
  private _appstat385?: number; 
  public get appstat385() {
    return this.getNumberAttribute('appstat385');
  }
  public set appstat385(value: number) {
    this._appstat385 = value;
  }
  public resetAppstat385() {
    this._appstat385 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat385Input() {
    return this._appstat385;
  }

  // appstat386 - computed: false, optional: true, required: false
  private _appstat386?: number; 
  public get appstat386() {
    return this.getNumberAttribute('appstat386');
  }
  public set appstat386(value: number) {
    this._appstat386 = value;
  }
  public resetAppstat386() {
    this._appstat386 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat386Input() {
    return this._appstat386;
  }

  // appstat387 - computed: false, optional: true, required: false
  private _appstat387?: number; 
  public get appstat387() {
    return this.getNumberAttribute('appstat387');
  }
  public set appstat387(value: number) {
    this._appstat387 = value;
  }
  public resetAppstat387() {
    this._appstat387 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat387Input() {
    return this._appstat387;
  }

  // appstat388 - computed: false, optional: true, required: false
  private _appstat388?: number; 
  public get appstat388() {
    return this.getNumberAttribute('appstat388');
  }
  public set appstat388(value: number) {
    this._appstat388 = value;
  }
  public resetAppstat388() {
    this._appstat388 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat388Input() {
    return this._appstat388;
  }

  // appstat389 - computed: false, optional: true, required: false
  private _appstat389?: number; 
  public get appstat389() {
    return this.getNumberAttribute('appstat389');
  }
  public set appstat389(value: number) {
    this._appstat389 = value;
  }
  public resetAppstat389() {
    this._appstat389 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat389Input() {
    return this._appstat389;
  }

  // appstat39 - computed: false, optional: true, required: false
  private _appstat39?: number; 
  public get appstat39() {
    return this.getNumberAttribute('appstat39');
  }
  public set appstat39(value: number) {
    this._appstat39 = value;
  }
  public resetAppstat39() {
    this._appstat39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat39Input() {
    return this._appstat39;
  }

  // appstat390 - computed: false, optional: true, required: false
  private _appstat390?: number; 
  public get appstat390() {
    return this.getNumberAttribute('appstat390');
  }
  public set appstat390(value: number) {
    this._appstat390 = value;
  }
  public resetAppstat390() {
    this._appstat390 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat390Input() {
    return this._appstat390;
  }

  // appstat391 - computed: false, optional: true, required: false
  private _appstat391?: number; 
  public get appstat391() {
    return this.getNumberAttribute('appstat391');
  }
  public set appstat391(value: number) {
    this._appstat391 = value;
  }
  public resetAppstat391() {
    this._appstat391 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat391Input() {
    return this._appstat391;
  }

  // appstat392 - computed: false, optional: true, required: false
  private _appstat392?: number; 
  public get appstat392() {
    return this.getNumberAttribute('appstat392');
  }
  public set appstat392(value: number) {
    this._appstat392 = value;
  }
  public resetAppstat392() {
    this._appstat392 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat392Input() {
    return this._appstat392;
  }

  // appstat393 - computed: false, optional: true, required: false
  private _appstat393?: number; 
  public get appstat393() {
    return this.getNumberAttribute('appstat393');
  }
  public set appstat393(value: number) {
    this._appstat393 = value;
  }
  public resetAppstat393() {
    this._appstat393 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat393Input() {
    return this._appstat393;
  }

  // appstat394 - computed: false, optional: true, required: false
  private _appstat394?: number; 
  public get appstat394() {
    return this.getNumberAttribute('appstat394');
  }
  public set appstat394(value: number) {
    this._appstat394 = value;
  }
  public resetAppstat394() {
    this._appstat394 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat394Input() {
    return this._appstat394;
  }

  // appstat395 - computed: false, optional: true, required: false
  private _appstat395?: number; 
  public get appstat395() {
    return this.getNumberAttribute('appstat395');
  }
  public set appstat395(value: number) {
    this._appstat395 = value;
  }
  public resetAppstat395() {
    this._appstat395 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat395Input() {
    return this._appstat395;
  }

  // appstat396 - computed: false, optional: true, required: false
  private _appstat396?: number; 
  public get appstat396() {
    return this.getNumberAttribute('appstat396');
  }
  public set appstat396(value: number) {
    this._appstat396 = value;
  }
  public resetAppstat396() {
    this._appstat396 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat396Input() {
    return this._appstat396;
  }

  // appstat397 - computed: false, optional: true, required: false
  private _appstat397?: number; 
  public get appstat397() {
    return this.getNumberAttribute('appstat397');
  }
  public set appstat397(value: number) {
    this._appstat397 = value;
  }
  public resetAppstat397() {
    this._appstat397 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat397Input() {
    return this._appstat397;
  }

  // appstat398 - computed: false, optional: true, required: false
  private _appstat398?: number; 
  public get appstat398() {
    return this.getNumberAttribute('appstat398');
  }
  public set appstat398(value: number) {
    this._appstat398 = value;
  }
  public resetAppstat398() {
    this._appstat398 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat398Input() {
    return this._appstat398;
  }

  // appstat399 - computed: false, optional: true, required: false
  private _appstat399?: number; 
  public get appstat399() {
    return this.getNumberAttribute('appstat399');
  }
  public set appstat399(value: number) {
    this._appstat399 = value;
  }
  public resetAppstat399() {
    this._appstat399 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat399Input() {
    return this._appstat399;
  }

  // appstat4 - computed: false, optional: true, required: false
  private _appstat4?: number; 
  public get appstat4() {
    return this.getNumberAttribute('appstat4');
  }
  public set appstat4(value: number) {
    this._appstat4 = value;
  }
  public resetAppstat4() {
    this._appstat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat4Input() {
    return this._appstat4;
  }

  // appstat40 - computed: false, optional: true, required: false
  private _appstat40?: number; 
  public get appstat40() {
    return this.getNumberAttribute('appstat40');
  }
  public set appstat40(value: number) {
    this._appstat40 = value;
  }
  public resetAppstat40() {
    this._appstat40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat40Input() {
    return this._appstat40;
  }

  // appstat400 - computed: false, optional: true, required: false
  private _appstat400?: number; 
  public get appstat400() {
    return this.getNumberAttribute('appstat400');
  }
  public set appstat400(value: number) {
    this._appstat400 = value;
  }
  public resetAppstat400() {
    this._appstat400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat400Input() {
    return this._appstat400;
  }

  // appstat401 - computed: false, optional: true, required: false
  private _appstat401?: number; 
  public get appstat401() {
    return this.getNumberAttribute('appstat401');
  }
  public set appstat401(value: number) {
    this._appstat401 = value;
  }
  public resetAppstat401() {
    this._appstat401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat401Input() {
    return this._appstat401;
  }

  // appstat402 - computed: false, optional: true, required: false
  private _appstat402?: number; 
  public get appstat402() {
    return this.getNumberAttribute('appstat402');
  }
  public set appstat402(value: number) {
    this._appstat402 = value;
  }
  public resetAppstat402() {
    this._appstat402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat402Input() {
    return this._appstat402;
  }

  // appstat403 - computed: false, optional: true, required: false
  private _appstat403?: number; 
  public get appstat403() {
    return this.getNumberAttribute('appstat403');
  }
  public set appstat403(value: number) {
    this._appstat403 = value;
  }
  public resetAppstat403() {
    this._appstat403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat403Input() {
    return this._appstat403;
  }

  // appstat404 - computed: false, optional: true, required: false
  private _appstat404?: number; 
  public get appstat404() {
    return this.getNumberAttribute('appstat404');
  }
  public set appstat404(value: number) {
    this._appstat404 = value;
  }
  public resetAppstat404() {
    this._appstat404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat404Input() {
    return this._appstat404;
  }

  // appstat405 - computed: false, optional: true, required: false
  private _appstat405?: number; 
  public get appstat405() {
    return this.getNumberAttribute('appstat405');
  }
  public set appstat405(value: number) {
    this._appstat405 = value;
  }
  public resetAppstat405() {
    this._appstat405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat405Input() {
    return this._appstat405;
  }

  // appstat406 - computed: false, optional: true, required: false
  private _appstat406?: number; 
  public get appstat406() {
    return this.getNumberAttribute('appstat406');
  }
  public set appstat406(value: number) {
    this._appstat406 = value;
  }
  public resetAppstat406() {
    this._appstat406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat406Input() {
    return this._appstat406;
  }

  // appstat407 - computed: false, optional: true, required: false
  private _appstat407?: number; 
  public get appstat407() {
    return this.getNumberAttribute('appstat407');
  }
  public set appstat407(value: number) {
    this._appstat407 = value;
  }
  public resetAppstat407() {
    this._appstat407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat407Input() {
    return this._appstat407;
  }

  // appstat408 - computed: false, optional: true, required: false
  private _appstat408?: number; 
  public get appstat408() {
    return this.getNumberAttribute('appstat408');
  }
  public set appstat408(value: number) {
    this._appstat408 = value;
  }
  public resetAppstat408() {
    this._appstat408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat408Input() {
    return this._appstat408;
  }

  // appstat409 - computed: false, optional: true, required: false
  private _appstat409?: number; 
  public get appstat409() {
    return this.getNumberAttribute('appstat409');
  }
  public set appstat409(value: number) {
    this._appstat409 = value;
  }
  public resetAppstat409() {
    this._appstat409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat409Input() {
    return this._appstat409;
  }

  // appstat41 - computed: false, optional: true, required: false
  private _appstat41?: number; 
  public get appstat41() {
    return this.getNumberAttribute('appstat41');
  }
  public set appstat41(value: number) {
    this._appstat41 = value;
  }
  public resetAppstat41() {
    this._appstat41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat41Input() {
    return this._appstat41;
  }

  // appstat410 - computed: false, optional: true, required: false
  private _appstat410?: number; 
  public get appstat410() {
    return this.getNumberAttribute('appstat410');
  }
  public set appstat410(value: number) {
    this._appstat410 = value;
  }
  public resetAppstat410() {
    this._appstat410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat410Input() {
    return this._appstat410;
  }

  // appstat411 - computed: false, optional: true, required: false
  private _appstat411?: number; 
  public get appstat411() {
    return this.getNumberAttribute('appstat411');
  }
  public set appstat411(value: number) {
    this._appstat411 = value;
  }
  public resetAppstat411() {
    this._appstat411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat411Input() {
    return this._appstat411;
  }

  // appstat412 - computed: false, optional: true, required: false
  private _appstat412?: number; 
  public get appstat412() {
    return this.getNumberAttribute('appstat412');
  }
  public set appstat412(value: number) {
    this._appstat412 = value;
  }
  public resetAppstat412() {
    this._appstat412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat412Input() {
    return this._appstat412;
  }

  // appstat413 - computed: false, optional: true, required: false
  private _appstat413?: number; 
  public get appstat413() {
    return this.getNumberAttribute('appstat413');
  }
  public set appstat413(value: number) {
    this._appstat413 = value;
  }
  public resetAppstat413() {
    this._appstat413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat413Input() {
    return this._appstat413;
  }

  // appstat414 - computed: false, optional: true, required: false
  private _appstat414?: number; 
  public get appstat414() {
    return this.getNumberAttribute('appstat414');
  }
  public set appstat414(value: number) {
    this._appstat414 = value;
  }
  public resetAppstat414() {
    this._appstat414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat414Input() {
    return this._appstat414;
  }

  // appstat415 - computed: false, optional: true, required: false
  private _appstat415?: number; 
  public get appstat415() {
    return this.getNumberAttribute('appstat415');
  }
  public set appstat415(value: number) {
    this._appstat415 = value;
  }
  public resetAppstat415() {
    this._appstat415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat415Input() {
    return this._appstat415;
  }

  // appstat416 - computed: false, optional: true, required: false
  private _appstat416?: number; 
  public get appstat416() {
    return this.getNumberAttribute('appstat416');
  }
  public set appstat416(value: number) {
    this._appstat416 = value;
  }
  public resetAppstat416() {
    this._appstat416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat416Input() {
    return this._appstat416;
  }

  // appstat417 - computed: false, optional: true, required: false
  private _appstat417?: number; 
  public get appstat417() {
    return this.getNumberAttribute('appstat417');
  }
  public set appstat417(value: number) {
    this._appstat417 = value;
  }
  public resetAppstat417() {
    this._appstat417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat417Input() {
    return this._appstat417;
  }

  // appstat418 - computed: false, optional: true, required: false
  private _appstat418?: number; 
  public get appstat418() {
    return this.getNumberAttribute('appstat418');
  }
  public set appstat418(value: number) {
    this._appstat418 = value;
  }
  public resetAppstat418() {
    this._appstat418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat418Input() {
    return this._appstat418;
  }

  // appstat419 - computed: false, optional: true, required: false
  private _appstat419?: number; 
  public get appstat419() {
    return this.getNumberAttribute('appstat419');
  }
  public set appstat419(value: number) {
    this._appstat419 = value;
  }
  public resetAppstat419() {
    this._appstat419 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat419Input() {
    return this._appstat419;
  }

  // appstat42 - computed: false, optional: true, required: false
  private _appstat42?: number; 
  public get appstat42() {
    return this.getNumberAttribute('appstat42');
  }
  public set appstat42(value: number) {
    this._appstat42 = value;
  }
  public resetAppstat42() {
    this._appstat42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat42Input() {
    return this._appstat42;
  }

  // appstat420 - computed: false, optional: true, required: false
  private _appstat420?: number; 
  public get appstat420() {
    return this.getNumberAttribute('appstat420');
  }
  public set appstat420(value: number) {
    this._appstat420 = value;
  }
  public resetAppstat420() {
    this._appstat420 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat420Input() {
    return this._appstat420;
  }

  // appstat421 - computed: false, optional: true, required: false
  private _appstat421?: number; 
  public get appstat421() {
    return this.getNumberAttribute('appstat421');
  }
  public set appstat421(value: number) {
    this._appstat421 = value;
  }
  public resetAppstat421() {
    this._appstat421 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat421Input() {
    return this._appstat421;
  }

  // appstat422 - computed: false, optional: true, required: false
  private _appstat422?: number; 
  public get appstat422() {
    return this.getNumberAttribute('appstat422');
  }
  public set appstat422(value: number) {
    this._appstat422 = value;
  }
  public resetAppstat422() {
    this._appstat422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat422Input() {
    return this._appstat422;
  }

  // appstat423 - computed: false, optional: true, required: false
  private _appstat423?: number; 
  public get appstat423() {
    return this.getNumberAttribute('appstat423');
  }
  public set appstat423(value: number) {
    this._appstat423 = value;
  }
  public resetAppstat423() {
    this._appstat423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat423Input() {
    return this._appstat423;
  }

  // appstat424 - computed: false, optional: true, required: false
  private _appstat424?: number; 
  public get appstat424() {
    return this.getNumberAttribute('appstat424');
  }
  public set appstat424(value: number) {
    this._appstat424 = value;
  }
  public resetAppstat424() {
    this._appstat424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat424Input() {
    return this._appstat424;
  }

  // appstat425 - computed: false, optional: true, required: false
  private _appstat425?: number; 
  public get appstat425() {
    return this.getNumberAttribute('appstat425');
  }
  public set appstat425(value: number) {
    this._appstat425 = value;
  }
  public resetAppstat425() {
    this._appstat425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat425Input() {
    return this._appstat425;
  }

  // appstat426 - computed: false, optional: true, required: false
  private _appstat426?: number; 
  public get appstat426() {
    return this.getNumberAttribute('appstat426');
  }
  public set appstat426(value: number) {
    this._appstat426 = value;
  }
  public resetAppstat426() {
    this._appstat426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat426Input() {
    return this._appstat426;
  }

  // appstat427 - computed: false, optional: true, required: false
  private _appstat427?: number; 
  public get appstat427() {
    return this.getNumberAttribute('appstat427');
  }
  public set appstat427(value: number) {
    this._appstat427 = value;
  }
  public resetAppstat427() {
    this._appstat427 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat427Input() {
    return this._appstat427;
  }

  // appstat428 - computed: false, optional: true, required: false
  private _appstat428?: number; 
  public get appstat428() {
    return this.getNumberAttribute('appstat428');
  }
  public set appstat428(value: number) {
    this._appstat428 = value;
  }
  public resetAppstat428() {
    this._appstat428 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat428Input() {
    return this._appstat428;
  }

  // appstat429 - computed: false, optional: true, required: false
  private _appstat429?: number; 
  public get appstat429() {
    return this.getNumberAttribute('appstat429');
  }
  public set appstat429(value: number) {
    this._appstat429 = value;
  }
  public resetAppstat429() {
    this._appstat429 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat429Input() {
    return this._appstat429;
  }

  // appstat43 - computed: false, optional: true, required: false
  private _appstat43?: number; 
  public get appstat43() {
    return this.getNumberAttribute('appstat43');
  }
  public set appstat43(value: number) {
    this._appstat43 = value;
  }
  public resetAppstat43() {
    this._appstat43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat43Input() {
    return this._appstat43;
  }

  // appstat430 - computed: false, optional: true, required: false
  private _appstat430?: number; 
  public get appstat430() {
    return this.getNumberAttribute('appstat430');
  }
  public set appstat430(value: number) {
    this._appstat430 = value;
  }
  public resetAppstat430() {
    this._appstat430 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat430Input() {
    return this._appstat430;
  }

  // appstat431 - computed: false, optional: true, required: false
  private _appstat431?: number; 
  public get appstat431() {
    return this.getNumberAttribute('appstat431');
  }
  public set appstat431(value: number) {
    this._appstat431 = value;
  }
  public resetAppstat431() {
    this._appstat431 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat431Input() {
    return this._appstat431;
  }

  // appstat432 - computed: false, optional: true, required: false
  private _appstat432?: number; 
  public get appstat432() {
    return this.getNumberAttribute('appstat432');
  }
  public set appstat432(value: number) {
    this._appstat432 = value;
  }
  public resetAppstat432() {
    this._appstat432 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat432Input() {
    return this._appstat432;
  }

  // appstat433 - computed: false, optional: true, required: false
  private _appstat433?: number; 
  public get appstat433() {
    return this.getNumberAttribute('appstat433');
  }
  public set appstat433(value: number) {
    this._appstat433 = value;
  }
  public resetAppstat433() {
    this._appstat433 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat433Input() {
    return this._appstat433;
  }

  // appstat434 - computed: false, optional: true, required: false
  private _appstat434?: number; 
  public get appstat434() {
    return this.getNumberAttribute('appstat434');
  }
  public set appstat434(value: number) {
    this._appstat434 = value;
  }
  public resetAppstat434() {
    this._appstat434 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat434Input() {
    return this._appstat434;
  }

  // appstat435 - computed: false, optional: true, required: false
  private _appstat435?: number; 
  public get appstat435() {
    return this.getNumberAttribute('appstat435');
  }
  public set appstat435(value: number) {
    this._appstat435 = value;
  }
  public resetAppstat435() {
    this._appstat435 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat435Input() {
    return this._appstat435;
  }

  // appstat436 - computed: false, optional: true, required: false
  private _appstat436?: number; 
  public get appstat436() {
    return this.getNumberAttribute('appstat436');
  }
  public set appstat436(value: number) {
    this._appstat436 = value;
  }
  public resetAppstat436() {
    this._appstat436 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat436Input() {
    return this._appstat436;
  }

  // appstat437 - computed: false, optional: true, required: false
  private _appstat437?: number; 
  public get appstat437() {
    return this.getNumberAttribute('appstat437');
  }
  public set appstat437(value: number) {
    this._appstat437 = value;
  }
  public resetAppstat437() {
    this._appstat437 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat437Input() {
    return this._appstat437;
  }

  // appstat438 - computed: false, optional: true, required: false
  private _appstat438?: number; 
  public get appstat438() {
    return this.getNumberAttribute('appstat438');
  }
  public set appstat438(value: number) {
    this._appstat438 = value;
  }
  public resetAppstat438() {
    this._appstat438 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat438Input() {
    return this._appstat438;
  }

  // appstat439 - computed: false, optional: true, required: false
  private _appstat439?: number; 
  public get appstat439() {
    return this.getNumberAttribute('appstat439');
  }
  public set appstat439(value: number) {
    this._appstat439 = value;
  }
  public resetAppstat439() {
    this._appstat439 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat439Input() {
    return this._appstat439;
  }

  // appstat44 - computed: false, optional: true, required: false
  private _appstat44?: number; 
  public get appstat44() {
    return this.getNumberAttribute('appstat44');
  }
  public set appstat44(value: number) {
    this._appstat44 = value;
  }
  public resetAppstat44() {
    this._appstat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat44Input() {
    return this._appstat44;
  }

  // appstat440 - computed: false, optional: true, required: false
  private _appstat440?: number; 
  public get appstat440() {
    return this.getNumberAttribute('appstat440');
  }
  public set appstat440(value: number) {
    this._appstat440 = value;
  }
  public resetAppstat440() {
    this._appstat440 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat440Input() {
    return this._appstat440;
  }

  // appstat441 - computed: false, optional: true, required: false
  private _appstat441?: number; 
  public get appstat441() {
    return this.getNumberAttribute('appstat441');
  }
  public set appstat441(value: number) {
    this._appstat441 = value;
  }
  public resetAppstat441() {
    this._appstat441 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat441Input() {
    return this._appstat441;
  }

  // appstat442 - computed: false, optional: true, required: false
  private _appstat442?: number; 
  public get appstat442() {
    return this.getNumberAttribute('appstat442');
  }
  public set appstat442(value: number) {
    this._appstat442 = value;
  }
  public resetAppstat442() {
    this._appstat442 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat442Input() {
    return this._appstat442;
  }

  // appstat443 - computed: false, optional: true, required: false
  private _appstat443?: number; 
  public get appstat443() {
    return this.getNumberAttribute('appstat443');
  }
  public set appstat443(value: number) {
    this._appstat443 = value;
  }
  public resetAppstat443() {
    this._appstat443 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat443Input() {
    return this._appstat443;
  }

  // appstat444 - computed: false, optional: true, required: false
  private _appstat444?: number; 
  public get appstat444() {
    return this.getNumberAttribute('appstat444');
  }
  public set appstat444(value: number) {
    this._appstat444 = value;
  }
  public resetAppstat444() {
    this._appstat444 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat444Input() {
    return this._appstat444;
  }

  // appstat445 - computed: false, optional: true, required: false
  private _appstat445?: number; 
  public get appstat445() {
    return this.getNumberAttribute('appstat445');
  }
  public set appstat445(value: number) {
    this._appstat445 = value;
  }
  public resetAppstat445() {
    this._appstat445 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat445Input() {
    return this._appstat445;
  }

  // appstat446 - computed: false, optional: true, required: false
  private _appstat446?: number; 
  public get appstat446() {
    return this.getNumberAttribute('appstat446');
  }
  public set appstat446(value: number) {
    this._appstat446 = value;
  }
  public resetAppstat446() {
    this._appstat446 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat446Input() {
    return this._appstat446;
  }

  // appstat447 - computed: false, optional: true, required: false
  private _appstat447?: number; 
  public get appstat447() {
    return this.getNumberAttribute('appstat447');
  }
  public set appstat447(value: number) {
    this._appstat447 = value;
  }
  public resetAppstat447() {
    this._appstat447 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat447Input() {
    return this._appstat447;
  }

  // appstat448 - computed: false, optional: true, required: false
  private _appstat448?: number; 
  public get appstat448() {
    return this.getNumberAttribute('appstat448');
  }
  public set appstat448(value: number) {
    this._appstat448 = value;
  }
  public resetAppstat448() {
    this._appstat448 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat448Input() {
    return this._appstat448;
  }

  // appstat449 - computed: false, optional: true, required: false
  private _appstat449?: number; 
  public get appstat449() {
    return this.getNumberAttribute('appstat449');
  }
  public set appstat449(value: number) {
    this._appstat449 = value;
  }
  public resetAppstat449() {
    this._appstat449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat449Input() {
    return this._appstat449;
  }

  // appstat45 - computed: false, optional: true, required: false
  private _appstat45?: number; 
  public get appstat45() {
    return this.getNumberAttribute('appstat45');
  }
  public set appstat45(value: number) {
    this._appstat45 = value;
  }
  public resetAppstat45() {
    this._appstat45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat45Input() {
    return this._appstat45;
  }

  // appstat450 - computed: false, optional: true, required: false
  private _appstat450?: number; 
  public get appstat450() {
    return this.getNumberAttribute('appstat450');
  }
  public set appstat450(value: number) {
    this._appstat450 = value;
  }
  public resetAppstat450() {
    this._appstat450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat450Input() {
    return this._appstat450;
  }

  // appstat451 - computed: false, optional: true, required: false
  private _appstat451?: number; 
  public get appstat451() {
    return this.getNumberAttribute('appstat451');
  }
  public set appstat451(value: number) {
    this._appstat451 = value;
  }
  public resetAppstat451() {
    this._appstat451 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat451Input() {
    return this._appstat451;
  }

  // appstat452 - computed: false, optional: true, required: false
  private _appstat452?: number; 
  public get appstat452() {
    return this.getNumberAttribute('appstat452');
  }
  public set appstat452(value: number) {
    this._appstat452 = value;
  }
  public resetAppstat452() {
    this._appstat452 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat452Input() {
    return this._appstat452;
  }

  // appstat453 - computed: false, optional: true, required: false
  private _appstat453?: number; 
  public get appstat453() {
    return this.getNumberAttribute('appstat453');
  }
  public set appstat453(value: number) {
    this._appstat453 = value;
  }
  public resetAppstat453() {
    this._appstat453 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat453Input() {
    return this._appstat453;
  }

  // appstat454 - computed: false, optional: true, required: false
  private _appstat454?: number; 
  public get appstat454() {
    return this.getNumberAttribute('appstat454');
  }
  public set appstat454(value: number) {
    this._appstat454 = value;
  }
  public resetAppstat454() {
    this._appstat454 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat454Input() {
    return this._appstat454;
  }

  // appstat455 - computed: false, optional: true, required: false
  private _appstat455?: number; 
  public get appstat455() {
    return this.getNumberAttribute('appstat455');
  }
  public set appstat455(value: number) {
    this._appstat455 = value;
  }
  public resetAppstat455() {
    this._appstat455 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat455Input() {
    return this._appstat455;
  }

  // appstat456 - computed: false, optional: true, required: false
  private _appstat456?: number; 
  public get appstat456() {
    return this.getNumberAttribute('appstat456');
  }
  public set appstat456(value: number) {
    this._appstat456 = value;
  }
  public resetAppstat456() {
    this._appstat456 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat456Input() {
    return this._appstat456;
  }

  // appstat457 - computed: false, optional: true, required: false
  private _appstat457?: number; 
  public get appstat457() {
    return this.getNumberAttribute('appstat457');
  }
  public set appstat457(value: number) {
    this._appstat457 = value;
  }
  public resetAppstat457() {
    this._appstat457 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat457Input() {
    return this._appstat457;
  }

  // appstat458 - computed: false, optional: true, required: false
  private _appstat458?: number; 
  public get appstat458() {
    return this.getNumberAttribute('appstat458');
  }
  public set appstat458(value: number) {
    this._appstat458 = value;
  }
  public resetAppstat458() {
    this._appstat458 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat458Input() {
    return this._appstat458;
  }

  // appstat459 - computed: false, optional: true, required: false
  private _appstat459?: number; 
  public get appstat459() {
    return this.getNumberAttribute('appstat459');
  }
  public set appstat459(value: number) {
    this._appstat459 = value;
  }
  public resetAppstat459() {
    this._appstat459 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat459Input() {
    return this._appstat459;
  }

  // appstat46 - computed: false, optional: true, required: false
  private _appstat46?: number; 
  public get appstat46() {
    return this.getNumberAttribute('appstat46');
  }
  public set appstat46(value: number) {
    this._appstat46 = value;
  }
  public resetAppstat46() {
    this._appstat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat46Input() {
    return this._appstat46;
  }

  // appstat460 - computed: false, optional: true, required: false
  private _appstat460?: number; 
  public get appstat460() {
    return this.getNumberAttribute('appstat460');
  }
  public set appstat460(value: number) {
    this._appstat460 = value;
  }
  public resetAppstat460() {
    this._appstat460 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat460Input() {
    return this._appstat460;
  }

  // appstat461 - computed: false, optional: true, required: false
  private _appstat461?: number; 
  public get appstat461() {
    return this.getNumberAttribute('appstat461');
  }
  public set appstat461(value: number) {
    this._appstat461 = value;
  }
  public resetAppstat461() {
    this._appstat461 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat461Input() {
    return this._appstat461;
  }

  // appstat462 - computed: false, optional: true, required: false
  private _appstat462?: number; 
  public get appstat462() {
    return this.getNumberAttribute('appstat462');
  }
  public set appstat462(value: number) {
    this._appstat462 = value;
  }
  public resetAppstat462() {
    this._appstat462 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat462Input() {
    return this._appstat462;
  }

  // appstat463 - computed: false, optional: true, required: false
  private _appstat463?: number; 
  public get appstat463() {
    return this.getNumberAttribute('appstat463');
  }
  public set appstat463(value: number) {
    this._appstat463 = value;
  }
  public resetAppstat463() {
    this._appstat463 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat463Input() {
    return this._appstat463;
  }

  // appstat464 - computed: false, optional: true, required: false
  private _appstat464?: number; 
  public get appstat464() {
    return this.getNumberAttribute('appstat464');
  }
  public set appstat464(value: number) {
    this._appstat464 = value;
  }
  public resetAppstat464() {
    this._appstat464 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat464Input() {
    return this._appstat464;
  }

  // appstat465 - computed: false, optional: true, required: false
  private _appstat465?: number; 
  public get appstat465() {
    return this.getNumberAttribute('appstat465');
  }
  public set appstat465(value: number) {
    this._appstat465 = value;
  }
  public resetAppstat465() {
    this._appstat465 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat465Input() {
    return this._appstat465;
  }

  // appstat466 - computed: false, optional: true, required: false
  private _appstat466?: number; 
  public get appstat466() {
    return this.getNumberAttribute('appstat466');
  }
  public set appstat466(value: number) {
    this._appstat466 = value;
  }
  public resetAppstat466() {
    this._appstat466 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat466Input() {
    return this._appstat466;
  }

  // appstat467 - computed: false, optional: true, required: false
  private _appstat467?: number; 
  public get appstat467() {
    return this.getNumberAttribute('appstat467');
  }
  public set appstat467(value: number) {
    this._appstat467 = value;
  }
  public resetAppstat467() {
    this._appstat467 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat467Input() {
    return this._appstat467;
  }

  // appstat468 - computed: false, optional: true, required: false
  private _appstat468?: number; 
  public get appstat468() {
    return this.getNumberAttribute('appstat468');
  }
  public set appstat468(value: number) {
    this._appstat468 = value;
  }
  public resetAppstat468() {
    this._appstat468 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat468Input() {
    return this._appstat468;
  }

  // appstat469 - computed: false, optional: true, required: false
  private _appstat469?: number; 
  public get appstat469() {
    return this.getNumberAttribute('appstat469');
  }
  public set appstat469(value: number) {
    this._appstat469 = value;
  }
  public resetAppstat469() {
    this._appstat469 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat469Input() {
    return this._appstat469;
  }

  // appstat47 - computed: false, optional: true, required: false
  private _appstat47?: number; 
  public get appstat47() {
    return this.getNumberAttribute('appstat47');
  }
  public set appstat47(value: number) {
    this._appstat47 = value;
  }
  public resetAppstat47() {
    this._appstat47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat47Input() {
    return this._appstat47;
  }

  // appstat470 - computed: false, optional: true, required: false
  private _appstat470?: number; 
  public get appstat470() {
    return this.getNumberAttribute('appstat470');
  }
  public set appstat470(value: number) {
    this._appstat470 = value;
  }
  public resetAppstat470() {
    this._appstat470 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat470Input() {
    return this._appstat470;
  }

  // appstat471 - computed: false, optional: true, required: false
  private _appstat471?: number; 
  public get appstat471() {
    return this.getNumberAttribute('appstat471');
  }
  public set appstat471(value: number) {
    this._appstat471 = value;
  }
  public resetAppstat471() {
    this._appstat471 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat471Input() {
    return this._appstat471;
  }

  // appstat472 - computed: false, optional: true, required: false
  private _appstat472?: number; 
  public get appstat472() {
    return this.getNumberAttribute('appstat472');
  }
  public set appstat472(value: number) {
    this._appstat472 = value;
  }
  public resetAppstat472() {
    this._appstat472 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat472Input() {
    return this._appstat472;
  }

  // appstat473 - computed: false, optional: true, required: false
  private _appstat473?: number; 
  public get appstat473() {
    return this.getNumberAttribute('appstat473');
  }
  public set appstat473(value: number) {
    this._appstat473 = value;
  }
  public resetAppstat473() {
    this._appstat473 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat473Input() {
    return this._appstat473;
  }

  // appstat474 - computed: false, optional: true, required: false
  private _appstat474?: number; 
  public get appstat474() {
    return this.getNumberAttribute('appstat474');
  }
  public set appstat474(value: number) {
    this._appstat474 = value;
  }
  public resetAppstat474() {
    this._appstat474 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat474Input() {
    return this._appstat474;
  }

  // appstat475 - computed: false, optional: true, required: false
  private _appstat475?: number; 
  public get appstat475() {
    return this.getNumberAttribute('appstat475');
  }
  public set appstat475(value: number) {
    this._appstat475 = value;
  }
  public resetAppstat475() {
    this._appstat475 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat475Input() {
    return this._appstat475;
  }

  // appstat476 - computed: false, optional: true, required: false
  private _appstat476?: number; 
  public get appstat476() {
    return this.getNumberAttribute('appstat476');
  }
  public set appstat476(value: number) {
    this._appstat476 = value;
  }
  public resetAppstat476() {
    this._appstat476 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat476Input() {
    return this._appstat476;
  }

  // appstat477 - computed: false, optional: true, required: false
  private _appstat477?: number; 
  public get appstat477() {
    return this.getNumberAttribute('appstat477');
  }
  public set appstat477(value: number) {
    this._appstat477 = value;
  }
  public resetAppstat477() {
    this._appstat477 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat477Input() {
    return this._appstat477;
  }

  // appstat478 - computed: false, optional: true, required: false
  private _appstat478?: number; 
  public get appstat478() {
    return this.getNumberAttribute('appstat478');
  }
  public set appstat478(value: number) {
    this._appstat478 = value;
  }
  public resetAppstat478() {
    this._appstat478 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat478Input() {
    return this._appstat478;
  }

  // appstat479 - computed: false, optional: true, required: false
  private _appstat479?: number; 
  public get appstat479() {
    return this.getNumberAttribute('appstat479');
  }
  public set appstat479(value: number) {
    this._appstat479 = value;
  }
  public resetAppstat479() {
    this._appstat479 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat479Input() {
    return this._appstat479;
  }

  // appstat48 - computed: false, optional: true, required: false
  private _appstat48?: number; 
  public get appstat48() {
    return this.getNumberAttribute('appstat48');
  }
  public set appstat48(value: number) {
    this._appstat48 = value;
  }
  public resetAppstat48() {
    this._appstat48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat48Input() {
    return this._appstat48;
  }

  // appstat480 - computed: false, optional: true, required: false
  private _appstat480?: number; 
  public get appstat480() {
    return this.getNumberAttribute('appstat480');
  }
  public set appstat480(value: number) {
    this._appstat480 = value;
  }
  public resetAppstat480() {
    this._appstat480 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat480Input() {
    return this._appstat480;
  }

  // appstat481 - computed: false, optional: true, required: false
  private _appstat481?: number; 
  public get appstat481() {
    return this.getNumberAttribute('appstat481');
  }
  public set appstat481(value: number) {
    this._appstat481 = value;
  }
  public resetAppstat481() {
    this._appstat481 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat481Input() {
    return this._appstat481;
  }

  // appstat482 - computed: false, optional: true, required: false
  private _appstat482?: number; 
  public get appstat482() {
    return this.getNumberAttribute('appstat482');
  }
  public set appstat482(value: number) {
    this._appstat482 = value;
  }
  public resetAppstat482() {
    this._appstat482 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat482Input() {
    return this._appstat482;
  }

  // appstat483 - computed: false, optional: true, required: false
  private _appstat483?: number; 
  public get appstat483() {
    return this.getNumberAttribute('appstat483');
  }
  public set appstat483(value: number) {
    this._appstat483 = value;
  }
  public resetAppstat483() {
    this._appstat483 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat483Input() {
    return this._appstat483;
  }

  // appstat484 - computed: false, optional: true, required: false
  private _appstat484?: number; 
  public get appstat484() {
    return this.getNumberAttribute('appstat484');
  }
  public set appstat484(value: number) {
    this._appstat484 = value;
  }
  public resetAppstat484() {
    this._appstat484 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat484Input() {
    return this._appstat484;
  }

  // appstat485 - computed: false, optional: true, required: false
  private _appstat485?: number; 
  public get appstat485() {
    return this.getNumberAttribute('appstat485');
  }
  public set appstat485(value: number) {
    this._appstat485 = value;
  }
  public resetAppstat485() {
    this._appstat485 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat485Input() {
    return this._appstat485;
  }

  // appstat486 - computed: false, optional: true, required: false
  private _appstat486?: number; 
  public get appstat486() {
    return this.getNumberAttribute('appstat486');
  }
  public set appstat486(value: number) {
    this._appstat486 = value;
  }
  public resetAppstat486() {
    this._appstat486 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat486Input() {
    return this._appstat486;
  }

  // appstat487 - computed: false, optional: true, required: false
  private _appstat487?: number; 
  public get appstat487() {
    return this.getNumberAttribute('appstat487');
  }
  public set appstat487(value: number) {
    this._appstat487 = value;
  }
  public resetAppstat487() {
    this._appstat487 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat487Input() {
    return this._appstat487;
  }

  // appstat488 - computed: false, optional: true, required: false
  private _appstat488?: number; 
  public get appstat488() {
    return this.getNumberAttribute('appstat488');
  }
  public set appstat488(value: number) {
    this._appstat488 = value;
  }
  public resetAppstat488() {
    this._appstat488 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat488Input() {
    return this._appstat488;
  }

  // appstat489 - computed: false, optional: true, required: false
  private _appstat489?: number; 
  public get appstat489() {
    return this.getNumberAttribute('appstat489');
  }
  public set appstat489(value: number) {
    this._appstat489 = value;
  }
  public resetAppstat489() {
    this._appstat489 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat489Input() {
    return this._appstat489;
  }

  // appstat49 - computed: false, optional: true, required: false
  private _appstat49?: number; 
  public get appstat49() {
    return this.getNumberAttribute('appstat49');
  }
  public set appstat49(value: number) {
    this._appstat49 = value;
  }
  public resetAppstat49() {
    this._appstat49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat49Input() {
    return this._appstat49;
  }

  // appstat490 - computed: false, optional: true, required: false
  private _appstat490?: number; 
  public get appstat490() {
    return this.getNumberAttribute('appstat490');
  }
  public set appstat490(value: number) {
    this._appstat490 = value;
  }
  public resetAppstat490() {
    this._appstat490 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat490Input() {
    return this._appstat490;
  }

  // appstat491 - computed: false, optional: true, required: false
  private _appstat491?: number; 
  public get appstat491() {
    return this.getNumberAttribute('appstat491');
  }
  public set appstat491(value: number) {
    this._appstat491 = value;
  }
  public resetAppstat491() {
    this._appstat491 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat491Input() {
    return this._appstat491;
  }

  // appstat492 - computed: false, optional: true, required: false
  private _appstat492?: number; 
  public get appstat492() {
    return this.getNumberAttribute('appstat492');
  }
  public set appstat492(value: number) {
    this._appstat492 = value;
  }
  public resetAppstat492() {
    this._appstat492 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat492Input() {
    return this._appstat492;
  }

  // appstat493 - computed: false, optional: true, required: false
  private _appstat493?: number; 
  public get appstat493() {
    return this.getNumberAttribute('appstat493');
  }
  public set appstat493(value: number) {
    this._appstat493 = value;
  }
  public resetAppstat493() {
    this._appstat493 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat493Input() {
    return this._appstat493;
  }

  // appstat494 - computed: false, optional: true, required: false
  private _appstat494?: number; 
  public get appstat494() {
    return this.getNumberAttribute('appstat494');
  }
  public set appstat494(value: number) {
    this._appstat494 = value;
  }
  public resetAppstat494() {
    this._appstat494 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat494Input() {
    return this._appstat494;
  }

  // appstat495 - computed: false, optional: true, required: false
  private _appstat495?: number; 
  public get appstat495() {
    return this.getNumberAttribute('appstat495');
  }
  public set appstat495(value: number) {
    this._appstat495 = value;
  }
  public resetAppstat495() {
    this._appstat495 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat495Input() {
    return this._appstat495;
  }

  // appstat496 - computed: false, optional: true, required: false
  private _appstat496?: number; 
  public get appstat496() {
    return this.getNumberAttribute('appstat496');
  }
  public set appstat496(value: number) {
    this._appstat496 = value;
  }
  public resetAppstat496() {
    this._appstat496 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat496Input() {
    return this._appstat496;
  }

  // appstat497 - computed: false, optional: true, required: false
  private _appstat497?: number; 
  public get appstat497() {
    return this.getNumberAttribute('appstat497');
  }
  public set appstat497(value: number) {
    this._appstat497 = value;
  }
  public resetAppstat497() {
    this._appstat497 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat497Input() {
    return this._appstat497;
  }

  // appstat498 - computed: false, optional: true, required: false
  private _appstat498?: number; 
  public get appstat498() {
    return this.getNumberAttribute('appstat498');
  }
  public set appstat498(value: number) {
    this._appstat498 = value;
  }
  public resetAppstat498() {
    this._appstat498 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat498Input() {
    return this._appstat498;
  }

  // appstat499 - computed: false, optional: true, required: false
  private _appstat499?: number; 
  public get appstat499() {
    return this.getNumberAttribute('appstat499');
  }
  public set appstat499(value: number) {
    this._appstat499 = value;
  }
  public resetAppstat499() {
    this._appstat499 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat499Input() {
    return this._appstat499;
  }

  // appstat5 - computed: false, optional: true, required: false
  private _appstat5?: number; 
  public get appstat5() {
    return this.getNumberAttribute('appstat5');
  }
  public set appstat5(value: number) {
    this._appstat5 = value;
  }
  public resetAppstat5() {
    this._appstat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat5Input() {
    return this._appstat5;
  }

  // appstat50 - computed: false, optional: true, required: false
  private _appstat50?: number; 
  public get appstat50() {
    return this.getNumberAttribute('appstat50');
  }
  public set appstat50(value: number) {
    this._appstat50 = value;
  }
  public resetAppstat50() {
    this._appstat50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat50Input() {
    return this._appstat50;
  }

  // appstat500 - computed: false, optional: true, required: false
  private _appstat500?: number; 
  public get appstat500() {
    return this.getNumberAttribute('appstat500');
  }
  public set appstat500(value: number) {
    this._appstat500 = value;
  }
  public resetAppstat500() {
    this._appstat500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat500Input() {
    return this._appstat500;
  }

  // appstat501 - computed: false, optional: true, required: false
  private _appstat501?: number; 
  public get appstat501() {
    return this.getNumberAttribute('appstat501');
  }
  public set appstat501(value: number) {
    this._appstat501 = value;
  }
  public resetAppstat501() {
    this._appstat501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat501Input() {
    return this._appstat501;
  }

  // appstat502 - computed: false, optional: true, required: false
  private _appstat502?: number; 
  public get appstat502() {
    return this.getNumberAttribute('appstat502');
  }
  public set appstat502(value: number) {
    this._appstat502 = value;
  }
  public resetAppstat502() {
    this._appstat502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat502Input() {
    return this._appstat502;
  }

  // appstat503 - computed: false, optional: true, required: false
  private _appstat503?: number; 
  public get appstat503() {
    return this.getNumberAttribute('appstat503');
  }
  public set appstat503(value: number) {
    this._appstat503 = value;
  }
  public resetAppstat503() {
    this._appstat503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat503Input() {
    return this._appstat503;
  }

  // appstat504 - computed: false, optional: true, required: false
  private _appstat504?: number; 
  public get appstat504() {
    return this.getNumberAttribute('appstat504');
  }
  public set appstat504(value: number) {
    this._appstat504 = value;
  }
  public resetAppstat504() {
    this._appstat504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat504Input() {
    return this._appstat504;
  }

  // appstat505 - computed: false, optional: true, required: false
  private _appstat505?: number; 
  public get appstat505() {
    return this.getNumberAttribute('appstat505');
  }
  public set appstat505(value: number) {
    this._appstat505 = value;
  }
  public resetAppstat505() {
    this._appstat505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat505Input() {
    return this._appstat505;
  }

  // appstat506 - computed: false, optional: true, required: false
  private _appstat506?: number; 
  public get appstat506() {
    return this.getNumberAttribute('appstat506');
  }
  public set appstat506(value: number) {
    this._appstat506 = value;
  }
  public resetAppstat506() {
    this._appstat506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat506Input() {
    return this._appstat506;
  }

  // appstat507 - computed: false, optional: true, required: false
  private _appstat507?: number; 
  public get appstat507() {
    return this.getNumberAttribute('appstat507');
  }
  public set appstat507(value: number) {
    this._appstat507 = value;
  }
  public resetAppstat507() {
    this._appstat507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat507Input() {
    return this._appstat507;
  }

  // appstat508 - computed: false, optional: true, required: false
  private _appstat508?: number; 
  public get appstat508() {
    return this.getNumberAttribute('appstat508');
  }
  public set appstat508(value: number) {
    this._appstat508 = value;
  }
  public resetAppstat508() {
    this._appstat508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat508Input() {
    return this._appstat508;
  }

  // appstat509 - computed: false, optional: true, required: false
  private _appstat509?: number; 
  public get appstat509() {
    return this.getNumberAttribute('appstat509');
  }
  public set appstat509(value: number) {
    this._appstat509 = value;
  }
  public resetAppstat509() {
    this._appstat509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat509Input() {
    return this._appstat509;
  }

  // appstat51 - computed: false, optional: true, required: false
  private _appstat51?: number; 
  public get appstat51() {
    return this.getNumberAttribute('appstat51');
  }
  public set appstat51(value: number) {
    this._appstat51 = value;
  }
  public resetAppstat51() {
    this._appstat51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat51Input() {
    return this._appstat51;
  }

  // appstat510 - computed: false, optional: true, required: false
  private _appstat510?: number; 
  public get appstat510() {
    return this.getNumberAttribute('appstat510');
  }
  public set appstat510(value: number) {
    this._appstat510 = value;
  }
  public resetAppstat510() {
    this._appstat510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat510Input() {
    return this._appstat510;
  }

  // appstat511 - computed: false, optional: true, required: false
  private _appstat511?: number; 
  public get appstat511() {
    return this.getNumberAttribute('appstat511');
  }
  public set appstat511(value: number) {
    this._appstat511 = value;
  }
  public resetAppstat511() {
    this._appstat511 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat511Input() {
    return this._appstat511;
  }

  // appstat52 - computed: false, optional: true, required: false
  private _appstat52?: number; 
  public get appstat52() {
    return this.getNumberAttribute('appstat52');
  }
  public set appstat52(value: number) {
    this._appstat52 = value;
  }
  public resetAppstat52() {
    this._appstat52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat52Input() {
    return this._appstat52;
  }

  // appstat53 - computed: false, optional: true, required: false
  private _appstat53?: number; 
  public get appstat53() {
    return this.getNumberAttribute('appstat53');
  }
  public set appstat53(value: number) {
    this._appstat53 = value;
  }
  public resetAppstat53() {
    this._appstat53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat53Input() {
    return this._appstat53;
  }

  // appstat54 - computed: false, optional: true, required: false
  private _appstat54?: number; 
  public get appstat54() {
    return this.getNumberAttribute('appstat54');
  }
  public set appstat54(value: number) {
    this._appstat54 = value;
  }
  public resetAppstat54() {
    this._appstat54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat54Input() {
    return this._appstat54;
  }

  // appstat55 - computed: false, optional: true, required: false
  private _appstat55?: number; 
  public get appstat55() {
    return this.getNumberAttribute('appstat55');
  }
  public set appstat55(value: number) {
    this._appstat55 = value;
  }
  public resetAppstat55() {
    this._appstat55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat55Input() {
    return this._appstat55;
  }

  // appstat56 - computed: false, optional: true, required: false
  private _appstat56?: number; 
  public get appstat56() {
    return this.getNumberAttribute('appstat56');
  }
  public set appstat56(value: number) {
    this._appstat56 = value;
  }
  public resetAppstat56() {
    this._appstat56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat56Input() {
    return this._appstat56;
  }

  // appstat57 - computed: false, optional: true, required: false
  private _appstat57?: number; 
  public get appstat57() {
    return this.getNumberAttribute('appstat57');
  }
  public set appstat57(value: number) {
    this._appstat57 = value;
  }
  public resetAppstat57() {
    this._appstat57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat57Input() {
    return this._appstat57;
  }

  // appstat58 - computed: false, optional: true, required: false
  private _appstat58?: number; 
  public get appstat58() {
    return this.getNumberAttribute('appstat58');
  }
  public set appstat58(value: number) {
    this._appstat58 = value;
  }
  public resetAppstat58() {
    this._appstat58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat58Input() {
    return this._appstat58;
  }

  // appstat59 - computed: false, optional: true, required: false
  private _appstat59?: number; 
  public get appstat59() {
    return this.getNumberAttribute('appstat59');
  }
  public set appstat59(value: number) {
    this._appstat59 = value;
  }
  public resetAppstat59() {
    this._appstat59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat59Input() {
    return this._appstat59;
  }

  // appstat6 - computed: false, optional: true, required: false
  private _appstat6?: number; 
  public get appstat6() {
    return this.getNumberAttribute('appstat6');
  }
  public set appstat6(value: number) {
    this._appstat6 = value;
  }
  public resetAppstat6() {
    this._appstat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat6Input() {
    return this._appstat6;
  }

  // appstat60 - computed: false, optional: true, required: false
  private _appstat60?: number; 
  public get appstat60() {
    return this.getNumberAttribute('appstat60');
  }
  public set appstat60(value: number) {
    this._appstat60 = value;
  }
  public resetAppstat60() {
    this._appstat60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat60Input() {
    return this._appstat60;
  }

  // appstat61 - computed: false, optional: true, required: false
  private _appstat61?: number; 
  public get appstat61() {
    return this.getNumberAttribute('appstat61');
  }
  public set appstat61(value: number) {
    this._appstat61 = value;
  }
  public resetAppstat61() {
    this._appstat61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat61Input() {
    return this._appstat61;
  }

  // appstat62 - computed: false, optional: true, required: false
  private _appstat62?: number; 
  public get appstat62() {
    return this.getNumberAttribute('appstat62');
  }
  public set appstat62(value: number) {
    this._appstat62 = value;
  }
  public resetAppstat62() {
    this._appstat62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat62Input() {
    return this._appstat62;
  }

  // appstat63 - computed: false, optional: true, required: false
  private _appstat63?: number; 
  public get appstat63() {
    return this.getNumberAttribute('appstat63');
  }
  public set appstat63(value: number) {
    this._appstat63 = value;
  }
  public resetAppstat63() {
    this._appstat63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat63Input() {
    return this._appstat63;
  }

  // appstat64 - computed: false, optional: true, required: false
  private _appstat64?: number; 
  public get appstat64() {
    return this.getNumberAttribute('appstat64');
  }
  public set appstat64(value: number) {
    this._appstat64 = value;
  }
  public resetAppstat64() {
    this._appstat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat64Input() {
    return this._appstat64;
  }

  // appstat65 - computed: false, optional: true, required: false
  private _appstat65?: number; 
  public get appstat65() {
    return this.getNumberAttribute('appstat65');
  }
  public set appstat65(value: number) {
    this._appstat65 = value;
  }
  public resetAppstat65() {
    this._appstat65 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat65Input() {
    return this._appstat65;
  }

  // appstat66 - computed: false, optional: true, required: false
  private _appstat66?: number; 
  public get appstat66() {
    return this.getNumberAttribute('appstat66');
  }
  public set appstat66(value: number) {
    this._appstat66 = value;
  }
  public resetAppstat66() {
    this._appstat66 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat66Input() {
    return this._appstat66;
  }

  // appstat67 - computed: false, optional: true, required: false
  private _appstat67?: number; 
  public get appstat67() {
    return this.getNumberAttribute('appstat67');
  }
  public set appstat67(value: number) {
    this._appstat67 = value;
  }
  public resetAppstat67() {
    this._appstat67 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat67Input() {
    return this._appstat67;
  }

  // appstat68 - computed: false, optional: true, required: false
  private _appstat68?: number; 
  public get appstat68() {
    return this.getNumberAttribute('appstat68');
  }
  public set appstat68(value: number) {
    this._appstat68 = value;
  }
  public resetAppstat68() {
    this._appstat68 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat68Input() {
    return this._appstat68;
  }

  // appstat69 - computed: false, optional: true, required: false
  private _appstat69?: number; 
  public get appstat69() {
    return this.getNumberAttribute('appstat69');
  }
  public set appstat69(value: number) {
    this._appstat69 = value;
  }
  public resetAppstat69() {
    this._appstat69 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat69Input() {
    return this._appstat69;
  }

  // appstat7 - computed: false, optional: true, required: false
  private _appstat7?: number; 
  public get appstat7() {
    return this.getNumberAttribute('appstat7');
  }
  public set appstat7(value: number) {
    this._appstat7 = value;
  }
  public resetAppstat7() {
    this._appstat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat7Input() {
    return this._appstat7;
  }

  // appstat70 - computed: false, optional: true, required: false
  private _appstat70?: number; 
  public get appstat70() {
    return this.getNumberAttribute('appstat70');
  }
  public set appstat70(value: number) {
    this._appstat70 = value;
  }
  public resetAppstat70() {
    this._appstat70 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat70Input() {
    return this._appstat70;
  }

  // appstat71 - computed: false, optional: true, required: false
  private _appstat71?: number; 
  public get appstat71() {
    return this.getNumberAttribute('appstat71');
  }
  public set appstat71(value: number) {
    this._appstat71 = value;
  }
  public resetAppstat71() {
    this._appstat71 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat71Input() {
    return this._appstat71;
  }

  // appstat72 - computed: false, optional: true, required: false
  private _appstat72?: number; 
  public get appstat72() {
    return this.getNumberAttribute('appstat72');
  }
  public set appstat72(value: number) {
    this._appstat72 = value;
  }
  public resetAppstat72() {
    this._appstat72 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat72Input() {
    return this._appstat72;
  }

  // appstat73 - computed: false, optional: true, required: false
  private _appstat73?: number; 
  public get appstat73() {
    return this.getNumberAttribute('appstat73');
  }
  public set appstat73(value: number) {
    this._appstat73 = value;
  }
  public resetAppstat73() {
    this._appstat73 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat73Input() {
    return this._appstat73;
  }

  // appstat74 - computed: false, optional: true, required: false
  private _appstat74?: number; 
  public get appstat74() {
    return this.getNumberAttribute('appstat74');
  }
  public set appstat74(value: number) {
    this._appstat74 = value;
  }
  public resetAppstat74() {
    this._appstat74 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat74Input() {
    return this._appstat74;
  }

  // appstat75 - computed: false, optional: true, required: false
  private _appstat75?: number; 
  public get appstat75() {
    return this.getNumberAttribute('appstat75');
  }
  public set appstat75(value: number) {
    this._appstat75 = value;
  }
  public resetAppstat75() {
    this._appstat75 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat75Input() {
    return this._appstat75;
  }

  // appstat76 - computed: false, optional: true, required: false
  private _appstat76?: number; 
  public get appstat76() {
    return this.getNumberAttribute('appstat76');
  }
  public set appstat76(value: number) {
    this._appstat76 = value;
  }
  public resetAppstat76() {
    this._appstat76 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat76Input() {
    return this._appstat76;
  }

  // appstat77 - computed: false, optional: true, required: false
  private _appstat77?: number; 
  public get appstat77() {
    return this.getNumberAttribute('appstat77');
  }
  public set appstat77(value: number) {
    this._appstat77 = value;
  }
  public resetAppstat77() {
    this._appstat77 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat77Input() {
    return this._appstat77;
  }

  // appstat78 - computed: false, optional: true, required: false
  private _appstat78?: number; 
  public get appstat78() {
    return this.getNumberAttribute('appstat78');
  }
  public set appstat78(value: number) {
    this._appstat78 = value;
  }
  public resetAppstat78() {
    this._appstat78 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat78Input() {
    return this._appstat78;
  }

  // appstat79 - computed: false, optional: true, required: false
  private _appstat79?: number; 
  public get appstat79() {
    return this.getNumberAttribute('appstat79');
  }
  public set appstat79(value: number) {
    this._appstat79 = value;
  }
  public resetAppstat79() {
    this._appstat79 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat79Input() {
    return this._appstat79;
  }

  // appstat8 - computed: false, optional: true, required: false
  private _appstat8?: number; 
  public get appstat8() {
    return this.getNumberAttribute('appstat8');
  }
  public set appstat8(value: number) {
    this._appstat8 = value;
  }
  public resetAppstat8() {
    this._appstat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat8Input() {
    return this._appstat8;
  }

  // appstat80 - computed: false, optional: true, required: false
  private _appstat80?: number; 
  public get appstat80() {
    return this.getNumberAttribute('appstat80');
  }
  public set appstat80(value: number) {
    this._appstat80 = value;
  }
  public resetAppstat80() {
    this._appstat80 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat80Input() {
    return this._appstat80;
  }

  // appstat81 - computed: false, optional: true, required: false
  private _appstat81?: number; 
  public get appstat81() {
    return this.getNumberAttribute('appstat81');
  }
  public set appstat81(value: number) {
    this._appstat81 = value;
  }
  public resetAppstat81() {
    this._appstat81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat81Input() {
    return this._appstat81;
  }

  // appstat82 - computed: false, optional: true, required: false
  private _appstat82?: number; 
  public get appstat82() {
    return this.getNumberAttribute('appstat82');
  }
  public set appstat82(value: number) {
    this._appstat82 = value;
  }
  public resetAppstat82() {
    this._appstat82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat82Input() {
    return this._appstat82;
  }

  // appstat83 - computed: false, optional: true, required: false
  private _appstat83?: number; 
  public get appstat83() {
    return this.getNumberAttribute('appstat83');
  }
  public set appstat83(value: number) {
    this._appstat83 = value;
  }
  public resetAppstat83() {
    this._appstat83 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat83Input() {
    return this._appstat83;
  }

  // appstat84 - computed: false, optional: true, required: false
  private _appstat84?: number; 
  public get appstat84() {
    return this.getNumberAttribute('appstat84');
  }
  public set appstat84(value: number) {
    this._appstat84 = value;
  }
  public resetAppstat84() {
    this._appstat84 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat84Input() {
    return this._appstat84;
  }

  // appstat85 - computed: false, optional: true, required: false
  private _appstat85?: number; 
  public get appstat85() {
    return this.getNumberAttribute('appstat85');
  }
  public set appstat85(value: number) {
    this._appstat85 = value;
  }
  public resetAppstat85() {
    this._appstat85 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat85Input() {
    return this._appstat85;
  }

  // appstat86 - computed: false, optional: true, required: false
  private _appstat86?: number; 
  public get appstat86() {
    return this.getNumberAttribute('appstat86');
  }
  public set appstat86(value: number) {
    this._appstat86 = value;
  }
  public resetAppstat86() {
    this._appstat86 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat86Input() {
    return this._appstat86;
  }

  // appstat87 - computed: false, optional: true, required: false
  private _appstat87?: number; 
  public get appstat87() {
    return this.getNumberAttribute('appstat87');
  }
  public set appstat87(value: number) {
    this._appstat87 = value;
  }
  public resetAppstat87() {
    this._appstat87 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat87Input() {
    return this._appstat87;
  }

  // appstat88 - computed: false, optional: true, required: false
  private _appstat88?: number; 
  public get appstat88() {
    return this.getNumberAttribute('appstat88');
  }
  public set appstat88(value: number) {
    this._appstat88 = value;
  }
  public resetAppstat88() {
    this._appstat88 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat88Input() {
    return this._appstat88;
  }

  // appstat89 - computed: false, optional: true, required: false
  private _appstat89?: number; 
  public get appstat89() {
    return this.getNumberAttribute('appstat89');
  }
  public set appstat89(value: number) {
    this._appstat89 = value;
  }
  public resetAppstat89() {
    this._appstat89 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat89Input() {
    return this._appstat89;
  }

  // appstat9 - computed: false, optional: true, required: false
  private _appstat9?: number; 
  public get appstat9() {
    return this.getNumberAttribute('appstat9');
  }
  public set appstat9(value: number) {
    this._appstat9 = value;
  }
  public resetAppstat9() {
    this._appstat9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat9Input() {
    return this._appstat9;
  }

  // appstat90 - computed: false, optional: true, required: false
  private _appstat90?: number; 
  public get appstat90() {
    return this.getNumberAttribute('appstat90');
  }
  public set appstat90(value: number) {
    this._appstat90 = value;
  }
  public resetAppstat90() {
    this._appstat90 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat90Input() {
    return this._appstat90;
  }

  // appstat91 - computed: false, optional: true, required: false
  private _appstat91?: number; 
  public get appstat91() {
    return this.getNumberAttribute('appstat91');
  }
  public set appstat91(value: number) {
    this._appstat91 = value;
  }
  public resetAppstat91() {
    this._appstat91 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat91Input() {
    return this._appstat91;
  }

  // appstat92 - computed: false, optional: true, required: false
  private _appstat92?: number; 
  public get appstat92() {
    return this.getNumberAttribute('appstat92');
  }
  public set appstat92(value: number) {
    this._appstat92 = value;
  }
  public resetAppstat92() {
    this._appstat92 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat92Input() {
    return this._appstat92;
  }

  // appstat93 - computed: false, optional: true, required: false
  private _appstat93?: number; 
  public get appstat93() {
    return this.getNumberAttribute('appstat93');
  }
  public set appstat93(value: number) {
    this._appstat93 = value;
  }
  public resetAppstat93() {
    this._appstat93 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat93Input() {
    return this._appstat93;
  }

  // appstat94 - computed: false, optional: true, required: false
  private _appstat94?: number; 
  public get appstat94() {
    return this.getNumberAttribute('appstat94');
  }
  public set appstat94(value: number) {
    this._appstat94 = value;
  }
  public resetAppstat94() {
    this._appstat94 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat94Input() {
    return this._appstat94;
  }

  // appstat95 - computed: false, optional: true, required: false
  private _appstat95?: number; 
  public get appstat95() {
    return this.getNumberAttribute('appstat95');
  }
  public set appstat95(value: number) {
    this._appstat95 = value;
  }
  public resetAppstat95() {
    this._appstat95 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat95Input() {
    return this._appstat95;
  }

  // appstat96 - computed: false, optional: true, required: false
  private _appstat96?: number; 
  public get appstat96() {
    return this.getNumberAttribute('appstat96');
  }
  public set appstat96(value: number) {
    this._appstat96 = value;
  }
  public resetAppstat96() {
    this._appstat96 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat96Input() {
    return this._appstat96;
  }

  // appstat97 - computed: false, optional: true, required: false
  private _appstat97?: number; 
  public get appstat97() {
    return this.getNumberAttribute('appstat97');
  }
  public set appstat97(value: number) {
    this._appstat97 = value;
  }
  public resetAppstat97() {
    this._appstat97 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat97Input() {
    return this._appstat97;
  }

  // appstat98 - computed: false, optional: true, required: false
  private _appstat98?: number; 
  public get appstat98() {
    return this.getNumberAttribute('appstat98');
  }
  public set appstat98(value: number) {
    this._appstat98 = value;
  }
  public resetAppstat98() {
    this._appstat98 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat98Input() {
    return this._appstat98;
  }

  // appstat99 - computed: false, optional: true, required: false
  private _appstat99?: number; 
  public get appstat99() {
    return this.getNumberAttribute('appstat99');
  }
  public set appstat99(value: number) {
    this._appstat99 = value;
  }
  public resetAppstat99() {
    this._appstat99 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstat99Input() {
    return this._appstat99;
  }
}
export interface DataThunderRuleSetStatsApp {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsAppStats;
}

export function dataThunderRuleSetStatsAppToTerraform(struct?: DataThunderRuleSetStatsAppOutputReference | DataThunderRuleSetStatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderRuleSetStatsAppStatsToTerraform(struct!.stats),
  }
}


export function dataThunderRuleSetStatsAppToHclTerraform(struct?: DataThunderRuleSetStatsAppOutputReference | DataThunderRuleSetStatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderRuleSetStatsAppStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetStatsAppStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsAppStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsAppStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderRuleSetStatsRuleListStats {
  /**
  * Active ICMP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#active_session_icmp DataThunderRuleSetStats#active_session_icmp}
  */
  readonly activeSessionIcmp?: number;
  /**
  * Active other protocol session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#active_session_other DataThunderRuleSetStats#active_session_other}
  */
  readonly activeSessionOther?: number;
  /**
  * Active SCTP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#active_session_sctp DataThunderRuleSetStats#active_session_sctp}
  */
  readonly activeSessionSctp?: number;
  /**
  * Active TCP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#active_session_tcp DataThunderRuleSetStats#active_session_tcp}
  */
  readonly activeSessionTcp?: number;
  /**
  * Active UDP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#active_session_udp DataThunderRuleSetStats#active_session_udp}
  */
  readonly activeSessionUdp?: number;
  /**
  * Denied bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#deny_bytes DataThunderRuleSetStats#deny_bytes}
  */
  readonly denyBytes?: number;
  /**
  * Denied packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#deny_packets DataThunderRuleSetStats#deny_packets}
  */
  readonly denyPackets?: number;
  /**
  * Hit counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#hit_count DataThunderRuleSetStats#hit_count}
  */
  readonly hitCount?: number;
  /**
  * Last hit counts timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#hitcount_timestamp DataThunderRuleSetStats#hitcount_timestamp}
  */
  readonly hitcountTimestamp?: number;
  /**
  * Permitted bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#permit_bytes DataThunderRuleSetStats#permit_bytes}
  */
  readonly permitBytes?: number;
  /**
  * Permitted packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#permit_packets DataThunderRuleSetStats#permit_packets}
  */
  readonly permitPackets?: number;
  /**
  * Rate Limit Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#rate_limit_drops DataThunderRuleSetStats#rate_limit_drops}
  */
  readonly rateLimitDrops?: number;
  /**
  * Reset bytes counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#reset_bytes DataThunderRuleSetStats#reset_bytes}
  */
  readonly resetBytes?: number;
  /**
  * Reset packets counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#reset_packets DataThunderRuleSetStats#reset_packets}
  */
  readonly resetPackets?: number;
  /**
  * ICMP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#session_icmp DataThunderRuleSetStats#session_icmp}
  */
  readonly sessionIcmp?: number;
  /**
  * Other protocol session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#session_other DataThunderRuleSetStats#session_other}
  */
  readonly sessionOther?: number;
  /**
  * SCTP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#session_sctp DataThunderRuleSetStats#session_sctp}
  */
  readonly sessionSctp?: number;
  /**
  * TCP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#session_tcp DataThunderRuleSetStats#session_tcp}
  */
  readonly sessionTcp?: number;
  /**
  * UDP session counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#session_udp DataThunderRuleSetStats#session_udp}
  */
  readonly sessionUdp?: number;
}

export function dataThunderRuleSetStatsRuleListStatsToTerraform(struct?: DataThunderRuleSetStatsRuleListStatsOutputReference | DataThunderRuleSetStatsRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_session_icmp: cdktf.numberToTerraform(struct!.activeSessionIcmp),
    active_session_other: cdktf.numberToTerraform(struct!.activeSessionOther),
    active_session_sctp: cdktf.numberToTerraform(struct!.activeSessionSctp),
    active_session_tcp: cdktf.numberToTerraform(struct!.activeSessionTcp),
    active_session_udp: cdktf.numberToTerraform(struct!.activeSessionUdp),
    deny_bytes: cdktf.numberToTerraform(struct!.denyBytes),
    deny_packets: cdktf.numberToTerraform(struct!.denyPackets),
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
    hitcount_timestamp: cdktf.numberToTerraform(struct!.hitcountTimestamp),
    permit_bytes: cdktf.numberToTerraform(struct!.permitBytes),
    permit_packets: cdktf.numberToTerraform(struct!.permitPackets),
    rate_limit_drops: cdktf.numberToTerraform(struct!.rateLimitDrops),
    reset_bytes: cdktf.numberToTerraform(struct!.resetBytes),
    reset_packets: cdktf.numberToTerraform(struct!.resetPackets),
    session_icmp: cdktf.numberToTerraform(struct!.sessionIcmp),
    session_other: cdktf.numberToTerraform(struct!.sessionOther),
    session_sctp: cdktf.numberToTerraform(struct!.sessionSctp),
    session_tcp: cdktf.numberToTerraform(struct!.sessionTcp),
    session_udp: cdktf.numberToTerraform(struct!.sessionUdp),
  }
}


export function dataThunderRuleSetStatsRuleListStatsToHclTerraform(struct?: DataThunderRuleSetStatsRuleListStatsOutputReference | DataThunderRuleSetStatsRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_session_icmp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_other: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_sctp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionSctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_tcp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_session_udp: {
      value: cdktf.numberToHclTerraform(struct!.activeSessionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_bytes: {
      value: cdktf.numberToHclTerraform(struct!.denyBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packets: {
      value: cdktf.numberToHclTerraform(struct!.denyPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hitcount_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.hitcountTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.permitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packets: {
      value: cdktf.numberToHclTerraform(struct!.permitPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_drops: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_bytes: {
      value: cdktf.numberToHclTerraform(struct!.resetBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_packets: {
      value: cdktf.numberToHclTerraform(struct!.resetPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_icmp: {
      value: cdktf.numberToHclTerraform(struct!.sessionIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_other: {
      value: cdktf.numberToHclTerraform(struct!.sessionOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_sctp: {
      value: cdktf.numberToHclTerraform(struct!.sessionSctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sessionTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_udp: {
      value: cdktf.numberToHclTerraform(struct!.sessionUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsRuleListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsRuleListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSessionIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionIcmp = this._activeSessionIcmp;
    }
    if (this._activeSessionOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionOther = this._activeSessionOther;
    }
    if (this._activeSessionSctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionSctp = this._activeSessionSctp;
    }
    if (this._activeSessionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionTcp = this._activeSessionTcp;
    }
    if (this._activeSessionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSessionUdp = this._activeSessionUdp;
    }
    if (this._denyBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBytes = this._denyBytes;
    }
    if (this._denyPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPackets = this._denyPackets;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._hitcountTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitcountTimestamp = this._hitcountTimestamp;
    }
    if (this._permitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitBytes = this._permitBytes;
    }
    if (this._permitPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPackets = this._permitPackets;
    }
    if (this._rateLimitDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDrops = this._rateLimitDrops;
    }
    if (this._resetBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetBytes = this._resetBytes;
    }
    if (this._resetPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetPackets = this._resetPackets;
    }
    if (this._sessionIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIcmp = this._sessionIcmp;
    }
    if (this._sessionOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionOther = this._sessionOther;
    }
    if (this._sessionSctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSctp = this._sessionSctp;
    }
    if (this._sessionTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTcp = this._sessionTcp;
    }
    if (this._sessionUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUdp = this._sessionUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsRuleListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeSessionIcmp = undefined;
      this._activeSessionOther = undefined;
      this._activeSessionSctp = undefined;
      this._activeSessionTcp = undefined;
      this._activeSessionUdp = undefined;
      this._denyBytes = undefined;
      this._denyPackets = undefined;
      this._hitCount = undefined;
      this._hitcountTimestamp = undefined;
      this._permitBytes = undefined;
      this._permitPackets = undefined;
      this._rateLimitDrops = undefined;
      this._resetBytes = undefined;
      this._resetPackets = undefined;
      this._sessionIcmp = undefined;
      this._sessionOther = undefined;
      this._sessionSctp = undefined;
      this._sessionTcp = undefined;
      this._sessionUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeSessionIcmp = value.activeSessionIcmp;
      this._activeSessionOther = value.activeSessionOther;
      this._activeSessionSctp = value.activeSessionSctp;
      this._activeSessionTcp = value.activeSessionTcp;
      this._activeSessionUdp = value.activeSessionUdp;
      this._denyBytes = value.denyBytes;
      this._denyPackets = value.denyPackets;
      this._hitCount = value.hitCount;
      this._hitcountTimestamp = value.hitcountTimestamp;
      this._permitBytes = value.permitBytes;
      this._permitPackets = value.permitPackets;
      this._rateLimitDrops = value.rateLimitDrops;
      this._resetBytes = value.resetBytes;
      this._resetPackets = value.resetPackets;
      this._sessionIcmp = value.sessionIcmp;
      this._sessionOther = value.sessionOther;
      this._sessionSctp = value.sessionSctp;
      this._sessionTcp = value.sessionTcp;
      this._sessionUdp = value.sessionUdp;
    }
  }

  // active_session_icmp - computed: false, optional: true, required: false
  private _activeSessionIcmp?: number; 
  public get activeSessionIcmp() {
    return this.getNumberAttribute('active_session_icmp');
  }
  public set activeSessionIcmp(value: number) {
    this._activeSessionIcmp = value;
  }
  public resetActiveSessionIcmp() {
    this._activeSessionIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionIcmpInput() {
    return this._activeSessionIcmp;
  }

  // active_session_other - computed: false, optional: true, required: false
  private _activeSessionOther?: number; 
  public get activeSessionOther() {
    return this.getNumberAttribute('active_session_other');
  }
  public set activeSessionOther(value: number) {
    this._activeSessionOther = value;
  }
  public resetActiveSessionOther() {
    this._activeSessionOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionOtherInput() {
    return this._activeSessionOther;
  }

  // active_session_sctp - computed: false, optional: true, required: false
  private _activeSessionSctp?: number; 
  public get activeSessionSctp() {
    return this.getNumberAttribute('active_session_sctp');
  }
  public set activeSessionSctp(value: number) {
    this._activeSessionSctp = value;
  }
  public resetActiveSessionSctp() {
    this._activeSessionSctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionSctpInput() {
    return this._activeSessionSctp;
  }

  // active_session_tcp - computed: false, optional: true, required: false
  private _activeSessionTcp?: number; 
  public get activeSessionTcp() {
    return this.getNumberAttribute('active_session_tcp');
  }
  public set activeSessionTcp(value: number) {
    this._activeSessionTcp = value;
  }
  public resetActiveSessionTcp() {
    this._activeSessionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionTcpInput() {
    return this._activeSessionTcp;
  }

  // active_session_udp - computed: false, optional: true, required: false
  private _activeSessionUdp?: number; 
  public get activeSessionUdp() {
    return this.getNumberAttribute('active_session_udp');
  }
  public set activeSessionUdp(value: number) {
    this._activeSessionUdp = value;
  }
  public resetActiveSessionUdp() {
    this._activeSessionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionUdpInput() {
    return this._activeSessionUdp;
  }

  // deny_bytes - computed: false, optional: true, required: false
  private _denyBytes?: number; 
  public get denyBytes() {
    return this.getNumberAttribute('deny_bytes');
  }
  public set denyBytes(value: number) {
    this._denyBytes = value;
  }
  public resetDenyBytes() {
    this._denyBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBytesInput() {
    return this._denyBytes;
  }

  // deny_packets - computed: false, optional: true, required: false
  private _denyPackets?: number; 
  public get denyPackets() {
    return this.getNumberAttribute('deny_packets');
  }
  public set denyPackets(value: number) {
    this._denyPackets = value;
  }
  public resetDenyPackets() {
    this._denyPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketsInput() {
    return this._denyPackets;
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // hitcount_timestamp - computed: false, optional: true, required: false
  private _hitcountTimestamp?: number; 
  public get hitcountTimestamp() {
    return this.getNumberAttribute('hitcount_timestamp');
  }
  public set hitcountTimestamp(value: number) {
    this._hitcountTimestamp = value;
  }
  public resetHitcountTimestamp() {
    this._hitcountTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitcountTimestampInput() {
    return this._hitcountTimestamp;
  }

  // permit_bytes - computed: false, optional: true, required: false
  private _permitBytes?: number; 
  public get permitBytes() {
    return this.getNumberAttribute('permit_bytes');
  }
  public set permitBytes(value: number) {
    this._permitBytes = value;
  }
  public resetPermitBytes() {
    this._permitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitBytesInput() {
    return this._permitBytes;
  }

  // permit_packets - computed: false, optional: true, required: false
  private _permitPackets?: number; 
  public get permitPackets() {
    return this.getNumberAttribute('permit_packets');
  }
  public set permitPackets(value: number) {
    this._permitPackets = value;
  }
  public resetPermitPackets() {
    this._permitPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketsInput() {
    return this._permitPackets;
  }

  // rate_limit_drops - computed: false, optional: true, required: false
  private _rateLimitDrops?: number; 
  public get rateLimitDrops() {
    return this.getNumberAttribute('rate_limit_drops');
  }
  public set rateLimitDrops(value: number) {
    this._rateLimitDrops = value;
  }
  public resetRateLimitDrops() {
    this._rateLimitDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDropsInput() {
    return this._rateLimitDrops;
  }

  // reset_bytes - computed: false, optional: true, required: false
  private _resetBytes?: number; 
  public get resetBytes() {
    return this.getNumberAttribute('reset_bytes');
  }
  public set resetBytes(value: number) {
    this._resetBytes = value;
  }
  public resetResetBytes() {
    this._resetBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetBytesInput() {
    return this._resetBytes;
  }

  // reset_packets - computed: false, optional: true, required: false
  private _resetPackets?: number; 
  public get resetPackets() {
    return this.getNumberAttribute('reset_packets');
  }
  public set resetPackets(value: number) {
    this._resetPackets = value;
  }
  public resetResetPackets() {
    this._resetPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPacketsInput() {
    return this._resetPackets;
  }

  // session_icmp - computed: false, optional: true, required: false
  private _sessionIcmp?: number; 
  public get sessionIcmp() {
    return this.getNumberAttribute('session_icmp');
  }
  public set sessionIcmp(value: number) {
    this._sessionIcmp = value;
  }
  public resetSessionIcmp() {
    this._sessionIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIcmpInput() {
    return this._sessionIcmp;
  }

  // session_other - computed: false, optional: true, required: false
  private _sessionOther?: number; 
  public get sessionOther() {
    return this.getNumberAttribute('session_other');
  }
  public set sessionOther(value: number) {
    this._sessionOther = value;
  }
  public resetSessionOther() {
    this._sessionOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionOtherInput() {
    return this._sessionOther;
  }

  // session_sctp - computed: false, optional: true, required: false
  private _sessionSctp?: number; 
  public get sessionSctp() {
    return this.getNumberAttribute('session_sctp');
  }
  public set sessionSctp(value: number) {
    this._sessionSctp = value;
  }
  public resetSessionSctp() {
    this._sessionSctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSctpInput() {
    return this._sessionSctp;
  }

  // session_tcp - computed: false, optional: true, required: false
  private _sessionTcp?: number; 
  public get sessionTcp() {
    return this.getNumberAttribute('session_tcp');
  }
  public set sessionTcp(value: number) {
    this._sessionTcp = value;
  }
  public resetSessionTcp() {
    this._sessionTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTcpInput() {
    return this._sessionTcp;
  }

  // session_udp - computed: false, optional: true, required: false
  private _sessionUdp?: number; 
  public get sessionUdp() {
    return this.getNumberAttribute('session_udp');
  }
  public set sessionUdp(value: number) {
    this._sessionUdp = value;
  }
  public resetSessionUdp() {
    this._sessionUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUdpInput() {
    return this._sessionUdp;
  }
}
export interface DataThunderRuleSetStatsRuleListStruct {
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#name DataThunderRuleSetStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsRuleListStats;
}

export function dataThunderRuleSetStatsRuleListStructToTerraform(struct?: DataThunderRuleSetStatsRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderRuleSetStatsRuleListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderRuleSetStatsRuleListStructToHclTerraform(struct?: DataThunderRuleSetStatsRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderRuleSetStatsRuleListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetStatsRuleListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderRuleSetStatsRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stats.internalValue = value.stats;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsRuleListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsRuleListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderRuleSetStatsRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderRuleSetStatsRuleListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderRuleSetStatsRuleListStructOutputReference {
    return new DataThunderRuleSetStatsRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRuleSetStatsRulesByZoneStats {
  /**
  * Entry for a10countergen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#dummy DataThunderRuleSetStats#dummy}
  */
  readonly dummy?: number;
}

export function dataThunderRuleSetStatsRulesByZoneStatsToTerraform(struct?: DataThunderRuleSetStatsRulesByZoneStatsOutputReference | DataThunderRuleSetStatsRulesByZoneStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dummy: cdktf.numberToTerraform(struct!.dummy),
  }
}


export function dataThunderRuleSetStatsRulesByZoneStatsToHclTerraform(struct?: DataThunderRuleSetStatsRulesByZoneStatsOutputReference | DataThunderRuleSetStatsRulesByZoneStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dummy: {
      value: cdktf.numberToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsRulesByZoneStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsRulesByZoneStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsRulesByZoneStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dummy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dummy = value.dummy;
    }
  }

  // dummy - computed: false, optional: true, required: false
  private _dummy?: number; 
  public get dummy() {
    return this.getNumberAttribute('dummy');
  }
  public set dummy(value: number) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }
}
export interface DataThunderRuleSetStatsRulesByZone {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsRulesByZoneStats;
}

export function dataThunderRuleSetStatsRulesByZoneToTerraform(struct?: DataThunderRuleSetStatsRulesByZoneOutputReference | DataThunderRuleSetStatsRulesByZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderRuleSetStatsRulesByZoneStatsToTerraform(struct!.stats),
  }
}


export function dataThunderRuleSetStatsRulesByZoneToHclTerraform(struct?: DataThunderRuleSetStatsRulesByZoneOutputReference | DataThunderRuleSetStatsRulesByZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderRuleSetStatsRulesByZoneStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetStatsRulesByZoneStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsRulesByZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsRulesByZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsRulesByZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsRulesByZoneStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsRulesByZoneStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderRuleSetStatsStats {
  /**
  * Denied counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#deny DataThunderRuleSetStats#deny}
  */
  readonly deny?: number;
  /**
  * Permitted counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#permit DataThunderRuleSetStats#permit}
  */
  readonly permit?: number;
  /**
  * Reset counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#reset DataThunderRuleSetStats#reset}
  */
  readonly reset?: number;
  /**
  * Unmatched drops counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#unmatched_drops DataThunderRuleSetStats#unmatched_drops}
  */
  readonly unmatchedDrops?: number;
}

export function dataThunderRuleSetStatsStatsToTerraform(struct?: DataThunderRuleSetStatsStatsOutputReference | DataThunderRuleSetStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    permit: cdktf.numberToTerraform(struct!.permit),
    reset: cdktf.numberToTerraform(struct!.reset),
    unmatched_drops: cdktf.numberToTerraform(struct!.unmatchedDrops),
  }
}


export function dataThunderRuleSetStatsStatsToHclTerraform(struct?: DataThunderRuleSetStatsStatsOutputReference | DataThunderRuleSetStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit: {
      value: cdktf.numberToHclTerraform(struct!.permit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset: {
      value: cdktf.numberToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unmatched_drops: {
      value: cdktf.numberToHclTerraform(struct!.unmatchedDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._permit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permit = this._permit;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._unmatchedDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmatchedDrops = this._unmatchedDrops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deny = undefined;
      this._permit = undefined;
      this._reset = undefined;
      this._unmatchedDrops = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deny = value.deny;
      this._permit = value.permit;
      this._reset = value.reset;
      this._unmatchedDrops = value.unmatchedDrops;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // permit - computed: false, optional: true, required: false
  private _permit?: number; 
  public get permit() {
    return this.getNumberAttribute('permit');
  }
  public set permit(value: number) {
    this._permit = value;
  }
  public resetPermit() {
    this._permit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInput() {
    return this._permit;
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // unmatched_drops - computed: false, optional: true, required: false
  private _unmatchedDrops?: number; 
  public get unmatchedDrops() {
    return this.getNumberAttribute('unmatched_drops');
  }
  public set unmatchedDrops(value: number) {
    this._unmatchedDrops = value;
  }
  public resetUnmatchedDrops() {
    this._unmatchedDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchedDropsInput() {
    return this._unmatchedDrops;
  }
}
export interface DataThunderRuleSetStatsTagStats {
  /**
  * counter app category stat 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat1 DataThunderRuleSetStats#categorystat1}
  */
  readonly categorystat1?: number;
  /**
  * counter app category stat 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat10 DataThunderRuleSetStats#categorystat10}
  */
  readonly categorystat10?: number;
  /**
  * counter app category stat 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat100 DataThunderRuleSetStats#categorystat100}
  */
  readonly categorystat100?: number;
  /**
  * counter app category stat 101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat101 DataThunderRuleSetStats#categorystat101}
  */
  readonly categorystat101?: number;
  /**
  * counter app category stat 102
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat102 DataThunderRuleSetStats#categorystat102}
  */
  readonly categorystat102?: number;
  /**
  * counter app category stat 103
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat103 DataThunderRuleSetStats#categorystat103}
  */
  readonly categorystat103?: number;
  /**
  * counter app category stat 104
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat104 DataThunderRuleSetStats#categorystat104}
  */
  readonly categorystat104?: number;
  /**
  * counter app category stat 105
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat105 DataThunderRuleSetStats#categorystat105}
  */
  readonly categorystat105?: number;
  /**
  * counter app category stat 106
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat106 DataThunderRuleSetStats#categorystat106}
  */
  readonly categorystat106?: number;
  /**
  * counter app category stat 107
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat107 DataThunderRuleSetStats#categorystat107}
  */
  readonly categorystat107?: number;
  /**
  * counter app category stat 108
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat108 DataThunderRuleSetStats#categorystat108}
  */
  readonly categorystat108?: number;
  /**
  * counter app category stat 109
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat109 DataThunderRuleSetStats#categorystat109}
  */
  readonly categorystat109?: number;
  /**
  * counter app category stat 11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat11 DataThunderRuleSetStats#categorystat11}
  */
  readonly categorystat11?: number;
  /**
  * counter app category stat 110
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat110 DataThunderRuleSetStats#categorystat110}
  */
  readonly categorystat110?: number;
  /**
  * counter app category stat 111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat111 DataThunderRuleSetStats#categorystat111}
  */
  readonly categorystat111?: number;
  /**
  * counter app category stat 112
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat112 DataThunderRuleSetStats#categorystat112}
  */
  readonly categorystat112?: number;
  /**
  * counter app category stat 113
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat113 DataThunderRuleSetStats#categorystat113}
  */
  readonly categorystat113?: number;
  /**
  * counter app category stat 114
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat114 DataThunderRuleSetStats#categorystat114}
  */
  readonly categorystat114?: number;
  /**
  * counter app category stat 115
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat115 DataThunderRuleSetStats#categorystat115}
  */
  readonly categorystat115?: number;
  /**
  * counter app category stat 116
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat116 DataThunderRuleSetStats#categorystat116}
  */
  readonly categorystat116?: number;
  /**
  * counter app category stat 117
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat117 DataThunderRuleSetStats#categorystat117}
  */
  readonly categorystat117?: number;
  /**
  * counter app category stat 118
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat118 DataThunderRuleSetStats#categorystat118}
  */
  readonly categorystat118?: number;
  /**
  * counter app category stat 119
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat119 DataThunderRuleSetStats#categorystat119}
  */
  readonly categorystat119?: number;
  /**
  * counter app category stat 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat12 DataThunderRuleSetStats#categorystat12}
  */
  readonly categorystat12?: number;
  /**
  * counter app category stat 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat120 DataThunderRuleSetStats#categorystat120}
  */
  readonly categorystat120?: number;
  /**
  * counter app category stat 121
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat121 DataThunderRuleSetStats#categorystat121}
  */
  readonly categorystat121?: number;
  /**
  * counter app category stat 122
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat122 DataThunderRuleSetStats#categorystat122}
  */
  readonly categorystat122?: number;
  /**
  * counter app category stat 123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat123 DataThunderRuleSetStats#categorystat123}
  */
  readonly categorystat123?: number;
  /**
  * counter app category stat 124
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat124 DataThunderRuleSetStats#categorystat124}
  */
  readonly categorystat124?: number;
  /**
  * counter app category stat 125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat125 DataThunderRuleSetStats#categorystat125}
  */
  readonly categorystat125?: number;
  /**
  * counter app category stat 126
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat126 DataThunderRuleSetStats#categorystat126}
  */
  readonly categorystat126?: number;
  /**
  * counter app category stat 127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat127 DataThunderRuleSetStats#categorystat127}
  */
  readonly categorystat127?: number;
  /**
  * counter app category stat 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat128 DataThunderRuleSetStats#categorystat128}
  */
  readonly categorystat128?: number;
  /**
  * counter app category stat 129
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat129 DataThunderRuleSetStats#categorystat129}
  */
  readonly categorystat129?: number;
  /**
  * counter app category stat 13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat13 DataThunderRuleSetStats#categorystat13}
  */
  readonly categorystat13?: number;
  /**
  * counter app category stat 130
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat130 DataThunderRuleSetStats#categorystat130}
  */
  readonly categorystat130?: number;
  /**
  * counter app category stat 131
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat131 DataThunderRuleSetStats#categorystat131}
  */
  readonly categorystat131?: number;
  /**
  * counter app category stat 132
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat132 DataThunderRuleSetStats#categorystat132}
  */
  readonly categorystat132?: number;
  /**
  * counter app category stat 133
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat133 DataThunderRuleSetStats#categorystat133}
  */
  readonly categorystat133?: number;
  /**
  * counter app category stat 134
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat134 DataThunderRuleSetStats#categorystat134}
  */
  readonly categorystat134?: number;
  /**
  * counter app category stat 135
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat135 DataThunderRuleSetStats#categorystat135}
  */
  readonly categorystat135?: number;
  /**
  * counter app category stat 136
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat136 DataThunderRuleSetStats#categorystat136}
  */
  readonly categorystat136?: number;
  /**
  * counter app category stat 137
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat137 DataThunderRuleSetStats#categorystat137}
  */
  readonly categorystat137?: number;
  /**
  * counter app category stat 138
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat138 DataThunderRuleSetStats#categorystat138}
  */
  readonly categorystat138?: number;
  /**
  * counter app category stat 139
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat139 DataThunderRuleSetStats#categorystat139}
  */
  readonly categorystat139?: number;
  /**
  * counter app category stat 14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat14 DataThunderRuleSetStats#categorystat14}
  */
  readonly categorystat14?: number;
  /**
  * counter app category stat 140
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat140 DataThunderRuleSetStats#categorystat140}
  */
  readonly categorystat140?: number;
  /**
  * counter app category stat 141
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat141 DataThunderRuleSetStats#categorystat141}
  */
  readonly categorystat141?: number;
  /**
  * counter app category stat 142
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat142 DataThunderRuleSetStats#categorystat142}
  */
  readonly categorystat142?: number;
  /**
  * counter app category stat 143
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat143 DataThunderRuleSetStats#categorystat143}
  */
  readonly categorystat143?: number;
  /**
  * counter app category stat 144
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat144 DataThunderRuleSetStats#categorystat144}
  */
  readonly categorystat144?: number;
  /**
  * counter app category stat 145
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat145 DataThunderRuleSetStats#categorystat145}
  */
  readonly categorystat145?: number;
  /**
  * counter app category stat 146
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat146 DataThunderRuleSetStats#categorystat146}
  */
  readonly categorystat146?: number;
  /**
  * counter app category stat 147
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat147 DataThunderRuleSetStats#categorystat147}
  */
  readonly categorystat147?: number;
  /**
  * counter app category stat 148
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat148 DataThunderRuleSetStats#categorystat148}
  */
  readonly categorystat148?: number;
  /**
  * counter app category stat 149
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat149 DataThunderRuleSetStats#categorystat149}
  */
  readonly categorystat149?: number;
  /**
  * counter app category stat 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat15 DataThunderRuleSetStats#categorystat15}
  */
  readonly categorystat15?: number;
  /**
  * counter app category stat 150
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat150 DataThunderRuleSetStats#categorystat150}
  */
  readonly categorystat150?: number;
  /**
  * counter app category stat 151
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat151 DataThunderRuleSetStats#categorystat151}
  */
  readonly categorystat151?: number;
  /**
  * counter app category stat 152
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat152 DataThunderRuleSetStats#categorystat152}
  */
  readonly categorystat152?: number;
  /**
  * counter app category stat 153
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat153 DataThunderRuleSetStats#categorystat153}
  */
  readonly categorystat153?: number;
  /**
  * counter app category stat 154
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat154 DataThunderRuleSetStats#categorystat154}
  */
  readonly categorystat154?: number;
  /**
  * counter app category stat 155
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat155 DataThunderRuleSetStats#categorystat155}
  */
  readonly categorystat155?: number;
  /**
  * counter app category stat 156
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat156 DataThunderRuleSetStats#categorystat156}
  */
  readonly categorystat156?: number;
  /**
  * counter app category stat 157
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat157 DataThunderRuleSetStats#categorystat157}
  */
  readonly categorystat157?: number;
  /**
  * counter app category stat 158
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat158 DataThunderRuleSetStats#categorystat158}
  */
  readonly categorystat158?: number;
  /**
  * counter app category stat 159
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat159 DataThunderRuleSetStats#categorystat159}
  */
  readonly categorystat159?: number;
  /**
  * counter app category stat 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat16 DataThunderRuleSetStats#categorystat16}
  */
  readonly categorystat16?: number;
  /**
  * counter app category stat 160
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat160 DataThunderRuleSetStats#categorystat160}
  */
  readonly categorystat160?: number;
  /**
  * counter app category stat 161
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat161 DataThunderRuleSetStats#categorystat161}
  */
  readonly categorystat161?: number;
  /**
  * counter app category stat 162
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat162 DataThunderRuleSetStats#categorystat162}
  */
  readonly categorystat162?: number;
  /**
  * counter app category stat 163
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat163 DataThunderRuleSetStats#categorystat163}
  */
  readonly categorystat163?: number;
  /**
  * counter app category stat 164
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat164 DataThunderRuleSetStats#categorystat164}
  */
  readonly categorystat164?: number;
  /**
  * counter app category stat 165
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat165 DataThunderRuleSetStats#categorystat165}
  */
  readonly categorystat165?: number;
  /**
  * counter app category stat 166
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat166 DataThunderRuleSetStats#categorystat166}
  */
  readonly categorystat166?: number;
  /**
  * counter app category stat 167
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat167 DataThunderRuleSetStats#categorystat167}
  */
  readonly categorystat167?: number;
  /**
  * counter app category stat 168
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat168 DataThunderRuleSetStats#categorystat168}
  */
  readonly categorystat168?: number;
  /**
  * counter app category stat 169
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat169 DataThunderRuleSetStats#categorystat169}
  */
  readonly categorystat169?: number;
  /**
  * counter app category stat 17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat17 DataThunderRuleSetStats#categorystat17}
  */
  readonly categorystat17?: number;
  /**
  * counter app category stat 170
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat170 DataThunderRuleSetStats#categorystat170}
  */
  readonly categorystat170?: number;
  /**
  * counter app category stat 171
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat171 DataThunderRuleSetStats#categorystat171}
  */
  readonly categorystat171?: number;
  /**
  * counter app category stat 172
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat172 DataThunderRuleSetStats#categorystat172}
  */
  readonly categorystat172?: number;
  /**
  * counter app category stat 173
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat173 DataThunderRuleSetStats#categorystat173}
  */
  readonly categorystat173?: number;
  /**
  * counter app category stat 174
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat174 DataThunderRuleSetStats#categorystat174}
  */
  readonly categorystat174?: number;
  /**
  * counter app category stat 175
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat175 DataThunderRuleSetStats#categorystat175}
  */
  readonly categorystat175?: number;
  /**
  * counter app category stat 176
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat176 DataThunderRuleSetStats#categorystat176}
  */
  readonly categorystat176?: number;
  /**
  * counter app category stat 177
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat177 DataThunderRuleSetStats#categorystat177}
  */
  readonly categorystat177?: number;
  /**
  * counter app category stat 178
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat178 DataThunderRuleSetStats#categorystat178}
  */
  readonly categorystat178?: number;
  /**
  * counter app category stat 179
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat179 DataThunderRuleSetStats#categorystat179}
  */
  readonly categorystat179?: number;
  /**
  * counter app category stat 18
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat18 DataThunderRuleSetStats#categorystat18}
  */
  readonly categorystat18?: number;
  /**
  * counter app category stat 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat180 DataThunderRuleSetStats#categorystat180}
  */
  readonly categorystat180?: number;
  /**
  * counter app category stat 181
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat181 DataThunderRuleSetStats#categorystat181}
  */
  readonly categorystat181?: number;
  /**
  * counter app category stat 182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat182 DataThunderRuleSetStats#categorystat182}
  */
  readonly categorystat182?: number;
  /**
  * counter app category stat 183
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat183 DataThunderRuleSetStats#categorystat183}
  */
  readonly categorystat183?: number;
  /**
  * counter app category stat 184
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat184 DataThunderRuleSetStats#categorystat184}
  */
  readonly categorystat184?: number;
  /**
  * counter app category stat 185
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat185 DataThunderRuleSetStats#categorystat185}
  */
  readonly categorystat185?: number;
  /**
  * counter app category stat 186
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat186 DataThunderRuleSetStats#categorystat186}
  */
  readonly categorystat186?: number;
  /**
  * counter app category stat 187
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat187 DataThunderRuleSetStats#categorystat187}
  */
  readonly categorystat187?: number;
  /**
  * counter app category stat 188
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat188 DataThunderRuleSetStats#categorystat188}
  */
  readonly categorystat188?: number;
  /**
  * counter app category stat 189
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat189 DataThunderRuleSetStats#categorystat189}
  */
  readonly categorystat189?: number;
  /**
  * counter app category stat 19
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat19 DataThunderRuleSetStats#categorystat19}
  */
  readonly categorystat19?: number;
  /**
  * counter app category stat 190
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat190 DataThunderRuleSetStats#categorystat190}
  */
  readonly categorystat190?: number;
  /**
  * counter app category stat 191
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat191 DataThunderRuleSetStats#categorystat191}
  */
  readonly categorystat191?: number;
  /**
  * counter app category stat 192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat192 DataThunderRuleSetStats#categorystat192}
  */
  readonly categorystat192?: number;
  /**
  * counter app category stat 193
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat193 DataThunderRuleSetStats#categorystat193}
  */
  readonly categorystat193?: number;
  /**
  * counter app category stat 194
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat194 DataThunderRuleSetStats#categorystat194}
  */
  readonly categorystat194?: number;
  /**
  * counter app category stat 195
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat195 DataThunderRuleSetStats#categorystat195}
  */
  readonly categorystat195?: number;
  /**
  * counter app category stat 196
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat196 DataThunderRuleSetStats#categorystat196}
  */
  readonly categorystat196?: number;
  /**
  * counter app category stat 197
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat197 DataThunderRuleSetStats#categorystat197}
  */
  readonly categorystat197?: number;
  /**
  * counter app category stat 198
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat198 DataThunderRuleSetStats#categorystat198}
  */
  readonly categorystat198?: number;
  /**
  * counter app category stat 199
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat199 DataThunderRuleSetStats#categorystat199}
  */
  readonly categorystat199?: number;
  /**
  * counter app category stat 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat2 DataThunderRuleSetStats#categorystat2}
  */
  readonly categorystat2?: number;
  /**
  * counter app category stat 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat20 DataThunderRuleSetStats#categorystat20}
  */
  readonly categorystat20?: number;
  /**
  * counter app category stat 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat200 DataThunderRuleSetStats#categorystat200}
  */
  readonly categorystat200?: number;
  /**
  * counter app category stat 201
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat201 DataThunderRuleSetStats#categorystat201}
  */
  readonly categorystat201?: number;
  /**
  * counter app category stat 202
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat202 DataThunderRuleSetStats#categorystat202}
  */
  readonly categorystat202?: number;
  /**
  * counter app category stat 203
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat203 DataThunderRuleSetStats#categorystat203}
  */
  readonly categorystat203?: number;
  /**
  * counter app category stat 204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat204 DataThunderRuleSetStats#categorystat204}
  */
  readonly categorystat204?: number;
  /**
  * counter app category stat 205
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat205 DataThunderRuleSetStats#categorystat205}
  */
  readonly categorystat205?: number;
  /**
  * counter app category stat 206
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat206 DataThunderRuleSetStats#categorystat206}
  */
  readonly categorystat206?: number;
  /**
  * counter app category stat 207
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat207 DataThunderRuleSetStats#categorystat207}
  */
  readonly categorystat207?: number;
  /**
  * counter app category stat 208
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat208 DataThunderRuleSetStats#categorystat208}
  */
  readonly categorystat208?: number;
  /**
  * counter app category stat 209
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat209 DataThunderRuleSetStats#categorystat209}
  */
  readonly categorystat209?: number;
  /**
  * counter app category stat 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat21 DataThunderRuleSetStats#categorystat21}
  */
  readonly categorystat21?: number;
  /**
  * counter app category stat 210
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat210 DataThunderRuleSetStats#categorystat210}
  */
  readonly categorystat210?: number;
  /**
  * counter app category stat 211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat211 DataThunderRuleSetStats#categorystat211}
  */
  readonly categorystat211?: number;
  /**
  * counter app category stat 212
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat212 DataThunderRuleSetStats#categorystat212}
  */
  readonly categorystat212?: number;
  /**
  * counter app category stat 213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat213 DataThunderRuleSetStats#categorystat213}
  */
  readonly categorystat213?: number;
  /**
  * counter app category stat 214
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat214 DataThunderRuleSetStats#categorystat214}
  */
  readonly categorystat214?: number;
  /**
  * counter app category stat 215
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat215 DataThunderRuleSetStats#categorystat215}
  */
  readonly categorystat215?: number;
  /**
  * counter app category stat 216
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat216 DataThunderRuleSetStats#categorystat216}
  */
  readonly categorystat216?: number;
  /**
  * counter app category stat 217
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat217 DataThunderRuleSetStats#categorystat217}
  */
  readonly categorystat217?: number;
  /**
  * counter app category stat 218
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat218 DataThunderRuleSetStats#categorystat218}
  */
  readonly categorystat218?: number;
  /**
  * counter app category stat 219
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat219 DataThunderRuleSetStats#categorystat219}
  */
  readonly categorystat219?: number;
  /**
  * counter app category stat 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat22 DataThunderRuleSetStats#categorystat22}
  */
  readonly categorystat22?: number;
  /**
  * counter app category stat 220
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat220 DataThunderRuleSetStats#categorystat220}
  */
  readonly categorystat220?: number;
  /**
  * counter app category stat 221
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat221 DataThunderRuleSetStats#categorystat221}
  */
  readonly categorystat221?: number;
  /**
  * counter app category stat 222
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat222 DataThunderRuleSetStats#categorystat222}
  */
  readonly categorystat222?: number;
  /**
  * counter app category stat 223
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat223 DataThunderRuleSetStats#categorystat223}
  */
  readonly categorystat223?: number;
  /**
  * counter app category stat 224
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat224 DataThunderRuleSetStats#categorystat224}
  */
  readonly categorystat224?: number;
  /**
  * counter app category stat 225
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat225 DataThunderRuleSetStats#categorystat225}
  */
  readonly categorystat225?: number;
  /**
  * counter app category stat 226
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat226 DataThunderRuleSetStats#categorystat226}
  */
  readonly categorystat226?: number;
  /**
  * counter app category stat 227
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat227 DataThunderRuleSetStats#categorystat227}
  */
  readonly categorystat227?: number;
  /**
  * counter app category stat 228
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat228 DataThunderRuleSetStats#categorystat228}
  */
  readonly categorystat228?: number;
  /**
  * counter app category stat 229
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat229 DataThunderRuleSetStats#categorystat229}
  */
  readonly categorystat229?: number;
  /**
  * counter app category stat 23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat23 DataThunderRuleSetStats#categorystat23}
  */
  readonly categorystat23?: number;
  /**
  * counter app category stat 230
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat230 DataThunderRuleSetStats#categorystat230}
  */
  readonly categorystat230?: number;
  /**
  * counter app category stat 231
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat231 DataThunderRuleSetStats#categorystat231}
  */
  readonly categorystat231?: number;
  /**
  * counter app category stat 232
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat232 DataThunderRuleSetStats#categorystat232}
  */
  readonly categorystat232?: number;
  /**
  * counter app category stat 233
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat233 DataThunderRuleSetStats#categorystat233}
  */
  readonly categorystat233?: number;
  /**
  * counter app category stat 234
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat234 DataThunderRuleSetStats#categorystat234}
  */
  readonly categorystat234?: number;
  /**
  * counter app category stat 235
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat235 DataThunderRuleSetStats#categorystat235}
  */
  readonly categorystat235?: number;
  /**
  * counter app category stat 236
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat236 DataThunderRuleSetStats#categorystat236}
  */
  readonly categorystat236?: number;
  /**
  * counter app category stat 237
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat237 DataThunderRuleSetStats#categorystat237}
  */
  readonly categorystat237?: number;
  /**
  * counter app category stat 238
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat238 DataThunderRuleSetStats#categorystat238}
  */
  readonly categorystat238?: number;
  /**
  * counter app category stat 239
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat239 DataThunderRuleSetStats#categorystat239}
  */
  readonly categorystat239?: number;
  /**
  * counter app category stat 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat24 DataThunderRuleSetStats#categorystat24}
  */
  readonly categorystat24?: number;
  /**
  * counter app category stat 240
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat240 DataThunderRuleSetStats#categorystat240}
  */
  readonly categorystat240?: number;
  /**
  * counter app category stat 241
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat241 DataThunderRuleSetStats#categorystat241}
  */
  readonly categorystat241?: number;
  /**
  * counter app category stat 242
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat242 DataThunderRuleSetStats#categorystat242}
  */
  readonly categorystat242?: number;
  /**
  * counter app category stat 243
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat243 DataThunderRuleSetStats#categorystat243}
  */
  readonly categorystat243?: number;
  /**
  * counter app category stat 244
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat244 DataThunderRuleSetStats#categorystat244}
  */
  readonly categorystat244?: number;
  /**
  * counter app category stat 245
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat245 DataThunderRuleSetStats#categorystat245}
  */
  readonly categorystat245?: number;
  /**
  * counter app category stat 246
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat246 DataThunderRuleSetStats#categorystat246}
  */
  readonly categorystat246?: number;
  /**
  * counter app category stat 247
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat247 DataThunderRuleSetStats#categorystat247}
  */
  readonly categorystat247?: number;
  /**
  * counter app category stat 248
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat248 DataThunderRuleSetStats#categorystat248}
  */
  readonly categorystat248?: number;
  /**
  * counter app category stat 249
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat249 DataThunderRuleSetStats#categorystat249}
  */
  readonly categorystat249?: number;
  /**
  * counter app category stat 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat25 DataThunderRuleSetStats#categorystat25}
  */
  readonly categorystat25?: number;
  /**
  * counter app category stat 250
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat250 DataThunderRuleSetStats#categorystat250}
  */
  readonly categorystat250?: number;
  /**
  * counter app category stat 251
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat251 DataThunderRuleSetStats#categorystat251}
  */
  readonly categorystat251?: number;
  /**
  * counter app category stat 252
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat252 DataThunderRuleSetStats#categorystat252}
  */
  readonly categorystat252?: number;
  /**
  * counter app category stat 253
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat253 DataThunderRuleSetStats#categorystat253}
  */
  readonly categorystat253?: number;
  /**
  * counter app category stat 254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat254 DataThunderRuleSetStats#categorystat254}
  */
  readonly categorystat254?: number;
  /**
  * counter app category stat 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat255 DataThunderRuleSetStats#categorystat255}
  */
  readonly categorystat255?: number;
  /**
  * counter app category stat 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat256 DataThunderRuleSetStats#categorystat256}
  */
  readonly categorystat256?: number;
  /**
  * counter app category stat 26
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat26 DataThunderRuleSetStats#categorystat26}
  */
  readonly categorystat26?: number;
  /**
  * counter app category stat 27
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat27 DataThunderRuleSetStats#categorystat27}
  */
  readonly categorystat27?: number;
  /**
  * counter app category stat 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat28 DataThunderRuleSetStats#categorystat28}
  */
  readonly categorystat28?: number;
  /**
  * counter app category stat 29
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat29 DataThunderRuleSetStats#categorystat29}
  */
  readonly categorystat29?: number;
  /**
  * counter app category stat 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat3 DataThunderRuleSetStats#categorystat3}
  */
  readonly categorystat3?: number;
  /**
  * counter app category stat 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat30 DataThunderRuleSetStats#categorystat30}
  */
  readonly categorystat30?: number;
  /**
  * counter app category stat 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat31 DataThunderRuleSetStats#categorystat31}
  */
  readonly categorystat31?: number;
  /**
  * counter app category stat 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat32 DataThunderRuleSetStats#categorystat32}
  */
  readonly categorystat32?: number;
  /**
  * counter app category stat 33
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat33 DataThunderRuleSetStats#categorystat33}
  */
  readonly categorystat33?: number;
  /**
  * counter app category stat 34
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat34 DataThunderRuleSetStats#categorystat34}
  */
  readonly categorystat34?: number;
  /**
  * counter app category stat 35
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat35 DataThunderRuleSetStats#categorystat35}
  */
  readonly categorystat35?: number;
  /**
  * counter app category stat 36
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat36 DataThunderRuleSetStats#categorystat36}
  */
  readonly categorystat36?: number;
  /**
  * counter app category stat 37
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat37 DataThunderRuleSetStats#categorystat37}
  */
  readonly categorystat37?: number;
  /**
  * counter app category stat 38
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat38 DataThunderRuleSetStats#categorystat38}
  */
  readonly categorystat38?: number;
  /**
  * counter app category stat 39
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat39 DataThunderRuleSetStats#categorystat39}
  */
  readonly categorystat39?: number;
  /**
  * counter app category stat 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat4 DataThunderRuleSetStats#categorystat4}
  */
  readonly categorystat4?: number;
  /**
  * counter app category stat 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat40 DataThunderRuleSetStats#categorystat40}
  */
  readonly categorystat40?: number;
  /**
  * counter app category stat 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat41 DataThunderRuleSetStats#categorystat41}
  */
  readonly categorystat41?: number;
  /**
  * counter app category stat 42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat42 DataThunderRuleSetStats#categorystat42}
  */
  readonly categorystat42?: number;
  /**
  * counter app category stat 43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat43 DataThunderRuleSetStats#categorystat43}
  */
  readonly categorystat43?: number;
  /**
  * counter app category stat 44
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat44 DataThunderRuleSetStats#categorystat44}
  */
  readonly categorystat44?: number;
  /**
  * counter app category stat 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat45 DataThunderRuleSetStats#categorystat45}
  */
  readonly categorystat45?: number;
  /**
  * counter app category stat 46
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat46 DataThunderRuleSetStats#categorystat46}
  */
  readonly categorystat46?: number;
  /**
  * counter app category stat 47
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat47 DataThunderRuleSetStats#categorystat47}
  */
  readonly categorystat47?: number;
  /**
  * counter app category stat 48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat48 DataThunderRuleSetStats#categorystat48}
  */
  readonly categorystat48?: number;
  /**
  * counter app category stat 49
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat49 DataThunderRuleSetStats#categorystat49}
  */
  readonly categorystat49?: number;
  /**
  * counter app category stat 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat5 DataThunderRuleSetStats#categorystat5}
  */
  readonly categorystat5?: number;
  /**
  * counter app category stat 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat50 DataThunderRuleSetStats#categorystat50}
  */
  readonly categorystat50?: number;
  /**
  * counter app category stat 51
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat51 DataThunderRuleSetStats#categorystat51}
  */
  readonly categorystat51?: number;
  /**
  * counter app category stat 52
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat52 DataThunderRuleSetStats#categorystat52}
  */
  readonly categorystat52?: number;
  /**
  * counter app category stat 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat53 DataThunderRuleSetStats#categorystat53}
  */
  readonly categorystat53?: number;
  /**
  * counter app category stat 54
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat54 DataThunderRuleSetStats#categorystat54}
  */
  readonly categorystat54?: number;
  /**
  * counter app category stat 55
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat55 DataThunderRuleSetStats#categorystat55}
  */
  readonly categorystat55?: number;
  /**
  * counter app category stat 56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat56 DataThunderRuleSetStats#categorystat56}
  */
  readonly categorystat56?: number;
  /**
  * counter app category stat 57
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat57 DataThunderRuleSetStats#categorystat57}
  */
  readonly categorystat57?: number;
  /**
  * counter app category stat 58
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat58 DataThunderRuleSetStats#categorystat58}
  */
  readonly categorystat58?: number;
  /**
  * counter app category stat 59
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat59 DataThunderRuleSetStats#categorystat59}
  */
  readonly categorystat59?: number;
  /**
  * counter app category stat 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat6 DataThunderRuleSetStats#categorystat6}
  */
  readonly categorystat6?: number;
  /**
  * counter app category stat 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat60 DataThunderRuleSetStats#categorystat60}
  */
  readonly categorystat60?: number;
  /**
  * counter app category stat 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat61 DataThunderRuleSetStats#categorystat61}
  */
  readonly categorystat61?: number;
  /**
  * counter app category stat 62
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat62 DataThunderRuleSetStats#categorystat62}
  */
  readonly categorystat62?: number;
  /**
  * counter app category stat 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat63 DataThunderRuleSetStats#categorystat63}
  */
  readonly categorystat63?: number;
  /**
  * counter app category stat 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat64 DataThunderRuleSetStats#categorystat64}
  */
  readonly categorystat64?: number;
  /**
  * counter app category stat 65
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat65 DataThunderRuleSetStats#categorystat65}
  */
  readonly categorystat65?: number;
  /**
  * counter app category stat 66
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat66 DataThunderRuleSetStats#categorystat66}
  */
  readonly categorystat66?: number;
  /**
  * counter app category stat 67
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat67 DataThunderRuleSetStats#categorystat67}
  */
  readonly categorystat67?: number;
  /**
  * counter app category stat 68
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat68 DataThunderRuleSetStats#categorystat68}
  */
  readonly categorystat68?: number;
  /**
  * counter app category stat 69
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat69 DataThunderRuleSetStats#categorystat69}
  */
  readonly categorystat69?: number;
  /**
  * counter app category stat 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat7 DataThunderRuleSetStats#categorystat7}
  */
  readonly categorystat7?: number;
  /**
  * counter app category stat 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat70 DataThunderRuleSetStats#categorystat70}
  */
  readonly categorystat70?: number;
  /**
  * counter app category stat 71
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat71 DataThunderRuleSetStats#categorystat71}
  */
  readonly categorystat71?: number;
  /**
  * counter app category stat 72
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat72 DataThunderRuleSetStats#categorystat72}
  */
  readonly categorystat72?: number;
  /**
  * counter app category stat 73
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat73 DataThunderRuleSetStats#categorystat73}
  */
  readonly categorystat73?: number;
  /**
  * counter app category stat 74
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat74 DataThunderRuleSetStats#categorystat74}
  */
  readonly categorystat74?: number;
  /**
  * counter app category stat 75
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat75 DataThunderRuleSetStats#categorystat75}
  */
  readonly categorystat75?: number;
  /**
  * counter app category stat 76
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat76 DataThunderRuleSetStats#categorystat76}
  */
  readonly categorystat76?: number;
  /**
  * counter app category stat 77
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat77 DataThunderRuleSetStats#categorystat77}
  */
  readonly categorystat77?: number;
  /**
  * counter app category stat 78
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat78 DataThunderRuleSetStats#categorystat78}
  */
  readonly categorystat78?: number;
  /**
  * counter app category stat 79
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat79 DataThunderRuleSetStats#categorystat79}
  */
  readonly categorystat79?: number;
  /**
  * counter app category stat 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat8 DataThunderRuleSetStats#categorystat8}
  */
  readonly categorystat8?: number;
  /**
  * counter app category stat 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat80 DataThunderRuleSetStats#categorystat80}
  */
  readonly categorystat80?: number;
  /**
  * counter app category stat 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat81 DataThunderRuleSetStats#categorystat81}
  */
  readonly categorystat81?: number;
  /**
  * counter app category stat 82
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat82 DataThunderRuleSetStats#categorystat82}
  */
  readonly categorystat82?: number;
  /**
  * counter app category stat 83
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat83 DataThunderRuleSetStats#categorystat83}
  */
  readonly categorystat83?: number;
  /**
  * counter app category stat 84
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat84 DataThunderRuleSetStats#categorystat84}
  */
  readonly categorystat84?: number;
  /**
  * counter app category stat 85
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat85 DataThunderRuleSetStats#categorystat85}
  */
  readonly categorystat85?: number;
  /**
  * counter app category stat 86
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat86 DataThunderRuleSetStats#categorystat86}
  */
  readonly categorystat86?: number;
  /**
  * counter app category stat 87
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat87 DataThunderRuleSetStats#categorystat87}
  */
  readonly categorystat87?: number;
  /**
  * counter app category stat 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat88 DataThunderRuleSetStats#categorystat88}
  */
  readonly categorystat88?: number;
  /**
  * counter app category stat 89
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat89 DataThunderRuleSetStats#categorystat89}
  */
  readonly categorystat89?: number;
  /**
  * counter app category stat 9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat9 DataThunderRuleSetStats#categorystat9}
  */
  readonly categorystat9?: number;
  /**
  * counter app category stat 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat90 DataThunderRuleSetStats#categorystat90}
  */
  readonly categorystat90?: number;
  /**
  * counter app category stat 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat91 DataThunderRuleSetStats#categorystat91}
  */
  readonly categorystat91?: number;
  /**
  * counter app category stat 92
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat92 DataThunderRuleSetStats#categorystat92}
  */
  readonly categorystat92?: number;
  /**
  * counter app category stat 93
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat93 DataThunderRuleSetStats#categorystat93}
  */
  readonly categorystat93?: number;
  /**
  * counter app category stat 94
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat94 DataThunderRuleSetStats#categorystat94}
  */
  readonly categorystat94?: number;
  /**
  * counter app category stat 95
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat95 DataThunderRuleSetStats#categorystat95}
  */
  readonly categorystat95?: number;
  /**
  * counter app category stat 96
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat96 DataThunderRuleSetStats#categorystat96}
  */
  readonly categorystat96?: number;
  /**
  * counter app category stat 97
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat97 DataThunderRuleSetStats#categorystat97}
  */
  readonly categorystat97?: number;
  /**
  * counter app category stat 98
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat98 DataThunderRuleSetStats#categorystat98}
  */
  readonly categorystat98?: number;
  /**
  * counter app category stat 99
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#categorystat99 DataThunderRuleSetStats#categorystat99}
  */
  readonly categorystat99?: number;
}

export function dataThunderRuleSetStatsTagStatsToTerraform(struct?: DataThunderRuleSetStatsTagStatsOutputReference | DataThunderRuleSetStatsTagStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorystat1: cdktf.numberToTerraform(struct!.categorystat1),
    categorystat10: cdktf.numberToTerraform(struct!.categorystat10),
    categorystat100: cdktf.numberToTerraform(struct!.categorystat100),
    categorystat101: cdktf.numberToTerraform(struct!.categorystat101),
    categorystat102: cdktf.numberToTerraform(struct!.categorystat102),
    categorystat103: cdktf.numberToTerraform(struct!.categorystat103),
    categorystat104: cdktf.numberToTerraform(struct!.categorystat104),
    categorystat105: cdktf.numberToTerraform(struct!.categorystat105),
    categorystat106: cdktf.numberToTerraform(struct!.categorystat106),
    categorystat107: cdktf.numberToTerraform(struct!.categorystat107),
    categorystat108: cdktf.numberToTerraform(struct!.categorystat108),
    categorystat109: cdktf.numberToTerraform(struct!.categorystat109),
    categorystat11: cdktf.numberToTerraform(struct!.categorystat11),
    categorystat110: cdktf.numberToTerraform(struct!.categorystat110),
    categorystat111: cdktf.numberToTerraform(struct!.categorystat111),
    categorystat112: cdktf.numberToTerraform(struct!.categorystat112),
    categorystat113: cdktf.numberToTerraform(struct!.categorystat113),
    categorystat114: cdktf.numberToTerraform(struct!.categorystat114),
    categorystat115: cdktf.numberToTerraform(struct!.categorystat115),
    categorystat116: cdktf.numberToTerraform(struct!.categorystat116),
    categorystat117: cdktf.numberToTerraform(struct!.categorystat117),
    categorystat118: cdktf.numberToTerraform(struct!.categorystat118),
    categorystat119: cdktf.numberToTerraform(struct!.categorystat119),
    categorystat12: cdktf.numberToTerraform(struct!.categorystat12),
    categorystat120: cdktf.numberToTerraform(struct!.categorystat120),
    categorystat121: cdktf.numberToTerraform(struct!.categorystat121),
    categorystat122: cdktf.numberToTerraform(struct!.categorystat122),
    categorystat123: cdktf.numberToTerraform(struct!.categorystat123),
    categorystat124: cdktf.numberToTerraform(struct!.categorystat124),
    categorystat125: cdktf.numberToTerraform(struct!.categorystat125),
    categorystat126: cdktf.numberToTerraform(struct!.categorystat126),
    categorystat127: cdktf.numberToTerraform(struct!.categorystat127),
    categorystat128: cdktf.numberToTerraform(struct!.categorystat128),
    categorystat129: cdktf.numberToTerraform(struct!.categorystat129),
    categorystat13: cdktf.numberToTerraform(struct!.categorystat13),
    categorystat130: cdktf.numberToTerraform(struct!.categorystat130),
    categorystat131: cdktf.numberToTerraform(struct!.categorystat131),
    categorystat132: cdktf.numberToTerraform(struct!.categorystat132),
    categorystat133: cdktf.numberToTerraform(struct!.categorystat133),
    categorystat134: cdktf.numberToTerraform(struct!.categorystat134),
    categorystat135: cdktf.numberToTerraform(struct!.categorystat135),
    categorystat136: cdktf.numberToTerraform(struct!.categorystat136),
    categorystat137: cdktf.numberToTerraform(struct!.categorystat137),
    categorystat138: cdktf.numberToTerraform(struct!.categorystat138),
    categorystat139: cdktf.numberToTerraform(struct!.categorystat139),
    categorystat14: cdktf.numberToTerraform(struct!.categorystat14),
    categorystat140: cdktf.numberToTerraform(struct!.categorystat140),
    categorystat141: cdktf.numberToTerraform(struct!.categorystat141),
    categorystat142: cdktf.numberToTerraform(struct!.categorystat142),
    categorystat143: cdktf.numberToTerraform(struct!.categorystat143),
    categorystat144: cdktf.numberToTerraform(struct!.categorystat144),
    categorystat145: cdktf.numberToTerraform(struct!.categorystat145),
    categorystat146: cdktf.numberToTerraform(struct!.categorystat146),
    categorystat147: cdktf.numberToTerraform(struct!.categorystat147),
    categorystat148: cdktf.numberToTerraform(struct!.categorystat148),
    categorystat149: cdktf.numberToTerraform(struct!.categorystat149),
    categorystat15: cdktf.numberToTerraform(struct!.categorystat15),
    categorystat150: cdktf.numberToTerraform(struct!.categorystat150),
    categorystat151: cdktf.numberToTerraform(struct!.categorystat151),
    categorystat152: cdktf.numberToTerraform(struct!.categorystat152),
    categorystat153: cdktf.numberToTerraform(struct!.categorystat153),
    categorystat154: cdktf.numberToTerraform(struct!.categorystat154),
    categorystat155: cdktf.numberToTerraform(struct!.categorystat155),
    categorystat156: cdktf.numberToTerraform(struct!.categorystat156),
    categorystat157: cdktf.numberToTerraform(struct!.categorystat157),
    categorystat158: cdktf.numberToTerraform(struct!.categorystat158),
    categorystat159: cdktf.numberToTerraform(struct!.categorystat159),
    categorystat16: cdktf.numberToTerraform(struct!.categorystat16),
    categorystat160: cdktf.numberToTerraform(struct!.categorystat160),
    categorystat161: cdktf.numberToTerraform(struct!.categorystat161),
    categorystat162: cdktf.numberToTerraform(struct!.categorystat162),
    categorystat163: cdktf.numberToTerraform(struct!.categorystat163),
    categorystat164: cdktf.numberToTerraform(struct!.categorystat164),
    categorystat165: cdktf.numberToTerraform(struct!.categorystat165),
    categorystat166: cdktf.numberToTerraform(struct!.categorystat166),
    categorystat167: cdktf.numberToTerraform(struct!.categorystat167),
    categorystat168: cdktf.numberToTerraform(struct!.categorystat168),
    categorystat169: cdktf.numberToTerraform(struct!.categorystat169),
    categorystat17: cdktf.numberToTerraform(struct!.categorystat17),
    categorystat170: cdktf.numberToTerraform(struct!.categorystat170),
    categorystat171: cdktf.numberToTerraform(struct!.categorystat171),
    categorystat172: cdktf.numberToTerraform(struct!.categorystat172),
    categorystat173: cdktf.numberToTerraform(struct!.categorystat173),
    categorystat174: cdktf.numberToTerraform(struct!.categorystat174),
    categorystat175: cdktf.numberToTerraform(struct!.categorystat175),
    categorystat176: cdktf.numberToTerraform(struct!.categorystat176),
    categorystat177: cdktf.numberToTerraform(struct!.categorystat177),
    categorystat178: cdktf.numberToTerraform(struct!.categorystat178),
    categorystat179: cdktf.numberToTerraform(struct!.categorystat179),
    categorystat18: cdktf.numberToTerraform(struct!.categorystat18),
    categorystat180: cdktf.numberToTerraform(struct!.categorystat180),
    categorystat181: cdktf.numberToTerraform(struct!.categorystat181),
    categorystat182: cdktf.numberToTerraform(struct!.categorystat182),
    categorystat183: cdktf.numberToTerraform(struct!.categorystat183),
    categorystat184: cdktf.numberToTerraform(struct!.categorystat184),
    categorystat185: cdktf.numberToTerraform(struct!.categorystat185),
    categorystat186: cdktf.numberToTerraform(struct!.categorystat186),
    categorystat187: cdktf.numberToTerraform(struct!.categorystat187),
    categorystat188: cdktf.numberToTerraform(struct!.categorystat188),
    categorystat189: cdktf.numberToTerraform(struct!.categorystat189),
    categorystat19: cdktf.numberToTerraform(struct!.categorystat19),
    categorystat190: cdktf.numberToTerraform(struct!.categorystat190),
    categorystat191: cdktf.numberToTerraform(struct!.categorystat191),
    categorystat192: cdktf.numberToTerraform(struct!.categorystat192),
    categorystat193: cdktf.numberToTerraform(struct!.categorystat193),
    categorystat194: cdktf.numberToTerraform(struct!.categorystat194),
    categorystat195: cdktf.numberToTerraform(struct!.categorystat195),
    categorystat196: cdktf.numberToTerraform(struct!.categorystat196),
    categorystat197: cdktf.numberToTerraform(struct!.categorystat197),
    categorystat198: cdktf.numberToTerraform(struct!.categorystat198),
    categorystat199: cdktf.numberToTerraform(struct!.categorystat199),
    categorystat2: cdktf.numberToTerraform(struct!.categorystat2),
    categorystat20: cdktf.numberToTerraform(struct!.categorystat20),
    categorystat200: cdktf.numberToTerraform(struct!.categorystat200),
    categorystat201: cdktf.numberToTerraform(struct!.categorystat201),
    categorystat202: cdktf.numberToTerraform(struct!.categorystat202),
    categorystat203: cdktf.numberToTerraform(struct!.categorystat203),
    categorystat204: cdktf.numberToTerraform(struct!.categorystat204),
    categorystat205: cdktf.numberToTerraform(struct!.categorystat205),
    categorystat206: cdktf.numberToTerraform(struct!.categorystat206),
    categorystat207: cdktf.numberToTerraform(struct!.categorystat207),
    categorystat208: cdktf.numberToTerraform(struct!.categorystat208),
    categorystat209: cdktf.numberToTerraform(struct!.categorystat209),
    categorystat21: cdktf.numberToTerraform(struct!.categorystat21),
    categorystat210: cdktf.numberToTerraform(struct!.categorystat210),
    categorystat211: cdktf.numberToTerraform(struct!.categorystat211),
    categorystat212: cdktf.numberToTerraform(struct!.categorystat212),
    categorystat213: cdktf.numberToTerraform(struct!.categorystat213),
    categorystat214: cdktf.numberToTerraform(struct!.categorystat214),
    categorystat215: cdktf.numberToTerraform(struct!.categorystat215),
    categorystat216: cdktf.numberToTerraform(struct!.categorystat216),
    categorystat217: cdktf.numberToTerraform(struct!.categorystat217),
    categorystat218: cdktf.numberToTerraform(struct!.categorystat218),
    categorystat219: cdktf.numberToTerraform(struct!.categorystat219),
    categorystat22: cdktf.numberToTerraform(struct!.categorystat22),
    categorystat220: cdktf.numberToTerraform(struct!.categorystat220),
    categorystat221: cdktf.numberToTerraform(struct!.categorystat221),
    categorystat222: cdktf.numberToTerraform(struct!.categorystat222),
    categorystat223: cdktf.numberToTerraform(struct!.categorystat223),
    categorystat224: cdktf.numberToTerraform(struct!.categorystat224),
    categorystat225: cdktf.numberToTerraform(struct!.categorystat225),
    categorystat226: cdktf.numberToTerraform(struct!.categorystat226),
    categorystat227: cdktf.numberToTerraform(struct!.categorystat227),
    categorystat228: cdktf.numberToTerraform(struct!.categorystat228),
    categorystat229: cdktf.numberToTerraform(struct!.categorystat229),
    categorystat23: cdktf.numberToTerraform(struct!.categorystat23),
    categorystat230: cdktf.numberToTerraform(struct!.categorystat230),
    categorystat231: cdktf.numberToTerraform(struct!.categorystat231),
    categorystat232: cdktf.numberToTerraform(struct!.categorystat232),
    categorystat233: cdktf.numberToTerraform(struct!.categorystat233),
    categorystat234: cdktf.numberToTerraform(struct!.categorystat234),
    categorystat235: cdktf.numberToTerraform(struct!.categorystat235),
    categorystat236: cdktf.numberToTerraform(struct!.categorystat236),
    categorystat237: cdktf.numberToTerraform(struct!.categorystat237),
    categorystat238: cdktf.numberToTerraform(struct!.categorystat238),
    categorystat239: cdktf.numberToTerraform(struct!.categorystat239),
    categorystat24: cdktf.numberToTerraform(struct!.categorystat24),
    categorystat240: cdktf.numberToTerraform(struct!.categorystat240),
    categorystat241: cdktf.numberToTerraform(struct!.categorystat241),
    categorystat242: cdktf.numberToTerraform(struct!.categorystat242),
    categorystat243: cdktf.numberToTerraform(struct!.categorystat243),
    categorystat244: cdktf.numberToTerraform(struct!.categorystat244),
    categorystat245: cdktf.numberToTerraform(struct!.categorystat245),
    categorystat246: cdktf.numberToTerraform(struct!.categorystat246),
    categorystat247: cdktf.numberToTerraform(struct!.categorystat247),
    categorystat248: cdktf.numberToTerraform(struct!.categorystat248),
    categorystat249: cdktf.numberToTerraform(struct!.categorystat249),
    categorystat25: cdktf.numberToTerraform(struct!.categorystat25),
    categorystat250: cdktf.numberToTerraform(struct!.categorystat250),
    categorystat251: cdktf.numberToTerraform(struct!.categorystat251),
    categorystat252: cdktf.numberToTerraform(struct!.categorystat252),
    categorystat253: cdktf.numberToTerraform(struct!.categorystat253),
    categorystat254: cdktf.numberToTerraform(struct!.categorystat254),
    categorystat255: cdktf.numberToTerraform(struct!.categorystat255),
    categorystat256: cdktf.numberToTerraform(struct!.categorystat256),
    categorystat26: cdktf.numberToTerraform(struct!.categorystat26),
    categorystat27: cdktf.numberToTerraform(struct!.categorystat27),
    categorystat28: cdktf.numberToTerraform(struct!.categorystat28),
    categorystat29: cdktf.numberToTerraform(struct!.categorystat29),
    categorystat3: cdktf.numberToTerraform(struct!.categorystat3),
    categorystat30: cdktf.numberToTerraform(struct!.categorystat30),
    categorystat31: cdktf.numberToTerraform(struct!.categorystat31),
    categorystat32: cdktf.numberToTerraform(struct!.categorystat32),
    categorystat33: cdktf.numberToTerraform(struct!.categorystat33),
    categorystat34: cdktf.numberToTerraform(struct!.categorystat34),
    categorystat35: cdktf.numberToTerraform(struct!.categorystat35),
    categorystat36: cdktf.numberToTerraform(struct!.categorystat36),
    categorystat37: cdktf.numberToTerraform(struct!.categorystat37),
    categorystat38: cdktf.numberToTerraform(struct!.categorystat38),
    categorystat39: cdktf.numberToTerraform(struct!.categorystat39),
    categorystat4: cdktf.numberToTerraform(struct!.categorystat4),
    categorystat40: cdktf.numberToTerraform(struct!.categorystat40),
    categorystat41: cdktf.numberToTerraform(struct!.categorystat41),
    categorystat42: cdktf.numberToTerraform(struct!.categorystat42),
    categorystat43: cdktf.numberToTerraform(struct!.categorystat43),
    categorystat44: cdktf.numberToTerraform(struct!.categorystat44),
    categorystat45: cdktf.numberToTerraform(struct!.categorystat45),
    categorystat46: cdktf.numberToTerraform(struct!.categorystat46),
    categorystat47: cdktf.numberToTerraform(struct!.categorystat47),
    categorystat48: cdktf.numberToTerraform(struct!.categorystat48),
    categorystat49: cdktf.numberToTerraform(struct!.categorystat49),
    categorystat5: cdktf.numberToTerraform(struct!.categorystat5),
    categorystat50: cdktf.numberToTerraform(struct!.categorystat50),
    categorystat51: cdktf.numberToTerraform(struct!.categorystat51),
    categorystat52: cdktf.numberToTerraform(struct!.categorystat52),
    categorystat53: cdktf.numberToTerraform(struct!.categorystat53),
    categorystat54: cdktf.numberToTerraform(struct!.categorystat54),
    categorystat55: cdktf.numberToTerraform(struct!.categorystat55),
    categorystat56: cdktf.numberToTerraform(struct!.categorystat56),
    categorystat57: cdktf.numberToTerraform(struct!.categorystat57),
    categorystat58: cdktf.numberToTerraform(struct!.categorystat58),
    categorystat59: cdktf.numberToTerraform(struct!.categorystat59),
    categorystat6: cdktf.numberToTerraform(struct!.categorystat6),
    categorystat60: cdktf.numberToTerraform(struct!.categorystat60),
    categorystat61: cdktf.numberToTerraform(struct!.categorystat61),
    categorystat62: cdktf.numberToTerraform(struct!.categorystat62),
    categorystat63: cdktf.numberToTerraform(struct!.categorystat63),
    categorystat64: cdktf.numberToTerraform(struct!.categorystat64),
    categorystat65: cdktf.numberToTerraform(struct!.categorystat65),
    categorystat66: cdktf.numberToTerraform(struct!.categorystat66),
    categorystat67: cdktf.numberToTerraform(struct!.categorystat67),
    categorystat68: cdktf.numberToTerraform(struct!.categorystat68),
    categorystat69: cdktf.numberToTerraform(struct!.categorystat69),
    categorystat7: cdktf.numberToTerraform(struct!.categorystat7),
    categorystat70: cdktf.numberToTerraform(struct!.categorystat70),
    categorystat71: cdktf.numberToTerraform(struct!.categorystat71),
    categorystat72: cdktf.numberToTerraform(struct!.categorystat72),
    categorystat73: cdktf.numberToTerraform(struct!.categorystat73),
    categorystat74: cdktf.numberToTerraform(struct!.categorystat74),
    categorystat75: cdktf.numberToTerraform(struct!.categorystat75),
    categorystat76: cdktf.numberToTerraform(struct!.categorystat76),
    categorystat77: cdktf.numberToTerraform(struct!.categorystat77),
    categorystat78: cdktf.numberToTerraform(struct!.categorystat78),
    categorystat79: cdktf.numberToTerraform(struct!.categorystat79),
    categorystat8: cdktf.numberToTerraform(struct!.categorystat8),
    categorystat80: cdktf.numberToTerraform(struct!.categorystat80),
    categorystat81: cdktf.numberToTerraform(struct!.categorystat81),
    categorystat82: cdktf.numberToTerraform(struct!.categorystat82),
    categorystat83: cdktf.numberToTerraform(struct!.categorystat83),
    categorystat84: cdktf.numberToTerraform(struct!.categorystat84),
    categorystat85: cdktf.numberToTerraform(struct!.categorystat85),
    categorystat86: cdktf.numberToTerraform(struct!.categorystat86),
    categorystat87: cdktf.numberToTerraform(struct!.categorystat87),
    categorystat88: cdktf.numberToTerraform(struct!.categorystat88),
    categorystat89: cdktf.numberToTerraform(struct!.categorystat89),
    categorystat9: cdktf.numberToTerraform(struct!.categorystat9),
    categorystat90: cdktf.numberToTerraform(struct!.categorystat90),
    categorystat91: cdktf.numberToTerraform(struct!.categorystat91),
    categorystat92: cdktf.numberToTerraform(struct!.categorystat92),
    categorystat93: cdktf.numberToTerraform(struct!.categorystat93),
    categorystat94: cdktf.numberToTerraform(struct!.categorystat94),
    categorystat95: cdktf.numberToTerraform(struct!.categorystat95),
    categorystat96: cdktf.numberToTerraform(struct!.categorystat96),
    categorystat97: cdktf.numberToTerraform(struct!.categorystat97),
    categorystat98: cdktf.numberToTerraform(struct!.categorystat98),
    categorystat99: cdktf.numberToTerraform(struct!.categorystat99),
  }
}


export function dataThunderRuleSetStatsTagStatsToHclTerraform(struct?: DataThunderRuleSetStatsTagStatsOutputReference | DataThunderRuleSetStatsTagStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categorystat1: {
      value: cdktf.numberToHclTerraform(struct!.categorystat1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat10: {
      value: cdktf.numberToHclTerraform(struct!.categorystat10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat100: {
      value: cdktf.numberToHclTerraform(struct!.categorystat100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat101: {
      value: cdktf.numberToHclTerraform(struct!.categorystat101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat102: {
      value: cdktf.numberToHclTerraform(struct!.categorystat102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat103: {
      value: cdktf.numberToHclTerraform(struct!.categorystat103),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat104: {
      value: cdktf.numberToHclTerraform(struct!.categorystat104),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat105: {
      value: cdktf.numberToHclTerraform(struct!.categorystat105),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat106: {
      value: cdktf.numberToHclTerraform(struct!.categorystat106),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat107: {
      value: cdktf.numberToHclTerraform(struct!.categorystat107),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat108: {
      value: cdktf.numberToHclTerraform(struct!.categorystat108),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat109: {
      value: cdktf.numberToHclTerraform(struct!.categorystat109),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat11: {
      value: cdktf.numberToHclTerraform(struct!.categorystat11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat110: {
      value: cdktf.numberToHclTerraform(struct!.categorystat110),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat111: {
      value: cdktf.numberToHclTerraform(struct!.categorystat111),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat112: {
      value: cdktf.numberToHclTerraform(struct!.categorystat112),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat113: {
      value: cdktf.numberToHclTerraform(struct!.categorystat113),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat114: {
      value: cdktf.numberToHclTerraform(struct!.categorystat114),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat115: {
      value: cdktf.numberToHclTerraform(struct!.categorystat115),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat116: {
      value: cdktf.numberToHclTerraform(struct!.categorystat116),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat117: {
      value: cdktf.numberToHclTerraform(struct!.categorystat117),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat118: {
      value: cdktf.numberToHclTerraform(struct!.categorystat118),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat119: {
      value: cdktf.numberToHclTerraform(struct!.categorystat119),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat12: {
      value: cdktf.numberToHclTerraform(struct!.categorystat12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat120: {
      value: cdktf.numberToHclTerraform(struct!.categorystat120),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat121: {
      value: cdktf.numberToHclTerraform(struct!.categorystat121),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat122: {
      value: cdktf.numberToHclTerraform(struct!.categorystat122),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat123: {
      value: cdktf.numberToHclTerraform(struct!.categorystat123),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat124: {
      value: cdktf.numberToHclTerraform(struct!.categorystat124),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat125: {
      value: cdktf.numberToHclTerraform(struct!.categorystat125),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat126: {
      value: cdktf.numberToHclTerraform(struct!.categorystat126),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat127: {
      value: cdktf.numberToHclTerraform(struct!.categorystat127),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat128: {
      value: cdktf.numberToHclTerraform(struct!.categorystat128),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat129: {
      value: cdktf.numberToHclTerraform(struct!.categorystat129),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat13: {
      value: cdktf.numberToHclTerraform(struct!.categorystat13),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat130: {
      value: cdktf.numberToHclTerraform(struct!.categorystat130),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat131: {
      value: cdktf.numberToHclTerraform(struct!.categorystat131),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat132: {
      value: cdktf.numberToHclTerraform(struct!.categorystat132),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat133: {
      value: cdktf.numberToHclTerraform(struct!.categorystat133),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat134: {
      value: cdktf.numberToHclTerraform(struct!.categorystat134),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat135: {
      value: cdktf.numberToHclTerraform(struct!.categorystat135),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat136: {
      value: cdktf.numberToHclTerraform(struct!.categorystat136),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat137: {
      value: cdktf.numberToHclTerraform(struct!.categorystat137),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat138: {
      value: cdktf.numberToHclTerraform(struct!.categorystat138),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat139: {
      value: cdktf.numberToHclTerraform(struct!.categorystat139),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat14: {
      value: cdktf.numberToHclTerraform(struct!.categorystat14),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat140: {
      value: cdktf.numberToHclTerraform(struct!.categorystat140),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat141: {
      value: cdktf.numberToHclTerraform(struct!.categorystat141),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat142: {
      value: cdktf.numberToHclTerraform(struct!.categorystat142),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat143: {
      value: cdktf.numberToHclTerraform(struct!.categorystat143),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat144: {
      value: cdktf.numberToHclTerraform(struct!.categorystat144),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat145: {
      value: cdktf.numberToHclTerraform(struct!.categorystat145),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat146: {
      value: cdktf.numberToHclTerraform(struct!.categorystat146),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat147: {
      value: cdktf.numberToHclTerraform(struct!.categorystat147),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat148: {
      value: cdktf.numberToHclTerraform(struct!.categorystat148),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat149: {
      value: cdktf.numberToHclTerraform(struct!.categorystat149),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat15: {
      value: cdktf.numberToHclTerraform(struct!.categorystat15),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat150: {
      value: cdktf.numberToHclTerraform(struct!.categorystat150),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat151: {
      value: cdktf.numberToHclTerraform(struct!.categorystat151),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat152: {
      value: cdktf.numberToHclTerraform(struct!.categorystat152),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat153: {
      value: cdktf.numberToHclTerraform(struct!.categorystat153),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat154: {
      value: cdktf.numberToHclTerraform(struct!.categorystat154),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat155: {
      value: cdktf.numberToHclTerraform(struct!.categorystat155),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat156: {
      value: cdktf.numberToHclTerraform(struct!.categorystat156),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat157: {
      value: cdktf.numberToHclTerraform(struct!.categorystat157),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat158: {
      value: cdktf.numberToHclTerraform(struct!.categorystat158),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat159: {
      value: cdktf.numberToHclTerraform(struct!.categorystat159),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat16: {
      value: cdktf.numberToHclTerraform(struct!.categorystat16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat160: {
      value: cdktf.numberToHclTerraform(struct!.categorystat160),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat161: {
      value: cdktf.numberToHclTerraform(struct!.categorystat161),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat162: {
      value: cdktf.numberToHclTerraform(struct!.categorystat162),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat163: {
      value: cdktf.numberToHclTerraform(struct!.categorystat163),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat164: {
      value: cdktf.numberToHclTerraform(struct!.categorystat164),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat165: {
      value: cdktf.numberToHclTerraform(struct!.categorystat165),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat166: {
      value: cdktf.numberToHclTerraform(struct!.categorystat166),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat167: {
      value: cdktf.numberToHclTerraform(struct!.categorystat167),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat168: {
      value: cdktf.numberToHclTerraform(struct!.categorystat168),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat169: {
      value: cdktf.numberToHclTerraform(struct!.categorystat169),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat17: {
      value: cdktf.numberToHclTerraform(struct!.categorystat17),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat170: {
      value: cdktf.numberToHclTerraform(struct!.categorystat170),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat171: {
      value: cdktf.numberToHclTerraform(struct!.categorystat171),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat172: {
      value: cdktf.numberToHclTerraform(struct!.categorystat172),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat173: {
      value: cdktf.numberToHclTerraform(struct!.categorystat173),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat174: {
      value: cdktf.numberToHclTerraform(struct!.categorystat174),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat175: {
      value: cdktf.numberToHclTerraform(struct!.categorystat175),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat176: {
      value: cdktf.numberToHclTerraform(struct!.categorystat176),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat177: {
      value: cdktf.numberToHclTerraform(struct!.categorystat177),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat178: {
      value: cdktf.numberToHclTerraform(struct!.categorystat178),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat179: {
      value: cdktf.numberToHclTerraform(struct!.categorystat179),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat18: {
      value: cdktf.numberToHclTerraform(struct!.categorystat18),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat180: {
      value: cdktf.numberToHclTerraform(struct!.categorystat180),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat181: {
      value: cdktf.numberToHclTerraform(struct!.categorystat181),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat182: {
      value: cdktf.numberToHclTerraform(struct!.categorystat182),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat183: {
      value: cdktf.numberToHclTerraform(struct!.categorystat183),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat184: {
      value: cdktf.numberToHclTerraform(struct!.categorystat184),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat185: {
      value: cdktf.numberToHclTerraform(struct!.categorystat185),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat186: {
      value: cdktf.numberToHclTerraform(struct!.categorystat186),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat187: {
      value: cdktf.numberToHclTerraform(struct!.categorystat187),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat188: {
      value: cdktf.numberToHclTerraform(struct!.categorystat188),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat189: {
      value: cdktf.numberToHclTerraform(struct!.categorystat189),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat19: {
      value: cdktf.numberToHclTerraform(struct!.categorystat19),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat190: {
      value: cdktf.numberToHclTerraform(struct!.categorystat190),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat191: {
      value: cdktf.numberToHclTerraform(struct!.categorystat191),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat192: {
      value: cdktf.numberToHclTerraform(struct!.categorystat192),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat193: {
      value: cdktf.numberToHclTerraform(struct!.categorystat193),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat194: {
      value: cdktf.numberToHclTerraform(struct!.categorystat194),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat195: {
      value: cdktf.numberToHclTerraform(struct!.categorystat195),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat196: {
      value: cdktf.numberToHclTerraform(struct!.categorystat196),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat197: {
      value: cdktf.numberToHclTerraform(struct!.categorystat197),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat198: {
      value: cdktf.numberToHclTerraform(struct!.categorystat198),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat199: {
      value: cdktf.numberToHclTerraform(struct!.categorystat199),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat2: {
      value: cdktf.numberToHclTerraform(struct!.categorystat2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat20: {
      value: cdktf.numberToHclTerraform(struct!.categorystat20),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat200: {
      value: cdktf.numberToHclTerraform(struct!.categorystat200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat201: {
      value: cdktf.numberToHclTerraform(struct!.categorystat201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat202: {
      value: cdktf.numberToHclTerraform(struct!.categorystat202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat203: {
      value: cdktf.numberToHclTerraform(struct!.categorystat203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat204: {
      value: cdktf.numberToHclTerraform(struct!.categorystat204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat205: {
      value: cdktf.numberToHclTerraform(struct!.categorystat205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat206: {
      value: cdktf.numberToHclTerraform(struct!.categorystat206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat207: {
      value: cdktf.numberToHclTerraform(struct!.categorystat207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat208: {
      value: cdktf.numberToHclTerraform(struct!.categorystat208),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat209: {
      value: cdktf.numberToHclTerraform(struct!.categorystat209),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat21: {
      value: cdktf.numberToHclTerraform(struct!.categorystat21),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat210: {
      value: cdktf.numberToHclTerraform(struct!.categorystat210),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat211: {
      value: cdktf.numberToHclTerraform(struct!.categorystat211),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat212: {
      value: cdktf.numberToHclTerraform(struct!.categorystat212),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat213: {
      value: cdktf.numberToHclTerraform(struct!.categorystat213),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat214: {
      value: cdktf.numberToHclTerraform(struct!.categorystat214),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat215: {
      value: cdktf.numberToHclTerraform(struct!.categorystat215),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat216: {
      value: cdktf.numberToHclTerraform(struct!.categorystat216),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat217: {
      value: cdktf.numberToHclTerraform(struct!.categorystat217),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat218: {
      value: cdktf.numberToHclTerraform(struct!.categorystat218),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat219: {
      value: cdktf.numberToHclTerraform(struct!.categorystat219),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat22: {
      value: cdktf.numberToHclTerraform(struct!.categorystat22),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat220: {
      value: cdktf.numberToHclTerraform(struct!.categorystat220),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat221: {
      value: cdktf.numberToHclTerraform(struct!.categorystat221),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat222: {
      value: cdktf.numberToHclTerraform(struct!.categorystat222),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat223: {
      value: cdktf.numberToHclTerraform(struct!.categorystat223),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat224: {
      value: cdktf.numberToHclTerraform(struct!.categorystat224),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat225: {
      value: cdktf.numberToHclTerraform(struct!.categorystat225),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat226: {
      value: cdktf.numberToHclTerraform(struct!.categorystat226),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat227: {
      value: cdktf.numberToHclTerraform(struct!.categorystat227),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat228: {
      value: cdktf.numberToHclTerraform(struct!.categorystat228),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat229: {
      value: cdktf.numberToHclTerraform(struct!.categorystat229),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat23: {
      value: cdktf.numberToHclTerraform(struct!.categorystat23),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat230: {
      value: cdktf.numberToHclTerraform(struct!.categorystat230),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat231: {
      value: cdktf.numberToHclTerraform(struct!.categorystat231),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat232: {
      value: cdktf.numberToHclTerraform(struct!.categorystat232),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat233: {
      value: cdktf.numberToHclTerraform(struct!.categorystat233),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat234: {
      value: cdktf.numberToHclTerraform(struct!.categorystat234),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat235: {
      value: cdktf.numberToHclTerraform(struct!.categorystat235),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat236: {
      value: cdktf.numberToHclTerraform(struct!.categorystat236),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat237: {
      value: cdktf.numberToHclTerraform(struct!.categorystat237),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat238: {
      value: cdktf.numberToHclTerraform(struct!.categorystat238),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat239: {
      value: cdktf.numberToHclTerraform(struct!.categorystat239),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat24: {
      value: cdktf.numberToHclTerraform(struct!.categorystat24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat240: {
      value: cdktf.numberToHclTerraform(struct!.categorystat240),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat241: {
      value: cdktf.numberToHclTerraform(struct!.categorystat241),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat242: {
      value: cdktf.numberToHclTerraform(struct!.categorystat242),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat243: {
      value: cdktf.numberToHclTerraform(struct!.categorystat243),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat244: {
      value: cdktf.numberToHclTerraform(struct!.categorystat244),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat245: {
      value: cdktf.numberToHclTerraform(struct!.categorystat245),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat246: {
      value: cdktf.numberToHclTerraform(struct!.categorystat246),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat247: {
      value: cdktf.numberToHclTerraform(struct!.categorystat247),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat248: {
      value: cdktf.numberToHclTerraform(struct!.categorystat248),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat249: {
      value: cdktf.numberToHclTerraform(struct!.categorystat249),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat25: {
      value: cdktf.numberToHclTerraform(struct!.categorystat25),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat250: {
      value: cdktf.numberToHclTerraform(struct!.categorystat250),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat251: {
      value: cdktf.numberToHclTerraform(struct!.categorystat251),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat252: {
      value: cdktf.numberToHclTerraform(struct!.categorystat252),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat253: {
      value: cdktf.numberToHclTerraform(struct!.categorystat253),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat254: {
      value: cdktf.numberToHclTerraform(struct!.categorystat254),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat255: {
      value: cdktf.numberToHclTerraform(struct!.categorystat255),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat256: {
      value: cdktf.numberToHclTerraform(struct!.categorystat256),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat26: {
      value: cdktf.numberToHclTerraform(struct!.categorystat26),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat27: {
      value: cdktf.numberToHclTerraform(struct!.categorystat27),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat28: {
      value: cdktf.numberToHclTerraform(struct!.categorystat28),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat29: {
      value: cdktf.numberToHclTerraform(struct!.categorystat29),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat3: {
      value: cdktf.numberToHclTerraform(struct!.categorystat3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat30: {
      value: cdktf.numberToHclTerraform(struct!.categorystat30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat31: {
      value: cdktf.numberToHclTerraform(struct!.categorystat31),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat32: {
      value: cdktf.numberToHclTerraform(struct!.categorystat32),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat33: {
      value: cdktf.numberToHclTerraform(struct!.categorystat33),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat34: {
      value: cdktf.numberToHclTerraform(struct!.categorystat34),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat35: {
      value: cdktf.numberToHclTerraform(struct!.categorystat35),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat36: {
      value: cdktf.numberToHclTerraform(struct!.categorystat36),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat37: {
      value: cdktf.numberToHclTerraform(struct!.categorystat37),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat38: {
      value: cdktf.numberToHclTerraform(struct!.categorystat38),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat39: {
      value: cdktf.numberToHclTerraform(struct!.categorystat39),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat4: {
      value: cdktf.numberToHclTerraform(struct!.categorystat4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat40: {
      value: cdktf.numberToHclTerraform(struct!.categorystat40),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat41: {
      value: cdktf.numberToHclTerraform(struct!.categorystat41),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat42: {
      value: cdktf.numberToHclTerraform(struct!.categorystat42),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat43: {
      value: cdktf.numberToHclTerraform(struct!.categorystat43),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat44: {
      value: cdktf.numberToHclTerraform(struct!.categorystat44),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat45: {
      value: cdktf.numberToHclTerraform(struct!.categorystat45),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat46: {
      value: cdktf.numberToHclTerraform(struct!.categorystat46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat47: {
      value: cdktf.numberToHclTerraform(struct!.categorystat47),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat48: {
      value: cdktf.numberToHclTerraform(struct!.categorystat48),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat49: {
      value: cdktf.numberToHclTerraform(struct!.categorystat49),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat5: {
      value: cdktf.numberToHclTerraform(struct!.categorystat5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat50: {
      value: cdktf.numberToHclTerraform(struct!.categorystat50),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat51: {
      value: cdktf.numberToHclTerraform(struct!.categorystat51),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat52: {
      value: cdktf.numberToHclTerraform(struct!.categorystat52),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat53: {
      value: cdktf.numberToHclTerraform(struct!.categorystat53),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat54: {
      value: cdktf.numberToHclTerraform(struct!.categorystat54),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat55: {
      value: cdktf.numberToHclTerraform(struct!.categorystat55),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat56: {
      value: cdktf.numberToHclTerraform(struct!.categorystat56),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat57: {
      value: cdktf.numberToHclTerraform(struct!.categorystat57),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat58: {
      value: cdktf.numberToHclTerraform(struct!.categorystat58),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat59: {
      value: cdktf.numberToHclTerraform(struct!.categorystat59),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat6: {
      value: cdktf.numberToHclTerraform(struct!.categorystat6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat60: {
      value: cdktf.numberToHclTerraform(struct!.categorystat60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat61: {
      value: cdktf.numberToHclTerraform(struct!.categorystat61),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat62: {
      value: cdktf.numberToHclTerraform(struct!.categorystat62),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat63: {
      value: cdktf.numberToHclTerraform(struct!.categorystat63),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat64: {
      value: cdktf.numberToHclTerraform(struct!.categorystat64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat65: {
      value: cdktf.numberToHclTerraform(struct!.categorystat65),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat66: {
      value: cdktf.numberToHclTerraform(struct!.categorystat66),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat67: {
      value: cdktf.numberToHclTerraform(struct!.categorystat67),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat68: {
      value: cdktf.numberToHclTerraform(struct!.categorystat68),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat69: {
      value: cdktf.numberToHclTerraform(struct!.categorystat69),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat7: {
      value: cdktf.numberToHclTerraform(struct!.categorystat7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat70: {
      value: cdktf.numberToHclTerraform(struct!.categorystat70),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat71: {
      value: cdktf.numberToHclTerraform(struct!.categorystat71),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat72: {
      value: cdktf.numberToHclTerraform(struct!.categorystat72),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat73: {
      value: cdktf.numberToHclTerraform(struct!.categorystat73),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat74: {
      value: cdktf.numberToHclTerraform(struct!.categorystat74),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat75: {
      value: cdktf.numberToHclTerraform(struct!.categorystat75),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat76: {
      value: cdktf.numberToHclTerraform(struct!.categorystat76),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat77: {
      value: cdktf.numberToHclTerraform(struct!.categorystat77),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat78: {
      value: cdktf.numberToHclTerraform(struct!.categorystat78),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat79: {
      value: cdktf.numberToHclTerraform(struct!.categorystat79),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat8: {
      value: cdktf.numberToHclTerraform(struct!.categorystat8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat80: {
      value: cdktf.numberToHclTerraform(struct!.categorystat80),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat81: {
      value: cdktf.numberToHclTerraform(struct!.categorystat81),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat82: {
      value: cdktf.numberToHclTerraform(struct!.categorystat82),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat83: {
      value: cdktf.numberToHclTerraform(struct!.categorystat83),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat84: {
      value: cdktf.numberToHclTerraform(struct!.categorystat84),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat85: {
      value: cdktf.numberToHclTerraform(struct!.categorystat85),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat86: {
      value: cdktf.numberToHclTerraform(struct!.categorystat86),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat87: {
      value: cdktf.numberToHclTerraform(struct!.categorystat87),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat88: {
      value: cdktf.numberToHclTerraform(struct!.categorystat88),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat89: {
      value: cdktf.numberToHclTerraform(struct!.categorystat89),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat9: {
      value: cdktf.numberToHclTerraform(struct!.categorystat9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat90: {
      value: cdktf.numberToHclTerraform(struct!.categorystat90),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat91: {
      value: cdktf.numberToHclTerraform(struct!.categorystat91),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat92: {
      value: cdktf.numberToHclTerraform(struct!.categorystat92),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat93: {
      value: cdktf.numberToHclTerraform(struct!.categorystat93),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat94: {
      value: cdktf.numberToHclTerraform(struct!.categorystat94),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat95: {
      value: cdktf.numberToHclTerraform(struct!.categorystat95),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat96: {
      value: cdktf.numberToHclTerraform(struct!.categorystat96),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat97: {
      value: cdktf.numberToHclTerraform(struct!.categorystat97),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat98: {
      value: cdktf.numberToHclTerraform(struct!.categorystat98),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categorystat99: {
      value: cdktf.numberToHclTerraform(struct!.categorystat99),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsTagStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsTagStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categorystat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat1 = this._categorystat1;
    }
    if (this._categorystat10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat10 = this._categorystat10;
    }
    if (this._categorystat100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat100 = this._categorystat100;
    }
    if (this._categorystat101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat101 = this._categorystat101;
    }
    if (this._categorystat102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat102 = this._categorystat102;
    }
    if (this._categorystat103 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat103 = this._categorystat103;
    }
    if (this._categorystat104 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat104 = this._categorystat104;
    }
    if (this._categorystat105 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat105 = this._categorystat105;
    }
    if (this._categorystat106 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat106 = this._categorystat106;
    }
    if (this._categorystat107 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat107 = this._categorystat107;
    }
    if (this._categorystat108 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat108 = this._categorystat108;
    }
    if (this._categorystat109 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat109 = this._categorystat109;
    }
    if (this._categorystat11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat11 = this._categorystat11;
    }
    if (this._categorystat110 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat110 = this._categorystat110;
    }
    if (this._categorystat111 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat111 = this._categorystat111;
    }
    if (this._categorystat112 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat112 = this._categorystat112;
    }
    if (this._categorystat113 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat113 = this._categorystat113;
    }
    if (this._categorystat114 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat114 = this._categorystat114;
    }
    if (this._categorystat115 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat115 = this._categorystat115;
    }
    if (this._categorystat116 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat116 = this._categorystat116;
    }
    if (this._categorystat117 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat117 = this._categorystat117;
    }
    if (this._categorystat118 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat118 = this._categorystat118;
    }
    if (this._categorystat119 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat119 = this._categorystat119;
    }
    if (this._categorystat12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat12 = this._categorystat12;
    }
    if (this._categorystat120 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat120 = this._categorystat120;
    }
    if (this._categorystat121 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat121 = this._categorystat121;
    }
    if (this._categorystat122 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat122 = this._categorystat122;
    }
    if (this._categorystat123 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat123 = this._categorystat123;
    }
    if (this._categorystat124 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat124 = this._categorystat124;
    }
    if (this._categorystat125 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat125 = this._categorystat125;
    }
    if (this._categorystat126 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat126 = this._categorystat126;
    }
    if (this._categorystat127 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat127 = this._categorystat127;
    }
    if (this._categorystat128 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat128 = this._categorystat128;
    }
    if (this._categorystat129 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat129 = this._categorystat129;
    }
    if (this._categorystat13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat13 = this._categorystat13;
    }
    if (this._categorystat130 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat130 = this._categorystat130;
    }
    if (this._categorystat131 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat131 = this._categorystat131;
    }
    if (this._categorystat132 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat132 = this._categorystat132;
    }
    if (this._categorystat133 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat133 = this._categorystat133;
    }
    if (this._categorystat134 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat134 = this._categorystat134;
    }
    if (this._categorystat135 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat135 = this._categorystat135;
    }
    if (this._categorystat136 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat136 = this._categorystat136;
    }
    if (this._categorystat137 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat137 = this._categorystat137;
    }
    if (this._categorystat138 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat138 = this._categorystat138;
    }
    if (this._categorystat139 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat139 = this._categorystat139;
    }
    if (this._categorystat14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat14 = this._categorystat14;
    }
    if (this._categorystat140 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat140 = this._categorystat140;
    }
    if (this._categorystat141 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat141 = this._categorystat141;
    }
    if (this._categorystat142 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat142 = this._categorystat142;
    }
    if (this._categorystat143 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat143 = this._categorystat143;
    }
    if (this._categorystat144 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat144 = this._categorystat144;
    }
    if (this._categorystat145 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat145 = this._categorystat145;
    }
    if (this._categorystat146 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat146 = this._categorystat146;
    }
    if (this._categorystat147 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat147 = this._categorystat147;
    }
    if (this._categorystat148 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat148 = this._categorystat148;
    }
    if (this._categorystat149 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat149 = this._categorystat149;
    }
    if (this._categorystat15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat15 = this._categorystat15;
    }
    if (this._categorystat150 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat150 = this._categorystat150;
    }
    if (this._categorystat151 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat151 = this._categorystat151;
    }
    if (this._categorystat152 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat152 = this._categorystat152;
    }
    if (this._categorystat153 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat153 = this._categorystat153;
    }
    if (this._categorystat154 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat154 = this._categorystat154;
    }
    if (this._categorystat155 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat155 = this._categorystat155;
    }
    if (this._categorystat156 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat156 = this._categorystat156;
    }
    if (this._categorystat157 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat157 = this._categorystat157;
    }
    if (this._categorystat158 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat158 = this._categorystat158;
    }
    if (this._categorystat159 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat159 = this._categorystat159;
    }
    if (this._categorystat16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat16 = this._categorystat16;
    }
    if (this._categorystat160 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat160 = this._categorystat160;
    }
    if (this._categorystat161 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat161 = this._categorystat161;
    }
    if (this._categorystat162 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat162 = this._categorystat162;
    }
    if (this._categorystat163 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat163 = this._categorystat163;
    }
    if (this._categorystat164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat164 = this._categorystat164;
    }
    if (this._categorystat165 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat165 = this._categorystat165;
    }
    if (this._categorystat166 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat166 = this._categorystat166;
    }
    if (this._categorystat167 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat167 = this._categorystat167;
    }
    if (this._categorystat168 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat168 = this._categorystat168;
    }
    if (this._categorystat169 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat169 = this._categorystat169;
    }
    if (this._categorystat17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat17 = this._categorystat17;
    }
    if (this._categorystat170 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat170 = this._categorystat170;
    }
    if (this._categorystat171 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat171 = this._categorystat171;
    }
    if (this._categorystat172 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat172 = this._categorystat172;
    }
    if (this._categorystat173 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat173 = this._categorystat173;
    }
    if (this._categorystat174 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat174 = this._categorystat174;
    }
    if (this._categorystat175 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat175 = this._categorystat175;
    }
    if (this._categorystat176 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat176 = this._categorystat176;
    }
    if (this._categorystat177 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat177 = this._categorystat177;
    }
    if (this._categorystat178 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat178 = this._categorystat178;
    }
    if (this._categorystat179 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat179 = this._categorystat179;
    }
    if (this._categorystat18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat18 = this._categorystat18;
    }
    if (this._categorystat180 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat180 = this._categorystat180;
    }
    if (this._categorystat181 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat181 = this._categorystat181;
    }
    if (this._categorystat182 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat182 = this._categorystat182;
    }
    if (this._categorystat183 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat183 = this._categorystat183;
    }
    if (this._categorystat184 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat184 = this._categorystat184;
    }
    if (this._categorystat185 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat185 = this._categorystat185;
    }
    if (this._categorystat186 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat186 = this._categorystat186;
    }
    if (this._categorystat187 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat187 = this._categorystat187;
    }
    if (this._categorystat188 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat188 = this._categorystat188;
    }
    if (this._categorystat189 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat189 = this._categorystat189;
    }
    if (this._categorystat19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat19 = this._categorystat19;
    }
    if (this._categorystat190 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat190 = this._categorystat190;
    }
    if (this._categorystat191 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat191 = this._categorystat191;
    }
    if (this._categorystat192 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat192 = this._categorystat192;
    }
    if (this._categorystat193 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat193 = this._categorystat193;
    }
    if (this._categorystat194 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat194 = this._categorystat194;
    }
    if (this._categorystat195 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat195 = this._categorystat195;
    }
    if (this._categorystat196 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat196 = this._categorystat196;
    }
    if (this._categorystat197 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat197 = this._categorystat197;
    }
    if (this._categorystat198 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat198 = this._categorystat198;
    }
    if (this._categorystat199 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat199 = this._categorystat199;
    }
    if (this._categorystat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat2 = this._categorystat2;
    }
    if (this._categorystat20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat20 = this._categorystat20;
    }
    if (this._categorystat200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat200 = this._categorystat200;
    }
    if (this._categorystat201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat201 = this._categorystat201;
    }
    if (this._categorystat202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat202 = this._categorystat202;
    }
    if (this._categorystat203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat203 = this._categorystat203;
    }
    if (this._categorystat204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat204 = this._categorystat204;
    }
    if (this._categorystat205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat205 = this._categorystat205;
    }
    if (this._categorystat206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat206 = this._categorystat206;
    }
    if (this._categorystat207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat207 = this._categorystat207;
    }
    if (this._categorystat208 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat208 = this._categorystat208;
    }
    if (this._categorystat209 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat209 = this._categorystat209;
    }
    if (this._categorystat21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat21 = this._categorystat21;
    }
    if (this._categorystat210 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat210 = this._categorystat210;
    }
    if (this._categorystat211 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat211 = this._categorystat211;
    }
    if (this._categorystat212 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat212 = this._categorystat212;
    }
    if (this._categorystat213 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat213 = this._categorystat213;
    }
    if (this._categorystat214 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat214 = this._categorystat214;
    }
    if (this._categorystat215 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat215 = this._categorystat215;
    }
    if (this._categorystat216 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat216 = this._categorystat216;
    }
    if (this._categorystat217 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat217 = this._categorystat217;
    }
    if (this._categorystat218 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat218 = this._categorystat218;
    }
    if (this._categorystat219 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat219 = this._categorystat219;
    }
    if (this._categorystat22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat22 = this._categorystat22;
    }
    if (this._categorystat220 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat220 = this._categorystat220;
    }
    if (this._categorystat221 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat221 = this._categorystat221;
    }
    if (this._categorystat222 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat222 = this._categorystat222;
    }
    if (this._categorystat223 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat223 = this._categorystat223;
    }
    if (this._categorystat224 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat224 = this._categorystat224;
    }
    if (this._categorystat225 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat225 = this._categorystat225;
    }
    if (this._categorystat226 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat226 = this._categorystat226;
    }
    if (this._categorystat227 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat227 = this._categorystat227;
    }
    if (this._categorystat228 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat228 = this._categorystat228;
    }
    if (this._categorystat229 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat229 = this._categorystat229;
    }
    if (this._categorystat23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat23 = this._categorystat23;
    }
    if (this._categorystat230 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat230 = this._categorystat230;
    }
    if (this._categorystat231 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat231 = this._categorystat231;
    }
    if (this._categorystat232 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat232 = this._categorystat232;
    }
    if (this._categorystat233 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat233 = this._categorystat233;
    }
    if (this._categorystat234 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat234 = this._categorystat234;
    }
    if (this._categorystat235 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat235 = this._categorystat235;
    }
    if (this._categorystat236 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat236 = this._categorystat236;
    }
    if (this._categorystat237 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat237 = this._categorystat237;
    }
    if (this._categorystat238 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat238 = this._categorystat238;
    }
    if (this._categorystat239 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat239 = this._categorystat239;
    }
    if (this._categorystat24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat24 = this._categorystat24;
    }
    if (this._categorystat240 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat240 = this._categorystat240;
    }
    if (this._categorystat241 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat241 = this._categorystat241;
    }
    if (this._categorystat242 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat242 = this._categorystat242;
    }
    if (this._categorystat243 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat243 = this._categorystat243;
    }
    if (this._categorystat244 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat244 = this._categorystat244;
    }
    if (this._categorystat245 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat245 = this._categorystat245;
    }
    if (this._categorystat246 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat246 = this._categorystat246;
    }
    if (this._categorystat247 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat247 = this._categorystat247;
    }
    if (this._categorystat248 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat248 = this._categorystat248;
    }
    if (this._categorystat249 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat249 = this._categorystat249;
    }
    if (this._categorystat25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat25 = this._categorystat25;
    }
    if (this._categorystat250 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat250 = this._categorystat250;
    }
    if (this._categorystat251 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat251 = this._categorystat251;
    }
    if (this._categorystat252 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat252 = this._categorystat252;
    }
    if (this._categorystat253 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat253 = this._categorystat253;
    }
    if (this._categorystat254 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat254 = this._categorystat254;
    }
    if (this._categorystat255 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat255 = this._categorystat255;
    }
    if (this._categorystat256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat256 = this._categorystat256;
    }
    if (this._categorystat26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat26 = this._categorystat26;
    }
    if (this._categorystat27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat27 = this._categorystat27;
    }
    if (this._categorystat28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat28 = this._categorystat28;
    }
    if (this._categorystat29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat29 = this._categorystat29;
    }
    if (this._categorystat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat3 = this._categorystat3;
    }
    if (this._categorystat30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat30 = this._categorystat30;
    }
    if (this._categorystat31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat31 = this._categorystat31;
    }
    if (this._categorystat32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat32 = this._categorystat32;
    }
    if (this._categorystat33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat33 = this._categorystat33;
    }
    if (this._categorystat34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat34 = this._categorystat34;
    }
    if (this._categorystat35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat35 = this._categorystat35;
    }
    if (this._categorystat36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat36 = this._categorystat36;
    }
    if (this._categorystat37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat37 = this._categorystat37;
    }
    if (this._categorystat38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat38 = this._categorystat38;
    }
    if (this._categorystat39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat39 = this._categorystat39;
    }
    if (this._categorystat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat4 = this._categorystat4;
    }
    if (this._categorystat40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat40 = this._categorystat40;
    }
    if (this._categorystat41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat41 = this._categorystat41;
    }
    if (this._categorystat42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat42 = this._categorystat42;
    }
    if (this._categorystat43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat43 = this._categorystat43;
    }
    if (this._categorystat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat44 = this._categorystat44;
    }
    if (this._categorystat45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat45 = this._categorystat45;
    }
    if (this._categorystat46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat46 = this._categorystat46;
    }
    if (this._categorystat47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat47 = this._categorystat47;
    }
    if (this._categorystat48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat48 = this._categorystat48;
    }
    if (this._categorystat49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat49 = this._categorystat49;
    }
    if (this._categorystat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat5 = this._categorystat5;
    }
    if (this._categorystat50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat50 = this._categorystat50;
    }
    if (this._categorystat51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat51 = this._categorystat51;
    }
    if (this._categorystat52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat52 = this._categorystat52;
    }
    if (this._categorystat53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat53 = this._categorystat53;
    }
    if (this._categorystat54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat54 = this._categorystat54;
    }
    if (this._categorystat55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat55 = this._categorystat55;
    }
    if (this._categorystat56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat56 = this._categorystat56;
    }
    if (this._categorystat57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat57 = this._categorystat57;
    }
    if (this._categorystat58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat58 = this._categorystat58;
    }
    if (this._categorystat59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat59 = this._categorystat59;
    }
    if (this._categorystat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat6 = this._categorystat6;
    }
    if (this._categorystat60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat60 = this._categorystat60;
    }
    if (this._categorystat61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat61 = this._categorystat61;
    }
    if (this._categorystat62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat62 = this._categorystat62;
    }
    if (this._categorystat63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat63 = this._categorystat63;
    }
    if (this._categorystat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat64 = this._categorystat64;
    }
    if (this._categorystat65 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat65 = this._categorystat65;
    }
    if (this._categorystat66 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat66 = this._categorystat66;
    }
    if (this._categorystat67 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat67 = this._categorystat67;
    }
    if (this._categorystat68 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat68 = this._categorystat68;
    }
    if (this._categorystat69 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat69 = this._categorystat69;
    }
    if (this._categorystat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat7 = this._categorystat7;
    }
    if (this._categorystat70 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat70 = this._categorystat70;
    }
    if (this._categorystat71 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat71 = this._categorystat71;
    }
    if (this._categorystat72 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat72 = this._categorystat72;
    }
    if (this._categorystat73 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat73 = this._categorystat73;
    }
    if (this._categorystat74 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat74 = this._categorystat74;
    }
    if (this._categorystat75 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat75 = this._categorystat75;
    }
    if (this._categorystat76 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat76 = this._categorystat76;
    }
    if (this._categorystat77 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat77 = this._categorystat77;
    }
    if (this._categorystat78 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat78 = this._categorystat78;
    }
    if (this._categorystat79 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat79 = this._categorystat79;
    }
    if (this._categorystat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat8 = this._categorystat8;
    }
    if (this._categorystat80 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat80 = this._categorystat80;
    }
    if (this._categorystat81 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat81 = this._categorystat81;
    }
    if (this._categorystat82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat82 = this._categorystat82;
    }
    if (this._categorystat83 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat83 = this._categorystat83;
    }
    if (this._categorystat84 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat84 = this._categorystat84;
    }
    if (this._categorystat85 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat85 = this._categorystat85;
    }
    if (this._categorystat86 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat86 = this._categorystat86;
    }
    if (this._categorystat87 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat87 = this._categorystat87;
    }
    if (this._categorystat88 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat88 = this._categorystat88;
    }
    if (this._categorystat89 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat89 = this._categorystat89;
    }
    if (this._categorystat9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat9 = this._categorystat9;
    }
    if (this._categorystat90 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat90 = this._categorystat90;
    }
    if (this._categorystat91 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat91 = this._categorystat91;
    }
    if (this._categorystat92 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat92 = this._categorystat92;
    }
    if (this._categorystat93 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat93 = this._categorystat93;
    }
    if (this._categorystat94 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat94 = this._categorystat94;
    }
    if (this._categorystat95 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat95 = this._categorystat95;
    }
    if (this._categorystat96 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat96 = this._categorystat96;
    }
    if (this._categorystat97 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat97 = this._categorystat97;
    }
    if (this._categorystat98 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat98 = this._categorystat98;
    }
    if (this._categorystat99 !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorystat99 = this._categorystat99;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsTagStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categorystat1 = undefined;
      this._categorystat10 = undefined;
      this._categorystat100 = undefined;
      this._categorystat101 = undefined;
      this._categorystat102 = undefined;
      this._categorystat103 = undefined;
      this._categorystat104 = undefined;
      this._categorystat105 = undefined;
      this._categorystat106 = undefined;
      this._categorystat107 = undefined;
      this._categorystat108 = undefined;
      this._categorystat109 = undefined;
      this._categorystat11 = undefined;
      this._categorystat110 = undefined;
      this._categorystat111 = undefined;
      this._categorystat112 = undefined;
      this._categorystat113 = undefined;
      this._categorystat114 = undefined;
      this._categorystat115 = undefined;
      this._categorystat116 = undefined;
      this._categorystat117 = undefined;
      this._categorystat118 = undefined;
      this._categorystat119 = undefined;
      this._categorystat12 = undefined;
      this._categorystat120 = undefined;
      this._categorystat121 = undefined;
      this._categorystat122 = undefined;
      this._categorystat123 = undefined;
      this._categorystat124 = undefined;
      this._categorystat125 = undefined;
      this._categorystat126 = undefined;
      this._categorystat127 = undefined;
      this._categorystat128 = undefined;
      this._categorystat129 = undefined;
      this._categorystat13 = undefined;
      this._categorystat130 = undefined;
      this._categorystat131 = undefined;
      this._categorystat132 = undefined;
      this._categorystat133 = undefined;
      this._categorystat134 = undefined;
      this._categorystat135 = undefined;
      this._categorystat136 = undefined;
      this._categorystat137 = undefined;
      this._categorystat138 = undefined;
      this._categorystat139 = undefined;
      this._categorystat14 = undefined;
      this._categorystat140 = undefined;
      this._categorystat141 = undefined;
      this._categorystat142 = undefined;
      this._categorystat143 = undefined;
      this._categorystat144 = undefined;
      this._categorystat145 = undefined;
      this._categorystat146 = undefined;
      this._categorystat147 = undefined;
      this._categorystat148 = undefined;
      this._categorystat149 = undefined;
      this._categorystat15 = undefined;
      this._categorystat150 = undefined;
      this._categorystat151 = undefined;
      this._categorystat152 = undefined;
      this._categorystat153 = undefined;
      this._categorystat154 = undefined;
      this._categorystat155 = undefined;
      this._categorystat156 = undefined;
      this._categorystat157 = undefined;
      this._categorystat158 = undefined;
      this._categorystat159 = undefined;
      this._categorystat16 = undefined;
      this._categorystat160 = undefined;
      this._categorystat161 = undefined;
      this._categorystat162 = undefined;
      this._categorystat163 = undefined;
      this._categorystat164 = undefined;
      this._categorystat165 = undefined;
      this._categorystat166 = undefined;
      this._categorystat167 = undefined;
      this._categorystat168 = undefined;
      this._categorystat169 = undefined;
      this._categorystat17 = undefined;
      this._categorystat170 = undefined;
      this._categorystat171 = undefined;
      this._categorystat172 = undefined;
      this._categorystat173 = undefined;
      this._categorystat174 = undefined;
      this._categorystat175 = undefined;
      this._categorystat176 = undefined;
      this._categorystat177 = undefined;
      this._categorystat178 = undefined;
      this._categorystat179 = undefined;
      this._categorystat18 = undefined;
      this._categorystat180 = undefined;
      this._categorystat181 = undefined;
      this._categorystat182 = undefined;
      this._categorystat183 = undefined;
      this._categorystat184 = undefined;
      this._categorystat185 = undefined;
      this._categorystat186 = undefined;
      this._categorystat187 = undefined;
      this._categorystat188 = undefined;
      this._categorystat189 = undefined;
      this._categorystat19 = undefined;
      this._categorystat190 = undefined;
      this._categorystat191 = undefined;
      this._categorystat192 = undefined;
      this._categorystat193 = undefined;
      this._categorystat194 = undefined;
      this._categorystat195 = undefined;
      this._categorystat196 = undefined;
      this._categorystat197 = undefined;
      this._categorystat198 = undefined;
      this._categorystat199 = undefined;
      this._categorystat2 = undefined;
      this._categorystat20 = undefined;
      this._categorystat200 = undefined;
      this._categorystat201 = undefined;
      this._categorystat202 = undefined;
      this._categorystat203 = undefined;
      this._categorystat204 = undefined;
      this._categorystat205 = undefined;
      this._categorystat206 = undefined;
      this._categorystat207 = undefined;
      this._categorystat208 = undefined;
      this._categorystat209 = undefined;
      this._categorystat21 = undefined;
      this._categorystat210 = undefined;
      this._categorystat211 = undefined;
      this._categorystat212 = undefined;
      this._categorystat213 = undefined;
      this._categorystat214 = undefined;
      this._categorystat215 = undefined;
      this._categorystat216 = undefined;
      this._categorystat217 = undefined;
      this._categorystat218 = undefined;
      this._categorystat219 = undefined;
      this._categorystat22 = undefined;
      this._categorystat220 = undefined;
      this._categorystat221 = undefined;
      this._categorystat222 = undefined;
      this._categorystat223 = undefined;
      this._categorystat224 = undefined;
      this._categorystat225 = undefined;
      this._categorystat226 = undefined;
      this._categorystat227 = undefined;
      this._categorystat228 = undefined;
      this._categorystat229 = undefined;
      this._categorystat23 = undefined;
      this._categorystat230 = undefined;
      this._categorystat231 = undefined;
      this._categorystat232 = undefined;
      this._categorystat233 = undefined;
      this._categorystat234 = undefined;
      this._categorystat235 = undefined;
      this._categorystat236 = undefined;
      this._categorystat237 = undefined;
      this._categorystat238 = undefined;
      this._categorystat239 = undefined;
      this._categorystat24 = undefined;
      this._categorystat240 = undefined;
      this._categorystat241 = undefined;
      this._categorystat242 = undefined;
      this._categorystat243 = undefined;
      this._categorystat244 = undefined;
      this._categorystat245 = undefined;
      this._categorystat246 = undefined;
      this._categorystat247 = undefined;
      this._categorystat248 = undefined;
      this._categorystat249 = undefined;
      this._categorystat25 = undefined;
      this._categorystat250 = undefined;
      this._categorystat251 = undefined;
      this._categorystat252 = undefined;
      this._categorystat253 = undefined;
      this._categorystat254 = undefined;
      this._categorystat255 = undefined;
      this._categorystat256 = undefined;
      this._categorystat26 = undefined;
      this._categorystat27 = undefined;
      this._categorystat28 = undefined;
      this._categorystat29 = undefined;
      this._categorystat3 = undefined;
      this._categorystat30 = undefined;
      this._categorystat31 = undefined;
      this._categorystat32 = undefined;
      this._categorystat33 = undefined;
      this._categorystat34 = undefined;
      this._categorystat35 = undefined;
      this._categorystat36 = undefined;
      this._categorystat37 = undefined;
      this._categorystat38 = undefined;
      this._categorystat39 = undefined;
      this._categorystat4 = undefined;
      this._categorystat40 = undefined;
      this._categorystat41 = undefined;
      this._categorystat42 = undefined;
      this._categorystat43 = undefined;
      this._categorystat44 = undefined;
      this._categorystat45 = undefined;
      this._categorystat46 = undefined;
      this._categorystat47 = undefined;
      this._categorystat48 = undefined;
      this._categorystat49 = undefined;
      this._categorystat5 = undefined;
      this._categorystat50 = undefined;
      this._categorystat51 = undefined;
      this._categorystat52 = undefined;
      this._categorystat53 = undefined;
      this._categorystat54 = undefined;
      this._categorystat55 = undefined;
      this._categorystat56 = undefined;
      this._categorystat57 = undefined;
      this._categorystat58 = undefined;
      this._categorystat59 = undefined;
      this._categorystat6 = undefined;
      this._categorystat60 = undefined;
      this._categorystat61 = undefined;
      this._categorystat62 = undefined;
      this._categorystat63 = undefined;
      this._categorystat64 = undefined;
      this._categorystat65 = undefined;
      this._categorystat66 = undefined;
      this._categorystat67 = undefined;
      this._categorystat68 = undefined;
      this._categorystat69 = undefined;
      this._categorystat7 = undefined;
      this._categorystat70 = undefined;
      this._categorystat71 = undefined;
      this._categorystat72 = undefined;
      this._categorystat73 = undefined;
      this._categorystat74 = undefined;
      this._categorystat75 = undefined;
      this._categorystat76 = undefined;
      this._categorystat77 = undefined;
      this._categorystat78 = undefined;
      this._categorystat79 = undefined;
      this._categorystat8 = undefined;
      this._categorystat80 = undefined;
      this._categorystat81 = undefined;
      this._categorystat82 = undefined;
      this._categorystat83 = undefined;
      this._categorystat84 = undefined;
      this._categorystat85 = undefined;
      this._categorystat86 = undefined;
      this._categorystat87 = undefined;
      this._categorystat88 = undefined;
      this._categorystat89 = undefined;
      this._categorystat9 = undefined;
      this._categorystat90 = undefined;
      this._categorystat91 = undefined;
      this._categorystat92 = undefined;
      this._categorystat93 = undefined;
      this._categorystat94 = undefined;
      this._categorystat95 = undefined;
      this._categorystat96 = undefined;
      this._categorystat97 = undefined;
      this._categorystat98 = undefined;
      this._categorystat99 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categorystat1 = value.categorystat1;
      this._categorystat10 = value.categorystat10;
      this._categorystat100 = value.categorystat100;
      this._categorystat101 = value.categorystat101;
      this._categorystat102 = value.categorystat102;
      this._categorystat103 = value.categorystat103;
      this._categorystat104 = value.categorystat104;
      this._categorystat105 = value.categorystat105;
      this._categorystat106 = value.categorystat106;
      this._categorystat107 = value.categorystat107;
      this._categorystat108 = value.categorystat108;
      this._categorystat109 = value.categorystat109;
      this._categorystat11 = value.categorystat11;
      this._categorystat110 = value.categorystat110;
      this._categorystat111 = value.categorystat111;
      this._categorystat112 = value.categorystat112;
      this._categorystat113 = value.categorystat113;
      this._categorystat114 = value.categorystat114;
      this._categorystat115 = value.categorystat115;
      this._categorystat116 = value.categorystat116;
      this._categorystat117 = value.categorystat117;
      this._categorystat118 = value.categorystat118;
      this._categorystat119 = value.categorystat119;
      this._categorystat12 = value.categorystat12;
      this._categorystat120 = value.categorystat120;
      this._categorystat121 = value.categorystat121;
      this._categorystat122 = value.categorystat122;
      this._categorystat123 = value.categorystat123;
      this._categorystat124 = value.categorystat124;
      this._categorystat125 = value.categorystat125;
      this._categorystat126 = value.categorystat126;
      this._categorystat127 = value.categorystat127;
      this._categorystat128 = value.categorystat128;
      this._categorystat129 = value.categorystat129;
      this._categorystat13 = value.categorystat13;
      this._categorystat130 = value.categorystat130;
      this._categorystat131 = value.categorystat131;
      this._categorystat132 = value.categorystat132;
      this._categorystat133 = value.categorystat133;
      this._categorystat134 = value.categorystat134;
      this._categorystat135 = value.categorystat135;
      this._categorystat136 = value.categorystat136;
      this._categorystat137 = value.categorystat137;
      this._categorystat138 = value.categorystat138;
      this._categorystat139 = value.categorystat139;
      this._categorystat14 = value.categorystat14;
      this._categorystat140 = value.categorystat140;
      this._categorystat141 = value.categorystat141;
      this._categorystat142 = value.categorystat142;
      this._categorystat143 = value.categorystat143;
      this._categorystat144 = value.categorystat144;
      this._categorystat145 = value.categorystat145;
      this._categorystat146 = value.categorystat146;
      this._categorystat147 = value.categorystat147;
      this._categorystat148 = value.categorystat148;
      this._categorystat149 = value.categorystat149;
      this._categorystat15 = value.categorystat15;
      this._categorystat150 = value.categorystat150;
      this._categorystat151 = value.categorystat151;
      this._categorystat152 = value.categorystat152;
      this._categorystat153 = value.categorystat153;
      this._categorystat154 = value.categorystat154;
      this._categorystat155 = value.categorystat155;
      this._categorystat156 = value.categorystat156;
      this._categorystat157 = value.categorystat157;
      this._categorystat158 = value.categorystat158;
      this._categorystat159 = value.categorystat159;
      this._categorystat16 = value.categorystat16;
      this._categorystat160 = value.categorystat160;
      this._categorystat161 = value.categorystat161;
      this._categorystat162 = value.categorystat162;
      this._categorystat163 = value.categorystat163;
      this._categorystat164 = value.categorystat164;
      this._categorystat165 = value.categorystat165;
      this._categorystat166 = value.categorystat166;
      this._categorystat167 = value.categorystat167;
      this._categorystat168 = value.categorystat168;
      this._categorystat169 = value.categorystat169;
      this._categorystat17 = value.categorystat17;
      this._categorystat170 = value.categorystat170;
      this._categorystat171 = value.categorystat171;
      this._categorystat172 = value.categorystat172;
      this._categorystat173 = value.categorystat173;
      this._categorystat174 = value.categorystat174;
      this._categorystat175 = value.categorystat175;
      this._categorystat176 = value.categorystat176;
      this._categorystat177 = value.categorystat177;
      this._categorystat178 = value.categorystat178;
      this._categorystat179 = value.categorystat179;
      this._categorystat18 = value.categorystat18;
      this._categorystat180 = value.categorystat180;
      this._categorystat181 = value.categorystat181;
      this._categorystat182 = value.categorystat182;
      this._categorystat183 = value.categorystat183;
      this._categorystat184 = value.categorystat184;
      this._categorystat185 = value.categorystat185;
      this._categorystat186 = value.categorystat186;
      this._categorystat187 = value.categorystat187;
      this._categorystat188 = value.categorystat188;
      this._categorystat189 = value.categorystat189;
      this._categorystat19 = value.categorystat19;
      this._categorystat190 = value.categorystat190;
      this._categorystat191 = value.categorystat191;
      this._categorystat192 = value.categorystat192;
      this._categorystat193 = value.categorystat193;
      this._categorystat194 = value.categorystat194;
      this._categorystat195 = value.categorystat195;
      this._categorystat196 = value.categorystat196;
      this._categorystat197 = value.categorystat197;
      this._categorystat198 = value.categorystat198;
      this._categorystat199 = value.categorystat199;
      this._categorystat2 = value.categorystat2;
      this._categorystat20 = value.categorystat20;
      this._categorystat200 = value.categorystat200;
      this._categorystat201 = value.categorystat201;
      this._categorystat202 = value.categorystat202;
      this._categorystat203 = value.categorystat203;
      this._categorystat204 = value.categorystat204;
      this._categorystat205 = value.categorystat205;
      this._categorystat206 = value.categorystat206;
      this._categorystat207 = value.categorystat207;
      this._categorystat208 = value.categorystat208;
      this._categorystat209 = value.categorystat209;
      this._categorystat21 = value.categorystat21;
      this._categorystat210 = value.categorystat210;
      this._categorystat211 = value.categorystat211;
      this._categorystat212 = value.categorystat212;
      this._categorystat213 = value.categorystat213;
      this._categorystat214 = value.categorystat214;
      this._categorystat215 = value.categorystat215;
      this._categorystat216 = value.categorystat216;
      this._categorystat217 = value.categorystat217;
      this._categorystat218 = value.categorystat218;
      this._categorystat219 = value.categorystat219;
      this._categorystat22 = value.categorystat22;
      this._categorystat220 = value.categorystat220;
      this._categorystat221 = value.categorystat221;
      this._categorystat222 = value.categorystat222;
      this._categorystat223 = value.categorystat223;
      this._categorystat224 = value.categorystat224;
      this._categorystat225 = value.categorystat225;
      this._categorystat226 = value.categorystat226;
      this._categorystat227 = value.categorystat227;
      this._categorystat228 = value.categorystat228;
      this._categorystat229 = value.categorystat229;
      this._categorystat23 = value.categorystat23;
      this._categorystat230 = value.categorystat230;
      this._categorystat231 = value.categorystat231;
      this._categorystat232 = value.categorystat232;
      this._categorystat233 = value.categorystat233;
      this._categorystat234 = value.categorystat234;
      this._categorystat235 = value.categorystat235;
      this._categorystat236 = value.categorystat236;
      this._categorystat237 = value.categorystat237;
      this._categorystat238 = value.categorystat238;
      this._categorystat239 = value.categorystat239;
      this._categorystat24 = value.categorystat24;
      this._categorystat240 = value.categorystat240;
      this._categorystat241 = value.categorystat241;
      this._categorystat242 = value.categorystat242;
      this._categorystat243 = value.categorystat243;
      this._categorystat244 = value.categorystat244;
      this._categorystat245 = value.categorystat245;
      this._categorystat246 = value.categorystat246;
      this._categorystat247 = value.categorystat247;
      this._categorystat248 = value.categorystat248;
      this._categorystat249 = value.categorystat249;
      this._categorystat25 = value.categorystat25;
      this._categorystat250 = value.categorystat250;
      this._categorystat251 = value.categorystat251;
      this._categorystat252 = value.categorystat252;
      this._categorystat253 = value.categorystat253;
      this._categorystat254 = value.categorystat254;
      this._categorystat255 = value.categorystat255;
      this._categorystat256 = value.categorystat256;
      this._categorystat26 = value.categorystat26;
      this._categorystat27 = value.categorystat27;
      this._categorystat28 = value.categorystat28;
      this._categorystat29 = value.categorystat29;
      this._categorystat3 = value.categorystat3;
      this._categorystat30 = value.categorystat30;
      this._categorystat31 = value.categorystat31;
      this._categorystat32 = value.categorystat32;
      this._categorystat33 = value.categorystat33;
      this._categorystat34 = value.categorystat34;
      this._categorystat35 = value.categorystat35;
      this._categorystat36 = value.categorystat36;
      this._categorystat37 = value.categorystat37;
      this._categorystat38 = value.categorystat38;
      this._categorystat39 = value.categorystat39;
      this._categorystat4 = value.categorystat4;
      this._categorystat40 = value.categorystat40;
      this._categorystat41 = value.categorystat41;
      this._categorystat42 = value.categorystat42;
      this._categorystat43 = value.categorystat43;
      this._categorystat44 = value.categorystat44;
      this._categorystat45 = value.categorystat45;
      this._categorystat46 = value.categorystat46;
      this._categorystat47 = value.categorystat47;
      this._categorystat48 = value.categorystat48;
      this._categorystat49 = value.categorystat49;
      this._categorystat5 = value.categorystat5;
      this._categorystat50 = value.categorystat50;
      this._categorystat51 = value.categorystat51;
      this._categorystat52 = value.categorystat52;
      this._categorystat53 = value.categorystat53;
      this._categorystat54 = value.categorystat54;
      this._categorystat55 = value.categorystat55;
      this._categorystat56 = value.categorystat56;
      this._categorystat57 = value.categorystat57;
      this._categorystat58 = value.categorystat58;
      this._categorystat59 = value.categorystat59;
      this._categorystat6 = value.categorystat6;
      this._categorystat60 = value.categorystat60;
      this._categorystat61 = value.categorystat61;
      this._categorystat62 = value.categorystat62;
      this._categorystat63 = value.categorystat63;
      this._categorystat64 = value.categorystat64;
      this._categorystat65 = value.categorystat65;
      this._categorystat66 = value.categorystat66;
      this._categorystat67 = value.categorystat67;
      this._categorystat68 = value.categorystat68;
      this._categorystat69 = value.categorystat69;
      this._categorystat7 = value.categorystat7;
      this._categorystat70 = value.categorystat70;
      this._categorystat71 = value.categorystat71;
      this._categorystat72 = value.categorystat72;
      this._categorystat73 = value.categorystat73;
      this._categorystat74 = value.categorystat74;
      this._categorystat75 = value.categorystat75;
      this._categorystat76 = value.categorystat76;
      this._categorystat77 = value.categorystat77;
      this._categorystat78 = value.categorystat78;
      this._categorystat79 = value.categorystat79;
      this._categorystat8 = value.categorystat8;
      this._categorystat80 = value.categorystat80;
      this._categorystat81 = value.categorystat81;
      this._categorystat82 = value.categorystat82;
      this._categorystat83 = value.categorystat83;
      this._categorystat84 = value.categorystat84;
      this._categorystat85 = value.categorystat85;
      this._categorystat86 = value.categorystat86;
      this._categorystat87 = value.categorystat87;
      this._categorystat88 = value.categorystat88;
      this._categorystat89 = value.categorystat89;
      this._categorystat9 = value.categorystat9;
      this._categorystat90 = value.categorystat90;
      this._categorystat91 = value.categorystat91;
      this._categorystat92 = value.categorystat92;
      this._categorystat93 = value.categorystat93;
      this._categorystat94 = value.categorystat94;
      this._categorystat95 = value.categorystat95;
      this._categorystat96 = value.categorystat96;
      this._categorystat97 = value.categorystat97;
      this._categorystat98 = value.categorystat98;
      this._categorystat99 = value.categorystat99;
    }
  }

  // categorystat1 - computed: false, optional: true, required: false
  private _categorystat1?: number; 
  public get categorystat1() {
    return this.getNumberAttribute('categorystat1');
  }
  public set categorystat1(value: number) {
    this._categorystat1 = value;
  }
  public resetCategorystat1() {
    this._categorystat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat1Input() {
    return this._categorystat1;
  }

  // categorystat10 - computed: false, optional: true, required: false
  private _categorystat10?: number; 
  public get categorystat10() {
    return this.getNumberAttribute('categorystat10');
  }
  public set categorystat10(value: number) {
    this._categorystat10 = value;
  }
  public resetCategorystat10() {
    this._categorystat10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat10Input() {
    return this._categorystat10;
  }

  // categorystat100 - computed: false, optional: true, required: false
  private _categorystat100?: number; 
  public get categorystat100() {
    return this.getNumberAttribute('categorystat100');
  }
  public set categorystat100(value: number) {
    this._categorystat100 = value;
  }
  public resetCategorystat100() {
    this._categorystat100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat100Input() {
    return this._categorystat100;
  }

  // categorystat101 - computed: false, optional: true, required: false
  private _categorystat101?: number; 
  public get categorystat101() {
    return this.getNumberAttribute('categorystat101');
  }
  public set categorystat101(value: number) {
    this._categorystat101 = value;
  }
  public resetCategorystat101() {
    this._categorystat101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat101Input() {
    return this._categorystat101;
  }

  // categorystat102 - computed: false, optional: true, required: false
  private _categorystat102?: number; 
  public get categorystat102() {
    return this.getNumberAttribute('categorystat102');
  }
  public set categorystat102(value: number) {
    this._categorystat102 = value;
  }
  public resetCategorystat102() {
    this._categorystat102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat102Input() {
    return this._categorystat102;
  }

  // categorystat103 - computed: false, optional: true, required: false
  private _categorystat103?: number; 
  public get categorystat103() {
    return this.getNumberAttribute('categorystat103');
  }
  public set categorystat103(value: number) {
    this._categorystat103 = value;
  }
  public resetCategorystat103() {
    this._categorystat103 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat103Input() {
    return this._categorystat103;
  }

  // categorystat104 - computed: false, optional: true, required: false
  private _categorystat104?: number; 
  public get categorystat104() {
    return this.getNumberAttribute('categorystat104');
  }
  public set categorystat104(value: number) {
    this._categorystat104 = value;
  }
  public resetCategorystat104() {
    this._categorystat104 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat104Input() {
    return this._categorystat104;
  }

  // categorystat105 - computed: false, optional: true, required: false
  private _categorystat105?: number; 
  public get categorystat105() {
    return this.getNumberAttribute('categorystat105');
  }
  public set categorystat105(value: number) {
    this._categorystat105 = value;
  }
  public resetCategorystat105() {
    this._categorystat105 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat105Input() {
    return this._categorystat105;
  }

  // categorystat106 - computed: false, optional: true, required: false
  private _categorystat106?: number; 
  public get categorystat106() {
    return this.getNumberAttribute('categorystat106');
  }
  public set categorystat106(value: number) {
    this._categorystat106 = value;
  }
  public resetCategorystat106() {
    this._categorystat106 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat106Input() {
    return this._categorystat106;
  }

  // categorystat107 - computed: false, optional: true, required: false
  private _categorystat107?: number; 
  public get categorystat107() {
    return this.getNumberAttribute('categorystat107');
  }
  public set categorystat107(value: number) {
    this._categorystat107 = value;
  }
  public resetCategorystat107() {
    this._categorystat107 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat107Input() {
    return this._categorystat107;
  }

  // categorystat108 - computed: false, optional: true, required: false
  private _categorystat108?: number; 
  public get categorystat108() {
    return this.getNumberAttribute('categorystat108');
  }
  public set categorystat108(value: number) {
    this._categorystat108 = value;
  }
  public resetCategorystat108() {
    this._categorystat108 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat108Input() {
    return this._categorystat108;
  }

  // categorystat109 - computed: false, optional: true, required: false
  private _categorystat109?: number; 
  public get categorystat109() {
    return this.getNumberAttribute('categorystat109');
  }
  public set categorystat109(value: number) {
    this._categorystat109 = value;
  }
  public resetCategorystat109() {
    this._categorystat109 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat109Input() {
    return this._categorystat109;
  }

  // categorystat11 - computed: false, optional: true, required: false
  private _categorystat11?: number; 
  public get categorystat11() {
    return this.getNumberAttribute('categorystat11');
  }
  public set categorystat11(value: number) {
    this._categorystat11 = value;
  }
  public resetCategorystat11() {
    this._categorystat11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat11Input() {
    return this._categorystat11;
  }

  // categorystat110 - computed: false, optional: true, required: false
  private _categorystat110?: number; 
  public get categorystat110() {
    return this.getNumberAttribute('categorystat110');
  }
  public set categorystat110(value: number) {
    this._categorystat110 = value;
  }
  public resetCategorystat110() {
    this._categorystat110 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat110Input() {
    return this._categorystat110;
  }

  // categorystat111 - computed: false, optional: true, required: false
  private _categorystat111?: number; 
  public get categorystat111() {
    return this.getNumberAttribute('categorystat111');
  }
  public set categorystat111(value: number) {
    this._categorystat111 = value;
  }
  public resetCategorystat111() {
    this._categorystat111 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat111Input() {
    return this._categorystat111;
  }

  // categorystat112 - computed: false, optional: true, required: false
  private _categorystat112?: number; 
  public get categorystat112() {
    return this.getNumberAttribute('categorystat112');
  }
  public set categorystat112(value: number) {
    this._categorystat112 = value;
  }
  public resetCategorystat112() {
    this._categorystat112 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat112Input() {
    return this._categorystat112;
  }

  // categorystat113 - computed: false, optional: true, required: false
  private _categorystat113?: number; 
  public get categorystat113() {
    return this.getNumberAttribute('categorystat113');
  }
  public set categorystat113(value: number) {
    this._categorystat113 = value;
  }
  public resetCategorystat113() {
    this._categorystat113 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat113Input() {
    return this._categorystat113;
  }

  // categorystat114 - computed: false, optional: true, required: false
  private _categorystat114?: number; 
  public get categorystat114() {
    return this.getNumberAttribute('categorystat114');
  }
  public set categorystat114(value: number) {
    this._categorystat114 = value;
  }
  public resetCategorystat114() {
    this._categorystat114 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat114Input() {
    return this._categorystat114;
  }

  // categorystat115 - computed: false, optional: true, required: false
  private _categorystat115?: number; 
  public get categorystat115() {
    return this.getNumberAttribute('categorystat115');
  }
  public set categorystat115(value: number) {
    this._categorystat115 = value;
  }
  public resetCategorystat115() {
    this._categorystat115 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat115Input() {
    return this._categorystat115;
  }

  // categorystat116 - computed: false, optional: true, required: false
  private _categorystat116?: number; 
  public get categorystat116() {
    return this.getNumberAttribute('categorystat116');
  }
  public set categorystat116(value: number) {
    this._categorystat116 = value;
  }
  public resetCategorystat116() {
    this._categorystat116 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat116Input() {
    return this._categorystat116;
  }

  // categorystat117 - computed: false, optional: true, required: false
  private _categorystat117?: number; 
  public get categorystat117() {
    return this.getNumberAttribute('categorystat117');
  }
  public set categorystat117(value: number) {
    this._categorystat117 = value;
  }
  public resetCategorystat117() {
    this._categorystat117 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat117Input() {
    return this._categorystat117;
  }

  // categorystat118 - computed: false, optional: true, required: false
  private _categorystat118?: number; 
  public get categorystat118() {
    return this.getNumberAttribute('categorystat118');
  }
  public set categorystat118(value: number) {
    this._categorystat118 = value;
  }
  public resetCategorystat118() {
    this._categorystat118 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat118Input() {
    return this._categorystat118;
  }

  // categorystat119 - computed: false, optional: true, required: false
  private _categorystat119?: number; 
  public get categorystat119() {
    return this.getNumberAttribute('categorystat119');
  }
  public set categorystat119(value: number) {
    this._categorystat119 = value;
  }
  public resetCategorystat119() {
    this._categorystat119 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat119Input() {
    return this._categorystat119;
  }

  // categorystat12 - computed: false, optional: true, required: false
  private _categorystat12?: number; 
  public get categorystat12() {
    return this.getNumberAttribute('categorystat12');
  }
  public set categorystat12(value: number) {
    this._categorystat12 = value;
  }
  public resetCategorystat12() {
    this._categorystat12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat12Input() {
    return this._categorystat12;
  }

  // categorystat120 - computed: false, optional: true, required: false
  private _categorystat120?: number; 
  public get categorystat120() {
    return this.getNumberAttribute('categorystat120');
  }
  public set categorystat120(value: number) {
    this._categorystat120 = value;
  }
  public resetCategorystat120() {
    this._categorystat120 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat120Input() {
    return this._categorystat120;
  }

  // categorystat121 - computed: false, optional: true, required: false
  private _categorystat121?: number; 
  public get categorystat121() {
    return this.getNumberAttribute('categorystat121');
  }
  public set categorystat121(value: number) {
    this._categorystat121 = value;
  }
  public resetCategorystat121() {
    this._categorystat121 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat121Input() {
    return this._categorystat121;
  }

  // categorystat122 - computed: false, optional: true, required: false
  private _categorystat122?: number; 
  public get categorystat122() {
    return this.getNumberAttribute('categorystat122');
  }
  public set categorystat122(value: number) {
    this._categorystat122 = value;
  }
  public resetCategorystat122() {
    this._categorystat122 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat122Input() {
    return this._categorystat122;
  }

  // categorystat123 - computed: false, optional: true, required: false
  private _categorystat123?: number; 
  public get categorystat123() {
    return this.getNumberAttribute('categorystat123');
  }
  public set categorystat123(value: number) {
    this._categorystat123 = value;
  }
  public resetCategorystat123() {
    this._categorystat123 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat123Input() {
    return this._categorystat123;
  }

  // categorystat124 - computed: false, optional: true, required: false
  private _categorystat124?: number; 
  public get categorystat124() {
    return this.getNumberAttribute('categorystat124');
  }
  public set categorystat124(value: number) {
    this._categorystat124 = value;
  }
  public resetCategorystat124() {
    this._categorystat124 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat124Input() {
    return this._categorystat124;
  }

  // categorystat125 - computed: false, optional: true, required: false
  private _categorystat125?: number; 
  public get categorystat125() {
    return this.getNumberAttribute('categorystat125');
  }
  public set categorystat125(value: number) {
    this._categorystat125 = value;
  }
  public resetCategorystat125() {
    this._categorystat125 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat125Input() {
    return this._categorystat125;
  }

  // categorystat126 - computed: false, optional: true, required: false
  private _categorystat126?: number; 
  public get categorystat126() {
    return this.getNumberAttribute('categorystat126');
  }
  public set categorystat126(value: number) {
    this._categorystat126 = value;
  }
  public resetCategorystat126() {
    this._categorystat126 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat126Input() {
    return this._categorystat126;
  }

  // categorystat127 - computed: false, optional: true, required: false
  private _categorystat127?: number; 
  public get categorystat127() {
    return this.getNumberAttribute('categorystat127');
  }
  public set categorystat127(value: number) {
    this._categorystat127 = value;
  }
  public resetCategorystat127() {
    this._categorystat127 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat127Input() {
    return this._categorystat127;
  }

  // categorystat128 - computed: false, optional: true, required: false
  private _categorystat128?: number; 
  public get categorystat128() {
    return this.getNumberAttribute('categorystat128');
  }
  public set categorystat128(value: number) {
    this._categorystat128 = value;
  }
  public resetCategorystat128() {
    this._categorystat128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat128Input() {
    return this._categorystat128;
  }

  // categorystat129 - computed: false, optional: true, required: false
  private _categorystat129?: number; 
  public get categorystat129() {
    return this.getNumberAttribute('categorystat129');
  }
  public set categorystat129(value: number) {
    this._categorystat129 = value;
  }
  public resetCategorystat129() {
    this._categorystat129 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat129Input() {
    return this._categorystat129;
  }

  // categorystat13 - computed: false, optional: true, required: false
  private _categorystat13?: number; 
  public get categorystat13() {
    return this.getNumberAttribute('categorystat13');
  }
  public set categorystat13(value: number) {
    this._categorystat13 = value;
  }
  public resetCategorystat13() {
    this._categorystat13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat13Input() {
    return this._categorystat13;
  }

  // categorystat130 - computed: false, optional: true, required: false
  private _categorystat130?: number; 
  public get categorystat130() {
    return this.getNumberAttribute('categorystat130');
  }
  public set categorystat130(value: number) {
    this._categorystat130 = value;
  }
  public resetCategorystat130() {
    this._categorystat130 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat130Input() {
    return this._categorystat130;
  }

  // categorystat131 - computed: false, optional: true, required: false
  private _categorystat131?: number; 
  public get categorystat131() {
    return this.getNumberAttribute('categorystat131');
  }
  public set categorystat131(value: number) {
    this._categorystat131 = value;
  }
  public resetCategorystat131() {
    this._categorystat131 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat131Input() {
    return this._categorystat131;
  }

  // categorystat132 - computed: false, optional: true, required: false
  private _categorystat132?: number; 
  public get categorystat132() {
    return this.getNumberAttribute('categorystat132');
  }
  public set categorystat132(value: number) {
    this._categorystat132 = value;
  }
  public resetCategorystat132() {
    this._categorystat132 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat132Input() {
    return this._categorystat132;
  }

  // categorystat133 - computed: false, optional: true, required: false
  private _categorystat133?: number; 
  public get categorystat133() {
    return this.getNumberAttribute('categorystat133');
  }
  public set categorystat133(value: number) {
    this._categorystat133 = value;
  }
  public resetCategorystat133() {
    this._categorystat133 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat133Input() {
    return this._categorystat133;
  }

  // categorystat134 - computed: false, optional: true, required: false
  private _categorystat134?: number; 
  public get categorystat134() {
    return this.getNumberAttribute('categorystat134');
  }
  public set categorystat134(value: number) {
    this._categorystat134 = value;
  }
  public resetCategorystat134() {
    this._categorystat134 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat134Input() {
    return this._categorystat134;
  }

  // categorystat135 - computed: false, optional: true, required: false
  private _categorystat135?: number; 
  public get categorystat135() {
    return this.getNumberAttribute('categorystat135');
  }
  public set categorystat135(value: number) {
    this._categorystat135 = value;
  }
  public resetCategorystat135() {
    this._categorystat135 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat135Input() {
    return this._categorystat135;
  }

  // categorystat136 - computed: false, optional: true, required: false
  private _categorystat136?: number; 
  public get categorystat136() {
    return this.getNumberAttribute('categorystat136');
  }
  public set categorystat136(value: number) {
    this._categorystat136 = value;
  }
  public resetCategorystat136() {
    this._categorystat136 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat136Input() {
    return this._categorystat136;
  }

  // categorystat137 - computed: false, optional: true, required: false
  private _categorystat137?: number; 
  public get categorystat137() {
    return this.getNumberAttribute('categorystat137');
  }
  public set categorystat137(value: number) {
    this._categorystat137 = value;
  }
  public resetCategorystat137() {
    this._categorystat137 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat137Input() {
    return this._categorystat137;
  }

  // categorystat138 - computed: false, optional: true, required: false
  private _categorystat138?: number; 
  public get categorystat138() {
    return this.getNumberAttribute('categorystat138');
  }
  public set categorystat138(value: number) {
    this._categorystat138 = value;
  }
  public resetCategorystat138() {
    this._categorystat138 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat138Input() {
    return this._categorystat138;
  }

  // categorystat139 - computed: false, optional: true, required: false
  private _categorystat139?: number; 
  public get categorystat139() {
    return this.getNumberAttribute('categorystat139');
  }
  public set categorystat139(value: number) {
    this._categorystat139 = value;
  }
  public resetCategorystat139() {
    this._categorystat139 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat139Input() {
    return this._categorystat139;
  }

  // categorystat14 - computed: false, optional: true, required: false
  private _categorystat14?: number; 
  public get categorystat14() {
    return this.getNumberAttribute('categorystat14');
  }
  public set categorystat14(value: number) {
    this._categorystat14 = value;
  }
  public resetCategorystat14() {
    this._categorystat14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat14Input() {
    return this._categorystat14;
  }

  // categorystat140 - computed: false, optional: true, required: false
  private _categorystat140?: number; 
  public get categorystat140() {
    return this.getNumberAttribute('categorystat140');
  }
  public set categorystat140(value: number) {
    this._categorystat140 = value;
  }
  public resetCategorystat140() {
    this._categorystat140 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat140Input() {
    return this._categorystat140;
  }

  // categorystat141 - computed: false, optional: true, required: false
  private _categorystat141?: number; 
  public get categorystat141() {
    return this.getNumberAttribute('categorystat141');
  }
  public set categorystat141(value: number) {
    this._categorystat141 = value;
  }
  public resetCategorystat141() {
    this._categorystat141 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat141Input() {
    return this._categorystat141;
  }

  // categorystat142 - computed: false, optional: true, required: false
  private _categorystat142?: number; 
  public get categorystat142() {
    return this.getNumberAttribute('categorystat142');
  }
  public set categorystat142(value: number) {
    this._categorystat142 = value;
  }
  public resetCategorystat142() {
    this._categorystat142 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat142Input() {
    return this._categorystat142;
  }

  // categorystat143 - computed: false, optional: true, required: false
  private _categorystat143?: number; 
  public get categorystat143() {
    return this.getNumberAttribute('categorystat143');
  }
  public set categorystat143(value: number) {
    this._categorystat143 = value;
  }
  public resetCategorystat143() {
    this._categorystat143 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat143Input() {
    return this._categorystat143;
  }

  // categorystat144 - computed: false, optional: true, required: false
  private _categorystat144?: number; 
  public get categorystat144() {
    return this.getNumberAttribute('categorystat144');
  }
  public set categorystat144(value: number) {
    this._categorystat144 = value;
  }
  public resetCategorystat144() {
    this._categorystat144 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat144Input() {
    return this._categorystat144;
  }

  // categorystat145 - computed: false, optional: true, required: false
  private _categorystat145?: number; 
  public get categorystat145() {
    return this.getNumberAttribute('categorystat145');
  }
  public set categorystat145(value: number) {
    this._categorystat145 = value;
  }
  public resetCategorystat145() {
    this._categorystat145 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat145Input() {
    return this._categorystat145;
  }

  // categorystat146 - computed: false, optional: true, required: false
  private _categorystat146?: number; 
  public get categorystat146() {
    return this.getNumberAttribute('categorystat146');
  }
  public set categorystat146(value: number) {
    this._categorystat146 = value;
  }
  public resetCategorystat146() {
    this._categorystat146 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat146Input() {
    return this._categorystat146;
  }

  // categorystat147 - computed: false, optional: true, required: false
  private _categorystat147?: number; 
  public get categorystat147() {
    return this.getNumberAttribute('categorystat147');
  }
  public set categorystat147(value: number) {
    this._categorystat147 = value;
  }
  public resetCategorystat147() {
    this._categorystat147 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat147Input() {
    return this._categorystat147;
  }

  // categorystat148 - computed: false, optional: true, required: false
  private _categorystat148?: number; 
  public get categorystat148() {
    return this.getNumberAttribute('categorystat148');
  }
  public set categorystat148(value: number) {
    this._categorystat148 = value;
  }
  public resetCategorystat148() {
    this._categorystat148 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat148Input() {
    return this._categorystat148;
  }

  // categorystat149 - computed: false, optional: true, required: false
  private _categorystat149?: number; 
  public get categorystat149() {
    return this.getNumberAttribute('categorystat149');
  }
  public set categorystat149(value: number) {
    this._categorystat149 = value;
  }
  public resetCategorystat149() {
    this._categorystat149 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat149Input() {
    return this._categorystat149;
  }

  // categorystat15 - computed: false, optional: true, required: false
  private _categorystat15?: number; 
  public get categorystat15() {
    return this.getNumberAttribute('categorystat15');
  }
  public set categorystat15(value: number) {
    this._categorystat15 = value;
  }
  public resetCategorystat15() {
    this._categorystat15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat15Input() {
    return this._categorystat15;
  }

  // categorystat150 - computed: false, optional: true, required: false
  private _categorystat150?: number; 
  public get categorystat150() {
    return this.getNumberAttribute('categorystat150');
  }
  public set categorystat150(value: number) {
    this._categorystat150 = value;
  }
  public resetCategorystat150() {
    this._categorystat150 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat150Input() {
    return this._categorystat150;
  }

  // categorystat151 - computed: false, optional: true, required: false
  private _categorystat151?: number; 
  public get categorystat151() {
    return this.getNumberAttribute('categorystat151');
  }
  public set categorystat151(value: number) {
    this._categorystat151 = value;
  }
  public resetCategorystat151() {
    this._categorystat151 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat151Input() {
    return this._categorystat151;
  }

  // categorystat152 - computed: false, optional: true, required: false
  private _categorystat152?: number; 
  public get categorystat152() {
    return this.getNumberAttribute('categorystat152');
  }
  public set categorystat152(value: number) {
    this._categorystat152 = value;
  }
  public resetCategorystat152() {
    this._categorystat152 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat152Input() {
    return this._categorystat152;
  }

  // categorystat153 - computed: false, optional: true, required: false
  private _categorystat153?: number; 
  public get categorystat153() {
    return this.getNumberAttribute('categorystat153');
  }
  public set categorystat153(value: number) {
    this._categorystat153 = value;
  }
  public resetCategorystat153() {
    this._categorystat153 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat153Input() {
    return this._categorystat153;
  }

  // categorystat154 - computed: false, optional: true, required: false
  private _categorystat154?: number; 
  public get categorystat154() {
    return this.getNumberAttribute('categorystat154');
  }
  public set categorystat154(value: number) {
    this._categorystat154 = value;
  }
  public resetCategorystat154() {
    this._categorystat154 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat154Input() {
    return this._categorystat154;
  }

  // categorystat155 - computed: false, optional: true, required: false
  private _categorystat155?: number; 
  public get categorystat155() {
    return this.getNumberAttribute('categorystat155');
  }
  public set categorystat155(value: number) {
    this._categorystat155 = value;
  }
  public resetCategorystat155() {
    this._categorystat155 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat155Input() {
    return this._categorystat155;
  }

  // categorystat156 - computed: false, optional: true, required: false
  private _categorystat156?: number; 
  public get categorystat156() {
    return this.getNumberAttribute('categorystat156');
  }
  public set categorystat156(value: number) {
    this._categorystat156 = value;
  }
  public resetCategorystat156() {
    this._categorystat156 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat156Input() {
    return this._categorystat156;
  }

  // categorystat157 - computed: false, optional: true, required: false
  private _categorystat157?: number; 
  public get categorystat157() {
    return this.getNumberAttribute('categorystat157');
  }
  public set categorystat157(value: number) {
    this._categorystat157 = value;
  }
  public resetCategorystat157() {
    this._categorystat157 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat157Input() {
    return this._categorystat157;
  }

  // categorystat158 - computed: false, optional: true, required: false
  private _categorystat158?: number; 
  public get categorystat158() {
    return this.getNumberAttribute('categorystat158');
  }
  public set categorystat158(value: number) {
    this._categorystat158 = value;
  }
  public resetCategorystat158() {
    this._categorystat158 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat158Input() {
    return this._categorystat158;
  }

  // categorystat159 - computed: false, optional: true, required: false
  private _categorystat159?: number; 
  public get categorystat159() {
    return this.getNumberAttribute('categorystat159');
  }
  public set categorystat159(value: number) {
    this._categorystat159 = value;
  }
  public resetCategorystat159() {
    this._categorystat159 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat159Input() {
    return this._categorystat159;
  }

  // categorystat16 - computed: false, optional: true, required: false
  private _categorystat16?: number; 
  public get categorystat16() {
    return this.getNumberAttribute('categorystat16');
  }
  public set categorystat16(value: number) {
    this._categorystat16 = value;
  }
  public resetCategorystat16() {
    this._categorystat16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat16Input() {
    return this._categorystat16;
  }

  // categorystat160 - computed: false, optional: true, required: false
  private _categorystat160?: number; 
  public get categorystat160() {
    return this.getNumberAttribute('categorystat160');
  }
  public set categorystat160(value: number) {
    this._categorystat160 = value;
  }
  public resetCategorystat160() {
    this._categorystat160 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat160Input() {
    return this._categorystat160;
  }

  // categorystat161 - computed: false, optional: true, required: false
  private _categorystat161?: number; 
  public get categorystat161() {
    return this.getNumberAttribute('categorystat161');
  }
  public set categorystat161(value: number) {
    this._categorystat161 = value;
  }
  public resetCategorystat161() {
    this._categorystat161 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat161Input() {
    return this._categorystat161;
  }

  // categorystat162 - computed: false, optional: true, required: false
  private _categorystat162?: number; 
  public get categorystat162() {
    return this.getNumberAttribute('categorystat162');
  }
  public set categorystat162(value: number) {
    this._categorystat162 = value;
  }
  public resetCategorystat162() {
    this._categorystat162 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat162Input() {
    return this._categorystat162;
  }

  // categorystat163 - computed: false, optional: true, required: false
  private _categorystat163?: number; 
  public get categorystat163() {
    return this.getNumberAttribute('categorystat163');
  }
  public set categorystat163(value: number) {
    this._categorystat163 = value;
  }
  public resetCategorystat163() {
    this._categorystat163 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat163Input() {
    return this._categorystat163;
  }

  // categorystat164 - computed: false, optional: true, required: false
  private _categorystat164?: number; 
  public get categorystat164() {
    return this.getNumberAttribute('categorystat164');
  }
  public set categorystat164(value: number) {
    this._categorystat164 = value;
  }
  public resetCategorystat164() {
    this._categorystat164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat164Input() {
    return this._categorystat164;
  }

  // categorystat165 - computed: false, optional: true, required: false
  private _categorystat165?: number; 
  public get categorystat165() {
    return this.getNumberAttribute('categorystat165');
  }
  public set categorystat165(value: number) {
    this._categorystat165 = value;
  }
  public resetCategorystat165() {
    this._categorystat165 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat165Input() {
    return this._categorystat165;
  }

  // categorystat166 - computed: false, optional: true, required: false
  private _categorystat166?: number; 
  public get categorystat166() {
    return this.getNumberAttribute('categorystat166');
  }
  public set categorystat166(value: number) {
    this._categorystat166 = value;
  }
  public resetCategorystat166() {
    this._categorystat166 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat166Input() {
    return this._categorystat166;
  }

  // categorystat167 - computed: false, optional: true, required: false
  private _categorystat167?: number; 
  public get categorystat167() {
    return this.getNumberAttribute('categorystat167');
  }
  public set categorystat167(value: number) {
    this._categorystat167 = value;
  }
  public resetCategorystat167() {
    this._categorystat167 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat167Input() {
    return this._categorystat167;
  }

  // categorystat168 - computed: false, optional: true, required: false
  private _categorystat168?: number; 
  public get categorystat168() {
    return this.getNumberAttribute('categorystat168');
  }
  public set categorystat168(value: number) {
    this._categorystat168 = value;
  }
  public resetCategorystat168() {
    this._categorystat168 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat168Input() {
    return this._categorystat168;
  }

  // categorystat169 - computed: false, optional: true, required: false
  private _categorystat169?: number; 
  public get categorystat169() {
    return this.getNumberAttribute('categorystat169');
  }
  public set categorystat169(value: number) {
    this._categorystat169 = value;
  }
  public resetCategorystat169() {
    this._categorystat169 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat169Input() {
    return this._categorystat169;
  }

  // categorystat17 - computed: false, optional: true, required: false
  private _categorystat17?: number; 
  public get categorystat17() {
    return this.getNumberAttribute('categorystat17');
  }
  public set categorystat17(value: number) {
    this._categorystat17 = value;
  }
  public resetCategorystat17() {
    this._categorystat17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat17Input() {
    return this._categorystat17;
  }

  // categorystat170 - computed: false, optional: true, required: false
  private _categorystat170?: number; 
  public get categorystat170() {
    return this.getNumberAttribute('categorystat170');
  }
  public set categorystat170(value: number) {
    this._categorystat170 = value;
  }
  public resetCategorystat170() {
    this._categorystat170 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat170Input() {
    return this._categorystat170;
  }

  // categorystat171 - computed: false, optional: true, required: false
  private _categorystat171?: number; 
  public get categorystat171() {
    return this.getNumberAttribute('categorystat171');
  }
  public set categorystat171(value: number) {
    this._categorystat171 = value;
  }
  public resetCategorystat171() {
    this._categorystat171 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat171Input() {
    return this._categorystat171;
  }

  // categorystat172 - computed: false, optional: true, required: false
  private _categorystat172?: number; 
  public get categorystat172() {
    return this.getNumberAttribute('categorystat172');
  }
  public set categorystat172(value: number) {
    this._categorystat172 = value;
  }
  public resetCategorystat172() {
    this._categorystat172 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat172Input() {
    return this._categorystat172;
  }

  // categorystat173 - computed: false, optional: true, required: false
  private _categorystat173?: number; 
  public get categorystat173() {
    return this.getNumberAttribute('categorystat173');
  }
  public set categorystat173(value: number) {
    this._categorystat173 = value;
  }
  public resetCategorystat173() {
    this._categorystat173 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat173Input() {
    return this._categorystat173;
  }

  // categorystat174 - computed: false, optional: true, required: false
  private _categorystat174?: number; 
  public get categorystat174() {
    return this.getNumberAttribute('categorystat174');
  }
  public set categorystat174(value: number) {
    this._categorystat174 = value;
  }
  public resetCategorystat174() {
    this._categorystat174 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat174Input() {
    return this._categorystat174;
  }

  // categorystat175 - computed: false, optional: true, required: false
  private _categorystat175?: number; 
  public get categorystat175() {
    return this.getNumberAttribute('categorystat175');
  }
  public set categorystat175(value: number) {
    this._categorystat175 = value;
  }
  public resetCategorystat175() {
    this._categorystat175 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat175Input() {
    return this._categorystat175;
  }

  // categorystat176 - computed: false, optional: true, required: false
  private _categorystat176?: number; 
  public get categorystat176() {
    return this.getNumberAttribute('categorystat176');
  }
  public set categorystat176(value: number) {
    this._categorystat176 = value;
  }
  public resetCategorystat176() {
    this._categorystat176 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat176Input() {
    return this._categorystat176;
  }

  // categorystat177 - computed: false, optional: true, required: false
  private _categorystat177?: number; 
  public get categorystat177() {
    return this.getNumberAttribute('categorystat177');
  }
  public set categorystat177(value: number) {
    this._categorystat177 = value;
  }
  public resetCategorystat177() {
    this._categorystat177 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat177Input() {
    return this._categorystat177;
  }

  // categorystat178 - computed: false, optional: true, required: false
  private _categorystat178?: number; 
  public get categorystat178() {
    return this.getNumberAttribute('categorystat178');
  }
  public set categorystat178(value: number) {
    this._categorystat178 = value;
  }
  public resetCategorystat178() {
    this._categorystat178 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat178Input() {
    return this._categorystat178;
  }

  // categorystat179 - computed: false, optional: true, required: false
  private _categorystat179?: number; 
  public get categorystat179() {
    return this.getNumberAttribute('categorystat179');
  }
  public set categorystat179(value: number) {
    this._categorystat179 = value;
  }
  public resetCategorystat179() {
    this._categorystat179 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat179Input() {
    return this._categorystat179;
  }

  // categorystat18 - computed: false, optional: true, required: false
  private _categorystat18?: number; 
  public get categorystat18() {
    return this.getNumberAttribute('categorystat18');
  }
  public set categorystat18(value: number) {
    this._categorystat18 = value;
  }
  public resetCategorystat18() {
    this._categorystat18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat18Input() {
    return this._categorystat18;
  }

  // categorystat180 - computed: false, optional: true, required: false
  private _categorystat180?: number; 
  public get categorystat180() {
    return this.getNumberAttribute('categorystat180');
  }
  public set categorystat180(value: number) {
    this._categorystat180 = value;
  }
  public resetCategorystat180() {
    this._categorystat180 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat180Input() {
    return this._categorystat180;
  }

  // categorystat181 - computed: false, optional: true, required: false
  private _categorystat181?: number; 
  public get categorystat181() {
    return this.getNumberAttribute('categorystat181');
  }
  public set categorystat181(value: number) {
    this._categorystat181 = value;
  }
  public resetCategorystat181() {
    this._categorystat181 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat181Input() {
    return this._categorystat181;
  }

  // categorystat182 - computed: false, optional: true, required: false
  private _categorystat182?: number; 
  public get categorystat182() {
    return this.getNumberAttribute('categorystat182');
  }
  public set categorystat182(value: number) {
    this._categorystat182 = value;
  }
  public resetCategorystat182() {
    this._categorystat182 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat182Input() {
    return this._categorystat182;
  }

  // categorystat183 - computed: false, optional: true, required: false
  private _categorystat183?: number; 
  public get categorystat183() {
    return this.getNumberAttribute('categorystat183');
  }
  public set categorystat183(value: number) {
    this._categorystat183 = value;
  }
  public resetCategorystat183() {
    this._categorystat183 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat183Input() {
    return this._categorystat183;
  }

  // categorystat184 - computed: false, optional: true, required: false
  private _categorystat184?: number; 
  public get categorystat184() {
    return this.getNumberAttribute('categorystat184');
  }
  public set categorystat184(value: number) {
    this._categorystat184 = value;
  }
  public resetCategorystat184() {
    this._categorystat184 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat184Input() {
    return this._categorystat184;
  }

  // categorystat185 - computed: false, optional: true, required: false
  private _categorystat185?: number; 
  public get categorystat185() {
    return this.getNumberAttribute('categorystat185');
  }
  public set categorystat185(value: number) {
    this._categorystat185 = value;
  }
  public resetCategorystat185() {
    this._categorystat185 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat185Input() {
    return this._categorystat185;
  }

  // categorystat186 - computed: false, optional: true, required: false
  private _categorystat186?: number; 
  public get categorystat186() {
    return this.getNumberAttribute('categorystat186');
  }
  public set categorystat186(value: number) {
    this._categorystat186 = value;
  }
  public resetCategorystat186() {
    this._categorystat186 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat186Input() {
    return this._categorystat186;
  }

  // categorystat187 - computed: false, optional: true, required: false
  private _categorystat187?: number; 
  public get categorystat187() {
    return this.getNumberAttribute('categorystat187');
  }
  public set categorystat187(value: number) {
    this._categorystat187 = value;
  }
  public resetCategorystat187() {
    this._categorystat187 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat187Input() {
    return this._categorystat187;
  }

  // categorystat188 - computed: false, optional: true, required: false
  private _categorystat188?: number; 
  public get categorystat188() {
    return this.getNumberAttribute('categorystat188');
  }
  public set categorystat188(value: number) {
    this._categorystat188 = value;
  }
  public resetCategorystat188() {
    this._categorystat188 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat188Input() {
    return this._categorystat188;
  }

  // categorystat189 - computed: false, optional: true, required: false
  private _categorystat189?: number; 
  public get categorystat189() {
    return this.getNumberAttribute('categorystat189');
  }
  public set categorystat189(value: number) {
    this._categorystat189 = value;
  }
  public resetCategorystat189() {
    this._categorystat189 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat189Input() {
    return this._categorystat189;
  }

  // categorystat19 - computed: false, optional: true, required: false
  private _categorystat19?: number; 
  public get categorystat19() {
    return this.getNumberAttribute('categorystat19');
  }
  public set categorystat19(value: number) {
    this._categorystat19 = value;
  }
  public resetCategorystat19() {
    this._categorystat19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat19Input() {
    return this._categorystat19;
  }

  // categorystat190 - computed: false, optional: true, required: false
  private _categorystat190?: number; 
  public get categorystat190() {
    return this.getNumberAttribute('categorystat190');
  }
  public set categorystat190(value: number) {
    this._categorystat190 = value;
  }
  public resetCategorystat190() {
    this._categorystat190 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat190Input() {
    return this._categorystat190;
  }

  // categorystat191 - computed: false, optional: true, required: false
  private _categorystat191?: number; 
  public get categorystat191() {
    return this.getNumberAttribute('categorystat191');
  }
  public set categorystat191(value: number) {
    this._categorystat191 = value;
  }
  public resetCategorystat191() {
    this._categorystat191 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat191Input() {
    return this._categorystat191;
  }

  // categorystat192 - computed: false, optional: true, required: false
  private _categorystat192?: number; 
  public get categorystat192() {
    return this.getNumberAttribute('categorystat192');
  }
  public set categorystat192(value: number) {
    this._categorystat192 = value;
  }
  public resetCategorystat192() {
    this._categorystat192 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat192Input() {
    return this._categorystat192;
  }

  // categorystat193 - computed: false, optional: true, required: false
  private _categorystat193?: number; 
  public get categorystat193() {
    return this.getNumberAttribute('categorystat193');
  }
  public set categorystat193(value: number) {
    this._categorystat193 = value;
  }
  public resetCategorystat193() {
    this._categorystat193 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat193Input() {
    return this._categorystat193;
  }

  // categorystat194 - computed: false, optional: true, required: false
  private _categorystat194?: number; 
  public get categorystat194() {
    return this.getNumberAttribute('categorystat194');
  }
  public set categorystat194(value: number) {
    this._categorystat194 = value;
  }
  public resetCategorystat194() {
    this._categorystat194 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat194Input() {
    return this._categorystat194;
  }

  // categorystat195 - computed: false, optional: true, required: false
  private _categorystat195?: number; 
  public get categorystat195() {
    return this.getNumberAttribute('categorystat195');
  }
  public set categorystat195(value: number) {
    this._categorystat195 = value;
  }
  public resetCategorystat195() {
    this._categorystat195 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat195Input() {
    return this._categorystat195;
  }

  // categorystat196 - computed: false, optional: true, required: false
  private _categorystat196?: number; 
  public get categorystat196() {
    return this.getNumberAttribute('categorystat196');
  }
  public set categorystat196(value: number) {
    this._categorystat196 = value;
  }
  public resetCategorystat196() {
    this._categorystat196 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat196Input() {
    return this._categorystat196;
  }

  // categorystat197 - computed: false, optional: true, required: false
  private _categorystat197?: number; 
  public get categorystat197() {
    return this.getNumberAttribute('categorystat197');
  }
  public set categorystat197(value: number) {
    this._categorystat197 = value;
  }
  public resetCategorystat197() {
    this._categorystat197 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat197Input() {
    return this._categorystat197;
  }

  // categorystat198 - computed: false, optional: true, required: false
  private _categorystat198?: number; 
  public get categorystat198() {
    return this.getNumberAttribute('categorystat198');
  }
  public set categorystat198(value: number) {
    this._categorystat198 = value;
  }
  public resetCategorystat198() {
    this._categorystat198 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat198Input() {
    return this._categorystat198;
  }

  // categorystat199 - computed: false, optional: true, required: false
  private _categorystat199?: number; 
  public get categorystat199() {
    return this.getNumberAttribute('categorystat199');
  }
  public set categorystat199(value: number) {
    this._categorystat199 = value;
  }
  public resetCategorystat199() {
    this._categorystat199 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat199Input() {
    return this._categorystat199;
  }

  // categorystat2 - computed: false, optional: true, required: false
  private _categorystat2?: number; 
  public get categorystat2() {
    return this.getNumberAttribute('categorystat2');
  }
  public set categorystat2(value: number) {
    this._categorystat2 = value;
  }
  public resetCategorystat2() {
    this._categorystat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat2Input() {
    return this._categorystat2;
  }

  // categorystat20 - computed: false, optional: true, required: false
  private _categorystat20?: number; 
  public get categorystat20() {
    return this.getNumberAttribute('categorystat20');
  }
  public set categorystat20(value: number) {
    this._categorystat20 = value;
  }
  public resetCategorystat20() {
    this._categorystat20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat20Input() {
    return this._categorystat20;
  }

  // categorystat200 - computed: false, optional: true, required: false
  private _categorystat200?: number; 
  public get categorystat200() {
    return this.getNumberAttribute('categorystat200');
  }
  public set categorystat200(value: number) {
    this._categorystat200 = value;
  }
  public resetCategorystat200() {
    this._categorystat200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat200Input() {
    return this._categorystat200;
  }

  // categorystat201 - computed: false, optional: true, required: false
  private _categorystat201?: number; 
  public get categorystat201() {
    return this.getNumberAttribute('categorystat201');
  }
  public set categorystat201(value: number) {
    this._categorystat201 = value;
  }
  public resetCategorystat201() {
    this._categorystat201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat201Input() {
    return this._categorystat201;
  }

  // categorystat202 - computed: false, optional: true, required: false
  private _categorystat202?: number; 
  public get categorystat202() {
    return this.getNumberAttribute('categorystat202');
  }
  public set categorystat202(value: number) {
    this._categorystat202 = value;
  }
  public resetCategorystat202() {
    this._categorystat202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat202Input() {
    return this._categorystat202;
  }

  // categorystat203 - computed: false, optional: true, required: false
  private _categorystat203?: number; 
  public get categorystat203() {
    return this.getNumberAttribute('categorystat203');
  }
  public set categorystat203(value: number) {
    this._categorystat203 = value;
  }
  public resetCategorystat203() {
    this._categorystat203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat203Input() {
    return this._categorystat203;
  }

  // categorystat204 - computed: false, optional: true, required: false
  private _categorystat204?: number; 
  public get categorystat204() {
    return this.getNumberAttribute('categorystat204');
  }
  public set categorystat204(value: number) {
    this._categorystat204 = value;
  }
  public resetCategorystat204() {
    this._categorystat204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat204Input() {
    return this._categorystat204;
  }

  // categorystat205 - computed: false, optional: true, required: false
  private _categorystat205?: number; 
  public get categorystat205() {
    return this.getNumberAttribute('categorystat205');
  }
  public set categorystat205(value: number) {
    this._categorystat205 = value;
  }
  public resetCategorystat205() {
    this._categorystat205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat205Input() {
    return this._categorystat205;
  }

  // categorystat206 - computed: false, optional: true, required: false
  private _categorystat206?: number; 
  public get categorystat206() {
    return this.getNumberAttribute('categorystat206');
  }
  public set categorystat206(value: number) {
    this._categorystat206 = value;
  }
  public resetCategorystat206() {
    this._categorystat206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat206Input() {
    return this._categorystat206;
  }

  // categorystat207 - computed: false, optional: true, required: false
  private _categorystat207?: number; 
  public get categorystat207() {
    return this.getNumberAttribute('categorystat207');
  }
  public set categorystat207(value: number) {
    this._categorystat207 = value;
  }
  public resetCategorystat207() {
    this._categorystat207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat207Input() {
    return this._categorystat207;
  }

  // categorystat208 - computed: false, optional: true, required: false
  private _categorystat208?: number; 
  public get categorystat208() {
    return this.getNumberAttribute('categorystat208');
  }
  public set categorystat208(value: number) {
    this._categorystat208 = value;
  }
  public resetCategorystat208() {
    this._categorystat208 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat208Input() {
    return this._categorystat208;
  }

  // categorystat209 - computed: false, optional: true, required: false
  private _categorystat209?: number; 
  public get categorystat209() {
    return this.getNumberAttribute('categorystat209');
  }
  public set categorystat209(value: number) {
    this._categorystat209 = value;
  }
  public resetCategorystat209() {
    this._categorystat209 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat209Input() {
    return this._categorystat209;
  }

  // categorystat21 - computed: false, optional: true, required: false
  private _categorystat21?: number; 
  public get categorystat21() {
    return this.getNumberAttribute('categorystat21');
  }
  public set categorystat21(value: number) {
    this._categorystat21 = value;
  }
  public resetCategorystat21() {
    this._categorystat21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat21Input() {
    return this._categorystat21;
  }

  // categorystat210 - computed: false, optional: true, required: false
  private _categorystat210?: number; 
  public get categorystat210() {
    return this.getNumberAttribute('categorystat210');
  }
  public set categorystat210(value: number) {
    this._categorystat210 = value;
  }
  public resetCategorystat210() {
    this._categorystat210 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat210Input() {
    return this._categorystat210;
  }

  // categorystat211 - computed: false, optional: true, required: false
  private _categorystat211?: number; 
  public get categorystat211() {
    return this.getNumberAttribute('categorystat211');
  }
  public set categorystat211(value: number) {
    this._categorystat211 = value;
  }
  public resetCategorystat211() {
    this._categorystat211 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat211Input() {
    return this._categorystat211;
  }

  // categorystat212 - computed: false, optional: true, required: false
  private _categorystat212?: number; 
  public get categorystat212() {
    return this.getNumberAttribute('categorystat212');
  }
  public set categorystat212(value: number) {
    this._categorystat212 = value;
  }
  public resetCategorystat212() {
    this._categorystat212 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat212Input() {
    return this._categorystat212;
  }

  // categorystat213 - computed: false, optional: true, required: false
  private _categorystat213?: number; 
  public get categorystat213() {
    return this.getNumberAttribute('categorystat213');
  }
  public set categorystat213(value: number) {
    this._categorystat213 = value;
  }
  public resetCategorystat213() {
    this._categorystat213 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat213Input() {
    return this._categorystat213;
  }

  // categorystat214 - computed: false, optional: true, required: false
  private _categorystat214?: number; 
  public get categorystat214() {
    return this.getNumberAttribute('categorystat214');
  }
  public set categorystat214(value: number) {
    this._categorystat214 = value;
  }
  public resetCategorystat214() {
    this._categorystat214 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat214Input() {
    return this._categorystat214;
  }

  // categorystat215 - computed: false, optional: true, required: false
  private _categorystat215?: number; 
  public get categorystat215() {
    return this.getNumberAttribute('categorystat215');
  }
  public set categorystat215(value: number) {
    this._categorystat215 = value;
  }
  public resetCategorystat215() {
    this._categorystat215 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat215Input() {
    return this._categorystat215;
  }

  // categorystat216 - computed: false, optional: true, required: false
  private _categorystat216?: number; 
  public get categorystat216() {
    return this.getNumberAttribute('categorystat216');
  }
  public set categorystat216(value: number) {
    this._categorystat216 = value;
  }
  public resetCategorystat216() {
    this._categorystat216 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat216Input() {
    return this._categorystat216;
  }

  // categorystat217 - computed: false, optional: true, required: false
  private _categorystat217?: number; 
  public get categorystat217() {
    return this.getNumberAttribute('categorystat217');
  }
  public set categorystat217(value: number) {
    this._categorystat217 = value;
  }
  public resetCategorystat217() {
    this._categorystat217 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat217Input() {
    return this._categorystat217;
  }

  // categorystat218 - computed: false, optional: true, required: false
  private _categorystat218?: number; 
  public get categorystat218() {
    return this.getNumberAttribute('categorystat218');
  }
  public set categorystat218(value: number) {
    this._categorystat218 = value;
  }
  public resetCategorystat218() {
    this._categorystat218 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat218Input() {
    return this._categorystat218;
  }

  // categorystat219 - computed: false, optional: true, required: false
  private _categorystat219?: number; 
  public get categorystat219() {
    return this.getNumberAttribute('categorystat219');
  }
  public set categorystat219(value: number) {
    this._categorystat219 = value;
  }
  public resetCategorystat219() {
    this._categorystat219 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat219Input() {
    return this._categorystat219;
  }

  // categorystat22 - computed: false, optional: true, required: false
  private _categorystat22?: number; 
  public get categorystat22() {
    return this.getNumberAttribute('categorystat22');
  }
  public set categorystat22(value: number) {
    this._categorystat22 = value;
  }
  public resetCategorystat22() {
    this._categorystat22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat22Input() {
    return this._categorystat22;
  }

  // categorystat220 - computed: false, optional: true, required: false
  private _categorystat220?: number; 
  public get categorystat220() {
    return this.getNumberAttribute('categorystat220');
  }
  public set categorystat220(value: number) {
    this._categorystat220 = value;
  }
  public resetCategorystat220() {
    this._categorystat220 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat220Input() {
    return this._categorystat220;
  }

  // categorystat221 - computed: false, optional: true, required: false
  private _categorystat221?: number; 
  public get categorystat221() {
    return this.getNumberAttribute('categorystat221');
  }
  public set categorystat221(value: number) {
    this._categorystat221 = value;
  }
  public resetCategorystat221() {
    this._categorystat221 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat221Input() {
    return this._categorystat221;
  }

  // categorystat222 - computed: false, optional: true, required: false
  private _categorystat222?: number; 
  public get categorystat222() {
    return this.getNumberAttribute('categorystat222');
  }
  public set categorystat222(value: number) {
    this._categorystat222 = value;
  }
  public resetCategorystat222() {
    this._categorystat222 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat222Input() {
    return this._categorystat222;
  }

  // categorystat223 - computed: false, optional: true, required: false
  private _categorystat223?: number; 
  public get categorystat223() {
    return this.getNumberAttribute('categorystat223');
  }
  public set categorystat223(value: number) {
    this._categorystat223 = value;
  }
  public resetCategorystat223() {
    this._categorystat223 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat223Input() {
    return this._categorystat223;
  }

  // categorystat224 - computed: false, optional: true, required: false
  private _categorystat224?: number; 
  public get categorystat224() {
    return this.getNumberAttribute('categorystat224');
  }
  public set categorystat224(value: number) {
    this._categorystat224 = value;
  }
  public resetCategorystat224() {
    this._categorystat224 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat224Input() {
    return this._categorystat224;
  }

  // categorystat225 - computed: false, optional: true, required: false
  private _categorystat225?: number; 
  public get categorystat225() {
    return this.getNumberAttribute('categorystat225');
  }
  public set categorystat225(value: number) {
    this._categorystat225 = value;
  }
  public resetCategorystat225() {
    this._categorystat225 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat225Input() {
    return this._categorystat225;
  }

  // categorystat226 - computed: false, optional: true, required: false
  private _categorystat226?: number; 
  public get categorystat226() {
    return this.getNumberAttribute('categorystat226');
  }
  public set categorystat226(value: number) {
    this._categorystat226 = value;
  }
  public resetCategorystat226() {
    this._categorystat226 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat226Input() {
    return this._categorystat226;
  }

  // categorystat227 - computed: false, optional: true, required: false
  private _categorystat227?: number; 
  public get categorystat227() {
    return this.getNumberAttribute('categorystat227');
  }
  public set categorystat227(value: number) {
    this._categorystat227 = value;
  }
  public resetCategorystat227() {
    this._categorystat227 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat227Input() {
    return this._categorystat227;
  }

  // categorystat228 - computed: false, optional: true, required: false
  private _categorystat228?: number; 
  public get categorystat228() {
    return this.getNumberAttribute('categorystat228');
  }
  public set categorystat228(value: number) {
    this._categorystat228 = value;
  }
  public resetCategorystat228() {
    this._categorystat228 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat228Input() {
    return this._categorystat228;
  }

  // categorystat229 - computed: false, optional: true, required: false
  private _categorystat229?: number; 
  public get categorystat229() {
    return this.getNumberAttribute('categorystat229');
  }
  public set categorystat229(value: number) {
    this._categorystat229 = value;
  }
  public resetCategorystat229() {
    this._categorystat229 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat229Input() {
    return this._categorystat229;
  }

  // categorystat23 - computed: false, optional: true, required: false
  private _categorystat23?: number; 
  public get categorystat23() {
    return this.getNumberAttribute('categorystat23');
  }
  public set categorystat23(value: number) {
    this._categorystat23 = value;
  }
  public resetCategorystat23() {
    this._categorystat23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat23Input() {
    return this._categorystat23;
  }

  // categorystat230 - computed: false, optional: true, required: false
  private _categorystat230?: number; 
  public get categorystat230() {
    return this.getNumberAttribute('categorystat230');
  }
  public set categorystat230(value: number) {
    this._categorystat230 = value;
  }
  public resetCategorystat230() {
    this._categorystat230 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat230Input() {
    return this._categorystat230;
  }

  // categorystat231 - computed: false, optional: true, required: false
  private _categorystat231?: number; 
  public get categorystat231() {
    return this.getNumberAttribute('categorystat231');
  }
  public set categorystat231(value: number) {
    this._categorystat231 = value;
  }
  public resetCategorystat231() {
    this._categorystat231 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat231Input() {
    return this._categorystat231;
  }

  // categorystat232 - computed: false, optional: true, required: false
  private _categorystat232?: number; 
  public get categorystat232() {
    return this.getNumberAttribute('categorystat232');
  }
  public set categorystat232(value: number) {
    this._categorystat232 = value;
  }
  public resetCategorystat232() {
    this._categorystat232 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat232Input() {
    return this._categorystat232;
  }

  // categorystat233 - computed: false, optional: true, required: false
  private _categorystat233?: number; 
  public get categorystat233() {
    return this.getNumberAttribute('categorystat233');
  }
  public set categorystat233(value: number) {
    this._categorystat233 = value;
  }
  public resetCategorystat233() {
    this._categorystat233 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat233Input() {
    return this._categorystat233;
  }

  // categorystat234 - computed: false, optional: true, required: false
  private _categorystat234?: number; 
  public get categorystat234() {
    return this.getNumberAttribute('categorystat234');
  }
  public set categorystat234(value: number) {
    this._categorystat234 = value;
  }
  public resetCategorystat234() {
    this._categorystat234 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat234Input() {
    return this._categorystat234;
  }

  // categorystat235 - computed: false, optional: true, required: false
  private _categorystat235?: number; 
  public get categorystat235() {
    return this.getNumberAttribute('categorystat235');
  }
  public set categorystat235(value: number) {
    this._categorystat235 = value;
  }
  public resetCategorystat235() {
    this._categorystat235 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat235Input() {
    return this._categorystat235;
  }

  // categorystat236 - computed: false, optional: true, required: false
  private _categorystat236?: number; 
  public get categorystat236() {
    return this.getNumberAttribute('categorystat236');
  }
  public set categorystat236(value: number) {
    this._categorystat236 = value;
  }
  public resetCategorystat236() {
    this._categorystat236 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat236Input() {
    return this._categorystat236;
  }

  // categorystat237 - computed: false, optional: true, required: false
  private _categorystat237?: number; 
  public get categorystat237() {
    return this.getNumberAttribute('categorystat237');
  }
  public set categorystat237(value: number) {
    this._categorystat237 = value;
  }
  public resetCategorystat237() {
    this._categorystat237 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat237Input() {
    return this._categorystat237;
  }

  // categorystat238 - computed: false, optional: true, required: false
  private _categorystat238?: number; 
  public get categorystat238() {
    return this.getNumberAttribute('categorystat238');
  }
  public set categorystat238(value: number) {
    this._categorystat238 = value;
  }
  public resetCategorystat238() {
    this._categorystat238 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat238Input() {
    return this._categorystat238;
  }

  // categorystat239 - computed: false, optional: true, required: false
  private _categorystat239?: number; 
  public get categorystat239() {
    return this.getNumberAttribute('categorystat239');
  }
  public set categorystat239(value: number) {
    this._categorystat239 = value;
  }
  public resetCategorystat239() {
    this._categorystat239 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat239Input() {
    return this._categorystat239;
  }

  // categorystat24 - computed: false, optional: true, required: false
  private _categorystat24?: number; 
  public get categorystat24() {
    return this.getNumberAttribute('categorystat24');
  }
  public set categorystat24(value: number) {
    this._categorystat24 = value;
  }
  public resetCategorystat24() {
    this._categorystat24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat24Input() {
    return this._categorystat24;
  }

  // categorystat240 - computed: false, optional: true, required: false
  private _categorystat240?: number; 
  public get categorystat240() {
    return this.getNumberAttribute('categorystat240');
  }
  public set categorystat240(value: number) {
    this._categorystat240 = value;
  }
  public resetCategorystat240() {
    this._categorystat240 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat240Input() {
    return this._categorystat240;
  }

  // categorystat241 - computed: false, optional: true, required: false
  private _categorystat241?: number; 
  public get categorystat241() {
    return this.getNumberAttribute('categorystat241');
  }
  public set categorystat241(value: number) {
    this._categorystat241 = value;
  }
  public resetCategorystat241() {
    this._categorystat241 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat241Input() {
    return this._categorystat241;
  }

  // categorystat242 - computed: false, optional: true, required: false
  private _categorystat242?: number; 
  public get categorystat242() {
    return this.getNumberAttribute('categorystat242');
  }
  public set categorystat242(value: number) {
    this._categorystat242 = value;
  }
  public resetCategorystat242() {
    this._categorystat242 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat242Input() {
    return this._categorystat242;
  }

  // categorystat243 - computed: false, optional: true, required: false
  private _categorystat243?: number; 
  public get categorystat243() {
    return this.getNumberAttribute('categorystat243');
  }
  public set categorystat243(value: number) {
    this._categorystat243 = value;
  }
  public resetCategorystat243() {
    this._categorystat243 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat243Input() {
    return this._categorystat243;
  }

  // categorystat244 - computed: false, optional: true, required: false
  private _categorystat244?: number; 
  public get categorystat244() {
    return this.getNumberAttribute('categorystat244');
  }
  public set categorystat244(value: number) {
    this._categorystat244 = value;
  }
  public resetCategorystat244() {
    this._categorystat244 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat244Input() {
    return this._categorystat244;
  }

  // categorystat245 - computed: false, optional: true, required: false
  private _categorystat245?: number; 
  public get categorystat245() {
    return this.getNumberAttribute('categorystat245');
  }
  public set categorystat245(value: number) {
    this._categorystat245 = value;
  }
  public resetCategorystat245() {
    this._categorystat245 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat245Input() {
    return this._categorystat245;
  }

  // categorystat246 - computed: false, optional: true, required: false
  private _categorystat246?: number; 
  public get categorystat246() {
    return this.getNumberAttribute('categorystat246');
  }
  public set categorystat246(value: number) {
    this._categorystat246 = value;
  }
  public resetCategorystat246() {
    this._categorystat246 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat246Input() {
    return this._categorystat246;
  }

  // categorystat247 - computed: false, optional: true, required: false
  private _categorystat247?: number; 
  public get categorystat247() {
    return this.getNumberAttribute('categorystat247');
  }
  public set categorystat247(value: number) {
    this._categorystat247 = value;
  }
  public resetCategorystat247() {
    this._categorystat247 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat247Input() {
    return this._categorystat247;
  }

  // categorystat248 - computed: false, optional: true, required: false
  private _categorystat248?: number; 
  public get categorystat248() {
    return this.getNumberAttribute('categorystat248');
  }
  public set categorystat248(value: number) {
    this._categorystat248 = value;
  }
  public resetCategorystat248() {
    this._categorystat248 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat248Input() {
    return this._categorystat248;
  }

  // categorystat249 - computed: false, optional: true, required: false
  private _categorystat249?: number; 
  public get categorystat249() {
    return this.getNumberAttribute('categorystat249');
  }
  public set categorystat249(value: number) {
    this._categorystat249 = value;
  }
  public resetCategorystat249() {
    this._categorystat249 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat249Input() {
    return this._categorystat249;
  }

  // categorystat25 - computed: false, optional: true, required: false
  private _categorystat25?: number; 
  public get categorystat25() {
    return this.getNumberAttribute('categorystat25');
  }
  public set categorystat25(value: number) {
    this._categorystat25 = value;
  }
  public resetCategorystat25() {
    this._categorystat25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat25Input() {
    return this._categorystat25;
  }

  // categorystat250 - computed: false, optional: true, required: false
  private _categorystat250?: number; 
  public get categorystat250() {
    return this.getNumberAttribute('categorystat250');
  }
  public set categorystat250(value: number) {
    this._categorystat250 = value;
  }
  public resetCategorystat250() {
    this._categorystat250 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat250Input() {
    return this._categorystat250;
  }

  // categorystat251 - computed: false, optional: true, required: false
  private _categorystat251?: number; 
  public get categorystat251() {
    return this.getNumberAttribute('categorystat251');
  }
  public set categorystat251(value: number) {
    this._categorystat251 = value;
  }
  public resetCategorystat251() {
    this._categorystat251 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat251Input() {
    return this._categorystat251;
  }

  // categorystat252 - computed: false, optional: true, required: false
  private _categorystat252?: number; 
  public get categorystat252() {
    return this.getNumberAttribute('categorystat252');
  }
  public set categorystat252(value: number) {
    this._categorystat252 = value;
  }
  public resetCategorystat252() {
    this._categorystat252 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat252Input() {
    return this._categorystat252;
  }

  // categorystat253 - computed: false, optional: true, required: false
  private _categorystat253?: number; 
  public get categorystat253() {
    return this.getNumberAttribute('categorystat253');
  }
  public set categorystat253(value: number) {
    this._categorystat253 = value;
  }
  public resetCategorystat253() {
    this._categorystat253 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat253Input() {
    return this._categorystat253;
  }

  // categorystat254 - computed: false, optional: true, required: false
  private _categorystat254?: number; 
  public get categorystat254() {
    return this.getNumberAttribute('categorystat254');
  }
  public set categorystat254(value: number) {
    this._categorystat254 = value;
  }
  public resetCategorystat254() {
    this._categorystat254 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat254Input() {
    return this._categorystat254;
  }

  // categorystat255 - computed: false, optional: true, required: false
  private _categorystat255?: number; 
  public get categorystat255() {
    return this.getNumberAttribute('categorystat255');
  }
  public set categorystat255(value: number) {
    this._categorystat255 = value;
  }
  public resetCategorystat255() {
    this._categorystat255 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat255Input() {
    return this._categorystat255;
  }

  // categorystat256 - computed: false, optional: true, required: false
  private _categorystat256?: number; 
  public get categorystat256() {
    return this.getNumberAttribute('categorystat256');
  }
  public set categorystat256(value: number) {
    this._categorystat256 = value;
  }
  public resetCategorystat256() {
    this._categorystat256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat256Input() {
    return this._categorystat256;
  }

  // categorystat26 - computed: false, optional: true, required: false
  private _categorystat26?: number; 
  public get categorystat26() {
    return this.getNumberAttribute('categorystat26');
  }
  public set categorystat26(value: number) {
    this._categorystat26 = value;
  }
  public resetCategorystat26() {
    this._categorystat26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat26Input() {
    return this._categorystat26;
  }

  // categorystat27 - computed: false, optional: true, required: false
  private _categorystat27?: number; 
  public get categorystat27() {
    return this.getNumberAttribute('categorystat27');
  }
  public set categorystat27(value: number) {
    this._categorystat27 = value;
  }
  public resetCategorystat27() {
    this._categorystat27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat27Input() {
    return this._categorystat27;
  }

  // categorystat28 - computed: false, optional: true, required: false
  private _categorystat28?: number; 
  public get categorystat28() {
    return this.getNumberAttribute('categorystat28');
  }
  public set categorystat28(value: number) {
    this._categorystat28 = value;
  }
  public resetCategorystat28() {
    this._categorystat28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat28Input() {
    return this._categorystat28;
  }

  // categorystat29 - computed: false, optional: true, required: false
  private _categorystat29?: number; 
  public get categorystat29() {
    return this.getNumberAttribute('categorystat29');
  }
  public set categorystat29(value: number) {
    this._categorystat29 = value;
  }
  public resetCategorystat29() {
    this._categorystat29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat29Input() {
    return this._categorystat29;
  }

  // categorystat3 - computed: false, optional: true, required: false
  private _categorystat3?: number; 
  public get categorystat3() {
    return this.getNumberAttribute('categorystat3');
  }
  public set categorystat3(value: number) {
    this._categorystat3 = value;
  }
  public resetCategorystat3() {
    this._categorystat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat3Input() {
    return this._categorystat3;
  }

  // categorystat30 - computed: false, optional: true, required: false
  private _categorystat30?: number; 
  public get categorystat30() {
    return this.getNumberAttribute('categorystat30');
  }
  public set categorystat30(value: number) {
    this._categorystat30 = value;
  }
  public resetCategorystat30() {
    this._categorystat30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat30Input() {
    return this._categorystat30;
  }

  // categorystat31 - computed: false, optional: true, required: false
  private _categorystat31?: number; 
  public get categorystat31() {
    return this.getNumberAttribute('categorystat31');
  }
  public set categorystat31(value: number) {
    this._categorystat31 = value;
  }
  public resetCategorystat31() {
    this._categorystat31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat31Input() {
    return this._categorystat31;
  }

  // categorystat32 - computed: false, optional: true, required: false
  private _categorystat32?: number; 
  public get categorystat32() {
    return this.getNumberAttribute('categorystat32');
  }
  public set categorystat32(value: number) {
    this._categorystat32 = value;
  }
  public resetCategorystat32() {
    this._categorystat32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat32Input() {
    return this._categorystat32;
  }

  // categorystat33 - computed: false, optional: true, required: false
  private _categorystat33?: number; 
  public get categorystat33() {
    return this.getNumberAttribute('categorystat33');
  }
  public set categorystat33(value: number) {
    this._categorystat33 = value;
  }
  public resetCategorystat33() {
    this._categorystat33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat33Input() {
    return this._categorystat33;
  }

  // categorystat34 - computed: false, optional: true, required: false
  private _categorystat34?: number; 
  public get categorystat34() {
    return this.getNumberAttribute('categorystat34');
  }
  public set categorystat34(value: number) {
    this._categorystat34 = value;
  }
  public resetCategorystat34() {
    this._categorystat34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat34Input() {
    return this._categorystat34;
  }

  // categorystat35 - computed: false, optional: true, required: false
  private _categorystat35?: number; 
  public get categorystat35() {
    return this.getNumberAttribute('categorystat35');
  }
  public set categorystat35(value: number) {
    this._categorystat35 = value;
  }
  public resetCategorystat35() {
    this._categorystat35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat35Input() {
    return this._categorystat35;
  }

  // categorystat36 - computed: false, optional: true, required: false
  private _categorystat36?: number; 
  public get categorystat36() {
    return this.getNumberAttribute('categorystat36');
  }
  public set categorystat36(value: number) {
    this._categorystat36 = value;
  }
  public resetCategorystat36() {
    this._categorystat36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat36Input() {
    return this._categorystat36;
  }

  // categorystat37 - computed: false, optional: true, required: false
  private _categorystat37?: number; 
  public get categorystat37() {
    return this.getNumberAttribute('categorystat37');
  }
  public set categorystat37(value: number) {
    this._categorystat37 = value;
  }
  public resetCategorystat37() {
    this._categorystat37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat37Input() {
    return this._categorystat37;
  }

  // categorystat38 - computed: false, optional: true, required: false
  private _categorystat38?: number; 
  public get categorystat38() {
    return this.getNumberAttribute('categorystat38');
  }
  public set categorystat38(value: number) {
    this._categorystat38 = value;
  }
  public resetCategorystat38() {
    this._categorystat38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat38Input() {
    return this._categorystat38;
  }

  // categorystat39 - computed: false, optional: true, required: false
  private _categorystat39?: number; 
  public get categorystat39() {
    return this.getNumberAttribute('categorystat39');
  }
  public set categorystat39(value: number) {
    this._categorystat39 = value;
  }
  public resetCategorystat39() {
    this._categorystat39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat39Input() {
    return this._categorystat39;
  }

  // categorystat4 - computed: false, optional: true, required: false
  private _categorystat4?: number; 
  public get categorystat4() {
    return this.getNumberAttribute('categorystat4');
  }
  public set categorystat4(value: number) {
    this._categorystat4 = value;
  }
  public resetCategorystat4() {
    this._categorystat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat4Input() {
    return this._categorystat4;
  }

  // categorystat40 - computed: false, optional: true, required: false
  private _categorystat40?: number; 
  public get categorystat40() {
    return this.getNumberAttribute('categorystat40');
  }
  public set categorystat40(value: number) {
    this._categorystat40 = value;
  }
  public resetCategorystat40() {
    this._categorystat40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat40Input() {
    return this._categorystat40;
  }

  // categorystat41 - computed: false, optional: true, required: false
  private _categorystat41?: number; 
  public get categorystat41() {
    return this.getNumberAttribute('categorystat41');
  }
  public set categorystat41(value: number) {
    this._categorystat41 = value;
  }
  public resetCategorystat41() {
    this._categorystat41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat41Input() {
    return this._categorystat41;
  }

  // categorystat42 - computed: false, optional: true, required: false
  private _categorystat42?: number; 
  public get categorystat42() {
    return this.getNumberAttribute('categorystat42');
  }
  public set categorystat42(value: number) {
    this._categorystat42 = value;
  }
  public resetCategorystat42() {
    this._categorystat42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat42Input() {
    return this._categorystat42;
  }

  // categorystat43 - computed: false, optional: true, required: false
  private _categorystat43?: number; 
  public get categorystat43() {
    return this.getNumberAttribute('categorystat43');
  }
  public set categorystat43(value: number) {
    this._categorystat43 = value;
  }
  public resetCategorystat43() {
    this._categorystat43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat43Input() {
    return this._categorystat43;
  }

  // categorystat44 - computed: false, optional: true, required: false
  private _categorystat44?: number; 
  public get categorystat44() {
    return this.getNumberAttribute('categorystat44');
  }
  public set categorystat44(value: number) {
    this._categorystat44 = value;
  }
  public resetCategorystat44() {
    this._categorystat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat44Input() {
    return this._categorystat44;
  }

  // categorystat45 - computed: false, optional: true, required: false
  private _categorystat45?: number; 
  public get categorystat45() {
    return this.getNumberAttribute('categorystat45');
  }
  public set categorystat45(value: number) {
    this._categorystat45 = value;
  }
  public resetCategorystat45() {
    this._categorystat45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat45Input() {
    return this._categorystat45;
  }

  // categorystat46 - computed: false, optional: true, required: false
  private _categorystat46?: number; 
  public get categorystat46() {
    return this.getNumberAttribute('categorystat46');
  }
  public set categorystat46(value: number) {
    this._categorystat46 = value;
  }
  public resetCategorystat46() {
    this._categorystat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat46Input() {
    return this._categorystat46;
  }

  // categorystat47 - computed: false, optional: true, required: false
  private _categorystat47?: number; 
  public get categorystat47() {
    return this.getNumberAttribute('categorystat47');
  }
  public set categorystat47(value: number) {
    this._categorystat47 = value;
  }
  public resetCategorystat47() {
    this._categorystat47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat47Input() {
    return this._categorystat47;
  }

  // categorystat48 - computed: false, optional: true, required: false
  private _categorystat48?: number; 
  public get categorystat48() {
    return this.getNumberAttribute('categorystat48');
  }
  public set categorystat48(value: number) {
    this._categorystat48 = value;
  }
  public resetCategorystat48() {
    this._categorystat48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat48Input() {
    return this._categorystat48;
  }

  // categorystat49 - computed: false, optional: true, required: false
  private _categorystat49?: number; 
  public get categorystat49() {
    return this.getNumberAttribute('categorystat49');
  }
  public set categorystat49(value: number) {
    this._categorystat49 = value;
  }
  public resetCategorystat49() {
    this._categorystat49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat49Input() {
    return this._categorystat49;
  }

  // categorystat5 - computed: false, optional: true, required: false
  private _categorystat5?: number; 
  public get categorystat5() {
    return this.getNumberAttribute('categorystat5');
  }
  public set categorystat5(value: number) {
    this._categorystat5 = value;
  }
  public resetCategorystat5() {
    this._categorystat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat5Input() {
    return this._categorystat5;
  }

  // categorystat50 - computed: false, optional: true, required: false
  private _categorystat50?: number; 
  public get categorystat50() {
    return this.getNumberAttribute('categorystat50');
  }
  public set categorystat50(value: number) {
    this._categorystat50 = value;
  }
  public resetCategorystat50() {
    this._categorystat50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat50Input() {
    return this._categorystat50;
  }

  // categorystat51 - computed: false, optional: true, required: false
  private _categorystat51?: number; 
  public get categorystat51() {
    return this.getNumberAttribute('categorystat51');
  }
  public set categorystat51(value: number) {
    this._categorystat51 = value;
  }
  public resetCategorystat51() {
    this._categorystat51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat51Input() {
    return this._categorystat51;
  }

  // categorystat52 - computed: false, optional: true, required: false
  private _categorystat52?: number; 
  public get categorystat52() {
    return this.getNumberAttribute('categorystat52');
  }
  public set categorystat52(value: number) {
    this._categorystat52 = value;
  }
  public resetCategorystat52() {
    this._categorystat52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat52Input() {
    return this._categorystat52;
  }

  // categorystat53 - computed: false, optional: true, required: false
  private _categorystat53?: number; 
  public get categorystat53() {
    return this.getNumberAttribute('categorystat53');
  }
  public set categorystat53(value: number) {
    this._categorystat53 = value;
  }
  public resetCategorystat53() {
    this._categorystat53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat53Input() {
    return this._categorystat53;
  }

  // categorystat54 - computed: false, optional: true, required: false
  private _categorystat54?: number; 
  public get categorystat54() {
    return this.getNumberAttribute('categorystat54');
  }
  public set categorystat54(value: number) {
    this._categorystat54 = value;
  }
  public resetCategorystat54() {
    this._categorystat54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat54Input() {
    return this._categorystat54;
  }

  // categorystat55 - computed: false, optional: true, required: false
  private _categorystat55?: number; 
  public get categorystat55() {
    return this.getNumberAttribute('categorystat55');
  }
  public set categorystat55(value: number) {
    this._categorystat55 = value;
  }
  public resetCategorystat55() {
    this._categorystat55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat55Input() {
    return this._categorystat55;
  }

  // categorystat56 - computed: false, optional: true, required: false
  private _categorystat56?: number; 
  public get categorystat56() {
    return this.getNumberAttribute('categorystat56');
  }
  public set categorystat56(value: number) {
    this._categorystat56 = value;
  }
  public resetCategorystat56() {
    this._categorystat56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat56Input() {
    return this._categorystat56;
  }

  // categorystat57 - computed: false, optional: true, required: false
  private _categorystat57?: number; 
  public get categorystat57() {
    return this.getNumberAttribute('categorystat57');
  }
  public set categorystat57(value: number) {
    this._categorystat57 = value;
  }
  public resetCategorystat57() {
    this._categorystat57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat57Input() {
    return this._categorystat57;
  }

  // categorystat58 - computed: false, optional: true, required: false
  private _categorystat58?: number; 
  public get categorystat58() {
    return this.getNumberAttribute('categorystat58');
  }
  public set categorystat58(value: number) {
    this._categorystat58 = value;
  }
  public resetCategorystat58() {
    this._categorystat58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat58Input() {
    return this._categorystat58;
  }

  // categorystat59 - computed: false, optional: true, required: false
  private _categorystat59?: number; 
  public get categorystat59() {
    return this.getNumberAttribute('categorystat59');
  }
  public set categorystat59(value: number) {
    this._categorystat59 = value;
  }
  public resetCategorystat59() {
    this._categorystat59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat59Input() {
    return this._categorystat59;
  }

  // categorystat6 - computed: false, optional: true, required: false
  private _categorystat6?: number; 
  public get categorystat6() {
    return this.getNumberAttribute('categorystat6');
  }
  public set categorystat6(value: number) {
    this._categorystat6 = value;
  }
  public resetCategorystat6() {
    this._categorystat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat6Input() {
    return this._categorystat6;
  }

  // categorystat60 - computed: false, optional: true, required: false
  private _categorystat60?: number; 
  public get categorystat60() {
    return this.getNumberAttribute('categorystat60');
  }
  public set categorystat60(value: number) {
    this._categorystat60 = value;
  }
  public resetCategorystat60() {
    this._categorystat60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat60Input() {
    return this._categorystat60;
  }

  // categorystat61 - computed: false, optional: true, required: false
  private _categorystat61?: number; 
  public get categorystat61() {
    return this.getNumberAttribute('categorystat61');
  }
  public set categorystat61(value: number) {
    this._categorystat61 = value;
  }
  public resetCategorystat61() {
    this._categorystat61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat61Input() {
    return this._categorystat61;
  }

  // categorystat62 - computed: false, optional: true, required: false
  private _categorystat62?: number; 
  public get categorystat62() {
    return this.getNumberAttribute('categorystat62');
  }
  public set categorystat62(value: number) {
    this._categorystat62 = value;
  }
  public resetCategorystat62() {
    this._categorystat62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat62Input() {
    return this._categorystat62;
  }

  // categorystat63 - computed: false, optional: true, required: false
  private _categorystat63?: number; 
  public get categorystat63() {
    return this.getNumberAttribute('categorystat63');
  }
  public set categorystat63(value: number) {
    this._categorystat63 = value;
  }
  public resetCategorystat63() {
    this._categorystat63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat63Input() {
    return this._categorystat63;
  }

  // categorystat64 - computed: false, optional: true, required: false
  private _categorystat64?: number; 
  public get categorystat64() {
    return this.getNumberAttribute('categorystat64');
  }
  public set categorystat64(value: number) {
    this._categorystat64 = value;
  }
  public resetCategorystat64() {
    this._categorystat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat64Input() {
    return this._categorystat64;
  }

  // categorystat65 - computed: false, optional: true, required: false
  private _categorystat65?: number; 
  public get categorystat65() {
    return this.getNumberAttribute('categorystat65');
  }
  public set categorystat65(value: number) {
    this._categorystat65 = value;
  }
  public resetCategorystat65() {
    this._categorystat65 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat65Input() {
    return this._categorystat65;
  }

  // categorystat66 - computed: false, optional: true, required: false
  private _categorystat66?: number; 
  public get categorystat66() {
    return this.getNumberAttribute('categorystat66');
  }
  public set categorystat66(value: number) {
    this._categorystat66 = value;
  }
  public resetCategorystat66() {
    this._categorystat66 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat66Input() {
    return this._categorystat66;
  }

  // categorystat67 - computed: false, optional: true, required: false
  private _categorystat67?: number; 
  public get categorystat67() {
    return this.getNumberAttribute('categorystat67');
  }
  public set categorystat67(value: number) {
    this._categorystat67 = value;
  }
  public resetCategorystat67() {
    this._categorystat67 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat67Input() {
    return this._categorystat67;
  }

  // categorystat68 - computed: false, optional: true, required: false
  private _categorystat68?: number; 
  public get categorystat68() {
    return this.getNumberAttribute('categorystat68');
  }
  public set categorystat68(value: number) {
    this._categorystat68 = value;
  }
  public resetCategorystat68() {
    this._categorystat68 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat68Input() {
    return this._categorystat68;
  }

  // categorystat69 - computed: false, optional: true, required: false
  private _categorystat69?: number; 
  public get categorystat69() {
    return this.getNumberAttribute('categorystat69');
  }
  public set categorystat69(value: number) {
    this._categorystat69 = value;
  }
  public resetCategorystat69() {
    this._categorystat69 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat69Input() {
    return this._categorystat69;
  }

  // categorystat7 - computed: false, optional: true, required: false
  private _categorystat7?: number; 
  public get categorystat7() {
    return this.getNumberAttribute('categorystat7');
  }
  public set categorystat7(value: number) {
    this._categorystat7 = value;
  }
  public resetCategorystat7() {
    this._categorystat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat7Input() {
    return this._categorystat7;
  }

  // categorystat70 - computed: false, optional: true, required: false
  private _categorystat70?: number; 
  public get categorystat70() {
    return this.getNumberAttribute('categorystat70');
  }
  public set categorystat70(value: number) {
    this._categorystat70 = value;
  }
  public resetCategorystat70() {
    this._categorystat70 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat70Input() {
    return this._categorystat70;
  }

  // categorystat71 - computed: false, optional: true, required: false
  private _categorystat71?: number; 
  public get categorystat71() {
    return this.getNumberAttribute('categorystat71');
  }
  public set categorystat71(value: number) {
    this._categorystat71 = value;
  }
  public resetCategorystat71() {
    this._categorystat71 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat71Input() {
    return this._categorystat71;
  }

  // categorystat72 - computed: false, optional: true, required: false
  private _categorystat72?: number; 
  public get categorystat72() {
    return this.getNumberAttribute('categorystat72');
  }
  public set categorystat72(value: number) {
    this._categorystat72 = value;
  }
  public resetCategorystat72() {
    this._categorystat72 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat72Input() {
    return this._categorystat72;
  }

  // categorystat73 - computed: false, optional: true, required: false
  private _categorystat73?: number; 
  public get categorystat73() {
    return this.getNumberAttribute('categorystat73');
  }
  public set categorystat73(value: number) {
    this._categorystat73 = value;
  }
  public resetCategorystat73() {
    this._categorystat73 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat73Input() {
    return this._categorystat73;
  }

  // categorystat74 - computed: false, optional: true, required: false
  private _categorystat74?: number; 
  public get categorystat74() {
    return this.getNumberAttribute('categorystat74');
  }
  public set categorystat74(value: number) {
    this._categorystat74 = value;
  }
  public resetCategorystat74() {
    this._categorystat74 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat74Input() {
    return this._categorystat74;
  }

  // categorystat75 - computed: false, optional: true, required: false
  private _categorystat75?: number; 
  public get categorystat75() {
    return this.getNumberAttribute('categorystat75');
  }
  public set categorystat75(value: number) {
    this._categorystat75 = value;
  }
  public resetCategorystat75() {
    this._categorystat75 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat75Input() {
    return this._categorystat75;
  }

  // categorystat76 - computed: false, optional: true, required: false
  private _categorystat76?: number; 
  public get categorystat76() {
    return this.getNumberAttribute('categorystat76');
  }
  public set categorystat76(value: number) {
    this._categorystat76 = value;
  }
  public resetCategorystat76() {
    this._categorystat76 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat76Input() {
    return this._categorystat76;
  }

  // categorystat77 - computed: false, optional: true, required: false
  private _categorystat77?: number; 
  public get categorystat77() {
    return this.getNumberAttribute('categorystat77');
  }
  public set categorystat77(value: number) {
    this._categorystat77 = value;
  }
  public resetCategorystat77() {
    this._categorystat77 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat77Input() {
    return this._categorystat77;
  }

  // categorystat78 - computed: false, optional: true, required: false
  private _categorystat78?: number; 
  public get categorystat78() {
    return this.getNumberAttribute('categorystat78');
  }
  public set categorystat78(value: number) {
    this._categorystat78 = value;
  }
  public resetCategorystat78() {
    this._categorystat78 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat78Input() {
    return this._categorystat78;
  }

  // categorystat79 - computed: false, optional: true, required: false
  private _categorystat79?: number; 
  public get categorystat79() {
    return this.getNumberAttribute('categorystat79');
  }
  public set categorystat79(value: number) {
    this._categorystat79 = value;
  }
  public resetCategorystat79() {
    this._categorystat79 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat79Input() {
    return this._categorystat79;
  }

  // categorystat8 - computed: false, optional: true, required: false
  private _categorystat8?: number; 
  public get categorystat8() {
    return this.getNumberAttribute('categorystat8');
  }
  public set categorystat8(value: number) {
    this._categorystat8 = value;
  }
  public resetCategorystat8() {
    this._categorystat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat8Input() {
    return this._categorystat8;
  }

  // categorystat80 - computed: false, optional: true, required: false
  private _categorystat80?: number; 
  public get categorystat80() {
    return this.getNumberAttribute('categorystat80');
  }
  public set categorystat80(value: number) {
    this._categorystat80 = value;
  }
  public resetCategorystat80() {
    this._categorystat80 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat80Input() {
    return this._categorystat80;
  }

  // categorystat81 - computed: false, optional: true, required: false
  private _categorystat81?: number; 
  public get categorystat81() {
    return this.getNumberAttribute('categorystat81');
  }
  public set categorystat81(value: number) {
    this._categorystat81 = value;
  }
  public resetCategorystat81() {
    this._categorystat81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat81Input() {
    return this._categorystat81;
  }

  // categorystat82 - computed: false, optional: true, required: false
  private _categorystat82?: number; 
  public get categorystat82() {
    return this.getNumberAttribute('categorystat82');
  }
  public set categorystat82(value: number) {
    this._categorystat82 = value;
  }
  public resetCategorystat82() {
    this._categorystat82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat82Input() {
    return this._categorystat82;
  }

  // categorystat83 - computed: false, optional: true, required: false
  private _categorystat83?: number; 
  public get categorystat83() {
    return this.getNumberAttribute('categorystat83');
  }
  public set categorystat83(value: number) {
    this._categorystat83 = value;
  }
  public resetCategorystat83() {
    this._categorystat83 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat83Input() {
    return this._categorystat83;
  }

  // categorystat84 - computed: false, optional: true, required: false
  private _categorystat84?: number; 
  public get categorystat84() {
    return this.getNumberAttribute('categorystat84');
  }
  public set categorystat84(value: number) {
    this._categorystat84 = value;
  }
  public resetCategorystat84() {
    this._categorystat84 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat84Input() {
    return this._categorystat84;
  }

  // categorystat85 - computed: false, optional: true, required: false
  private _categorystat85?: number; 
  public get categorystat85() {
    return this.getNumberAttribute('categorystat85');
  }
  public set categorystat85(value: number) {
    this._categorystat85 = value;
  }
  public resetCategorystat85() {
    this._categorystat85 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat85Input() {
    return this._categorystat85;
  }

  // categorystat86 - computed: false, optional: true, required: false
  private _categorystat86?: number; 
  public get categorystat86() {
    return this.getNumberAttribute('categorystat86');
  }
  public set categorystat86(value: number) {
    this._categorystat86 = value;
  }
  public resetCategorystat86() {
    this._categorystat86 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat86Input() {
    return this._categorystat86;
  }

  // categorystat87 - computed: false, optional: true, required: false
  private _categorystat87?: number; 
  public get categorystat87() {
    return this.getNumberAttribute('categorystat87');
  }
  public set categorystat87(value: number) {
    this._categorystat87 = value;
  }
  public resetCategorystat87() {
    this._categorystat87 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat87Input() {
    return this._categorystat87;
  }

  // categorystat88 - computed: false, optional: true, required: false
  private _categorystat88?: number; 
  public get categorystat88() {
    return this.getNumberAttribute('categorystat88');
  }
  public set categorystat88(value: number) {
    this._categorystat88 = value;
  }
  public resetCategorystat88() {
    this._categorystat88 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat88Input() {
    return this._categorystat88;
  }

  // categorystat89 - computed: false, optional: true, required: false
  private _categorystat89?: number; 
  public get categorystat89() {
    return this.getNumberAttribute('categorystat89');
  }
  public set categorystat89(value: number) {
    this._categorystat89 = value;
  }
  public resetCategorystat89() {
    this._categorystat89 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat89Input() {
    return this._categorystat89;
  }

  // categorystat9 - computed: false, optional: true, required: false
  private _categorystat9?: number; 
  public get categorystat9() {
    return this.getNumberAttribute('categorystat9');
  }
  public set categorystat9(value: number) {
    this._categorystat9 = value;
  }
  public resetCategorystat9() {
    this._categorystat9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat9Input() {
    return this._categorystat9;
  }

  // categorystat90 - computed: false, optional: true, required: false
  private _categorystat90?: number; 
  public get categorystat90() {
    return this.getNumberAttribute('categorystat90');
  }
  public set categorystat90(value: number) {
    this._categorystat90 = value;
  }
  public resetCategorystat90() {
    this._categorystat90 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat90Input() {
    return this._categorystat90;
  }

  // categorystat91 - computed: false, optional: true, required: false
  private _categorystat91?: number; 
  public get categorystat91() {
    return this.getNumberAttribute('categorystat91');
  }
  public set categorystat91(value: number) {
    this._categorystat91 = value;
  }
  public resetCategorystat91() {
    this._categorystat91 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat91Input() {
    return this._categorystat91;
  }

  // categorystat92 - computed: false, optional: true, required: false
  private _categorystat92?: number; 
  public get categorystat92() {
    return this.getNumberAttribute('categorystat92');
  }
  public set categorystat92(value: number) {
    this._categorystat92 = value;
  }
  public resetCategorystat92() {
    this._categorystat92 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat92Input() {
    return this._categorystat92;
  }

  // categorystat93 - computed: false, optional: true, required: false
  private _categorystat93?: number; 
  public get categorystat93() {
    return this.getNumberAttribute('categorystat93');
  }
  public set categorystat93(value: number) {
    this._categorystat93 = value;
  }
  public resetCategorystat93() {
    this._categorystat93 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat93Input() {
    return this._categorystat93;
  }

  // categorystat94 - computed: false, optional: true, required: false
  private _categorystat94?: number; 
  public get categorystat94() {
    return this.getNumberAttribute('categorystat94');
  }
  public set categorystat94(value: number) {
    this._categorystat94 = value;
  }
  public resetCategorystat94() {
    this._categorystat94 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat94Input() {
    return this._categorystat94;
  }

  // categorystat95 - computed: false, optional: true, required: false
  private _categorystat95?: number; 
  public get categorystat95() {
    return this.getNumberAttribute('categorystat95');
  }
  public set categorystat95(value: number) {
    this._categorystat95 = value;
  }
  public resetCategorystat95() {
    this._categorystat95 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat95Input() {
    return this._categorystat95;
  }

  // categorystat96 - computed: false, optional: true, required: false
  private _categorystat96?: number; 
  public get categorystat96() {
    return this.getNumberAttribute('categorystat96');
  }
  public set categorystat96(value: number) {
    this._categorystat96 = value;
  }
  public resetCategorystat96() {
    this._categorystat96 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat96Input() {
    return this._categorystat96;
  }

  // categorystat97 - computed: false, optional: true, required: false
  private _categorystat97?: number; 
  public get categorystat97() {
    return this.getNumberAttribute('categorystat97');
  }
  public set categorystat97(value: number) {
    this._categorystat97 = value;
  }
  public resetCategorystat97() {
    this._categorystat97 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat97Input() {
    return this._categorystat97;
  }

  // categorystat98 - computed: false, optional: true, required: false
  private _categorystat98?: number; 
  public get categorystat98() {
    return this.getNumberAttribute('categorystat98');
  }
  public set categorystat98(value: number) {
    this._categorystat98 = value;
  }
  public resetCategorystat98() {
    this._categorystat98 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat98Input() {
    return this._categorystat98;
  }

  // categorystat99 - computed: false, optional: true, required: false
  private _categorystat99?: number; 
  public get categorystat99() {
    return this.getNumberAttribute('categorystat99');
  }
  public set categorystat99(value: number) {
    this._categorystat99 = value;
  }
  public resetCategorystat99() {
    this._categorystat99 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorystat99Input() {
    return this._categorystat99;
  }
}
export interface DataThunderRuleSetStatsTag {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsTagStats;
}

export function dataThunderRuleSetStatsTagToTerraform(struct?: DataThunderRuleSetStatsTagOutputReference | DataThunderRuleSetStatsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderRuleSetStatsTagStatsToTerraform(struct!.stats),
  }
}


export function dataThunderRuleSetStatsTagToHclTerraform(struct?: DataThunderRuleSetStatsTagOutputReference | DataThunderRuleSetStatsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderRuleSetStatsTagStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetStatsTagStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsTagStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsTagStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderRuleSetStatsTrackAppRuleListStats {
  /**
  * Entry for a10countergen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#dummy DataThunderRuleSetStats#dummy}
  */
  readonly dummy?: number;
}

export function dataThunderRuleSetStatsTrackAppRuleListStatsToTerraform(struct?: DataThunderRuleSetStatsTrackAppRuleListStatsOutputReference | DataThunderRuleSetStatsTrackAppRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dummy: cdktf.numberToTerraform(struct!.dummy),
  }
}


export function dataThunderRuleSetStatsTrackAppRuleListStatsToHclTerraform(struct?: DataThunderRuleSetStatsTrackAppRuleListStatsOutputReference | DataThunderRuleSetStatsTrackAppRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dummy: {
      value: cdktf.numberToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsTrackAppRuleListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsTrackAppRuleListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsTrackAppRuleListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dummy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dummy = value.dummy;
    }
  }

  // dummy - computed: false, optional: true, required: false
  private _dummy?: number; 
  public get dummy() {
    return this.getNumberAttribute('dummy');
  }
  public set dummy(value: number) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }
}
export interface DataThunderRuleSetStatsTrackAppRuleListStruct {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#stats DataThunderRuleSetStats#stats}
  */
  readonly stats?: DataThunderRuleSetStatsTrackAppRuleListStats;
}

export function dataThunderRuleSetStatsTrackAppRuleListStructToTerraform(struct?: DataThunderRuleSetStatsTrackAppRuleListStructOutputReference | DataThunderRuleSetStatsTrackAppRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderRuleSetStatsTrackAppRuleListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderRuleSetStatsTrackAppRuleListStructToHclTerraform(struct?: DataThunderRuleSetStatsTrackAppRuleListStructOutputReference | DataThunderRuleSetStatsTrackAppRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderRuleSetStatsTrackAppRuleListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRuleSetStatsTrackAppRuleListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetStatsTrackAppRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetStatsTrackAppRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetStatsTrackAppRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsTrackAppRuleListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsTrackAppRuleListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats thunder_rule_set_stats}
*/
export class DataThunderRuleSetStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetStats to import
  * @param importFromId The id of the existing DataThunderRuleSetStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rule_set_stats thunder_rule_set_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_stats',
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
    this._name = config.name;
    this._app.internalValue = config.app;
    this._ruleList.internalValue = config.ruleList;
    this._rulesByZone.internalValue = config.rulesByZone;
    this._stats.internalValue = config.stats;
    this._tag.internalValue = config.tag;
    this._trackAppRuleList.internalValue = config.trackAppRuleList;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // app - computed: false, optional: true, required: false
  private _app = new DataThunderRuleSetStatsAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }
  public putApp(value: DataThunderRuleSetStatsApp) {
    this._app.internalValue = value;
  }
  public resetApp() {
    this._app.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderRuleSetStatsRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderRuleSetStatsRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // rules_by_zone - computed: false, optional: true, required: false
  private _rulesByZone = new DataThunderRuleSetStatsRulesByZoneOutputReference(this, "rules_by_zone");
  public get rulesByZone() {
    return this._rulesByZone;
  }
  public putRulesByZone(value: DataThunderRuleSetStatsRulesByZone) {
    this._rulesByZone.internalValue = value;
  }
  public resetRulesByZone() {
    this._rulesByZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesByZoneInput() {
    return this._rulesByZone.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataThunderRuleSetStatsTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataThunderRuleSetStatsTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // track_app_rule_list - computed: false, optional: true, required: false
  private _trackAppRuleList = new DataThunderRuleSetStatsTrackAppRuleListStructOutputReference(this, "track_app_rule_list");
  public get trackAppRuleList() {
    return this._trackAppRuleList;
  }
  public putTrackAppRuleList(value: DataThunderRuleSetStatsTrackAppRuleListStruct) {
    this._trackAppRuleList.internalValue = value;
  }
  public resetTrackAppRuleList() {
    this._trackAppRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAppRuleListInput() {
    return this._trackAppRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      app: dataThunderRuleSetStatsAppToTerraform(this._app.internalValue),
      rule_list: cdktf.listMapper(dataThunderRuleSetStatsRuleListStructToTerraform, true)(this._ruleList.internalValue),
      rules_by_zone: dataThunderRuleSetStatsRulesByZoneToTerraform(this._rulesByZone.internalValue),
      stats: dataThunderRuleSetStatsStatsToTerraform(this._stats.internalValue),
      tag: dataThunderRuleSetStatsTagToTerraform(this._tag.internalValue),
      track_app_rule_list: dataThunderRuleSetStatsTrackAppRuleListStructToTerraform(this._trackAppRuleList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: dataThunderRuleSetStatsAppToHclTerraform(this._app.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsAppList",
      },
      rule_list: {
        value: cdktf.listMapperHcl(dataThunderRuleSetStatsRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsRuleListStructList",
      },
      rules_by_zone: {
        value: dataThunderRuleSetStatsRulesByZoneToHclTerraform(this._rulesByZone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsRulesByZoneList",
      },
      stats: {
        value: dataThunderRuleSetStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsStatsList",
      },
      tag: {
        value: dataThunderRuleSetStatsTagToHclTerraform(this._tag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsTagList",
      },
      track_app_rule_list: {
        value: dataThunderRuleSetStatsTrackAppRuleListStructToHclTerraform(this._trackAppRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetStatsTrackAppRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
