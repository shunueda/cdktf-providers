// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNgWafStatsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#id DataThunderNgWafStatsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ng-waf name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#name DataThunderNgWafStatsStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#stats DataThunderNgWafStatsStats#stats}
  */
  readonly stats?: DataThunderNgWafStatsStatsStats;
}
export interface DataThunderNgWafStatsStatsStats {
  /**
  * Abnormal Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#abnormalpath DataThunderNgWafStatsStats#abnormalpath}
  */
  readonly abnormalpath?: number;
  /**
  * AWS SSRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#aws_ssrf DataThunderNgWafStatsStats#aws_ssrf}
  */
  readonly awsSsrf?: number;
  /**
  * Backdoor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#backdoor DataThunderNgWafStatsStats#backdoor}
  */
  readonly backdoor?: number;
  /**
  * Bad Hop Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#bhh DataThunderNgWafStatsStats#bhh}
  */
  readonly bhh?: number;
  /**
  * Blocked Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#block DataThunderNgWafStatsStats#block}
  */
  readonly block?: number;
  /**
  * Command Execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#cmdexe DataThunderNgWafStatsStats#cmdexe}
  */
  readonly cmdexe?: number;
  /**
  * Code Injection PHP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#codei DataThunderNgWafStatsStats#codei}
  */
  readonly codei?: number;
  /**
  * Custom signal 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom1 DataThunderNgWafStatsStats#custom1}
  */
  readonly custom1?: number;
  /**
  * Custom signal 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom10 DataThunderNgWafStatsStats#custom10}
  */
  readonly custom10?: number;
  /**
  * Custom signal 11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom11 DataThunderNgWafStatsStats#custom11}
  */
  readonly custom11?: number;
  /**
  * Custom signal 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom12 DataThunderNgWafStatsStats#custom12}
  */
  readonly custom12?: number;
  /**
  * Custom signal 13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom13 DataThunderNgWafStatsStats#custom13}
  */
  readonly custom13?: number;
  /**
  * Custom signal 14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom14 DataThunderNgWafStatsStats#custom14}
  */
  readonly custom14?: number;
  /**
  * Custom signal 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom15 DataThunderNgWafStatsStats#custom15}
  */
  readonly custom15?: number;
  /**
  * Custom signal 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom16 DataThunderNgWafStatsStats#custom16}
  */
  readonly custom16?: number;
  /**
  * Custom signal 17
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom17 DataThunderNgWafStatsStats#custom17}
  */
  readonly custom17?: number;
  /**
  * Custom signal 18
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom18 DataThunderNgWafStatsStats#custom18}
  */
  readonly custom18?: number;
  /**
  * Custom signal 19
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom19 DataThunderNgWafStatsStats#custom19}
  */
  readonly custom19?: number;
  /**
  * Custom signal 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom2 DataThunderNgWafStatsStats#custom2}
  */
  readonly custom2?: number;
  /**
  * Custom signal 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom20 DataThunderNgWafStatsStats#custom20}
  */
  readonly custom20?: number;
  /**
  * Custom signal 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom21 DataThunderNgWafStatsStats#custom21}
  */
  readonly custom21?: number;
  /**
  * Custom signal 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom22 DataThunderNgWafStatsStats#custom22}
  */
  readonly custom22?: number;
  /**
  * Custom signal 23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom23 DataThunderNgWafStatsStats#custom23}
  */
  readonly custom23?: number;
  /**
  * Custom signal 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom24 DataThunderNgWafStatsStats#custom24}
  */
  readonly custom24?: number;
  /**
  * Custom signal 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom25 DataThunderNgWafStatsStats#custom25}
  */
  readonly custom25?: number;
  /**
  * Custom signal 26
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom26 DataThunderNgWafStatsStats#custom26}
  */
  readonly custom26?: number;
  /**
  * Custom signal 27
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom27 DataThunderNgWafStatsStats#custom27}
  */
  readonly custom27?: number;
  /**
  * Custom signal 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom28 DataThunderNgWafStatsStats#custom28}
  */
  readonly custom28?: number;
  /**
  * Custom signal 29
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom29 DataThunderNgWafStatsStats#custom29}
  */
  readonly custom29?: number;
  /**
  * Custom signal 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom3 DataThunderNgWafStatsStats#custom3}
  */
  readonly custom3?: number;
  /**
  * Custom signal 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom30 DataThunderNgWafStatsStats#custom30}
  */
  readonly custom30?: number;
  /**
  * Custom signal 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom31 DataThunderNgWafStatsStats#custom31}
  */
  readonly custom31?: number;
  /**
  * Custom signal 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom32 DataThunderNgWafStatsStats#custom32}
  */
  readonly custom32?: number;
  /**
  * Custom signal 33
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom33 DataThunderNgWafStatsStats#custom33}
  */
  readonly custom33?: number;
  /**
  * Custom signal 34
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom34 DataThunderNgWafStatsStats#custom34}
  */
  readonly custom34?: number;
  /**
  * Custom signal 35
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom35 DataThunderNgWafStatsStats#custom35}
  */
  readonly custom35?: number;
  /**
  * Custom signal 36
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom36 DataThunderNgWafStatsStats#custom36}
  */
  readonly custom36?: number;
  /**
  * Custom signal 37
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom37 DataThunderNgWafStatsStats#custom37}
  */
  readonly custom37?: number;
  /**
  * Custom signal 38
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom38 DataThunderNgWafStatsStats#custom38}
  */
  readonly custom38?: number;
  /**
  * Custom signal 39
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom39 DataThunderNgWafStatsStats#custom39}
  */
  readonly custom39?: number;
  /**
  * Custom signal 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom4 DataThunderNgWafStatsStats#custom4}
  */
  readonly custom4?: number;
  /**
  * Custom signal 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom40 DataThunderNgWafStatsStats#custom40}
  */
  readonly custom40?: number;
  /**
  * Custom signal 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom41 DataThunderNgWafStatsStats#custom41}
  */
  readonly custom41?: number;
  /**
  * Custom signal 42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom42 DataThunderNgWafStatsStats#custom42}
  */
  readonly custom42?: number;
  /**
  * Custom signal 43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom43 DataThunderNgWafStatsStats#custom43}
  */
  readonly custom43?: number;
  /**
  * Custom signal 44
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom44 DataThunderNgWafStatsStats#custom44}
  */
  readonly custom44?: number;
  /**
  * Custom signal 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom45 DataThunderNgWafStatsStats#custom45}
  */
  readonly custom45?: number;
  /**
  * Custom signal 46
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom46 DataThunderNgWafStatsStats#custom46}
  */
  readonly custom46?: number;
  /**
  * Custom signal 47
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom47 DataThunderNgWafStatsStats#custom47}
  */
  readonly custom47?: number;
  /**
  * Custom signal 48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom48 DataThunderNgWafStatsStats#custom48}
  */
  readonly custom48?: number;
  /**
  * Custom signal 49
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom49 DataThunderNgWafStatsStats#custom49}
  */
  readonly custom49?: number;
  /**
  * Custom signal 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom5 DataThunderNgWafStatsStats#custom5}
  */
  readonly custom5?: number;
  /**
  * Custom signal 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom50 DataThunderNgWafStatsStats#custom50}
  */
  readonly custom50?: number;
  /**
  * Custom signal 51
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom51 DataThunderNgWafStatsStats#custom51}
  */
  readonly custom51?: number;
  /**
  * Custom signal 52
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom52 DataThunderNgWafStatsStats#custom52}
  */
  readonly custom52?: number;
  /**
  * Custom signal 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom53 DataThunderNgWafStatsStats#custom53}
  */
  readonly custom53?: number;
  /**
  * Custom signal 54
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom54 DataThunderNgWafStatsStats#custom54}
  */
  readonly custom54?: number;
  /**
  * Custom signal 55
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom55 DataThunderNgWafStatsStats#custom55}
  */
  readonly custom55?: number;
  /**
  * Custom signal 56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom56 DataThunderNgWafStatsStats#custom56}
  */
  readonly custom56?: number;
  /**
  * Custom signal 57
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom57 DataThunderNgWafStatsStats#custom57}
  */
  readonly custom57?: number;
  /**
  * Custom signal 58
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom58 DataThunderNgWafStatsStats#custom58}
  */
  readonly custom58?: number;
  /**
  * Custom signal 59
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom59 DataThunderNgWafStatsStats#custom59}
  */
  readonly custom59?: number;
  /**
  * Custom signal 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom6 DataThunderNgWafStatsStats#custom6}
  */
  readonly custom6?: number;
  /**
  * Custom signal 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom60 DataThunderNgWafStatsStats#custom60}
  */
  readonly custom60?: number;
  /**
  * Custom signal 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom61 DataThunderNgWafStatsStats#custom61}
  */
  readonly custom61?: number;
  /**
  * Custom signal 62
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom62 DataThunderNgWafStatsStats#custom62}
  */
  readonly custom62?: number;
  /**
  * Custom signal 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom63 DataThunderNgWafStatsStats#custom63}
  */
  readonly custom63?: number;
  /**
  * Custom signal 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom64 DataThunderNgWafStatsStats#custom64}
  */
  readonly custom64?: number;
  /**
  * Custom signal 7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom7 DataThunderNgWafStatsStats#custom7}
  */
  readonly custom7?: number;
  /**
  * Custom signal 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom8 DataThunderNgWafStatsStats#custom8}
  */
  readonly custom8?: number;
  /**
  * Custom signal 9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#custom9 DataThunderNgWafStatsStats#custom9}
  */
  readonly custom9?: number;
  /**
  * Datacenter Traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#datacenter DataThunderNgWafStatsStats#datacenter}
  */
  readonly datacenter?: number;
  /**
  * Double Encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#doubleenc DataThunderNgWafStatsStats#doubleenc}
  */
  readonly doubleenc?: number;
  /**
  * Duplicate Header Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#duplicate_headers DataThunderNgWafStatsStats#duplicate_headers}
  */
  readonly duplicateHeaders?: number;
  /**
  * Error Happened
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#error DataThunderNgWafStatsStats#error}
  */
  readonly error?: number;
  /**
  * Forceful Browsing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#fbrowing DataThunderNgWafStatsStats#fbrowing}
  */
  readonly fbrowing?: number;
  /**
  * GraphQL Max Depth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#graphql_depth DataThunderNgWafStatsStats#graphql_depth}
  */
  readonly graphqlDepth?: number;
  /**
  * GraphQL IDE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#graphql_ide DataThunderNgWafStatsStats#graphql_ide}
  */
  readonly graphqlIde?: number;
  /**
  * GraphQL Introspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#graphql_introspection DataThunderNgWafStatsStats#graphql_introspection}
  */
  readonly graphqlIntrospection?: number;
  /**
  * GRAPHQL-UNUSED-VARIABLES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#graphql_unused_variables DataThunderNgWafStatsStats#graphql_unused_variables}
  */
  readonly graphqlUnusedVariables?: number;
  /**
  * HTTP 403 Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http403 DataThunderNgWafStatsStats#http403}
  */
  readonly http403?: number;
  /**
  * HTTP 404 Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http404 DataThunderNgWafStatsStats#http404}
  */
  readonly http404?: number;
  /**
  * HTTP 429 Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http429 DataThunderNgWafStatsStats#http429}
  */
  readonly http429?: number;
  /**
  * HTTP 4xx Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http4xx DataThunderNgWafStatsStats#http4xx}
  */
  readonly http4Xx?: number;
  /**
  * HTTP 500 Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http500 DataThunderNgWafStatsStats#http500}
  */
  readonly http500?: number;
  /**
  * HTTP 503 Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http503 DataThunderNgWafStatsStats#http503}
  */
  readonly http503?: number;
  /**
  * HTTP 5xx Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#http5xx DataThunderNgWafStatsStats#http5xx}
  */
  readonly http5Xx?: number;
  /**
  * SearchBot Impostor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#impostor DataThunderNgWafStatsStats#impostor}
  */
  readonly impostor?: number;
  /**
  * JSON Encoding Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#json_error DataThunderNgWafStatsStats#json_error}
  */
  readonly jsonError?: number;
  /**
  * Log4J JNDI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#log4j_jndi DataThunderNgWafStatsStats#log4j_jndi}
  */
  readonly log4JJndi?: number;
  /**
  * Malformed Data in the Request Body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#malformed DataThunderNgWafStatsStats#malformed}
  */
  readonly malformed?: number;
  /**
  * Missing Content-Type Request Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#no_ctype DataThunderNgWafStatsStats#no_ctype}
  */
  readonly noCtype?: number;
  /**
  * Invalid Encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#notutf8 DataThunderNgWafStatsStats#notutf8}
  */
  readonly notutf8?: number;
  /**
  * No User Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#noua DataThunderNgWafStatsStats#noua}
  */
  readonly noua?: number;
  /**
  * Null Byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#nullbyte DataThunderNgWafStatsStats#nullbyte}
  */
  readonly nullbyte?: number;
  /**
  * Unknown Attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#other DataThunderNgWafStatsStats#other}
  */
  readonly other?: number;
  /**
  * Private File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#privatefile DataThunderNgWafStatsStats#privatefile}
  */
  readonly privatefile?: number;
  /**
  * Requests Blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_blocked DataThunderNgWafStatsStats#req_blocked}
  */
  readonly reqBlocked?: number;
  /**
  * Requests Bypassed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_bypass DataThunderNgWafStatsStats#req_bypass}
  */
  readonly reqBypass?: number;
  /**
  * Requests Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_forward DataThunderNgWafStatsStats#req_forward}
  */
  readonly reqForward?: number;
  /**
  * Requests Marked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_marked DataThunderNgWafStatsStats#req_marked}
  */
  readonly reqMarked?: number;
  /**
  * Requests Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_received DataThunderNgWafStatsStats#req_received}
  */
  readonly reqReceived?: number;
  /**
  * Requests Redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#req_redirected DataThunderNgWafStatsStats#req_redirected}
  */
  readonly reqRedirected?: number;
  /**
  * HTTP Response Splitting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#respsplit DataThunderNgWafStatsStats#respsplit}
  */
  readonly respsplit?: number;
  /**
  * Malicious IP Traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#sans DataThunderNgWafStatsStats#sans}
  */
  readonly sans?: number;
  /**
  * Scanner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#scanner DataThunderNgWafStatsStats#scanner}
  */
  readonly scanner?: number;
  /**
  * Network Effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#sigsci_ip DataThunderNgWafStatsStats#sigsci_ip}
  */
  readonly sigsciIp?: number;
  /**
  * Site Flagged IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#site_flagged_ip DataThunderNgWafStatsStats#site_flagged_ip}
  */
  readonly siteFlaggedIp?: number;
  /**
  * SQL Injection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#sqli DataThunderNgWafStatsStats#sqli}
  */
  readonly sqli?: number;
  /**
  * Tor Traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#tornode DataThunderNgWafStatsStats#tornode}
  */
  readonly tornode?: number;
  /**
  * Directory Traversal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#traversal DataThunderNgWafStatsStats#traversal}
  */
  readonly traversal?: number;
  /**
  * Attack Tooling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#useragent DataThunderNgWafStatsStats#useragent}
  */
  readonly useragent?: number;
  /**
  * Weak TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#weaktls DataThunderNgWafStatsStats#weaktls}
  */
  readonly weaktls?: number;
  /**
  * XML Encoding Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#xml_error DataThunderNgWafStatsStats#xml_error}
  */
  readonly xmlError?: number;
  /**
  * Cross Site Scripting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#xss DataThunderNgWafStatsStats#xss}
  */
  readonly xss?: number;
}

