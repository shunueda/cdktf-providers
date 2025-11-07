// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyOptionsPolicyStatementTermFromRouteFilterAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#accept_reject PolicyOptionsPolicyStatementTermFromRouteFilterAddress#accept_reject}
  */
  readonly acceptReject?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#add__path PolicyOptionsPolicyStatementTermFromRouteFilterAddress#add__path}
  */
  readonly addPath?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter. IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#address PolicyOptionsPolicyStatementTermFromRouteFilterAddress#address}
  */
  readonly address?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#address__mask PolicyOptionsPolicyStatementTermFromRouteFilterAddress#address__mask}
  */
  readonly addressMask?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#aggregate__bandwidth PolicyOptionsPolicyStatementTermFromRouteFilterAddress#aggregate__bandwidth}
  */
  readonly aggregateBandwidth?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#aigp__adjust PolicyOptionsPolicyStatementTermFromRouteFilterAddress#aigp__adjust}
  */
  readonly aigpAdjust?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#aigp__originate PolicyOptionsPolicyStatementTermFromRouteFilterAddress#aigp__originate}
  */
  readonly aigpOriginate?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#analyze PolicyOptionsPolicyStatementTermFromRouteFilterAddress#analyze}
  */
  readonly analyze?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#apply__advanced PolicyOptionsPolicyStatementTermFromRouteFilterAddress#apply__advanced}
  */
  readonly applyAdvanced?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#as__path__expand PolicyOptionsPolicyStatementTermFromRouteFilterAddress#as__path__expand}
  */
  readonly asPathExpand?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#as__path__prepend PolicyOptionsPolicyStatementTermFromRouteFilterAddress#as__path__prepend}
  */
  readonly asPathPrepend?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#bgp__output__queue__priority PolicyOptionsPolicyStatementTermFromRouteFilterAddress#bgp__output__queue__priority}
  */
  readonly bgpOutputQueuePriority?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#class PolicyOptionsPolicyStatementTermFromRouteFilterAddress#class}
  */
  readonly class?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#color PolicyOptionsPolicyStatementTermFromRouteFilterAddress#color}
  */
  readonly color?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#color2 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#color2}
  */
  readonly color2?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#community PolicyOptionsPolicyStatementTermFromRouteFilterAddress#community}
  */
  readonly community?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#cos__next__hop__map PolicyOptionsPolicyStatementTermFromRouteFilterAddress#cos__next__hop__map}
  */
  readonly cosNextHopMap?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#damping PolicyOptionsPolicyStatementTermFromRouteFilterAddress#damping}
  */
  readonly damping?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#default__action PolicyOptionsPolicyStatementTermFromRouteFilterAddress#default__action}
  */
  readonly defaultAction?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#destination__class PolicyOptionsPolicyStatementTermFromRouteFilterAddress#destination__class}
  */
  readonly destinationClass?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#dynamic__tunnel__attributes PolicyOptionsPolicyStatementTermFromRouteFilterAddress#dynamic__tunnel__attributes}
  */
  readonly dynamicTunnelAttributes?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#exact PolicyOptionsPolicyStatementTermFromRouteFilterAddress#exact}
  */
  readonly exact?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#external PolicyOptionsPolicyStatementTermFromRouteFilterAddress#external}
  */
  readonly external?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#forwarding__class PolicyOptionsPolicyStatementTermFromRouteFilterAddress#forwarding__class}
  */
  readonly forwardingClass?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#get__route__range PolicyOptionsPolicyStatementTermFromRouteFilterAddress#get__route__range}
  */
  readonly fetchRouteRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#id PolicyOptionsPolicyStatementTermFromRouteFilterAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#install__nexthop PolicyOptionsPolicyStatementTermFromRouteFilterAddress#install__nexthop}
  */
  readonly installNexthop?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#install__to__fib PolicyOptionsPolicyStatementTermFromRouteFilterAddress#install__to__fib}
  */
  readonly installToFib?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#label PolicyOptionsPolicyStatementTermFromRouteFilterAddress#label}
  */
  readonly label?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#label__allocation PolicyOptionsPolicyStatementTermFromRouteFilterAddress#label__allocation}
  */
  readonly labelAllocation?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#label__allocation__fallback__reject PolicyOptionsPolicyStatementTermFromRouteFilterAddress#label__allocation__fallback__reject}
  */
  readonly labelAllocationFallbackReject?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#limit__bandwidth PolicyOptionsPolicyStatementTermFromRouteFilterAddress#limit__bandwidth}
  */
  readonly limitBandwidth?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#load__balance PolicyOptionsPolicyStatementTermFromRouteFilterAddress#load__balance}
  */
  readonly loadBalance?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#local__preference PolicyOptionsPolicyStatementTermFromRouteFilterAddress#local__preference}
  */
  readonly localPreference?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#longer PolicyOptionsPolicyStatementTermFromRouteFilterAddress#longer}
  */
  readonly longer?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#map__to__interface PolicyOptionsPolicyStatementTermFromRouteFilterAddress#map__to__interface}
  */
  readonly mapToInterface?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#metric PolicyOptionsPolicyStatementTermFromRouteFilterAddress#metric}
  */
  readonly metric?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#metric2 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#metric2}
  */
  readonly metric2?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#metric3 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#metric3}
  */
  readonly metric3?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#metric4 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#metric4}
  */
  readonly metric4?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#mhop__bfd__port PolicyOptionsPolicyStatementTermFromRouteFilterAddress#mhop__bfd__port}
  */
  readonly mhopBfdPort?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#multipath__resolve PolicyOptionsPolicyStatementTermFromRouteFilterAddress#multipath__resolve}
  */
  readonly multipathResolve?: string;
  /**
  * xpath is: config.Groups.V_policy__statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#name PolicyOptionsPolicyStatementTermFromRouteFilterAddress#name}
  */
  readonly name?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#name__1 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#name__1}
  */
  readonly name1?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#next PolicyOptionsPolicyStatementTermFromRouteFilterAddress#next}
  */
  readonly next?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#next__hop PolicyOptionsPolicyStatementTermFromRouteFilterAddress#next__hop}
  */
  readonly nextHop?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#no__backup PolicyOptionsPolicyStatementTermFromRouteFilterAddress#no__backup}
  */
  readonly noBackup?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#no__entropy__label__capability PolicyOptionsPolicyStatementTermFromRouteFilterAddress#no__entropy__label__capability}
  */
  readonly noEntropyLabelCapability?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#no__route__localize PolicyOptionsPolicyStatementTermFromRouteFilterAddress#no__route__localize}
  */
  readonly noRouteLocalize?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#origin PolicyOptionsPolicyStatementTermFromRouteFilterAddress#origin}
  */
  readonly origin?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#orlonger PolicyOptionsPolicyStatementTermFromRouteFilterAddress#orlonger}
  */
  readonly orlonger?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#p2mp__lsp__root PolicyOptionsPolicyStatementTermFromRouteFilterAddress#p2mp__lsp__root}
  */
  readonly p2MpLspRoot?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#preference PolicyOptionsPolicyStatementTermFromRouteFilterAddress#preference}
  */
  readonly preference?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#preference2 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#preference2}
  */
  readonly preference2?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#prefix__length__range PolicyOptionsPolicyStatementTermFromRouteFilterAddress#prefix__length__range}
  */
  readonly prefixLengthRange?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#prefix__segment PolicyOptionsPolicyStatementTermFromRouteFilterAddress#prefix__segment}
  */
  readonly prefixSegment?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#priority PolicyOptionsPolicyStatementTermFromRouteFilterAddress#priority}
  */
  readonly priority?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#resolution__map PolicyOptionsPolicyStatementTermFromRouteFilterAddress#resolution__map}
  */
  readonly resolutionMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#resource_name PolicyOptionsPolicyStatementTermFromRouteFilterAddress#resource_name}
  */
  readonly resourceName: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#selected__mldp__egress PolicyOptionsPolicyStatementTermFromRouteFilterAddress#selected__mldp__egress}
  */
  readonly selectedMldpEgress?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#source__class PolicyOptionsPolicyStatementTermFromRouteFilterAddress#source__class}
  */
  readonly sourceClass?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#sr__te__template PolicyOptionsPolicyStatementTermFromRouteFilterAddress#sr__te__template}
  */
  readonly srTeTemplate?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#ssm__source PolicyOptionsPolicyStatementTermFromRouteFilterAddress#ssm__source}
  */
  readonly ssmSource?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#tag PolicyOptionsPolicyStatementTermFromRouteFilterAddress#tag}
  */
  readonly tag?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#tag2 PolicyOptionsPolicyStatementTermFromRouteFilterAddress#tag2}
  */
  readonly tag2?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#through PolicyOptionsPolicyStatementTermFromRouteFilterAddress#through}
  */
  readonly through?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#trace PolicyOptionsPolicyStatementTermFromRouteFilterAddress#trace}
  */
  readonly trace?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#tunnel__attribute PolicyOptionsPolicyStatementTermFromRouteFilterAddress#tunnel__attribute}
  */
  readonly tunnelAttribute?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#tunnel__end__point__address PolicyOptionsPolicyStatementTermFromRouteFilterAddress#tunnel__end__point__address}
  */
  readonly tunnelEndPointAddress?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#upto PolicyOptionsPolicyStatementTermFromRouteFilterAddress#upto}
  */
  readonly upto?: string;
  /**
  * xpath is: config.Groups.V_policy__statement.V_term.V_route__filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#validation__state PolicyOptionsPolicyStatementTermFromRouteFilterAddress#validation__state}
  */
  readonly validationState?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address junos-vsrx_Policy__OptionsPolicy__StatementTermFromRoute__FilterAddress}
