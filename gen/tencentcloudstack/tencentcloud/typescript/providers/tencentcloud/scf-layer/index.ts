// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfLayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The compatible runtimes of layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#compatible_runtimes ScfLayer#compatible_runtimes}
  */
  readonly compatibleRuntimes: string[];
  /**
  * The description of layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#description ScfLayer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#id ScfLayer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#layer_name ScfLayer#layer_name}
  */
  readonly layerName: string;
  /**
  * The license info of layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#license_info ScfLayer#license_info}
  */
  readonly licenseInfo?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#content ScfLayer#content}
  */
  readonly content: ScfLayerContent;
}
export interface ScfLayerContent {
  /**
  * Cos bucket name of the SCF layer, such as `cos-1234567890`, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#cos_bucket_name ScfLayer#cos_bucket_name}
  */
  readonly cosBucketName?: string;
  /**
  * Cos bucket region of the SCF layer, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#cos_bucket_region ScfLayer#cos_bucket_region}
  */
  readonly cosBucketRegion?: string;
  /**
  * Cos object name of the SCF layer, should have suffix `.zip` or `.jar`, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#cos_object_name ScfLayer#cos_object_name}
  */
  readonly cosObjectName?: string;
  /**
  * Zip file of the SCF layer, conflict with `cos_bucket_name`, `cos_object_name`, `cos_bucket_region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#zip_file ScfLayer#zip_file}
  */
  readonly zipFile?: string;
}

export function scfLayerContentToTerraform(struct?: ScfLayerContentOutputReference | ScfLayerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_bucket_name: cdktf.stringToTerraform(struct!.cosBucketName),
    cos_bucket_region: cdktf.stringToTerraform(struct!.cosBucketRegion),
    cos_object_name: cdktf.stringToTerraform(struct!.cosObjectName),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}


export function scfLayerContentToHclTerraform(struct?: ScfLayerContentOutputReference | ScfLayerContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.cosBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.cosBucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_object_name: {
      value: cdktf.stringToHclTerraform(struct!.cosObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file: {
      value: cdktf.stringToHclTerraform(struct!.zipFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfLayerContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfLayerContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosBucketName = this._cosBucketName;
    }
    if (this._cosBucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosBucketRegion = this._cosBucketRegion;
    }
    if (this._cosObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosObjectName = this._cosObjectName;
    }
    if (this._zipFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFile = this._zipFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfLayerContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cosBucketName = undefined;
      this._cosBucketRegion = undefined;
      this._cosObjectName = undefined;
      this._zipFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cosBucketName = value.cosBucketName;
      this._cosBucketRegion = value.cosBucketRegion;
      this._cosObjectName = value.cosObjectName;
      this._zipFile = value.zipFile;
    }
  }

  // cos_bucket_name - computed: false, optional: true, required: false
  private _cosBucketName?: string; 
  public get cosBucketName() {
    return this.getStringAttribute('cos_bucket_name');
  }
  public set cosBucketName(value: string) {
    this._cosBucketName = value;
  }
  public resetCosBucketName() {
    this._cosBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketNameInput() {
    return this._cosBucketName;
  }

  // cos_bucket_region - computed: false, optional: true, required: false
  private _cosBucketRegion?: string; 
  public get cosBucketRegion() {
    return this.getStringAttribute('cos_bucket_region');
  }
  public set cosBucketRegion(value: string) {
    this._cosBucketRegion = value;
  }
  public resetCosBucketRegion() {
    this._cosBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketRegionInput() {
    return this._cosBucketRegion;
  }

  // cos_object_name - computed: false, optional: true, required: false
  private _cosObjectName?: string; 
  public get cosObjectName() {
    return this.getStringAttribute('cos_object_name');
  }
  public set cosObjectName(value: string) {
    this._cosObjectName = value;
  }
  public resetCosObjectName() {
    this._cosObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosObjectNameInput() {
    return this._cosObjectName;
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer tencentcloud_scf_layer}
*/
export class ScfLayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_layer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfLayer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfLayer to import
  * @param importFromId The id of the existing ScfLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfLayer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_layer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/scf_layer tencentcloud_scf_layer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfLayerConfig
  */
  public constructor(scope: Construct, id: string, config: ScfLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_layer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compatibleRuntimes = config.compatibleRuntimes;
    this._description = config.description;
    this._id = config.id;
    this._layerName = config.layerName;
    this._licenseInfo = config.licenseInfo;
    this._content.internalValue = config.content;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_sha_256 - computed: true, optional: false, required: false
  public get codeSha256() {
    return this.getStringAttribute('code_sha_256');
  }

  // compatible_runtimes - computed: false, optional: false, required: true
  private _compatibleRuntimes?: string[]; 
  public get compatibleRuntimes() {
    return this.getListAttribute('compatible_runtimes');
  }
  public set compatibleRuntimes(value: string[]) {
    this._compatibleRuntimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRuntimesInput() {
    return this._compatibleRuntimes;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // layer_name - computed: false, optional: false, required: true
  private _layerName?: string; 
  public get layerName() {
    return this.getStringAttribute('layer_name');
  }
  public set layerName(value: string) {
    this._layerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerNameInput() {
    return this._layerName;
  }

  // layer_version - computed: true, optional: false, required: false
  public get layerVersion() {
    return this.getNumberAttribute('layer_version');
  }

  // license_info - computed: false, optional: true, required: false
  private _licenseInfo?: string; 
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }
  public set licenseInfo(value: string) {
    this._licenseInfo = value;
  }
  public resetLicenseInfo() {
    this._licenseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInfoInput() {
    return this._licenseInfo;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // content - computed: false, optional: false, required: true
  private _content = new ScfLayerContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: ScfLayerContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatible_runtimes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleRuntimes),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      layer_name: cdktf.stringToTerraform(this._layerName),
      license_info: cdktf.stringToTerraform(this._licenseInfo),
      content: scfLayerContentToTerraform(this._content.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatible_runtimes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleRuntimes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer_name: {
        value: cdktf.stringToHclTerraform(this._layerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_info: {
        value: cdktf.stringToHclTerraform(this._licenseInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: scfLayerContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfLayerContentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
