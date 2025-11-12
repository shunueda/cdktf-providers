// https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessOfferConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of users to grant admin access. "admin" user is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer#admin AccessOffer#admin}
  */
  readonly admin?: string[];
  /**
  * List of users to grant consume access. "admin" user is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer#consume AccessOffer#consume}
  */
  readonly consume?: string[];
  /**
  * The url of the offer for access management. If this is changed the resource will be deleted and a new resource will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer#offer_url AccessOffer#offer_url}
  */
  readonly offerUrl: string;
  /**
  * List of users to grant read access. "admin" user is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer#read AccessOffer#read}
  */
  readonly read?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer juju_access_offer}
*/
export class AccessOffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_access_offer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessOffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessOffer to import
  * @param importFromId The id of the existing AccessOffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessOffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_access_offer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/access_offer juju_access_offer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessOfferConfig
  */
  public constructor(scope: Construct, id: string, config: AccessOfferConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_access_offer',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._consume = config.consume;
    this._offerUrl = config.offerUrl;
    this._read = config.read;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: string[]; 
  public get admin() {
    return cdktf.Fn.tolist(this.getListAttribute('admin'));
  }
  public set admin(value: string[]) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // consume - computed: false, optional: true, required: false
  private _consume?: string[]; 
  public get consume() {
    return cdktf.Fn.tolist(this.getListAttribute('consume'));
  }
  public set consume(value: string[]) {
    this._consume = value;
  }
  public resetConsume() {
    this._consume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeInput() {
    return this._consume;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // offer_url - computed: false, optional: false, required: true
  private _offerUrl?: string; 
  public get offerUrl() {
    return this.getStringAttribute('offer_url');
  }
  public set offerUrl(value: string) {
    this._offerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerUrlInput() {
    return this._offerUrl;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string[]; 
  public get read() {
    return cdktf.Fn.tolist(this.getListAttribute('read'));
  }
  public set read(value: string[]) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admin),
      consume: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consume),
      offer_url: cdktf.stringToTerraform(this._offerUrl),
      read: cdktf.listMapper(cdktf.stringToTerraform, false)(this._read),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      consume: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consume),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      offer_url: {
        value: cdktf.stringToHclTerraform(this._offerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._read),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
