// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterUpdateAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default host authentication template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile#authentication_profile_name DataCatalystcenterUpdateAuthenticationProfile#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * ID of the fabric this authentication profile is assigned to. To update a global authentication profile, either remove this property or set its value to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile#fabric_id DataCatalystcenterUpdateAuthenticationProfile#fabric_id}
  */
  readonly fabricId?: string;
}
export interface DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContracts {
}

export function dataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsToTerraform(struct?: DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsToHclTerraform(struct?: DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference {
    return new DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile catalystcenter_update_authentication_profile}
*/
export class DataCatalystcenterUpdateAuthenticationProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_update_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterUpdateAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterUpdateAuthenticationProfile to import
  * @param importFromId The id of the existing DataCatalystcenterUpdateAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterUpdateAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_update_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/update_authentication_profile catalystcenter_update_authentication_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterUpdateAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterUpdateAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_update_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationProfileName = config.authenticationProfileName;
    this._fabricId = config.fabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_order - computed: true, optional: false, required: false
  public get authenticationOrder() {
    return this.getStringAttribute('authentication_order');
  }

  // authentication_profile_name - computed: false, optional: false, required: true
  private _authenticationProfileName?: string; 
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
  }
  public set authenticationProfileName(value: string) {
    this._authenticationProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileNameInput() {
    return this._authenticationProfileName;
  }

  // dot1x_to_mab_fallback_timeout - computed: true, optional: false, required: false
  public get dot1XToMabFallbackTimeout() {
    return this.getNumberAttribute('dot1x_to_mab_fallback_timeout');
  }

  // fabric_id - computed: true, optional: true, required: false
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  public resetFabricId() {
    this._fabricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_bpdu_guard_enabled - computed: true, optional: false, required: false
  public get isBpduGuardEnabled() {
    return this.getBooleanAttribute('is_bpdu_guard_enabled');
  }

  // number_of_hosts - computed: true, optional: false, required: false
  public get numberOfHosts() {
    return this.getStringAttribute('number_of_hosts');
  }

  // pre_auth_acl_access_contracts - computed: true, optional: false, required: false
  private _preAuthAclAccessContracts = new DataCatalystcenterUpdateAuthenticationProfilePreAuthAclAccessContractsList(this, "pre_auth_acl_access_contracts", true);
  public get preAuthAclAccessContracts() {
    return this._preAuthAclAccessContracts;
  }

  // pre_auth_acl_description - computed: true, optional: false, required: false
  public get preAuthAclDescription() {
    return this.getStringAttribute('pre_auth_acl_description');
  }

  // pre_auth_acl_enabled - computed: true, optional: false, required: false
  public get preAuthAclEnabled() {
    return this.getBooleanAttribute('pre_auth_acl_enabled');
  }

  // pre_auth_acl_implicit_action - computed: true, optional: false, required: false
  public get preAuthAclImplicitAction() {
    return this.getStringAttribute('pre_auth_acl_implicit_action');
  }

  // wake_on_lan - computed: true, optional: false, required: false
  public get wakeOnLan() {
    return this.getBooleanAttribute('wake_on_lan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_profile_name: cdktf.stringToTerraform(this._authenticationProfileName),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