*/
export class PolicyOptionsPolicyStatementTermFromRouteFilterAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_Policy__OptionsPolicy__StatementTermFromRoute__FilterAddress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyOptionsPolicyStatementTermFromRouteFilterAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyOptionsPolicyStatementTermFromRouteFilterAddress to import
  * @param importFromId The id of the existing PolicyOptionsPolicyStatementTermFromRouteFilterAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyOptionsPolicyStatementTermFromRouteFilterAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_Policy__OptionsPolicy__StatementTermFromRoute__FilterAddress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/policy__options_policy__statement_term_from_route__filter_address junos-vsrx_Policy__OptionsPolicy__StatementTermFromRoute__FilterAddress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyOptionsPolicyStatementTermFromRouteFilterAddressConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyOptionsPolicyStatementTermFromRouteFilterAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_Policy__OptionsPolicy__StatementTermFromRoute__FilterAddress',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptReject = config.acceptReject;
    this._addPath = config.addPath;
    this._address = config.address;
    this._addressMask = config.addressMask;
    this._aggregateBandwidth = config.aggregateBandwidth;
    this._aigpAdjust = config.aigpAdjust;
    this._aigpOriginate = config.aigpOriginate;
    this._analyze = config.analyze;
    this._applyAdvanced = config.applyAdvanced;
    this._asPathExpand = config.asPathExpand;
    this._asPathPrepend = config.asPathPrepend;
    this._bgpOutputQueuePriority = config.bgpOutputQueuePriority;
    this._class = config.class;
    this._color = config.color;
    this._color2 = config.color2;
    this._community = config.community;
    this._cosNextHopMap = config.cosNextHopMap;
    this._damping = config.damping;
    this._defaultAction = config.defaultAction;
    this._destinationClass = config.destinationClass;
    this._dynamicTunnelAttributes = config.dynamicTunnelAttributes;
    this._exact = config.exact;
    this._external = config.external;
    this._forwardingClass = config.forwardingClass;
    this._getRouteRange = config.fetchRouteRange;
    this._id = config.id;
    this._installNexthop = config.installNexthop;
    this._installToFib = config.installToFib;
    this._label = config.label;
    this._labelAllocation = config.labelAllocation;
    this._labelAllocationFallbackReject = config.labelAllocationFallbackReject;
    this._limitBandwidth = config.limitBandwidth;
    this._loadBalance = config.loadBalance;
    this._localPreference = config.localPreference;
    this._longer = config.longer;
    this._mapToInterface = config.mapToInterface;
    this._metric = config.metric;
    this._metric2 = config.metric2;
    this._metric3 = config.metric3;
    this._metric4 = config.metric4;
    this._mhopBfdPort = config.mhopBfdPort;
    this._multipathResolve = config.multipathResolve;
    this._name = config.name;
    this._name1 = config.name1;
    this._next = config.next;
    this._nextHop = config.nextHop;
    this._noBackup = config.noBackup;
    this._noEntropyLabelCapability = config.noEntropyLabelCapability;
    this._noRouteLocalize = config.noRouteLocalize;
    this._origin = config.origin;
    this._orlonger = config.orlonger;
    this._p2MpLspRoot = config.p2MpLspRoot;
    this._preference = config.preference;
    this._preference2 = config.preference2;
    this._prefixLengthRange = config.prefixLengthRange;
    this._prefixSegment = config.prefixSegment;
    this._priority = config.priority;
    this._resolutionMap = config.resolutionMap;
    this._resourceName = config.resourceName;
    this._selectedMldpEgress = config.selectedMldpEgress;
    this._sourceClass = config.sourceClass;
    this._srTeTemplate = config.srTeTemplate;
    this._ssmSource = config.ssmSource;
    this._tag = config.tag;
    this._tag2 = config.tag2;
    this._through = config.through;
    this._trace = config.trace;
    this._tunnelAttribute = config.tunnelAttribute;
    this._tunnelEndPointAddress = config.tunnelEndPointAddress;
    this._upto = config.upto;
    this._validationState = config.validationState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_reject - computed: false, optional: true, required: false
  private _acceptReject?: string; 
  public get acceptReject() {
    return this.getStringAttribute('accept_reject');
  }
  public set acceptReject(value: string) {
    this._acceptReject = value;
  }
  public resetAcceptReject() {
    this._acceptReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRejectInput() {
    return this._acceptReject;
  }

  // add__path - computed: false, optional: true, required: false
  private _addPath?: string; 
  public get addPath() {
    return this.getStringAttribute('add__path');
  }
  public set addPath(value: string) {
    this._addPath = value;
  }
  public resetAddPath() {
    this._addPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address__mask - computed: false, optional: true, required: false
  private _addressMask?: string; 
  public get addressMask() {
    return this.getStringAttribute('address__mask');
  }
  public set addressMask(value: string) {
    this._addressMask = value;
  }
  public resetAddressMask() {
    this._addressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressMaskInput() {
    return this._addressMask;
  }

  // aggregate__bandwidth - computed: false, optional: true, required: false
  private _aggregateBandwidth?: string; 
  public get aggregateBandwidth() {
    return this.getStringAttribute('aggregate__bandwidth');
  }
  public set aggregateBandwidth(value: string) {
    this._aggregateBandwidth = value;
  }
  public resetAggregateBandwidth() {
    this._aggregateBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateBandwidthInput() {
    return this._aggregateBandwidth;
  }

  // aigp__adjust - computed: false, optional: true, required: false
  private _aigpAdjust?: string; 
  public get aigpAdjust() {
    return this.getStringAttribute('aigp__adjust');
  }
  public set aigpAdjust(value: string) {
    this._aigpAdjust = value;
  }
  public resetAigpAdjust() {
    this._aigpAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aigpAdjustInput() {
    return this._aigpAdjust;
  }

  // aigp__originate - computed: false, optional: true, required: false
  private _aigpOriginate?: string; 
  public get aigpOriginate() {
    return this.getStringAttribute('aigp__originate');
  }
  public set aigpOriginate(value: string) {
    this._aigpOriginate = value;
  }
  public resetAigpOriginate() {
    this._aigpOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aigpOriginateInput() {
    return this._aigpOriginate;
  }

  // analyze - computed: false, optional: true, required: false
  private _analyze?: string; 
  public get analyze() {
    return this.getStringAttribute('analyze');
  }
  public set analyze(value: string) {
    this._analyze = value;
  }
  public resetAnalyze() {
    this._analyze = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeInput() {
    return this._analyze;
  }

  // apply__advanced - computed: false, optional: true, required: false
  private _applyAdvanced?: string; 
  public get applyAdvanced() {
    return this.getStringAttribute('apply__advanced');
  }
  public set applyAdvanced(value: string) {
    this._applyAdvanced = value;
  }
  public resetApplyAdvanced() {
    this._applyAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAdvancedInput() {
    return this._applyAdvanced;
  }

  // as__path__expand - computed: false, optional: true, required: false
  private _asPathExpand?: string; 
  public get asPathExpand() {
    return this.getStringAttribute('as__path__expand');
  }
  public set asPathExpand(value: string) {
    this._asPathExpand = value;
  }
  public resetAsPathExpand() {
    this._asPathExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathExpandInput() {
    return this._asPathExpand;
  }

  // as__path__prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: string; 
  public get asPathPrepend() {
    return this.getStringAttribute('as__path__prepend');
  }
  public set asPathPrepend(value: string) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // bgp__output__queue__priority - computed: false, optional: true, required: false
  private _bgpOutputQueuePriority?: string; 
  public get bgpOutputQueuePriority() {
    return this.getStringAttribute('bgp__output__queue__priority');
  }
  public set bgpOutputQueuePriority(value: string) {
    this._bgpOutputQueuePriority = value;
  }
  public resetBgpOutputQueuePriority() {
    this._bgpOutputQueuePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOutputQueuePriorityInput() {
    return this._bgpOutputQueuePriority;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color2 - computed: false, optional: true, required: false
  private _color2?: string; 
  public get color2() {
    return this.getStringAttribute('color2');
  }
  public set color2(value: string) {
    this._color2 = value;
  }
  public resetColor2() {
    this._color2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2Input() {
    return this._color2;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // cos__next__hop__map - computed: false, optional: true, required: false
  private _cosNextHopMap?: string; 
  public get cosNextHopMap() {
    return this.getStringAttribute('cos__next__hop__map');
  }
  public set cosNextHopMap(value: string) {
    this._cosNextHopMap = value;
  }
  public resetCosNextHopMap() {
    this._cosNextHopMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosNextHopMapInput() {
    return this._cosNextHopMap;
  }

  // damping - computed: false, optional: true, required: false
  private _damping?: string; 
  public get damping() {
    return this.getStringAttribute('damping');
  }
  public set damping(value: string) {
    this._damping = value;
  }
  public resetDamping() {
    this._damping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampingInput() {
    return this._damping;
  }

  // default__action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default__action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // destination__class - computed: false, optional: true, required: false
  private _destinationClass?: string; 
  public get destinationClass() {
    return this.getStringAttribute('destination__class');
  }
  public set destinationClass(value: string) {
    this._destinationClass = value;
  }
  public resetDestinationClass() {
    this._destinationClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationClassInput() {
    return this._destinationClass;
  }

  // dynamic__tunnel__attributes - computed: false, optional: true, required: false
  private _dynamicTunnelAttributes?: string; 
  public get dynamicTunnelAttributes() {
    return this.getStringAttribute('dynamic__tunnel__attributes');
  }
  public set dynamicTunnelAttributes(value: string) {
    this._dynamicTunnelAttributes = value;
  }
  public resetDynamicTunnelAttributes() {
    this._dynamicTunnelAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTunnelAttributesInput() {
    return this._dynamicTunnelAttributes;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // forwarding__class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding__class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
  }

  // get__route__range - computed: false, optional: true, required: false
  private _getRouteRange?: string; 
  public get fetchRouteRange() {
    return this.getStringAttribute('get__route__range');
  }
  public set fetchRouteRange(value: string) {
    this._getRouteRange = value;
  }
  public resetFetchRouteRange() {
    this._getRouteRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchRouteRangeInput() {
    return this._getRouteRange;
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

  // install__nexthop - computed: false, optional: true, required: false
  private _installNexthop?: string; 
  public get installNexthop() {
    return this.getStringAttribute('install__nexthop');
  }
  public set installNexthop(value: string) {
    this._installNexthop = value;
  }
  public resetInstallNexthop() {
    this._installNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installNexthopInput() {
    return this._installNexthop;
  }

  // install__to__fib - computed: false, optional: true, required: false
  private _installToFib?: string; 
  public get installToFib() {
    return this.getStringAttribute('install__to__fib');
  }
  public set installToFib(value: string) {
    this._installToFib = value;
  }
  public resetInstallToFib() {
    this._installToFib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installToFibInput() {
    return this._installToFib;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label__allocation - computed: false, optional: true, required: false
  private _labelAllocation?: string; 
  public get labelAllocation() {
    return this.getStringAttribute('label__allocation');
  }
  public set labelAllocation(value: string) {
    this._labelAllocation = value;
  }
  public resetLabelAllocation() {
    this._labelAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAllocationInput() {
    return this._labelAllocation;
  }

  // label__allocation__fallback__reject - computed: false, optional: true, required: false
  private _labelAllocationFallbackReject?: string; 
  public get labelAllocationFallbackReject() {
    return this.getStringAttribute('label__allocation__fallback__reject');
  }
  public set labelAllocationFallbackReject(value: string) {
    this._labelAllocationFallbackReject = value;
  }
  public resetLabelAllocationFallbackReject() {
    this._labelAllocationFallbackReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAllocationFallbackRejectInput() {
    return this._labelAllocationFallbackReject;
  }

  // limit__bandwidth - computed: false, optional: true, required: false
  private _limitBandwidth?: string; 
  public get limitBandwidth() {
    return this.getStringAttribute('limit__bandwidth');
  }
  public set limitBandwidth(value: string) {
    this._limitBandwidth = value;
  }
  public resetLimitBandwidth() {
    this._limitBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBandwidthInput() {
    return this._limitBandwidth;
  }

  // load__balance - computed: false, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load__balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // local__preference - computed: false, optional: true, required: false
  private _localPreference?: string; 
  public get localPreference() {
    return this.getStringAttribute('local__preference');
  }
  public set localPreference(value: string) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // longer - computed: false, optional: true, required: false
  private _longer?: string; 
  public get longer() {
    return this.getStringAttribute('longer');
  }
  public set longer(value: string) {
    this._longer = value;
  }
  public resetLonger() {
    this._longer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longerInput() {
    return this._longer;
  }

  // map__to__interface - computed: false, optional: true, required: false
  private _mapToInterface?: string; 
  public get mapToInterface() {
    return this.getStringAttribute('map__to__interface');
  }
  public set mapToInterface(value: string) {
    this._mapToInterface = value;
  }
  public resetMapToInterface() {
    this._mapToInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapToInterfaceInput() {
    return this._mapToInterface;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric2 - computed: false, optional: true, required: false
  private _metric2?: string; 
  public get metric2() {
    return this.getStringAttribute('metric2');
  }
  public set metric2(value: string) {
    this._metric2 = value;
  }
  public resetMetric2() {
    this._metric2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metric2Input() {
    return this._metric2;
  }

  // metric3 - computed: false, optional: true, required: false
  private _metric3?: string; 
  public get metric3() {
    return this.getStringAttribute('metric3');
  }
  public set metric3(value: string) {
    this._metric3 = value;
  }
  public resetMetric3() {
    this._metric3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metric3Input() {
    return this._metric3;
  }

  // metric4 - computed: false, optional: true, required: false
  private _metric4?: string; 
  public get metric4() {
    return this.getStringAttribute('metric4');
  }
  public set metric4(value: string) {
    this._metric4 = value;
  }
  public resetMetric4() {
    this._metric4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metric4Input() {
    return this._metric4;
  }

  // mhop__bfd__port - computed: false, optional: true, required: false
  private _mhopBfdPort?: string; 
  public get mhopBfdPort() {
    return this.getStringAttribute('mhop__bfd__port');
  }
  public set mhopBfdPort(value: string) {
    this._mhopBfdPort = value;
  }
  public resetMhopBfdPort() {
    this._mhopBfdPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mhopBfdPortInput() {
    return this._mhopBfdPort;
  }

  // multipath__resolve - computed: false, optional: true, required: false
  private _multipathResolve?: string; 
  public get multipathResolve() {
    return this.getStringAttribute('multipath__resolve');
  }
  public set multipathResolve(value: string) {
    this._multipathResolve = value;
  }
  public resetMultipathResolve() {
    this._multipathResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathResolveInput() {
    return this._multipathResolve;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name__1 - computed: false, optional: true, required: false
  private _name1?: string; 
  public get name1() {
    return this.getStringAttribute('name__1');
  }
  public set name1(value: string) {
    this._name1 = value;
  }
  public resetName1() {
    this._name1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get name1Input() {
    return this._name1;
  }

  // next - computed: false, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }

  // next__hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next__hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // no__backup - computed: false, optional: true, required: false
  private _noBackup?: string; 
  public get noBackup() {
    return this.getStringAttribute('no__backup');
  }
  public set noBackup(value: string) {
    this._noBackup = value;
  }
  public resetNoBackup() {
    this._noBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBackupInput() {
    return this._noBackup;
  }

  // no__entropy__label__capability - computed: false, optional: true, required: false
  private _noEntropyLabelCapability?: string; 
  public get noEntropyLabelCapability() {
    return this.getStringAttribute('no__entropy__label__capability');
  }
  public set noEntropyLabelCapability(value: string) {
    this._noEntropyLabelCapability = value;
  }
  public resetNoEntropyLabelCapability() {
    this._noEntropyLabelCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEntropyLabelCapabilityInput() {
    return this._noEntropyLabelCapability;
  }

  // no__route__localize - computed: false, optional: true, required: false
  private _noRouteLocalize?: string; 
  public get noRouteLocalize() {
    return this.getStringAttribute('no__route__localize');
  }
  public set noRouteLocalize(value: string) {
    this._noRouteLocalize = value;
  }
  public resetNoRouteLocalize() {
    this._noRouteLocalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteLocalizeInput() {
    return this._noRouteLocalize;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // orlonger - computed: false, optional: true, required: false
  private _orlonger?: string; 
  public get orlonger() {
    return this.getStringAttribute('orlonger');
  }
  public set orlonger(value: string) {
    this._orlonger = value;
  }
  public resetOrlonger() {
    this._orlonger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orlongerInput() {
    return this._orlonger;
  }

  // p2mp__lsp__root - computed: false, optional: true, required: false
  private _p2MpLspRoot?: string; 
  public get p2MpLspRoot() {
    return this.getStringAttribute('p2mp__lsp__root');
  }
  public set p2MpLspRoot(value: string) {
    this._p2MpLspRoot = value;
  }
  public resetP2MpLspRoot() {
    this._p2MpLspRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpLspRootInput() {
    return this._p2MpLspRoot;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // preference2 - computed: false, optional: true, required: false
  private _preference2?: string; 
  public get preference2() {
    return this.getStringAttribute('preference2');
  }
  public set preference2(value: string) {
    this._preference2 = value;
  }
  public resetPreference2() {
    this._preference2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preference2Input() {
    return this._preference2;
  }

  // prefix__length__range - computed: false, optional: true, required: false
  private _prefixLengthRange?: string; 
  public get prefixLengthRange() {
    return this.getStringAttribute('prefix__length__range');
  }
  public set prefixLengthRange(value: string) {
    this._prefixLengthRange = value;
  }
  public resetPrefixLengthRange() {
    this._prefixLengthRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthRangeInput() {
    return this._prefixLengthRange;
  }

  // prefix__segment - computed: false, optional: true, required: false
  private _prefixSegment?: string; 
  public get prefixSegment() {
    return this.getStringAttribute('prefix__segment');
  }
  public set prefixSegment(value: string) {
    this._prefixSegment = value;
  }
  public resetPrefixSegment() {
    this._prefixSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSegmentInput() {
    return this._prefixSegment;
  }

  // priority - computed: false, optional: true, required: false
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

  // resolution__map - computed: false, optional: true, required: false
  private _resolutionMap?: string; 
  public get resolutionMap() {
    return this.getStringAttribute('resolution__map');
  }
  public set resolutionMap(value: string) {
    this._resolutionMap = value;
  }
  public resetResolutionMap() {
    this._resolutionMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionMapInput() {
    return this._resolutionMap;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // selected__mldp__egress - computed: false, optional: true, required: false
  private _selectedMldpEgress?: string; 
  public get selectedMldpEgress() {
    return this.getStringAttribute('selected__mldp__egress');
  }
  public set selectedMldpEgress(value: string) {
    this._selectedMldpEgress = value;
  }
  public resetSelectedMldpEgress() {
    this._selectedMldpEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedMldpEgressInput() {
    return this._selectedMldpEgress;
  }

  // source__class - computed: false, optional: true, required: false
  private _sourceClass?: string; 
  public get sourceClass() {
    return this.getStringAttribute('source__class');
  }
  public set sourceClass(value: string) {
    this._sourceClass = value;
  }
  public resetSourceClass() {
    this._sourceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClassInput() {
    return this._sourceClass;
  }

  // sr__te__template - computed: false, optional: true, required: false
  private _srTeTemplate?: string; 
  public get srTeTemplate() {
    return this.getStringAttribute('sr__te__template');
  }
  public set srTeTemplate(value: string) {
    this._srTeTemplate = value;
  }
  public resetSrTeTemplate() {
    this._srTeTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srTeTemplateInput() {
    return this._srTeTemplate;
  }

  // ssm__source - computed: false, optional: true, required: false
  private _ssmSource?: string; 
  public get ssmSource() {
    return this.getStringAttribute('ssm__source');
  }
  public set ssmSource(value: string) {
    this._ssmSource = value;
  }
  public resetSsmSource() {
    this._ssmSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmSourceInput() {
    return this._ssmSource;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag2 - computed: false, optional: true, required: false
  private _tag2?: string; 
  public get tag2() {
    return this.getStringAttribute('tag2');
  }
  public set tag2(value: string) {
    this._tag2 = value;
  }
  public resetTag2() {
    this._tag2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tag2Input() {
    return this._tag2;
  }

  // through - computed: false, optional: true, required: false
  private _through?: string; 
  public get through() {
    return this.getStringAttribute('through');
  }
  public set through(value: string) {
    this._through = value;
  }
  public resetThrough() {
    this._through = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughInput() {
    return this._through;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: string; 
  public get trace() {
    return this.getStringAttribute('trace');
  }
  public set trace(value: string) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // tunnel__attribute - computed: false, optional: true, required: false
  private _tunnelAttribute?: string; 
  public get tunnelAttribute() {
    return this.getStringAttribute('tunnel__attribute');
  }
  public set tunnelAttribute(value: string) {
    this._tunnelAttribute = value;
  }
  public resetTunnelAttribute() {
    this._tunnelAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAttributeInput() {
    return this._tunnelAttribute;
  }

  // tunnel__end__point__address - computed: false, optional: true, required: false
  private _tunnelEndPointAddress?: string; 
  public get tunnelEndPointAddress() {
    return this.getStringAttribute('tunnel__end__point__address');
  }
  public set tunnelEndPointAddress(value: string) {
    this._tunnelEndPointAddress = value;
  }
  public resetTunnelEndPointAddress() {
    this._tunnelEndPointAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndPointAddressInput() {
    return this._tunnelEndPointAddress;
  }

  // upto - computed: false, optional: true, required: false
  private _upto?: string; 
  public get upto() {
    return this.getStringAttribute('upto');
  }
  public set upto(value: string) {
    this._upto = value;
  }
  public resetUpto() {
    this._upto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptoInput() {
    return this._upto;
  }

  // validation__state - computed: false, optional: true, required: false
  private _validationState?: string; 
  public get validationState() {
    return this.getStringAttribute('validation__state');
  }
  public set validationState(value: string) {
    this._validationState = value;
  }
  public resetValidationState() {
    this._validationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationStateInput() {
    return this._validationState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_reject: cdktf.stringToTerraform(this._acceptReject),
      add__path: cdktf.stringToTerraform(this._addPath),
      address: cdktf.stringToTerraform(this._address),
      address__mask: cdktf.stringToTerraform(this._addressMask),
      aggregate__bandwidth: cdktf.stringToTerraform(this._aggregateBandwidth),
      aigp__adjust: cdktf.stringToTerraform(this._aigpAdjust),
      aigp__originate: cdktf.stringToTerraform(this._aigpOriginate),
      analyze: cdktf.stringToTerraform(this._analyze),
      apply__advanced: cdktf.stringToTerraform(this._applyAdvanced),
      as__path__expand: cdktf.stringToTerraform(this._asPathExpand),
      as__path__prepend: cdktf.stringToTerraform(this._asPathPrepend),
      bgp__output__queue__priority: cdktf.stringToTerraform(this._bgpOutputQueuePriority),
      class: cdktf.stringToTerraform(this._class),
      color: cdktf.stringToTerraform(this._color),
      color2: cdktf.stringToTerraform(this._color2),
      community: cdktf.stringToTerraform(this._community),
      cos__next__hop__map: cdktf.stringToTerraform(this._cosNextHopMap),
      damping: cdktf.stringToTerraform(this._damping),
      default__action: cdktf.stringToTerraform(this._defaultAction),
      destination__class: cdktf.stringToTerraform(this._destinationClass),
      dynamic__tunnel__attributes: cdktf.stringToTerraform(this._dynamicTunnelAttributes),
      exact: cdktf.stringToTerraform(this._exact),
      external: cdktf.stringToTerraform(this._external),
      forwarding__class: cdktf.stringToTerraform(this._forwardingClass),
      get__route__range: cdktf.stringToTerraform(this._getRouteRange),
      id: cdktf.stringToTerraform(this._id),
      install__nexthop: cdktf.stringToTerraform(this._installNexthop),
      install__to__fib: cdktf.stringToTerraform(this._installToFib),
      label: cdktf.stringToTerraform(this._label),
      label__allocation: cdktf.stringToTerraform(this._labelAllocation),
      label__allocation__fallback__reject: cdktf.stringToTerraform(this._labelAllocationFallbackReject),
      limit__bandwidth: cdktf.stringToTerraform(this._limitBandwidth),
      load__balance: cdktf.stringToTerraform(this._loadBalance),
      local__preference: cdktf.stringToTerraform(this._localPreference),
      longer: cdktf.stringToTerraform(this._longer),
      map__to__interface: cdktf.stringToTerraform(this._mapToInterface),
      metric: cdktf.stringToTerraform(this._metric),
      metric2: cdktf.stringToTerraform(this._metric2),
      metric3: cdktf.stringToTerraform(this._metric3),
      metric4: cdktf.stringToTerraform(this._metric4),
      mhop__bfd__port: cdktf.stringToTerraform(this._mhopBfdPort),
      multipath__resolve: cdktf.stringToTerraform(this._multipathResolve),
      name: cdktf.stringToTerraform(this._name),
      name__1: cdktf.stringToTerraform(this._name1),
      next: cdktf.stringToTerraform(this._next),
      next__hop: cdktf.stringToTerraform(this._nextHop),
      no__backup: cdktf.stringToTerraform(this._noBackup),
      no__entropy__label__capability: cdktf.stringToTerraform(this._noEntropyLabelCapability),
      no__route__localize: cdktf.stringToTerraform(this._noRouteLocalize),
      origin: cdktf.stringToTerraform(this._origin),
      orlonger: cdktf.stringToTerraform(this._orlonger),
      p2mp__lsp__root: cdktf.stringToTerraform(this._p2MpLspRoot),
      preference: cdktf.stringToTerraform(this._preference),
      preference2: cdktf.stringToTerraform(this._preference2),
      prefix__length__range: cdktf.stringToTerraform(this._prefixLengthRange),
      prefix__segment: cdktf.stringToTerraform(this._prefixSegment),
      priority: cdktf.stringToTerraform(this._priority),
      resolution__map: cdktf.stringToTerraform(this._resolutionMap),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      selected__mldp__egress: cdktf.stringToTerraform(this._selectedMldpEgress),
      source__class: cdktf.stringToTerraform(this._sourceClass),
      sr__te__template: cdktf.stringToTerraform(this._srTeTemplate),
      ssm__source: cdktf.stringToTerraform(this._ssmSource),
      tag: cdktf.stringToTerraform(this._tag),
      tag2: cdktf.stringToTerraform(this._tag2),
      through: cdktf.stringToTerraform(this._through),
      trace: cdktf.stringToTerraform(this._trace),
      tunnel__attribute: cdktf.stringToTerraform(this._tunnelAttribute),
      tunnel__end__point__address: cdktf.stringToTerraform(this._tunnelEndPointAddress),
      upto: cdktf.stringToTerraform(this._upto),
      validation__state: cdktf.stringToTerraform(this._validationState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_reject: {
        value: cdktf.stringToHclTerraform(this._acceptReject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add__path: {
        value: cdktf.stringToHclTerraform(this._addPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address__mask: {
        value: cdktf.stringToHclTerraform(this._addressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate__bandwidth: {
        value: cdktf.stringToHclTerraform(this._aggregateBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aigp__adjust: {
        value: cdktf.stringToHclTerraform(this._aigpAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aigp__originate: {
        value: cdktf.stringToHclTerraform(this._aigpOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyze: {
        value: cdktf.stringToHclTerraform(this._analyze),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply__advanced: {
        value: cdktf.stringToHclTerraform(this._applyAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as__path__expand: {
        value: cdktf.stringToHclTerraform(this._asPathExpand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as__path__prepend: {
        value: cdktf.stringToHclTerraform(this._asPathPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp__output__queue__priority: {
        value: cdktf.stringToHclTerraform(this._bgpOutputQueuePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color2: {
        value: cdktf.stringToHclTerraform(this._color2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos__next__hop__map: {
        value: cdktf.stringToHclTerraform(this._cosNextHopMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      damping: {
        value: cdktf.stringToHclTerraform(this._damping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default__action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination__class: {
        value: cdktf.stringToHclTerraform(this._destinationClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic__tunnel__attributes: {
        value: cdktf.stringToHclTerraform(this._dynamicTunnelAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exact: {
        value: cdktf.stringToHclTerraform(this._exact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.stringToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding__class: {
        value: cdktf.stringToHclTerraform(this._forwardingClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get__route__range: {
        value: cdktf.stringToHclTerraform(this._getRouteRange),
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
      install__nexthop: {
        value: cdktf.stringToHclTerraform(this._installNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install__to__fib: {
        value: cdktf.stringToHclTerraform(this._installToFib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label__allocation: {
        value: cdktf.stringToHclTerraform(this._labelAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label__allocation__fallback__reject: {
        value: cdktf.stringToHclTerraform(this._labelAllocationFallbackReject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit__bandwidth: {
        value: cdktf.stringToHclTerraform(this._limitBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load__balance: {
        value: cdktf.stringToHclTerraform(this._loadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local__preference: {
        value: cdktf.stringToHclTerraform(this._localPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longer: {
        value: cdktf.stringToHclTerraform(this._longer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map__to__interface: {
        value: cdktf.stringToHclTerraform(this._mapToInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric2: {
        value: cdktf.stringToHclTerraform(this._metric2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric3: {
        value: cdktf.stringToHclTerraform(this._metric3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric4: {
        value: cdktf.stringToHclTerraform(this._metric4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mhop__bfd__port: {
        value: cdktf.stringToHclTerraform(this._mhopBfdPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multipath__resolve: {
        value: cdktf.stringToHclTerraform(this._multipathResolve),
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
      name__1: {
        value: cdktf.stringToHclTerraform(this._name1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next: {
        value: cdktf.stringToHclTerraform(this._next),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next__hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no__backup: {
        value: cdktf.stringToHclTerraform(this._noBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no__entropy__label__capability: {
        value: cdktf.stringToHclTerraform(this._noEntropyLabelCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no__route__localize: {
        value: cdktf.stringToHclTerraform(this._noRouteLocalize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orlonger: {
        value: cdktf.stringToHclTerraform(this._orlonger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2mp__lsp__root: {
        value: cdktf.stringToHclTerraform(this._p2MpLspRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference: {
        value: cdktf.stringToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference2: {
        value: cdktf.stringToHclTerraform(this._preference2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix__length__range: {
        value: cdktf.stringToHclTerraform(this._prefixLengthRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix__segment: {
        value: cdktf.stringToHclTerraform(this._prefixSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution__map: {
        value: cdktf.stringToHclTerraform(this._resolutionMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected__mldp__egress: {
        value: cdktf.stringToHclTerraform(this._selectedMldpEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source__class: {
        value: cdktf.stringToHclTerraform(this._sourceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sr__te__template: {
        value: cdktf.stringToHclTerraform(this._srTeTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm__source: {
        value: cdktf.stringToHclTerraform(this._ssmSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag2: {
        value: cdktf.stringToHclTerraform(this._tag2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      through: {
        value: cdktf.stringToHclTerraform(this._through),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace: {
        value: cdktf.stringToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel__attribute: {
        value: cdktf.stringToHclTerraform(this._tunnelAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel__end__point__address: {
        value: cdktf.stringToHclTerraform(this._tunnelEndPointAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upto: {
        value: cdktf.stringToHclTerraform(this._upto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation__state: {
        value: cdktf.stringToHclTerraform(this._validationState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
