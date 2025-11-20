// https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationFingerprintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the target destination within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints#destination_id DestinationFingerprints#destination_id}
  */
  readonly destinationId: string;
  /**
  * fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints#fingerprint DestinationFingerprints#fingerprint}
  */
  readonly fingerprint?: DestinationFingerprintsFingerprint[] | cdktf.IResolvable;
}
export interface DestinationFingerprintsFingerprint {
  /**
  * Hash of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints#hash DestinationFingerprints#hash}
  */
  readonly hash: string;
  /**
  * The SSH public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints#public_key DestinationFingerprints#public_key}
  */
  readonly publicKey: string;
}

export function destinationFingerprintsFingerprintToTerraform(struct?: DestinationFingerprintsFingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function destinationFingerprintsFingerprintToHclTerraform(struct?: DestinationFingerprintsFingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationFingerprintsFingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationFingerprintsFingerprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationFingerprintsFingerprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._publicKey = value.publicKey;
    }
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // validated_by - computed: true, optional: false, required: false
  public get validatedBy() {
    return this.getStringAttribute('validated_by');
  }

  // validated_date - computed: true, optional: false, required: false
  public get validatedDate() {
    return this.getStringAttribute('validated_date');
  }
}

export class DestinationFingerprintsFingerprintList extends cdktf.ComplexList {
  public internalValue? : DestinationFingerprintsFingerprint[] | cdktf.IResolvable

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
  public get(index: number): DestinationFingerprintsFingerprintOutputReference {
    return new DestinationFingerprintsFingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints fivetran_destination_fingerprints}
*/
export class DestinationFingerprints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_destination_fingerprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationFingerprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationFingerprints to import
  * @param importFromId The id of the existing DestinationFingerprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationFingerprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_destination_fingerprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/destination_fingerprints fivetran_destination_fingerprints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationFingerprintsConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationFingerprintsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_destination_fingerprints',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.15',
        providerVersionConstraint: '1.9.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationId = config.destinationId;
    this._fingerprint.internalValue = config.fingerprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint = new DestinationFingerprintsFingerprintList(this, "fingerprint", true);
  public get fingerprint() {
    return this._fingerprint;
  }
  public putFingerprint(value: DestinationFingerprintsFingerprint[] | cdktf.IResolvable) {
    this._fingerprint.internalValue = value;
  }
  public resetFingerprint() {
    this._fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_id: cdktf.stringToTerraform(this._destinationId),
      fingerprint: cdktf.listMapper(destinationFingerprintsFingerprintToTerraform, true)(this._fingerprint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.listMapperHcl(destinationFingerprintsFingerprintToHclTerraform, true)(this._fingerprint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DestinationFingerprintsFingerprintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
