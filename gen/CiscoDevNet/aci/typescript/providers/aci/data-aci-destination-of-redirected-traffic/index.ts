// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciDestinationOfRedirectedTrafficConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#annotation DataAciDestinationOfRedirectedTraffic#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#description DataAciDestinationOfRedirectedTraffic#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#dest_name DataAciDestinationOfRedirectedTraffic#dest_name}
  */
  readonly destName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#id DataAciDestinationOfRedirectedTraffic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#ip DataAciDestinationOfRedirectedTraffic#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#ip2 DataAciDestinationOfRedirectedTraffic#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#mac DataAciDestinationOfRedirectedTraffic#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#name_alias DataAciDestinationOfRedirectedTraffic#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#pod_id DataAciDestinationOfRedirectedTraffic#pod_id}
  */
  readonly podId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#relation_vns_rs_redirect_health_group DataAciDestinationOfRedirectedTraffic#relation_vns_rs_redirect_health_group}
  */
  readonly relationVnsRsRedirectHealthGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#service_redirect_policy_dn DataAciDestinationOfRedirectedTraffic#service_redirect_policy_dn}
  */
  readonly serviceRedirectPolicyDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic aci_destination_of_redirected_traffic}
*/
export class DataAciDestinationOfRedirectedTraffic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_destination_of_redirected_traffic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciDestinationOfRedirectedTraffic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciDestinationOfRedirectedTraffic to import
  * @param importFromId The id of the existing DataAciDestinationOfRedirectedTraffic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciDestinationOfRedirectedTraffic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_destination_of_redirected_traffic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/destination_of_redirected_traffic aci_destination_of_redirected_traffic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciDestinationOfRedirectedTrafficConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciDestinationOfRedirectedTrafficConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_destination_of_redirected_traffic',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._destName = config.destName;
    this._id = config.id;
    this._ip = config.ip;
    this._ip2 = config.ip2;
    this._mac = config.mac;
    this._nameAlias = config.nameAlias;
    this._podId = config.podId;
    this._relationVnsRsRedirectHealthGroup = config.relationVnsRsRedirectHealthGroup;
    this._serviceRedirectPolicyDn = config.serviceRedirectPolicyDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_name - computed: true, optional: true, required: false
  private _destName?: string; 
  public get destName() {
    return this.getStringAttribute('dest_name');
  }
  public set destName(value: string) {
    this._destName = value;
  }
  public resetDestName() {
    this._destName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNameInput() {
    return this._destName;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // pod_id - computed: true, optional: true, required: false
  private _podId?: string; 
  public get podId() {
    return this.getStringAttribute('pod_id');
  }
  public set podId(value: string) {
    this._podId = value;
  }
  public resetPodId() {
    this._podId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdInput() {
    return this._podId;
  }

  // relation_vns_rs_redirect_health_group - computed: true, optional: true, required: false
  private _relationVnsRsRedirectHealthGroup?: string; 
  public get relationVnsRsRedirectHealthGroup() {
    return this.getStringAttribute('relation_vns_rs_redirect_health_group');
  }
  public set relationVnsRsRedirectHealthGroup(value: string) {
    this._relationVnsRsRedirectHealthGroup = value;
  }
  public resetRelationVnsRsRedirectHealthGroup() {
    this._relationVnsRsRedirectHealthGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsRedirectHealthGroupInput() {
    return this._relationVnsRsRedirectHealthGroup;
  }

  // service_redirect_policy_dn - computed: false, optional: false, required: true
  private _serviceRedirectPolicyDn?: string; 
  public get serviceRedirectPolicyDn() {
    return this.getStringAttribute('service_redirect_policy_dn');
  }
  public set serviceRedirectPolicyDn(value: string) {
    this._serviceRedirectPolicyDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRedirectPolicyDnInput() {
    return this._serviceRedirectPolicyDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      dest_name: cdktf.stringToTerraform(this._destName),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip2: cdktf.stringToTerraform(this._ip2),
      mac: cdktf.stringToTerraform(this._mac),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pod_id: cdktf.stringToTerraform(this._podId),
      relation_vns_rs_redirect_health_group: cdktf.stringToTerraform(this._relationVnsRsRedirectHealthGroup),
      service_redirect_policy_dn: cdktf.stringToTerraform(this._serviceRedirectPolicyDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      dest_name: {
        value: cdktf.stringToHclTerraform(this._destName),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip2: {
        value: cdktf.stringToHclTerraform(this._ip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_id: {
        value: cdktf.stringToHclTerraform(this._podId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_redirect_health_group: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsRedirectHealthGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_redirect_policy_dn: {
        value: cdktf.stringToHclTerraform(this._serviceRedirectPolicyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