export function dataThunderNgWafStatsStatsStatsToTerraform(struct?: DataThunderNgWafStatsStatsStatsOutputReference | DataThunderNgWafStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abnormalpath: cdktf.numberToTerraform(struct!.abnormalpath),
    aws_ssrf: cdktf.numberToTerraform(struct!.awsSsrf),
    backdoor: cdktf.numberToTerraform(struct!.backdoor),
    bhh: cdktf.numberToTerraform(struct!.bhh),
    block: cdktf.numberToTerraform(struct!.block),
    cmdexe: cdktf.numberToTerraform(struct!.cmdexe),
    codei: cdktf.numberToTerraform(struct!.codei),
    custom1: cdktf.numberToTerraform(struct!.custom1),
    custom10: cdktf.numberToTerraform(struct!.custom10),
    custom11: cdktf.numberToTerraform(struct!.custom11),
    custom12: cdktf.numberToTerraform(struct!.custom12),
    custom13: cdktf.numberToTerraform(struct!.custom13),
    custom14: cdktf.numberToTerraform(struct!.custom14),
    custom15: cdktf.numberToTerraform(struct!.custom15),
    custom16: cdktf.numberToTerraform(struct!.custom16),
    custom17: cdktf.numberToTerraform(struct!.custom17),
    custom18: cdktf.numberToTerraform(struct!.custom18),
    custom19: cdktf.numberToTerraform(struct!.custom19),
    custom2: cdktf.numberToTerraform(struct!.custom2),
    custom20: cdktf.numberToTerraform(struct!.custom20),
    custom21: cdktf.numberToTerraform(struct!.custom21),
    custom22: cdktf.numberToTerraform(struct!.custom22),
    custom23: cdktf.numberToTerraform(struct!.custom23),
    custom24: cdktf.numberToTerraform(struct!.custom24),
    custom25: cdktf.numberToTerraform(struct!.custom25),
    custom26: cdktf.numberToTerraform(struct!.custom26),
    custom27: cdktf.numberToTerraform(struct!.custom27),
    custom28: cdktf.numberToTerraform(struct!.custom28),
    custom29: cdktf.numberToTerraform(struct!.custom29),
    custom3: cdktf.numberToTerraform(struct!.custom3),
    custom30: cdktf.numberToTerraform(struct!.custom30),
    custom31: cdktf.numberToTerraform(struct!.custom31),
    custom32: cdktf.numberToTerraform(struct!.custom32),
    custom33: cdktf.numberToTerraform(struct!.custom33),
    custom34: cdktf.numberToTerraform(struct!.custom34),
    custom35: cdktf.numberToTerraform(struct!.custom35),
    custom36: cdktf.numberToTerraform(struct!.custom36),
    custom37: cdktf.numberToTerraform(struct!.custom37),
    custom38: cdktf.numberToTerraform(struct!.custom38),
    custom39: cdktf.numberToTerraform(struct!.custom39),
    custom4: cdktf.numberToTerraform(struct!.custom4),
    custom40: cdktf.numberToTerraform(struct!.custom40),
    custom41: cdktf.numberToTerraform(struct!.custom41),
    custom42: cdktf.numberToTerraform(struct!.custom42),
    custom43: cdktf.numberToTerraform(struct!.custom43),
    custom44: cdktf.numberToTerraform(struct!.custom44),
    custom45: cdktf.numberToTerraform(struct!.custom45),
    custom46: cdktf.numberToTerraform(struct!.custom46),
    custom47: cdktf.numberToTerraform(struct!.custom47),
    custom48: cdktf.numberToTerraform(struct!.custom48),
    custom49: cdktf.numberToTerraform(struct!.custom49),
    custom5: cdktf.numberToTerraform(struct!.custom5),
    custom50: cdktf.numberToTerraform(struct!.custom50),
    custom51: cdktf.numberToTerraform(struct!.custom51),
    custom52: cdktf.numberToTerraform(struct!.custom52),
    custom53: cdktf.numberToTerraform(struct!.custom53),
    custom54: cdktf.numberToTerraform(struct!.custom54),
    custom55: cdktf.numberToTerraform(struct!.custom55),
    custom56: cdktf.numberToTerraform(struct!.custom56),
    custom57: cdktf.numberToTerraform(struct!.custom57),
    custom58: cdktf.numberToTerraform(struct!.custom58),
    custom59: cdktf.numberToTerraform(struct!.custom59),
    custom6: cdktf.numberToTerraform(struct!.custom6),
    custom60: cdktf.numberToTerraform(struct!.custom60),
    custom61: cdktf.numberToTerraform(struct!.custom61),
    custom62: cdktf.numberToTerraform(struct!.custom62),
    custom63: cdktf.numberToTerraform(struct!.custom63),
    custom64: cdktf.numberToTerraform(struct!.custom64),
    custom7: cdktf.numberToTerraform(struct!.custom7),
    custom8: cdktf.numberToTerraform(struct!.custom8),
    custom9: cdktf.numberToTerraform(struct!.custom9),
    datacenter: cdktf.numberToTerraform(struct!.datacenter),
    doubleenc: cdktf.numberToTerraform(struct!.doubleenc),
    duplicate_headers: cdktf.numberToTerraform(struct!.duplicateHeaders),
    error: cdktf.numberToTerraform(struct!.error),
    fbrowing: cdktf.numberToTerraform(struct!.fbrowing),
    graphql_depth: cdktf.numberToTerraform(struct!.graphqlDepth),
    graphql_ide: cdktf.numberToTerraform(struct!.graphqlIde),
    graphql_introspection: cdktf.numberToTerraform(struct!.graphqlIntrospection),
    graphql_unused_variables: cdktf.numberToTerraform(struct!.graphqlUnusedVariables),
    http403: cdktf.numberToTerraform(struct!.http403),
    http404: cdktf.numberToTerraform(struct!.http404),
    http429: cdktf.numberToTerraform(struct!.http429),
    http4xx: cdktf.numberToTerraform(struct!.http4Xx),
    http500: cdktf.numberToTerraform(struct!.http500),
    http503: cdktf.numberToTerraform(struct!.http503),
    http5xx: cdktf.numberToTerraform(struct!.http5Xx),
    impostor: cdktf.numberToTerraform(struct!.impostor),
    json_error: cdktf.numberToTerraform(struct!.jsonError),
    log4j_jndi: cdktf.numberToTerraform(struct!.log4JJndi),
    malformed: cdktf.numberToTerraform(struct!.malformed),
    no_ctype: cdktf.numberToTerraform(struct!.noCtype),
    notutf8: cdktf.numberToTerraform(struct!.notutf8),
    noua: cdktf.numberToTerraform(struct!.noua),
    nullbyte: cdktf.numberToTerraform(struct!.nullbyte),
    other: cdktf.numberToTerraform(struct!.other),
    privatefile: cdktf.numberToTerraform(struct!.privatefile),
    req_blocked: cdktf.numberToTerraform(struct!.reqBlocked),
    req_bypass: cdktf.numberToTerraform(struct!.reqBypass),
    req_forward: cdktf.numberToTerraform(struct!.reqForward),
    req_marked: cdktf.numberToTerraform(struct!.reqMarked),
    req_received: cdktf.numberToTerraform(struct!.reqReceived),
    req_redirected: cdktf.numberToTerraform(struct!.reqRedirected),
    respsplit: cdktf.numberToTerraform(struct!.respsplit),
    sans: cdktf.numberToTerraform(struct!.sans),
    scanner: cdktf.numberToTerraform(struct!.scanner),
    sigsci_ip: cdktf.numberToTerraform(struct!.sigsciIp),
    site_flagged_ip: cdktf.numberToTerraform(struct!.siteFlaggedIp),
    sqli: cdktf.numberToTerraform(struct!.sqli),
    tornode: cdktf.numberToTerraform(struct!.tornode),
    traversal: cdktf.numberToTerraform(struct!.traversal),
    useragent: cdktf.numberToTerraform(struct!.useragent),
    weaktls: cdktf.numberToTerraform(struct!.weaktls),
    xml_error: cdktf.numberToTerraform(struct!.xmlError),
    xss: cdktf.numberToTerraform(struct!.xss),
  }
}


