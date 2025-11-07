// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultInitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified path to the vault binary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#bin_path VaultInit#bin_path}
  */
  readonly binPath: string;
  /**
  * Whether to enable or disable [consul auto discovery](https://developer.hashicorp.com/vault/docs/commands/operator/init#consul-auto)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#consul_auto VaultInit#consul_auto}
  */
  readonly consulAuto?: boolean | cdktf.IResolvable;
  /**
  * The name of the [consul service](https://developer.hashicorp.com/vault/docs/commands/operator/init#consul-service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#consul_service VaultInit#consul_service}
  */
  readonly consulService?: string;
  /**
  * The number of [key shares](https://developer.hashicorp.com/vault/docs/commands/operator/init#key-shares)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#key_shares VaultInit#key_shares}
  */
  readonly keyShares?: number;
  /**
  * The [key threshold](https://developer.hashicorp.com/vault/docs/commands/operator/init#key-threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#key_threshold VaultInit#key_threshold}
  */
  readonly keyThreshold?: number;
  /**
  * A list of [pgp keys](https://developer.hashicorp.com/vault/docs/commands/operator/init#pgp-keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#pgp_keys VaultInit#pgp_keys}
  */
  readonly pgpKeys?: string[];
  /**
  * The root token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_keys_b64 VaultInit#recovery_keys_b64}
  */
  readonly recoveryKeysB64?: string[];
  /**
  * The generated recovery keys in base 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_keys_hex VaultInit#recovery_keys_hex}
  */
  readonly recoveryKeysHex?: string[];
  /**
  * The generated recovery keys in hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_keys_shares VaultInit#recovery_keys_shares}
  */
  readonly recoveryKeysShares?: number;
  /**
  * The number of recovery key shares
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_keys_threshold VaultInit#recovery_keys_threshold}
  */
  readonly recoveryKeysThreshold?: number;
  /**
  * A list of [recovery pgp keys](https://developer.hashicorp.com/vault/docs/commands/operator/init#recovery-pgp-keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_pgp_keys VaultInit#recovery_pgp_keys}
  */
  readonly recoveryPgpKeys?: string[];
  /**
  * The number of [recovery shares](https://developer.hashicorp.com/vault/docs/commands/operator/init#recovery-shares)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_shares VaultInit#recovery_shares}
  */
  readonly recoveryShares?: number;
  /**
  * The [recovery threshold](https://developer.hashicorp.com/vault/docs/commands/operator/init#recovery-threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#recovery_threshold VaultInit#recovery_threshold}
  */
  readonly recoveryThreshold?: number;
  /**
  * The number of recovery key shares required to recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#root_token VaultInit#root_token}
  */
  readonly rootToken?: string;
  /**
  * The root token [pgp keys](https://developer.hashicorp.com/vault/docs/commands/operator/init#root-token-pgp-key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#root_token_pgp_key VaultInit#root_token_pgp_key}
  */
  readonly rootTokenPgpKey?: string;
  /**
  * The number of [stored shares](https://developer.hashicorp.com/vault/docs/commands/operator/init#stored-shares)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#stored_shares VaultInit#stored_shares}
  */
  readonly storedShares?: number;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#transport VaultInit#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The sysmted unit name if using systemd as a process manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#unit_name VaultInit#unit_name}
  */
  readonly unitName?: string;
  /**
  * The generated unseal keys in base 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#unseal_keys_b64 VaultInit#unseal_keys_b64}
  */
  readonly unsealKeysB64?: string[];
  /**
  * The generated unseal keys in hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#unseal_keys_hex VaultInit#unseal_keys_hex}
  */
  readonly unsealKeysHex?: string[];
  /**
  * The number of unseal key shares
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#unseal_keys_shares VaultInit#unseal_keys_shares}
  */
  readonly unsealKeysShares?: number;
  /**
  * The number of unseal key shares required to unseal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#unseal_keys_threshold VaultInit#unseal_keys_threshold}
  */
  readonly unsealKeysThreshold?: number;
  /**
  * The [api_addr](https://developer.hashicorp.com/vault/docs/configuration#api_addr) of the Vault cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#vault_addr VaultInit#vault_addr}
  */
  readonly vaultAddr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init enos_vault_init}
