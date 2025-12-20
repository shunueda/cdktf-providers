// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#cluster_id TsfNamespace#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#id TsfNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * whether to enable high availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#is_ha_enable TsfNamespace#is_ha_enable}
  */
  readonly isHaEnable?: string;
  /**
  * namespace description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#namespace_desc TsfNamespace#namespace_desc}
  */
  readonly namespaceDesc?: string;
  /**
  * Namespace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#namespace_id TsfNamespace#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * namespace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#namespace_name TsfNamespace#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * namespace resource type (default is DEF).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#namespace_resource_type TsfNamespace#namespace_resource_type}
  */
  readonly namespaceResourceType?: string;
  /**
  * Whether it is a global namespace (the default is DEF, which means a common namespace; GLOBAL means a global namespace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#namespace_type TsfNamespace#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * ID of the dataset to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#program_id TsfNamespace#program_id}
  */
  readonly programId?: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#program_id_list TsfNamespace#program_id_list}
  */
  readonly programIdList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace tencentcloud_tsf_namespace}
*/
export class TsfNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfNamespace to import
  * @param importFromId The id of the existing TsfNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_namespace tencentcloud_tsf_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: TsfNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_namespace',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._isHaEnable = config.isHaEnable;
    this._namespaceDesc = config.namespaceDesc;
    this._namespaceId = config.namespaceId;
    this._namespaceName = config.namespaceName;
    this._namespaceResourceType = config.namespaceResourceType;
    this._namespaceType = config.namespaceType;
    this._programId = config.programId;
    this._programIdList = config.programIdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_flag - computed: true, optional: false, required: false
  public get deleteFlag() {
    return this.getBooleanAttribute('delete_flag');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getStringAttribute('is_default');
  }

  // is_ha_enable - computed: true, optional: true, required: false
  private _isHaEnable?: string; 
  public get isHaEnable() {
    return this.getStringAttribute('is_ha_enable');
  }
  public set isHaEnable(value: string) {
    this._isHaEnable = value;
  }
  public resetIsHaEnable() {
    this._isHaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaEnableInput() {
    return this._isHaEnable;
  }

  // kube_inject_enable - computed: true, optional: false, required: false
  public get kubeInjectEnable() {
    return this.getBooleanAttribute('kube_inject_enable');
  }

  // namespace_code - computed: true, optional: false, required: false
  public get namespaceCode() {
    return this.getStringAttribute('namespace_code');
  }

  // namespace_desc - computed: true, optional: true, required: false
  private _namespaceDesc?: string; 
  public get namespaceDesc() {
    return this.getStringAttribute('namespace_desc');
  }
  public set namespaceDesc(value: string) {
    this._namespaceDesc = value;
  }
  public resetNamespaceDesc() {
    this._namespaceDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceDescInput() {
    return this._namespaceDesc;
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // namespace_resource_type - computed: true, optional: true, required: false
  private _namespaceResourceType?: string; 
  public get namespaceResourceType() {
    return this.getStringAttribute('namespace_resource_type');
  }
  public set namespaceResourceType(value: string) {
    this._namespaceResourceType = value;
  }
  public resetNamespaceResourceType() {
    this._namespaceResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceTypeInput() {
    return this._namespaceResourceType;
  }

  // namespace_status - computed: true, optional: false, required: false
  public get namespaceStatus() {
    return this.getStringAttribute('namespace_status');
  }

  // namespace_type - computed: true, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // program_id - computed: false, optional: true, required: false
  private _programId?: string; 
  public get programId() {
    return this.getStringAttribute('program_id');
  }
  public set programId(value: string) {
    this._programId = value;
  }
  public resetProgramId() {
    this._programId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdInput() {
    return this._programId;
  }

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      is_ha_enable: cdktf.stringToTerraform(this._isHaEnable),
      namespace_desc: cdktf.stringToTerraform(this._namespaceDesc),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      namespace_resource_type: cdktf.stringToTerraform(this._namespaceResourceType),
      namespace_type: cdktf.stringToTerraform(this._namespaceType),
      program_id: cdktf.stringToTerraform(this._programId),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      is_ha_enable: {
        value: cdktf.stringToHclTerraform(this._isHaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_desc: {
        value: cdktf.stringToHclTerraform(this._namespaceDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_resource_type: {
        value: cdktf.stringToHclTerraform(this._namespaceResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_type: {
        value: cdktf.stringToHclTerraform(this._namespaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id: {
        value: cdktf.stringToHclTerraform(this._programId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
