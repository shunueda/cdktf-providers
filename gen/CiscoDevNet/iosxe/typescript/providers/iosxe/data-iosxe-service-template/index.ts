// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeServiceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template#device DataIosxeServiceTemplate#device}
  */
  readonly device?: string;
  /**
  * Specify a template name (maximum 48 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template#name DataIosxeServiceTemplate#name}
  */
  readonly name: string;
}
export interface DataIosxeServiceTemplateAccessGroups {
}

export function dataIosxeServiceTemplateAccessGroupsToTerraform(struct?: DataIosxeServiceTemplateAccessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeServiceTemplateAccessGroupsToHclTerraform(struct?: DataIosxeServiceTemplateAccessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeServiceTemplateAccessGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeServiceTemplateAccessGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeServiceTemplateAccessGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeServiceTemplateAccessGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeServiceTemplateAccessGroupsOutputReference {
    return new DataIosxeServiceTemplateAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeServiceTemplateInterfaceTemplates {
}

export function dataIosxeServiceTemplateInterfaceTemplatesToTerraform(struct?: DataIosxeServiceTemplateInterfaceTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeServiceTemplateInterfaceTemplatesToHclTerraform(struct?: DataIosxeServiceTemplateInterfaceTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeServiceTemplateInterfaceTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeServiceTemplateInterfaceTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeServiceTemplateInterfaceTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeServiceTemplateInterfaceTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeServiceTemplateInterfaceTemplatesOutputReference {
    return new DataIosxeServiceTemplateInterfaceTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeServiceTemplateTags {
}

export function dataIosxeServiceTemplateTagsToTerraform(struct?: DataIosxeServiceTemplateTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeServiceTemplateTagsToHclTerraform(struct?: DataIosxeServiceTemplateTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeServiceTemplateTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeServiceTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeServiceTemplateTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeServiceTemplateTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeServiceTemplateTagsOutputReference {
    return new DataIosxeServiceTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template iosxe_service_template}
*/
export class DataIosxeServiceTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_service_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeServiceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeServiceTemplate to import
  * @param importFromId The id of the existing DataIosxeServiceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeServiceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_service_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/service_template iosxe_service_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeServiceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeServiceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_service_template',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_timer - computed: true, optional: false, required: false
  public get absoluteTimer() {
    return this.getNumberAttribute('absolute_timer');
  }

  // access_groups - computed: true, optional: false, required: false
  private _accessGroups = new DataIosxeServiceTemplateAccessGroupsList(this, "access_groups", false);
  public get accessGroups() {
    return this._accessGroups;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // dns_acl_preauth - computed: true, optional: false, required: false
  public get dnsAclPreauth() {
    return this.getStringAttribute('dns_acl_preauth');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactivity_timer - computed: true, optional: false, required: false
  public get inactivityTimer() {
    return this.getNumberAttribute('inactivity_timer');
  }

  // inactivity_timer_probe - computed: true, optional: false, required: false
  public get inactivityTimerProbe() {
    return this.getBooleanAttribute('inactivity_timer_probe');
  }

  // interface_templates - computed: true, optional: false, required: false
  private _interfaceTemplates = new DataIosxeServiceTemplateInterfaceTemplatesList(this, "interface_templates", false);
  public get interfaceTemplates() {
    return this._interfaceTemplates;
  }

  // linksec_policy - computed: true, optional: false, required: false
  public get linksecPolicy() {
    return this.getStringAttribute('linksec_policy');
  }

  // mdns_service_policy - computed: true, optional: false, required: false
  public get mdnsServicePolicy() {
    return this.getStringAttribute('mdns_service_policy');
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

  // redirect_append_client_mac - computed: true, optional: false, required: false
  public get redirectAppendClientMac() {
    return this.getStringAttribute('redirect_append_client_mac');
  }

  // redirect_append_switch_mac - computed: true, optional: false, required: false
  public get redirectAppendSwitchMac() {
    return this.getStringAttribute('redirect_append_switch_mac');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // redirect_url_match_acl - computed: true, optional: false, required: false
  public get redirectUrlMatchAcl() {
    return this.getStringAttribute('redirect_url_match_acl');
  }

  // redirect_url_match_action - computed: true, optional: false, required: false
  public get redirectUrlMatchAction() {
    return this.getStringAttribute('redirect_url_match_action');
  }

  // service_policy_qos_input - computed: true, optional: false, required: false
  public get servicePolicyQosInput() {
    return this.getStringAttribute('service_policy_qos_input');
  }

  // service_policy_qos_output - computed: true, optional: false, required: false
  public get servicePolicyQosOutput() {
    return this.getStringAttribute('service_policy_qos_output');
  }

  // sgt - computed: true, optional: false, required: false
  public get sgt() {
    return this.getNumberAttribute('sgt');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIosxeServiceTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tunnel_capwap_name - computed: true, optional: false, required: false
  public get tunnelCapwapName() {
    return this.getStringAttribute('tunnel_capwap_name');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getStringAttribute('vnid');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getBooleanAttribute('voice_vlan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
