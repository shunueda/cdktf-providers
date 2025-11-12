// generated from terraform resource schema

import { K8SCronJobMetadata, 
k8SCronJobMetadataToTerraform, 
k8SCronJobMetadataToHclTerraform, 
K8SCronJobMetadataOutputReference, 
K8SCronJobSpec, 
k8SCronJobSpecToTerraform, 
k8SCronJobSpecToHclTerraform, 
K8SCronJobSpecList, 
K8SCronJobTimeouts, 
k8SCronJobTimeoutsToTerraform, 
k8SCronJobTimeoutsToHclTerraform, 
K8SCronJobTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface K8SCronJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation tags is the simplest way to constraint containers/pods with hosts/nodes. DuploCloud/Kubernetes Orchestrator will make sure containers will run on the hosts having same allocation tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#allocation_tags K8SCronJob#allocation_tags}
  */
  readonly allocationTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#id K8SCronJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#is_any_host_allowed K8SCronJob#is_any_host_allowed}
  */
  readonly isAnyHostAllowed?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the job will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#tenant_id K8SCronJob#tenant_id}
  */
  readonly tenantId: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#metadata K8SCronJob#metadata}
  */
  readonly metadata: K8SCronJobMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#spec K8SCronJob#spec}
  */
  readonly spec?: K8SCronJobSpec[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#timeouts K8SCronJob#timeouts}
  */
  readonly timeouts?: K8SCronJobTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job duplocloud_k8s_cron_job}
*/
export class K8SCronJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_k8s_cron_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SCronJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SCronJob to import
  * @param importFromId The id of the existing K8SCronJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SCronJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_k8s_cron_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/k8s_cron_job duplocloud_k8s_cron_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SCronJobConfig
  */
  public constructor(scope: Construct, id: string, config: K8SCronJobConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_k8s_cron_job',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new K8SCronJobMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: K8SCronJobMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new K8SCronJobSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: K8SCronJobSpec[] | cdktf.IResolvable) {
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
  private _timeouts = new K8SCronJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8SCronJobTimeouts) {
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
      metadata: k8SCronJobMetadataToTerraform(this._metadata.internalValue),
      spec: cdktf.listMapper(k8SCronJobSpecToTerraform, true)(this._spec.internalValue),
      timeouts: k8SCronJobTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: k8SCronJobMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SCronJobMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(k8SCronJobSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SCronJobSpecList",
      },
      timeouts: {
        value: k8SCronJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8SCronJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
