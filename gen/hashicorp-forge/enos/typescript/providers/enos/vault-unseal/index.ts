// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultUnsealConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified path to the vault binary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#bin_path VaultUnseal#bin_path}
  */
  readonly binPath: string;
  /**
  * The `seal_type` from `enos_vault_start`. If using HA Seal provide the primary seal type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#seal_type VaultUnseal#seal_type}
  */
  readonly sealType?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  * - `transport.kubernetes` (Object) the kubernetes transport configuration
  * - `transport.kubernetes.kubeconfig_base64` (String) base64 encoded kubeconfig
  * - `transport.kubernetes.context_name` (String) the name of the kube context to access
  * - `transport.kubernetes.namespace` (String) the namespace of pod to access
  * - `transport.kubernetes.pod` (String) the name of the pod to access|string
  * - `transport.kubernetes.container` (String) the name of the container to access
  * - `transport.nomad` (Object) the nomad transport configuration
  * - `transport.nomad.host` (String) nomad server host, i.e. http://23.56.78.9:4646
  * - `transport.nomad.secret_id` (String) the nomad server secret for authenticated connections
  * - `transport.nomad.allocation_id` (String) the allocation id for the allocation to access
  * - `transport.nomad.task_name` (String) the name of the task within the allocation to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#transport VaultUnseal#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The sysmted unit name if using systemd as a process manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#unit_name VaultUnseal#unit_name}
  */
  readonly unitName?: string;
  /**
  * A list of `unseal_keys_hex` (or b64) provided by the output of `enos_vault_init`. This is only required for shamir seals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#unseal_keys VaultUnseal#unseal_keys}
  */
  readonly unsealKeys: string[];
  /**
  * The configured `api_addr` from `enos_vault_start`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#vault_addr VaultUnseal#vault_addr}
  */
  readonly vaultAddr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal enos_vault_unseal}
*/
export class VaultUnseal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_vault_unseal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultUnseal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultUnseal to import
  * @param importFromId The id of the existing VaultUnseal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultUnseal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_vault_unseal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_unseal enos_vault_unseal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultUnsealConfig
  */
  public constructor(scope: Construct, id: string, config: VaultUnsealConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_vault_unseal',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binPath = config.binPath;
    this._sealType = config.sealType;
    this._transport = config.transport;
    this._unitName = config.unitName;
    this._unsealKeys = config.unsealKeys;
    this._vaultAddr = config.vaultAddr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_path - computed: false, optional: false, required: true
  private _binPath?: string; 
  public get binPath() {
    return this.getStringAttribute('bin_path');
  }
  public set binPath(value: string) {
    this._binPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binPathInput() {
    return this._binPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // seal_type - computed: false, optional: true, required: false
  private _sealType?: string; 
  public get sealType() {
    return this.getStringAttribute('seal_type');
  }
  public set sealType(value: string) {
    this._sealType = value;
  }
  public resetSealType() {
    this._sealType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealTypeInput() {
    return this._sealType;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // unit_name - computed: false, optional: true, required: false
  private _unitName?: string; 
  public get unitName() {
    return this.getStringAttribute('unit_name');
  }
  public set unitName(value: string) {
    this._unitName = value;
  }
  public resetUnitName() {
    this._unitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNameInput() {
    return this._unitName;
  }

  // unseal_keys - computed: false, optional: false, required: true
  private _unsealKeys?: string[]; 
  public get unsealKeys() {
    return this.getListAttribute('unseal_keys');
  }
  public set unsealKeys(value: string[]) {
    this._unsealKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unsealKeysInput() {
    return this._unsealKeys;
  }

  // vault_addr - computed: false, optional: false, required: true
  private _vaultAddr?: string; 
  public get vaultAddr() {
    return this.getStringAttribute('vault_addr');
  }
  public set vaultAddr(value: string) {
    this._vaultAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAddrInput() {
    return this._vaultAddr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_path: cdktf.stringToTerraform(this._binPath),
      seal_type: cdktf.stringToTerraform(this._sealType),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      unit_name: cdktf.stringToTerraform(this._unitName),
      unseal_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unsealKeys),
      vault_addr: cdktf.stringToTerraform(this._vaultAddr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_path: {
        value: cdktf.stringToHclTerraform(this._binPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seal_type: {
        value: cdktf.stringToHclTerraform(this._sealType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      unit_name: {
        value: cdktf.stringToHclTerraform(this._unitName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unseal_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unsealKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vault_addr: {
        value: cdktf.stringToHclTerraform(this._vaultAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
