// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RackReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#comments RackReservation#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#description RackReservation#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#id RackReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#rack_id RackReservation#rack_id}
  */
  readonly rackId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#tags RackReservation#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#tenant_id RackReservation#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#units RackReservation#units}
  */
  readonly units: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#user_id RackReservation#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation netbox_rack_reservation}
*/
export class RackReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_rack_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RackReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RackReservation to import
  * @param importFromId The id of the existing RackReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RackReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_rack_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack_reservation netbox_rack_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RackReservationConfig
  */
  public constructor(scope: Construct, id: string, config: RackReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_rack_reservation',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._description = config.description;
    this._id = config.id;
    this._rackId = config.rackId;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._units = config.units;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // rack_id - computed: false, optional: false, required: true
  private _rackId?: number; 
  public get rackId() {
    return this.getNumberAttribute('rack_id');
  }
  public set rackId(value: number) {
    this._rackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rackIdInput() {
    return this._rackId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // units - computed: false, optional: false, required: true
  private _units?: number[]; 
  public get units() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('units')));
  }
  public set units(value: number[]) {
    this._units = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      rack_id: cdktf.numberToTerraform(this._rackId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      units: cdktf.listMapper(cdktf.numberToTerraform, false)(this._units),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      rack_id: {
        value: cdktf.numberToHclTerraform(this._rackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      units: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._units),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