*/
export class VaultInit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_vault_init";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultInit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultInit to import
  * @param importFromId The id of the existing VaultInit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultInit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_vault_init", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/vault_init enos_vault_init} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultInitConfig
  */
  public constructor(scope: Construct, id: string, config: VaultInitConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_vault_init',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2'
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
    this._consulAuto = config.consulAuto;
    this._consulService = config.consulService;
    this._keyShares = config.keyShares;
    this._keyThreshold = config.keyThreshold;
    this._pgpKeys = config.pgpKeys;
    this._recoveryKeysB64 = config.recoveryKeysB64;
    this._recoveryKeysHex = config.recoveryKeysHex;
    this._recoveryKeysShares = config.recoveryKeysShares;
    this._recoveryKeysThreshold = config.recoveryKeysThreshold;
    this._recoveryPgpKeys = config.recoveryPgpKeys;
    this._recoveryShares = config.recoveryShares;
    this._recoveryThreshold = config.recoveryThreshold;
    this._rootToken = config.rootToken;
    this._rootTokenPgpKey = config.rootTokenPgpKey;
    this._storedShares = config.storedShares;
    this._transport = config.transport;
    this._unitName = config.unitName;
    this._unsealKeysB64 = config.unsealKeysB64;
    this._unsealKeysHex = config.unsealKeysHex;
    this._unsealKeysShares = config.unsealKeysShares;
    this._unsealKeysThreshold = config.unsealKeysThreshold;
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

  // consul_auto - computed: false, optional: true, required: false
  private _consulAuto?: boolean | cdktf.IResolvable; 
  public get consulAuto() {
    return this.getBooleanAttribute('consul_auto');
  }
  public set consulAuto(value: boolean | cdktf.IResolvable) {
    this._consulAuto = value;
  }
  public resetConsulAuto() {
    this._consulAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulAutoInput() {
    return this._consulAuto;
  }

  // consul_service - computed: false, optional: true, required: false
  private _consulService?: string; 
  public get consulService() {
    return this.getStringAttribute('consul_service');
  }
  public set consulService(value: string) {
    this._consulService = value;
  }
  public resetConsulService() {
    this._consulService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulServiceInput() {
    return this._consulService;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_shares - computed: false, optional: true, required: false
  private _keyShares?: number; 
  public get keyShares() {
    return this.getNumberAttribute('key_shares');
  }
  public set keyShares(value: number) {
    this._keyShares = value;
  }
  public resetKeyShares() {
    this._keyShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySharesInput() {
    return this._keyShares;
  }

  // key_threshold - computed: false, optional: true, required: false
  private _keyThreshold?: number; 
  public get keyThreshold() {
    return this.getNumberAttribute('key_threshold');
  }
  public set keyThreshold(value: number) {
    this._keyThreshold = value;
  }
  public resetKeyThreshold() {
    this._keyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyThresholdInput() {
    return this._keyThreshold;
  }

  // pgp_keys - computed: false, optional: true, required: false
  private _pgpKeys?: string[]; 
  public get pgpKeys() {
    return this.getListAttribute('pgp_keys');
  }
  public set pgpKeys(value: string[]) {
    this._pgpKeys = value;
  }
  public resetPgpKeys() {
    this._pgpKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeysInput() {
    return this._pgpKeys;
  }

  // recovery_keys_b64 - computed: true, optional: true, required: false
  private _recoveryKeysB64?: string[]; 
  public get recoveryKeysB64() {
    return this.getListAttribute('recovery_keys_b64');
  }
  public set recoveryKeysB64(value: string[]) {
    this._recoveryKeysB64 = value;
  }
  public resetRecoveryKeysB64() {
    this._recoveryKeysB64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKeysB64Input() {
    return this._recoveryKeysB64;
  }

  // recovery_keys_hex - computed: true, optional: true, required: false
  private _recoveryKeysHex?: string[]; 
  public get recoveryKeysHex() {
    return this.getListAttribute('recovery_keys_hex');
  }
  public set recoveryKeysHex(value: string[]) {
    this._recoveryKeysHex = value;
  }
  public resetRecoveryKeysHex() {
    this._recoveryKeysHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKeysHexInput() {
    return this._recoveryKeysHex;
  }

  // recovery_keys_shares - computed: true, optional: true, required: false
  private _recoveryKeysShares?: number; 
  public get recoveryKeysShares() {
    return this.getNumberAttribute('recovery_keys_shares');
  }
  public set recoveryKeysShares(value: number) {
    this._recoveryKeysShares = value;
  }
  public resetRecoveryKeysShares() {
    this._recoveryKeysShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKeysSharesInput() {
    return this._recoveryKeysShares;
  }

  // recovery_keys_threshold - computed: true, optional: true, required: false
  private _recoveryKeysThreshold?: number; 
  public get recoveryKeysThreshold() {
    return this.getNumberAttribute('recovery_keys_threshold');
  }
  public set recoveryKeysThreshold(value: number) {
    this._recoveryKeysThreshold = value;
  }
  public resetRecoveryKeysThreshold() {
    this._recoveryKeysThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryKeysThresholdInput() {
    return this._recoveryKeysThreshold;
  }

  // recovery_pgp_keys - computed: false, optional: true, required: false
  private _recoveryPgpKeys?: string[]; 
  public get recoveryPgpKeys() {
    return this.getListAttribute('recovery_pgp_keys');
  }
  public set recoveryPgpKeys(value: string[]) {
    this._recoveryPgpKeys = value;
  }
  public resetRecoveryPgpKeys() {
    this._recoveryPgpKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPgpKeysInput() {
    return this._recoveryPgpKeys;
  }

  // recovery_shares - computed: false, optional: true, required: false
  private _recoveryShares?: number; 
  public get recoveryShares() {
    return this.getNumberAttribute('recovery_shares');
  }
  public set recoveryShares(value: number) {
    this._recoveryShares = value;
  }
  public resetRecoveryShares() {
    this._recoveryShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverySharesInput() {
    return this._recoveryShares;
  }

  // recovery_threshold - computed: false, optional: true, required: false
  private _recoveryThreshold?: number; 
  public get recoveryThreshold() {
    return this.getNumberAttribute('recovery_threshold');
  }
  public set recoveryThreshold(value: number) {
    this._recoveryThreshold = value;
  }
  public resetRecoveryThreshold() {
    this._recoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryThresholdInput() {
    return this._recoveryThreshold;
  }

  // root_token - computed: true, optional: true, required: false
  private _rootToken?: string; 
  public get rootToken() {
    return this.getStringAttribute('root_token');
  }
  public set rootToken(value: string) {
    this._rootToken = value;
  }
  public resetRootToken() {
    this._rootToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTokenInput() {
    return this._rootToken;
  }

  // root_token_pgp_key - computed: false, optional: true, required: false
  private _rootTokenPgpKey?: string; 
  public get rootTokenPgpKey() {
    return this.getStringAttribute('root_token_pgp_key');
  }
  public set rootTokenPgpKey(value: string) {
    this._rootTokenPgpKey = value;
  }
  public resetRootTokenPgpKey() {
    this._rootTokenPgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTokenPgpKeyInput() {
    return this._rootTokenPgpKey;
  }

  // stored_shares - computed: false, optional: true, required: false
  private _storedShares?: number; 
  public get storedShares() {
    return this.getNumberAttribute('stored_shares');
  }
  public set storedShares(value: number) {
    this._storedShares = value;
  }
  public resetStoredShares() {
    this._storedShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedSharesInput() {
    return this._storedShares;
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

  // unseal_keys_b64 - computed: true, optional: true, required: false
  private _unsealKeysB64?: string[]; 
  public get unsealKeysB64() {
    return this.getListAttribute('unseal_keys_b64');
  }
  public set unsealKeysB64(value: string[]) {
    this._unsealKeysB64 = value;
  }
  public resetUnsealKeysB64() {
    this._unsealKeysB64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsealKeysB64Input() {
    return this._unsealKeysB64;
  }

  // unseal_keys_hex - computed: true, optional: true, required: false
  private _unsealKeysHex?: string[]; 
  public get unsealKeysHex() {
    return this.getListAttribute('unseal_keys_hex');
  }
  public set unsealKeysHex(value: string[]) {
    this._unsealKeysHex = value;
  }
  public resetUnsealKeysHex() {
    this._unsealKeysHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsealKeysHexInput() {
    return this._unsealKeysHex;
  }

  // unseal_keys_shares - computed: true, optional: true, required: false
  private _unsealKeysShares?: number; 
  public get unsealKeysShares() {
    return this.getNumberAttribute('unseal_keys_shares');
  }
  public set unsealKeysShares(value: number) {
    this._unsealKeysShares = value;
  }
  public resetUnsealKeysShares() {
    this._unsealKeysShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsealKeysSharesInput() {
    return this._unsealKeysShares;
  }

  // unseal_keys_threshold - computed: true, optional: true, required: false
  private _unsealKeysThreshold?: number; 
  public get unsealKeysThreshold() {
    return this.getNumberAttribute('unseal_keys_threshold');
  }
  public set unsealKeysThreshold(value: number) {
    this._unsealKeysThreshold = value;
  }
  public resetUnsealKeysThreshold() {
    this._unsealKeysThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsealKeysThresholdInput() {
    return this._unsealKeysThreshold;
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
      consul_auto: cdktf.booleanToTerraform(this._consulAuto),
      consul_service: cdktf.stringToTerraform(this._consulService),
      key_shares: cdktf.numberToTerraform(this._keyShares),
      key_threshold: cdktf.numberToTerraform(this._keyThreshold),
      pgp_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pgpKeys),
      recovery_keys_b64: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recoveryKeysB64),
      recovery_keys_hex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recoveryKeysHex),
      recovery_keys_shares: cdktf.numberToTerraform(this._recoveryKeysShares),
      recovery_keys_threshold: cdktf.numberToTerraform(this._recoveryKeysThreshold),
      recovery_pgp_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recoveryPgpKeys),
      recovery_shares: cdktf.numberToTerraform(this._recoveryShares),
      recovery_threshold: cdktf.numberToTerraform(this._recoveryThreshold),
      root_token: cdktf.stringToTerraform(this._rootToken),
      root_token_pgp_key: cdktf.stringToTerraform(this._rootTokenPgpKey),
      stored_shares: cdktf.numberToTerraform(this._storedShares),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      unit_name: cdktf.stringToTerraform(this._unitName),
      unseal_keys_b64: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unsealKeysB64),
      unseal_keys_hex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unsealKeysHex),
      unseal_keys_shares: cdktf.numberToTerraform(this._unsealKeysShares),
      unseal_keys_threshold: cdktf.numberToTerraform(this._unsealKeysThreshold),
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
      consul_auto: {
        value: cdktf.booleanToHclTerraform(this._consulAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consul_service: {
        value: cdktf.stringToHclTerraform(this._consulService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_shares: {
        value: cdktf.numberToHclTerraform(this._keyShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_threshold: {
        value: cdktf.numberToHclTerraform(this._keyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pgp_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pgpKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_keys_b64: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recoveryKeysB64),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_keys_hex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recoveryKeysHex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_keys_shares: {
        value: cdktf.numberToHclTerraform(this._recoveryKeysShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_keys_threshold: {
        value: cdktf.numberToHclTerraform(this._recoveryKeysThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_pgp_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recoveryPgpKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_shares: {
        value: cdktf.numberToHclTerraform(this._recoveryShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_threshold: {
        value: cdktf.numberToHclTerraform(this._recoveryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_token: {
        value: cdktf.stringToHclTerraform(this._rootToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_token_pgp_key: {
        value: cdktf.stringToHclTerraform(this._rootTokenPgpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stored_shares: {
        value: cdktf.numberToHclTerraform(this._storedShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      unseal_keys_b64: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unsealKeysB64),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unseal_keys_hex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unsealKeysHex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unseal_keys_shares: {
        value: cdktf.numberToHclTerraform(this._unsealKeysShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unseal_keys_threshold: {
        value: cdktf.numberToHclTerraform(this._unsealKeysThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
