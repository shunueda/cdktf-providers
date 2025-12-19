// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNatIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#dry_run VpcNatIp#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#id VpcNatIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_gateway_id VpcNatIp#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_ip VpcNatIp#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_ip_cidr VpcNatIp#nat_ip_cidr}
  */
  readonly natIpCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_ip_cidr_id VpcNatIp#nat_ip_cidr_id}
  */
  readonly natIpCidrId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_ip_description VpcNatIp#nat_ip_description}
  */
  readonly natIpDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#nat_ip_name VpcNatIp#nat_ip_name}
  */
  readonly natIpName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#timeouts VpcNatIp#timeouts}
  */
  readonly timeouts?: VpcNatIpTimeouts;
}
export interface VpcNatIpTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#create VpcNatIp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#delete VpcNatIp#delete}
  */
  readonly delete?: string;
}

export function vpcNatIpTimeoutsToTerraform(struct?: VpcNatIpTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpcNatIpTimeoutsToHclTerraform(struct?: VpcNatIpTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcNatIpTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcNatIpTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNatIpTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip alicloud_vpc_nat_ip}
*/
export class VpcNatIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_nat_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcNatIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcNatIp to import
  * @param importFromId The id of the existing VpcNatIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcNatIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_nat_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_nat_ip alicloud_vpc_nat_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNatIpConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNatIpConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_nat_ip',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._natGatewayId = config.natGatewayId;
    this._natIp = config.natIp;
    this._natIpCidr = config.natIpCidr;
    this._natIpCidrId = config.natIpCidrId;
    this._natIpDescription = config.natIpDescription;
    this._natIpName = config.natIpName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: true, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // nat_ip - computed: true, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // nat_ip_cidr - computed: false, optional: true, required: false
  private _natIpCidr?: string; 
  public get natIpCidr() {
    return this.getStringAttribute('nat_ip_cidr');
  }
  public set natIpCidr(value: string) {
    this._natIpCidr = value;
  }
  public resetNatIpCidr() {
    this._natIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrInput() {
    return this._natIpCidr;
  }

  // nat_ip_cidr_id - computed: false, optional: true, required: false
  private _natIpCidrId?: string; 
  public get natIpCidrId() {
    return this.getStringAttribute('nat_ip_cidr_id');
  }
  public set natIpCidrId(value: string) {
    this._natIpCidrId = value;
  }
  public resetNatIpCidrId() {
    this._natIpCidrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrIdInput() {
    return this._natIpCidrId;
  }

  // nat_ip_description - computed: false, optional: true, required: false
  private _natIpDescription?: string; 
  public get natIpDescription() {
    return this.getStringAttribute('nat_ip_description');
  }
  public set natIpDescription(value: string) {
    this._natIpDescription = value;
  }
  public resetNatIpDescription() {
    this._natIpDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpDescriptionInput() {
    return this._natIpDescription;
  }

  // nat_ip_id - computed: true, optional: false, required: false
  public get natIpId() {
    return this.getStringAttribute('nat_ip_id');
  }

  // nat_ip_name - computed: false, optional: true, required: false
  private _natIpName?: string; 
  public get natIpName() {
    return this.getStringAttribute('nat_ip_name');
  }
  public set natIpName(value: string) {
    this._natIpName = value;
  }
  public resetNatIpName() {
    this._natIpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpNameInput() {
    return this._natIpName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcNatIpTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcNatIpTimeouts) {
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      nat_ip: cdktf.stringToTerraform(this._natIp),
      nat_ip_cidr: cdktf.stringToTerraform(this._natIpCidr),
      nat_ip_cidr_id: cdktf.stringToTerraform(this._natIpCidrId),
      nat_ip_description: cdktf.stringToTerraform(this._natIpDescription),
      nat_ip_name: cdktf.stringToTerraform(this._natIpName),
      timeouts: vpcNatIpTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip: {
        value: cdktf.stringToHclTerraform(this._natIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._natIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_cidr_id: {
        value: cdktf.stringToHclTerraform(this._natIpCidrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_description: {
        value: cdktf.stringToHclTerraform(this._natIpDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_name: {
        value: cdktf.stringToHclTerraform(this._natIpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcNatIpTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcNatIpTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
