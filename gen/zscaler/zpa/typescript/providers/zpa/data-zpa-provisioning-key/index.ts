// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaProvisioningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the provisioning key type for App Connectors or ZPA Private Service Edges. The supported values are CONNECTOR_GRP and SERVICE_EDGE_GRP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#association_type DataZpaProvisioningKey#association_type}
  */
  readonly associationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#id DataZpaProvisioningKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#microtenant_id DataZpaProvisioningKey#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#microtenant_name DataZpaProvisioningKey#microtenant_name}
  */
  readonly microtenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#name DataZpaProvisioningKey#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key zpa_provisioning_key}
*/
export class DataZpaProvisioningKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_provisioning_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaProvisioningKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaProvisioningKey to import
  * @param importFromId The id of the existing DataZpaProvisioningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaProvisioningKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_provisioning_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/provisioning_key zpa_provisioning_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaProvisioningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataZpaProvisioningKeyConfig) {
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
    this._associationType = config.associationType;
    this._id = config.id;
    this._microtenantId = config.microtenantId;
    this._microtenantName = config.microtenantName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_connector_group_id - computed: true, optional: false, required: false
  public get appConnectorGroupId() {
    return this.getStringAttribute('app_connector_group_id');
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enrollment_cert_id - computed: true, optional: false, required: false
  public get enrollmentCertId() {
    return this.getStringAttribute('enrollment_cert_id');
  }

  // enrollment_cert_name - computed: true, optional: false, required: false
  public get enrollmentCertName() {
    return this.getStringAttribute('enrollment_cert_name');
  }

  // expiration_in_epoch_sec - computed: true, optional: false, required: false
  public get expirationInEpochSec() {
    return this.getStringAttribute('expiration_in_epoch_sec');
  }

  // id - computed: false, optional: true, required: false
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

  // ip_acl - computed: true, optional: false, required: false
  public get ipAcl() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_acl'));
  }

  // max_usage - computed: true, optional: false, required: false
  public get maxUsage() {
    return this.getStringAttribute('max_usage');
  }

  // microtenant_id - computed: false, optional: true, required: false
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

  // microtenant_name - computed: false, optional: true, required: false
  private _microtenantName?: string; 
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }
  public set microtenantName(value: string) {
    this._microtenantName = value;
  }
  public resetMicrotenantName() {
    this._microtenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantNameInput() {
    return this._microtenantName;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
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

  // provisioning_key - computed: true, optional: false, required: false
  public get provisioningKey() {
    return this.getStringAttribute('provisioning_key');
  }

  // ui_config - computed: true, optional: false, required: false
  public get uiConfig() {
    return this.getStringAttribute('ui_config');
  }

  // usage_count - computed: true, optional: false, required: false
  public get usageCount() {
    return this.getStringAttribute('usage_count');
  }

  // zcomponent_id - computed: true, optional: false, required: false
  public get zcomponentId() {
    return this.getStringAttribute('zcomponent_id');
  }

  // zcomponent_name - computed: true, optional: false, required: false
  public get zcomponentName() {
    return this.getStringAttribute('zcomponent_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      association_type: cdktf.stringToTerraform(this._associationType),
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      microtenant_name: cdktf.stringToTerraform(this._microtenantName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_type: {
        value: cdktf.stringToHclTerraform(this._associationType),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_name: {
        value: cdktf.stringToHclTerraform(this._microtenantName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
