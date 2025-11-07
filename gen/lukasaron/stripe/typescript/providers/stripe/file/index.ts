// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A content file to upload encoded by base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#base64content File#base64content}
  */
  readonly base64Content: string;
  /**
  * The suitable name for saving the file to a filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#filename File#filename}
  */
  readonly filename: string;
  /**
  * The purpose of the uploaded file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#purpose File#purpose}
  */
  readonly purpose: string;
  /**
  * link_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#link_data File#link_data}
  */
  readonly linkData?: FileLinkData;
}
export interface FileLinks {
}

export function fileLinksToTerraform(struct?: FileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fileLinksToHclTerraform(struct?: FileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FileLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // livemode - computed: true, optional: false, required: false
  public get livemode() {
    return this.getBooleanAttribute('livemode');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class FileLinksList extends cdktf.ComplexList {

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
  public get(index: number): FileLinksOutputReference {
    return new FileLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileLinkData {
  /**
  * Set this to true to create a file link for the newly created file. Creating a link is only possible when the file’s purpose is one of the following: business_icon, business_logo, customer_signature, dispute_evidence, pci_document, tax_document_user_upload, or terminal_reader_splashscreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#create File#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * The link isn’t available after this future timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#expires_at File#expires_at}
  */
  readonly expiresAt?: number;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#metadata File#metadata}
  */
  readonly metadata?: { [key: string]: string };
}

export function fileLinkDataToTerraform(struct?: FileLinkDataOutputReference | FileLinkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    expires_at: cdktf.numberToTerraform(struct!.expiresAt),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
  }
}


export function fileLinkDataToHclTerraform(struct?: FileLinkDataOutputReference | FileLinkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expires_at: {
      value: cdktf.numberToHclTerraform(struct!.expiresAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileLinkDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileLinkData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._expiresAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAt = this._expiresAt;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileLinkData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._expiresAt = undefined;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._expiresAt = value.expiresAt;
      this._metadata = value.metadata;
    }
  }

  // create - computed: false, optional: false, required: true
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: number; 
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
  }
  public set expiresAt(value: number) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file stripe_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/file stripe_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_file',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64Content = config.base64Content;
    this._filename = config.filename;
    this._purpose = config.purpose;
    this._linkData.internalValue = config.linkData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64content - computed: false, optional: false, required: true
  private _base64Content?: string; 
  public get base64Content() {
    return this.getStringAttribute('base64content');
  }
  public set base64Content(value: string) {
    this._base64Content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64ContentInput() {
    return this._base64Content;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new FileLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // link_data - computed: false, optional: true, required: false
  private _linkData = new FileLinkDataOutputReference(this, "link_data");
  public get linkData() {
    return this._linkData;
  }
  public putLinkData(value: FileLinkData) {
    this._linkData.internalValue = value;
  }
  public resetLinkData() {
    this._linkData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDataInput() {
    return this._linkData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64content: cdktf.stringToTerraform(this._base64Content),
      filename: cdktf.stringToTerraform(this._filename),
      purpose: cdktf.stringToTerraform(this._purpose),
      link_data: fileLinkDataToTerraform(this._linkData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64content: {
        value: cdktf.stringToHclTerraform(this._base64Content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_data: {
        value: fileLinkDataToHclTerraform(this._linkData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileLinkDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
