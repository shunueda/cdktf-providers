// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#autonomous_exadata_infrastructure_id DataOciDatabaseAutonomousExadataInfrastructureOcpu#autonomous_exadata_infrastructure_id}
  */
  readonly autonomousExadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#id DataOciDatabaseAutonomousExadataInfrastructureOcpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType {
}

export function dataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adw - computed: true, optional: false, required: false
  public get adw() {
    return this.getNumberAttribute('adw');
  }

  // atp - computed: true, optional: false, required: false
  public get atp() {
    return this.getNumberAttribute('atp');
  }
}

export class DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu oci_database_autonomous_exadata_infrastructure_ocpu}
*/
export class DataOciDatabaseAutonomousExadataInfrastructureOcpu extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_exadata_infrastructure_ocpu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructureOcpu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructureOcpu to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousExadataInfrastructureOcpu that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructureOcpu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_exadata_infrastructure_ocpu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_autonomous_exadata_infrastructure_ocpu oci_database_autonomous_exadata_infrastructure_ocpu} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure_ocpu',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _autonomousExadataInfrastructureId?: string; 
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }
  public set autonomousExadataInfrastructureId(value: string) {
    this._autonomousExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousExadataInfrastructureIdInput() {
    return this._autonomousExadataInfrastructureId;
  }

  // by_workload_type - computed: true, optional: false, required: false
  private _byWorkloadType = new DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadTypeList(this, "by_workload_type", false);
  public get byWorkloadType() {
    return this._byWorkloadType;
  }

  // consumed_cpu - computed: true, optional: false, required: false
  public get consumedCpu() {
    return this.getNumberAttribute('consumed_cpu');
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

  // total_cpu - computed: true, optional: false, required: false
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: cdktf.stringToTerraform(this._autonomousExadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._autonomousExadataInfrastructureId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
