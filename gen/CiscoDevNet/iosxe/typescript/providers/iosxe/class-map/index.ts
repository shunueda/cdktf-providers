// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClassMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class-Map description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#description ClassMap#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#device ClassMap#device}
  */
  readonly device?: string;
  /**
  * Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_access_group_name ClassMap#match_access_group_name}
  */
  readonly matchAccessGroupName?: string[];
  /**
  * match name of service template activated on session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_activated_service_templates ClassMap#match_activated_service_templates}
  */
  readonly matchActivatedServiceTemplates?: ClassMapMatchActivatedServiceTemplates[] | cdktf.IResolvable;
  /**
  * authorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_authorization_status_authorized ClassMap#match_authorization_status_authorized}
  */
  readonly matchAuthorizationStatusAuthorized?: boolean | cdktf.IResolvable;
  /**
  * unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_authorization_status_unauthorized ClassMap#match_authorization_status_unauthorized}
  */
  readonly matchAuthorizationStatusUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * greater than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_authorizing_method_priority_greater_than ClassMap#match_authorizing_method_priority_greater_than}
  */
  readonly matchAuthorizingMethodPriorityGreaterThan?: number[];
  /**
  * Match DSCP in IP(v4) and IPv6 packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_dscp ClassMap#match_dscp}
  */
  readonly matchDscp?: string[];
  /**
  * Match IP DSCP (DiffServ CodePoints)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_ip_dscp ClassMap#match_ip_dscp}
  */
  readonly matchIpDscp?: string[];
  /**
  * Match IP precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_ip_precedence ClassMap#match_ip_precedence}
  */
  readonly matchIpPrecedence?: string[];
  /**
  * dot1x
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_method_dot1x ClassMap#match_method_dot1x}
  */
  readonly matchMethodDot1X?: boolean | cdktf.IResolvable;
  /**
  * mab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_method_mab ClassMap#match_method_mab}
  */
  readonly matchMethodMab?: boolean | cdktf.IResolvable;
  /**
  * aaa timeout type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_result_type_aaa_timeout ClassMap#match_result_type_aaa_timeout}
  */
  readonly matchResultTypeAaaTimeout?: boolean | cdktf.IResolvable;
  /**
  * agent not found type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_result_type_method_dot1x_agent_not_found ClassMap#match_result_type_method_dot1x_agent_not_found}
  */
  readonly matchResultTypeMethodDot1XAgentNotFound?: boolean | cdktf.IResolvable;
  /**
  * failure type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_result_type_method_dot1x_authoritative ClassMap#match_result_type_method_dot1x_authoritative}
  */
  readonly matchResultTypeMethodDot1XAuthoritative?: boolean | cdktf.IResolvable;
  /**
  * method timeout type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_result_type_method_dot1x_method_timeout ClassMap#match_result_type_method_dot1x_method_timeout}
  */
  readonly matchResultTypeMethodDot1XMethodTimeout?: boolean | cdktf.IResolvable;
  /**
  * failure type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#match_result_type_method_mab_authoritative ClassMap#match_result_type_method_mab_authoritative}
  */
  readonly matchResultTypeMethodMabAuthoritative?: boolean | cdktf.IResolvable;
  /**
  * name of the class map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#name ClassMap#name}
  */
  readonly name: string;
  /**
  * Logical-AND/Logical-OR of all matching statements under this class map
  *   - Choices: `match-all`, `match-any`, `match-none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#prematch ClassMap#prematch}
  */
  readonly prematch: string;
  /**
  * Domain name of the class map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#subscriber ClassMap#subscriber}
  */
  readonly subscriber?: boolean | cdktf.IResolvable;
  /**
  * type of the class-map
  *   - Choices: `access-control`, `appnav`, `control`, `inspect`, `multicast-flows`, `ngsw-qos`, `site-manager`, `stack`, `traffic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#type ClassMap#type}
  */
  readonly type?: string;
}
export interface ClassMapMatchActivatedServiceTemplates {
  /**
  * Enter service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#service_name ClassMap#service_name}
  */
  readonly serviceName: string;
}

