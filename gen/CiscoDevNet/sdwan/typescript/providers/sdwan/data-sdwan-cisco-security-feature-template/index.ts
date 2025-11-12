// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoSecurityFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template#id DataSdwanCiscoSecurityFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template#name DataSdwanCiscoSecurityFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoSecurityFeatureTemplateKeychains {
}

export function dataSdwanCiscoSecurityFeatureTemplateKeychainsToTerraform(struct?: DataSdwanCiscoSecurityFeatureTemplateKeychains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecurityFeatureTemplateKeychainsToHclTerraform(struct?: DataSdwanCiscoSecurityFeatureTemplateKeychains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecurityFeatureTemplateKeychainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecurityFeatureTemplateKeychains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecurityFeatureTemplateKeychains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoSecurityFeatureTemplateKeychainsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecurityFeatureTemplateKeychainsOutputReference {
    return new DataSdwanCiscoSecurityFeatureTemplateKeychainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSecurityFeatureTemplateKeys {
}

export function dataSdwanCiscoSecurityFeatureTemplateKeysToTerraform(struct?: DataSdwanCiscoSecurityFeatureTemplateKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSecurityFeatureTemplateKeysToHclTerraform(struct?: DataSdwanCiscoSecurityFeatureTemplateKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSecurityFeatureTemplateKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSecurityFeatureTemplateKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSecurityFeatureTemplateKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_ao_mismatch - computed: true, optional: false, required: false
  public get acceptAoMismatch() {
    return this.getBooleanAttribute('accept_ao_mismatch');
  }

  // accept_ao_mismatch_variable - computed: true, optional: false, required: false
  public get acceptAoMismatchVariable() {
    return this.getStringAttribute('accept_ao_mismatch_variable');
  }

  // accept_lifetime_duration - computed: true, optional: false, required: false
  public get acceptLifetimeDuration() {
    return this.getNumberAttribute('accept_lifetime_duration');
  }

  // accept_lifetime_duration_variable - computed: true, optional: false, required: false
  public get acceptLifetimeDurationVariable() {
    return this.getStringAttribute('accept_lifetime_duration_variable');
  }

  // accept_lifetime_end_time - computed: true, optional: false, required: false
  public get acceptLifetimeEndTime() {
    return this.getStringAttribute('accept_lifetime_end_time');
  }

  // accept_lifetime_end_time_format - computed: true, optional: false, required: false
  public get acceptLifetimeEndTimeFormat() {
    return this.getStringAttribute('accept_lifetime_end_time_format');
  }

  // accept_lifetime_infinite - computed: true, optional: false, required: false
  public get acceptLifetimeInfinite() {
    return this.getBooleanAttribute('accept_lifetime_infinite');
  }

  // accept_lifetime_infinite_variable - computed: true, optional: false, required: false
  public get acceptLifetimeInfiniteVariable() {
    return this.getStringAttribute('accept_lifetime_infinite_variable');
  }

  // accept_lifetime_local - computed: true, optional: false, required: false
  public get acceptLifetimeLocal() {
    return this.getBooleanAttribute('accept_lifetime_local');
  }

  // accept_lifetime_local_variable - computed: true, optional: false, required: false
  public get acceptLifetimeLocalVariable() {
    return this.getStringAttribute('accept_lifetime_local_variable');
  }

  // accept_lifetime_start_time - computed: true, optional: false, required: false
  public get acceptLifetimeStartTime() {
    return this.getStringAttribute('accept_lifetime_start_time');
  }

  // chain_name - computed: true, optional: false, required: false
  public get chainName() {
    return this.getStringAttribute('chain_name');
  }

  // crypto_algorithm - computed: true, optional: false, required: false
  public get cryptoAlgorithm() {
    return this.getStringAttribute('crypto_algorithm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tcp_options - computed: true, optional: false, required: false
  public get includeTcpOptions() {
    return this.getBooleanAttribute('include_tcp_options');
  }

  // include_tcp_options_variable - computed: true, optional: false, required: false
  public get includeTcpOptionsVariable() {
    return this.getStringAttribute('include_tcp_options_variable');
  }

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
  }

  // key_string_variable - computed: true, optional: false, required: false
  public get keyStringVariable() {
    return this.getStringAttribute('key_string_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // receive_id - computed: true, optional: false, required: false
  public get receiveId() {
    return this.getNumberAttribute('receive_id');
  }

  // receive_id_variable - computed: true, optional: false, required: false
  public get receiveIdVariable() {
    return this.getStringAttribute('receive_id_variable');
  }

  // send_id - computed: true, optional: false, required: false
  public get sendId() {
    return this.getNumberAttribute('send_id');
  }

  // send_id_variable - computed: true, optional: false, required: false
  public get sendIdVariable() {
    return this.getStringAttribute('send_id_variable');
  }

  // send_lifetime_duration - computed: true, optional: false, required: false
  public get sendLifetimeDuration() {
    return this.getNumberAttribute('send_lifetime_duration');
  }

  // send_lifetime_duration_variable - computed: true, optional: false, required: false
  public get sendLifetimeDurationVariable() {
    return this.getStringAttribute('send_lifetime_duration_variable');
  }

  // send_lifetime_end_time - computed: true, optional: false, required: false
  public get sendLifetimeEndTime() {
    return this.getStringAttribute('send_lifetime_end_time');
  }

  // send_lifetime_end_time_format - computed: true, optional: false, required: false
  public get sendLifetimeEndTimeFormat() {
    return this.getStringAttribute('send_lifetime_end_time_format');
  }

  // send_lifetime_infinite - computed: true, optional: false, required: false
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }

  // send_lifetime_infinite_variable - computed: true, optional: false, required: false
  public get sendLifetimeInfiniteVariable() {
    return this.getStringAttribute('send_lifetime_infinite_variable');
  }

  // send_lifetime_local - computed: true, optional: false, required: false
  public get sendLifetimeLocal() {
    return this.getBooleanAttribute('send_lifetime_local');
  }

  // send_lifetime_local_variable - computed: true, optional: false, required: false
  public get sendLifetimeLocalVariable() {
    return this.getStringAttribute('send_lifetime_local_variable');
  }

  // send_lifetime_start_time - computed: true, optional: false, required: false
  public get sendLifetimeStartTime() {
    return this.getStringAttribute('send_lifetime_start_time');
  }
}

export class DataSdwanCiscoSecurityFeatureTemplateKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSecurityFeatureTemplateKeysOutputReference {
    return new DataSdwanCiscoSecurityFeatureTemplateKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template sdwan_cisco_security_feature_template}
*/
export class DataSdwanCiscoSecurityFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_security_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoSecurityFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoSecurityFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoSecurityFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoSecurityFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_security_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_security_feature_template sdwan_cisco_security_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoSecurityFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoSecurityFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_security_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_type'));
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // extended_ar_window - computed: true, optional: false, required: false
  public get extendedArWindow() {
    return this.getNumberAttribute('extended_ar_window');
  }

  // extended_ar_window_variable - computed: true, optional: false, required: false
  public get extendedArWindowVariable() {
    return this.getStringAttribute('extended_ar_window_variable');
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

  // integrity_type - computed: true, optional: false, required: false
  public get integrityType() {
    return cdktf.Fn.tolist(this.getListAttribute('integrity_type'));
  }

  // integrity_type_variable - computed: true, optional: false, required: false
  public get integrityTypeVariable() {
    return this.getStringAttribute('integrity_type_variable');
  }

  // keychains - computed: true, optional: false, required: false
  private _keychains = new DataSdwanCiscoSecurityFeatureTemplateKeychainsList(this, "keychains", false);
  public get keychains() {
    return this._keychains;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataSdwanCiscoSecurityFeatureTemplateKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
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

  // pairwise_keying - computed: true, optional: false, required: false
  public get pairwiseKeying() {
    return this.getBooleanAttribute('pairwise_keying');
  }

  // pairwise_keying_variable - computed: true, optional: false, required: false
  public get pairwiseKeyingVariable() {
    return this.getStringAttribute('pairwise_keying_variable');
  }

  // rekey_interval - computed: true, optional: false, required: false
  public get rekeyInterval() {
    return this.getNumberAttribute('rekey_interval');
  }

  // rekey_interval_variable - computed: true, optional: false, required: false
  public get rekeyIntervalVariable() {
    return this.getStringAttribute('rekey_interval_variable');
  }

  // replay_window - computed: true, optional: false, required: false
  public get replayWindow() {
    return this.getStringAttribute('replay_window');
  }

  // replay_window_variable - computed: true, optional: false, required: false
  public get replayWindowVariable() {
    return this.getStringAttribute('replay_window_variable');
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
