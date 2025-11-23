// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/dot1x
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeDot1XConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/dot1x#device DataIosxeDot1X#device}
  */
  readonly device?: string;
}
export interface DataIosxeDot1XCredentials {
}

export function dataIosxeDot1XCredentialsToTerraform(struct?: DataIosxeDot1XCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDot1XCredentialsToHclTerraform(struct?: DataIosxeDot1XCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDot1XCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDot1XCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDot1XCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anonymous_id - computed: true, optional: false, required: false
  public get anonymousId() {
    return this.getStringAttribute('anonymous_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // pki_trustpoint - computed: true, optional: false, required: false
  public get pkiTrustpoint() {
    return this.getStringAttribute('pki_trustpoint');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataIosxeDot1XCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDot1XCredentialsOutputReference {
    return new DataIosxeDot1XCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/dot1x iosxe_dot1x}
*/
export class DataIosxeDot1X extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_dot1x";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeDot1X resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeDot1X to import
  * @param importFromId The id of the existing DataIosxeDot1X that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/dot1x#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeDot1X to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_dot1x", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/dot1x iosxe_dot1x} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeDot1XConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeDot1XConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_dot1x',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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

  // auth_fail_eapol - computed: true, optional: false, required: false
  public get authFailEapol() {
    return this.getBooleanAttribute('auth_fail_eapol');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataIosxeDot1XCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // critical_eapol - computed: true, optional: false, required: false
  public get criticalEapol() {
    return this.getBooleanAttribute('critical_eapol');
  }

  // critical_eapol_block - computed: true, optional: false, required: false
  public get criticalEapolBlock() {
    return this.getBooleanAttribute('critical_eapol_block');
  }

  // critical_eapol_config_block - computed: true, optional: false, required: false
  public get criticalEapolConfigBlock() {
    return this.getBooleanAttribute('critical_eapol_config_block');
  }

  // critical_recovery_delay - computed: true, optional: false, required: false
  public get criticalRecoveryDelay() {
    return this.getNumberAttribute('critical_recovery_delay');
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

  // guest_vlan_supplicant - computed: true, optional: false, required: false
  public get guestVlanSupplicant() {
    return this.getBooleanAttribute('guest_vlan_supplicant');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_verbose - computed: true, optional: false, required: false
  public get loggingVerbose() {
    return this.getBooleanAttribute('logging_verbose');
  }

  // supplicant_controlled_transient - computed: true, optional: false, required: false
  public get supplicantControlledTransient() {
    return this.getBooleanAttribute('supplicant_controlled_transient');
  }

  // supplicant_force_multicast - computed: true, optional: false, required: false
  public get supplicantForceMulticast() {
    return this.getBooleanAttribute('supplicant_force_multicast');
  }

  // system_auth_control - computed: true, optional: false, required: false
  public get systemAuthControl() {
    return this.getBooleanAttribute('system_auth_control');
  }

  // test_timeout - computed: true, optional: false, required: false
  public get testTimeout() {
    return this.getNumberAttribute('test_timeout');
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
