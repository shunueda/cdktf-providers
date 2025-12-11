// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisioningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#app_connector_group_id ProvisioningKey#app_connector_group_id}
  */
  readonly appConnectorGroupId?: string;
  /**
  * Specifies the provisioning key type for App Connectors or ZPA Private Service Edges. The supported values are CONNECTOR_GRP and SERVICE_EDGE_GRP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#association_type ProvisioningKey#association_type}
  */
  readonly associationType: string;
  /**
  * Whether the provisioning key is enabled or not. Supported values: true, false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#enabled ProvisioningKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the enrollment certificate that can be used for this provisioning key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#enrollment_cert_id ProvisioningKey#enrollment_cert_id}
  */
  readonly enrollmentCertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#id ProvisioningKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#ip_acl ProvisioningKey#ip_acl}
  */
  readonly ipAcl?: string[];
  /**
  * The maximum number of instances where this provisioning key can be used for enrolling an App Connector or Service Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#max_usage ProvisioningKey#max_usage}
  */
  readonly maxUsage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#microtenant_id ProvisioningKey#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the provisioning key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#name ProvisioningKey#name}
  */
  readonly name: string;
  /**
  * read only field. Ignored in PUT/POST calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#provisioning_key ProvisioningKey#provisioning_key}
  */
  readonly provisioningKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#ui_config ProvisioningKey#ui_config}
  */
  readonly uiConfig?: string;
  /**
  * The provisioning key utilization count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#usage_count ProvisioningKey#usage_count}
  */
  readonly usageCount?: string;
  /**
  * ID of the existing App Connector or Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#zcomponent_id ProvisioningKey#zcomponent_id}
  */
  readonly zcomponentId: string;
  /**
  * Read only property. Applicable only for GET calls, ignored in PUT/POST calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#zcomponent_name ProvisioningKey#zcomponent_name}
  */
  readonly zcomponentName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key zpa_provisioning_key}
