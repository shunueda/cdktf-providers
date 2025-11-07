// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAccessproxysshclientcertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#auth_ca FirewallAccessproxysshclientcert#auth_ca}
  */
  readonly authCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#dynamic_sort_subtable FirewallAccessproxysshclientcert#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#get_all_tables FirewallAccessproxysshclientcert#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#id FirewallAccessproxysshclientcert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#name FirewallAccessproxysshclientcert#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#permit_agent_forwarding FirewallAccessproxysshclientcert#permit_agent_forwarding}
  */
  readonly permitAgentForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#permit_port_forwarding FirewallAccessproxysshclientcert#permit_port_forwarding}
  */
  readonly permitPortForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#permit_pty FirewallAccessproxysshclientcert#permit_pty}
  */
  readonly permitPty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#permit_user_rc FirewallAccessproxysshclientcert#permit_user_rc}
  */
  readonly permitUserRc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#permit_x11_forwarding FirewallAccessproxysshclientcert#permit_x11_forwarding}
  */
  readonly permitX11Forwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#source_address FirewallAccessproxysshclientcert#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#vdomparam FirewallAccessproxysshclientcert#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cert_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#cert_extension FirewallAccessproxysshclientcert#cert_extension}
  */
  readonly certExtension?: FirewallAccessproxysshclientcertCertExtension[] | cdktf.IResolvable;
}
export interface FirewallAccessproxysshclientcertCertExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#critical FirewallAccessproxysshclientcert#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#data FirewallAccessproxysshclientcert#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#name FirewallAccessproxysshclientcert#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#type FirewallAccessproxysshclientcert#type}
  */
  readonly type?: string;
}

export function firewallAccessproxysshclientcertCertExtensionToTerraform(struct?: FirewallAccessproxysshclientcertCertExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.stringToTerraform(struct!.critical),
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function firewallAccessproxysshclientcertCertExtensionToHclTerraform(struct?: FirewallAccessproxysshclientcertCertExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallAccessproxysshclientcertCertExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallAccessproxysshclientcertCertExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallAccessproxysshclientcertCertExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._data = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._data = value.data;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FirewallAccessproxysshclientcertCertExtensionList extends cdktf.ComplexList {
  public internalValue? : FirewallAccessproxysshclientcertCertExtension[] | cdktf.IResolvable

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
  public get(index: number): FirewallAccessproxysshclientcertCertExtensionOutputReference {
    return new FirewallAccessproxysshclientcertCertExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert fortios_firewall_accessproxysshclientcert}
*/
export class FirewallAccessproxysshclientcert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_accessproxysshclientcert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAccessproxysshclientcert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAccessproxysshclientcert to import
  * @param importFromId The id of the existing FirewallAccessproxysshclientcert that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAccessproxysshclientcert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_accessproxysshclientcert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_accessproxysshclientcert fortios_firewall_accessproxysshclientcert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAccessproxysshclientcertConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallAccessproxysshclientcertConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_accessproxysshclientcert',
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
    this._authCa = config.authCa;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._permitAgentForwarding = config.permitAgentForwarding;
    this._permitPortForwarding = config.permitPortForwarding;
    this._permitPty = config.permitPty;
    this._permitUserRc = config.permitUserRc;
    this._permitX11Forwarding = config.permitX11Forwarding;
    this._sourceAddress = config.sourceAddress;
    this._vdomparam = config.vdomparam;
    this._certExtension.internalValue = config.certExtension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_ca - computed: false, optional: true, required: false
  private _authCa?: string; 
  public get authCa() {
    return this.getStringAttribute('auth_ca');
  }
  public set authCa(value: string) {
    this._authCa = value;
  }
  public resetAuthCa() {
    this._authCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCaInput() {
    return this._authCa;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permit_agent_forwarding - computed: true, optional: true, required: false
  private _permitAgentForwarding?: string; 
  public get permitAgentForwarding() {
    return this.getStringAttribute('permit_agent_forwarding');
  }
  public set permitAgentForwarding(value: string) {
    this._permitAgentForwarding = value;
  }
  public resetPermitAgentForwarding() {
    this._permitAgentForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAgentForwardingInput() {
    return this._permitAgentForwarding;
  }

  // permit_port_forwarding - computed: true, optional: true, required: false
  private _permitPortForwarding?: string; 
  public get permitPortForwarding() {
    return this.getStringAttribute('permit_port_forwarding');
  }
  public set permitPortForwarding(value: string) {
    this._permitPortForwarding = value;
  }
  public resetPermitPortForwarding() {
    this._permitPortForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPortForwardingInput() {
    return this._permitPortForwarding;
  }

  // permit_pty - computed: true, optional: true, required: false
  private _permitPty?: string; 
  public get permitPty() {
    return this.getStringAttribute('permit_pty');
  }
  public set permitPty(value: string) {
    this._permitPty = value;
  }
  public resetPermitPty() {
    this._permitPty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPtyInput() {
    return this._permitPty;
  }

  // permit_user_rc - computed: true, optional: true, required: false
  private _permitUserRc?: string; 
  public get permitUserRc() {
    return this.getStringAttribute('permit_user_rc');
  }
  public set permitUserRc(value: string) {
    this._permitUserRc = value;
  }
  public resetPermitUserRc() {
    this._permitUserRc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitUserRcInput() {
    return this._permitUserRc;
  }

  // permit_x11_forwarding - computed: true, optional: true, required: false
  private _permitX11Forwarding?: string; 
  public get permitX11Forwarding() {
    return this.getStringAttribute('permit_x11_forwarding');
  }
  public set permitX11Forwarding(value: string) {
    this._permitX11Forwarding = value;
  }
  public resetPermitX11Forwarding() {
    this._permitX11Forwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitX11ForwardingInput() {
    return this._permitX11Forwarding;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // vdomparam - computed: true, optional: true, required: false
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

  // cert_extension - computed: false, optional: true, required: false
  private _certExtension = new FirewallAccessproxysshclientcertCertExtensionList(this, "cert_extension", false);
  public get certExtension() {
    return this._certExtension;
  }
  public putCertExtension(value: FirewallAccessproxysshclientcertCertExtension[] | cdktf.IResolvable) {
    this._certExtension.internalValue = value;
  }
  public resetCertExtension() {
    this._certExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExtensionInput() {
    return this._certExtension.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_ca: cdktf.stringToTerraform(this._authCa),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permit_agent_forwarding: cdktf.stringToTerraform(this._permitAgentForwarding),
      permit_port_forwarding: cdktf.stringToTerraform(this._permitPortForwarding),
      permit_pty: cdktf.stringToTerraform(this._permitPty),
      permit_user_rc: cdktf.stringToTerraform(this._permitUserRc),
      permit_x11_forwarding: cdktf.stringToTerraform(this._permitX11Forwarding),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cert_extension: cdktf.listMapper(firewallAccessproxysshclientcertCertExtensionToTerraform, true)(this._certExtension.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_ca: {
        value: cdktf.stringToHclTerraform(this._authCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_agent_forwarding: {
        value: cdktf.stringToHclTerraform(this._permitAgentForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_port_forwarding: {
        value: cdktf.stringToHclTerraform(this._permitPortForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_pty: {
        value: cdktf.stringToHclTerraform(this._permitPty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_user_rc: {
        value: cdktf.stringToHclTerraform(this._permitUserRc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_x11_forwarding: {
        value: cdktf.stringToHclTerraform(this._permitX11Forwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
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
      cert_extension: {
        value: cdktf.listMapperHcl(firewallAccessproxysshclientcertCertExtensionToHclTerraform, true)(this._certExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallAccessproxysshclientcertCertExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