export function classMapMatchActivatedServiceTemplatesToTerraform(struct?: ClassMapMatchActivatedServiceTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function classMapMatchActivatedServiceTemplatesToHclTerraform(struct?: ClassMapMatchActivatedServiceTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClassMapMatchActivatedServiceTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClassMapMatchActivatedServiceTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClassMapMatchActivatedServiceTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class ClassMapMatchActivatedServiceTemplatesList extends cdktf.ComplexList {
  public internalValue? : ClassMapMatchActivatedServiceTemplates[] | cdktf.IResolvable

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
  public get(index: number): ClassMapMatchActivatedServiceTemplatesOutputReference {
    return new ClassMapMatchActivatedServiceTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map iosxe_class_map}
*/
export class ClassMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_class_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClassMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClassMap to import
  * @param importFromId The id of the existing ClassMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClassMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_class_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/class_map iosxe_class_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClassMapConfig
  */
  public constructor(scope: Construct, id: string, config: ClassMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_class_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._device = config.device;
    this._matchAccessGroupName = config.matchAccessGroupName;
    this._matchActivatedServiceTemplates.internalValue = config.matchActivatedServiceTemplates;
    this._matchAuthorizationStatusAuthorized = config.matchAuthorizationStatusAuthorized;
    this._matchAuthorizationStatusUnauthorized = config.matchAuthorizationStatusUnauthorized;
    this._matchAuthorizingMethodPriorityGreaterThan = config.matchAuthorizingMethodPriorityGreaterThan;
    this._matchDscp = config.matchDscp;
    this._matchIpDscp = config.matchIpDscp;
    this._matchIpPrecedence = config.matchIpPrecedence;
    this._matchMethodDot1X = config.matchMethodDot1X;
    this._matchMethodMab = config.matchMethodMab;
    this._matchResultTypeAaaTimeout = config.matchResultTypeAaaTimeout;
    this._matchResultTypeMethodDot1XAgentNotFound = config.matchResultTypeMethodDot1XAgentNotFound;
    this._matchResultTypeMethodDot1XAuthoritative = config.matchResultTypeMethodDot1XAuthoritative;
    this._matchResultTypeMethodDot1XMethodTimeout = config.matchResultTypeMethodDot1XMethodTimeout;
    this._matchResultTypeMethodMabAuthoritative = config.matchResultTypeMethodMabAuthoritative;
    this._name = config.name;
    this._prematch = config.prematch;
    this._subscriber = config.subscriber;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_access_group_name - computed: false, optional: true, required: false
  private _matchAccessGroupName?: string[]; 
  public get matchAccessGroupName() {
    return this.getListAttribute('match_access_group_name');
  }
  public set matchAccessGroupName(value: string[]) {
    this._matchAccessGroupName = value;
  }
  public resetMatchAccessGroupName() {
    this._matchAccessGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAccessGroupNameInput() {
    return this._matchAccessGroupName;
  }

  // match_activated_service_templates - computed: false, optional: true, required: false
  private _matchActivatedServiceTemplates = new ClassMapMatchActivatedServiceTemplatesList(this, "match_activated_service_templates", false);
  public get matchActivatedServiceTemplates() {
    return this._matchActivatedServiceTemplates;
  }
  public putMatchActivatedServiceTemplates(value: ClassMapMatchActivatedServiceTemplates[] | cdktf.IResolvable) {
    this._matchActivatedServiceTemplates.internalValue = value;
  }
  public resetMatchActivatedServiceTemplates() {
    this._matchActivatedServiceTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchActivatedServiceTemplatesInput() {
    return this._matchActivatedServiceTemplates.internalValue;
  }

  // match_authorization_status_authorized - computed: false, optional: true, required: false
  private _matchAuthorizationStatusAuthorized?: boolean | cdktf.IResolvable; 
  public get matchAuthorizationStatusAuthorized() {
    return this.getBooleanAttribute('match_authorization_status_authorized');
  }
  public set matchAuthorizationStatusAuthorized(value: boolean | cdktf.IResolvable) {
    this._matchAuthorizationStatusAuthorized = value;
  }
  public resetMatchAuthorizationStatusAuthorized() {
    this._matchAuthorizationStatusAuthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAuthorizationStatusAuthorizedInput() {
    return this._matchAuthorizationStatusAuthorized;
  }

  // match_authorization_status_unauthorized - computed: false, optional: true, required: false
  private _matchAuthorizationStatusUnauthorized?: boolean | cdktf.IResolvable; 
  public get matchAuthorizationStatusUnauthorized() {
    return this.getBooleanAttribute('match_authorization_status_unauthorized');
  }
  public set matchAuthorizationStatusUnauthorized(value: boolean | cdktf.IResolvable) {
    this._matchAuthorizationStatusUnauthorized = value;
  }
  public resetMatchAuthorizationStatusUnauthorized() {
    this._matchAuthorizationStatusUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAuthorizationStatusUnauthorizedInput() {
    return this._matchAuthorizationStatusUnauthorized;
  }

  // match_authorizing_method_priority_greater_than - computed: false, optional: true, required: false
  private _matchAuthorizingMethodPriorityGreaterThan?: number[]; 
  public get matchAuthorizingMethodPriorityGreaterThan() {
    return this.getNumberListAttribute('match_authorizing_method_priority_greater_than');
  }
  public set matchAuthorizingMethodPriorityGreaterThan(value: number[]) {
    this._matchAuthorizingMethodPriorityGreaterThan = value;
  }
  public resetMatchAuthorizingMethodPriorityGreaterThan() {
    this._matchAuthorizingMethodPriorityGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAuthorizingMethodPriorityGreaterThanInput() {
    return this._matchAuthorizingMethodPriorityGreaterThan;
  }

  // match_dscp - computed: false, optional: true, required: false
  private _matchDscp?: string[]; 
  public get matchDscp() {
    return this.getListAttribute('match_dscp');
  }
  public set matchDscp(value: string[]) {
    this._matchDscp = value;
  }
  public resetMatchDscp() {
    this._matchDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDscpInput() {
    return this._matchDscp;
  }

  // match_ip_dscp - computed: false, optional: true, required: false
  private _matchIpDscp?: string[]; 
  public get matchIpDscp() {
    return this.getListAttribute('match_ip_dscp');
  }
  public set matchIpDscp(value: string[]) {
    this._matchIpDscp = value;
  }
  public resetMatchIpDscp() {
    this._matchIpDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpDscpInput() {
    return this._matchIpDscp;
  }

  // match_ip_precedence - computed: false, optional: true, required: false
  private _matchIpPrecedence?: string[]; 
  public get matchIpPrecedence() {
    return this.getListAttribute('match_ip_precedence');
  }
  public set matchIpPrecedence(value: string[]) {
    this._matchIpPrecedence = value;
  }
  public resetMatchIpPrecedence() {
    this._matchIpPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpPrecedenceInput() {
    return this._matchIpPrecedence;
  }

  // match_method_dot1x - computed: false, optional: true, required: false
  private _matchMethodDot1X?: boolean | cdktf.IResolvable; 
  public get matchMethodDot1X() {
    return this.getBooleanAttribute('match_method_dot1x');
  }
  public set matchMethodDot1X(value: boolean | cdktf.IResolvable) {
    this._matchMethodDot1X = value;
  }
  public resetMatchMethodDot1X() {
    this._matchMethodDot1X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMethodDot1XInput() {
    return this._matchMethodDot1X;
  }

  // match_method_mab - computed: false, optional: true, required: false
  private _matchMethodMab?: boolean | cdktf.IResolvable; 
  public get matchMethodMab() {
    return this.getBooleanAttribute('match_method_mab');
  }
  public set matchMethodMab(value: boolean | cdktf.IResolvable) {
    this._matchMethodMab = value;
  }
  public resetMatchMethodMab() {
    this._matchMethodMab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMethodMabInput() {
    return this._matchMethodMab;
  }

  // match_result_type_aaa_timeout - computed: false, optional: true, required: false
  private _matchResultTypeAaaTimeout?: boolean | cdktf.IResolvable; 
  public get matchResultTypeAaaTimeout() {
    return this.getBooleanAttribute('match_result_type_aaa_timeout');
  }
  public set matchResultTypeAaaTimeout(value: boolean | cdktf.IResolvable) {
    this._matchResultTypeAaaTimeout = value;
  }
  public resetMatchResultTypeAaaTimeout() {
    this._matchResultTypeAaaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResultTypeAaaTimeoutInput() {
    return this._matchResultTypeAaaTimeout;
  }

  // match_result_type_method_dot1x_agent_not_found - computed: false, optional: true, required: false
  private _matchResultTypeMethodDot1XAgentNotFound?: boolean | cdktf.IResolvable; 
  public get matchResultTypeMethodDot1XAgentNotFound() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_agent_not_found');
  }
  public set matchResultTypeMethodDot1XAgentNotFound(value: boolean | cdktf.IResolvable) {
    this._matchResultTypeMethodDot1XAgentNotFound = value;
  }
  public resetMatchResultTypeMethodDot1XAgentNotFound() {
    this._matchResultTypeMethodDot1XAgentNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResultTypeMethodDot1XAgentNotFoundInput() {
    return this._matchResultTypeMethodDot1XAgentNotFound;
  }

  // match_result_type_method_dot1x_authoritative - computed: false, optional: true, required: false
  private _matchResultTypeMethodDot1XAuthoritative?: boolean | cdktf.IResolvable; 
  public get matchResultTypeMethodDot1XAuthoritative() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_authoritative');
  }
  public set matchResultTypeMethodDot1XAuthoritative(value: boolean | cdktf.IResolvable) {
    this._matchResultTypeMethodDot1XAuthoritative = value;
  }
  public resetMatchResultTypeMethodDot1XAuthoritative() {
    this._matchResultTypeMethodDot1XAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResultTypeMethodDot1XAuthoritativeInput() {
    return this._matchResultTypeMethodDot1XAuthoritative;
  }

  // match_result_type_method_dot1x_method_timeout - computed: false, optional: true, required: false
  private _matchResultTypeMethodDot1XMethodTimeout?: boolean | cdktf.IResolvable; 
  public get matchResultTypeMethodDot1XMethodTimeout() {
    return this.getBooleanAttribute('match_result_type_method_dot1x_method_timeout');
  }
  public set matchResultTypeMethodDot1XMethodTimeout(value: boolean | cdktf.IResolvable) {
    this._matchResultTypeMethodDot1XMethodTimeout = value;
  }
  public resetMatchResultTypeMethodDot1XMethodTimeout() {
    this._matchResultTypeMethodDot1XMethodTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResultTypeMethodDot1XMethodTimeoutInput() {
    return this._matchResultTypeMethodDot1XMethodTimeout;
  }

  // match_result_type_method_mab_authoritative - computed: false, optional: true, required: false
  private _matchResultTypeMethodMabAuthoritative?: boolean | cdktf.IResolvable; 
  public get matchResultTypeMethodMabAuthoritative() {
    return this.getBooleanAttribute('match_result_type_method_mab_authoritative');
  }
  public set matchResultTypeMethodMabAuthoritative(value: boolean | cdktf.IResolvable) {
    this._matchResultTypeMethodMabAuthoritative = value;
  }
  public resetMatchResultTypeMethodMabAuthoritative() {
    this._matchResultTypeMethodMabAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResultTypeMethodMabAuthoritativeInput() {
    return this._matchResultTypeMethodMabAuthoritative;
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

  // prematch - computed: false, optional: false, required: true
  private _prematch?: string; 
  public get prematch() {
    return this.getStringAttribute('prematch');
  }
  public set prematch(value: string) {
    this._prematch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prematchInput() {
    return this._prematch;
  }

  // subscriber - computed: false, optional: true, required: false
  private _subscriber?: boolean | cdktf.IResolvable; 
  public get subscriber() {
    return this.getBooleanAttribute('subscriber');
  }
  public set subscriber(value: boolean | cdktf.IResolvable) {
    this._subscriber = value;
  }
  public resetSubscriber() {
    this._subscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      match_access_group_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchAccessGroupName),
      match_activated_service_templates: cdktf.listMapper(classMapMatchActivatedServiceTemplatesToTerraform, false)(this._matchActivatedServiceTemplates.internalValue),
      match_authorization_status_authorized: cdktf.booleanToTerraform(this._matchAuthorizationStatusAuthorized),
      match_authorization_status_unauthorized: cdktf.booleanToTerraform(this._matchAuthorizationStatusUnauthorized),
      match_authorizing_method_priority_greater_than: cdktf.listMapper(cdktf.numberToTerraform, false)(this._matchAuthorizingMethodPriorityGreaterThan),
      match_dscp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchDscp),
      match_ip_dscp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIpDscp),
      match_ip_precedence: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIpPrecedence),
      match_method_dot1x: cdktf.booleanToTerraform(this._matchMethodDot1X),
      match_method_mab: cdktf.booleanToTerraform(this._matchMethodMab),
      match_result_type_aaa_timeout: cdktf.booleanToTerraform(this._matchResultTypeAaaTimeout),
      match_result_type_method_dot1x_agent_not_found: cdktf.booleanToTerraform(this._matchResultTypeMethodDot1XAgentNotFound),
      match_result_type_method_dot1x_authoritative: cdktf.booleanToTerraform(this._matchResultTypeMethodDot1XAuthoritative),
      match_result_type_method_dot1x_method_timeout: cdktf.booleanToTerraform(this._matchResultTypeMethodDot1XMethodTimeout),
      match_result_type_method_mab_authoritative: cdktf.booleanToTerraform(this._matchResultTypeMethodMabAuthoritative),
      name: cdktf.stringToTerraform(this._name),
      prematch: cdktf.stringToTerraform(this._prematch),
      subscriber: cdktf.booleanToTerraform(this._subscriber),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_access_group_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchAccessGroupName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_activated_service_templates: {
        value: cdktf.listMapperHcl(classMapMatchActivatedServiceTemplatesToHclTerraform, false)(this._matchActivatedServiceTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClassMapMatchActivatedServiceTemplatesList",
      },
      match_authorization_status_authorized: {
        value: cdktf.booleanToHclTerraform(this._matchAuthorizationStatusAuthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_authorization_status_unauthorized: {
        value: cdktf.booleanToHclTerraform(this._matchAuthorizationStatusUnauthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_authorizing_method_priority_greater_than: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._matchAuthorizingMethodPriorityGreaterThan),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      match_dscp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchDscp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_ip_dscp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIpDscp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_ip_precedence: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIpPrecedence),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_method_dot1x: {
        value: cdktf.booleanToHclTerraform(this._matchMethodDot1X),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_method_mab: {
        value: cdktf.booleanToHclTerraform(this._matchMethodMab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_result_type_aaa_timeout: {
        value: cdktf.booleanToHclTerraform(this._matchResultTypeAaaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_result_type_method_dot1x_agent_not_found: {
        value: cdktf.booleanToHclTerraform(this._matchResultTypeMethodDot1XAgentNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_result_type_method_dot1x_authoritative: {
        value: cdktf.booleanToHclTerraform(this._matchResultTypeMethodDot1XAuthoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_result_type_method_dot1x_method_timeout: {
        value: cdktf.booleanToHclTerraform(this._matchResultTypeMethodDot1XMethodTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_result_type_method_mab_authoritative: {
        value: cdktf.booleanToHclTerraform(this._matchResultTypeMethodMabAuthoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prematch: {
        value: cdktf.stringToHclTerraform(this._prematch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber: {
        value: cdktf.booleanToHclTerraform(this._subscriber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
