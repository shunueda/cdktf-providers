// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the target destination within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates#destination_id DestinationCertificates#destination_id}
  */
  readonly destinationId: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates#certificate DestinationCertificates#certificate}
  */
  readonly certificate?: DestinationCertificatesCertificate[] | cdktf.IResolvable;
}
export interface DestinationCertificatesCertificate {
  /**
  * Base64 encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates#encoded_cert DestinationCertificates#encoded_cert}
  */
  readonly encodedCert: string;
  /**
  * Hash of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates#hash DestinationCertificates#hash}
  */
  readonly hash: string;
}

export function destinationCertificatesCertificateToTerraform(struct?: DestinationCertificatesCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoded_cert: cdktf.stringToTerraform(struct!.encodedCert),
    hash: cdktf.stringToTerraform(struct!.hash),
  }
}


export function destinationCertificatesCertificateToHclTerraform(struct?: DestinationCertificatesCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoded_cert: {
      value: cdktf.stringToHclTerraform(struct!.encodedCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationCertificatesCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationCertificatesCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodedCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedCert = this._encodedCert;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCertificatesCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encodedCert = undefined;
      this._hash = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encodedCert = value.encodedCert;
      this._hash = value.hash;
    }
  }

  // encoded_cert - computed: false, optional: false, required: true
  private _encodedCert?: string; 
  public get encodedCert() {
    return this.getStringAttribute('encoded_cert');
  }
  public set encodedCert(value: string) {
    this._encodedCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedCertInput() {
    return this._encodedCert;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

export class DestinationCertificatesCertificateList extends cdktf.ComplexList {
  public internalValue? : DestinationCertificatesCertificate[] | cdktf.IResolvable

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
  public get(index: number): DestinationCertificatesCertificateOutputReference {
    return new DestinationCertificatesCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates fivetran_destination_certificates}
*/
export class DestinationCertificates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_destination_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationCertificates to import
  * @param importFromId The id of the existing DestinationCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_destination_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination_certificates fivetran_destination_certificates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationCertificatesConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationCertificatesConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_destination_certificates',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
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
    this._certificate.internalValue = config.certificate;
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

  // certificate - computed: false, optional: true, required: false
  private _certificate = new DestinationCertificatesCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DestinationCertificatesCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_id: cdktf.stringToTerraform(this._destinationId),
      certificate: cdktf.listMapper(destinationCertificatesCertificateToTerraform, true)(this._certificate.internalValue),
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
      certificate: {
        value: cdktf.listMapperHcl(destinationCertificatesCertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DestinationCertificatesCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
