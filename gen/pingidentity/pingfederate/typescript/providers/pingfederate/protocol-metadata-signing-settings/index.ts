// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolMetadataSigningSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Signature algorithm. If this property is unset, the default signature algorithm for the key algorithm will be used. Supported signature algorithms are available through the /keyPairs/keyAlgorithms endpoint. Typically supported values are `SHA1withRSA`, `SHA256withRSA`, `SHA384withRSA`, `SHA512withRSA`, `SHA256withRSAandMGF1`, `SHA384withRSAandMGF1`, and `SHA512withRSAandMGF1` for RSA keys, and `SHA256withECDSA`, `SHA384withECDSA`, and `SHA512withECDSA` for EC keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings#signature_algorithm ProtocolMetadataSigningSettings#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Reference to the key used for metadata signing. Refer to /keyPair/signing to get the list of available signing key pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings#signing_key_ref ProtocolMetadataSigningSettings#signing_key_ref}
  */
  readonly signingKeyRef?: ProtocolMetadataSigningSettingsSigningKeyRef;
}
export interface ProtocolMetadataSigningSettingsSigningKeyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings#id ProtocolMetadataSigningSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function protocolMetadataSigningSettingsSigningKeyRefToTerraform(struct?: ProtocolMetadataSigningSettingsSigningKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function protocolMetadataSigningSettingsSigningKeyRefToHclTerraform(struct?: ProtocolMetadataSigningSettingsSigningKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolMetadataSigningSettingsSigningKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolMetadataSigningSettingsSigningKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolMetadataSigningSettingsSigningKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings pingfederate_protocol_metadata_signing_settings}
*/
export class ProtocolMetadataSigningSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_protocol_metadata_signing_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolMetadataSigningSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolMetadataSigningSettings to import
  * @param importFromId The id of the existing ProtocolMetadataSigningSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolMetadataSigningSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_protocol_metadata_signing_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_signing_settings pingfederate_protocol_metadata_signing_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolMetadataSigningSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProtocolMetadataSigningSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_protocol_metadata_signing_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signingKeyRef.internalValue = config.signingKeyRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signing_key_ref - computed: false, optional: true, required: false
  private _signingKeyRef = new ProtocolMetadataSigningSettingsSigningKeyRefOutputReference(this, "signing_key_ref");
  public get signingKeyRef() {
    return this._signingKeyRef;
  }
  public putSigningKeyRef(value: ProtocolMetadataSigningSettingsSigningKeyRef) {
    this._signingKeyRef.internalValue = value;
  }
  public resetSigningKeyRef() {
    this._signingKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyRefInput() {
    return this._signingKeyRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signing_key_ref: protocolMetadataSigningSettingsSigningKeyRefToTerraform(this._signingKeyRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key_ref: {
        value: protocolMetadataSigningSettingsSigningKeyRefToHclTerraform(this._signingKeyRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolMetadataSigningSettingsSigningKeyRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
