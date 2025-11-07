// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/pim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxePimConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/pim#device DataIosxePim#device}
  */
  readonly device?: string;
}
export interface DataIosxePimRpAddresses {
}

export function dataIosxePimRpAddressesToTerraform(struct?: DataIosxePimRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePimRpAddressesToHclTerraform(struct?: DataIosxePimRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePimRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePimRpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePimRpAddresses | undefined) {
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

  // bidir - computed: true, optional: false, required: false
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // rp_address - computed: true, optional: false, required: false
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
}

export class DataIosxePimRpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePimRpAddressesOutputReference {
    return new DataIosxePimRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePimRpCandidates {
}

export function dataIosxePimRpCandidatesToTerraform(struct?: DataIosxePimRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePimRpCandidatesToHclTerraform(struct?: DataIosxePimRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePimRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePimRpCandidates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePimRpCandidates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bidir - computed: true, optional: false, required: false
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxePimRpCandidatesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePimRpCandidatesOutputReference {
    return new DataIosxePimRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePimVrfsRpAddresses {
}

export function dataIosxePimVrfsRpAddressesToTerraform(struct?: DataIosxePimVrfsRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePimVrfsRpAddressesToHclTerraform(struct?: DataIosxePimVrfsRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePimVrfsRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePimVrfsRpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePimVrfsRpAddresses | undefined) {
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

  // bidir - computed: true, optional: false, required: false
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // rp_address - computed: true, optional: false, required: false
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
}

export class DataIosxePimVrfsRpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePimVrfsRpAddressesOutputReference {
    return new DataIosxePimVrfsRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePimVrfsRpCandidates {
}

export function dataIosxePimVrfsRpCandidatesToTerraform(struct?: DataIosxePimVrfsRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePimVrfsRpCandidatesToHclTerraform(struct?: DataIosxePimVrfsRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePimVrfsRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePimVrfsRpCandidates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePimVrfsRpCandidates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bidir - computed: true, optional: false, required: false
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxePimVrfsRpCandidatesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePimVrfsRpCandidatesOutputReference {
    return new DataIosxePimVrfsRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePimVrfs {
}

export function dataIosxePimVrfsToTerraform(struct?: DataIosxePimVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePimVrfsToHclTerraform(struct?: DataIosxePimVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePimVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePimVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePimVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autorp - computed: true, optional: false, required: false
  public get autorp() {
    return this.getBooleanAttribute('autorp');
  }

  // autorp_listener - computed: true, optional: false, required: false
  public get autorpListener() {
    return this.getBooleanAttribute('autorp_listener');
  }

  // bsr_candidate_accept_rp_candidate - computed: true, optional: false, required: false
  public get bsrCandidateAcceptRpCandidate() {
    return this.getStringAttribute('bsr_candidate_accept_rp_candidate');
  }

  // bsr_candidate_loopback - computed: true, optional: false, required: false
  public get bsrCandidateLoopback() {
    return this.getNumberAttribute('bsr_candidate_loopback');
  }

  // bsr_candidate_mask - computed: true, optional: false, required: false
  public get bsrCandidateMask() {
    return this.getNumberAttribute('bsr_candidate_mask');
  }

  // bsr_candidate_priority - computed: true, optional: false, required: false
  public get bsrCandidatePriority() {
    return this.getNumberAttribute('bsr_candidate_priority');
  }

  // cache_rpf_oif - computed: true, optional: false, required: false
  public get cacheRpfOif() {
    return this.getBooleanAttribute('cache_rpf_oif');
  }

  // rp_address - computed: true, optional: false, required: false
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }

  // rp_address_bidir - computed: true, optional: false, required: false
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }

  // rp_address_override - computed: true, optional: false, required: false
  public get rpAddressOverride() {
    return this.getBooleanAttribute('rp_address_override');
  }

  // rp_addresses - computed: true, optional: false, required: false
  private _rpAddresses = new DataIosxePimVrfsRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }

  // rp_candidates - computed: true, optional: false, required: false
  private _rpCandidates = new DataIosxePimVrfsRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }

  // ssm_default - computed: true, optional: false, required: false
  public get ssmDefault() {
    return this.getBooleanAttribute('ssm_default');
  }

  // ssm_range - computed: true, optional: false, required: false
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxePimVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePimVrfsOutputReference {
    return new DataIosxePimVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/pim iosxe_pim}
*/
export class DataIosxePim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_pim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxePim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxePim to import
  * @param importFromId The id of the existing DataIosxePim that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/pim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxePim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_pim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/pim iosxe_pim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxePimConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxePimConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_pim',
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
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autorp - computed: true, optional: false, required: false
  public get autorp() {
    return this.getBooleanAttribute('autorp');
  }

  // autorp_listener - computed: true, optional: false, required: false
  public get autorpListener() {
    return this.getBooleanAttribute('autorp_listener');
  }

  // bsr_candidate_accept_rp_candidate - computed: true, optional: false, required: false
  public get bsrCandidateAcceptRpCandidate() {
    return this.getStringAttribute('bsr_candidate_accept_rp_candidate');
  }

  // bsr_candidate_loopback - computed: true, optional: false, required: false
  public get bsrCandidateLoopback() {
    return this.getNumberAttribute('bsr_candidate_loopback');
  }

  // bsr_candidate_mask - computed: true, optional: false, required: false
  public get bsrCandidateMask() {
    return this.getNumberAttribute('bsr_candidate_mask');
  }

  // bsr_candidate_priority - computed: true, optional: false, required: false
  public get bsrCandidatePriority() {
    return this.getNumberAttribute('bsr_candidate_priority');
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

  // rp_address - computed: true, optional: false, required: false
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }

  // rp_address_bidir - computed: true, optional: false, required: false
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }

  // rp_address_override - computed: true, optional: false, required: false
  public get rpAddressOverride() {
    return this.getBooleanAttribute('rp_address_override');
  }

  // rp_addresses - computed: true, optional: false, required: false
  private _rpAddresses = new DataIosxePimRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }

  // rp_candidates - computed: true, optional: false, required: false
  private _rpCandidates = new DataIosxePimRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }

  // ssm_default - computed: true, optional: false, required: false
  public get ssmDefault() {
    return this.getBooleanAttribute('ssm_default');
  }

  // ssm_range - computed: true, optional: false, required: false
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }

  // vrfs - computed: true, optional: false, required: false
  private _vrfs = new DataIosxePimVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
