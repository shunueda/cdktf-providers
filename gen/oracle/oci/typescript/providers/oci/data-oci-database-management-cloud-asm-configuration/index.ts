// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementCloudAsmConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration#cloud_asm_id DataOciDatabaseManagementCloudAsmConfiguration#cloud_asm_id}
  */
  readonly cloudAsmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration#id DataOciDatabaseManagementCloudAsmConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration#opc_named_credential_id DataOciDatabaseManagementCloudAsmConfiguration#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
}
export interface DataOciDatabaseManagementCloudAsmConfigurationInitParameters {
}

export function dataOciDatabaseManagementCloudAsmConfigurationInitParametersToTerraform(struct?: DataOciDatabaseManagementCloudAsmConfigurationInitParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementCloudAsmConfigurationInitParametersToHclTerraform(struct?: DataOciDatabaseManagementCloudAsmConfigurationInitParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementCloudAsmConfigurationInitParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementCloudAsmConfigurationInitParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementCloudAsmConfigurationInitParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_instance_display_name - computed: true, optional: false, required: false
  public get asmInstanceDisplayName() {
    return this.getStringAttribute('asm_instance_display_name');
  }

  // asm_instance_id - computed: true, optional: false, required: false
  public get asmInstanceId() {
    return this.getStringAttribute('asm_instance_id');
  }

  // auto_mount_disk_groups - computed: true, optional: false, required: false
  public get autoMountDiskGroups() {
    return this.getListAttribute('auto_mount_disk_groups');
  }

  // disk_discovery_path - computed: true, optional: false, required: false
  public get diskDiscoveryPath() {
    return this.getStringAttribute('disk_discovery_path');
  }

  // preferred_read_failure_groups - computed: true, optional: false, required: false
  public get preferredReadFailureGroups() {
    return this.getListAttribute('preferred_read_failure_groups');
  }

  // rebalance_power - computed: true, optional: false, required: false
  public get rebalancePower() {
    return this.getNumberAttribute('rebalance_power');
  }
}

export class DataOciDatabaseManagementCloudAsmConfigurationInitParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementCloudAsmConfigurationInitParametersOutputReference {
    return new DataOciDatabaseManagementCloudAsmConfigurationInitParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration oci_database_management_cloud_asm_configuration}
*/
export class DataOciDatabaseManagementCloudAsmConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_asm_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementCloudAsmConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementCloudAsmConfiguration to import
  * @param importFromId The id of the existing DataOciDatabaseManagementCloudAsmConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementCloudAsmConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_asm_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_cloud_asm_configuration oci_database_management_cloud_asm_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementCloudAsmConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementCloudAsmConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_asm_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAsmId = config.cloudAsmId;
    this._id = config.id;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_asm_id - computed: false, optional: false, required: true
  private _cloudAsmId?: string; 
  public get cloudAsmId() {
    return this.getStringAttribute('cloud_asm_id');
  }
  public set cloudAsmId(value: string) {
    this._cloudAsmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAsmIdInput() {
    return this._cloudAsmId;
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

  // init_parameters - computed: true, optional: false, required: false
  private _initParameters = new DataOciDatabaseManagementCloudAsmConfigurationInitParametersList(this, "init_parameters", false);
  public get initParameters() {
    return this._initParameters;
  }

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_asm_id: cdktf.stringToTerraform(this._cloudAsmId),
      id: cdktf.stringToTerraform(this._id),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_asm_id: {
        value: cdktf.stringToHclTerraform(this._cloudAsmId),
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
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
