// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#blue_green CsApplication#blue_green}
  */
  readonly blueGreen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#blue_green_confirm CsApplication#blue_green_confirm}
  */
  readonly blueGreenConfirm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#cluster_name CsApplication#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#description CsApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#environment CsApplication#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#id CsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#latest_image CsApplication#latest_image}
  */
  readonly latestImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#name CsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#template CsApplication#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#version CsApplication#version}
  */
  readonly version?: string;
}
export interface CsApplicationServices {
}

export function csApplicationServicesToTerraform(struct?: CsApplicationServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csApplicationServicesToHclTerraform(struct?: CsApplicationServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsApplicationServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsApplicationServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsApplicationServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class CsApplicationServicesList extends cdktf.ComplexList {

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
  public get(index: number): CsApplicationServicesOutputReference {
    return new CsApplicationServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application alicloud_cs_application}
*/
export class CsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsApplication to import
  * @param importFromId The id of the existing CsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cs_application alicloud_cs_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: CsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_application',
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
    this._blueGreen = config.blueGreen;
    this._blueGreenConfirm = config.blueGreenConfirm;
    this._clusterName = config.clusterName;
    this._description = config.description;
    this._environment = config.environment;
    this._id = config.id;
    this._latestImage = config.latestImage;
    this._name = config.name;
    this._template = config.template;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blue_green - computed: false, optional: true, required: false
  private _blueGreen?: boolean | cdktf.IResolvable; 
  public get blueGreen() {
    return this.getBooleanAttribute('blue_green');
  }
  public set blueGreen(value: boolean | cdktf.IResolvable) {
    this._blueGreen = value;
  }
  public resetBlueGreen() {
    this._blueGreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenInput() {
    return this._blueGreen;
  }

  // blue_green_confirm - computed: false, optional: true, required: false
  private _blueGreenConfirm?: boolean | cdktf.IResolvable; 
  public get blueGreenConfirm() {
    return this.getBooleanAttribute('blue_green_confirm');
  }
  public set blueGreenConfirm(value: boolean | cdktf.IResolvable) {
    this._blueGreenConfirm = value;
  }
  public resetBlueGreenConfirm() {
    this._blueGreenConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenConfirmInput() {
    return this._blueGreenConfirm;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
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

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // latest_image - computed: false, optional: true, required: false
  private _latestImage?: boolean | cdktf.IResolvable; 
  public get latestImage() {
    return this.getBooleanAttribute('latest_image');
  }
  public set latestImage(value: boolean | cdktf.IResolvable) {
    this._latestImage = value;
  }
  public resetLatestImage() {
    this._latestImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestImageInput() {
    return this._latestImage;
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

  // services - computed: true, optional: false, required: false
  private _services = new CsApplicationServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blue_green: cdktf.booleanToTerraform(this._blueGreen),
      blue_green_confirm: cdktf.booleanToTerraform(this._blueGreenConfirm),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      latest_image: cdktf.booleanToTerraform(this._latestImage),
      name: cdktf.stringToTerraform(this._name),
      template: cdktf.stringToTerraform(this._template),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blue_green: {
        value: cdktf.booleanToHclTerraform(this._blueGreen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blue_green_confirm: {
        value: cdktf.booleanToHclTerraform(this._blueGreenConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_image: {
        value: cdktf.booleanToHclTerraform(this._latestImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
