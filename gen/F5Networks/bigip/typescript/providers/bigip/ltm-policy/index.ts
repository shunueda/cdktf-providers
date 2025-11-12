// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#controls LtmPolicy#controls}
  */
  readonly controls?: string[];
  /**
  * Specifies descriptive text that identifies the ltm policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#description LtmPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#id LtmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#name LtmPolicy#name}
  */
  readonly name: string;
  /**
  * Publish the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#published_copy LtmPolicy#published_copy}
  */
  readonly publishedCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#requires LtmPolicy#requires}
  */
  readonly requires?: string[];
  /**
  * Policy Strategy (i.e. /Common/first-match)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#strategy LtmPolicy#strategy}
  */
  readonly strategy?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#rule LtmPolicy#rule}
  */
  readonly rule?: LtmPolicyRule[] | cdktf.IResolvable;
}
export interface LtmPolicyRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#app_service LtmPolicy#app_service}
  */
  readonly appService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#application LtmPolicy#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#asm LtmPolicy#asm}
  */
  readonly asm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#avr LtmPolicy#avr}
  */
  readonly avr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cache LtmPolicy#cache}
  */
  readonly cache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#carp LtmPolicy#carp}
  */
  readonly carp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#category LtmPolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#classify LtmPolicy#classify}
  */
  readonly classify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#clone_pool LtmPolicy#clone_pool}
  */
  readonly clonePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#code LtmPolicy#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#compress LtmPolicy#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#connection LtmPolicy#connection}
  */
  readonly connection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#content LtmPolicy#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cookie_hash LtmPolicy#cookie_hash}
  */
  readonly cookieHash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cookie_insert LtmPolicy#cookie_insert}
  */
  readonly cookieInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cookie_passive LtmPolicy#cookie_passive}
  */
  readonly cookiePassive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cookie_rewrite LtmPolicy#cookie_rewrite}
  */
  readonly cookieRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#decompress LtmPolicy#decompress}
  */
  readonly decompress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#defer LtmPolicy#defer}
  */
  readonly defer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#destination_address LtmPolicy#destination_address}
  */
  readonly destinationAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#disable LtmPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#domain LtmPolicy#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#enable LtmPolicy#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#expiry LtmPolicy#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#expiry_secs LtmPolicy#expiry_secs}
  */
  readonly expirySecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#expression LtmPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#extension LtmPolicy#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#facility LtmPolicy#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#forward LtmPolicy#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#from_profile LtmPolicy#from_profile}
  */
  readonly fromProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#hash LtmPolicy#hash}
  */
  readonly hash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#host LtmPolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http LtmPolicy#http}
  */
  readonly http?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_basic_auth LtmPolicy#http_basic_auth}
  */
  readonly httpBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_cookie LtmPolicy#http_cookie}
  */
  readonly httpCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_header LtmPolicy#http_header}
  */
  readonly httpHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_host LtmPolicy#http_host}
  */
  readonly httpHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_referer LtmPolicy#http_referer}
  */
  readonly httpReferer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_reply LtmPolicy#http_reply}
  */
  readonly httpReply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_set_cookie LtmPolicy#http_set_cookie}
  */
  readonly httpSetCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_uri LtmPolicy#http_uri}
  */
  readonly httpUri?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ifile LtmPolicy#ifile}
  */
  readonly ifile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#insert LtmPolicy#insert}
  */
  readonly insert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#internal_virtual LtmPolicy#internal_virtual}
  */
  readonly internalVirtual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ip_address LtmPolicy#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#key LtmPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#l7dos LtmPolicy#l7dos}
  */
  readonly l7Dos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#length LtmPolicy#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#location LtmPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#log LtmPolicy#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ltm_policy LtmPolicy#ltm_policy}
  */
  readonly ltmPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#member LtmPolicy#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#message LtmPolicy#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#netmask LtmPolicy#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#nexthop LtmPolicy#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#node LtmPolicy#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#offset LtmPolicy#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#path LtmPolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#pem LtmPolicy#pem}
  */
  readonly pem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#persist LtmPolicy#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#pin LtmPolicy#pin}
  */
  readonly pin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#policy LtmPolicy#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#pool LtmPolicy#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#port LtmPolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#priority LtmPolicy#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#profile LtmPolicy#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#protocol LtmPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#query_string LtmPolicy#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#rateclass LtmPolicy#rateclass}
  */
  readonly rateclass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#redirect LtmPolicy#redirect}
  */
  readonly redirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#remove LtmPolicy#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#replace LtmPolicy#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#request LtmPolicy#request}
  */
  readonly request?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#request_adapt LtmPolicy#request_adapt}
  */
  readonly requestAdapt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#reset LtmPolicy#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#response LtmPolicy#response}
  */
  readonly response?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#response_adapt LtmPolicy#response_adapt}
  */
  readonly responseAdapt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#scheme LtmPolicy#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#script LtmPolicy#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#select LtmPolicy#select}
  */
  readonly select?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#server_ssl LtmPolicy#server_ssl}
  */
  readonly serverSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#set_variable LtmPolicy#set_variable}
  */
  readonly setVariable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#shutdown LtmPolicy#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#snat LtmPolicy#snat}
  */
  readonly snat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#snatpool LtmPolicy#snatpool}
  */
  readonly snatpool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#source_address LtmPolicy#source_address}
  */
  readonly sourceAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_client_hello LtmPolicy#ssl_client_hello}
  */
  readonly sslClientHello?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_server_handshake LtmPolicy#ssl_server_handshake}
  */
  readonly sslServerHandshake?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_server_hello LtmPolicy#ssl_server_hello}
  */
  readonly sslServerHello?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_session_id LtmPolicy#ssl_session_id}
  */
  readonly sslSessionId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#status LtmPolicy#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#tcl LtmPolicy#tcl}
  */
  readonly tcl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#tcp_nagle LtmPolicy#tcp_nagle}
  */
  readonly tcpNagle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#text LtmPolicy#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#timeout LtmPolicy#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#tm_name LtmPolicy#tm_name}
  */
  readonly tmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#uie LtmPolicy#uie}
  */
  readonly uie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#universal LtmPolicy#universal}
  */
  readonly universal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#value LtmPolicy#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#virtual LtmPolicy#virtual}
  */
  readonly virtual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#vlan LtmPolicy#vlan}
  */
  readonly vlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#vlan_id LtmPolicy#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#wam LtmPolicy#wam}
  */
  readonly wam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#write LtmPolicy#write}
  */
  readonly write?: boolean | cdktf.IResolvable;
}

