// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCedgePimFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template#id DataSdwanCedgePimFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template#name DataSdwanCedgePimFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCedgePimFeatureTemplateInterfaces {
}

export function dataSdwanCedgePimFeatureTemplateInterfacesToTerraform(struct?: DataSdwanCedgePimFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgePimFeatureTemplateInterfacesToHclTerraform(struct?: DataSdwanCedgePimFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgePimFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgePimFeatureTemplateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgePimFeatureTemplateInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // join_prune_interval - computed: true, optional: false, required: false
  public get joinPruneInterval() {
    return this.getNumberAttribute('join_prune_interval');
  }

  // join_prune_interval_variable - computed: true, optional: false, required: false
  public get joinPruneIntervalVariable() {
    return this.getStringAttribute('join_prune_interval_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // query_interval - computed: true, optional: false, required: false
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }

  // query_interval_variable - computed: true, optional: false, required: false
  public get queryIntervalVariable() {
    return this.getStringAttribute('query_interval_variable');
  }
}

export class DataSdwanCedgePimFeatureTemplateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgePimFeatureTemplateInterfacesOutputReference {
    return new DataSdwanCedgePimFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgePimFeatureTemplateRpAddresses {
}

export function dataSdwanCedgePimFeatureTemplateRpAddressesToTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgePimFeatureTemplateRpAddressesToHclTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgePimFeatureTemplateRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgePimFeatureTemplateRpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgePimFeatureTemplateRpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // access_list_variable - computed: true, optional: false, required: false
  public get accessListVariable() {
    return this.getStringAttribute('access_list_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // override_variable - computed: true, optional: false, required: false
  public get overrideVariable() {
    return this.getStringAttribute('override_variable');
  }
}

export class DataSdwanCedgePimFeatureTemplateRpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgePimFeatureTemplateRpAddressesOutputReference {
    return new DataSdwanCedgePimFeatureTemplateRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgePimFeatureTemplateRpAnnounceFields {
}

export function dataSdwanCedgePimFeatureTemplateRpAnnounceFieldsToTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpAnnounceFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgePimFeatureTemplateRpAnnounceFieldsToHclTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpAnnounceFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgePimFeatureTemplateRpAnnounceFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgePimFeatureTemplateRpAnnounceFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgePimFeatureTemplateRpAnnounceFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getNumberAttribute('scope');
  }

  // scope_variable - computed: true, optional: false, required: false
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }
}

export class DataSdwanCedgePimFeatureTemplateRpAnnounceFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgePimFeatureTemplateRpAnnounceFieldsOutputReference {
    return new DataSdwanCedgePimFeatureTemplateRpAnnounceFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCedgePimFeatureTemplateRpCandidates {
}

export function dataSdwanCedgePimFeatureTemplateRpCandidatesToTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCedgePimFeatureTemplateRpCandidatesToHclTerraform(struct?: DataSdwanCedgePimFeatureTemplateRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCedgePimFeatureTemplateRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCedgePimFeatureTemplateRpCandidates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCedgePimFeatureTemplateRpCandidates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // access_list_variable - computed: true, optional: false, required: false
  public get accessListVariable() {
    return this.getStringAttribute('access_list_variable');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_variable - computed: true, optional: false, required: false
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_variable - computed: true, optional: false, required: false
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
}

export class DataSdwanCedgePimFeatureTemplateRpCandidatesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCedgePimFeatureTemplateRpCandidatesOutputReference {
    return new DataSdwanCedgePimFeatureTemplateRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template sdwan_cedge_pim_feature_template}
*/
export class DataSdwanCedgePimFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_pim_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCedgePimFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCedgePimFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCedgePimFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCedgePimFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_pim_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_pim_feature_template sdwan_cedge_pim_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCedgePimFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCedgePimFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_pim_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rp - computed: true, optional: false, required: false
  public get autoRp() {
    return this.getBooleanAttribute('auto_rp');
  }

  // auto_rp_variable - computed: true, optional: false, required: false
  public get autoRpVariable() {
    return this.getStringAttribute('auto_rp_variable');
  }

  // bsr_candidate - computed: true, optional: false, required: false
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }

  // bsr_candidate_variable - computed: true, optional: false, required: false
  public get bsrCandidateVariable() {
    return this.getStringAttribute('bsr_candidate_variable');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // default_variable - computed: true, optional: false, required: false
  public get defaultVariable() {
    return this.getStringAttribute('default_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // hash_mask_length - computed: true, optional: false, required: false
  public get hashMaskLength() {
    return this.getStringAttribute('hash_mask_length');
  }

  // hash_mask_length_variable - computed: true, optional: false, required: false
  public get hashMaskLengthVariable() {
    return this.getStringAttribute('hash_mask_length_variable');
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

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanCedgePimFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // range_variable - computed: true, optional: false, required: false
  public get rangeVariable() {
    return this.getStringAttribute('range_variable');
  }

  // rp_addresses - computed: true, optional: false, required: false
  private _rpAddresses = new DataSdwanCedgePimFeatureTemplateRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }

  // rp_announce_fields - computed: true, optional: false, required: false
  private _rpAnnounceFields = new DataSdwanCedgePimFeatureTemplateRpAnnounceFieldsList(this, "rp_announce_fields", false);
  public get rpAnnounceFields() {
    return this._rpAnnounceFields;
  }

  // rp_candidate_access_list - computed: true, optional: false, required: false
  public get rpCandidateAccessList() {
    return this.getStringAttribute('rp_candidate_access_list');
  }

  // rp_candidate_access_list_variable - computed: true, optional: false, required: false
  public get rpCandidateAccessListVariable() {
    return this.getStringAttribute('rp_candidate_access_list_variable');
  }

  // rp_candidates - computed: true, optional: false, required: false
  private _rpCandidates = new DataSdwanCedgePimFeatureTemplateRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getNumberAttribute('scope');
  }

  // scope_variable - computed: true, optional: false, required: false
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }

  // spt_threshold - computed: true, optional: false, required: false
  public get sptThreshold() {
    return this.getStringAttribute('spt_threshold');
  }

  // spt_threshold_variable - computed: true, optional: false, required: false
  public get sptThresholdVariable() {
    return this.getStringAttribute('spt_threshold_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
