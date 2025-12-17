// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlaDomainAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Object IDs (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment#object_ids SlaDomainAssignment#object_ids}
  */
  readonly objectIds: string[];
  /**
  * SLA domain ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment#sla_domain_id SlaDomainAssignment#sla_domain_id}
  */
  readonly slaDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment polaris_sla_domain_assignment}
*/
export class SlaDomainAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_sla_domain_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlaDomainAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlaDomainAssignment to import
  * @param importFromId The id of the existing SlaDomainAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlaDomainAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_sla_domain_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/sla_domain_assignment polaris_sla_domain_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlaDomainAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: SlaDomainAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_sla_domain_assignment',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._objectIds = config.objectIds;
    this._slaDomainId = config.slaDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_ids - computed: false, optional: false, required: true
  private _objectIds?: string[]; 
  public get objectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('object_ids'));
  }
  public set objectIds(value: string[]) {
    this._objectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // sla_domain_id - computed: false, optional: false, required: true
  private _slaDomainId?: string; 
  public get slaDomainId() {
    return this.getStringAttribute('sla_domain_id');
  }
  public set slaDomainId(value: string) {
    this._slaDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaDomainIdInput() {
    return this._slaDomainId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectIds),
      sla_domain_id: cdktf.stringToTerraform(this._slaDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sla_domain_id: {
        value: cdktf.stringToHclTerraform(this._slaDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
