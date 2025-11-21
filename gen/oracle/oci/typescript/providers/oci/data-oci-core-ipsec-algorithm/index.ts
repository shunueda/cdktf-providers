// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_ipsec_algorithm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreIpsecAlgorithmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters {
}

export function dataOciCoreIpsecAlgorithmAllowedPhaseOneParametersToTerraform(struct?: DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecAlgorithmAllowedPhaseOneParametersToHclTerraform(struct?: DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_algorithms - computed: true, optional: false, required: false
  public get authenticationAlgorithms() {
    return this.getListAttribute('authentication_algorithms');
  }

  // dh_groups - computed: true, optional: false, required: false
  public get dhGroups() {
    return this.getListAttribute('dh_groups');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
  }
}

export class DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference {
    return new DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters {
}

export function dataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersToTerraform(struct?: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersToHclTerraform(struct?: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_algorithms - computed: true, optional: false, required: false
  public get authenticationAlgorithms() {
    return this.getListAttribute('authentication_algorithms');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
  }

  // pfs_dh_groups - computed: true, optional: false, required: false
  public get pfsDhGroups() {
    return this.getListAttribute('pfs_dh_groups');
  }
}

export class DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference {
    return new DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters {
}

export function dataOciCoreIpsecAlgorithmDefaultPhaseOneParametersToTerraform(struct?: DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecAlgorithmDefaultPhaseOneParametersToHclTerraform(struct?: DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_authentication_algorithms - computed: true, optional: false, required: false
  public get defaultAuthenticationAlgorithms() {
    return this.getListAttribute('default_authentication_algorithms');
  }

  // default_dh_groups - computed: true, optional: false, required: false
  public get defaultDhGroups() {
    return this.getListAttribute('default_dh_groups');
  }

  // default_encryption_algorithms - computed: true, optional: false, required: false
  public get defaultEncryptionAlgorithms() {
    return this.getListAttribute('default_encryption_algorithms');
  }
}

export class DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference {
    return new DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters {
}

export function dataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersToTerraform(struct?: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersToHclTerraform(struct?: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_authentication_algorithms - computed: true, optional: false, required: false
  public get defaultAuthenticationAlgorithms() {
    return this.getListAttribute('default_authentication_algorithms');
  }

  // default_encryption_algorithms - computed: true, optional: false, required: false
  public get defaultEncryptionAlgorithms() {
    return this.getListAttribute('default_encryption_algorithms');
  }

  // default_pfs_dh_group - computed: true, optional: false, required: false
  public get defaultPfsDhGroup() {
    return this.getStringAttribute('default_pfs_dh_group');
  }
}

export class DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference {
    return new DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm}
*/
export class DataOciCoreIpsecAlgorithm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec_algorithm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreIpsecAlgorithm to import
  * @param importFromId The id of the existing DataOciCoreIpsecAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_ipsec_algorithm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreIpsecAlgorithm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec_algorithm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreIpsecAlgorithmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecAlgorithmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_algorithm',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_phase_one_parameters - computed: true, optional: false, required: false
  private _allowedPhaseOneParameters = new DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList(this, "allowed_phase_one_parameters", false);
  public get allowedPhaseOneParameters() {
    return this._allowedPhaseOneParameters;
  }

  // allowed_phase_two_parameters - computed: true, optional: false, required: false
  private _allowedPhaseTwoParameters = new DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList(this, "allowed_phase_two_parameters", false);
  public get allowedPhaseTwoParameters() {
    return this._allowedPhaseTwoParameters;
  }

  // default_phase_one_parameters - computed: true, optional: false, required: false
  private _defaultPhaseOneParameters = new DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList(this, "default_phase_one_parameters", false);
  public get defaultPhaseOneParameters() {
    return this._defaultPhaseOneParameters;
  }

  // default_phase_two_parameters - computed: true, optional: false, required: false
  private _defaultPhaseTwoParameters = new DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList(this, "default_phase_two_parameters", false);
  public get defaultPhaseTwoParameters() {
    return this._defaultPhaseTwoParameters;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
