// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AligreenBizTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#biz_type_import AligreenBizType#biz_type_import}
  */
  readonly bizTypeImport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#biz_type_name AligreenBizType#biz_type_name}
  */
  readonly bizTypeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#cite_template AligreenBizType#cite_template}
  */
  readonly citeTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#description AligreenBizType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#id AligreenBizType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#industry_info AligreenBizType#industry_info}
  */
  readonly industryInfo?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#timeouts AligreenBizType#timeouts}
  */
  readonly timeouts?: AligreenBizTypeTimeouts;
}
export interface AligreenBizTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#create AligreenBizType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#delete AligreenBizType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#update AligreenBizType#update}
  */
  readonly update?: string;
}

export function aligreenBizTypeTimeoutsToTerraform(struct?: AligreenBizTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function aligreenBizTypeTimeoutsToHclTerraform(struct?: AligreenBizTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AligreenBizTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AligreenBizTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AligreenBizTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type alicloud_aligreen_biz_type}
*/
export class AligreenBizType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_aligreen_biz_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AligreenBizType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AligreenBizType to import
  * @param importFromId The id of the existing AligreenBizType that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AligreenBizType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_aligreen_biz_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/aligreen_biz_type alicloud_aligreen_biz_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AligreenBizTypeConfig
  */
  public constructor(scope: Construct, id: string, config: AligreenBizTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_aligreen_biz_type',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bizTypeImport = config.bizTypeImport;
    this._bizTypeName = config.bizTypeName;
    this._citeTemplate = config.citeTemplate;
    this._description = config.description;
    this._id = config.id;
    this._industryInfo = config.industryInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biz_type_import - computed: false, optional: true, required: false
  private _bizTypeImport?: string; 
  public get bizTypeImport() {
    return this.getStringAttribute('biz_type_import');
  }
  public set bizTypeImport(value: string) {
    this._bizTypeImport = value;
  }
  public resetBizTypeImport() {
    this._bizTypeImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeImportInput() {
    return this._bizTypeImport;
  }

  // biz_type_name - computed: false, optional: false, required: true
  private _bizTypeName?: string; 
  public get bizTypeName() {
    return this.getStringAttribute('biz_type_name');
  }
  public set bizTypeName(value: string) {
    this._bizTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeNameInput() {
    return this._bizTypeName;
  }

  // cite_template - computed: false, optional: true, required: false
  private _citeTemplate?: boolean | cdktf.IResolvable; 
  public get citeTemplate() {
    return this.getBooleanAttribute('cite_template');
  }
  public set citeTemplate(value: boolean | cdktf.IResolvable) {
    this._citeTemplate = value;
  }
  public resetCiteTemplate() {
    this._citeTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get citeTemplateInput() {
    return this._citeTemplate;
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

  // industry_info - computed: false, optional: true, required: false
  private _industryInfo?: string; 
  public get industryInfo() {
    return this.getStringAttribute('industry_info');
  }
  public set industryInfo(value: string) {
    this._industryInfo = value;
  }
  public resetIndustryInfo() {
    this._industryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryInfoInput() {
    return this._industryInfo;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AligreenBizTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AligreenBizTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      biz_type_import: cdktf.stringToTerraform(this._bizTypeImport),
      biz_type_name: cdktf.stringToTerraform(this._bizTypeName),
      cite_template: cdktf.booleanToTerraform(this._citeTemplate),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      industry_info: cdktf.stringToTerraform(this._industryInfo),
      timeouts: aligreenBizTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      biz_type_import: {
        value: cdktf.stringToHclTerraform(this._bizTypeImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biz_type_name: {
        value: cdktf.stringToHclTerraform(this._bizTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cite_template: {
        value: cdktf.booleanToHclTerraform(this._citeTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      industry_info: {
        value: cdktf.stringToHclTerraform(this._industryInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aligreenBizTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AligreenBizTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
