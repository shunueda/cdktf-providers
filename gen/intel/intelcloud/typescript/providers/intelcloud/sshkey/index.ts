// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#metadata Sshkey#metadata}
  */
  readonly metadata: SshkeyMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#spec Sshkey#spec}
  */
  readonly spec: SshkeySpec;
}
export interface SshkeyMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#name Sshkey#name}
  */
  readonly name: string;
}

export function sshkeyMetadataToTerraform(struct?: SshkeyMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sshkeyMetadataToHclTerraform(struct?: SshkeyMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshkeyMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SshkeyMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshkeyMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // cloudaccount - computed: true, optional: false, required: false
  public get cloudaccount() {
    return this.getStringAttribute('cloudaccount');
  }

  // createdat - computed: true, optional: false, required: false
  public get createdat() {
    return this.getStringAttribute('createdat');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resourceid - computed: true, optional: false, required: false
  public get resourceid() {
    return this.getStringAttribute('resourceid');
  }
}
export interface SshkeySpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#owner_email Sshkey#owner_email}
  */
  readonly ownerEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#ssh_public_key Sshkey#ssh_public_key}
  */
  readonly sshPublicKey: string;
}

export function sshkeySpecToTerraform(struct?: SshkeySpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_email: cdktf.stringToTerraform(struct!.ownerEmail),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
  }
}


export function sshkeySpecToHclTerraform(struct?: SshkeySpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_email: {
      value: cdktf.stringToHclTerraform(struct!.ownerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshkeySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SshkeySpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerEmail = this._ownerEmail;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshkeySpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownerEmail = undefined;
      this._sshPublicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ownerEmail = value.ownerEmail;
      this._sshPublicKey = value.sshPublicKey;
    }
  }

  // owner_email - computed: true, optional: true, required: false
  private _ownerEmail?: string; 
  public get ownerEmail() {
    return this.getStringAttribute('owner_email');
  }
  public set ownerEmail(value: string) {
    this._ownerEmail = value;
  }
  public resetOwnerEmail() {
    this._ownerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerEmailInput() {
    return this._ownerEmail;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey intelcloud_sshkey}
*/
export class Sshkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_sshkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sshkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sshkey to import
  * @param importFromId The id of the existing Sshkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sshkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_sshkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/sshkey intelcloud_sshkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshkeyConfig
  */
  public constructor(scope: Construct, id: string, config: SshkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_sshkey',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new SshkeyMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SshkeyMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new SshkeySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: SshkeySpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: sshkeyMetadataToTerraform(this._metadata.internalValue),
      spec: sshkeySpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: sshkeyMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SshkeyMetadata",
      },
      spec: {
        value: sshkeySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SshkeySpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
