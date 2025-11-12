// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemSecurityFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature#feature_profile_id DataSdwanSystemSecurityFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature#id DataSdwanSystemSecurityFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanSystemSecurityFeatureKeychains {
}

export function dataSdwanSystemSecurityFeatureKeychainsToTerraform(struct?: DataSdwanSystemSecurityFeatureKeychains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemSecurityFeatureKeychainsToHclTerraform(struct?: DataSdwanSystemSecurityFeatureKeychains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemSecurityFeatureKeychainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemSecurityFeatureKeychains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemSecurityFeatureKeychains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_chain_name - computed: true, optional: false, required: false
  public get keyChainName() {
    return this.getStringAttribute('key_chain_name');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
}

export class DataSdwanSystemSecurityFeatureKeychainsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemSecurityFeatureKeychainsOutputReference {
    return new DataSdwanSystemSecurityFeatureKeychainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSystemSecurityFeatureKeys {
}

export function dataSdwanSystemSecurityFeatureKeysToTerraform(struct?: DataSdwanSystemSecurityFeatureKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemSecurityFeatureKeysToHclTerraform(struct?: DataSdwanSystemSecurityFeatureKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemSecurityFeatureKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemSecurityFeatureKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemSecurityFeatureKeys | undefined) {
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

  // accept_life_time_duration - computed: true, optional: false, required: false
  public get acceptLifeTimeDuration() {
    return this.getNumberAttribute('accept_life_time_duration');
  }

  // accept_life_time_duration_variable - computed: true, optional: false, required: false
  public get acceptLifeTimeDurationVariable() {
    return this.getStringAttribute('accept_life_time_duration_variable');
  }

  // accept_life_time_exact - computed: true, optional: false, required: false
  public get acceptLifeTimeExact() {
    return this.getNumberAttribute('accept_life_time_exact');
  }

  // accept_life_time_infinite - computed: true, optional: false, required: false
  public get acceptLifeTimeInfinite() {
    return this.getBooleanAttribute('accept_life_time_infinite');
  }

  // accept_life_time_infinite_variable - computed: true, optional: false, required: false
  public get acceptLifeTimeInfiniteVariable() {
    return this.getStringAttribute('accept_life_time_infinite_variable');
  }

  // accept_life_time_local - computed: true, optional: false, required: false
  public get acceptLifeTimeLocal() {
    return this.getBooleanAttribute('accept_life_time_local');
  }

  // accept_life_time_local_variable - computed: true, optional: false, required: false
  public get acceptLifeTimeLocalVariable() {
    return this.getStringAttribute('accept_life_time_local_variable');
  }

  // accept_life_time_start_epoch - computed: true, optional: false, required: false
  public get acceptLifeTimeStartEpoch() {
    return this.getNumberAttribute('accept_life_time_start_epoch');
  }

  // crypto_algorithm - computed: true, optional: false, required: false
  public get cryptoAlgorithm() {
    return this.getStringAttribute('crypto_algorithm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // receiver_id - computed: true, optional: false, required: false
  public get receiverId() {
    return this.getNumberAttribute('receiver_id');
  }

  // receiver_id_variable - computed: true, optional: false, required: false
  public get receiverIdVariable() {
    return this.getStringAttribute('receiver_id_variable');
  }

  // send_id - computed: true, optional: false, required: false
  public get sendId() {
    return this.getNumberAttribute('send_id');
  }

  // send_id_variable - computed: true, optional: false, required: false
  public get sendIdVariable() {
    return this.getStringAttribute('send_id_variable');
  }

  // send_life_time_duration - computed: true, optional: false, required: false
  public get sendLifeTimeDuration() {
    return this.getNumberAttribute('send_life_time_duration');
  }

  // send_life_time_duration_variable - computed: true, optional: false, required: false
  public get sendLifeTimeDurationVariable() {
    return this.getStringAttribute('send_life_time_duration_variable');
  }

  // send_life_time_exact - computed: true, optional: false, required: false
  public get sendLifeTimeExact() {
    return this.getNumberAttribute('send_life_time_exact');
  }

  // send_life_time_infinite - computed: true, optional: false, required: false
  public get sendLifeTimeInfinite() {
    return this.getBooleanAttribute('send_life_time_infinite');
  }

  // send_life_time_infinite_variable - computed: true, optional: false, required: false
  public get sendLifeTimeInfiniteVariable() {
    return this.getStringAttribute('send_life_time_infinite_variable');
  }

  // send_life_time_local - computed: true, optional: false, required: false
  public get sendLifeTimeLocal() {
    return this.getBooleanAttribute('send_life_time_local');
  }

  // send_life_time_local_variable - computed: true, optional: false, required: false
  public get sendLifeTimeLocalVariable() {
    return this.getStringAttribute('send_life_time_local_variable');
  }

  // send_life_time_start_epoch - computed: true, optional: false, required: false
  public get sendLifeTimeStartEpoch() {
    return this.getNumberAttribute('send_life_time_start_epoch');
  }
}

export class DataSdwanSystemSecurityFeatureKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemSecurityFeatureKeysOutputReference {
    return new DataSdwanSystemSecurityFeatureKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature sdwan_system_security_feature}
*/
export class DataSdwanSystemSecurityFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_security_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemSecurityFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemSecurityFeature to import
  * @param importFromId The id of the existing DataSdwanSystemSecurityFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemSecurityFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_security_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_security_feature sdwan_system_security_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemSecurityFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemSecurityFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_security_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_replay_window - computed: true, optional: false, required: false
  public get antiReplayWindow() {
    return this.getStringAttribute('anti_replay_window');
  }

  // anti_replay_window_variable - computed: true, optional: false, required: false
  public get antiReplayWindowVariable() {
    return this.getStringAttribute('anti_replay_window_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extended_anti_replay_window - computed: true, optional: false, required: false
  public get extendedAntiReplayWindow() {
    return this.getNumberAttribute('extended_anti_replay_window');
  }

  // extended_anti_replay_window_variable - computed: true, optional: false, required: false
  public get extendedAntiReplayWindowVariable() {
    return this.getStringAttribute('extended_anti_replay_window_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // ipsec_pairwise_keying - computed: true, optional: false, required: false
  public get ipsecPairwiseKeying() {
    return this.getBooleanAttribute('ipsec_pairwise_keying');
  }

  // ipsec_pairwise_keying_variable - computed: true, optional: false, required: false
  public get ipsecPairwiseKeyingVariable() {
    return this.getStringAttribute('ipsec_pairwise_keying_variable');
  }

  // keychains - computed: true, optional: false, required: false
  private _keychains = new DataSdwanSystemSecurityFeatureKeychainsList(this, "keychains", false);
  public get keychains() {
    return this._keychains;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataSdwanSystemSecurityFeatureKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rekey - computed: true, optional: false, required: false
  public get rekey() {
    return this.getNumberAttribute('rekey');
  }

  // rekey_variable - computed: true, optional: false, required: false
  public get rekeyVariable() {
    return this.getStringAttribute('rekey_variable');
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
