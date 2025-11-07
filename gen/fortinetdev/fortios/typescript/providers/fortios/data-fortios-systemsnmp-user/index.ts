// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemsnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user#id DataFortiosSystemsnmpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user#name DataFortiosSystemsnmpUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user#vdomparam DataFortiosSystemsnmpUser#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemsnmpUserVdoms {
}

export function dataFortiosSystemsnmpUserVdomsToTerraform(struct?: DataFortiosSystemsnmpUserVdoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemsnmpUserVdomsToHclTerraform(struct?: DataFortiosSystemsnmpUserVdoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemsnmpUserVdomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemsnmpUserVdoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemsnmpUserVdoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemsnmpUserVdomsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemsnmpUserVdomsOutputReference {
    return new DataFortiosSystemsnmpUserVdomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user fortios_systemsnmp_user}
*/
export class DataFortiosSystemsnmpUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsnmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemsnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemsnmpUser to import
  * @param importFromId The id of the existing DataFortiosSystemsnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemsnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsnmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemsnmp_user fortios_systemsnmp_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemsnmpUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemsnmpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsnmp_user',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_proto - computed: true, optional: false, required: false
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }

  // auth_pwd - computed: true, optional: false, required: false
  public get authPwd() {
    return this.getStringAttribute('auth_pwd');
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getStringAttribute('events');
  }

  // ha_direct - computed: true, optional: false, required: false
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_select_method - computed: true, optional: false, required: false
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }

  // mib_view - computed: true, optional: false, required: false
  public get mibView() {
    return this.getStringAttribute('mib_view');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notify_hosts - computed: true, optional: false, required: false
  public get notifyHosts() {
    return this.getStringAttribute('notify_hosts');
  }

  // notify_hosts6 - computed: true, optional: false, required: false
  public get notifyHosts6() {
    return this.getStringAttribute('notify_hosts6');
  }

  // priv_proto - computed: true, optional: false, required: false
  public get privProto() {
    return this.getStringAttribute('priv_proto');
  }

  // priv_pwd - computed: true, optional: false, required: false
  public get privPwd() {
    return this.getStringAttribute('priv_pwd');
  }

  // queries - computed: true, optional: false, required: false
  public get queries() {
    return this.getStringAttribute('queries');
  }

  // query_port - computed: true, optional: false, required: false
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ipv6 - computed: true, optional: false, required: false
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trap_lport - computed: true, optional: false, required: false
  public get trapLport() {
    return this.getNumberAttribute('trap_lport');
  }

  // trap_rport - computed: true, optional: false, required: false
  public get trapRport() {
    return this.getNumberAttribute('trap_rport');
  }

  // trap_status - computed: true, optional: false, required: false
  public get trapStatus() {
    return this.getStringAttribute('trap_status');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vdoms - computed: true, optional: false, required: false
  private _vdoms = new DataFortiosSystemsnmpUserVdomsList(this, "vdoms", false);
  public get vdoms() {
    return this._vdoms;
  }

  // vrf_select - computed: true, optional: false, required: false
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
