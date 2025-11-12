// https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSigningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to `true`, the public key will be automatically propagated to the Edge Node just once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#fail_on_propagation_failure VaultSigningKey#fail_on_propagation_failure}
  */
  readonly failOnPropagationFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#private_key VaultSigningKey#private_key}
  */
  readonly privateKey: VaultSigningKeyPrivateKey;
  /**
  * When set to `true`, the public key will be automatically propagated to the Edge Node just once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#propagate_to_edge_nodes VaultSigningKey#propagate_to_edge_nodes}
  */
  readonly propagateToEdgeNodes?: boolean | cdktf.IResolvable;
  /**
  * Type of the signing key. Valid value: `gpg` or `pgp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#protocol VaultSigningKey#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#public_key VaultSigningKey#public_key}
  */
  readonly publicKey: VaultSigningKeyPublicKey;
  /**
  * Set this to `true` if this is the first key that is set or if there is no default key in Artifactory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#set_as_default VaultSigningKey#set_as_default}
  */
  readonly setAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of the Vault integration in Artifactory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#vault_id VaultSigningKey#vault_id}
  */
  readonly vaultId: string;
}
export interface VaultSigningKeyPrivateKey {
  /**
  * Field name of the key, e.g. `private`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#key VaultSigningKey#key}
  */
  readonly key: string;
  /**
  * Path to the key, e.g. `secret/my-key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#path VaultSigningKey#path}
  */
  readonly path: string;
}

export function vaultSigningKeyPrivateKeyToTerraform(struct?: VaultSigningKeyPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function vaultSigningKeyPrivateKeyToHclTerraform(struct?: VaultSigningKeyPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSigningKeyPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSigningKeyPrivateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSigningKeyPrivateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface VaultSigningKeyPublicKey {
  /**
  * Field name of the key, e.g. `public`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#key VaultSigningKey#key}
  */
  readonly key: string;
  /**
  * Path to the key, e.g. `secret/my-key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#path VaultSigningKey#path}
  */
  readonly path: string;
}

export function vaultSigningKeyPublicKeyToTerraform(struct?: VaultSigningKeyPublicKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function vaultSigningKeyPublicKeyToHclTerraform(struct?: VaultSigningKeyPublicKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSigningKeyPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSigningKeyPublicKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSigningKeyPublicKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key distribution_vault_signing_key}
*/
export class VaultSigningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "distribution_vault_signing_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSigningKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSigningKey to import
  * @param importFromId The id of the existing VaultSigningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSigningKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "distribution_vault_signing_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/vault_signing_key distribution_vault_signing_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSigningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSigningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'distribution_vault_signing_key',
      terraformGeneratorMetadata: {
        providerName: 'distribution',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failOnPropagationFailure = config.failOnPropagationFailure;
    this._privateKey.internalValue = config.privateKey;
    this._propagateToEdgeNodes = config.propagateToEdgeNodes;
    this._protocol = config.protocol;
    this._publicKey.internalValue = config.publicKey;
    this._setAsDefault = config.setAsDefault;
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // fail_on_propagation_failure - computed: false, optional: true, required: false
  private _failOnPropagationFailure?: boolean | cdktf.IResolvable; 
  public get failOnPropagationFailure() {
    return this.getBooleanAttribute('fail_on_propagation_failure');
  }
  public set failOnPropagationFailure(value: boolean | cdktf.IResolvable) {
    this._failOnPropagationFailure = value;
  }
  public resetFailOnPropagationFailure() {
    this._failOnPropagationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnPropagationFailureInput() {
    return this._failOnPropagationFailure;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new VaultSigningKeyPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: VaultSigningKeyPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // propagate_to_edge_nodes - computed: false, optional: true, required: false
  private _propagateToEdgeNodes?: boolean | cdktf.IResolvable; 
  public get propagateToEdgeNodes() {
    return this.getBooleanAttribute('propagate_to_edge_nodes');
  }
  public set propagateToEdgeNodes(value: boolean | cdktf.IResolvable) {
    this._propagateToEdgeNodes = value;
  }
  public resetPropagateToEdgeNodes() {
    this._propagateToEdgeNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateToEdgeNodesInput() {
    return this._propagateToEdgeNodes;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey = new VaultSigningKeyPublicKeyOutputReference(this, "public_key");
  public get publicKey() {
    return this._publicKey;
  }
  public putPublicKey(value: VaultSigningKeyPublicKey) {
    this._publicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey.internalValue;
  }

  // set_as_default - computed: false, optional: true, required: false
  private _setAsDefault?: boolean | cdktf.IResolvable; 
  public get setAsDefault() {
    return this.getBooleanAttribute('set_as_default');
  }
  public set setAsDefault(value: boolean | cdktf.IResolvable) {
    this._setAsDefault = value;
  }
  public resetSetAsDefault() {
    this._setAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsDefaultInput() {
    return this._setAsDefault;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fail_on_propagation_failure: cdktf.booleanToTerraform(this._failOnPropagationFailure),
      private_key: vaultSigningKeyPrivateKeyToTerraform(this._privateKey.internalValue),
      propagate_to_edge_nodes: cdktf.booleanToTerraform(this._propagateToEdgeNodes),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_key: vaultSigningKeyPublicKeyToTerraform(this._publicKey.internalValue),
      set_as_default: cdktf.booleanToTerraform(this._setAsDefault),
      vault_id: cdktf.stringToTerraform(this._vaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fail_on_propagation_failure: {
        value: cdktf.booleanToHclTerraform(this._failOnPropagationFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_key: {
        value: vaultSigningKeyPrivateKeyToHclTerraform(this._privateKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSigningKeyPrivateKey",
      },
      propagate_to_edge_nodes: {
        value: cdktf.booleanToHclTerraform(this._propagateToEdgeNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: vaultSigningKeyPublicKeyToHclTerraform(this._publicKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSigningKeyPublicKey",
      },
      set_as_default: {
        value: cdktf.booleanToHclTerraform(this._setAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
