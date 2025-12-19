// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetTagStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#id DataThunderRuleSetTagStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#rule_set_name DataThunderRuleSetTagStats#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#stats DataThunderRuleSetTagStats#stats}
  */
  readonly stats?: DataThunderRuleSetTagStatsStats;
}
export interface DataThunderRuleSetTagStatsStats {
  /**
  * counter app category stat 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat1 DataThunderRuleSetTagStats#categorystat1}
  */
  readonly categorystat1?: number;
  /**
  * counter app category stat 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat10 DataThunderRuleSetTagStats#categorystat10}
  */
  readonly categorystat10?: number;
  /**
  * counter app category stat 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat100 DataThunderRuleSetTagStats#categorystat100}
  */
  readonly categorystat100?: number;
  /**
  * counter app category stat 101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat101 DataThunderRuleSetTagStats#categorystat101}
  */
  readonly categorystat101?: number;
  /**
  * counter app category stat 102
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat102 DataThunderRuleSetTagStats#categorystat102}
  */
  readonly categorystat102?: number;
  /**
  * counter app category stat 103
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat103 DataThunderRuleSetTagStats#categorystat103}
  */
  readonly categorystat103?: number;
  /**
  * counter app category stat 104
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat104 DataThunderRuleSetTagStats#categorystat104}
  */
  readonly categorystat104?: number;
  /**
  * counter app category stat 105
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat105 DataThunderRuleSetTagStats#categorystat105}
  */
  readonly categorystat105?: number;
  /**
  * counter app category stat 106
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat106 DataThunderRuleSetTagStats#categorystat106}
  */
  readonly categorystat106?: number;
  /**
  * counter app category stat 107
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat107 DataThunderRuleSetTagStats#categorystat107}
  */
  readonly categorystat107?: number;
  /**
  * counter app category stat 108
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat108 DataThunderRuleSetTagStats#categorystat108}
  */
  readonly categorystat108?: number;
  /**
  * counter app category stat 109
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat109 DataThunderRuleSetTagStats#categorystat109}
  */
  readonly categorystat109?: number;
  /**
  * counter app category stat 11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat11 DataThunderRuleSetTagStats#categorystat11}
  */
  readonly categorystat11?: number;
  /**
  * counter app category stat 110
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat110 DataThunderRuleSetTagStats#categorystat110}
  */
  readonly categorystat110?: number;
  /**
  * counter app category stat 111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat111 DataThunderRuleSetTagStats#categorystat111}
  */
  readonly categorystat111?: number;
  /**
  * counter app category stat 112
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat112 DataThunderRuleSetTagStats#categorystat112}
  */
  readonly categorystat112?: number;
  /**
  * counter app category stat 113
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat113 DataThunderRuleSetTagStats#categorystat113}
  */
  readonly categorystat113?: number;
  /**
  * counter app category stat 114
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat114 DataThunderRuleSetTagStats#categorystat114}
  */
  readonly categorystat114?: number;
  /**
  * counter app category stat 115
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat115 DataThunderRuleSetTagStats#categorystat115}
  */
  readonly categorystat115?: number;
  /**
  * counter app category stat 116
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat116 DataThunderRuleSetTagStats#categorystat116}
  */
  readonly categorystat116?: number;
  /**
  * counter app category stat 117
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat117 DataThunderRuleSetTagStats#categorystat117}
  */
  readonly categorystat117?: number;
  /**
  * counter app category stat 118
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat118 DataThunderRuleSetTagStats#categorystat118}
  */
  readonly categorystat118?: number;
  /**
  * counter app category stat 119
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat119 DataThunderRuleSetTagStats#categorystat119}
  */
  readonly categorystat119?: number;
  /**
  * counter app category stat 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat12 DataThunderRuleSetTagStats#categorystat12}
  */
  readonly categorystat12?: number;
  /**
  * counter app category stat 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat120 DataThunderRuleSetTagStats#categorystat120}
  */
  readonly categorystat120?: number;
  /**
  * counter app category stat 121
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat121 DataThunderRuleSetTagStats#categorystat121}
  */
  readonly categorystat121?: number;
  /**
  * counter app category stat 122
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat122 DataThunderRuleSetTagStats#categorystat122}
  */
  readonly categorystat122?: number;
  /**
  * counter app category stat 123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat123 DataThunderRuleSetTagStats#categorystat123}
  */
  readonly categorystat123?: number;
  /**
  * counter app category stat 124
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat124 DataThunderRuleSetTagStats#categorystat124}
  */
  readonly categorystat124?: number;
  /**
  * counter app category stat 125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat125 DataThunderRuleSetTagStats#categorystat125}
  */
  readonly categorystat125?: number;
  /**
  * counter app category stat 126
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat126 DataThunderRuleSetTagStats#categorystat126}
  */
  readonly categorystat126?: number;
  /**
  * counter app category stat 127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat127 DataThunderRuleSetTagStats#categorystat127}
  */
  readonly categorystat127?: number;
  /**
  * counter app category stat 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat128 DataThunderRuleSetTagStats#categorystat128}
  */
  readonly categorystat128?: number;
  /**
  * counter app category stat 129
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat129 DataThunderRuleSetTagStats#categorystat129}
  */
  readonly categorystat129?: number;
  /**
  * counter app category stat 13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat13 DataThunderRuleSetTagStats#categorystat13}
  */
  readonly categorystat13?: number;
  /**
  * counter app category stat 130
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat130 DataThunderRuleSetTagStats#categorystat130}
  */
  readonly categorystat130?: number;
  /**
  * counter app category stat 131
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat131 DataThunderRuleSetTagStats#categorystat131}
  */
  readonly categorystat131?: number;
  /**
  * counter app category stat 132
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat132 DataThunderRuleSetTagStats#categorystat132}
  */
  readonly categorystat132?: number;
  /**
  * counter app category stat 133
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat133 DataThunderRuleSetTagStats#categorystat133}
  */
  readonly categorystat133?: number;
  /**
  * counter app category stat 134
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat134 DataThunderRuleSetTagStats#categorystat134}
  */
  readonly categorystat134?: number;
  /**
  * counter app category stat 135
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat135 DataThunderRuleSetTagStats#categorystat135}
  */
  readonly categorystat135?: number;
  /**
  * counter app category stat 136
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat136 DataThunderRuleSetTagStats#categorystat136}
  */
  readonly categorystat136?: number;
  /**
  * counter app category stat 137
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat137 DataThunderRuleSetTagStats#categorystat137}
  */
  readonly categorystat137?: number;
  /**
  * counter app category stat 138
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat138 DataThunderRuleSetTagStats#categorystat138}
  */
  readonly categorystat138?: number;
  /**
  * counter app category stat 139
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat139 DataThunderRuleSetTagStats#categorystat139}
  */
  readonly categorystat139?: number;
  /**
  * counter app category stat 14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat14 DataThunderRuleSetTagStats#categorystat14}
  */
  readonly categorystat14?: number;
  /**
  * counter app category stat 140
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat140 DataThunderRuleSetTagStats#categorystat140}
  */
  readonly categorystat140?: number;
  /**
  * counter app category stat 141
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat141 DataThunderRuleSetTagStats#categorystat141}
  */
  readonly categorystat141?: number;
  /**
  * counter app category stat 142
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat142 DataThunderRuleSetTagStats#categorystat142}
  */
  readonly categorystat142?: number;
  /**
  * counter app category stat 143
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat143 DataThunderRuleSetTagStats#categorystat143}
  */
  readonly categorystat143?: number;
  /**
  * counter app category stat 144
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat144 DataThunderRuleSetTagStats#categorystat144}
  */
  readonly categorystat144?: number;
  /**
  * counter app category stat 145
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat145 DataThunderRuleSetTagStats#categorystat145}
  */
  readonly categorystat145?: number;
  /**
  * counter app category stat 146
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat146 DataThunderRuleSetTagStats#categorystat146}
  */
  readonly categorystat146?: number;
  /**
  * counter app category stat 147
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat147 DataThunderRuleSetTagStats#categorystat147}
  */
  readonly categorystat147?: number;
  /**
  * counter app category stat 148
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat148 DataThunderRuleSetTagStats#categorystat148}
  */
  readonly categorystat148?: number;
  /**
  * counter app category stat 149
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat149 DataThunderRuleSetTagStats#categorystat149}
  */
  readonly categorystat149?: number;
  /**
  * counter app category stat 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat15 DataThunderRuleSetTagStats#categorystat15}
  */
  readonly categorystat15?: number;
  /**
  * counter app category stat 150
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat150 DataThunderRuleSetTagStats#categorystat150}
  */
  readonly categorystat150?: number;
  /**
  * counter app category stat 151
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat151 DataThunderRuleSetTagStats#categorystat151}
  */
  readonly categorystat151?: number;
  /**
  * counter app category stat 152
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat152 DataThunderRuleSetTagStats#categorystat152}
  */
  readonly categorystat152?: number;
  /**
  * counter app category stat 153
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat153 DataThunderRuleSetTagStats#categorystat153}
  */
  readonly categorystat153?: number;
  /**
  * counter app category stat 154
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat154 DataThunderRuleSetTagStats#categorystat154}
  */
  readonly categorystat154?: number;
  /**
  * counter app category stat 155
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat155 DataThunderRuleSetTagStats#categorystat155}
  */
  readonly categorystat155?: number;
  /**
  * counter app category stat 156
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat156 DataThunderRuleSetTagStats#categorystat156}
  */
  readonly categorystat156?: number;
  /**
  * counter app category stat 157
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat157 DataThunderRuleSetTagStats#categorystat157}
  */
  readonly categorystat157?: number;
  /**
  * counter app category stat 158
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat158 DataThunderRuleSetTagStats#categorystat158}
  */
  readonly categorystat158?: number;
  /**
  * counter app category stat 159
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat159 DataThunderRuleSetTagStats#categorystat159}
  */
  readonly categorystat159?: number;
  /**
  * counter app category stat 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat16 DataThunderRuleSetTagStats#categorystat16}
  */
  readonly categorystat16?: number;
  /**
  * counter app category stat 160
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat160 DataThunderRuleSetTagStats#categorystat160}
  */
  readonly categorystat160?: number;
  /**
  * counter app category stat 161
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat161 DataThunderRuleSetTagStats#categorystat161}
  */
  readonly categorystat161?: number;
  /**
  * counter app category stat 162
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat162 DataThunderRuleSetTagStats#categorystat162}
  */
  readonly categorystat162?: number;
  /**
  * counter app category stat 163
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat163 DataThunderRuleSetTagStats#categorystat163}
  */
  readonly categorystat163?: number;
  /**
  * counter app category stat 164
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat164 DataThunderRuleSetTagStats#categorystat164}
  */
  readonly categorystat164?: number;
  /**
  * counter app category stat 165
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat165 DataThunderRuleSetTagStats#categorystat165}
  */
  readonly categorystat165?: number;
  /**
  * counter app category stat 166
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat166 DataThunderRuleSetTagStats#categorystat166}
  */
  readonly categorystat166?: number;
  /**
  * counter app category stat 167
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat167 DataThunderRuleSetTagStats#categorystat167}
  */
  readonly categorystat167?: number;
  /**
  * counter app category stat 168
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat168 DataThunderRuleSetTagStats#categorystat168}
  */
  readonly categorystat168?: number;
  /**
  * counter app category stat 169
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat169 DataThunderRuleSetTagStats#categorystat169}
  */
  readonly categorystat169?: number;
  /**
  * counter app category stat 17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat17 DataThunderRuleSetTagStats#categorystat17}
  */
  readonly categorystat17?: number;
  /**
  * counter app category stat 170
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat170 DataThunderRuleSetTagStats#categorystat170}
  */
  readonly categorystat170?: number;
  /**
  * counter app category stat 171
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat171 DataThunderRuleSetTagStats#categorystat171}
  */
  readonly categorystat171?: number;
  /**
  * counter app category stat 172
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat172 DataThunderRuleSetTagStats#categorystat172}
  */
  readonly categorystat172?: number;
  /**
  * counter app category stat 173
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat173 DataThunderRuleSetTagStats#categorystat173}
  */
  readonly categorystat173?: number;
  /**
  * counter app category stat 174
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat174 DataThunderRuleSetTagStats#categorystat174}
  */
  readonly categorystat174?: number;
  /**
  * counter app category stat 175
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat175 DataThunderRuleSetTagStats#categorystat175}
  */
  readonly categorystat175?: number;
  /**
  * counter app category stat 176
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat176 DataThunderRuleSetTagStats#categorystat176}
  */
  readonly categorystat176?: number;
  /**
  * counter app category stat 177
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat177 DataThunderRuleSetTagStats#categorystat177}
  */
  readonly categorystat177?: number;
  /**
  * counter app category stat 178
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat178 DataThunderRuleSetTagStats#categorystat178}
  */
  readonly categorystat178?: number;
  /**
  * counter app category stat 179
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat179 DataThunderRuleSetTagStats#categorystat179}
  */
  readonly categorystat179?: number;
  /**
  * counter app category stat 18
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat18 DataThunderRuleSetTagStats#categorystat18}
  */
  readonly categorystat18?: number;
  /**
  * counter app category stat 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat180 DataThunderRuleSetTagStats#categorystat180}
  */
  readonly categorystat180?: number;
  /**
  * counter app category stat 181
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat181 DataThunderRuleSetTagStats#categorystat181}
  */
  readonly categorystat181?: number;
  /**
  * counter app category stat 182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat182 DataThunderRuleSetTagStats#categorystat182}
  */
  readonly categorystat182?: number;
  /**
  * counter app category stat 183
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat183 DataThunderRuleSetTagStats#categorystat183}
  */
  readonly categorystat183?: number;
  /**
  * counter app category stat 184
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat184 DataThunderRuleSetTagStats#categorystat184}
  */
  readonly categorystat184?: number;
  /**
  * counter app category stat 185
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat185 DataThunderRuleSetTagStats#categorystat185}
  */
  readonly categorystat185?: number;
  /**
  * counter app category stat 186
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat186 DataThunderRuleSetTagStats#categorystat186}
  */
  readonly categorystat186?: number;
  /**
  * counter app category stat 187
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat187 DataThunderRuleSetTagStats#categorystat187}
  */
  readonly categorystat187?: number;
  /**
  * counter app category stat 188
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat188 DataThunderRuleSetTagStats#categorystat188}
  */
  readonly categorystat188?: number;
  /**
  * counter app category stat 189
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat189 DataThunderRuleSetTagStats#categorystat189}
  */
  readonly categorystat189?: number;
  /**
  * counter app category stat 19
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat19 DataThunderRuleSetTagStats#categorystat19}
  */
  readonly categorystat19?: number;
  /**
  * counter app category stat 190
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat190 DataThunderRuleSetTagStats#categorystat190}
  */
  readonly categorystat190?: number;
  /**
  * counter app category stat 191
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat191 DataThunderRuleSetTagStats#categorystat191}
  */
  readonly categorystat191?: number;
  /**
  * counter app category stat 192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat192 DataThunderRuleSetTagStats#categorystat192}
  */
  readonly categorystat192?: number;
  /**
  * counter app category stat 193
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat193 DataThunderRuleSetTagStats#categorystat193}
  */
  readonly categorystat193?: number;
  /**
  * counter app category stat 194
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat194 DataThunderRuleSetTagStats#categorystat194}
  */
  readonly categorystat194?: number;
  /**
  * counter app category stat 195
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat195 DataThunderRuleSetTagStats#categorystat195}
  */
  readonly categorystat195?: number;
  /**
  * counter app category stat 196
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat196 DataThunderRuleSetTagStats#categorystat196}
  */
  readonly categorystat196?: number;
  /**
  * counter app category stat 197
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat197 DataThunderRuleSetTagStats#categorystat197}
  */
  readonly categorystat197?: number;
  /**
  * counter app category stat 198
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat198 DataThunderRuleSetTagStats#categorystat198}
  */
  readonly categorystat198?: number;
  /**
  * counter app category stat 199
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat199 DataThunderRuleSetTagStats#categorystat199}
  */
  readonly categorystat199?: number;
  /**
  * counter app category stat 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat2 DataThunderRuleSetTagStats#categorystat2}
  */
  readonly categorystat2?: number;
  /**
  * counter app category stat 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat20 DataThunderRuleSetTagStats#categorystat20}
  */
  readonly categorystat20?: number;
  /**
  * counter app category stat 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat200 DataThunderRuleSetTagStats#categorystat200}
  */
  readonly categorystat200?: number;
  /**
  * counter app category stat 201
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat201 DataThunderRuleSetTagStats#categorystat201}
  */
  readonly categorystat201?: number;
  /**
  * counter app category stat 202
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat202 DataThunderRuleSetTagStats#categorystat202}
  */
  readonly categorystat202?: number;
  /**
  * counter app category stat 203
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat203 DataThunderRuleSetTagStats#categorystat203}
  */
  readonly categorystat203?: number;
  /**
  * counter app category stat 204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat204 DataThunderRuleSetTagStats#categorystat204}
  */
  readonly categorystat204?: number;
  /**
  * counter app category stat 205
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat205 DataThunderRuleSetTagStats#categorystat205}
  */
  readonly categorystat205?: number;
  /**
  * counter app category stat 206
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat206 DataThunderRuleSetTagStats#categorystat206}
  */
  readonly categorystat206?: number;
  /**
  * counter app category stat 207
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat207 DataThunderRuleSetTagStats#categorystat207}
  */
  readonly categorystat207?: number;
  /**
  * counter app category stat 208
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat208 DataThunderRuleSetTagStats#categorystat208}
  */
  readonly categorystat208?: number;
  /**
  * counter app category stat 209
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat209 DataThunderRuleSetTagStats#categorystat209}
  */
  readonly categorystat209?: number;
  /**
  * counter app category stat 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat21 DataThunderRuleSetTagStats#categorystat21}
  */
  readonly categorystat21?: number;
  /**
  * counter app category stat 210
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat210 DataThunderRuleSetTagStats#categorystat210}
  */
  readonly categorystat210?: number;
  /**
  * counter app category stat 211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat211 DataThunderRuleSetTagStats#categorystat211}
  */
  readonly categorystat211?: number;
  /**
  * counter app category stat 212
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat212 DataThunderRuleSetTagStats#categorystat212}
  */
  readonly categorystat212?: number;
  /**
  * counter app category stat 213
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat213 DataThunderRuleSetTagStats#categorystat213}
  */
  readonly categorystat213?: number;
  /**
  * counter app category stat 214
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat214 DataThunderRuleSetTagStats#categorystat214}
  */
  readonly categorystat214?: number;
  /**
  * counter app category stat 215
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat215 DataThunderRuleSetTagStats#categorystat215}
  */
  readonly categorystat215?: number;
  /**
  * counter app category stat 216
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat216 DataThunderRuleSetTagStats#categorystat216}
  */
  readonly categorystat216?: number;
  /**
  * counter app category stat 217
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat217 DataThunderRuleSetTagStats#categorystat217}
  */
  readonly categorystat217?: number;
  /**
  * counter app category stat 218
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat218 DataThunderRuleSetTagStats#categorystat218}
  */
  readonly categorystat218?: number;
  /**
  * counter app category stat 219
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat219 DataThunderRuleSetTagStats#categorystat219}
  */
  readonly categorystat219?: number;
  /**
  * counter app category stat 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat22 DataThunderRuleSetTagStats#categorystat22}
  */
  readonly categorystat22?: number;
  /**
  * counter app category stat 220
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat220 DataThunderRuleSetTagStats#categorystat220}
  */
  readonly categorystat220?: number;
  /**
  * counter app category stat 221
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat221 DataThunderRuleSetTagStats#categorystat221}
  */
  readonly categorystat221?: number;
  /**
  * counter app category stat 222
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat222 DataThunderRuleSetTagStats#categorystat222}
  */
  readonly categorystat222?: number;
  /**
  * counter app category stat 223
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat223 DataThunderRuleSetTagStats#categorystat223}
  */
  readonly categorystat223?: number;
  /**
  * counter app category stat 224
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat224 DataThunderRuleSetTagStats#categorystat224}
  */
  readonly categorystat224?: number;
  /**
  * counter app category stat 225
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat225 DataThunderRuleSetTagStats#categorystat225}
  */
  readonly categorystat225?: number;
  /**
  * counter app category stat 226
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat226 DataThunderRuleSetTagStats#categorystat226}
  */
  readonly categorystat226?: number;
  /**
  * counter app category stat 227
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat227 DataThunderRuleSetTagStats#categorystat227}
  */
  readonly categorystat227?: number;
  /**
  * counter app category stat 228
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat228 DataThunderRuleSetTagStats#categorystat228}
  */
  readonly categorystat228?: number;
  /**
  * counter app category stat 229
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat229 DataThunderRuleSetTagStats#categorystat229}
  */
  readonly categorystat229?: number;
  /**
  * counter app category stat 23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat23 DataThunderRuleSetTagStats#categorystat23}
  */
  readonly categorystat23?: number;
  /**
  * counter app category stat 230
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat230 DataThunderRuleSetTagStats#categorystat230}
  */
  readonly categorystat230?: number;
  /**
  * counter app category stat 231
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat231 DataThunderRuleSetTagStats#categorystat231}
  */
  readonly categorystat231?: number;
  /**
  * counter app category stat 232
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat232 DataThunderRuleSetTagStats#categorystat232}
  */
  readonly categorystat232?: number;
  /**
  * counter app category stat 233
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat233 DataThunderRuleSetTagStats#categorystat233}
  */
  readonly categorystat233?: number;
  /**
  * counter app category stat 234
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat234 DataThunderRuleSetTagStats#categorystat234}
  */
  readonly categorystat234?: number;
  /**
  * counter app category stat 235
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat235 DataThunderRuleSetTagStats#categorystat235}
  */
  readonly categorystat235?: number;
  /**
  * counter app category stat 236
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat236 DataThunderRuleSetTagStats#categorystat236}
  */
  readonly categorystat236?: number;
  /**
  * counter app category stat 237
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat237 DataThunderRuleSetTagStats#categorystat237}
  */
  readonly categorystat237?: number;
  /**
  * counter app category stat 238
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat238 DataThunderRuleSetTagStats#categorystat238}
  */
  readonly categorystat238?: number;
  /**
  * counter app category stat 239
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat239 DataThunderRuleSetTagStats#categorystat239}
  */
  readonly categorystat239?: number;
  /**
  * counter app category stat 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat24 DataThunderRuleSetTagStats#categorystat24}
  */
  readonly categorystat24?: number;
  /**
  * counter app category stat 240
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat240 DataThunderRuleSetTagStats#categorystat240}
  */
  readonly categorystat240?: number;
  /**
  * counter app category stat 241
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat241 DataThunderRuleSetTagStats#categorystat241}
  */
  readonly categorystat241?: number;
  /**
  * counter app category stat 242
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat242 DataThunderRuleSetTagStats#categorystat242}
  */
  readonly categorystat242?: number;
  /**
  * counter app category stat 243
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat243 DataThunderRuleSetTagStats#categorystat243}
  */
  readonly categorystat243?: number;
  /**
  * counter app category stat 244
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat244 DataThunderRuleSetTagStats#categorystat244}
  */
  readonly categorystat244?: number;
  /**
  * counter app category stat 245
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat245 DataThunderRuleSetTagStats#categorystat245}
  */
  readonly categorystat245?: number;
  /**
  * counter app category stat 246
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat246 DataThunderRuleSetTagStats#categorystat246}
  */
  readonly categorystat246?: number;
  /**
  * counter app category stat 247
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat247 DataThunderRuleSetTagStats#categorystat247}
  */
  readonly categorystat247?: number;
  /**
  * counter app category stat 248
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat248 DataThunderRuleSetTagStats#categorystat248}
  */
  readonly categorystat248?: number;
  /**
  * counter app category stat 249
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat249 DataThunderRuleSetTagStats#categorystat249}
  */
  readonly categorystat249?: number;
  /**
  * counter app category stat 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat25 DataThunderRuleSetTagStats#categorystat25}
  */
  readonly categorystat25?: number;
  /**
  * counter app category stat 250
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat250 DataThunderRuleSetTagStats#categorystat250}
  */
  readonly categorystat250?: number;
  /**
  * counter app category stat 251
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat251 DataThunderRuleSetTagStats#categorystat251}
  */
  readonly categorystat251?: number;
  /**
  * counter app category stat 252
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat252 DataThunderRuleSetTagStats#categorystat252}
  */
  readonly categorystat252?: number;
  /**
  * counter app category stat 253
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat253 DataThunderRuleSetTagStats#categorystat253}
  */
  readonly categorystat253?: number;
  /**
  * counter app category stat 254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat254 DataThunderRuleSetTagStats#categorystat254}
  */
  readonly categorystat254?: number;
  /**
  * counter app category stat 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat255 DataThunderRuleSetTagStats#categorystat255}
  */
  readonly categorystat255?: number;
  /**
  * counter app category stat 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat256 DataThunderRuleSetTagStats#categorystat256}
  */
  readonly categorystat256?: number;
  /**
  * counter app category stat 26
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat26 DataThunderRuleSetTagStats#categorystat26}
  */
  readonly categorystat26?: number;
  /**
  * counter app category stat 27
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat27 DataThunderRuleSetTagStats#categorystat27}
  */
  readonly categorystat27?: number;
  /**
  * counter app category stat 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat28 DataThunderRuleSetTagStats#categorystat28}
  */
  readonly categorystat28?: number;
  /**
  * counter app category stat 29
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat29 DataThunderRuleSetTagStats#categorystat29}
  */
  readonly categorystat29?: number;
  /**
  * counter app category stat 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat3 DataThunderRuleSetTagStats#categorystat3}
  */
  readonly categorystat3?: number;
  /**
  * counter app category stat 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat30 DataThunderRuleSetTagStats#categorystat30}
  */
  readonly categorystat30?: number;
  /**
  * counter app category stat 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat31 DataThunderRuleSetTagStats#categorystat31}
  */
  readonly categorystat31?: number;
  /**
  * counter app category stat 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat32 DataThunderRuleSetTagStats#categorystat32}
  */
  readonly categorystat32?: number;
  /**
  * counter app category stat 33
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat33 DataThunderRuleSetTagStats#categorystat33}
  */
  readonly categorystat33?: number;
  /**
  * counter app category stat 34
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat34 DataThunderRuleSetTagStats#categorystat34}
  */
  readonly categorystat34?: number;
  /**
  * counter app category stat 35
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat35 DataThunderRuleSetTagStats#categorystat35}
  */
  readonly categorystat35?: number;
  /**
  * counter app category stat 36
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat36 DataThunderRuleSetTagStats#categorystat36}
  */
  readonly categorystat36?: number;
  /**
  * counter app category stat 37
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat37 DataThunderRuleSetTagStats#categorystat37}
  */
  readonly categorystat37?: number;
  /**
  * counter app category stat 38
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat38 DataThunderRuleSetTagStats#categorystat38}
  */
  readonly categorystat38?: number;
  /**
  * counter app category stat 39
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat39 DataThunderRuleSetTagStats#categorystat39}
  */
  readonly categorystat39?: number;
  /**
  * counter app category stat 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat4 DataThunderRuleSetTagStats#categorystat4}
  */
  readonly categorystat4?: number;
  /**
  * counter app category stat 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat40 DataThunderRuleSetTagStats#categorystat40}
  */
  readonly categorystat40?: number;
  /**
  * counter app category stat 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat41 DataThunderRuleSetTagStats#categorystat41}
  */
  readonly categorystat41?: number;
  /**
  * counter app category stat 42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat42 DataThunderRuleSetTagStats#categorystat42}
  */
  readonly categorystat42?: number;
  /**
  * counter app category stat 43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat43 DataThunderRuleSetTagStats#categorystat43}
  */
  readonly categorystat43?: number;
  /**
  * counter app category stat 44
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat44 DataThunderRuleSetTagStats#categorystat44}
  */
  readonly categorystat44?: number;
  /**
  * counter app category stat 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat45 DataThunderRuleSetTagStats#categorystat45}
  */
  readonly categorystat45?: number;
  /**
  * counter app category stat 46
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat46 DataThunderRuleSetTagStats#categorystat46}
  */
  readonly categorystat46?: number;
  /**
  * counter app category stat 47
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat47 DataThunderRuleSetTagStats#categorystat47}
  */
  readonly categorystat47?: number;
  /**
  * counter app category stat 48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat48 DataThunderRuleSetTagStats#categorystat48}
  */
  readonly categorystat48?: number;
  /**
  * counter app category stat 49
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat49 DataThunderRuleSetTagStats#categorystat49}
  */
  readonly categorystat49?: number;
  /**
  * counter app category stat 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat5 DataThunderRuleSetTagStats#categorystat5}
  */
  readonly categorystat5?: number;
  /**
  * counter app category stat 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat50 DataThunderRuleSetTagStats#categorystat50}
  */
  readonly categorystat50?: number;
  /**
  * counter app category stat 51
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat51 DataThunderRuleSetTagStats#categorystat51}
  */
  readonly categorystat51?: number;
  /**
  * counter app category stat 52
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat52 DataThunderRuleSetTagStats#categorystat52}
  */
  readonly categorystat52?: number;
  /**
  * counter app category stat 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat53 DataThunderRuleSetTagStats#categorystat53}
  */
  readonly categorystat53?: number;
  /**
  * counter app category stat 54
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat54 DataThunderRuleSetTagStats#categorystat54}
  */
  readonly categorystat54?: number;
  /**
  * counter app category stat 55
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat55 DataThunderRuleSetTagStats#categorystat55}
  */
  readonly categorystat55?: number;
  /**
  * counter app category stat 56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat56 DataThunderRuleSetTagStats#categorystat56}
  */
  readonly categorystat56?: number;
  /**
  * counter app category stat 57
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat57 DataThunderRuleSetTagStats#categorystat57}
  */
  readonly categorystat57?: number;
  /**
  * counter app category stat 58
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat58 DataThunderRuleSetTagStats#categorystat58}
  */
  readonly categorystat58?: number;
  /**
  * counter app category stat 59
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat59 DataThunderRuleSetTagStats#categorystat59}
  */
  readonly categorystat59?: number;
  /**
  * counter app category stat 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat6 DataThunderRuleSetTagStats#categorystat6}
  */
  readonly categorystat6?: number;
  /**
  * counter app category stat 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat60 DataThunderRuleSetTagStats#categorystat60}
  */
  readonly categorystat60?: number;
  /**
  * counter app category stat 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat61 DataThunderRuleSetTagStats#categorystat61}
  */
  readonly categorystat61?: number;
  /**
  * counter app category stat 62
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat62 DataThunderRuleSetTagStats#categorystat62}
  */
  readonly categorystat62?: number;
  /**
  * counter app category stat 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat63 DataThunderRuleSetTagStats#categorystat63}
  */
  readonly categorystat63?: number;
  /**
  * counter app category stat 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat64 DataThunderRuleSetTagStats#categorystat64}
  */
  readonly categorystat64?: number;
  /**
  * counter app category stat 65
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat65 DataThunderRuleSetTagStats#categorystat65}
  */
  readonly categorystat65?: number;
  /**
  * counter app category stat 66
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat66 DataThunderRuleSetTagStats#categorystat66}
  */
  readonly categorystat66?: number;
  /**
  * counter app category stat 67
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat67 DataThunderRuleSetTagStats#categorystat67}
  */
  readonly categorystat67?: number;
  /**
  * counter app category stat 68
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat68 DataThunderRuleSetTagStats#categorystat68}
  */
  readonly categorystat68?: number;
  /**
  * counter app category stat 69
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat69 DataThunderRuleSetTagStats#categorystat69}
  */
  readonly categorystat69?: number;
  /**
  * counter app category stat 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat7 DataThunderRuleSetTagStats#categorystat7}
  */
  readonly categorystat7?: number;
  /**
  * counter app category stat 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat70 DataThunderRuleSetTagStats#categorystat70}
  */
  readonly categorystat70?: number;
  /**
  * counter app category stat 71
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat71 DataThunderRuleSetTagStats#categorystat71}
  */
  readonly categorystat71?: number;
  /**
  * counter app category stat 72
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat72 DataThunderRuleSetTagStats#categorystat72}
  */
  readonly categorystat72?: number;
  /**
  * counter app category stat 73
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat73 DataThunderRuleSetTagStats#categorystat73}
  */
  readonly categorystat73?: number;
  /**
  * counter app category stat 74
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat74 DataThunderRuleSetTagStats#categorystat74}
  */
  readonly categorystat74?: number;
  /**
  * counter app category stat 75
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat75 DataThunderRuleSetTagStats#categorystat75}
  */
  readonly categorystat75?: number;
  /**
  * counter app category stat 76
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat76 DataThunderRuleSetTagStats#categorystat76}
  */
  readonly categorystat76?: number;
  /**
  * counter app category stat 77
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat77 DataThunderRuleSetTagStats#categorystat77}
  */
  readonly categorystat77?: number;
  /**
  * counter app category stat 78
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat78 DataThunderRuleSetTagStats#categorystat78}
  */
  readonly categorystat78?: number;
  /**
  * counter app category stat 79
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat79 DataThunderRuleSetTagStats#categorystat79}
  */
  readonly categorystat79?: number;
  /**
  * counter app category stat 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat8 DataThunderRuleSetTagStats#categorystat8}
  */
  readonly categorystat8?: number;
  /**
  * counter app category stat 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat80 DataThunderRuleSetTagStats#categorystat80}
  */
  readonly categorystat80?: number;
  /**
  * counter app category stat 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat81 DataThunderRuleSetTagStats#categorystat81}
  */
  readonly categorystat81?: number;
  /**
  * counter app category stat 82
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat82 DataThunderRuleSetTagStats#categorystat82}
  */
  readonly categorystat82?: number;
  /**
  * counter app category stat 83
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat83 DataThunderRuleSetTagStats#categorystat83}
  */
  readonly categorystat83?: number;
  /**
  * counter app category stat 84
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat84 DataThunderRuleSetTagStats#categorystat84}
  */
  readonly categorystat84?: number;
  /**
  * counter app category stat 85
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat85 DataThunderRuleSetTagStats#categorystat85}
  */
  readonly categorystat85?: number;
  /**
  * counter app category stat 86
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat86 DataThunderRuleSetTagStats#categorystat86}
  */
  readonly categorystat86?: number;
  /**
  * counter app category stat 87
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat87 DataThunderRuleSetTagStats#categorystat87}
  */
  readonly categorystat87?: number;
  /**
  * counter app category stat 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat88 DataThunderRuleSetTagStats#categorystat88}
  */
  readonly categorystat88?: number;
  /**
  * counter app category stat 89
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat89 DataThunderRuleSetTagStats#categorystat89}
  */
  readonly categorystat89?: number;
  /**
  * counter app category stat 9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat9 DataThunderRuleSetTagStats#categorystat9}
  */
  readonly categorystat9?: number;
  /**
  * counter app category stat 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat90 DataThunderRuleSetTagStats#categorystat90}
  */
  readonly categorystat90?: number;
  /**
  * counter app category stat 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat91 DataThunderRuleSetTagStats#categorystat91}
  */
  readonly categorystat91?: number;
  /**
  * counter app category stat 92
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat92 DataThunderRuleSetTagStats#categorystat92}
  */
  readonly categorystat92?: number;
  /**
  * counter app category stat 93
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat93 DataThunderRuleSetTagStats#categorystat93}
  */
  readonly categorystat93?: number;
  /**
  * counter app category stat 94
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat94 DataThunderRuleSetTagStats#categorystat94}
  */
  readonly categorystat94?: number;
  /**
  * counter app category stat 95
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat95 DataThunderRuleSetTagStats#categorystat95}
  */
  readonly categorystat95?: number;
  /**
  * counter app category stat 96
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat96 DataThunderRuleSetTagStats#categorystat96}
  */
  readonly categorystat96?: number;
  /**
  * counter app category stat 97
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat97 DataThunderRuleSetTagStats#categorystat97}
  */
  readonly categorystat97?: number;
  /**
  * counter app category stat 98
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat98 DataThunderRuleSetTagStats#categorystat98}
  */
  readonly categorystat98?: number;
  /**
  * counter app category stat 99
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#categorystat99 DataThunderRuleSetTagStats#categorystat99}
  */
  readonly categorystat99?: number;
}

export function dataThunderRuleSetTagStatsStatsToTerraform(struct?: DataThunderRuleSetTagStatsStatsOutputReference | DataThunderRuleSetTagStatsStats): any {
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


export function dataThunderRuleSetTagStatsStatsToHclTerraform(struct?: DataThunderRuleSetTagStatsStatsOutputReference | DataThunderRuleSetTagStatsStats): any {
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

export class DataThunderRuleSetTagStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetTagStatsStats | undefined {
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

  public set internalValue(value: DataThunderRuleSetTagStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats thunder_rule_set_tag_stats}
*/
export class DataThunderRuleSetTagStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_tag_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetTagStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetTagStats to import
  * @param importFromId The id of the existing DataThunderRuleSetTagStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetTagStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_tag_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_tag_stats thunder_rule_set_tag_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetTagStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetTagStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_tag_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ruleSetName = config.ruleSetName;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderRuleSetTagStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderRuleSetTagStatsStats) {
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
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      stats: dataThunderRuleSetTagStatsStatsToTerraform(this._stats.internalValue),
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
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderRuleSetTagStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetTagStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
