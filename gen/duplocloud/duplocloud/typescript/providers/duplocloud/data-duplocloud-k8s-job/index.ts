// generated from terraform resource schema

import { DataDuplocloudK8SJobSpecList, 
DataDuplocloudK8SJobMetadata, 
dataDuplocloudK8SJobMetadataToTerraform, 
dataDuplocloudK8SJobMetadataToHclTerraform, 
DataDuplocloudK8SJobMetadataOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDuplocloudK8SJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation tags is the simplest way to constraint containers/pods with hosts/nodes. DuploCloud/Kubernetes Orchestrator will make sure containers will run on the hosts having same allocation tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#allocation_tags DataDuplocloudK8SJob#allocation_tags}
  */
  readonly allocationTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#id DataDuplocloudK8SJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#is_any_host_allowed DataDuplocloudK8SJob#is_any_host_allowed}
  */
  readonly isAnyHostAllowed?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the job will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#tenant_id DataDuplocloudK8SJob#tenant_id}
  */
  readonly tenantId: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#metadata DataDuplocloudK8SJob#metadata}
  */
  readonly metadata: DataDuplocloudK8SJobMetadata;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job duplocloud_k8s_job}
*/
export class DataDuplocloudK8SJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_k8s_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudK8SJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudK8SJob to import
  * @param importFromId The id of the existing DataDuplocloudK8SJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudK8SJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_k8s_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/k8s_job duplocloud_k8s_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudK8SJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudK8SJobConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_k8s_job',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationTags = config.allocationTags;
    this._id = config.id;
    this._isAnyHostAllowed = config.isAnyHostAllowed;
    this._tenantId = config.tenantId;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_tags - computed: false, optional: true, required: false
  private _allocationTags?: string; 
  public get allocationTags() {
    return this.getStringAttribute('allocation_tags');
  }
  public set allocationTags(value: string) {
    this._allocationTags = value;
  }
  public resetAllocationTags() {
    this._allocationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTagsInput() {
    return this._allocationTags;
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

  // is_any_host_allowed - computed: false, optional: true, required: false
  private _isAnyHostAllowed?: boolean | cdktf.IResolvable; 
  public get isAnyHostAllowed() {
    return this.getBooleanAttribute('is_any_host_allowed');
  }
  public set isAnyHostAllowed(value: boolean | cdktf.IResolvable) {
    this._isAnyHostAllowed = value;
  }
  public resetIsAnyHostAllowed() {
    this._isAnyHostAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnyHostAllowedInput() {
    return this._isAnyHostAllowed;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDuplocloudK8SJobSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
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

  // wait_for_completion - computed: true, optional: false, required: false
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataDuplocloudK8SJobMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataDuplocloudK8SJobMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_tags: cdktf.stringToTerraform(this._allocationTags),
      id: cdktf.stringToTerraform(this._id),
      is_any_host_allowed: cdktf.booleanToTerraform(this._isAnyHostAllowed),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      metadata: dataDuplocloudK8SJobMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_tags: {
        value: cdktf.stringToHclTerraform(this._allocationTags),
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
      is_any_host_allowed: {
        value: cdktf.booleanToHclTerraform(this._isAnyHostAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataDuplocloudK8SJobMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDuplocloudK8SJobMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