export function ltmPolicyRuleActionToTerraform(struct?: LtmPolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_service: cdktf.stringToTerraform(struct!.appService),
    application: cdktf.stringToTerraform(struct!.application),
    asm: cdktf.booleanToTerraform(struct!.asm),
    avr: cdktf.booleanToTerraform(struct!.avr),
    cache: cdktf.booleanToTerraform(struct!.cache),
    carp: cdktf.booleanToTerraform(struct!.carp),
    category: cdktf.stringToTerraform(struct!.category),
    classify: cdktf.booleanToTerraform(struct!.classify),
    clone_pool: cdktf.stringToTerraform(struct!.clonePool),
    code: cdktf.numberToTerraform(struct!.code),
    compress: cdktf.booleanToTerraform(struct!.compress),
    connection: cdktf.booleanToTerraform(struct!.connection),
    content: cdktf.stringToTerraform(struct!.content),
    cookie_hash: cdktf.booleanToTerraform(struct!.cookieHash),
    cookie_insert: cdktf.booleanToTerraform(struct!.cookieInsert),
    cookie_passive: cdktf.booleanToTerraform(struct!.cookiePassive),
    cookie_rewrite: cdktf.booleanToTerraform(struct!.cookieRewrite),
    decompress: cdktf.booleanToTerraform(struct!.decompress),
    defer: cdktf.booleanToTerraform(struct!.defer),
    destination_address: cdktf.booleanToTerraform(struct!.destinationAddress),
    disable: cdktf.booleanToTerraform(struct!.disable),
    domain: cdktf.stringToTerraform(struct!.domain),
    enable: cdktf.booleanToTerraform(struct!.enable),
    expiry: cdktf.stringToTerraform(struct!.expiry),
    expiry_secs: cdktf.numberToTerraform(struct!.expirySecs),
    expression: cdktf.stringToTerraform(struct!.expression),
    extension: cdktf.stringToTerraform(struct!.extension),
    facility: cdktf.stringToTerraform(struct!.facility),
    forward: cdktf.booleanToTerraform(struct!.forward),
    from_profile: cdktf.stringToTerraform(struct!.fromProfile),
    hash: cdktf.booleanToTerraform(struct!.hash),
    host: cdktf.stringToTerraform(struct!.host),
    http: cdktf.booleanToTerraform(struct!.http),
    http_basic_auth: cdktf.booleanToTerraform(struct!.httpBasicAuth),
    http_cookie: cdktf.booleanToTerraform(struct!.httpCookie),
    http_header: cdktf.booleanToTerraform(struct!.httpHeader),
    http_host: cdktf.booleanToTerraform(struct!.httpHost),
    http_referer: cdktf.booleanToTerraform(struct!.httpReferer),
    http_reply: cdktf.booleanToTerraform(struct!.httpReply),
    http_set_cookie: cdktf.booleanToTerraform(struct!.httpSetCookie),
    http_uri: cdktf.booleanToTerraform(struct!.httpUri),
    ifile: cdktf.stringToTerraform(struct!.ifile),
    insert: cdktf.booleanToTerraform(struct!.insert),
    internal_virtual: cdktf.stringToTerraform(struct!.internalVirtual),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    key: cdktf.stringToTerraform(struct!.key),
    l7dos: cdktf.booleanToTerraform(struct!.l7Dos),
    length: cdktf.numberToTerraform(struct!.length),
    location: cdktf.stringToTerraform(struct!.location),
    log: cdktf.booleanToTerraform(struct!.log),
    ltm_policy: cdktf.booleanToTerraform(struct!.ltmPolicy),
    member: cdktf.stringToTerraform(struct!.member),
    message: cdktf.stringToTerraform(struct!.message),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    nexthop: cdktf.stringToTerraform(struct!.nexthop),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    offset: cdktf.numberToTerraform(struct!.offset),
    path: cdktf.stringToTerraform(struct!.path),
    pem: cdktf.booleanToTerraform(struct!.pem),
    persist: cdktf.booleanToTerraform(struct!.persist),
    pin: cdktf.booleanToTerraform(struct!.pin),
    policy: cdktf.stringToTerraform(struct!.policy),
    pool: cdktf.stringToTerraform(struct!.pool),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.stringToTerraform(struct!.priority),
    profile: cdktf.stringToTerraform(struct!.profile),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    rateclass: cdktf.stringToTerraform(struct!.rateclass),
    redirect: cdktf.booleanToTerraform(struct!.redirect),
    remove: cdktf.booleanToTerraform(struct!.remove),
    replace: cdktf.booleanToTerraform(struct!.replace),
    request: cdktf.booleanToTerraform(struct!.request),
    request_adapt: cdktf.booleanToTerraform(struct!.requestAdapt),
    reset: cdktf.booleanToTerraform(struct!.reset),
    response: cdktf.booleanToTerraform(struct!.response),
    response_adapt: cdktf.booleanToTerraform(struct!.responseAdapt),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    script: cdktf.stringToTerraform(struct!.script),
    select: cdktf.booleanToTerraform(struct!.select),
    server_ssl: cdktf.booleanToTerraform(struct!.serverSsl),
    set_variable: cdktf.booleanToTerraform(struct!.setVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    snat: cdktf.stringToTerraform(struct!.snat),
    snatpool: cdktf.stringToTerraform(struct!.snatpool),
    source_address: cdktf.booleanToTerraform(struct!.sourceAddress),
    ssl_client_hello: cdktf.booleanToTerraform(struct!.sslClientHello),
    ssl_server_handshake: cdktf.booleanToTerraform(struct!.sslServerHandshake),
    ssl_server_hello: cdktf.booleanToTerraform(struct!.sslServerHello),
    ssl_session_id: cdktf.booleanToTerraform(struct!.sslSessionId),
    status: cdktf.numberToTerraform(struct!.status),
    tcl: cdktf.booleanToTerraform(struct!.tcl),
    tcp_nagle: cdktf.booleanToTerraform(struct!.tcpNagle),
    text: cdktf.stringToTerraform(struct!.text),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tm_name: cdktf.stringToTerraform(struct!.tmName),
    uie: cdktf.booleanToTerraform(struct!.uie),
    universal: cdktf.booleanToTerraform(struct!.universal),
    value: cdktf.stringToTerraform(struct!.value),
    virtual: cdktf.stringToTerraform(struct!.virtual),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    wam: cdktf.booleanToTerraform(struct!.wam),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function ltmPolicyRuleActionToHclTerraform(struct?: LtmPolicyRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_service: {
      value: cdktf.stringToHclTerraform(struct!.appService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asm: {
      value: cdktf.booleanToHclTerraform(struct!.asm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    avr: {
      value: cdktf.booleanToHclTerraform(struct!.avr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache: {
      value: cdktf.booleanToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    carp: {
      value: cdktf.booleanToHclTerraform(struct!.carp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classify: {
      value: cdktf.booleanToHclTerraform(struct!.classify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clone_pool: {
      value: cdktf.stringToHclTerraform(struct!.clonePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection: {
      value: cdktf.booleanToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_hash: {
      value: cdktf.booleanToHclTerraform(struct!.cookieHash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_insert: {
      value: cdktf.booleanToHclTerraform(struct!.cookieInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_passive: {
      value: cdktf.booleanToHclTerraform(struct!.cookiePassive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.cookieRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decompress: {
      value: cdktf.booleanToHclTerraform(struct!.decompress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defer: {
      value: cdktf.booleanToHclTerraform(struct!.defer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_address: {
      value: cdktf.booleanToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_secs: {
      value: cdktf.numberToHclTerraform(struct!.expirySecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktf.stringToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_profile: {
      value: cdktf.stringToHclTerraform(struct!.fromProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.booleanToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.booleanToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_basic_auth: {
      value: cdktf.booleanToHclTerraform(struct!.httpBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_header: {
      value: cdktf.booleanToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_host: {
      value: cdktf.booleanToHclTerraform(struct!.httpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_referer: {
      value: cdktf.booleanToHclTerraform(struct!.httpReferer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_reply: {
      value: cdktf.booleanToHclTerraform(struct!.httpReply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_set_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.httpSetCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_uri: {
      value: cdktf.booleanToHclTerraform(struct!.httpUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ifile: {
      value: cdktf.stringToHclTerraform(struct!.ifile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert: {
      value: cdktf.booleanToHclTerraform(struct!.insert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_virtual: {
      value: cdktf.stringToHclTerraform(struct!.internalVirtual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l7dos: {
      value: cdktf.booleanToHclTerraform(struct!.l7Dos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ltm_policy: {
      value: cdktf.booleanToHclTerraform(struct!.ltmPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: cdktf.stringToHclTerraform(struct!.nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem: {
      value: cdktf.booleanToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pin: {
      value: cdktf.booleanToHclTerraform(struct!.pin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rateclass: {
      value: cdktf.stringToHclTerraform(struct!.rateclass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect: {
      value: cdktf.booleanToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove: {
      value: cdktf.booleanToHclTerraform(struct!.remove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request: {
      value: cdktf.booleanToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_adapt: {
      value: cdktf.booleanToHclTerraform(struct!.requestAdapt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset: {
      value: cdktf.booleanToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response: {
      value: cdktf.booleanToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_adapt: {
      value: cdktf.booleanToHclTerraform(struct!.responseAdapt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select: {
      value: cdktf.booleanToHclTerraform(struct!.select),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.serverSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_variable: {
      value: cdktf.booleanToHclTerraform(struct!.setVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat: {
      value: cdktf.stringToHclTerraform(struct!.snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snatpool: {
      value: cdktf.stringToHclTerraform(struct!.snatpool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.booleanToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_client_hello: {
      value: cdktf.booleanToHclTerraform(struct!.sslClientHello),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_server_handshake: {
      value: cdktf.booleanToHclTerraform(struct!.sslServerHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_server_hello: {
      value: cdktf.booleanToHclTerraform(struct!.sslServerHello),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_session_id: {
      value: cdktf.booleanToHclTerraform(struct!.sslSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcl: {
      value: cdktf.booleanToHclTerraform(struct!.tcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_nagle: {
      value: cdktf.booleanToHclTerraform(struct!.tcpNagle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tm_name: {
      value: cdktf.stringToHclTerraform(struct!.tmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uie: {
      value: cdktf.booleanToHclTerraform(struct!.uie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    universal: {
      value: cdktf.booleanToHclTerraform(struct!.universal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual: {
      value: cdktf.stringToHclTerraform(struct!.virtual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wam: {
      value: cdktf.booleanToHclTerraform(struct!.wam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmPolicyRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmPolicyRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appService !== undefined) {
      hasAnyValues = true;
      internalValueResult.appService = this._appService;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._asm !== undefined) {
      hasAnyValues = true;
      internalValueResult.asm = this._asm;
    }
    if (this._avr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avr = this._avr;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._carp !== undefined) {
      hasAnyValues = true;
      internalValueResult.carp = this._carp;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._classify !== undefined) {
      hasAnyValues = true;
      internalValueResult.classify = this._classify;
    }
    if (this._clonePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.clonePool = this._clonePool;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._cookieHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieHash = this._cookieHash;
    }
    if (this._cookieInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieInsert = this._cookieInsert;
    }
    if (this._cookiePassive !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePassive = this._cookiePassive;
    }
    if (this._cookieRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieRewrite = this._cookieRewrite;
    }
    if (this._decompress !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompress = this._decompress;
    }
    if (this._defer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defer = this._defer;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._expirySecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirySecs = this._expirySecs;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._fromProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromProfile = this._fromProfile;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._httpBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuth = this._httpBasicAuth;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._httpReferer !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReferer = this._httpReferer;
    }
    if (this._httpReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReply = this._httpReply;
    }
    if (this._httpSetCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSetCookie = this._httpSetCookie;
    }
    if (this._httpUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUri = this._httpUri;
    }
    if (this._ifile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifile = this._ifile;
    }
    if (this._insert !== undefined) {
      hasAnyValues = true;
      internalValueResult.insert = this._insert;
    }
    if (this._internalVirtual !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalVirtual = this._internalVirtual;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._l7Dos !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Dos = this._l7Dos;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._ltmPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltmPolicy = this._ltmPolicy;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    if (this._pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pin = this._pin;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._rateclass !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateclass = this._rateclass;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestAdapt !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAdapt = this._requestAdapt;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._responseAdapt !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseAdapt = this._responseAdapt;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._select !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select;
    }
    if (this._serverSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSsl = this._serverSsl;
    }
    if (this._setVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVariable = this._setVariable;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.snat = this._snat;
    }
    if (this._snatpool !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatpool = this._snatpool;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sslClientHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientHello = this._sslClientHello;
    }
    if (this._sslServerHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerHandshake = this._sslServerHandshake;
    }
    if (this._sslServerHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerHello = this._sslServerHello;
    }
    if (this._sslSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionId = this._sslSessionId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcl = this._tcl;
    }
    if (this._tcpNagle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNagle = this._tcpNagle;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmName = this._tmName;
    }
    if (this._uie !== undefined) {
      hasAnyValues = true;
      internalValueResult.uie = this._uie;
    }
    if (this._universal !== undefined) {
      hasAnyValues = true;
      internalValueResult.universal = this._universal;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._virtual !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtual = this._virtual;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._wam !== undefined) {
      hasAnyValues = true;
      internalValueResult.wam = this._wam;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmPolicyRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appService = undefined;
      this._application = undefined;
      this._asm = undefined;
      this._avr = undefined;
      this._cache = undefined;
      this._carp = undefined;
      this._category = undefined;
      this._classify = undefined;
      this._clonePool = undefined;
      this._code = undefined;
      this._compress = undefined;
      this._connection = undefined;
      this._content = undefined;
      this._cookieHash = undefined;
      this._cookieInsert = undefined;
      this._cookiePassive = undefined;
      this._cookieRewrite = undefined;
      this._decompress = undefined;
      this._defer = undefined;
      this._destinationAddress = undefined;
      this._disable = undefined;
      this._domain = undefined;
      this._enable = undefined;
      this._expiry = undefined;
      this._expirySecs = undefined;
      this._expression = undefined;
      this._extension = undefined;
      this._facility = undefined;
      this._forward = undefined;
      this._fromProfile = undefined;
      this._hash = undefined;
      this._host = undefined;
      this._http = undefined;
      this._httpBasicAuth = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._httpHost = undefined;
      this._httpReferer = undefined;
      this._httpReply = undefined;
      this._httpSetCookie = undefined;
      this._httpUri = undefined;
      this._ifile = undefined;
      this._insert = undefined;
      this._internalVirtual = undefined;
      this._ipAddress = undefined;
      this._key = undefined;
      this._l7Dos = undefined;
      this._length = undefined;
      this._location = undefined;
      this._log = undefined;
      this._ltmPolicy = undefined;
      this._member = undefined;
      this._message = undefined;
      this._netmask = undefined;
      this._nexthop = undefined;
      this._node = undefined;
      this._offset = undefined;
      this._path = undefined;
      this._pem = undefined;
      this._persist = undefined;
      this._pin = undefined;
      this._policy = undefined;
      this._pool = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._profile = undefined;
      this._protocol = undefined;
      this._queryString = undefined;
      this._rateclass = undefined;
      this._redirect = undefined;
      this._remove = undefined;
      this._replace = undefined;
      this._request = undefined;
      this._requestAdapt = undefined;
      this._reset = undefined;
      this._response = undefined;
      this._responseAdapt = undefined;
      this._scheme = undefined;
      this._script = undefined;
      this._select = undefined;
      this._serverSsl = undefined;
      this._setVariable = undefined;
      this._shutdown = undefined;
      this._snat = undefined;
      this._snatpool = undefined;
      this._sourceAddress = undefined;
      this._sslClientHello = undefined;
      this._sslServerHandshake = undefined;
      this._sslServerHello = undefined;
      this._sslSessionId = undefined;
      this._status = undefined;
      this._tcl = undefined;
      this._tcpNagle = undefined;
      this._text = undefined;
      this._timeout = undefined;
      this._tmName = undefined;
      this._uie = undefined;
      this._universal = undefined;
      this._value = undefined;
      this._virtual = undefined;
      this._vlan = undefined;
      this._vlanId = undefined;
      this._wam = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appService = value.appService;
      this._application = value.application;
      this._asm = value.asm;
      this._avr = value.avr;
      this._cache = value.cache;
      this._carp = value.carp;
      this._category = value.category;
      this._classify = value.classify;
      this._clonePool = value.clonePool;
      this._code = value.code;
      this._compress = value.compress;
      this._connection = value.connection;
      this._content = value.content;
      this._cookieHash = value.cookieHash;
      this._cookieInsert = value.cookieInsert;
      this._cookiePassive = value.cookiePassive;
      this._cookieRewrite = value.cookieRewrite;
      this._decompress = value.decompress;
      this._defer = value.defer;
      this._destinationAddress = value.destinationAddress;
      this._disable = value.disable;
      this._domain = value.domain;
      this._enable = value.enable;
      this._expiry = value.expiry;
      this._expirySecs = value.expirySecs;
      this._expression = value.expression;
      this._extension = value.extension;
      this._facility = value.facility;
      this._forward = value.forward;
      this._fromProfile = value.fromProfile;
      this._hash = value.hash;
      this._host = value.host;
      this._http = value.http;
      this._httpBasicAuth = value.httpBasicAuth;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._httpHost = value.httpHost;
      this._httpReferer = value.httpReferer;
      this._httpReply = value.httpReply;
      this._httpSetCookie = value.httpSetCookie;
      this._httpUri = value.httpUri;
      this._ifile = value.ifile;
      this._insert = value.insert;
      this._internalVirtual = value.internalVirtual;
      this._ipAddress = value.ipAddress;
      this._key = value.key;
      this._l7Dos = value.l7Dos;
      this._length = value.length;
      this._location = value.location;
      this._log = value.log;
      this._ltmPolicy = value.ltmPolicy;
      this._member = value.member;
      this._message = value.message;
      this._netmask = value.netmask;
      this._nexthop = value.nexthop;
      this._node = value.nodeAttribute;
      this._offset = value.offset;
      this._path = value.path;
      this._pem = value.pem;
      this._persist = value.persist;
      this._pin = value.pin;
      this._policy = value.policy;
      this._pool = value.pool;
      this._port = value.port;
      this._priority = value.priority;
      this._profile = value.profile;
      this._protocol = value.protocol;
      this._queryString = value.queryString;
      this._rateclass = value.rateclass;
      this._redirect = value.redirect;
      this._remove = value.remove;
      this._replace = value.replace;
      this._request = value.request;
      this._requestAdapt = value.requestAdapt;
      this._reset = value.reset;
      this._response = value.response;
      this._responseAdapt = value.responseAdapt;
      this._scheme = value.scheme;
      this._script = value.script;
      this._select = value.select;
      this._serverSsl = value.serverSsl;
      this._setVariable = value.setVariable;
      this._shutdown = value.shutdown;
      this._snat = value.snat;
      this._snatpool = value.snatpool;
      this._sourceAddress = value.sourceAddress;
      this._sslClientHello = value.sslClientHello;
      this._sslServerHandshake = value.sslServerHandshake;
      this._sslServerHello = value.sslServerHello;
      this._sslSessionId = value.sslSessionId;
      this._status = value.status;
      this._tcl = value.tcl;
      this._tcpNagle = value.tcpNagle;
      this._text = value.text;
      this._timeout = value.timeout;
      this._tmName = value.tmName;
      this._uie = value.uie;
      this._universal = value.universal;
      this._value = value.value;
      this._virtual = value.virtual;
      this._vlan = value.vlan;
      this._vlanId = value.vlanId;
      this._wam = value.wam;
      this._write = value.write;
    }
  }

  // app_service - computed: true, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // application - computed: true, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // asm - computed: true, optional: true, required: false
  private _asm?: boolean | cdktf.IResolvable; 
  public get asm() {
    return this.getBooleanAttribute('asm');
  }
  public set asm(value: boolean | cdktf.IResolvable) {
    this._asm = value;
  }
  public resetAsm() {
    this._asm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmInput() {
    return this._asm;
  }

  // avr - computed: true, optional: true, required: false
  private _avr?: boolean | cdktf.IResolvable; 
  public get avr() {
    return this.getBooleanAttribute('avr');
  }
  public set avr(value: boolean | cdktf.IResolvable) {
    this._avr = value;
  }
  public resetAvr() {
    this._avr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avrInput() {
    return this._avr;
  }

  // cache - computed: true, optional: true, required: false
  private _cache?: boolean | cdktf.IResolvable; 
  public get cache() {
    return this.getBooleanAttribute('cache');
  }
  public set cache(value: boolean | cdktf.IResolvable) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // carp - computed: true, optional: true, required: false
  private _carp?: boolean | cdktf.IResolvable; 
  public get carp() {
    return this.getBooleanAttribute('carp');
  }
  public set carp(value: boolean | cdktf.IResolvable) {
    this._carp = value;
  }
  public resetCarp() {
    this._carp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carpInput() {
    return this._carp;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // classify - computed: true, optional: true, required: false
  private _classify?: boolean | cdktf.IResolvable; 
  public get classify() {
    return this.getBooleanAttribute('classify');
  }
  public set classify(value: boolean | cdktf.IResolvable) {
    this._classify = value;
  }
  public resetClassify() {
    this._classify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifyInput() {
    return this._classify;
  }

  // clone_pool - computed: true, optional: true, required: false
  private _clonePool?: string; 
  public get clonePool() {
    return this.getStringAttribute('clone_pool');
  }
  public set clonePool(value: string) {
    this._clonePool = value;
  }
  public resetClonePool() {
    this._clonePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonePoolInput() {
    return this._clonePool;
  }

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // compress - computed: true, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // connection - computed: false, optional: true, required: false
  private _connection?: boolean | cdktf.IResolvable; 
  public get connection() {
    return this.getBooleanAttribute('connection');
  }
  public set connection(value: boolean | cdktf.IResolvable) {
    this._connection = value;
  }
  public resetConnection() {
    this._connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // cookie_hash - computed: true, optional: true, required: false
  private _cookieHash?: boolean | cdktf.IResolvable; 
  public get cookieHash() {
    return this.getBooleanAttribute('cookie_hash');
  }
  public set cookieHash(value: boolean | cdktf.IResolvable) {
    this._cookieHash = value;
  }
  public resetCookieHash() {
    this._cookieHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieHashInput() {
    return this._cookieHash;
  }

  // cookie_insert - computed: true, optional: true, required: false
  private _cookieInsert?: boolean | cdktf.IResolvable; 
  public get cookieInsert() {
    return this.getBooleanAttribute('cookie_insert');
  }
  public set cookieInsert(value: boolean | cdktf.IResolvable) {
    this._cookieInsert = value;
  }
  public resetCookieInsert() {
    this._cookieInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInsertInput() {
    return this._cookieInsert;
  }

  // cookie_passive - computed: true, optional: true, required: false
  private _cookiePassive?: boolean | cdktf.IResolvable; 
  public get cookiePassive() {
    return this.getBooleanAttribute('cookie_passive');
  }
  public set cookiePassive(value: boolean | cdktf.IResolvable) {
    this._cookiePassive = value;
  }
  public resetCookiePassive() {
    this._cookiePassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePassiveInput() {
    return this._cookiePassive;
  }

  // cookie_rewrite - computed: true, optional: true, required: false
  private _cookieRewrite?: boolean | cdktf.IResolvable; 
  public get cookieRewrite() {
    return this.getBooleanAttribute('cookie_rewrite');
  }
  public set cookieRewrite(value: boolean | cdktf.IResolvable) {
    this._cookieRewrite = value;
  }
  public resetCookieRewrite() {
    this._cookieRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRewriteInput() {
    return this._cookieRewrite;
  }

  // decompress - computed: true, optional: true, required: false
  private _decompress?: boolean | cdktf.IResolvable; 
  public get decompress() {
    return this.getBooleanAttribute('decompress');
  }
  public set decompress(value: boolean | cdktf.IResolvable) {
    this._decompress = value;
  }
  public resetDecompress() {
    this._decompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressInput() {
    return this._decompress;
  }

  // defer - computed: true, optional: true, required: false
  private _defer?: boolean | cdktf.IResolvable; 
  public get defer() {
    return this.getBooleanAttribute('defer');
  }
  public set defer(value: boolean | cdktf.IResolvable) {
    this._defer = value;
  }
  public resetDefer() {
    this._defer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferInput() {
    return this._defer;
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: boolean | cdktf.IResolvable; 
  public get destinationAddress() {
    return this.getBooleanAttribute('destination_address');
  }
  public set destinationAddress(value: boolean | cdktf.IResolvable) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // expiry_secs - computed: true, optional: true, required: false
  private _expirySecs?: number; 
  public get expirySecs() {
    return this.getNumberAttribute('expiry_secs');
  }
  public set expirySecs(value: number) {
    this._expirySecs = value;
  }
  public resetExpirySecs() {
    this._expirySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirySecsInput() {
    return this._expirySecs;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // extension - computed: true, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // from_profile - computed: true, optional: true, required: false
  private _fromProfile?: string; 
  public get fromProfile() {
    return this.getStringAttribute('from_profile');
  }
  public set fromProfile(value: string) {
    this._fromProfile = value;
  }
  public resetFromProfile() {
    this._fromProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromProfileInput() {
    return this._fromProfile;
  }

  // hash - computed: true, optional: true, required: false
  private _hash?: boolean | cdktf.IResolvable; 
  public get hash() {
    return this.getBooleanAttribute('hash');
  }
  public set hash(value: boolean | cdktf.IResolvable) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http - computed: true, optional: true, required: false
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // http_basic_auth - computed: true, optional: true, required: false
  private _httpBasicAuth?: boolean | cdktf.IResolvable; 
  public get httpBasicAuth() {
    return this.getBooleanAttribute('http_basic_auth');
  }
  public set httpBasicAuth(value: boolean | cdktf.IResolvable) {
    this._httpBasicAuth = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: boolean | cdktf.IResolvable; 
  public get httpCookie() {
    return this.getBooleanAttribute('http_cookie');
  }
  public set httpCookie(value: boolean | cdktf.IResolvable) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: boolean | cdktf.IResolvable; 
  public get httpHeader() {
    return this.getBooleanAttribute('http_header');
  }
  public set httpHeader(value: boolean | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: boolean | cdktf.IResolvable; 
  public get httpHost() {
    return this.getBooleanAttribute('http_host');
  }
  public set httpHost(value: boolean | cdktf.IResolvable) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // http_referer - computed: true, optional: true, required: false
  private _httpReferer?: boolean | cdktf.IResolvable; 
  public get httpReferer() {
    return this.getBooleanAttribute('http_referer');
  }
  public set httpReferer(value: boolean | cdktf.IResolvable) {
    this._httpReferer = value;
  }
  public resetHttpReferer() {
    this._httpReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererInput() {
    return this._httpReferer;
  }

  // http_reply - computed: true, optional: true, required: false
  private _httpReply?: boolean | cdktf.IResolvable; 
  public get httpReply() {
    return this.getBooleanAttribute('http_reply');
  }
  public set httpReply(value: boolean | cdktf.IResolvable) {
    this._httpReply = value;
  }
  public resetHttpReply() {
    this._httpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReplyInput() {
    return this._httpReply;
  }

  // http_set_cookie - computed: true, optional: true, required: false
  private _httpSetCookie?: boolean | cdktf.IResolvable; 
  public get httpSetCookie() {
    return this.getBooleanAttribute('http_set_cookie');
  }
  public set httpSetCookie(value: boolean | cdktf.IResolvable) {
    this._httpSetCookie = value;
  }
  public resetHttpSetCookie() {
    this._httpSetCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSetCookieInput() {
    return this._httpSetCookie;
  }

  // http_uri - computed: true, optional: true, required: false
  private _httpUri?: boolean | cdktf.IResolvable; 
  public get httpUri() {
    return this.getBooleanAttribute('http_uri');
  }
  public set httpUri(value: boolean | cdktf.IResolvable) {
    this._httpUri = value;
  }
  public resetHttpUri() {
    this._httpUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriInput() {
    return this._httpUri;
  }

  // ifile - computed: true, optional: true, required: false
  private _ifile?: string; 
  public get ifile() {
    return this.getStringAttribute('ifile');
  }
  public set ifile(value: string) {
    this._ifile = value;
  }
  public resetIfile() {
    this._ifile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifileInput() {
    return this._ifile;
  }

  // insert - computed: true, optional: true, required: false
  private _insert?: boolean | cdktf.IResolvable; 
  public get insert() {
    return this.getBooleanAttribute('insert');
  }
  public set insert(value: boolean | cdktf.IResolvable) {
    this._insert = value;
  }
  public resetInsert() {
    this._insert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertInput() {
    return this._insert;
  }

  // internal_virtual - computed: true, optional: true, required: false
  private _internalVirtual?: string; 
  public get internalVirtual() {
    return this.getStringAttribute('internal_virtual');
  }
  public set internalVirtual(value: string) {
    this._internalVirtual = value;
  }
  public resetInternalVirtual() {
    this._internalVirtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalVirtualInput() {
    return this._internalVirtual;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // l7dos - computed: true, optional: true, required: false
  private _l7Dos?: boolean | cdktf.IResolvable; 
  public get l7Dos() {
    return this.getBooleanAttribute('l7dos');
  }
  public set l7Dos(value: boolean | cdktf.IResolvable) {
    this._l7Dos = value;
  }
  public resetL7Dos() {
    this._l7Dos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7DosInput() {
    return this._l7Dos;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // log - computed: true, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // ltm_policy - computed: true, optional: true, required: false
  private _ltmPolicy?: boolean | cdktf.IResolvable; 
  public get ltmPolicy() {
    return this.getBooleanAttribute('ltm_policy');
  }
  public set ltmPolicy(value: boolean | cdktf.IResolvable) {
    this._ltmPolicy = value;
  }
  public resetLtmPolicy() {
    this._ltmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltmPolicyInput() {
    return this._ltmPolicy;
  }

  // member - computed: true, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // nexthop - computed: true, optional: true, required: false
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // node - computed: true, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // pem - computed: true, optional: true, required: false
  private _pem?: boolean | cdktf.IResolvable; 
  public get pem() {
    return this.getBooleanAttribute('pem');
  }
  public set pem(value: boolean | cdktf.IResolvable) {
    this._pem = value;
  }
  public resetPem() {
    this._pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // pin - computed: true, optional: true, required: false
  private _pin?: boolean | cdktf.IResolvable; 
  public get pin() {
    return this.getBooleanAttribute('pin');
  }
  public set pin(value: boolean | cdktf.IResolvable) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // rateclass - computed: true, optional: true, required: false
  private _rateclass?: string; 
  public get rateclass() {
    return this.getStringAttribute('rateclass');
  }
  public set rateclass(value: string) {
    this._rateclass = value;
  }
  public resetRateclass() {
    this._rateclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateclassInput() {
    return this._rateclass;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect?: boolean | cdktf.IResolvable; 
  public get redirect() {
    return this.getBooleanAttribute('redirect');
  }
  public set redirect(value: boolean | cdktf.IResolvable) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // remove - computed: true, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // replace - computed: true, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // request - computed: true, optional: true, required: false
  private _request?: boolean | cdktf.IResolvable; 
  public get request() {
    return this.getBooleanAttribute('request');
  }
  public set request(value: boolean | cdktf.IResolvable) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // request_adapt - computed: true, optional: true, required: false
  private _requestAdapt?: boolean | cdktf.IResolvable; 
  public get requestAdapt() {
    return this.getBooleanAttribute('request_adapt');
  }
  public set requestAdapt(value: boolean | cdktf.IResolvable) {
    this._requestAdapt = value;
  }
  public resetRequestAdapt() {
    this._requestAdapt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAdaptInput() {
    return this._requestAdapt;
  }

  // reset - computed: true, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // response - computed: true, optional: true, required: false
  private _response?: boolean | cdktf.IResolvable; 
  public get response() {
    return this.getBooleanAttribute('response');
  }
  public set response(value: boolean | cdktf.IResolvable) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // response_adapt - computed: true, optional: true, required: false
  private _responseAdapt?: boolean | cdktf.IResolvable; 
  public get responseAdapt() {
    return this.getBooleanAttribute('response_adapt');
  }
  public set responseAdapt(value: boolean | cdktf.IResolvable) {
    this._responseAdapt = value;
  }
  public resetResponseAdapt() {
    this._responseAdapt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseAdaptInput() {
    return this._responseAdapt;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // select - computed: true, optional: true, required: false
  private _select?: boolean | cdktf.IResolvable; 
  public get select() {
    return this.getBooleanAttribute('select');
  }
  public set select(value: boolean | cdktf.IResolvable) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // server_ssl - computed: true, optional: true, required: false
  private _serverSsl?: boolean | cdktf.IResolvable; 
  public get serverSsl() {
    return this.getBooleanAttribute('server_ssl');
  }
  public set serverSsl(value: boolean | cdktf.IResolvable) {
    this._serverSsl = value;
  }
  public resetServerSsl() {
    this._serverSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslInput() {
    return this._serverSsl;
  }

  // set_variable - computed: true, optional: true, required: false
  private _setVariable?: boolean | cdktf.IResolvable; 
  public get setVariable() {
    return this.getBooleanAttribute('set_variable');
  }
  public set setVariable(value: boolean | cdktf.IResolvable) {
    this._setVariable = value;
  }
  public resetSetVariable() {
    this._setVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVariableInput() {
    return this._setVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // snat - computed: true, optional: true, required: false
  private _snat?: string; 
  public get snat() {
    return this.getStringAttribute('snat');
  }
  public set snat(value: string) {
    this._snat = value;
  }
  public resetSnat() {
    this._snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat;
  }

  // snatpool - computed: true, optional: true, required: false
  private _snatpool?: string; 
  public get snatpool() {
    return this.getStringAttribute('snatpool');
  }
  public set snatpool(value: string) {
    this._snatpool = value;
  }
  public resetSnatpool() {
    this._snatpool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatpoolInput() {
    return this._snatpool;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: boolean | cdktf.IResolvable; 
  public get sourceAddress() {
    return this.getBooleanAttribute('source_address');
  }
  public set sourceAddress(value: boolean | cdktf.IResolvable) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // ssl_client_hello - computed: true, optional: true, required: false
  private _sslClientHello?: boolean | cdktf.IResolvable; 
  public get sslClientHello() {
    return this.getBooleanAttribute('ssl_client_hello');
  }
  public set sslClientHello(value: boolean | cdktf.IResolvable) {
    this._sslClientHello = value;
  }
  public resetSslClientHello() {
    this._sslClientHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientHelloInput() {
    return this._sslClientHello;
  }

  // ssl_server_handshake - computed: true, optional: true, required: false
  private _sslServerHandshake?: boolean | cdktf.IResolvable; 
  public get sslServerHandshake() {
    return this.getBooleanAttribute('ssl_server_handshake');
  }
  public set sslServerHandshake(value: boolean | cdktf.IResolvable) {
    this._sslServerHandshake = value;
  }
  public resetSslServerHandshake() {
    this._sslServerHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHandshakeInput() {
    return this._sslServerHandshake;
  }

  // ssl_server_hello - computed: true, optional: true, required: false
  private _sslServerHello?: boolean | cdktf.IResolvable; 
  public get sslServerHello() {
    return this.getBooleanAttribute('ssl_server_hello');
  }
  public set sslServerHello(value: boolean | cdktf.IResolvable) {
    this._sslServerHello = value;
  }
  public resetSslServerHello() {
    this._sslServerHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHelloInput() {
    return this._sslServerHello;
  }

  // ssl_session_id - computed: true, optional: true, required: false
  private _sslSessionId?: boolean | cdktf.IResolvable; 
  public get sslSessionId() {
    return this.getBooleanAttribute('ssl_session_id');
  }
  public set sslSessionId(value: boolean | cdktf.IResolvable) {
    this._sslSessionId = value;
  }
  public resetSslSessionId() {
    this._sslSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdInput() {
    return this._sslSessionId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tcl - computed: true, optional: true, required: false
  private _tcl?: boolean | cdktf.IResolvable; 
  public get tcl() {
    return this.getBooleanAttribute('tcl');
  }
  public set tcl(value: boolean | cdktf.IResolvable) {
    this._tcl = value;
  }
  public resetTcl() {
    this._tcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tclInput() {
    return this._tcl;
  }

  // tcp_nagle - computed: true, optional: true, required: false
  private _tcpNagle?: boolean | cdktf.IResolvable; 
  public get tcpNagle() {
    return this.getBooleanAttribute('tcp_nagle');
  }
  public set tcpNagle(value: boolean | cdktf.IResolvable) {
    this._tcpNagle = value;
  }
  public resetTcpNagle() {
    this._tcpNagle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNagleInput() {
    return this._tcpNagle;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tm_name - computed: true, optional: true, required: false
  private _tmName?: string; 
  public get tmName() {
    return this.getStringAttribute('tm_name');
  }
  public set tmName(value: string) {
    this._tmName = value;
  }
  public resetTmName() {
    this._tmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmNameInput() {
    return this._tmName;
  }

  // uie - computed: true, optional: true, required: false
  private _uie?: boolean | cdktf.IResolvable; 
  public get uie() {
    return this.getBooleanAttribute('uie');
  }
  public set uie(value: boolean | cdktf.IResolvable) {
    this._uie = value;
  }
  public resetUie() {
    this._uie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uieInput() {
    return this._uie;
  }

  // universal - computed: true, optional: true, required: false
  private _universal?: boolean | cdktf.IResolvable; 
  public get universal() {
    return this.getBooleanAttribute('universal');
  }
  public set universal(value: boolean | cdktf.IResolvable) {
    this._universal = value;
  }
  public resetUniversal() {
    this._universal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalInput() {
    return this._universal;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // virtual - computed: true, optional: true, required: false
  private _virtual?: string; 
  public get virtual() {
    return this.getStringAttribute('virtual');
  }
  public set virtual(value: string) {
    this._virtual = value;
  }
  public resetVirtual() {
    this._virtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // wam - computed: true, optional: true, required: false
  private _wam?: boolean | cdktf.IResolvable; 
  public get wam() {
    return this.getBooleanAttribute('wam');
  }
  public set wam(value: boolean | cdktf.IResolvable) {
    this._wam = value;
  }
  public resetWam() {
    this._wam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wamInput() {
    return this._wam;
  }

  // write - computed: true, optional: true, required: false
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

export class LtmPolicyRuleActionList extends cdktf.ComplexList {
  public internalValue? : LtmPolicyRuleAction[] | cdktf.IResolvable

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
  public get(index: number): LtmPolicyRuleActionOutputReference {
    return new LtmPolicyRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtmPolicyRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#address LtmPolicy#address}
  */
  readonly address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#all LtmPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#app_service LtmPolicy#app_service}
  */
  readonly appService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#browser_type LtmPolicy#browser_type}
  */
  readonly browserType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#browser_version LtmPolicy#browser_version}
  */
  readonly browserVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#case_insensitive LtmPolicy#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#case_sensitive LtmPolicy#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cipher LtmPolicy#cipher}
  */
  readonly cipher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cipher_bits LtmPolicy#cipher_bits}
  */
  readonly cipherBits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#client_accepted LtmPolicy#client_accepted}
  */
  readonly clientAccepted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#client_ssl LtmPolicy#client_ssl}
  */
  readonly clientSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#code LtmPolicy#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#common_name LtmPolicy#common_name}
  */
  readonly commonName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#contains LtmPolicy#contains}
  */
  readonly contains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#continent LtmPolicy#continent}
  */
  readonly continent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#country_code LtmPolicy#country_code}
  */
  readonly countryCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#country_name LtmPolicy#country_name}
  */
  readonly countryName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#cpu_usage LtmPolicy#cpu_usage}
  */
  readonly cpuUsage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#datagroup LtmPolicy#datagroup}
  */
  readonly datagroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#device_make LtmPolicy#device_make}
  */
  readonly deviceMake?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#device_model LtmPolicy#device_model}
  */
  readonly deviceModel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#domain LtmPolicy#domain}
  */
  readonly domain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ends_with LtmPolicy#ends_with}
  */
  readonly endsWith?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#equals LtmPolicy#equals}
  */
  readonly equalTo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#exists LtmPolicy#exists}
  */
  readonly exists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#expiry LtmPolicy#expiry}
  */
  readonly expiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#extension LtmPolicy#extension}
  */
  readonly extension?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#external LtmPolicy#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#geoip LtmPolicy#geoip}
  */
  readonly geoip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#greater LtmPolicy#greater}
  */
  readonly greater?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#greater_or_equal LtmPolicy#greater_or_equal}
  */
  readonly greaterOrEqual?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#host LtmPolicy#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_basic_auth LtmPolicy#http_basic_auth}
  */
  readonly httpBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_cookie LtmPolicy#http_cookie}
  */
  readonly httpCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_header LtmPolicy#http_header}
  */
  readonly httpHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_host LtmPolicy#http_host}
  */
  readonly httpHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_method LtmPolicy#http_method}
  */
  readonly httpMethod?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_referer LtmPolicy#http_referer}
  */
  readonly httpReferer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_set_cookie LtmPolicy#http_set_cookie}
  */
  readonly httpSetCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_status LtmPolicy#http_status}
  */
  readonly httpStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_uri LtmPolicy#http_uri}
  */
  readonly httpUri?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_user_agent LtmPolicy#http_user_agent}
  */
  readonly httpUserAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#http_version LtmPolicy#http_version}
  */
  readonly httpVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#index LtmPolicy#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#internal LtmPolicy#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#isp LtmPolicy#isp}
  */
  readonly isp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#last_15secs LtmPolicy#last_15secs}
  */
  readonly last15Secs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#last_1min LtmPolicy#last_1min}
  */
  readonly last1Min?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#last_5mins LtmPolicy#last_5mins}
  */
  readonly last5Mins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#less LtmPolicy#less}
  */
  readonly less?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#less_or_equal LtmPolicy#less_or_equal}
  */
  readonly lessOrEqual?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#local LtmPolicy#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#major LtmPolicy#major}
  */
  readonly major?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#matches LtmPolicy#matches}
  */
  readonly matches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#minor LtmPolicy#minor}
  */
  readonly minor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#missing LtmPolicy#missing}
  */
  readonly missing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#mss LtmPolicy#mss}
  */
  readonly mss?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#not LtmPolicy#not}
  */
  readonly not?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#org LtmPolicy#org}
  */
  readonly org?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#password LtmPolicy#password}
  */
  readonly password?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#path LtmPolicy#path}
  */
  readonly path?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#path_segment LtmPolicy#path_segment}
  */
  readonly pathSegment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#port LtmPolicy#port}
  */
  readonly port?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#present LtmPolicy#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#protocol LtmPolicy#protocol}
  */
  readonly protocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#query_parameter LtmPolicy#query_parameter}
  */
  readonly queryParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#query_string LtmPolicy#query_string}
  */
  readonly queryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#region_code LtmPolicy#region_code}
  */
  readonly regionCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#region_name LtmPolicy#region_name}
  */
  readonly regionName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#remote LtmPolicy#remote}
  */
  readonly remote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#request LtmPolicy#request}
  */
  readonly request?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#response LtmPolicy#response}
  */
  readonly response?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#route_domain LtmPolicy#route_domain}
  */
  readonly routeDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#rtt LtmPolicy#rtt}
  */
  readonly rtt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#scheme LtmPolicy#scheme}
  */
  readonly scheme?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#server_name LtmPolicy#server_name}
  */
  readonly serverName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_cert LtmPolicy#ssl_cert}
  */
  readonly sslCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_client_hello LtmPolicy#ssl_client_hello}
  */
  readonly sslClientHello?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_extension LtmPolicy#ssl_extension}
  */
  readonly sslExtension?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_server_handshake LtmPolicy#ssl_server_handshake}
  */
  readonly sslServerHandshake?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#ssl_server_hello LtmPolicy#ssl_server_hello}
  */
  readonly sslServerHello?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#starts_with LtmPolicy#starts_with}
  */
  readonly startsWith?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#tcp LtmPolicy#tcp}
  */
  readonly tcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#text LtmPolicy#text}
  */
  readonly text?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#tm_name LtmPolicy#tm_name}
  */
  readonly tmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#unnamed_query_parameter LtmPolicy#unnamed_query_parameter}
  */
  readonly unnamedQueryParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#user_agent_token LtmPolicy#user_agent_token}
  */
  readonly userAgentToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#username LtmPolicy#username}
  */
  readonly username?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#value LtmPolicy#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#values LtmPolicy#values}
  */
  readonly values?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#version LtmPolicy#version}
  */
  readonly version?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#vlan LtmPolicy#vlan}
  */
  readonly vlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#vlan_id LtmPolicy#vlan_id}
  */
  readonly vlanId?: boolean | cdktf.IResolvable;
}

export function ltmPolicyRuleConditionToTerraform(struct?: LtmPolicyRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.booleanToTerraform(struct!.address),
    all: cdktf.booleanToTerraform(struct!.all),
    app_service: cdktf.stringToTerraform(struct!.appService),
    browser_type: cdktf.booleanToTerraform(struct!.browserType),
    browser_version: cdktf.booleanToTerraform(struct!.browserVersion),
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    cipher: cdktf.booleanToTerraform(struct!.cipher),
    cipher_bits: cdktf.booleanToTerraform(struct!.cipherBits),
    client_accepted: cdktf.booleanToTerraform(struct!.clientAccepted),
    client_ssl: cdktf.booleanToTerraform(struct!.clientSsl),
    code: cdktf.booleanToTerraform(struct!.code),
    common_name: cdktf.booleanToTerraform(struct!.commonName),
    contains: cdktf.booleanToTerraform(struct!.contains),
    continent: cdktf.booleanToTerraform(struct!.continent),
    country_code: cdktf.booleanToTerraform(struct!.countryCode),
    country_name: cdktf.booleanToTerraform(struct!.countryName),
    cpu_usage: cdktf.booleanToTerraform(struct!.cpuUsage),
    datagroup: cdktf.stringToTerraform(struct!.datagroup),
    device_make: cdktf.booleanToTerraform(struct!.deviceMake),
    device_model: cdktf.booleanToTerraform(struct!.deviceModel),
    domain: cdktf.booleanToTerraform(struct!.domain),
    ends_with: cdktf.booleanToTerraform(struct!.endsWith),
    equals: cdktf.booleanToTerraform(struct!.equalTo),
    exists: cdktf.booleanToTerraform(struct!.exists),
    expiry: cdktf.booleanToTerraform(struct!.expiry),
    extension: cdktf.booleanToTerraform(struct!.extension),
    external: cdktf.booleanToTerraform(struct!.external),
    geoip: cdktf.booleanToTerraform(struct!.geoip),
    greater: cdktf.booleanToTerraform(struct!.greater),
    greater_or_equal: cdktf.booleanToTerraform(struct!.greaterOrEqual),
    host: cdktf.booleanToTerraform(struct!.host),
    http_basic_auth: cdktf.booleanToTerraform(struct!.httpBasicAuth),
    http_cookie: cdktf.booleanToTerraform(struct!.httpCookie),
    http_header: cdktf.booleanToTerraform(struct!.httpHeader),
    http_host: cdktf.booleanToTerraform(struct!.httpHost),
    http_method: cdktf.booleanToTerraform(struct!.httpMethod),
    http_referer: cdktf.booleanToTerraform(struct!.httpReferer),
    http_set_cookie: cdktf.booleanToTerraform(struct!.httpSetCookie),
    http_status: cdktf.booleanToTerraform(struct!.httpStatus),
    http_uri: cdktf.booleanToTerraform(struct!.httpUri),
    http_user_agent: cdktf.booleanToTerraform(struct!.httpUserAgent),
    http_version: cdktf.booleanToTerraform(struct!.httpVersion),
    index: cdktf.numberToTerraform(struct!.index),
    internal: cdktf.booleanToTerraform(struct!.internal),
    isp: cdktf.booleanToTerraform(struct!.isp),
    last_15secs: cdktf.booleanToTerraform(struct!.last15Secs),
    last_1min: cdktf.booleanToTerraform(struct!.last1Min),
    last_5mins: cdktf.booleanToTerraform(struct!.last5Mins),
    less: cdktf.booleanToTerraform(struct!.less),
    less_or_equal: cdktf.booleanToTerraform(struct!.lessOrEqual),
    local: cdktf.booleanToTerraform(struct!.local),
    major: cdktf.booleanToTerraform(struct!.major),
    matches: cdktf.booleanToTerraform(struct!.matches),
    minor: cdktf.booleanToTerraform(struct!.minor),
    missing: cdktf.booleanToTerraform(struct!.missing),
    mss: cdktf.booleanToTerraform(struct!.mss),
    not: cdktf.booleanToTerraform(struct!.not),
    org: cdktf.booleanToTerraform(struct!.org),
    password: cdktf.booleanToTerraform(struct!.password),
    path: cdktf.booleanToTerraform(struct!.path),
    path_segment: cdktf.booleanToTerraform(struct!.pathSegment),
    port: cdktf.booleanToTerraform(struct!.port),
    present: cdktf.booleanToTerraform(struct!.present),
    protocol: cdktf.booleanToTerraform(struct!.protocol),
    query_parameter: cdktf.booleanToTerraform(struct!.queryParameter),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    region_code: cdktf.booleanToTerraform(struct!.regionCode),
    region_name: cdktf.booleanToTerraform(struct!.regionName),
    remote: cdktf.booleanToTerraform(struct!.remote),
    request: cdktf.booleanToTerraform(struct!.request),
    response: cdktf.booleanToTerraform(struct!.response),
    route_domain: cdktf.booleanToTerraform(struct!.routeDomain),
    rtt: cdktf.booleanToTerraform(struct!.rtt),
    scheme: cdktf.booleanToTerraform(struct!.scheme),
    server_name: cdktf.booleanToTerraform(struct!.serverName),
    ssl_cert: cdktf.booleanToTerraform(struct!.sslCert),
    ssl_client_hello: cdktf.booleanToTerraform(struct!.sslClientHello),
    ssl_extension: cdktf.booleanToTerraform(struct!.sslExtension),
    ssl_server_handshake: cdktf.booleanToTerraform(struct!.sslServerHandshake),
    ssl_server_hello: cdktf.booleanToTerraform(struct!.sslServerHello),
    starts_with: cdktf.booleanToTerraform(struct!.startsWith),
    tcp: cdktf.booleanToTerraform(struct!.tcp),
    text: cdktf.booleanToTerraform(struct!.text),
    tm_name: cdktf.stringToTerraform(struct!.tmName),
    unnamed_query_parameter: cdktf.booleanToTerraform(struct!.unnamedQueryParameter),
    user_agent_token: cdktf.booleanToTerraform(struct!.userAgentToken),
    username: cdktf.booleanToTerraform(struct!.username),
    value: cdktf.booleanToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    version: cdktf.booleanToTerraform(struct!.version),
    vlan: cdktf.booleanToTerraform(struct!.vlan),
    vlan_id: cdktf.booleanToTerraform(struct!.vlanId),
  }
}


export function ltmPolicyRuleConditionToHclTerraform(struct?: LtmPolicyRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.booleanToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_service: {
      value: cdktf.stringToHclTerraform(struct!.appService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_type: {
      value: cdktf.booleanToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    browser_version: {
      value: cdktf.booleanToHclTerraform(struct!.browserVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    case_insensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseInsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cipher: {
      value: cdktf.booleanToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cipher_bits: {
      value: cdktf.booleanToHclTerraform(struct!.cipherBits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.clientAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.clientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_name: {
      value: cdktf.booleanToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contains: {
      value: cdktf.booleanToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    continent: {
      value: cdktf.booleanToHclTerraform(struct!.continent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_code: {
      value: cdktf.booleanToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    country_name: {
      value: cdktf.booleanToHclTerraform(struct!.countryName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_usage: {
      value: cdktf.booleanToHclTerraform(struct!.cpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datagroup: {
      value: cdktf.stringToHclTerraform(struct!.datagroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_make: {
      value: cdktf.booleanToHclTerraform(struct!.deviceMake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_model: {
      value: cdktf.booleanToHclTerraform(struct!.deviceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.booleanToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ends_with: {
      value: cdktf.booleanToHclTerraform(struct!.endsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    equals: {
      value: cdktf.booleanToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exists: {
      value: cdktf.booleanToHclTerraform(struct!.exists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiry: {
      value: cdktf.booleanToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extension: {
      value: cdktf.booleanToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geoip: {
      value: cdktf.booleanToHclTerraform(struct!.geoip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    greater: {
      value: cdktf.booleanToHclTerraform(struct!.greater),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    greater_or_equal: {
      value: cdktf.booleanToHclTerraform(struct!.greaterOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_basic_auth: {
      value: cdktf.booleanToHclTerraform(struct!.httpBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_header: {
      value: cdktf.booleanToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_host: {
      value: cdktf.booleanToHclTerraform(struct!.httpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_method: {
      value: cdktf.booleanToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_referer: {
      value: cdktf.booleanToHclTerraform(struct!.httpReferer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_set_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.httpSetCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_status: {
      value: cdktf.booleanToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_uri: {
      value: cdktf.booleanToHclTerraform(struct!.httpUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_user_agent: {
      value: cdktf.booleanToHclTerraform(struct!.httpUserAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_version: {
      value: cdktf.booleanToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal: {
      value: cdktf.booleanToHclTerraform(struct!.internal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isp: {
      value: cdktf.booleanToHclTerraform(struct!.isp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_15secs: {
      value: cdktf.booleanToHclTerraform(struct!.last15Secs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_1min: {
      value: cdktf.booleanToHclTerraform(struct!.last1Min),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_5mins: {
      value: cdktf.booleanToHclTerraform(struct!.last5Mins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    less: {
      value: cdktf.booleanToHclTerraform(struct!.less),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    less_or_equal: {
      value: cdktf.booleanToHclTerraform(struct!.lessOrEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local: {
      value: cdktf.booleanToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    major: {
      value: cdktf.booleanToHclTerraform(struct!.major),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matches: {
      value: cdktf.booleanToHclTerraform(struct!.matches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minor: {
      value: cdktf.booleanToHclTerraform(struct!.minor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    missing: {
      value: cdktf.booleanToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mss: {
      value: cdktf.booleanToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not: {
      value: cdktf.booleanToHclTerraform(struct!.not),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    org: {
      value: cdktf.booleanToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.booleanToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.booleanToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_segment: {
      value: cdktf.booleanToHclTerraform(struct!.pathSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.booleanToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.booleanToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.queryParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string: {
      value: cdktf.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region_code: {
      value: cdktf.booleanToHclTerraform(struct!.regionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region_name: {
      value: cdktf.booleanToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote: {
      value: cdktf.booleanToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request: {
      value: cdktf.booleanToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response: {
      value: cdktf.booleanToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_domain: {
      value: cdktf.booleanToHclTerraform(struct!.routeDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rtt: {
      value: cdktf.booleanToHclTerraform(struct!.rtt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheme: {
      value: cdktf.booleanToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.booleanToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_cert: {
      value: cdktf.booleanToHclTerraform(struct!.sslCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_client_hello: {
      value: cdktf.booleanToHclTerraform(struct!.sslClientHello),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_extension: {
      value: cdktf.booleanToHclTerraform(struct!.sslExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_server_handshake: {
      value: cdktf.booleanToHclTerraform(struct!.sslServerHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_server_hello: {
      value: cdktf.booleanToHclTerraform(struct!.sslServerHello),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    starts_with: {
      value: cdktf.booleanToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp: {
      value: cdktf.booleanToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.booleanToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tm_name: {
      value: cdktf.stringToHclTerraform(struct!.tmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unnamed_query_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.unnamedQueryParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent_token: {
      value: cdktf.booleanToHclTerraform(struct!.userAgentToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.booleanToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.booleanToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan: {
      value: cdktf.booleanToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.booleanToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmPolicyRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmPolicyRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._appService !== undefined) {
      hasAnyValues = true;
      internalValueResult.appService = this._appService;
    }
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    if (this._browserVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserVersion = this._browserVersion;
    }
    if (this._caseInsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseInsensitive = this._caseInsensitive;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._cipherBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherBits = this._cipherBits;
    }
    if (this._clientAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAccepted = this._clientAccepted;
    }
    if (this._clientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSsl = this._clientSsl;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._countryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryName = this._countryName;
    }
    if (this._cpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage;
    }
    if (this._datagroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.datagroup = this._datagroup;
    }
    if (this._deviceMake !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceMake = this._deviceMake;
    }
    if (this._deviceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModel = this._deviceModel;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._exists !== undefined) {
      hasAnyValues = true;
      internalValueResult.exists = this._exists;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._geoip !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoip = this._geoip;
    }
    if (this._greater !== undefined) {
      hasAnyValues = true;
      internalValueResult.greater = this._greater;
    }
    if (this._greaterOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterOrEqual = this._greaterOrEqual;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuth = this._httpBasicAuth;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpReferer !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReferer = this._httpReferer;
    }
    if (this._httpSetCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSetCookie = this._httpSetCookie;
    }
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._httpUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUri = this._httpUri;
    }
    if (this._httpUserAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUserAgent = this._httpUserAgent;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    if (this._isp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isp = this._isp;
    }
    if (this._last15Secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.last15Secs = this._last15Secs;
    }
    if (this._last1Min !== undefined) {
      hasAnyValues = true;
      internalValueResult.last1Min = this._last1Min;
    }
    if (this._last5Mins !== undefined) {
      hasAnyValues = true;
      internalValueResult.last5Mins = this._last5Mins;
    }
    if (this._less !== undefined) {
      hasAnyValues = true;
      internalValueResult.less = this._less;
    }
    if (this._lessOrEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessOrEqual = this._lessOrEqual;
    }
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._major !== undefined) {
      hasAnyValues = true;
      internalValueResult.major = this._major;
    }
    if (this._matches !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches;
    }
    if (this._minor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minor = this._minor;
    }
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathSegment = this._pathSegment;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queryParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._regionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCode = this._regionCode;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._routeDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDomain = this._routeDomain;
    }
    if (this._rtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtt = this._rtt;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCert = this._sslCert;
    }
    if (this._sslClientHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientHello = this._sslClientHello;
    }
    if (this._sslExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslExtension = this._sslExtension;
    }
    if (this._sslServerHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerHandshake = this._sslServerHandshake;
    }
    if (this._sslServerHello !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerHello = this._sslServerHello;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._tmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmName = this._tmName;
    }
    if (this._unnamedQueryParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnamedQueryParameter = this._unnamedQueryParameter;
    }
    if (this._userAgentToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentToken = this._userAgentToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmPolicyRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._all = undefined;
      this._appService = undefined;
      this._browserType = undefined;
      this._browserVersion = undefined;
      this._caseInsensitive = undefined;
      this._caseSensitive = undefined;
      this._cipher = undefined;
      this._cipherBits = undefined;
      this._clientAccepted = undefined;
      this._clientSsl = undefined;
      this._code = undefined;
      this._commonName = undefined;
      this._contains = undefined;
      this._continent = undefined;
      this._countryCode = undefined;
      this._countryName = undefined;
      this._cpuUsage = undefined;
      this._datagroup = undefined;
      this._deviceMake = undefined;
      this._deviceModel = undefined;
      this._domain = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._exists = undefined;
      this._expiry = undefined;
      this._extension = undefined;
      this._external = undefined;
      this._geoip = undefined;
      this._greater = undefined;
      this._greaterOrEqual = undefined;
      this._host = undefined;
      this._httpBasicAuth = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._httpHost = undefined;
      this._httpMethod = undefined;
      this._httpReferer = undefined;
      this._httpSetCookie = undefined;
      this._httpStatus = undefined;
      this._httpUri = undefined;
      this._httpUserAgent = undefined;
      this._httpVersion = undefined;
      this._index = undefined;
      this._internal = undefined;
      this._isp = undefined;
      this._last15Secs = undefined;
      this._last1Min = undefined;
      this._last5Mins = undefined;
      this._less = undefined;
      this._lessOrEqual = undefined;
      this._local = undefined;
      this._major = undefined;
      this._matches = undefined;
      this._minor = undefined;
      this._missing = undefined;
      this._mss = undefined;
      this._not = undefined;
      this._org = undefined;
      this._password = undefined;
      this._path = undefined;
      this._pathSegment = undefined;
      this._port = undefined;
      this._present = undefined;
      this._protocol = undefined;
      this._queryParameter = undefined;
      this._queryString = undefined;
      this._regionCode = undefined;
      this._regionName = undefined;
      this._remote = undefined;
      this._request = undefined;
      this._response = undefined;
      this._routeDomain = undefined;
      this._rtt = undefined;
      this._scheme = undefined;
      this._serverName = undefined;
      this._sslCert = undefined;
      this._sslClientHello = undefined;
      this._sslExtension = undefined;
      this._sslServerHandshake = undefined;
      this._sslServerHello = undefined;
      this._startsWith = undefined;
      this._tcp = undefined;
      this._text = undefined;
      this._tmName = undefined;
      this._unnamedQueryParameter = undefined;
      this._userAgentToken = undefined;
      this._username = undefined;
      this._value = undefined;
      this._values = undefined;
      this._version = undefined;
      this._vlan = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._all = value.all;
      this._appService = value.appService;
      this._browserType = value.browserType;
      this._browserVersion = value.browserVersion;
      this._caseInsensitive = value.caseInsensitive;
      this._caseSensitive = value.caseSensitive;
      this._cipher = value.cipher;
      this._cipherBits = value.cipherBits;
      this._clientAccepted = value.clientAccepted;
      this._clientSsl = value.clientSsl;
      this._code = value.code;
      this._commonName = value.commonName;
      this._contains = value.contains;
      this._continent = value.continent;
      this._countryCode = value.countryCode;
      this._countryName = value.countryName;
      this._cpuUsage = value.cpuUsage;
      this._datagroup = value.datagroup;
      this._deviceMake = value.deviceMake;
      this._deviceModel = value.deviceModel;
      this._domain = value.domain;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._exists = value.exists;
      this._expiry = value.expiry;
      this._extension = value.extension;
      this._external = value.external;
      this._geoip = value.geoip;
      this._greater = value.greater;
      this._greaterOrEqual = value.greaterOrEqual;
      this._host = value.host;
      this._httpBasicAuth = value.httpBasicAuth;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._httpHost = value.httpHost;
      this._httpMethod = value.httpMethod;
      this._httpReferer = value.httpReferer;
      this._httpSetCookie = value.httpSetCookie;
      this._httpStatus = value.httpStatus;
      this._httpUri = value.httpUri;
      this._httpUserAgent = value.httpUserAgent;
      this._httpVersion = value.httpVersion;
      this._index = value.index;
      this._internal = value.internal;
      this._isp = value.isp;
      this._last15Secs = value.last15Secs;
      this._last1Min = value.last1Min;
      this._last5Mins = value.last5Mins;
      this._less = value.less;
      this._lessOrEqual = value.lessOrEqual;
      this._local = value.local;
      this._major = value.major;
      this._matches = value.matches;
      this._minor = value.minor;
      this._missing = value.missing;
      this._mss = value.mss;
      this._not = value.not;
      this._org = value.org;
      this._password = value.password;
      this._path = value.path;
      this._pathSegment = value.pathSegment;
      this._port = value.port;
      this._present = value.present;
      this._protocol = value.protocol;
      this._queryParameter = value.queryParameter;
      this._queryString = value.queryString;
      this._regionCode = value.regionCode;
      this._regionName = value.regionName;
      this._remote = value.remote;
      this._request = value.request;
      this._response = value.response;
      this._routeDomain = value.routeDomain;
      this._rtt = value.rtt;
      this._scheme = value.scheme;
      this._serverName = value.serverName;
      this._sslCert = value.sslCert;
      this._sslClientHello = value.sslClientHello;
      this._sslExtension = value.sslExtension;
      this._sslServerHandshake = value.sslServerHandshake;
      this._sslServerHello = value.sslServerHello;
      this._startsWith = value.startsWith;
      this._tcp = value.tcp;
      this._text = value.text;
      this._tmName = value.tmName;
      this._unnamedQueryParameter = value.unnamedQueryParameter;
      this._userAgentToken = value.userAgentToken;
      this._username = value.username;
      this._value = value.value;
      this._values = value.values;
      this._version = value.version;
      this._vlan = value.vlan;
      this._vlanId = value.vlanId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: boolean | cdktf.IResolvable; 
  public get address() {
    return this.getBooleanAttribute('address');
  }
  public set address(value: boolean | cdktf.IResolvable) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // app_service - computed: true, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // browser_type - computed: true, optional: true, required: false
  private _browserType?: boolean | cdktf.IResolvable; 
  public get browserType() {
    return this.getBooleanAttribute('browser_type');
  }
  public set browserType(value: boolean | cdktf.IResolvable) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }

  // browser_version - computed: true, optional: true, required: false
  private _browserVersion?: boolean | cdktf.IResolvable; 
  public get browserVersion() {
    return this.getBooleanAttribute('browser_version');
  }
  public set browserVersion(value: boolean | cdktf.IResolvable) {
    this._browserVersion = value;
  }
  public resetBrowserVersion() {
    this._browserVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVersionInput() {
    return this._browserVersion;
  }

  // case_insensitive - computed: true, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: boolean | cdktf.IResolvable; 
  public get cipher() {
    return this.getBooleanAttribute('cipher');
  }
  public set cipher(value: boolean | cdktf.IResolvable) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // cipher_bits - computed: true, optional: true, required: false
  private _cipherBits?: boolean | cdktf.IResolvable; 
  public get cipherBits() {
    return this.getBooleanAttribute('cipher_bits');
  }
  public set cipherBits(value: boolean | cdktf.IResolvable) {
    this._cipherBits = value;
  }
  public resetCipherBits() {
    this._cipherBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherBitsInput() {
    return this._cipherBits;
  }

  // client_accepted - computed: true, optional: true, required: false
  private _clientAccepted?: boolean | cdktf.IResolvable; 
  public get clientAccepted() {
    return this.getBooleanAttribute('client_accepted');
  }
  public set clientAccepted(value: boolean | cdktf.IResolvable) {
    this._clientAccepted = value;
  }
  public resetClientAccepted() {
    this._clientAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAcceptedInput() {
    return this._clientAccepted;
  }

  // client_ssl - computed: true, optional: true, required: false
  private _clientSsl?: boolean | cdktf.IResolvable; 
  public get clientSsl() {
    return this.getBooleanAttribute('client_ssl');
  }
  public set clientSsl(value: boolean | cdktf.IResolvable) {
    this._clientSsl = value;
  }
  public resetClientSsl() {
    this._clientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslInput() {
    return this._clientSsl;
  }

  // code - computed: true, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: boolean | cdktf.IResolvable; 
  public get commonName() {
    return this.getBooleanAttribute('common_name');
  }
  public set commonName(value: boolean | cdktf.IResolvable) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // contains - computed: true, optional: true, required: false
  private _contains?: boolean | cdktf.IResolvable; 
  public get contains() {
    return this.getBooleanAttribute('contains');
  }
  public set contains(value: boolean | cdktf.IResolvable) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // continent - computed: true, optional: true, required: false
  private _continent?: boolean | cdktf.IResolvable; 
  public get continent() {
    return this.getBooleanAttribute('continent');
  }
  public set continent(value: boolean | cdktf.IResolvable) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: boolean | cdktf.IResolvable; 
  public get countryCode() {
    return this.getBooleanAttribute('country_code');
  }
  public set countryCode(value: boolean | cdktf.IResolvable) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // country_name - computed: true, optional: true, required: false
  private _countryName?: boolean | cdktf.IResolvable; 
  public get countryName() {
    return this.getBooleanAttribute('country_name');
  }
  public set countryName(value: boolean | cdktf.IResolvable) {
    this._countryName = value;
  }
  public resetCountryName() {
    this._countryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryNameInput() {
    return this._countryName;
  }

  // cpu_usage - computed: true, optional: true, required: false
  private _cpuUsage?: boolean | cdktf.IResolvable; 
  public get cpuUsage() {
    return this.getBooleanAttribute('cpu_usage');
  }
  public set cpuUsage(value: boolean | cdktf.IResolvable) {
    this._cpuUsage = value;
  }
  public resetCpuUsage() {
    this._cpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage;
  }

  // datagroup - computed: false, optional: true, required: false
  private _datagroup?: string; 
  public get datagroup() {
    return this.getStringAttribute('datagroup');
  }
  public set datagroup(value: string) {
    this._datagroup = value;
  }
  public resetDatagroup() {
    this._datagroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datagroupInput() {
    return this._datagroup;
  }

  // device_make - computed: true, optional: true, required: false
  private _deviceMake?: boolean | cdktf.IResolvable; 
  public get deviceMake() {
    return this.getBooleanAttribute('device_make');
  }
  public set deviceMake(value: boolean | cdktf.IResolvable) {
    this._deviceMake = value;
  }
  public resetDeviceMake() {
    this._deviceMake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceMakeInput() {
    return this._deviceMake;
  }

  // device_model - computed: true, optional: true, required: false
  private _deviceModel?: boolean | cdktf.IResolvable; 
  public get deviceModel() {
    return this.getBooleanAttribute('device_model');
  }
  public set deviceModel(value: boolean | cdktf.IResolvable) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: boolean | cdktf.IResolvable; 
  public get domain() {
    return this.getBooleanAttribute('domain');
  }
  public set domain(value: boolean | cdktf.IResolvable) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ends_with - computed: true, optional: true, required: false
  private _endsWith?: boolean | cdktf.IResolvable; 
  public get endsWith() {
    return this.getBooleanAttribute('ends_with');
  }
  public set endsWith(value: boolean | cdktf.IResolvable) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: true, optional: true, required: false
  private _equals?: boolean | cdktf.IResolvable; 
  public get equalTo() {
    return this.getBooleanAttribute('equals');
  }
  public set equalTo(value: boolean | cdktf.IResolvable) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // exists - computed: true, optional: true, required: false
  private _exists?: boolean | cdktf.IResolvable; 
  public get exists() {
    return this.getBooleanAttribute('exists');
  }
  public set exists(value: boolean | cdktf.IResolvable) {
    this._exists = value;
  }
  public resetExists() {
    this._exists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existsInput() {
    return this._exists;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: boolean | cdktf.IResolvable; 
  public get expiry() {
    return this.getBooleanAttribute('expiry');
  }
  public set expiry(value: boolean | cdktf.IResolvable) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // extension - computed: true, optional: true, required: false
  private _extension?: boolean | cdktf.IResolvable; 
  public get extension() {
    return this.getBooleanAttribute('extension');
  }
  public set extension(value: boolean | cdktf.IResolvable) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // geoip - computed: true, optional: true, required: false
  private _geoip?: boolean | cdktf.IResolvable; 
  public get geoip() {
    return this.getBooleanAttribute('geoip');
  }
  public set geoip(value: boolean | cdktf.IResolvable) {
    this._geoip = value;
  }
  public resetGeoip() {
    this._geoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipInput() {
    return this._geoip;
  }

  // greater - computed: true, optional: true, required: false
  private _greater?: boolean | cdktf.IResolvable; 
  public get greater() {
    return this.getBooleanAttribute('greater');
  }
  public set greater(value: boolean | cdktf.IResolvable) {
    this._greater = value;
  }
  public resetGreater() {
    this._greater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterInput() {
    return this._greater;
  }

  // greater_or_equal - computed: true, optional: true, required: false
  private _greaterOrEqual?: boolean | cdktf.IResolvable; 
  public get greaterOrEqual() {
    return this.getBooleanAttribute('greater_or_equal');
  }
  public set greaterOrEqual(value: boolean | cdktf.IResolvable) {
    this._greaterOrEqual = value;
  }
  public resetGreaterOrEqual() {
    this._greaterOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterOrEqualInput() {
    return this._greaterOrEqual;
  }

  // host - computed: true, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_basic_auth - computed: true, optional: true, required: false
  private _httpBasicAuth?: boolean | cdktf.IResolvable; 
  public get httpBasicAuth() {
    return this.getBooleanAttribute('http_basic_auth');
  }
  public set httpBasicAuth(value: boolean | cdktf.IResolvable) {
    this._httpBasicAuth = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: boolean | cdktf.IResolvable; 
  public get httpCookie() {
    return this.getBooleanAttribute('http_cookie');
  }
  public set httpCookie(value: boolean | cdktf.IResolvable) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: boolean | cdktf.IResolvable; 
  public get httpHeader() {
    return this.getBooleanAttribute('http_header');
  }
  public set httpHeader(value: boolean | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // http_host - computed: true, optional: true, required: false
  private _httpHost?: boolean | cdktf.IResolvable; 
  public get httpHost() {
    return this.getBooleanAttribute('http_host');
  }
  public set httpHost(value: boolean | cdktf.IResolvable) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // http_method - computed: true, optional: true, required: false
  private _httpMethod?: boolean | cdktf.IResolvable; 
  public get httpMethod() {
    return this.getBooleanAttribute('http_method');
  }
  public set httpMethod(value: boolean | cdktf.IResolvable) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_referer - computed: true, optional: true, required: false
  private _httpReferer?: boolean | cdktf.IResolvable; 
  public get httpReferer() {
    return this.getBooleanAttribute('http_referer');
  }
  public set httpReferer(value: boolean | cdktf.IResolvable) {
    this._httpReferer = value;
  }
  public resetHttpReferer() {
    this._httpReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererInput() {
    return this._httpReferer;
  }

  // http_set_cookie - computed: true, optional: true, required: false
  private _httpSetCookie?: boolean | cdktf.IResolvable; 
  public get httpSetCookie() {
    return this.getBooleanAttribute('http_set_cookie');
  }
  public set httpSetCookie(value: boolean | cdktf.IResolvable) {
    this._httpSetCookie = value;
  }
  public resetHttpSetCookie() {
    this._httpSetCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSetCookieInput() {
    return this._httpSetCookie;
  }

  // http_status - computed: true, optional: true, required: false
  private _httpStatus?: boolean | cdktf.IResolvable; 
  public get httpStatus() {
    return this.getBooleanAttribute('http_status');
  }
  public set httpStatus(value: boolean | cdktf.IResolvable) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // http_uri - computed: true, optional: true, required: false
  private _httpUri?: boolean | cdktf.IResolvable; 
  public get httpUri() {
    return this.getBooleanAttribute('http_uri');
  }
  public set httpUri(value: boolean | cdktf.IResolvable) {
    this._httpUri = value;
  }
  public resetHttpUri() {
    this._httpUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriInput() {
    return this._httpUri;
  }

  // http_user_agent - computed: true, optional: true, required: false
  private _httpUserAgent?: boolean | cdktf.IResolvable; 
  public get httpUserAgent() {
    return this.getBooleanAttribute('http_user_agent');
  }
  public set httpUserAgent(value: boolean | cdktf.IResolvable) {
    this._httpUserAgent = value;
  }
  public resetHttpUserAgent() {
    this._httpUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserAgentInput() {
    return this._httpUserAgent;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: boolean | cdktf.IResolvable; 
  public get httpVersion() {
    return this.getBooleanAttribute('http_version');
  }
  public set httpVersion(value: boolean | cdktf.IResolvable) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // isp - computed: true, optional: true, required: false
  private _isp?: boolean | cdktf.IResolvable; 
  public get isp() {
    return this.getBooleanAttribute('isp');
  }
  public set isp(value: boolean | cdktf.IResolvable) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // last_15secs - computed: true, optional: true, required: false
  private _last15Secs?: boolean | cdktf.IResolvable; 
  public get last15Secs() {
    return this.getBooleanAttribute('last_15secs');
  }
  public set last15Secs(value: boolean | cdktf.IResolvable) {
    this._last15Secs = value;
  }
  public resetLast15Secs() {
    this._last15Secs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get last15SecsInput() {
    return this._last15Secs;
  }

  // last_1min - computed: true, optional: true, required: false
  private _last1Min?: boolean | cdktf.IResolvable; 
  public get last1Min() {
    return this.getBooleanAttribute('last_1min');
  }
  public set last1Min(value: boolean | cdktf.IResolvable) {
    this._last1Min = value;
  }
  public resetLast1Min() {
    this._last1Min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get last1MinInput() {
    return this._last1Min;
  }

  // last_5mins - computed: true, optional: true, required: false
  private _last5Mins?: boolean | cdktf.IResolvable; 
  public get last5Mins() {
    return this.getBooleanAttribute('last_5mins');
  }
  public set last5Mins(value: boolean | cdktf.IResolvable) {
    this._last5Mins = value;
  }
  public resetLast5Mins() {
    this._last5Mins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get last5MinsInput() {
    return this._last5Mins;
  }

  // less - computed: true, optional: true, required: false
  private _less?: boolean | cdktf.IResolvable; 
  public get less() {
    return this.getBooleanAttribute('less');
  }
  public set less(value: boolean | cdktf.IResolvable) {
    this._less = value;
  }
  public resetLess() {
    this._less = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessInput() {
    return this._less;
  }

  // less_or_equal - computed: true, optional: true, required: false
  private _lessOrEqual?: boolean | cdktf.IResolvable; 
  public get lessOrEqual() {
    return this.getBooleanAttribute('less_or_equal');
  }
  public set lessOrEqual(value: boolean | cdktf.IResolvable) {
    this._lessOrEqual = value;
  }
  public resetLessOrEqual() {
    this._lessOrEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessOrEqualInput() {
    return this._lessOrEqual;
  }

  // local - computed: true, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // major - computed: true, optional: true, required: false
  private _major?: boolean | cdktf.IResolvable; 
  public get major() {
    return this.getBooleanAttribute('major');
  }
  public set major(value: boolean | cdktf.IResolvable) {
    this._major = value;
  }
  public resetMajor() {
    this._major = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorInput() {
    return this._major;
  }

  // matches - computed: true, optional: true, required: false
  private _matches?: boolean | cdktf.IResolvable; 
  public get matches() {
    return this.getBooleanAttribute('matches');
  }
  public set matches(value: boolean | cdktf.IResolvable) {
    this._matches = value;
  }
  public resetMatches() {
    this._matches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches;
  }

  // minor - computed: true, optional: true, required: false
  private _minor?: boolean | cdktf.IResolvable; 
  public get minor() {
    return this.getBooleanAttribute('minor');
  }
  public set minor(value: boolean | cdktf.IResolvable) {
    this._minor = value;
  }
  public resetMinor() {
    this._minor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorInput() {
    return this._minor;
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: boolean | cdktf.IResolvable; 
  public get missing() {
    return this.getBooleanAttribute('missing');
  }
  public set missing(value: boolean | cdktf.IResolvable) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }

  // mss - computed: true, optional: true, required: false
  private _mss?: boolean | cdktf.IResolvable; 
  public get mss() {
    return this.getBooleanAttribute('mss');
  }
  public set mss(value: boolean | cdktf.IResolvable) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // not - computed: true, optional: true, required: false
  private _not?: boolean | cdktf.IResolvable; 
  public get not() {
    return this.getBooleanAttribute('not');
  }
  public set not(value: boolean | cdktf.IResolvable) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // org - computed: true, optional: true, required: false
  private _org?: boolean | cdktf.IResolvable; 
  public get org() {
    return this.getBooleanAttribute('org');
  }
  public set org(value: boolean | cdktf.IResolvable) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // password - computed: true, optional: true, required: false
  private _password?: boolean | cdktf.IResolvable; 
  public get password() {
    return this.getBooleanAttribute('password');
  }
  public set password(value: boolean | cdktf.IResolvable) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path - computed: true, optional: true, required: false
  private _path?: boolean | cdktf.IResolvable; 
  public get path() {
    return this.getBooleanAttribute('path');
  }
  public set path(value: boolean | cdktf.IResolvable) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_segment - computed: true, optional: true, required: false
  private _pathSegment?: boolean | cdktf.IResolvable; 
  public get pathSegment() {
    return this.getBooleanAttribute('path_segment');
  }
  public set pathSegment(value: boolean | cdktf.IResolvable) {
    this._pathSegment = value;
  }
  public resetPathSegment() {
    this._pathSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathSegmentInput() {
    return this._pathSegment;
  }

  // port - computed: true, optional: true, required: false
  private _port?: boolean | cdktf.IResolvable; 
  public get port() {
    return this.getBooleanAttribute('port');
  }
  public set port(value: boolean | cdktf.IResolvable) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // present - computed: true, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: boolean | cdktf.IResolvable; 
  public get protocol() {
    return this.getBooleanAttribute('protocol');
  }
  public set protocol(value: boolean | cdktf.IResolvable) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query_parameter - computed: true, optional: true, required: false
  private _queryParameter?: boolean | cdktf.IResolvable; 
  public get queryParameter() {
    return this.getBooleanAttribute('query_parameter');
  }
  public set queryParameter(value: boolean | cdktf.IResolvable) {
    this._queryParameter = value;
  }
  public resetQueryParameter() {
    this._queryParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: boolean | cdktf.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktf.IResolvable) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // region_code - computed: true, optional: true, required: false
  private _regionCode?: boolean | cdktf.IResolvable; 
  public get regionCode() {
    return this.getBooleanAttribute('region_code');
  }
  public set regionCode(value: boolean | cdktf.IResolvable) {
    this._regionCode = value;
  }
  public resetRegionCode() {
    this._regionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: boolean | cdktf.IResolvable; 
  public get regionName() {
    return this.getBooleanAttribute('region_name');
  }
  public set regionName(value: boolean | cdktf.IResolvable) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // remote - computed: true, optional: true, required: false
  private _remote?: boolean | cdktf.IResolvable; 
  public get remote() {
    return this.getBooleanAttribute('remote');
  }
  public set remote(value: boolean | cdktf.IResolvable) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // request - computed: true, optional: true, required: false
  private _request?: boolean | cdktf.IResolvable; 
  public get request() {
    return this.getBooleanAttribute('request');
  }
  public set request(value: boolean | cdktf.IResolvable) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: true, optional: true, required: false
  private _response?: boolean | cdktf.IResolvable; 
  public get response() {
    return this.getBooleanAttribute('response');
  }
  public set response(value: boolean | cdktf.IResolvable) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // route_domain - computed: true, optional: true, required: false
  private _routeDomain?: boolean | cdktf.IResolvable; 
  public get routeDomain() {
    return this.getBooleanAttribute('route_domain');
  }
  public set routeDomain(value: boolean | cdktf.IResolvable) {
    this._routeDomain = value;
  }
  public resetRouteDomain() {
    this._routeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDomainInput() {
    return this._routeDomain;
  }

  // rtt - computed: true, optional: true, required: false
  private _rtt?: boolean | cdktf.IResolvable; 
  public get rtt() {
    return this.getBooleanAttribute('rtt');
  }
  public set rtt(value: boolean | cdktf.IResolvable) {
    this._rtt = value;
  }
  public resetRtt() {
    this._rtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttInput() {
    return this._rtt;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: boolean | cdktf.IResolvable; 
  public get scheme() {
    return this.getBooleanAttribute('scheme');
  }
  public set scheme(value: boolean | cdktf.IResolvable) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: boolean | cdktf.IResolvable; 
  public get serverName() {
    return this.getBooleanAttribute('server_name');
  }
  public set serverName(value: boolean | cdktf.IResolvable) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_cert - computed: true, optional: true, required: false
  private _sslCert?: boolean | cdktf.IResolvable; 
  public get sslCert() {
    return this.getBooleanAttribute('ssl_cert');
  }
  public set sslCert(value: boolean | cdktf.IResolvable) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_client_hello - computed: true, optional: true, required: false
  private _sslClientHello?: boolean | cdktf.IResolvable; 
  public get sslClientHello() {
    return this.getBooleanAttribute('ssl_client_hello');
  }
  public set sslClientHello(value: boolean | cdktf.IResolvable) {
    this._sslClientHello = value;
  }
  public resetSslClientHello() {
    this._sslClientHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientHelloInput() {
    return this._sslClientHello;
  }

  // ssl_extension - computed: true, optional: true, required: false
  private _sslExtension?: boolean | cdktf.IResolvable; 
  public get sslExtension() {
    return this.getBooleanAttribute('ssl_extension');
  }
  public set sslExtension(value: boolean | cdktf.IResolvable) {
    this._sslExtension = value;
  }
  public resetSslExtension() {
    this._sslExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExtensionInput() {
    return this._sslExtension;
  }

  // ssl_server_handshake - computed: true, optional: true, required: false
  private _sslServerHandshake?: boolean | cdktf.IResolvable; 
  public get sslServerHandshake() {
    return this.getBooleanAttribute('ssl_server_handshake');
  }
  public set sslServerHandshake(value: boolean | cdktf.IResolvable) {
    this._sslServerHandshake = value;
  }
  public resetSslServerHandshake() {
    this._sslServerHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHandshakeInput() {
    return this._sslServerHandshake;
  }

  // ssl_server_hello - computed: true, optional: true, required: false
  private _sslServerHello?: boolean | cdktf.IResolvable; 
  public get sslServerHello() {
    return this.getBooleanAttribute('ssl_server_hello');
  }
  public set sslServerHello(value: boolean | cdktf.IResolvable) {
    this._sslServerHello = value;
  }
  public resetSslServerHello() {
    this._sslServerHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHelloInput() {
    return this._sslServerHello;
  }

  // starts_with - computed: true, optional: true, required: false
  private _startsWith?: boolean | cdktf.IResolvable; 
  public get startsWith() {
    return this.getBooleanAttribute('starts_with');
  }
  public set startsWith(value: boolean | cdktf.IResolvable) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp?: boolean | cdktf.IResolvable; 
  public get tcp() {
    return this.getBooleanAttribute('tcp');
  }
  public set tcp(value: boolean | cdktf.IResolvable) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // text - computed: true, optional: true, required: false
  private _text?: boolean | cdktf.IResolvable; 
  public get text() {
    return this.getBooleanAttribute('text');
  }
  public set text(value: boolean | cdktf.IResolvable) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // tm_name - computed: true, optional: true, required: false
  private _tmName?: string; 
  public get tmName() {
    return this.getStringAttribute('tm_name');
  }
  public set tmName(value: string) {
    this._tmName = value;
  }
  public resetTmName() {
    this._tmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmNameInput() {
    return this._tmName;
  }

  // unnamed_query_parameter - computed: true, optional: true, required: false
  private _unnamedQueryParameter?: boolean | cdktf.IResolvable; 
  public get unnamedQueryParameter() {
    return this.getBooleanAttribute('unnamed_query_parameter');
  }
  public set unnamedQueryParameter(value: boolean | cdktf.IResolvable) {
    this._unnamedQueryParameter = value;
  }
  public resetUnnamedQueryParameter() {
    this._unnamedQueryParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnamedQueryParameterInput() {
    return this._unnamedQueryParameter;
  }

  // user_agent_token - computed: true, optional: true, required: false
  private _userAgentToken?: boolean | cdktf.IResolvable; 
  public get userAgentToken() {
    return this.getBooleanAttribute('user_agent_token');
  }
  public set userAgentToken(value: boolean | cdktf.IResolvable) {
    this._userAgentToken = value;
  }
  public resetUserAgentToken() {
    this._userAgentToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentTokenInput() {
    return this._userAgentToken;
  }

  // username - computed: true, optional: true, required: false
  private _username?: boolean | cdktf.IResolvable; 
  public get username() {
    return this.getBooleanAttribute('username');
  }
  public set username(value: boolean | cdktf.IResolvable) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // value - computed: true, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: true, optional: true, required: false
  private _version?: boolean | cdktf.IResolvable; 
  public get version() {
    return this.getBooleanAttribute('version');
  }
  public set version(value: boolean | cdktf.IResolvable) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: boolean | cdktf.IResolvable; 
  public get vlan() {
    return this.getBooleanAttribute('vlan');
  }
  public set vlan(value: boolean | cdktf.IResolvable) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: boolean | cdktf.IResolvable; 
  public get vlanId() {
    return this.getBooleanAttribute('vlan_id');
  }
  public set vlanId(value: boolean | cdktf.IResolvable) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class LtmPolicyRuleConditionList extends cdktf.ComplexList {
  public internalValue? : LtmPolicyRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): LtmPolicyRuleConditionOutputReference {
    return new LtmPolicyRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtmPolicyRule {
  /**
  * Specifies descriptive text that identifies the irule attached to policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#description LtmPolicy#description}
  */
  readonly description?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#name LtmPolicy#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#action LtmPolicy#action}
  */
  readonly action?: LtmPolicyRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#condition LtmPolicy#condition}
  */
  readonly condition?: LtmPolicyRuleCondition[] | cdktf.IResolvable;
}

export function ltmPolicyRuleToTerraform(struct?: LtmPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(ltmPolicyRuleActionToTerraform, true)(struct!.action),
    condition: cdktf.listMapper(ltmPolicyRuleConditionToTerraform, true)(struct!.condition),
  }
}


export function ltmPolicyRuleToHclTerraform(struct?: LtmPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(ltmPolicyRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "LtmPolicyRuleActionList",
    },
    condition: {
      value: cdktf.listMapperHcl(ltmPolicyRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "LtmPolicyRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // action - computed: false, optional: true, required: false
  private _action = new LtmPolicyRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: LtmPolicyRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new LtmPolicyRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: LtmPolicyRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class LtmPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : LtmPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): LtmPolicyRuleOutputReference {
    return new LtmPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy bigip_ltm_policy}
*/
export class LtmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmPolicy to import
  * @param importFromId The id of the existing LtmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_policy bigip_ltm_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LtmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_policy',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controls = config.controls;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._publishedCopy = config.publishedCopy;
    this._requires = config.requires;
    this._strategy = config.strategy;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controls - computed: false, optional: true, required: false
  private _controls?: string[]; 
  public get controls() {
    return cdktf.Fn.tolist(this.getListAttribute('controls'));
  }
  public set controls(value: string[]) {
    this._controls = value;
  }
  public resetControls() {
    this._controls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // published_copy - computed: false, optional: true, required: false
  private _publishedCopy?: string; 
  public get publishedCopy() {
    return this.getStringAttribute('published_copy');
  }
  public set publishedCopy(value: string) {
    this._publishedCopy = value;
  }
  public resetPublishedCopy() {
    this._publishedCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedCopyInput() {
    return this._publishedCopy;
  }

  // requires - computed: false, optional: true, required: false
  private _requires?: string[]; 
  public get requires() {
    return cdktf.Fn.tolist(this.getListAttribute('requires'));
  }
  public set requires(value: string[]) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new LtmPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: LtmPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      controls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controls),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      published_copy: cdktf.stringToTerraform(this._publishedCopy),
      requires: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requires),
      strategy: cdktf.stringToTerraform(this._strategy),
      rule: cdktf.listMapper(ltmPolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      published_copy: {
        value: cdktf.stringToHclTerraform(this._publishedCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requires),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(ltmPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtmPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
