// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementDataVpnCommunityStarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star#id DataCheckpointManagementDataVpnCommunityStar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star#name DataCheckpointManagementDataVpnCommunityStar#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star#uid DataCheckpointManagementDataVpnCommunityStar#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementDataVpnCommunityStarGranularEncryptions {
}

export function dataCheckpointManagementDataVpnCommunityStarGranularEncryptionsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarGranularEncryptionsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarGranularEncryptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // internal_gateway - computed: true, optional: false, required: false
  public get internalGateway() {
    return this.getStringAttribute('internal_gateway');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains {
}

export function dataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // vpn_domain - computed: true, optional: false, required: false
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarSharedSecrets {
}

export function dataCheckpointManagementDataVpnCommunityStarSharedSecretsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarSharedSecretsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarSharedSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarSharedSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarSharedSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star checkpoint_management_data_vpn_community_star}
*/
export class DataCheckpointManagementDataVpnCommunityStar extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_vpn_community_star";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementDataVpnCommunityStar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementDataVpnCommunityStar to import
  * @param importFromId The id of the existing DataCheckpointManagementDataVpnCommunityStar that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementDataVpnCommunityStar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_vpn_community_star", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_data_vpn_community_star checkpoint_management_data_vpn_community_star} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementDataVpnCommunityStarConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementDataVpnCommunityStarConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_vpn_community_star',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // center_gateways - computed: true, optional: false, required: false
  public get centerGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('center_gateways'));
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // granular_encryptions - computed: true, optional: false, required: false
  private _granularEncryptions = new DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsList(this, "granular_encryptions", false);
  public get granularEncryptions() {
    return this._granularEncryptions;
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

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // mesh_center_gateways - computed: true, optional: false, required: false
  public get meshCenterGateways() {
    return this.getBooleanAttribute('mesh_center_gateways');
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

  // override_vpn_domains - computed: true, optional: false, required: false
  private _overrideVpnDomains = new DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsList(this, "override_vpn_domains", false);
  public get overrideVpnDomains() {
    return this._overrideVpnDomains;
  }

  // satellite_gateways - computed: true, optional: false, required: false
  public get satelliteGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('satellite_gateways'));
  }

  // shared_secrets - computed: true, optional: false, required: false
  private _sharedSecrets = new DataCheckpointManagementDataVpnCommunityStarSharedSecretsList(this, "shared_secrets", false);
  public get sharedSecrets() {
    return this._sharedSecrets;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tunnel_granularity - computed: true, optional: false, required: false
  public get tunnelGranularity() {
    return this.getStringAttribute('tunnel_granularity');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // use_shared_secret - computed: true, optional: false, required: false
  public get useSharedSecret() {
    return this.getBooleanAttribute('use_shared_secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
