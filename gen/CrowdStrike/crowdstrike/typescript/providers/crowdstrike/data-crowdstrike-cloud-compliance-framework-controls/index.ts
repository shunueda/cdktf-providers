// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeCloudComplianceFrameworkControlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the compliance benchmark in the framework. Examples: `AWS Foundational Security Best Practices v1.*`, `CIS 1.2.0 GCP`, `CIS 1.8.0 GKE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#benchmark DataCrowdstrikeCloudComplianceFrameworkControls#benchmark}
  */
  readonly benchmark?: string;
  /**
  * Name of the control. Examples: `Ensure security contact phone is set`, `Ensure that Azure Defender*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#control_name DataCrowdstrikeCloudComplianceFrameworkControls#control_name}
  */
  readonly controlName?: string;
  /**
  * Falcon Query Language (FQL) filter for advanced control searches. FQL filter, allowed props: `compliance_control_name`, `compliance_control_authority`, `compliance_control_type`, `compliance_control_section`, `compliance_control_requirement`, `compliance_control_benchmark_name`, `compliance_control_benchmark_version`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#fql DataCrowdstrikeCloudComplianceFrameworkControls#fql}
  */
  readonly fql?: string;
  /**
  * Requirement of the control(s) within the framework. Examples: `2.*`, `1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#requirement DataCrowdstrikeCloudComplianceFrameworkControls#requirement}
  */
  readonly requirement?: string;
  /**
  * Section of the benchmark where the control(s) reside. Examples: `Data Protection`, `Data*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#section DataCrowdstrikeCloudComplianceFrameworkControls#section}
  */
  readonly section?: string;
}
export interface DataCrowdstrikeCloudComplianceFrameworkControlsControls {
}

export function dataCrowdstrikeCloudComplianceFrameworkControlsControlsToTerraform(struct?: DataCrowdstrikeCloudComplianceFrameworkControlsControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeCloudComplianceFrameworkControlsControlsToHclTerraform(struct?: DataCrowdstrikeCloudComplianceFrameworkControlsControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeCloudComplianceFrameworkControlsControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeCloudComplianceFrameworkControlsControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeCloudComplianceFrameworkControlsControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return this.getStringAttribute('authority');
  }

  // benchmark - computed: true, optional: false, required: false
  public get benchmark() {
    return cdktf.Fn.tolist(this.getListAttribute('benchmark'));
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // requirement - computed: true, optional: false, required: false
  public get requirement() {
    return this.getStringAttribute('requirement');
  }

  // section - computed: true, optional: false, required: false
  public get section() {
    return this.getStringAttribute('section');
  }
}

export class DataCrowdstrikeCloudComplianceFrameworkControlsControlsList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeCloudComplianceFrameworkControlsControlsOutputReference {
    return new DataCrowdstrikeCloudComplianceFrameworkControlsControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls crowdstrike_cloud_compliance_framework_controls}
*/
export class DataCrowdstrikeCloudComplianceFrameworkControls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_compliance_framework_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeCloudComplianceFrameworkControls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeCloudComplianceFrameworkControls to import
  * @param importFromId The id of the existing DataCrowdstrikeCloudComplianceFrameworkControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeCloudComplianceFrameworkControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_compliance_framework_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/cloud_compliance_framework_controls crowdstrike_cloud_compliance_framework_controls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeCloudComplianceFrameworkControlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeCloudComplianceFrameworkControlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_compliance_framework_controls',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._benchmark = config.benchmark;
    this._controlName = config.controlName;
    this._fql = config.fql;
    this._requirement = config.requirement;
    this._section = config.section;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // benchmark - computed: false, optional: true, required: false
  private _benchmark?: string; 
  public get benchmark() {
    return this.getStringAttribute('benchmark');
  }
  public set benchmark(value: string) {
    this._benchmark = value;
  }
  public resetBenchmark() {
    this._benchmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarkInput() {
    return this._benchmark;
  }

  // control_name - computed: false, optional: true, required: false
  private _controlName?: string; 
  public get controlName() {
    return this.getStringAttribute('control_name');
  }
  public set controlName(value: string) {
    this._controlName = value;
  }
  public resetControlName() {
    this._controlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNameInput() {
    return this._controlName;
  }

  // controls - computed: true, optional: false, required: false
  private _controls = new DataCrowdstrikeCloudComplianceFrameworkControlsControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }

  // fql - computed: false, optional: true, required: false
  private _fql?: string; 
  public get fql() {
    return this.getStringAttribute('fql');
  }
  public set fql(value: string) {
    this._fql = value;
  }
  public resetFql() {
    this._fql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqlInput() {
    return this._fql;
  }

  // requirement - computed: false, optional: true, required: false
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  public resetRequirement() {
    this._requirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // section - computed: false, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      benchmark: cdktf.stringToTerraform(this._benchmark),
      control_name: cdktf.stringToTerraform(this._controlName),
      fql: cdktf.stringToTerraform(this._fql),
      requirement: cdktf.stringToTerraform(this._requirement),
      section: cdktf.stringToTerraform(this._section),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      benchmark: {
        value: cdktf.stringToHclTerraform(this._benchmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_name: {
        value: cdktf.stringToHclTerraform(this._controlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fql: {
        value: cdktf.stringToHclTerraform(this._fql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirement: {
        value: cdktf.stringToHclTerraform(this._requirement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      section: {
        value: cdktf.stringToHclTerraform(this._section),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
