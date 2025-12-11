// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzuredevopsServiceendpointGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#id DataAzuredevopsServiceendpointGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#project_id DataAzuredevopsServiceendpointGithub#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the serviceendpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#service_endpoint_id DataAzuredevopsServiceendpointGithub#service_endpoint_id}
  */
  readonly serviceEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#service_endpoint_name DataAzuredevopsServiceendpointGithub#service_endpoint_name}
  */
  readonly serviceEndpointName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#timeouts DataAzuredevopsServiceendpointGithub#timeouts}
  */
  readonly timeouts?: DataAzuredevopsServiceendpointGithubTimeouts;
}
export interface DataAzuredevopsServiceendpointGithubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#read DataAzuredevopsServiceendpointGithub#read}
  */
  readonly read?: string;
}

export function dataAzuredevopsServiceendpointGithubTimeoutsToTerraform(struct?: DataAzuredevopsServiceendpointGithubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzuredevopsServiceendpointGithubTimeoutsToHclTerraform(struct?: DataAzuredevopsServiceendpointGithubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzuredevopsServiceendpointGithubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzuredevopsServiceendpointGithubTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsServiceendpointGithubTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github azuredevops_serviceendpoint_github}
*/
export class DataAzuredevopsServiceendpointGithub extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzuredevopsServiceendpointGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzuredevopsServiceendpointGithub to import
  * @param importFromId The id of the existing DataAzuredevopsServiceendpointGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzuredevopsServiceendpointGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/serviceendpoint_github azuredevops_serviceendpoint_github} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzuredevopsServiceendpointGithubConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzuredevopsServiceendpointGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_github',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.0',
        providerVersionConstraint: '1.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._projectId = config.projectId;
    this._serviceEndpointId = config.serviceEndpointId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_endpoint_id - computed: true, optional: true, required: false
  private _serviceEndpointId?: string; 
  public get serviceEndpointId() {
    return this.getStringAttribute('service_endpoint_id');
  }
  public set serviceEndpointId(value: string) {
    this._serviceEndpointId = value;
  }
  public resetServiceEndpointId() {
    this._serviceEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointIdInput() {
    return this._serviceEndpointId;
  }

  // service_endpoint_name - computed: true, optional: true, required: false
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  public resetServiceEndpointName() {
    this._serviceEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzuredevopsServiceendpointGithubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzuredevopsServiceendpointGithubTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_endpoint_id: cdktf.stringToTerraform(this._serviceEndpointId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      timeouts: dataAzuredevopsServiceendpointGithubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzuredevopsServiceendpointGithubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzuredevopsServiceendpointGithubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
