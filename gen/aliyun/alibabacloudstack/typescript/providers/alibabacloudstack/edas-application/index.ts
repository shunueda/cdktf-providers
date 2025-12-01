// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdasApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#application_name EdasApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#build_pack_id EdasApplication#build_pack_id}
  */
  readonly buildPackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#cluster_id EdasApplication#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#component_id EdasApplication#component_id}
  */
  readonly componentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#descriotion EdasApplication#descriotion}
  */
  readonly descriotion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#ecu_info EdasApplication#ecu_info}
  */
  readonly ecuInfo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#group_id EdasApplication#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#health_check_url EdasApplication#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#id EdasApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#package_type EdasApplication#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#package_version EdasApplication#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#region_id EdasApplication#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#war_url EdasApplication#war_url}
  */
  readonly warUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application alibabacloudstack_edas_application}
*/
export class EdasApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_edas_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdasApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdasApplication to import
  * @param importFromId The id of the existing EdasApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdasApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_edas_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/edas_application alibabacloudstack_edas_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdasApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: EdasApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_edas_application',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationName = config.applicationName;
    this._buildPackId = config.buildPackId;
    this._clusterId = config.clusterId;
    this._componentId = config.componentId;
    this._descriotion = config.descriotion;
    this._ecuInfo = config.ecuInfo;
    this._groupId = config.groupId;
    this._healthCheckUrl = config.healthCheckUrl;
    this._id = config.id;
    this._packageType = config.packageType;
    this._packageVersion = config.packageVersion;
    this._regionId = config.regionId;
    this._warUrl = config.warUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // build_pack_id - computed: false, optional: true, required: false
  private _buildPackId?: number; 
  public get buildPackId() {
    return this.getNumberAttribute('build_pack_id');
  }
  public set buildPackId(value: number) {
    this._buildPackId = value;
  }
  public resetBuildPackId() {
    this._buildPackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPackIdInput() {
    return this._buildPackId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // component_id - computed: false, optional: true, required: false
  private _componentId?: number; 
  public get componentId() {
    return this.getNumberAttribute('component_id');
  }
  public set componentId(value: number) {
    this._componentId = value;
  }
  public resetComponentId() {
    this._componentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // descriotion - computed: false, optional: true, required: false
  private _descriotion?: string; 
  public get descriotion() {
    return this.getStringAttribute('descriotion');
  }
  public set descriotion(value: string) {
    this._descriotion = value;
  }
  public resetDescriotion() {
    this._descriotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriotionInput() {
    return this._descriotion;
  }

  // ecu_info - computed: false, optional: true, required: false
  private _ecuInfo?: string[]; 
  public get ecuInfo() {
    return this.getListAttribute('ecu_info');
  }
  public set ecuInfo(value: string[]) {
    this._ecuInfo = value;
  }
  public resetEcuInfo() {
    this._ecuInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecuInfoInput() {
    return this._ecuInfo;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
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

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_version - computed: false, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // war_url - computed: false, optional: true, required: false
  private _warUrl?: string; 
  public get warUrl() {
    return this.getStringAttribute('war_url');
  }
  public set warUrl(value: string) {
    this._warUrl = value;
  }
  public resetWarUrl() {
    this._warUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warUrlInput() {
    return this._warUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_name: cdktf.stringToTerraform(this._applicationName),
      build_pack_id: cdktf.numberToTerraform(this._buildPackId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      component_id: cdktf.numberToTerraform(this._componentId),
      descriotion: cdktf.stringToTerraform(this._descriotion),
      ecu_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ecuInfo),
      group_id: cdktf.stringToTerraform(this._groupId),
      health_check_url: cdktf.stringToTerraform(this._healthCheckUrl),
      id: cdktf.stringToTerraform(this._id),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      region_id: cdktf.stringToTerraform(this._regionId),
      war_url: cdktf.stringToTerraform(this._warUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_pack_id: {
        value: cdktf.numberToHclTerraform(this._buildPackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_id: {
        value: cdktf.numberToHclTerraform(this._componentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      descriotion: {
        value: cdktf.stringToHclTerraform(this._descriotion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecu_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ecuInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_url: {
        value: cdktf.stringToHclTerraform(this._healthCheckUrl),
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
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      war_url: {
        value: cdktf.stringToHclTerraform(this._warUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
