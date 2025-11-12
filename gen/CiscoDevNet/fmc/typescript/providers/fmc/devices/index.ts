// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * CDO-Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#cdo_host Devices#cdo_host}
  */
  readonly cdoHost?: string;
  /**
  * CDO-Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#cdo_region Devices#cdo_region}
  */
  readonly cdoRegion?: string;
  /**
  * The hostname of FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#hostname Devices#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#id Devices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * License caps for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#license_caps Devices#license_caps}
  */
  readonly licenseCaps?: string[];
  /**
  * The name of FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#name Devices#name}
  */
  readonly name?: string;
  /**
  * NAT_ID is required, if configured in FTD 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#nat_id Devices#nat_id}
  */
  readonly natId?: string;
  /**
  * Select the desired performace tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#performance_tier Devices#performance_tier}
  */
  readonly performanceTier?: string;
  /**
  * Same regkey as entered in FTD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#regkey Devices#regkey}
  */
  readonly regkey: string;
  /**
  * access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#access_policy Devices#access_policy}
  */
  readonly accessPolicy: DevicesAccessPolicy;
}
export interface DevicesAccessPolicy {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#id Devices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#type Devices#type}
  */
  readonly type?: string;
}

export function devicesAccessPolicyToTerraform(struct?: DevicesAccessPolicyOutputReference | DevicesAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function devicesAccessPolicyToHclTerraform(struct?: DevicesAccessPolicyOutputReference | DevicesAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DevicesAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevicesAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices fmc_devices}
*/
export class Devices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Devices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Devices to import
  * @param importFromId The id of the existing Devices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Devices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/devices fmc_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicesConfig
  */
  public constructor(scope: Construct, id: string, config: DevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_devices',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdoHost = config.cdoHost;
    this._cdoRegion = config.cdoRegion;
    this._hostname = config.hostname;
    this._id = config.id;
    this._licenseCaps = config.licenseCaps;
    this._name = config.name;
    this._natId = config.natId;
    this._performanceTier = config.performanceTier;
    this._regkey = config.regkey;
    this._accessPolicy.internalValue = config.accessPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdo_host - computed: false, optional: true, required: false
  private _cdoHost?: string; 
  public get cdoHost() {
    return this.getStringAttribute('cdo_host');
  }
  public set cdoHost(value: string) {
    this._cdoHost = value;
  }
  public resetCdoHost() {
    this._cdoHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdoHostInput() {
    return this._cdoHost;
  }

  // cdo_region - computed: false, optional: true, required: false
  private _cdoRegion?: string; 
  public get cdoRegion() {
    return this.getStringAttribute('cdo_region');
  }
  public set cdoRegion(value: string) {
    this._cdoRegion = value;
  }
  public resetCdoRegion() {
    this._cdoRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdoRegionInput() {
    return this._cdoRegion;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // license_caps - computed: false, optional: true, required: false
  private _licenseCaps?: string[]; 
  public get licenseCaps() {
    return this.getListAttribute('license_caps');
  }
  public set licenseCaps(value: string[]) {
    this._licenseCaps = value;
  }
  public resetLicenseCaps() {
    this._licenseCaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCapsInput() {
    return this._licenseCaps;
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

  // nat_id - computed: false, optional: true, required: false
  private _natId?: string; 
  public get natId() {
    return this.getStringAttribute('nat_id');
  }
  public set natId(value: string) {
    this._natId = value;
  }
  public resetNatId() {
    this._natId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIdInput() {
    return this._natId;
  }

  // performance_tier - computed: false, optional: true, required: false
  private _performanceTier?: string; 
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }
  public set performanceTier(value: string) {
    this._performanceTier = value;
  }
  public resetPerformanceTier() {
    this._performanceTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTierInput() {
    return this._performanceTier;
  }

  // regkey - computed: false, optional: false, required: true
  private _regkey?: string; 
  public get regkey() {
    return this.getStringAttribute('regkey');
  }
  public set regkey(value: string) {
    this._regkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regkeyInput() {
    return this._regkey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy = new DevicesAccessPolicyOutputReference(this, "access_policy");
  public get accessPolicy() {
    return this._accessPolicy;
  }
  public putAccessPolicy(value: DevicesAccessPolicy) {
    this._accessPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdo_host: cdktf.stringToTerraform(this._cdoHost),
      cdo_region: cdktf.stringToTerraform(this._cdoRegion),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      license_caps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseCaps),
      name: cdktf.stringToTerraform(this._name),
      nat_id: cdktf.stringToTerraform(this._natId),
      performance_tier: cdktf.stringToTerraform(this._performanceTier),
      regkey: cdktf.stringToTerraform(this._regkey),
      access_policy: devicesAccessPolicyToTerraform(this._accessPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdo_host: {
        value: cdktf.stringToHclTerraform(this._cdoHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdo_region: {
        value: cdktf.stringToHclTerraform(this._cdoRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      license_caps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseCaps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_id: {
        value: cdktf.stringToHclTerraform(this._natId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_tier: {
        value: cdktf.stringToHclTerraform(this._performanceTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regkey: {
        value: cdktf.stringToHclTerraform(this._regkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_policy: {
        value: devicesAccessPolicyToHclTerraform(this._accessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevicesAccessPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