*/
export class ProvisioningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_provisioning_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisioningKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisioningKey to import
  * @param importFromId The id of the existing ProvisioningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisioningKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_provisioning_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/provisioning_key zpa_provisioning_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisioningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisioningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_provisioning_key',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appConnectorGroupId = config.appConnectorGroupId;
    this._associationType = config.associationType;
    this._enabled = config.enabled;
    this._enrollmentCertId = config.enrollmentCertId;
    this._id = config.id;
    this._ipAcl = config.ipAcl;
    this._maxUsage = config.maxUsage;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._provisioningKey = config.provisioningKey;
    this._uiConfig = config.uiConfig;
    this._usageCount = config.usageCount;
    this._zcomponentId = config.zcomponentId;
    this._zcomponentName = config.zcomponentName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_connector_group_id - computed: false, optional: true, required: false
  private _appConnectorGroupId?: string; 
  public get appConnectorGroupId() {
    return this.getStringAttribute('app_connector_group_id');
  }
  public set appConnectorGroupId(value: string) {
    this._appConnectorGroupId = value;
  }
  public resetAppConnectorGroupId() {
    this._appConnectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectorGroupIdInput() {
    return this._appConnectorGroupId;
  }

  // app_connector_group_name - computed: true, optional: false, required: false
  public get appConnectorGroupName() {
    return this.getStringAttribute('app_connector_group_name');
  }

  // association_type - computed: false, optional: false, required: true
  private _associationType?: string; 
  public get associationType() {
    return this.getStringAttribute('association_type');
  }
  public set associationType(value: string) {
    this._associationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationTypeInput() {
    return this._associationType;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enrollment_cert_id - computed: false, optional: false, required: true
  private _enrollmentCertId?: string; 
  public get enrollmentCertId() {
    return this.getStringAttribute('enrollment_cert_id');
  }
  public set enrollmentCertId(value: string) {
    this._enrollmentCertId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentCertIdInput() {
    return this._enrollmentCertId;
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

  // ip_acl - computed: false, optional: true, required: false
  private _ipAcl?: string[]; 
  public get ipAcl() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_acl'));
  }
  public set ipAcl(value: string[]) {
    this._ipAcl = value;
  }
  public resetIpAcl() {
    this._ipAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclInput() {
    return this._ipAcl;
  }

  // max_usage - computed: false, optional: false, required: true
  private _maxUsage?: string; 
  public get maxUsage() {
    return this.getStringAttribute('max_usage');
  }
  public set maxUsage(value: string) {
    this._maxUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsageInput() {
    return this._maxUsage;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // provisioning_key - computed: true, optional: true, required: false
  private _provisioningKey?: string; 
  public get provisioningKey() {
    return this.getStringAttribute('provisioning_key');
  }
  public set provisioningKey(value: string) {
    this._provisioningKey = value;
  }
  public resetProvisioningKey() {
    this._provisioningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningKeyInput() {
    return this._provisioningKey;
  }

  // ui_config - computed: false, optional: true, required: false
  private _uiConfig?: string; 
  public get uiConfig() {
    return this.getStringAttribute('ui_config');
  }
  public set uiConfig(value: string) {
    this._uiConfig = value;
  }
  public resetUiConfig() {
    this._uiConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiConfigInput() {
    return this._uiConfig;
  }

  // usage_count - computed: true, optional: true, required: false
  private _usageCount?: string; 
  public get usageCount() {
    return this.getStringAttribute('usage_count');
  }
  public set usageCount(value: string) {
    this._usageCount = value;
  }
  public resetUsageCount() {
    this._usageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageCountInput() {
    return this._usageCount;
  }

  // zcomponent_id - computed: false, optional: false, required: true
  private _zcomponentId?: string; 
  public get zcomponentId() {
    return this.getStringAttribute('zcomponent_id');
  }
  public set zcomponentId(value: string) {
    this._zcomponentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zcomponentIdInput() {
    return this._zcomponentId;
  }

  // zcomponent_name - computed: true, optional: true, required: false
  private _zcomponentName?: string; 
  public get zcomponentName() {
    return this.getStringAttribute('zcomponent_name');
  }
  public set zcomponentName(value: string) {
    this._zcomponentName = value;
  }
  public resetZcomponentName() {
    this._zcomponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zcomponentNameInput() {
    return this._zcomponentName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_connector_group_id: cdktf.stringToTerraform(this._appConnectorGroupId),
      association_type: cdktf.stringToTerraform(this._associationType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrollment_cert_id: cdktf.stringToTerraform(this._enrollmentCertId),
      id: cdktf.stringToTerraform(this._id),
      ip_acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAcl),
      max_usage: cdktf.stringToTerraform(this._maxUsage),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      provisioning_key: cdktf.stringToTerraform(this._provisioningKey),
      ui_config: cdktf.stringToTerraform(this._uiConfig),
      usage_count: cdktf.stringToTerraform(this._usageCount),
      zcomponent_id: cdktf.stringToTerraform(this._zcomponentId),
      zcomponent_name: cdktf.stringToTerraform(this._zcomponentName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_connector_group_id: {
        value: cdktf.stringToHclTerraform(this._appConnectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association_type: {
        value: cdktf.stringToHclTerraform(this._associationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrollment_cert_id: {
        value: cdktf.stringToHclTerraform(this._enrollmentCertId),
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
      ip_acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAcl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_usage: {
        value: cdktf.stringToHclTerraform(this._maxUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      provisioning_key: {
        value: cdktf.stringToHclTerraform(this._provisioningKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_config: {
        value: cdktf.stringToHclTerraform(this._uiConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_count: {
        value: cdktf.stringToHclTerraform(this._usageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zcomponent_id: {
        value: cdktf.stringToHclTerraform(this._zcomponentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zcomponent_name: {
        value: cdktf.stringToHclTerraform(this._zcomponentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
