// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Site2CloudCaCertTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag#id Site2CloudCaCertTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the ca cert tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag#tag_name Site2CloudCaCertTag#tag_name}
  */
  readonly tagName: string;
  /**
  * ca_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag#ca_certificates Site2CloudCaCertTag#ca_certificates}
  */
  readonly caCertificates: Site2CloudCaCertTagCaCertificates[] | cdktf.IResolvable;
}
export interface Site2CloudCaCertTagCaCertificates {
  /**
  * Content of cert certificate to create only one cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag#cert_content Site2CloudCaCertTag#cert_content}
  */
  readonly certContent: string;
}

export function site2CloudCaCertTagCaCertificatesToTerraform(struct?: Site2CloudCaCertTagCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_content: cdktf.stringToTerraform(struct!.certContent),
  }
}


export function site2CloudCaCertTagCaCertificatesToHclTerraform(struct?: Site2CloudCaCertTagCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_content: {
      value: cdktf.stringToHclTerraform(struct!.certContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Site2CloudCaCertTagCaCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Site2CloudCaCertTagCaCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certContent = this._certContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Site2CloudCaCertTagCaCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certContent = value.certContent;
    }
  }

  // cert_content - computed: false, optional: false, required: true
  private _certContent?: string; 
  public get certContent() {
    return this.getStringAttribute('cert_content');
  }
  public set certContent(value: string) {
    this._certContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certContentInput() {
    return this._certContent;
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_name - computed: true, optional: false, required: false
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }

  // unique_serial - computed: true, optional: false, required: false
  public get uniqueSerial() {
    return this.getStringAttribute('unique_serial');
  }
}

export class Site2CloudCaCertTagCaCertificatesList extends cdktf.ComplexList {
  public internalValue? : Site2CloudCaCertTagCaCertificates[] | cdktf.IResolvable

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
  public get(index: number): Site2CloudCaCertTagCaCertificatesOutputReference {
    return new Site2CloudCaCertTagCaCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag aviatrix_site2cloud_ca_cert_tag}
*/
export class Site2CloudCaCertTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_site2cloud_ca_cert_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site2CloudCaCertTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site2CloudCaCertTag to import
  * @param importFromId The id of the existing Site2CloudCaCertTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site2CloudCaCertTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_site2cloud_ca_cert_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud_ca_cert_tag aviatrix_site2cloud_ca_cert_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Site2CloudCaCertTagConfig
  */
  public constructor(scope: Construct, id: string, config: Site2CloudCaCertTagConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_site2cloud_ca_cert_tag',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._tagName = config.tagName;
    this._caCertificates.internalValue = config.caCertificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // ca_certificates - computed: false, optional: false, required: true
  private _caCertificates = new Site2CloudCaCertTagCaCertificatesList(this, "ca_certificates", true);
  public get caCertificates() {
    return this._caCertificates;
  }
  public putCaCertificates(value: Site2CloudCaCertTagCaCertificates[] | cdktf.IResolvable) {
    this._caCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tag_name: cdktf.stringToTerraform(this._tagName),
      ca_certificates: cdktf.listMapper(site2CloudCaCertTagCaCertificatesToTerraform, true)(this._caCertificates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificates: {
        value: cdktf.listMapperHcl(site2CloudCaCertTagCaCertificatesToHclTerraform, true)(this._caCertificates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Site2CloudCaCertTagCaCertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