export function dataThunderNgWafStatsStatsStatsToHclTerraform(struct?: DataThunderNgWafStatsStatsStatsOutputReference | DataThunderNgWafStatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abnormalpath: {
      value: cdktf.numberToHclTerraform(struct!.abnormalpath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_ssrf: {
      value: cdktf.numberToHclTerraform(struct!.awsSsrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backdoor: {
      value: cdktf.numberToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bhh: {
      value: cdktf.numberToHclTerraform(struct!.bhh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: cdktf.numberToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmdexe: {
      value: cdktf.numberToHclTerraform(struct!.cmdexe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codei: {
      value: cdktf.numberToHclTerraform(struct!.codei),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom1: {
      value: cdktf.numberToHclTerraform(struct!.custom1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom10: {
      value: cdktf.numberToHclTerraform(struct!.custom10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom11: {
      value: cdktf.numberToHclTerraform(struct!.custom11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom12: {
      value: cdktf.numberToHclTerraform(struct!.custom12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom13: {
      value: cdktf.numberToHclTerraform(struct!.custom13),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom14: {
      value: cdktf.numberToHclTerraform(struct!.custom14),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom15: {
      value: cdktf.numberToHclTerraform(struct!.custom15),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom16: {
      value: cdktf.numberToHclTerraform(struct!.custom16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom17: {
      value: cdktf.numberToHclTerraform(struct!.custom17),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom18: {
      value: cdktf.numberToHclTerraform(struct!.custom18),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom19: {
      value: cdktf.numberToHclTerraform(struct!.custom19),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom2: {
      value: cdktf.numberToHclTerraform(struct!.custom2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom20: {
      value: cdktf.numberToHclTerraform(struct!.custom20),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom21: {
      value: cdktf.numberToHclTerraform(struct!.custom21),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom22: {
      value: cdktf.numberToHclTerraform(struct!.custom22),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom23: {
      value: cdktf.numberToHclTerraform(struct!.custom23),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom24: {
      value: cdktf.numberToHclTerraform(struct!.custom24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom25: {
      value: cdktf.numberToHclTerraform(struct!.custom25),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom26: {
      value: cdktf.numberToHclTerraform(struct!.custom26),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom27: {
      value: cdktf.numberToHclTerraform(struct!.custom27),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom28: {
      value: cdktf.numberToHclTerraform(struct!.custom28),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom29: {
      value: cdktf.numberToHclTerraform(struct!.custom29),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom3: {
      value: cdktf.numberToHclTerraform(struct!.custom3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom30: {
      value: cdktf.numberToHclTerraform(struct!.custom30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom31: {
      value: cdktf.numberToHclTerraform(struct!.custom31),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom32: {
      value: cdktf.numberToHclTerraform(struct!.custom32),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom33: {
      value: cdktf.numberToHclTerraform(struct!.custom33),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom34: {
      value: cdktf.numberToHclTerraform(struct!.custom34),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom35: {
      value: cdktf.numberToHclTerraform(struct!.custom35),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom36: {
      value: cdktf.numberToHclTerraform(struct!.custom36),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom37: {
      value: cdktf.numberToHclTerraform(struct!.custom37),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom38: {
      value: cdktf.numberToHclTerraform(struct!.custom38),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom39: {
      value: cdktf.numberToHclTerraform(struct!.custom39),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom4: {
      value: cdktf.numberToHclTerraform(struct!.custom4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom40: {
      value: cdktf.numberToHclTerraform(struct!.custom40),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom41: {
      value: cdktf.numberToHclTerraform(struct!.custom41),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom42: {
      value: cdktf.numberToHclTerraform(struct!.custom42),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom43: {
      value: cdktf.numberToHclTerraform(struct!.custom43),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom44: {
      value: cdktf.numberToHclTerraform(struct!.custom44),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom45: {
      value: cdktf.numberToHclTerraform(struct!.custom45),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom46: {
      value: cdktf.numberToHclTerraform(struct!.custom46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom47: {
      value: cdktf.numberToHclTerraform(struct!.custom47),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom48: {
      value: cdktf.numberToHclTerraform(struct!.custom48),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom49: {
      value: cdktf.numberToHclTerraform(struct!.custom49),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom5: {
      value: cdktf.numberToHclTerraform(struct!.custom5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom50: {
      value: cdktf.numberToHclTerraform(struct!.custom50),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom51: {
      value: cdktf.numberToHclTerraform(struct!.custom51),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom52: {
      value: cdktf.numberToHclTerraform(struct!.custom52),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom53: {
      value: cdktf.numberToHclTerraform(struct!.custom53),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom54: {
      value: cdktf.numberToHclTerraform(struct!.custom54),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom55: {
      value: cdktf.numberToHclTerraform(struct!.custom55),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom56: {
      value: cdktf.numberToHclTerraform(struct!.custom56),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom57: {
      value: cdktf.numberToHclTerraform(struct!.custom57),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom58: {
      value: cdktf.numberToHclTerraform(struct!.custom58),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom59: {
      value: cdktf.numberToHclTerraform(struct!.custom59),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom6: {
      value: cdktf.numberToHclTerraform(struct!.custom6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom60: {
      value: cdktf.numberToHclTerraform(struct!.custom60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom61: {
      value: cdktf.numberToHclTerraform(struct!.custom61),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom62: {
      value: cdktf.numberToHclTerraform(struct!.custom62),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom63: {
      value: cdktf.numberToHclTerraform(struct!.custom63),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom64: {
      value: cdktf.numberToHclTerraform(struct!.custom64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom7: {
      value: cdktf.numberToHclTerraform(struct!.custom7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom8: {
      value: cdktf.numberToHclTerraform(struct!.custom8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom9: {
      value: cdktf.numberToHclTerraform(struct!.custom9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    datacenter: {
      value: cdktf.numberToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doubleenc: {
      value: cdktf.numberToHclTerraform(struct!.doubleenc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplicate_headers: {
      value: cdktf.numberToHclTerraform(struct!.duplicateHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fbrowing: {
      value: cdktf.numberToHclTerraform(struct!.fbrowing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphql_depth: {
      value: cdktf.numberToHclTerraform(struct!.graphqlDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphql_ide: {
      value: cdktf.numberToHclTerraform(struct!.graphqlIde),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphql_introspection: {
      value: cdktf.numberToHclTerraform(struct!.graphqlIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphql_unused_variables: {
      value: cdktf.numberToHclTerraform(struct!.graphqlUnusedVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http403: {
      value: cdktf.numberToHclTerraform(struct!.http403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http404: {
      value: cdktf.numberToHclTerraform(struct!.http404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http429: {
      value: cdktf.numberToHclTerraform(struct!.http429),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http4xx: {
      value: cdktf.numberToHclTerraform(struct!.http4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http500: {
      value: cdktf.numberToHclTerraform(struct!.http500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http503: {
      value: cdktf.numberToHclTerraform(struct!.http503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http5xx: {
      value: cdktf.numberToHclTerraform(struct!.http5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    impostor: {
      value: cdktf.numberToHclTerraform(struct!.impostor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    json_error: {
      value: cdktf.numberToHclTerraform(struct!.jsonError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log4j_jndi: {
      value: cdktf.numberToHclTerraform(struct!.log4JJndi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed: {
      value: cdktf.numberToHclTerraform(struct!.malformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ctype: {
      value: cdktf.numberToHclTerraform(struct!.noCtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notutf8: {
      value: cdktf.numberToHclTerraform(struct!.notutf8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noua: {
      value: cdktf.numberToHclTerraform(struct!.noua),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullbyte: {
      value: cdktf.numberToHclTerraform(struct!.nullbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other: {
      value: cdktf.numberToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatefile: {
      value: cdktf.numberToHclTerraform(struct!.privatefile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_blocked: {
      value: cdktf.numberToHclTerraform(struct!.reqBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_bypass: {
      value: cdktf.numberToHclTerraform(struct!.reqBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_forward: {
      value: cdktf.numberToHclTerraform(struct!.reqForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_marked: {
      value: cdktf.numberToHclTerraform(struct!.reqMarked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_received: {
      value: cdktf.numberToHclTerraform(struct!.reqReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_redirected: {
      value: cdktf.numberToHclTerraform(struct!.reqRedirected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respsplit: {
      value: cdktf.numberToHclTerraform(struct!.respsplit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sans: {
      value: cdktf.numberToHclTerraform(struct!.sans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scanner: {
      value: cdktf.numberToHclTerraform(struct!.scanner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sigsci_ip: {
      value: cdktf.numberToHclTerraform(struct!.sigsciIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_flagged_ip: {
      value: cdktf.numberToHclTerraform(struct!.siteFlaggedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sqli: {
      value: cdktf.numberToHclTerraform(struct!.sqli),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tornode: {
      value: cdktf.numberToHclTerraform(struct!.tornode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traversal: {
      value: cdktf.numberToHclTerraform(struct!.traversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    useragent: {
      value: cdktf.numberToHclTerraform(struct!.useragent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weaktls: {
      value: cdktf.numberToHclTerraform(struct!.weaktls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xml_error: {
      value: cdktf.numberToHclTerraform(struct!.xmlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xss: {
      value: cdktf.numberToHclTerraform(struct!.xss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNgWafStatsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNgWafStatsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abnormalpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.abnormalpath = this._abnormalpath;
    }
    if (this._awsSsrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSsrf = this._awsSsrf;
    }
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._bhh !== undefined) {
      hasAnyValues = true;
      internalValueResult.bhh = this._bhh;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._cmdexe !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdexe = this._cmdexe;
    }
    if (this._codei !== undefined) {
      hasAnyValues = true;
      internalValueResult.codei = this._codei;
    }
    if (this._custom1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom1 = this._custom1;
    }
    if (this._custom10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom10 = this._custom10;
    }
    if (this._custom11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom11 = this._custom11;
    }
    if (this._custom12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom12 = this._custom12;
    }
    if (this._custom13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom13 = this._custom13;
    }
    if (this._custom14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom14 = this._custom14;
    }
    if (this._custom15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom15 = this._custom15;
    }
    if (this._custom16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom16 = this._custom16;
    }
    if (this._custom17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom17 = this._custom17;
    }
    if (this._custom18 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom18 = this._custom18;
    }
    if (this._custom19 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom19 = this._custom19;
    }
    if (this._custom2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom2 = this._custom2;
    }
    if (this._custom20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom20 = this._custom20;
    }
    if (this._custom21 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom21 = this._custom21;
    }
    if (this._custom22 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom22 = this._custom22;
    }
    if (this._custom23 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom23 = this._custom23;
    }
    if (this._custom24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom24 = this._custom24;
    }
    if (this._custom25 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom25 = this._custom25;
    }
    if (this._custom26 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom26 = this._custom26;
    }
    if (this._custom27 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom27 = this._custom27;
    }
    if (this._custom28 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom28 = this._custom28;
    }
    if (this._custom29 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom29 = this._custom29;
    }
    if (this._custom3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom3 = this._custom3;
    }
    if (this._custom30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom30 = this._custom30;
    }
    if (this._custom31 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom31 = this._custom31;
    }
    if (this._custom32 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom32 = this._custom32;
    }
    if (this._custom33 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom33 = this._custom33;
    }
    if (this._custom34 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom34 = this._custom34;
    }
    if (this._custom35 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom35 = this._custom35;
    }
    if (this._custom36 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom36 = this._custom36;
    }
    if (this._custom37 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom37 = this._custom37;
    }
    if (this._custom38 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom38 = this._custom38;
    }
    if (this._custom39 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom39 = this._custom39;
    }
    if (this._custom4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom4 = this._custom4;
    }
    if (this._custom40 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom40 = this._custom40;
    }
    if (this._custom41 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom41 = this._custom41;
    }
    if (this._custom42 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom42 = this._custom42;
    }
    if (this._custom43 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom43 = this._custom43;
    }
    if (this._custom44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom44 = this._custom44;
    }
    if (this._custom45 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom45 = this._custom45;
    }
    if (this._custom46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom46 = this._custom46;
    }
    if (this._custom47 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom47 = this._custom47;
    }
    if (this._custom48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom48 = this._custom48;
    }
    if (this._custom49 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom49 = this._custom49;
    }
    if (this._custom5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom5 = this._custom5;
    }
    if (this._custom50 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom50 = this._custom50;
    }
    if (this._custom51 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom51 = this._custom51;
    }
    if (this._custom52 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom52 = this._custom52;
    }
    if (this._custom53 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom53 = this._custom53;
    }
    if (this._custom54 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom54 = this._custom54;
    }
    if (this._custom55 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom55 = this._custom55;
    }
    if (this._custom56 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom56 = this._custom56;
    }
    if (this._custom57 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom57 = this._custom57;
    }
    if (this._custom58 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom58 = this._custom58;
    }
    if (this._custom59 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom59 = this._custom59;
    }
    if (this._custom6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom6 = this._custom6;
    }
    if (this._custom60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom60 = this._custom60;
    }
    if (this._custom61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom61 = this._custom61;
    }
    if (this._custom62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom62 = this._custom62;
    }
    if (this._custom63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom63 = this._custom63;
    }
    if (this._custom64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom64 = this._custom64;
    }
    if (this._custom7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom7 = this._custom7;
    }
    if (this._custom8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom8 = this._custom8;
    }
    if (this._custom9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom9 = this._custom9;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._doubleenc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleenc = this._doubleenc;
    }
    if (this._duplicateHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateHeaders = this._duplicateHeaders;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._fbrowing !== undefined) {
      hasAnyValues = true;
      internalValueResult.fbrowing = this._fbrowing;
    }
    if (this._graphqlDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlDepth = this._graphqlDepth;
    }
    if (this._graphqlIde !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlIde = this._graphqlIde;
    }
    if (this._graphqlIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlIntrospection = this._graphqlIntrospection;
    }
    if (this._graphqlUnusedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlUnusedVariables = this._graphqlUnusedVariables;
    }
    if (this._http403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http403 = this._http403;
    }
    if (this._http404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http404 = this._http404;
    }
    if (this._http429 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http429 = this._http429;
    }
    if (this._http4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.http4Xx = this._http4Xx;
    }
    if (this._http500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http500 = this._http500;
    }
    if (this._http503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http503 = this._http503;
    }
    if (this._http5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.http5Xx = this._http5Xx;
    }
    if (this._impostor !== undefined) {
      hasAnyValues = true;
      internalValueResult.impostor = this._impostor;
    }
    if (this._jsonError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonError = this._jsonError;
    }
    if (this._log4JJndi !== undefined) {
      hasAnyValues = true;
      internalValueResult.log4JJndi = this._log4JJndi;
    }
    if (this._malformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformed = this._malformed;
    }
    if (this._noCtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCtype = this._noCtype;
    }
    if (this._notutf8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.notutf8 = this._notutf8;
    }
    if (this._noua !== undefined) {
      hasAnyValues = true;
      internalValueResult.noua = this._noua;
    }
    if (this._nullbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullbyte = this._nullbyte;
    }
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._privatefile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatefile = this._privatefile;
    }
    if (this._reqBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqBlocked = this._reqBlocked;
    }
    if (this._reqBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqBypass = this._reqBypass;
    }
    if (this._reqForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqForward = this._reqForward;
    }
    if (this._reqMarked !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqMarked = this._reqMarked;
    }
    if (this._reqReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqReceived = this._reqReceived;
    }
    if (this._reqRedirected !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRedirected = this._reqRedirected;
    }
    if (this._respsplit !== undefined) {
      hasAnyValues = true;
      internalValueResult.respsplit = this._respsplit;
    }
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    if (this._scanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanner = this._scanner;
    }
    if (this._sigsciIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigsciIp = this._sigsciIp;
    }
    if (this._siteFlaggedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteFlaggedIp = this._siteFlaggedIp;
    }
    if (this._sqli !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqli = this._sqli;
    }
    if (this._tornode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tornode = this._tornode;
    }
    if (this._traversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.traversal = this._traversal;
    }
    if (this._useragent !== undefined) {
      hasAnyValues = true;
      internalValueResult.useragent = this._useragent;
    }
    if (this._weaktls !== undefined) {
      hasAnyValues = true;
      internalValueResult.weaktls = this._weaktls;
    }
    if (this._xmlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlError = this._xmlError;
    }
    if (this._xss !== undefined) {
      hasAnyValues = true;
      internalValueResult.xss = this._xss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNgWafStatsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abnormalpath = undefined;
      this._awsSsrf = undefined;
      this._backdoor = undefined;
      this._bhh = undefined;
      this._block = undefined;
      this._cmdexe = undefined;
      this._codei = undefined;
      this._custom1 = undefined;
      this._custom10 = undefined;
      this._custom11 = undefined;
      this._custom12 = undefined;
      this._custom13 = undefined;
      this._custom14 = undefined;
      this._custom15 = undefined;
      this._custom16 = undefined;
      this._custom17 = undefined;
      this._custom18 = undefined;
      this._custom19 = undefined;
      this._custom2 = undefined;
      this._custom20 = undefined;
      this._custom21 = undefined;
      this._custom22 = undefined;
      this._custom23 = undefined;
      this._custom24 = undefined;
      this._custom25 = undefined;
      this._custom26 = undefined;
      this._custom27 = undefined;
      this._custom28 = undefined;
      this._custom29 = undefined;
      this._custom3 = undefined;
      this._custom30 = undefined;
      this._custom31 = undefined;
      this._custom32 = undefined;
      this._custom33 = undefined;
      this._custom34 = undefined;
      this._custom35 = undefined;
      this._custom36 = undefined;
      this._custom37 = undefined;
      this._custom38 = undefined;
      this._custom39 = undefined;
      this._custom4 = undefined;
      this._custom40 = undefined;
      this._custom41 = undefined;
      this._custom42 = undefined;
      this._custom43 = undefined;
      this._custom44 = undefined;
      this._custom45 = undefined;
      this._custom46 = undefined;
      this._custom47 = undefined;
      this._custom48 = undefined;
      this._custom49 = undefined;
      this._custom5 = undefined;
      this._custom50 = undefined;
      this._custom51 = undefined;
      this._custom52 = undefined;
      this._custom53 = undefined;
      this._custom54 = undefined;
      this._custom55 = undefined;
      this._custom56 = undefined;
      this._custom57 = undefined;
      this._custom58 = undefined;
      this._custom59 = undefined;
      this._custom6 = undefined;
      this._custom60 = undefined;
      this._custom61 = undefined;
      this._custom62 = undefined;
      this._custom63 = undefined;
      this._custom64 = undefined;
      this._custom7 = undefined;
      this._custom8 = undefined;
      this._custom9 = undefined;
      this._datacenter = undefined;
      this._doubleenc = undefined;
      this._duplicateHeaders = undefined;
      this._error = undefined;
      this._fbrowing = undefined;
      this._graphqlDepth = undefined;
      this._graphqlIde = undefined;
      this._graphqlIntrospection = undefined;
      this._graphqlUnusedVariables = undefined;
      this._http403 = undefined;
      this._http404 = undefined;
      this._http429 = undefined;
      this._http4Xx = undefined;
      this._http500 = undefined;
      this._http503 = undefined;
      this._http5Xx = undefined;
      this._impostor = undefined;
      this._jsonError = undefined;
      this._log4JJndi = undefined;
      this._malformed = undefined;
      this._noCtype = undefined;
      this._notutf8 = undefined;
      this._noua = undefined;
      this._nullbyte = undefined;
      this._other = undefined;
      this._privatefile = undefined;
      this._reqBlocked = undefined;
      this._reqBypass = undefined;
      this._reqForward = undefined;
      this._reqMarked = undefined;
      this._reqReceived = undefined;
      this._reqRedirected = undefined;
      this._respsplit = undefined;
      this._sans = undefined;
      this._scanner = undefined;
      this._sigsciIp = undefined;
      this._siteFlaggedIp = undefined;
      this._sqli = undefined;
      this._tornode = undefined;
      this._traversal = undefined;
      this._useragent = undefined;
      this._weaktls = undefined;
      this._xmlError = undefined;
      this._xss = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abnormalpath = value.abnormalpath;
      this._awsSsrf = value.awsSsrf;
      this._backdoor = value.backdoor;
      this._bhh = value.bhh;
      this._block = value.block;
      this._cmdexe = value.cmdexe;
      this._codei = value.codei;
      this._custom1 = value.custom1;
      this._custom10 = value.custom10;
      this._custom11 = value.custom11;
      this._custom12 = value.custom12;
      this._custom13 = value.custom13;
      this._custom14 = value.custom14;
      this._custom15 = value.custom15;
      this._custom16 = value.custom16;
      this._custom17 = value.custom17;
      this._custom18 = value.custom18;
      this._custom19 = value.custom19;
      this._custom2 = value.custom2;
      this._custom20 = value.custom20;
      this._custom21 = value.custom21;
      this._custom22 = value.custom22;
      this._custom23 = value.custom23;
      this._custom24 = value.custom24;
      this._custom25 = value.custom25;
      this._custom26 = value.custom26;
      this._custom27 = value.custom27;
      this._custom28 = value.custom28;
      this._custom29 = value.custom29;
      this._custom3 = value.custom3;
      this._custom30 = value.custom30;
      this._custom31 = value.custom31;
      this._custom32 = value.custom32;
      this._custom33 = value.custom33;
      this._custom34 = value.custom34;
      this._custom35 = value.custom35;
      this._custom36 = value.custom36;
      this._custom37 = value.custom37;
      this._custom38 = value.custom38;
      this._custom39 = value.custom39;
      this._custom4 = value.custom4;
      this._custom40 = value.custom40;
      this._custom41 = value.custom41;
      this._custom42 = value.custom42;
      this._custom43 = value.custom43;
      this._custom44 = value.custom44;
      this._custom45 = value.custom45;
      this._custom46 = value.custom46;
      this._custom47 = value.custom47;
      this._custom48 = value.custom48;
      this._custom49 = value.custom49;
      this._custom5 = value.custom5;
      this._custom50 = value.custom50;
      this._custom51 = value.custom51;
      this._custom52 = value.custom52;
      this._custom53 = value.custom53;
      this._custom54 = value.custom54;
      this._custom55 = value.custom55;
      this._custom56 = value.custom56;
      this._custom57 = value.custom57;
      this._custom58 = value.custom58;
      this._custom59 = value.custom59;
      this._custom6 = value.custom6;
      this._custom60 = value.custom60;
      this._custom61 = value.custom61;
      this._custom62 = value.custom62;
      this._custom63 = value.custom63;
      this._custom64 = value.custom64;
      this._custom7 = value.custom7;
      this._custom8 = value.custom8;
      this._custom9 = value.custom9;
      this._datacenter = value.datacenter;
      this._doubleenc = value.doubleenc;
      this._duplicateHeaders = value.duplicateHeaders;
      this._error = value.error;
      this._fbrowing = value.fbrowing;
      this._graphqlDepth = value.graphqlDepth;
      this._graphqlIde = value.graphqlIde;
      this._graphqlIntrospection = value.graphqlIntrospection;
      this._graphqlUnusedVariables = value.graphqlUnusedVariables;
      this._http403 = value.http403;
      this._http404 = value.http404;
      this._http429 = value.http429;
      this._http4Xx = value.http4Xx;
      this._http500 = value.http500;
      this._http503 = value.http503;
      this._http5Xx = value.http5Xx;
      this._impostor = value.impostor;
      this._jsonError = value.jsonError;
      this._log4JJndi = value.log4JJndi;
      this._malformed = value.malformed;
      this._noCtype = value.noCtype;
      this._notutf8 = value.notutf8;
      this._noua = value.noua;
      this._nullbyte = value.nullbyte;
      this._other = value.other;
      this._privatefile = value.privatefile;
      this._reqBlocked = value.reqBlocked;
      this._reqBypass = value.reqBypass;
      this._reqForward = value.reqForward;
      this._reqMarked = value.reqMarked;
      this._reqReceived = value.reqReceived;
      this._reqRedirected = value.reqRedirected;
      this._respsplit = value.respsplit;
      this._sans = value.sans;
      this._scanner = value.scanner;
      this._sigsciIp = value.sigsciIp;
      this._siteFlaggedIp = value.siteFlaggedIp;
      this._sqli = value.sqli;
      this._tornode = value.tornode;
      this._traversal = value.traversal;
      this._useragent = value.useragent;
      this._weaktls = value.weaktls;
      this._xmlError = value.xmlError;
      this._xss = value.xss;
    }
  }

  // abnormalpath - computed: false, optional: true, required: false
  private _abnormalpath?: number; 
  public get abnormalpath() {
    return this.getNumberAttribute('abnormalpath');
  }
  public set abnormalpath(value: number) {
    this._abnormalpath = value;
  }
  public resetAbnormalpath() {
    this._abnormalpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abnormalpathInput() {
    return this._abnormalpath;
  }

  // aws_ssrf - computed: false, optional: true, required: false
  private _awsSsrf?: number; 
  public get awsSsrf() {
    return this.getNumberAttribute('aws_ssrf');
  }
  public set awsSsrf(value: number) {
    this._awsSsrf = value;
  }
  public resetAwsSsrf() {
    this._awsSsrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSsrfInput() {
    return this._awsSsrf;
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: number; 
  public get backdoor() {
    return this.getNumberAttribute('backdoor');
  }
  public set backdoor(value: number) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // bhh - computed: false, optional: true, required: false
  private _bhh?: number; 
  public get bhh() {
    return this.getNumberAttribute('bhh');
  }
  public set bhh(value: number) {
    this._bhh = value;
  }
  public resetBhh() {
    this._bhh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bhhInput() {
    return this._bhh;
  }

  // block - computed: false, optional: true, required: false
  private _block?: number; 
  public get block() {
    return this.getNumberAttribute('block');
  }
  public set block(value: number) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // cmdexe - computed: false, optional: true, required: false
  private _cmdexe?: number; 
  public get cmdexe() {
    return this.getNumberAttribute('cmdexe');
  }
  public set cmdexe(value: number) {
    this._cmdexe = value;
  }
  public resetCmdexe() {
    this._cmdexe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdexeInput() {
    return this._cmdexe;
  }

  // codei - computed: false, optional: true, required: false
  private _codei?: number; 
  public get codei() {
    return this.getNumberAttribute('codei');
  }
  public set codei(value: number) {
    this._codei = value;
  }
  public resetCodei() {
    this._codei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeiInput() {
    return this._codei;
  }

  // custom1 - computed: false, optional: true, required: false
  private _custom1?: number; 
  public get custom1() {
    return this.getNumberAttribute('custom1');
  }
  public set custom1(value: number) {
    this._custom1 = value;
  }
  public resetCustom1() {
    this._custom1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom1Input() {
    return this._custom1;
  }

  // custom10 - computed: false, optional: true, required: false
  private _custom10?: number; 
  public get custom10() {
    return this.getNumberAttribute('custom10');
  }
  public set custom10(value: number) {
    this._custom10 = value;
  }
  public resetCustom10() {
    this._custom10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom10Input() {
    return this._custom10;
  }

  // custom11 - computed: false, optional: true, required: false
  private _custom11?: number; 
  public get custom11() {
    return this.getNumberAttribute('custom11');
  }
  public set custom11(value: number) {
    this._custom11 = value;
  }
  public resetCustom11() {
    this._custom11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom11Input() {
    return this._custom11;
  }

  // custom12 - computed: false, optional: true, required: false
  private _custom12?: number; 
  public get custom12() {
    return this.getNumberAttribute('custom12');
  }
  public set custom12(value: number) {
    this._custom12 = value;
  }
  public resetCustom12() {
    this._custom12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom12Input() {
    return this._custom12;
  }

  // custom13 - computed: false, optional: true, required: false
  private _custom13?: number; 
  public get custom13() {
    return this.getNumberAttribute('custom13');
  }
  public set custom13(value: number) {
    this._custom13 = value;
  }
  public resetCustom13() {
    this._custom13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom13Input() {
    return this._custom13;
  }

  // custom14 - computed: false, optional: true, required: false
  private _custom14?: number; 
  public get custom14() {
    return this.getNumberAttribute('custom14');
  }
  public set custom14(value: number) {
    this._custom14 = value;
  }
  public resetCustom14() {
    this._custom14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom14Input() {
    return this._custom14;
  }

  // custom15 - computed: false, optional: true, required: false
  private _custom15?: number; 
  public get custom15() {
    return this.getNumberAttribute('custom15');
  }
  public set custom15(value: number) {
    this._custom15 = value;
  }
  public resetCustom15() {
    this._custom15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom15Input() {
    return this._custom15;
  }

  // custom16 - computed: false, optional: true, required: false
  private _custom16?: number; 
  public get custom16() {
    return this.getNumberAttribute('custom16');
  }
  public set custom16(value: number) {
    this._custom16 = value;
  }
  public resetCustom16() {
    this._custom16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom16Input() {
    return this._custom16;
  }

  // custom17 - computed: false, optional: true, required: false
  private _custom17?: number; 
  public get custom17() {
    return this.getNumberAttribute('custom17');
  }
  public set custom17(value: number) {
    this._custom17 = value;
  }
  public resetCustom17() {
    this._custom17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom17Input() {
    return this._custom17;
  }

  // custom18 - computed: false, optional: true, required: false
  private _custom18?: number; 
  public get custom18() {
    return this.getNumberAttribute('custom18');
  }
  public set custom18(value: number) {
    this._custom18 = value;
  }
  public resetCustom18() {
    this._custom18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom18Input() {
    return this._custom18;
  }

  // custom19 - computed: false, optional: true, required: false
  private _custom19?: number; 
  public get custom19() {
    return this.getNumberAttribute('custom19');
  }
  public set custom19(value: number) {
    this._custom19 = value;
  }
  public resetCustom19() {
    this._custom19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom19Input() {
    return this._custom19;
  }

  // custom2 - computed: false, optional: true, required: false
  private _custom2?: number; 
  public get custom2() {
    return this.getNumberAttribute('custom2');
  }
  public set custom2(value: number) {
    this._custom2 = value;
  }
  public resetCustom2() {
    this._custom2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom2Input() {
    return this._custom2;
  }

  // custom20 - computed: false, optional: true, required: false
  private _custom20?: number; 
  public get custom20() {
    return this.getNumberAttribute('custom20');
  }
  public set custom20(value: number) {
    this._custom20 = value;
  }
  public resetCustom20() {
    this._custom20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom20Input() {
    return this._custom20;
  }

  // custom21 - computed: false, optional: true, required: false
  private _custom21?: number; 
  public get custom21() {
    return this.getNumberAttribute('custom21');
  }
  public set custom21(value: number) {
    this._custom21 = value;
  }
  public resetCustom21() {
    this._custom21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom21Input() {
    return this._custom21;
  }

  // custom22 - computed: false, optional: true, required: false
  private _custom22?: number; 
  public get custom22() {
    return this.getNumberAttribute('custom22');
  }
  public set custom22(value: number) {
    this._custom22 = value;
  }
  public resetCustom22() {
    this._custom22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom22Input() {
    return this._custom22;
  }

  // custom23 - computed: false, optional: true, required: false
  private _custom23?: number; 
  public get custom23() {
    return this.getNumberAttribute('custom23');
  }
  public set custom23(value: number) {
    this._custom23 = value;
  }
  public resetCustom23() {
    this._custom23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom23Input() {
    return this._custom23;
  }

  // custom24 - computed: false, optional: true, required: false
  private _custom24?: number; 
  public get custom24() {
    return this.getNumberAttribute('custom24');
  }
  public set custom24(value: number) {
    this._custom24 = value;
  }
  public resetCustom24() {
    this._custom24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom24Input() {
    return this._custom24;
  }

  // custom25 - computed: false, optional: true, required: false
  private _custom25?: number; 
  public get custom25() {
    return this.getNumberAttribute('custom25');
  }
  public set custom25(value: number) {
    this._custom25 = value;
  }
  public resetCustom25() {
    this._custom25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom25Input() {
    return this._custom25;
  }

  // custom26 - computed: false, optional: true, required: false
  private _custom26?: number; 
  public get custom26() {
    return this.getNumberAttribute('custom26');
  }
  public set custom26(value: number) {
    this._custom26 = value;
  }
  public resetCustom26() {
    this._custom26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom26Input() {
    return this._custom26;
  }

  // custom27 - computed: false, optional: true, required: false
  private _custom27?: number; 
  public get custom27() {
    return this.getNumberAttribute('custom27');
  }
  public set custom27(value: number) {
    this._custom27 = value;
  }
  public resetCustom27() {
    this._custom27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom27Input() {
    return this._custom27;
  }

  // custom28 - computed: false, optional: true, required: false
  private _custom28?: number; 
  public get custom28() {
    return this.getNumberAttribute('custom28');
  }
  public set custom28(value: number) {
    this._custom28 = value;
  }
  public resetCustom28() {
    this._custom28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom28Input() {
    return this._custom28;
  }

  // custom29 - computed: false, optional: true, required: false
  private _custom29?: number; 
  public get custom29() {
    return this.getNumberAttribute('custom29');
  }
  public set custom29(value: number) {
    this._custom29 = value;
  }
  public resetCustom29() {
    this._custom29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom29Input() {
    return this._custom29;
  }

  // custom3 - computed: false, optional: true, required: false
  private _custom3?: number; 
  public get custom3() {
    return this.getNumberAttribute('custom3');
  }
  public set custom3(value: number) {
    this._custom3 = value;
  }
  public resetCustom3() {
    this._custom3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom3Input() {
    return this._custom3;
  }

  // custom30 - computed: false, optional: true, required: false
  private _custom30?: number; 
  public get custom30() {
    return this.getNumberAttribute('custom30');
  }
  public set custom30(value: number) {
    this._custom30 = value;
  }
  public resetCustom30() {
    this._custom30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom30Input() {
    return this._custom30;
  }

  // custom31 - computed: false, optional: true, required: false
  private _custom31?: number; 
  public get custom31() {
    return this.getNumberAttribute('custom31');
  }
  public set custom31(value: number) {
    this._custom31 = value;
  }
  public resetCustom31() {
    this._custom31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom31Input() {
    return this._custom31;
  }

  // custom32 - computed: false, optional: true, required: false
  private _custom32?: number; 
  public get custom32() {
    return this.getNumberAttribute('custom32');
  }
  public set custom32(value: number) {
    this._custom32 = value;
  }
  public resetCustom32() {
    this._custom32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom32Input() {
    return this._custom32;
  }

  // custom33 - computed: false, optional: true, required: false
  private _custom33?: number; 
  public get custom33() {
    return this.getNumberAttribute('custom33');
  }
  public set custom33(value: number) {
    this._custom33 = value;
  }
  public resetCustom33() {
    this._custom33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom33Input() {
    return this._custom33;
  }

  // custom34 - computed: false, optional: true, required: false
  private _custom34?: number; 
  public get custom34() {
    return this.getNumberAttribute('custom34');
  }
  public set custom34(value: number) {
    this._custom34 = value;
  }
  public resetCustom34() {
    this._custom34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom34Input() {
    return this._custom34;
  }

  // custom35 - computed: false, optional: true, required: false
  private _custom35?: number; 
  public get custom35() {
    return this.getNumberAttribute('custom35');
  }
  public set custom35(value: number) {
    this._custom35 = value;
  }
  public resetCustom35() {
    this._custom35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom35Input() {
    return this._custom35;
  }

  // custom36 - computed: false, optional: true, required: false
  private _custom36?: number; 
  public get custom36() {
    return this.getNumberAttribute('custom36');
  }
  public set custom36(value: number) {
    this._custom36 = value;
  }
  public resetCustom36() {
    this._custom36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom36Input() {
    return this._custom36;
  }

  // custom37 - computed: false, optional: true, required: false
  private _custom37?: number; 
  public get custom37() {
    return this.getNumberAttribute('custom37');
  }
  public set custom37(value: number) {
    this._custom37 = value;
  }
  public resetCustom37() {
    this._custom37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom37Input() {
    return this._custom37;
  }

  // custom38 - computed: false, optional: true, required: false
  private _custom38?: number; 
  public get custom38() {
    return this.getNumberAttribute('custom38');
  }
  public set custom38(value: number) {
    this._custom38 = value;
  }
  public resetCustom38() {
    this._custom38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom38Input() {
    return this._custom38;
  }

  // custom39 - computed: false, optional: true, required: false
  private _custom39?: number; 
  public get custom39() {
    return this.getNumberAttribute('custom39');
  }
  public set custom39(value: number) {
    this._custom39 = value;
  }
  public resetCustom39() {
    this._custom39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom39Input() {
    return this._custom39;
  }

  // custom4 - computed: false, optional: true, required: false
  private _custom4?: number; 
  public get custom4() {
    return this.getNumberAttribute('custom4');
  }
  public set custom4(value: number) {
    this._custom4 = value;
  }
  public resetCustom4() {
    this._custom4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom4Input() {
    return this._custom4;
  }

  // custom40 - computed: false, optional: true, required: false
  private _custom40?: number; 
  public get custom40() {
    return this.getNumberAttribute('custom40');
  }
  public set custom40(value: number) {
    this._custom40 = value;
  }
  public resetCustom40() {
    this._custom40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom40Input() {
    return this._custom40;
  }

  // custom41 - computed: false, optional: true, required: false
  private _custom41?: number; 
  public get custom41() {
    return this.getNumberAttribute('custom41');
  }
  public set custom41(value: number) {
    this._custom41 = value;
  }
  public resetCustom41() {
    this._custom41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom41Input() {
    return this._custom41;
  }

  // custom42 - computed: false, optional: true, required: false
  private _custom42?: number; 
  public get custom42() {
    return this.getNumberAttribute('custom42');
  }
  public set custom42(value: number) {
    this._custom42 = value;
  }
  public resetCustom42() {
    this._custom42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom42Input() {
    return this._custom42;
  }

  // custom43 - computed: false, optional: true, required: false
  private _custom43?: number; 
  public get custom43() {
    return this.getNumberAttribute('custom43');
  }
  public set custom43(value: number) {
    this._custom43 = value;
  }
  public resetCustom43() {
    this._custom43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom43Input() {
    return this._custom43;
  }

  // custom44 - computed: false, optional: true, required: false
  private _custom44?: number; 
  public get custom44() {
    return this.getNumberAttribute('custom44');
  }
  public set custom44(value: number) {
    this._custom44 = value;
  }
  public resetCustom44() {
    this._custom44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom44Input() {
    return this._custom44;
  }

  // custom45 - computed: false, optional: true, required: false
  private _custom45?: number; 
  public get custom45() {
    return this.getNumberAttribute('custom45');
  }
  public set custom45(value: number) {
    this._custom45 = value;
  }
  public resetCustom45() {
    this._custom45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom45Input() {
    return this._custom45;
  }

  // custom46 - computed: false, optional: true, required: false
  private _custom46?: number; 
  public get custom46() {
    return this.getNumberAttribute('custom46');
  }
  public set custom46(value: number) {
    this._custom46 = value;
  }
  public resetCustom46() {
    this._custom46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom46Input() {
    return this._custom46;
  }

  // custom47 - computed: false, optional: true, required: false
  private _custom47?: number; 
  public get custom47() {
    return this.getNumberAttribute('custom47');
  }
  public set custom47(value: number) {
    this._custom47 = value;
  }
  public resetCustom47() {
    this._custom47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom47Input() {
    return this._custom47;
  }

  // custom48 - computed: false, optional: true, required: false
  private _custom48?: number; 
  public get custom48() {
    return this.getNumberAttribute('custom48');
  }
  public set custom48(value: number) {
    this._custom48 = value;
  }
  public resetCustom48() {
    this._custom48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom48Input() {
    return this._custom48;
  }

  // custom49 - computed: false, optional: true, required: false
  private _custom49?: number; 
  public get custom49() {
    return this.getNumberAttribute('custom49');
  }
  public set custom49(value: number) {
    this._custom49 = value;
  }
  public resetCustom49() {
    this._custom49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom49Input() {
    return this._custom49;
  }

  // custom5 - computed: false, optional: true, required: false
  private _custom5?: number; 
  public get custom5() {
    return this.getNumberAttribute('custom5');
  }
  public set custom5(value: number) {
    this._custom5 = value;
  }
  public resetCustom5() {
    this._custom5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom5Input() {
    return this._custom5;
  }

  // custom50 - computed: false, optional: true, required: false
  private _custom50?: number; 
  public get custom50() {
    return this.getNumberAttribute('custom50');
  }
  public set custom50(value: number) {
    this._custom50 = value;
  }
  public resetCustom50() {
    this._custom50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom50Input() {
    return this._custom50;
  }

  // custom51 - computed: false, optional: true, required: false
  private _custom51?: number; 
  public get custom51() {
    return this.getNumberAttribute('custom51');
  }
  public set custom51(value: number) {
    this._custom51 = value;
  }
  public resetCustom51() {
    this._custom51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom51Input() {
    return this._custom51;
  }

  // custom52 - computed: false, optional: true, required: false
  private _custom52?: number; 
  public get custom52() {
    return this.getNumberAttribute('custom52');
  }
  public set custom52(value: number) {
    this._custom52 = value;
  }
  public resetCustom52() {
    this._custom52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom52Input() {
    return this._custom52;
  }

  // custom53 - computed: false, optional: true, required: false
  private _custom53?: number; 
  public get custom53() {
    return this.getNumberAttribute('custom53');
  }
  public set custom53(value: number) {
    this._custom53 = value;
  }
  public resetCustom53() {
    this._custom53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom53Input() {
    return this._custom53;
  }

  // custom54 - computed: false, optional: true, required: false
  private _custom54?: number; 
  public get custom54() {
    return this.getNumberAttribute('custom54');
  }
  public set custom54(value: number) {
    this._custom54 = value;
  }
  public resetCustom54() {
    this._custom54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom54Input() {
    return this._custom54;
  }

  // custom55 - computed: false, optional: true, required: false
  private _custom55?: number; 
  public get custom55() {
    return this.getNumberAttribute('custom55');
  }
  public set custom55(value: number) {
    this._custom55 = value;
  }
  public resetCustom55() {
    this._custom55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom55Input() {
    return this._custom55;
  }

  // custom56 - computed: false, optional: true, required: false
  private _custom56?: number; 
  public get custom56() {
    return this.getNumberAttribute('custom56');
  }
  public set custom56(value: number) {
    this._custom56 = value;
  }
  public resetCustom56() {
    this._custom56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom56Input() {
    return this._custom56;
  }

  // custom57 - computed: false, optional: true, required: false
  private _custom57?: number; 
  public get custom57() {
    return this.getNumberAttribute('custom57');
  }
  public set custom57(value: number) {
    this._custom57 = value;
  }
  public resetCustom57() {
    this._custom57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom57Input() {
    return this._custom57;
  }

  // custom58 - computed: false, optional: true, required: false
  private _custom58?: number; 
  public get custom58() {
    return this.getNumberAttribute('custom58');
  }
  public set custom58(value: number) {
    this._custom58 = value;
  }
  public resetCustom58() {
    this._custom58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom58Input() {
    return this._custom58;
  }

  // custom59 - computed: false, optional: true, required: false
  private _custom59?: number; 
  public get custom59() {
    return this.getNumberAttribute('custom59');
  }
  public set custom59(value: number) {
    this._custom59 = value;
  }
  public resetCustom59() {
    this._custom59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom59Input() {
    return this._custom59;
  }

  // custom6 - computed: false, optional: true, required: false
  private _custom6?: number; 
  public get custom6() {
    return this.getNumberAttribute('custom6');
  }
  public set custom6(value: number) {
    this._custom6 = value;
  }
  public resetCustom6() {
    this._custom6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom6Input() {
    return this._custom6;
  }

  // custom60 - computed: false, optional: true, required: false
  private _custom60?: number; 
  public get custom60() {
    return this.getNumberAttribute('custom60');
  }
  public set custom60(value: number) {
    this._custom60 = value;
  }
  public resetCustom60() {
    this._custom60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom60Input() {
    return this._custom60;
  }

  // custom61 - computed: false, optional: true, required: false
  private _custom61?: number; 
  public get custom61() {
    return this.getNumberAttribute('custom61');
  }
  public set custom61(value: number) {
    this._custom61 = value;
  }
  public resetCustom61() {
    this._custom61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom61Input() {
    return this._custom61;
  }

  // custom62 - computed: false, optional: true, required: false
  private _custom62?: number; 
  public get custom62() {
    return this.getNumberAttribute('custom62');
  }
  public set custom62(value: number) {
    this._custom62 = value;
  }
  public resetCustom62() {
    this._custom62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom62Input() {
    return this._custom62;
  }

  // custom63 - computed: false, optional: true, required: false
  private _custom63?: number; 
  public get custom63() {
    return this.getNumberAttribute('custom63');
  }
  public set custom63(value: number) {
    this._custom63 = value;
  }
  public resetCustom63() {
    this._custom63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom63Input() {
    return this._custom63;
  }

  // custom64 - computed: false, optional: true, required: false
  private _custom64?: number; 
  public get custom64() {
    return this.getNumberAttribute('custom64');
  }
  public set custom64(value: number) {
    this._custom64 = value;
  }
  public resetCustom64() {
    this._custom64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom64Input() {
    return this._custom64;
  }

  // custom7 - computed: false, optional: true, required: false
  private _custom7?: number; 
  public get custom7() {
    return this.getNumberAttribute('custom7');
  }
  public set custom7(value: number) {
    this._custom7 = value;
  }
  public resetCustom7() {
    this._custom7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom7Input() {
    return this._custom7;
  }

  // custom8 - computed: false, optional: true, required: false
  private _custom8?: number; 
  public get custom8() {
    return this.getNumberAttribute('custom8');
  }
  public set custom8(value: number) {
    this._custom8 = value;
  }
  public resetCustom8() {
    this._custom8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom8Input() {
    return this._custom8;
  }

  // custom9 - computed: false, optional: true, required: false
  private _custom9?: number; 
  public get custom9() {
    return this.getNumberAttribute('custom9');
  }
  public set custom9(value: number) {
    this._custom9 = value;
  }
  public resetCustom9() {
    this._custom9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom9Input() {
    return this._custom9;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: number; 
  public get datacenter() {
    return this.getNumberAttribute('datacenter');
  }
  public set datacenter(value: number) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // doubleenc - computed: false, optional: true, required: false
  private _doubleenc?: number; 
  public get doubleenc() {
    return this.getNumberAttribute('doubleenc');
  }
  public set doubleenc(value: number) {
    this._doubleenc = value;
  }
  public resetDoubleenc() {
    this._doubleenc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleencInput() {
    return this._doubleenc;
  }

  // duplicate_headers - computed: false, optional: true, required: false
  private _duplicateHeaders?: number; 
  public get duplicateHeaders() {
    return this.getNumberAttribute('duplicate_headers');
  }
  public set duplicateHeaders(value: number) {
    this._duplicateHeaders = value;
  }
  public resetDuplicateHeaders() {
    this._duplicateHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateHeadersInput() {
    return this._duplicateHeaders;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // fbrowing - computed: false, optional: true, required: false
  private _fbrowing?: number; 
  public get fbrowing() {
    return this.getNumberAttribute('fbrowing');
  }
  public set fbrowing(value: number) {
    this._fbrowing = value;
  }
  public resetFbrowing() {
    this._fbrowing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fbrowingInput() {
    return this._fbrowing;
  }

  // graphql_depth - computed: false, optional: true, required: false
  private _graphqlDepth?: number; 
  public get graphqlDepth() {
    return this.getNumberAttribute('graphql_depth');
  }
  public set graphqlDepth(value: number) {
    this._graphqlDepth = value;
  }
  public resetGraphqlDepth() {
    this._graphqlDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlDepthInput() {
    return this._graphqlDepth;
  }

  // graphql_ide - computed: false, optional: true, required: false
  private _graphqlIde?: number; 
  public get graphqlIde() {
    return this.getNumberAttribute('graphql_ide');
  }
  public set graphqlIde(value: number) {
    this._graphqlIde = value;
  }
  public resetGraphqlIde() {
    this._graphqlIde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlIdeInput() {
    return this._graphqlIde;
  }

  // graphql_introspection - computed: false, optional: true, required: false
  private _graphqlIntrospection?: number; 
  public get graphqlIntrospection() {
    return this.getNumberAttribute('graphql_introspection');
  }
  public set graphqlIntrospection(value: number) {
    this._graphqlIntrospection = value;
  }
  public resetGraphqlIntrospection() {
    this._graphqlIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlIntrospectionInput() {
    return this._graphqlIntrospection;
  }

  // graphql_unused_variables - computed: false, optional: true, required: false
  private _graphqlUnusedVariables?: number; 
  public get graphqlUnusedVariables() {
    return this.getNumberAttribute('graphql_unused_variables');
  }
  public set graphqlUnusedVariables(value: number) {
    this._graphqlUnusedVariables = value;
  }
  public resetGraphqlUnusedVariables() {
    this._graphqlUnusedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlUnusedVariablesInput() {
    return this._graphqlUnusedVariables;
  }

  // http403 - computed: false, optional: true, required: false
  private _http403?: number; 
  public get http403() {
    return this.getNumberAttribute('http403');
  }
  public set http403(value: number) {
    this._http403 = value;
  }
  public resetHttp403() {
    this._http403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http403Input() {
    return this._http403;
  }

  // http404 - computed: false, optional: true, required: false
  private _http404?: number; 
  public get http404() {
    return this.getNumberAttribute('http404');
  }
  public set http404(value: number) {
    this._http404 = value;
  }
  public resetHttp404() {
    this._http404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http404Input() {
    return this._http404;
  }

  // http429 - computed: false, optional: true, required: false
  private _http429?: number; 
  public get http429() {
    return this.getNumberAttribute('http429');
  }
  public set http429(value: number) {
    this._http429 = value;
  }
  public resetHttp429() {
    this._http429 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http429Input() {
    return this._http429;
  }

  // http4xx - computed: false, optional: true, required: false
  private _http4Xx?: number; 
  public get http4Xx() {
    return this.getNumberAttribute('http4xx');
  }
  public set http4Xx(value: number) {
    this._http4Xx = value;
  }
  public resetHttp4Xx() {
    this._http4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http4XxInput() {
    return this._http4Xx;
  }

  // http500 - computed: false, optional: true, required: false
  private _http500?: number; 
  public get http500() {
    return this.getNumberAttribute('http500');
  }
  public set http500(value: number) {
    this._http500 = value;
  }
  public resetHttp500() {
    this._http500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http500Input() {
    return this._http500;
  }

  // http503 - computed: false, optional: true, required: false
  private _http503?: number; 
  public get http503() {
    return this.getNumberAttribute('http503');
  }
  public set http503(value: number) {
    this._http503 = value;
  }
  public resetHttp503() {
    this._http503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http503Input() {
    return this._http503;
  }

  // http5xx - computed: false, optional: true, required: false
  private _http5Xx?: number; 
  public get http5Xx() {
    return this.getNumberAttribute('http5xx');
  }
  public set http5Xx(value: number) {
    this._http5Xx = value;
  }
  public resetHttp5Xx() {
    this._http5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http5XxInput() {
    return this._http5Xx;
  }

  // impostor - computed: false, optional: true, required: false
  private _impostor?: number; 
  public get impostor() {
    return this.getNumberAttribute('impostor');
  }
  public set impostor(value: number) {
    this._impostor = value;
  }
  public resetImpostor() {
    this._impostor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impostorInput() {
    return this._impostor;
  }

  // json_error - computed: false, optional: true, required: false
  private _jsonError?: number; 
  public get jsonError() {
    return this.getNumberAttribute('json_error');
  }
  public set jsonError(value: number) {
    this._jsonError = value;
  }
  public resetJsonError() {
    this._jsonError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonErrorInput() {
    return this._jsonError;
  }

  // log4j_jndi - computed: false, optional: true, required: false
  private _log4JJndi?: number; 
  public get log4JJndi() {
    return this.getNumberAttribute('log4j_jndi');
  }
  public set log4JJndi(value: number) {
    this._log4JJndi = value;
  }
  public resetLog4JJndi() {
    this._log4JJndi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get log4JJndiInput() {
    return this._log4JJndi;
  }

  // malformed - computed: false, optional: true, required: false
  private _malformed?: number; 
  public get malformed() {
    return this.getNumberAttribute('malformed');
  }
  public set malformed(value: number) {
    this._malformed = value;
  }
  public resetMalformed() {
    this._malformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed;
  }

  // no_ctype - computed: false, optional: true, required: false
  private _noCtype?: number; 
  public get noCtype() {
    return this.getNumberAttribute('no_ctype');
  }
  public set noCtype(value: number) {
    this._noCtype = value;
  }
  public resetNoCtype() {
    this._noCtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCtypeInput() {
    return this._noCtype;
  }

  // notutf8 - computed: false, optional: true, required: false
  private _notutf8?: number; 
  public get notutf8() {
    return this.getNumberAttribute('notutf8');
  }
  public set notutf8(value: number) {
    this._notutf8 = value;
  }
  public resetNotutf8() {
    this._notutf8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notutf8Input() {
    return this._notutf8;
  }

  // noua - computed: false, optional: true, required: false
  private _noua?: number; 
  public get noua() {
    return this.getNumberAttribute('noua');
  }
  public set noua(value: number) {
    this._noua = value;
  }
  public resetNoua() {
    this._noua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nouaInput() {
    return this._noua;
  }

  // nullbyte - computed: false, optional: true, required: false
  private _nullbyte?: number; 
  public get nullbyte() {
    return this.getNumberAttribute('nullbyte');
  }
  public set nullbyte(value: number) {
    this._nullbyte = value;
  }
  public resetNullbyte() {
    this._nullbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullbyteInput() {
    return this._nullbyte;
  }

  // other - computed: false, optional: true, required: false
  private _other?: number; 
  public get other() {
    return this.getNumberAttribute('other');
  }
  public set other(value: number) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // privatefile - computed: false, optional: true, required: false
  private _privatefile?: number; 
  public get privatefile() {
    return this.getNumberAttribute('privatefile');
  }
  public set privatefile(value: number) {
    this._privatefile = value;
  }
  public resetPrivatefile() {
    this._privatefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatefileInput() {
    return this._privatefile;
  }

  // req_blocked - computed: false, optional: true, required: false
  private _reqBlocked?: number; 
  public get reqBlocked() {
    return this.getNumberAttribute('req_blocked');
  }
  public set reqBlocked(value: number) {
    this._reqBlocked = value;
  }
  public resetReqBlocked() {
    this._reqBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqBlockedInput() {
    return this._reqBlocked;
  }

  // req_bypass - computed: false, optional: true, required: false
  private _reqBypass?: number; 
  public get reqBypass() {
    return this.getNumberAttribute('req_bypass');
  }
  public set reqBypass(value: number) {
    this._reqBypass = value;
  }
  public resetReqBypass() {
    this._reqBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqBypassInput() {
    return this._reqBypass;
  }

  // req_forward - computed: false, optional: true, required: false
  private _reqForward?: number; 
  public get reqForward() {
    return this.getNumberAttribute('req_forward');
  }
  public set reqForward(value: number) {
    this._reqForward = value;
  }
  public resetReqForward() {
    this._reqForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqForwardInput() {
    return this._reqForward;
  }

  // req_marked - computed: false, optional: true, required: false
  private _reqMarked?: number; 
  public get reqMarked() {
    return this.getNumberAttribute('req_marked');
  }
  public set reqMarked(value: number) {
    this._reqMarked = value;
  }
  public resetReqMarked() {
    this._reqMarked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqMarkedInput() {
    return this._reqMarked;
  }

  // req_received - computed: false, optional: true, required: false
  private _reqReceived?: number; 
  public get reqReceived() {
    return this.getNumberAttribute('req_received');
  }
  public set reqReceived(value: number) {
    this._reqReceived = value;
  }
  public resetReqReceived() {
    this._reqReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqReceivedInput() {
    return this._reqReceived;
  }

  // req_redirected - computed: false, optional: true, required: false
  private _reqRedirected?: number; 
  public get reqRedirected() {
    return this.getNumberAttribute('req_redirected');
  }
  public set reqRedirected(value: number) {
    this._reqRedirected = value;
  }
  public resetReqRedirected() {
    this._reqRedirected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRedirectedInput() {
    return this._reqRedirected;
  }

  // respsplit - computed: false, optional: true, required: false
  private _respsplit?: number; 
  public get respsplit() {
    return this.getNumberAttribute('respsplit');
  }
  public set respsplit(value: number) {
    this._respsplit = value;
  }
  public resetRespsplit() {
    this._respsplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respsplitInput() {
    return this._respsplit;
  }

  // sans - computed: false, optional: true, required: false
  private _sans?: number; 
  public get sans() {
    return this.getNumberAttribute('sans');
  }
  public set sans(value: number) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // scanner - computed: false, optional: true, required: false
  private _scanner?: number; 
  public get scanner() {
    return this.getNumberAttribute('scanner');
  }
  public set scanner(value: number) {
    this._scanner = value;
  }
  public resetScanner() {
    this._scanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerInput() {
    return this._scanner;
  }

  // sigsci_ip - computed: false, optional: true, required: false
  private _sigsciIp?: number; 
  public get sigsciIp() {
    return this.getNumberAttribute('sigsci_ip');
  }
  public set sigsciIp(value: number) {
    this._sigsciIp = value;
  }
  public resetSigsciIp() {
    this._sigsciIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigsciIpInput() {
    return this._sigsciIp;
  }

  // site_flagged_ip - computed: false, optional: true, required: false
  private _siteFlaggedIp?: number; 
  public get siteFlaggedIp() {
    return this.getNumberAttribute('site_flagged_ip');
  }
  public set siteFlaggedIp(value: number) {
    this._siteFlaggedIp = value;
  }
  public resetSiteFlaggedIp() {
    this._siteFlaggedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteFlaggedIpInput() {
    return this._siteFlaggedIp;
  }

  // sqli - computed: false, optional: true, required: false
  private _sqli?: number; 
  public get sqli() {
    return this.getNumberAttribute('sqli');
  }
  public set sqli(value: number) {
    this._sqli = value;
  }
  public resetSqli() {
    this._sqli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliInput() {
    return this._sqli;
  }

  // tornode - computed: false, optional: true, required: false
  private _tornode?: number; 
  public get tornode() {
    return this.getNumberAttribute('tornode');
  }
  public set tornode(value: number) {
    this._tornode = value;
  }
  public resetTornode() {
    this._tornode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tornodeInput() {
    return this._tornode;
  }

  // traversal - computed: false, optional: true, required: false
  private _traversal?: number; 
  public get traversal() {
    return this.getNumberAttribute('traversal');
  }
  public set traversal(value: number) {
    this._traversal = value;
  }
  public resetTraversal() {
    this._traversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traversalInput() {
    return this._traversal;
  }

  // useragent - computed: false, optional: true, required: false
  private _useragent?: number; 
  public get useragent() {
    return this.getNumberAttribute('useragent');
  }
  public set useragent(value: number) {
    this._useragent = value;
  }
  public resetUseragent() {
    this._useragent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useragentInput() {
    return this._useragent;
  }

  // weaktls - computed: false, optional: true, required: false
  private _weaktls?: number; 
  public get weaktls() {
    return this.getNumberAttribute('weaktls');
  }
  public set weaktls(value: number) {
    this._weaktls = value;
  }
  public resetWeaktls() {
    this._weaktls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaktlsInput() {
    return this._weaktls;
  }

  // xml_error - computed: false, optional: true, required: false
  private _xmlError?: number; 
  public get xmlError() {
    return this.getNumberAttribute('xml_error');
  }
  public set xmlError(value: number) {
    this._xmlError = value;
  }
  public resetXmlError() {
    this._xmlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlErrorInput() {
    return this._xmlError;
  }

  // xss - computed: false, optional: true, required: false
  private _xss?: number; 
  public get xss() {
    return this.getNumberAttribute('xss');
  }
  public set xss(value: number) {
    this._xss = value;
  }
  public resetXss() {
    this._xss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssInput() {
    return this._xss;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats thunder_ng_waf_stats_stats}
*/
export class DataThunderNgWafStatsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ng_waf_stats_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNgWafStatsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNgWafStatsStats to import
  * @param importFromId The id of the existing DataThunderNgWafStatsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNgWafStatsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ng_waf_stats_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ng_waf_stats_stats thunder_ng_waf_stats_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNgWafStatsStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNgWafStatsStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ng_waf_stats_stats',
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
    this._name = config.name;
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
  private _stats = new DataThunderNgWafStatsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNgWafStatsStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderNgWafStatsStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderNgWafStatsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNgWafStatsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
