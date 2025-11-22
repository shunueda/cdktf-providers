// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/data-sources/vns3_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCohesivenetVns3ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/data-sources/vns3_config#id DataCohesivenetVns3Config#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCohesivenetVns3ConfigResponse {
}

export function dataCohesivenetVns3ConfigResponseToTerraform(struct?: DataCohesivenetVns3ConfigResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCohesivenetVns3ConfigResponseToHclTerraform(struct?: DataCohesivenetVns3ConfigResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCohesivenetVns3ConfigResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCohesivenetVns3ConfigResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCohesivenetVns3ConfigResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // licensed - computed: true, optional: false, required: false
  public get licensed() {
    return this.getBooleanAttribute('licensed');
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }

  // ntp_hosts - computed: true, optional: false, required: false
  public get ntpHosts() {
    return this.getStringAttribute('ntp_hosts');
  }

  // overlay_ipaddress - computed: true, optional: false, required: false
  public get overlayIpaddress() {
    return this.getStringAttribute('overlay_ipaddress');
  }

  // peered - computed: true, optional: false, required: false
  public get peered() {
    return this.getBooleanAttribute('peered');
  }

  // private_ipaddress - computed: true, optional: false, required: false
  public get privateIpaddress() {
    return this.getStringAttribute('private_ipaddress');
  }

  // public_ipaddress - computed: true, optional: false, required: false
  public get publicIpaddress() {
    return this.getStringAttribute('public_ipaddress');
  }

  // security_token - computed: true, optional: false, required: false
  public get securityToken() {
    return this.getStringAttribute('security_token');
  }

  // subnet_gateway - computed: true, optional: false, required: false
  public get subnetGateway() {
    return this.getStringAttribute('subnet_gateway');
  }

  // topology_checksum - computed: true, optional: false, required: false
  public get topologyChecksum() {
    return this.getStringAttribute('topology_checksum');
  }

  // topology_name - computed: true, optional: false, required: false
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }

  // vns3_version - computed: true, optional: false, required: false
  public get vns3Version() {
    return this.getStringAttribute('vns3_version');
  }
}

export class DataCohesivenetVns3ConfigResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataCohesivenetVns3ConfigResponseOutputReference {
    return new DataCohesivenetVns3ConfigResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/data-sources/vns3_config cohesivenet_vns3_config}
*/
export class DataCohesivenetVns3Config extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCohesivenetVns3Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCohesivenetVns3Config to import
  * @param importFromId The id of the existing DataCohesivenetVns3Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/data-sources/vns3_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCohesivenetVns3Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/data-sources/vns3_config cohesivenet_vns3_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCohesivenetVns3ConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCohesivenetVns3ConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_config',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // response - computed: true, optional: false, required: false
  private _response = new DataCohesivenetVns3ConfigResponseList(this, "response", false);
  public get response() {
    return this._response;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
