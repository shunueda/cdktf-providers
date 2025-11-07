// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter a value between 1 and 1073741823
  *   - Range: `1`-`1073741823`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#absolute_timer ServiceTemplate#absolute_timer}
  */
  readonly absoluteTimer?: number;
  /**
  * Access list to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#access_groups ServiceTemplate#access_groups}
  */
  readonly accessGroups?: ServiceTemplateAccessGroups[] | cdktf.IResolvable;
  /**
  * Enter a description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#description ServiceTemplate#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#device ServiceTemplate#device}
  */
  readonly device?: string;
  /**
  * pre-authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#dns_acl_preauth ServiceTemplate#dns_acl_preauth}
  */
  readonly dnsAclPreauth?: string;
  /**
  * Enter a value between 1 and 65535
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#inactivity_timer ServiceTemplate#inactivity_timer}
  */
  readonly inactivityTimer?: number;
  /**
  * ARP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#inactivity_timer_probe ServiceTemplate#inactivity_timer_probe}
  */
  readonly inactivityTimerProbe?: boolean | cdktf.IResolvable;
  /**
  * Interface template to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#interface_templates ServiceTemplate#interface_templates}
  */
  readonly interfaceTemplates?: ServiceTemplateInterfaceTemplates[] | cdktf.IResolvable;
  /**
  * Set the link security policy
  *   - Choices: `must-not-secure`, `must-secure`, `should-secure`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#linksec_policy ServiceTemplate#linksec_policy}
  */
  readonly linksecPolicy?: string;
  /**
  * mdns policy to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#mdns_service_policy ServiceTemplate#mdns_service_policy}
  */
  readonly mdnsServicePolicy?: string;
  /**
  * Specify a template name (maximum 48 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#name ServiceTemplate#name}
  */
  readonly name: string;
  /**
  * Append client Mac Address in redirect URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#redirect_append_client_mac ServiceTemplate#redirect_append_client_mac}
  */
  readonly redirectAppendClientMac?: string;
  /**
  * Append switch Mac Address in redirect URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#redirect_append_switch_mac ServiceTemplate#redirect_append_switch_mac}
  */
  readonly redirectAppendSwitchMac?: string;
  /**
  * Specify a valid URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#redirect_url ServiceTemplate#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Specify the access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#redirect_url_match_acl ServiceTemplate#redirect_url_match_acl}
  */
  readonly redirectUrlMatchAcl?: string;
  /**
  * 
  *   - Choices: `one-time-redirect`, `redirect-on-no-match`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#redirect_url_match_action ServiceTemplate#redirect_url_match_action}
  */
  readonly redirectUrlMatchAction?: string;
  /**
  * Configure input Qos policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#service_policy_qos_input ServiceTemplate#service_policy_qos_input}
  */
  readonly servicePolicyQosInput?: string;
  /**
  * Configure output Qos policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#service_policy_qos_output ServiceTemplate#service_policy_qos_output}
  */
  readonly servicePolicyQosOutput?: string;
  /**
  * SGT tag
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#sgt ServiceTemplate#sgt}
  */
  readonly sgt?: number;
  /**
  * tag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#tags ServiceTemplate#tags}
  */
  readonly tags?: ServiceTemplateTags[] | cdktf.IResolvable;
  /**
  * tunnel profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#tunnel_capwap_name ServiceTemplate#tunnel_capwap_name}
  */
  readonly tunnelCapwapName?: string;
  /**
  * Vlan to be applied
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#vlan ServiceTemplate#vlan}
  */
  readonly vlan?: number;
  /**
  * Vnid to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#vnid ServiceTemplate#vnid}
  */
  readonly vnid?: string;
  /**
  * Critical voice vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#voice_vlan ServiceTemplate#voice_vlan}
  */
  readonly voiceVlan?: boolean | cdktf.IResolvable;
}
export interface ServiceTemplateAccessGroups {
  /**
  * Specify the access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#name ServiceTemplate#name}
  */
  readonly name: string;
}

