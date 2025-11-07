// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorFingerprintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the target connection within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints#connector_id ConnectorFingerprints#connector_id}
  */
  readonly connectorId: string;
  /**
  * fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints#fingerprint ConnectorFingerprints#fingerprint}
  */
  readonly fingerprint?: ConnectorFingerprintsFingerprint[] | cdktf.IResolvable;
}
export interface ConnectorFingerprintsFingerprint {
  /**
  * Hash of the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints#hash ConnectorFingerprints#hash}
  */
  readonly hash: string;
  /**
  * The SSH public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints#public_key ConnectorFingerprints#public_key}
  */
  readonly publicKey: string;
}

export function connectorFingerprintsFingerprintToTerraform(struct?: ConnectorFingerprintsFingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function connectorFingerprintsFingerprintToHclTerraform(struct?: ConnectorFingerprintsFingerprint | cdktf.IResolvable): any {
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

export class ConnectorFingerprintsFingerprintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorFingerprintsFingerprint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConnectorFingerprintsFingerprint | cdktf.IResolvable | undefined) {
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

export class ConnectorFingerprintsFingerprintList extends cdktf.ComplexList {
  public internalValue? : ConnectorFingerprintsFingerprint[] | cdktf.IResolvable

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
  public get(index: number): ConnectorFingerprintsFingerprintOutputReference {
    return new ConnectorFingerprintsFingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints fivetran_connector_fingerprints}
*/
export class ConnectorFingerprints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connector_fingerprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorFingerprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorFingerprints to import
  * @param importFromId The id of the existing ConnectorFingerprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorFingerprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connector_fingerprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_fingerprints fivetran_connector_fingerprints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorFingerprintsConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorFingerprintsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connector_fingerprints',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._fingerprint.internalValue = config.fingerprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint = new ConnectorFingerprintsFingerprintList(this, "fingerprint", true);
  public get fingerprint() {
    return this._fingerprint;
  }
  public putFingerprint(value: ConnectorFingerprintsFingerprint[] | cdktf.IResolvable) {
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
      connector_id: cdktf.stringToTerraform(this._connectorId),
      fingerprint: cdktf.listMapper(connectorFingerprintsFingerprintToTerraform, true)(this._fingerprint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.listMapperHcl(connectorFingerprintsFingerprintToHclTerraform, true)(this._fingerprint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorFingerprintsFingerprintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
