// generated from terraform resource schema

import { K8SJobMetadata, 
k8SJobMetadataToTerraform, 
k8SJobMetadataToHclTerraform, 
K8SJobMetadataOutputReference, 
K8SJobSpec, 
k8SJobSpecToTerraform, 
k8SJobSpecToHclTerraform, 
K8SJobSpecList, 
K8SJobTimeouts, 
k8SJobTimeoutsToTerraform, 
k8SJobTimeoutsToHclTerraform, 
K8SJobTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface K8SJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation tags is the simplest way to constraint containers/pods with hosts/nodes. DuploCloud/Kubernetes Orchestrator will make sure containers will run on the hosts having same allocation tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#allocation_tags K8SJob#allocation_tags}
  */
  readonly allocationTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#id K8SJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#is_any_host_allowed K8SJob#is_any_host_allowed}
  */
  readonly isAnyHostAllowed?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the job will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#tenant_id K8SJob#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#wait_for_completion K8SJob#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#metadata K8SJob#metadata}
  */
  readonly metadata: K8SJobMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#spec K8SJob#spec}
  */
  readonly spec?: K8SJobSpec[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#timeouts K8SJob#timeouts}
  */
  readonly timeouts?: K8SJobTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job duplocloud_k8s_job}
*/
export class K8SJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_k8s_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SJob to import
  * @param importFromId The id of the existing K8SJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_k8s_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/k8s_job duplocloud_k8s_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SJobConfig
  */
  public constructor(scope: Construct, id: string, config: K8SJobConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_k8s_job',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
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
    this._waitForCompletion = config.waitForCompletion;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
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

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktf.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new K8SJobMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: K8SJobMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new K8SJobSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: K8SJobSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8SJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8SJobTimeouts) {
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
      allocation_tags: cdktf.stringToTerraform(this._allocationTags),
      id: cdktf.stringToTerraform(this._id),
      is_any_host_allowed: cdktf.booleanToTerraform(this._isAnyHostAllowed),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      metadata: k8SJobMetadataToTerraform(this._metadata.internalValue),
      spec: cdktf.listMapper(k8SJobSpecToTerraform, true)(this._spec.internalValue),
      timeouts: k8SJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      wait_for_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: k8SJobMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SJobMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(k8SJobSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SJobSpecList",
      },
      timeouts: {
        value: k8SJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8SJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
