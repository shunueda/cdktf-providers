// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudNativeHostImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Architecture of the native host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#arch DataDuplocloudNativeHostImage#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#id DataDuplocloudNativeHostImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This field is deprecated. Use k8s_version for precise filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#is_kubernetes DataDuplocloudNativeHostImage#is_kubernetes}
  */
  readonly isKubernetes?: boolean | cdktf.IResolvable;
  /**
  * K8 version of the native host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#k8s_version DataDuplocloudNativeHostImage#k8s_version}
  */
  readonly k8SVersion?: string;
  /**
  * Name of the Duplocloud native host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#name DataDuplocloudNativeHostImage#name}
  */
  readonly name?: string;
  /**
  * OS of native host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#os DataDuplocloudNativeHostImage#os}
  */
  readonly os?: string;
  /**
  * The tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#tenant_id DataDuplocloudNativeHostImage#tenant_id}
  */
  readonly tenantId: string;
  /**
  * username associated to native host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#username DataDuplocloudNativeHostImage#username}
  */
  readonly username?: string;
}
export interface DataDuplocloudNativeHostImageTags {
}

export function dataDuplocloudNativeHostImageTagsToTerraform(struct?: DataDuplocloudNativeHostImageTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudNativeHostImageTagsToHclTerraform(struct?: DataDuplocloudNativeHostImageTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudNativeHostImageTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudNativeHostImageTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudNativeHostImageTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDuplocloudNativeHostImageTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudNativeHostImageTagsOutputReference {
    return new DataDuplocloudNativeHostImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image duplocloud_native_host_image}
*/
export class DataDuplocloudNativeHostImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_native_host_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudNativeHostImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudNativeHostImage to import
  * @param importFromId The id of the existing DataDuplocloudNativeHostImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudNativeHostImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_native_host_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/data-sources/native_host_image duplocloud_native_host_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudNativeHostImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudNativeHostImageConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_native_host_image',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arch = config.arch;
    this._id = config.id;
    this._isKubernetes = config.isKubernetes;
    this._k8SVersion = config.k8SVersion;
    this._name = config.name;
    this._os = config.os;
    this._tenantId = config.tenantId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // is_kubernetes - computed: true, optional: true, required: false
  private _isKubernetes?: boolean | cdktf.IResolvable; 
  public get isKubernetes() {
    return this.getBooleanAttribute('is_kubernetes');
  }
  public set isKubernetes(value: boolean | cdktf.IResolvable) {
    this._isKubernetes = value;
  }
  public resetIsKubernetes() {
    this._isKubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKubernetesInput() {
    return this._isKubernetes;
  }

  // k8s_version - computed: false, optional: true, required: false
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  public resetK8SVersion() {
    this._k8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataDuplocloudNativeHostImageTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch: cdktf.stringToTerraform(this._arch),
      id: cdktf.stringToTerraform(this._id),
      is_kubernetes: cdktf.booleanToTerraform(this._isKubernetes),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
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
      is_kubernetes: {
        value: cdktf.booleanToHclTerraform(this._isKubernetes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_version: {
        value: cdktf.stringToHclTerraform(this._k8SVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