export function serviceTemplateAccessGroupsToTerraform(struct?: ServiceTemplateAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceTemplateAccessGroupsToHclTerraform(struct?: ServiceTemplateAccessGroups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceTemplateAccessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceTemplateAccessGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTemplateAccessGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ServiceTemplateAccessGroupsList extends cdktf.ComplexList {
  public internalValue? : ServiceTemplateAccessGroups[] | cdktf.IResolvable

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
  public get(index: number): ServiceTemplateAccessGroupsOutputReference {
    return new ServiceTemplateAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceTemplateInterfaceTemplates {
  /**
  * Enter name of interface template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#name ServiceTemplate#name}
  */
  readonly name: string;
}

export function serviceTemplateInterfaceTemplatesToTerraform(struct?: ServiceTemplateInterfaceTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceTemplateInterfaceTemplatesToHclTerraform(struct?: ServiceTemplateInterfaceTemplates | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceTemplateInterfaceTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceTemplateInterfaceTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTemplateInterfaceTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ServiceTemplateInterfaceTemplatesList extends cdktf.ComplexList {
  public internalValue? : ServiceTemplateInterfaceTemplates[] | cdktf.IResolvable

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
  public get(index: number): ServiceTemplateInterfaceTemplatesOutputReference {
    return new ServiceTemplateInterfaceTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceTemplateTags {
  /**
  * Specify the Tag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#name ServiceTemplate#name}
  */
  readonly name: string;
}

export function serviceTemplateTagsToTerraform(struct?: ServiceTemplateTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceTemplateTagsToHclTerraform(struct?: ServiceTemplateTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceTemplateTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceTemplateTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTemplateTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ServiceTemplateTagsList extends cdktf.ComplexList {
  public internalValue? : ServiceTemplateTags[] | cdktf.IResolvable

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
  public get(index: number): ServiceTemplateTagsOutputReference {
    return new ServiceTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template iosxe_service_template}
*/
export class ServiceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_service_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTemplate to import
  * @param importFromId The id of the existing ServiceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_service_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/service_template iosxe_service_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_service_template',
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
    this._absoluteTimer = config.absoluteTimer;
    this._accessGroups.internalValue = config.accessGroups;
    this._description = config.description;
    this._device = config.device;
    this._dnsAclPreauth = config.dnsAclPreauth;
    this._inactivityTimer = config.inactivityTimer;
    this._inactivityTimerProbe = config.inactivityTimerProbe;
    this._interfaceTemplates.internalValue = config.interfaceTemplates;
    this._linksecPolicy = config.linksecPolicy;
    this._mdnsServicePolicy = config.mdnsServicePolicy;
    this._name = config.name;
    this._redirectAppendClientMac = config.redirectAppendClientMac;
    this._redirectAppendSwitchMac = config.redirectAppendSwitchMac;
    this._redirectUrl = config.redirectUrl;
    this._redirectUrlMatchAcl = config.redirectUrlMatchAcl;
    this._redirectUrlMatchAction = config.redirectUrlMatchAction;
    this._servicePolicyQosInput = config.servicePolicyQosInput;
    this._servicePolicyQosOutput = config.servicePolicyQosOutput;
    this._sgt = config.sgt;
    this._tags.internalValue = config.tags;
    this._tunnelCapwapName = config.tunnelCapwapName;
    this._vlan = config.vlan;
    this._vnid = config.vnid;
    this._voiceVlan = config.voiceVlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_timer - computed: false, optional: true, required: false
  private _absoluteTimer?: number; 
  public get absoluteTimer() {
    return this.getNumberAttribute('absolute_timer');
  }
  public set absoluteTimer(value: number) {
    this._absoluteTimer = value;
  }
  public resetAbsoluteTimer() {
    this._absoluteTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteTimerInput() {
    return this._absoluteTimer;
  }

  // access_groups - computed: false, optional: true, required: false
  private _accessGroups = new ServiceTemplateAccessGroupsList(this, "access_groups", false);
  public get accessGroups() {
    return this._accessGroups;
  }
  public putAccessGroups(value: ServiceTemplateAccessGroups[] | cdktf.IResolvable) {
    this._accessGroups.internalValue = value;
  }
  public resetAccessGroups() {
    this._accessGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupsInput() {
    return this._accessGroups.internalValue;
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

  // dns_acl_preauth - computed: false, optional: true, required: false
  private _dnsAclPreauth?: string; 
  public get dnsAclPreauth() {
    return this.getStringAttribute('dns_acl_preauth');
  }
  public set dnsAclPreauth(value: string) {
    this._dnsAclPreauth = value;
  }
  public resetDnsAclPreauth() {
    this._dnsAclPreauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAclPreauthInput() {
    return this._dnsAclPreauth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactivity_timer - computed: false, optional: true, required: false
  private _inactivityTimer?: number; 
  public get inactivityTimer() {
    return this.getNumberAttribute('inactivity_timer');
  }
  public set inactivityTimer(value: number) {
    this._inactivityTimer = value;
  }
  public resetInactivityTimer() {
    this._inactivityTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimerInput() {
    return this._inactivityTimer;
  }

  // inactivity_timer_probe - computed: false, optional: true, required: false
  private _inactivityTimerProbe?: boolean | cdktf.IResolvable; 
  public get inactivityTimerProbe() {
    return this.getBooleanAttribute('inactivity_timer_probe');
  }
  public set inactivityTimerProbe(value: boolean | cdktf.IResolvable) {
    this._inactivityTimerProbe = value;
  }
  public resetInactivityTimerProbe() {
    this._inactivityTimerProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimerProbeInput() {
    return this._inactivityTimerProbe;
  }

  // interface_templates - computed: false, optional: true, required: false
  private _interfaceTemplates = new ServiceTemplateInterfaceTemplatesList(this, "interface_templates", false);
  public get interfaceTemplates() {
    return this._interfaceTemplates;
  }
  public putInterfaceTemplates(value: ServiceTemplateInterfaceTemplates[] | cdktf.IResolvable) {
    this._interfaceTemplates.internalValue = value;
  }
  public resetInterfaceTemplates() {
    this._interfaceTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTemplatesInput() {
    return this._interfaceTemplates.internalValue;
  }

  // linksec_policy - computed: false, optional: true, required: false
  private _linksecPolicy?: string; 
  public get linksecPolicy() {
    return this.getStringAttribute('linksec_policy');
  }
  public set linksecPolicy(value: string) {
    this._linksecPolicy = value;
  }
  public resetLinksecPolicy() {
    this._linksecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksecPolicyInput() {
    return this._linksecPolicy;
  }

  // mdns_service_policy - computed: false, optional: true, required: false
  private _mdnsServicePolicy?: string; 
  public get mdnsServicePolicy() {
    return this.getStringAttribute('mdns_service_policy');
  }
  public set mdnsServicePolicy(value: string) {
    this._mdnsServicePolicy = value;
  }
  public resetMdnsServicePolicy() {
    this._mdnsServicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdnsServicePolicyInput() {
    return this._mdnsServicePolicy;
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

  // redirect_append_client_mac - computed: false, optional: true, required: false
  private _redirectAppendClientMac?: string; 
  public get redirectAppendClientMac() {
    return this.getStringAttribute('redirect_append_client_mac');
  }
  public set redirectAppendClientMac(value: string) {
    this._redirectAppendClientMac = value;
  }
  public resetRedirectAppendClientMac() {
    this._redirectAppendClientMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAppendClientMacInput() {
    return this._redirectAppendClientMac;
  }

  // redirect_append_switch_mac - computed: false, optional: true, required: false
  private _redirectAppendSwitchMac?: string; 
  public get redirectAppendSwitchMac() {
    return this.getStringAttribute('redirect_append_switch_mac');
  }
  public set redirectAppendSwitchMac(value: string) {
    this._redirectAppendSwitchMac = value;
  }
  public resetRedirectAppendSwitchMac() {
    this._redirectAppendSwitchMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAppendSwitchMacInput() {
    return this._redirectAppendSwitchMac;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // redirect_url_match_acl - computed: false, optional: true, required: false
  private _redirectUrlMatchAcl?: string; 
  public get redirectUrlMatchAcl() {
    return this.getStringAttribute('redirect_url_match_acl');
  }
  public set redirectUrlMatchAcl(value: string) {
    this._redirectUrlMatchAcl = value;
  }
  public resetRedirectUrlMatchAcl() {
    this._redirectUrlMatchAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlMatchAclInput() {
    return this._redirectUrlMatchAcl;
  }

  // redirect_url_match_action - computed: false, optional: true, required: false
  private _redirectUrlMatchAction?: string; 
  public get redirectUrlMatchAction() {
    return this.getStringAttribute('redirect_url_match_action');
  }
  public set redirectUrlMatchAction(value: string) {
    this._redirectUrlMatchAction = value;
  }
  public resetRedirectUrlMatchAction() {
    this._redirectUrlMatchAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlMatchActionInput() {
    return this._redirectUrlMatchAction;
  }

  // service_policy_qos_input - computed: false, optional: true, required: false
  private _servicePolicyQosInput?: string; 
  public get servicePolicyQosInput() {
    return this.getStringAttribute('service_policy_qos_input');
  }
  public set servicePolicyQosInput(value: string) {
    this._servicePolicyQosInput = value;
  }
  public resetServicePolicyQosInput() {
    this._servicePolicyQosInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyQosInputInput() {
    return this._servicePolicyQosInput;
  }

  // service_policy_qos_output - computed: false, optional: true, required: false
  private _servicePolicyQosOutput?: string; 
  public get servicePolicyQosOutput() {
    return this.getStringAttribute('service_policy_qos_output');
  }
  public set servicePolicyQosOutput(value: string) {
    this._servicePolicyQosOutput = value;
  }
  public resetServicePolicyQosOutput() {
    this._servicePolicyQosOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyQosOutputInput() {
    return this._servicePolicyQosOutput;
  }

  // sgt - computed: false, optional: true, required: false
  private _sgt?: number; 
  public get sgt() {
    return this.getNumberAttribute('sgt');
  }
  public set sgt(value: number) {
    this._sgt = value;
  }
  public resetSgt() {
    this._sgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ServiceTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ServiceTemplateTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tunnel_capwap_name - computed: false, optional: true, required: false
  private _tunnelCapwapName?: string; 
  public get tunnelCapwapName() {
    return this.getStringAttribute('tunnel_capwap_name');
  }
  public set tunnelCapwapName(value: string) {
    this._tunnelCapwapName = value;
  }
  public resetTunnelCapwapName() {
    this._tunnelCapwapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCapwapNameInput() {
    return this._tunnelCapwapName;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vnid - computed: false, optional: true, required: false
  private _vnid?: string; 
  public get vnid() {
    return this.getStringAttribute('vnid');
  }
  public set vnid(value: string) {
    this._vnid = value;
  }
  public resetVnid() {
    this._vnid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnidInput() {
    return this._vnid;
  }

  // voice_vlan - computed: false, optional: true, required: false
  private _voiceVlan?: boolean | cdktf.IResolvable; 
  public get voiceVlan() {
    return this.getBooleanAttribute('voice_vlan');
  }
  public set voiceVlan(value: boolean | cdktf.IResolvable) {
    this._voiceVlan = value;
  }
  public resetVoiceVlan() {
    this._voiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanInput() {
    return this._voiceVlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      absolute_timer: cdktf.numberToTerraform(this._absoluteTimer),
      access_groups: cdktf.listMapper(serviceTemplateAccessGroupsToTerraform, false)(this._accessGroups.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      dns_acl_preauth: cdktf.stringToTerraform(this._dnsAclPreauth),
      inactivity_timer: cdktf.numberToTerraform(this._inactivityTimer),
      inactivity_timer_probe: cdktf.booleanToTerraform(this._inactivityTimerProbe),
      interface_templates: cdktf.listMapper(serviceTemplateInterfaceTemplatesToTerraform, false)(this._interfaceTemplates.internalValue),
      linksec_policy: cdktf.stringToTerraform(this._linksecPolicy),
      mdns_service_policy: cdktf.stringToTerraform(this._mdnsServicePolicy),
      name: cdktf.stringToTerraform(this._name),
      redirect_append_client_mac: cdktf.stringToTerraform(this._redirectAppendClientMac),
      redirect_append_switch_mac: cdktf.stringToTerraform(this._redirectAppendSwitchMac),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      redirect_url_match_acl: cdktf.stringToTerraform(this._redirectUrlMatchAcl),
      redirect_url_match_action: cdktf.stringToTerraform(this._redirectUrlMatchAction),
      service_policy_qos_input: cdktf.stringToTerraform(this._servicePolicyQosInput),
      service_policy_qos_output: cdktf.stringToTerraform(this._servicePolicyQosOutput),
      sgt: cdktf.numberToTerraform(this._sgt),
      tags: cdktf.listMapper(serviceTemplateTagsToTerraform, false)(this._tags.internalValue),
      tunnel_capwap_name: cdktf.stringToTerraform(this._tunnelCapwapName),
      vlan: cdktf.numberToTerraform(this._vlan),
      vnid: cdktf.stringToTerraform(this._vnid),
      voice_vlan: cdktf.booleanToTerraform(this._voiceVlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absolute_timer: {
        value: cdktf.numberToHclTerraform(this._absoluteTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_groups: {
        value: cdktf.listMapperHcl(serviceTemplateAccessGroupsToHclTerraform, false)(this._accessGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceTemplateAccessGroupsList",
      },
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
      dns_acl_preauth: {
        value: cdktf.stringToHclTerraform(this._dnsAclPreauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactivity_timer: {
        value: cdktf.numberToHclTerraform(this._inactivityTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inactivity_timer_probe: {
        value: cdktf.booleanToHclTerraform(this._inactivityTimerProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_templates: {
        value: cdktf.listMapperHcl(serviceTemplateInterfaceTemplatesToHclTerraform, false)(this._interfaceTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceTemplateInterfaceTemplatesList",
      },
      linksec_policy: {
        value: cdktf.stringToHclTerraform(this._linksecPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdns_service_policy: {
        value: cdktf.stringToHclTerraform(this._mdnsServicePolicy),
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
      redirect_append_client_mac: {
        value: cdktf.stringToHclTerraform(this._redirectAppendClientMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_append_switch_mac: {
        value: cdktf.stringToHclTerraform(this._redirectAppendSwitchMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url_match_acl: {
        value: cdktf.stringToHclTerraform(this._redirectUrlMatchAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url_match_action: {
        value: cdktf.stringToHclTerraform(this._redirectUrlMatchAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_policy_qos_input: {
        value: cdktf.stringToHclTerraform(this._servicePolicyQosInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_policy_qos_output: {
        value: cdktf.stringToHclTerraform(this._servicePolicyQosOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt: {
        value: cdktf.numberToHclTerraform(this._sgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(serviceTemplateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceTemplateTagsList",
      },
      tunnel_capwap_name: {
        value: cdktf.stringToHclTerraform(this._tunnelCapwapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnid: {
        value: cdktf.stringToHclTerraform(this._vnid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_vlan: {
        value: cdktf.booleanToHclTerraform(this._voiceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
