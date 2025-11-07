// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosEthernetInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aggregate interface group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#aggregate_group DataPanosEthernetInterface#aggregate_group}
  */
  readonly aggregateGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#comment DataPanosEthernetInterface#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#decrypt_mirror DataPanosEthernetInterface#decrypt_mirror}
  */
  readonly decryptMirror?: DataPanosEthernetInterfaceDecryptMirror;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ha DataPanosEthernetInterface#ha}
  */
  readonly ha?: DataPanosEthernetInterfaceHa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lacp DataPanosEthernetInterface#lacp}
  */
  readonly lacp?: DataPanosEthernetInterfaceLacp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#layer2 DataPanosEthernetInterface#layer2}
  */
  readonly layer2?: DataPanosEthernetInterfaceLayer2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#layer3 DataPanosEthernetInterface#layer3}
  */
  readonly layer3?: DataPanosEthernetInterfaceLayer3;
  /**
  * Interface link duplex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#link_duplex DataPanosEthernetInterface#link_duplex}
  */
  readonly linkDuplex?: string;
  /**
  * Interface link speed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#link_speed DataPanosEthernetInterface#link_speed}
  */
  readonly linkSpeed?: string;
  /**
  * Interface link state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#link_state DataPanosEthernetInterface#link_state}
  */
  readonly linkState?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#location DataPanosEthernetInterface#location}
  */
  readonly location: DataPanosEthernetInterfaceLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#log_card DataPanosEthernetInterface#log_card}
  */
  readonly logCard?: DataPanosEthernetInterfaceLogCard;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#poe DataPanosEthernetInterface#poe}
  */
  readonly poe?: DataPanosEthernetInterfacePoe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#tap DataPanosEthernetInterface#tap}
  */
  readonly tap?: DataPanosEthernetInterfaceTap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#virtual_wire DataPanosEthernetInterface#virtual_wire}
  */
  readonly virtualWire?: DataPanosEthernetInterfaceVirtualWire;
}
export interface DataPanosEthernetInterfaceDecryptMirror {
}

export function dataPanosEthernetInterfaceDecryptMirrorToTerraform(struct?: DataPanosEthernetInterfaceDecryptMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceDecryptMirrorToHclTerraform(struct?: DataPanosEthernetInterfaceDecryptMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceDecryptMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceDecryptMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceDecryptMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceHa {
}

export function dataPanosEthernetInterfaceHaToTerraform(struct?: DataPanosEthernetInterfaceHa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceHaToHclTerraform(struct?: DataPanosEthernetInterfaceHa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceHaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceHa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceHa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLacp {
  /**
  * port priority in LACP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#port_priority DataPanosEthernetInterface#port_priority}
  */
  readonly portPriority?: number;
}

export function dataPanosEthernetInterfaceLacpToTerraform(struct?: DataPanosEthernetInterfaceLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_priority: cdktf.numberToTerraform(struct!.portPriority),
  }
}


export function dataPanosEthernetInterfaceLacpToHclTerraform(struct?: DataPanosEthernetInterfaceLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_priority: {
      value: cdktf.numberToHclTerraform(struct!.portPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLacp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPriority = this._portPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLacp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portPriority = value.portPriority;
    }
  }

  // port_priority - computed: true, optional: true, required: false
  private _portPriority?: number; 
  public get portPriority() {
    return this.getNumberAttribute('port_priority');
  }
  public set portPriority(value: number) {
    this._portPriority = value;
  }
  public resetPortPriority() {
    this._portPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPriorityInput() {
    return this._portPriority;
  }
}
export interface DataPanosEthernetInterfaceLayer2LldpHighAvailability {
  /**
  * Enable LLDP pre-negotiation in HA passive state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#passive_pre_negotiation DataPanosEthernetInterface#passive_pre_negotiation}
  */
  readonly passivePreNegotiation?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer2LldpHighAvailabilityToTerraform(struct?: DataPanosEthernetInterfaceLayer2LldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passive_pre_negotiation: cdktf.booleanToTerraform(struct!.passivePreNegotiation),
  }
}


export function dataPanosEthernetInterfaceLayer2LldpHighAvailabilityToHclTerraform(struct?: DataPanosEthernetInterfaceLayer2LldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passive_pre_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.passivePreNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer2LldpHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer2LldpHighAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passivePreNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.passivePreNegotiation = this._passivePreNegotiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer2LldpHighAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = value.passivePreNegotiation;
    }
  }

  // passive_pre_negotiation - computed: true, optional: true, required: false
  private _passivePreNegotiation?: boolean | cdktf.IResolvable; 
  public get passivePreNegotiation() {
    return this.getBooleanAttribute('passive_pre_negotiation');
  }
  public set passivePreNegotiation(value: boolean | cdktf.IResolvable) {
    this._passivePreNegotiation = value;
  }
  public resetPassivePreNegotiation() {
    this._passivePreNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passivePreNegotiationInput() {
    return this._passivePreNegotiation;
  }
}
export interface DataPanosEthernetInterfaceLayer2Lldp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#high_availability DataPanosEthernetInterface#high_availability}
  */
  readonly highAvailability?: DataPanosEthernetInterfaceLayer2LldpHighAvailability;
  /**
  * LLDP profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#profile DataPanosEthernetInterface#profile}
  */
  readonly profile?: string;
}

export function dataPanosEthernetInterfaceLayer2LldpToTerraform(struct?: DataPanosEthernetInterfaceLayer2Lldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    high_availability: dataPanosEthernetInterfaceLayer2LldpHighAvailabilityToTerraform(struct!.highAvailability),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosEthernetInterfaceLayer2LldpToHclTerraform(struct?: DataPanosEthernetInterfaceLayer2Lldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_availability: {
      value: dataPanosEthernetInterfaceLayer2LldpHighAvailabilityToHclTerraform(struct!.highAvailability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer2LldpHighAvailability",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer2LldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer2Lldp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._highAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer2Lldp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._highAvailability.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._highAvailability.internalValue = value.highAvailability;
      this._profile = value.profile;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // high_availability - computed: true, optional: true, required: false
  private _highAvailability = new DataPanosEthernetInterfaceLayer2LldpHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: DataPanosEthernetInterfaceLayer2LldpHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DataPanosEthernetInterfaceLayer2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lldp DataPanosEthernetInterface#lldp}
  */
  readonly lldp?: DataPanosEthernetInterfaceLayer2Lldp;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#netflow_profile DataPanosEthernetInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
}

export function dataPanosEthernetInterfaceLayer2ToTerraform(struct?: DataPanosEthernetInterfaceLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lldp: dataPanosEthernetInterfaceLayer2LldpToTerraform(struct!.lldp),
    netflow_profile: cdktf.stringToTerraform(struct!.netflowProfile),
  }
}


export function dataPanosEthernetInterfaceLayer2ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lldp: {
      value: dataPanosEthernetInterfaceLayer2LldpToHclTerraform(struct!.lldp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer2Lldp",
    },
    netflow_profile: {
      value: cdktf.stringToHclTerraform(struct!.netflowProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lldp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp?.internalValue;
    }
    if (this._netflowProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowProfile = this._netflowProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lldp.internalValue = undefined;
      this._netflowProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lldp.internalValue = value.lldp;
      this._netflowProfile = value.netflowProfile;
    }
  }

  // lldp - computed: true, optional: true, required: false
  private _lldp = new DataPanosEthernetInterfaceLayer2LldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }
  public putLldp(value: DataPanosEthernetInterfaceLayer2Lldp) {
    this._lldp.internalValue = value;
  }
  public resetLldp() {
    this._lldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp.internalValue;
  }

  // netflow_profile - computed: true, optional: true, required: false
  private _netflowProfile?: string; 
  public get netflowProfile() {
    return this.getStringAttribute('netflow_profile');
  }
  public set netflowProfile(value: string) {
    this._netflowProfile = value;
  }
  public resetNetflowProfile() {
    this._netflowProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowProfileInput() {
    return this._netflowProfile;
  }
}
export interface DataPanosEthernetInterfaceLayer3AdjustTcpMss {
  /**
  * Set if TCP MSS value should be reduced based on mtu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * IPv4 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ipv4_mss_adjustment DataPanosEthernetInterface#ipv4_mss_adjustment}
  */
  readonly ipv4MssAdjustment?: number;
  /**
  * IPv6 MSS adjustment size (in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ipv6_mss_adjustment DataPanosEthernetInterface#ipv6_mss_adjustment}
  */
  readonly ipv6MssAdjustment?: number;
}

export function dataPanosEthernetInterfaceLayer3AdjustTcpMssToTerraform(struct?: DataPanosEthernetInterfaceLayer3AdjustTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ipv4_mss_adjustment: cdktf.numberToTerraform(struct!.ipv4MssAdjustment),
    ipv6_mss_adjustment: cdktf.numberToTerraform(struct!.ipv6MssAdjustment),
  }
}


export function dataPanosEthernetInterfaceLayer3AdjustTcpMssToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3AdjustTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.ipv4MssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.ipv6MssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3AdjustTcpMssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3AdjustTcpMss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ipv4MssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MssAdjustment = this._ipv4MssAdjustment;
    }
    if (this._ipv6MssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MssAdjustment = this._ipv6MssAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3AdjustTcpMss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ipv4MssAdjustment = undefined;
      this._ipv6MssAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ipv4MssAdjustment = value.ipv4MssAdjustment;
      this._ipv6MssAdjustment = value.ipv6MssAdjustment;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ipv4_mss_adjustment - computed: true, optional: true, required: false
  private _ipv4MssAdjustment?: number; 
  public get ipv4MssAdjustment() {
    return this.getNumberAttribute('ipv4_mss_adjustment');
  }
  public set ipv4MssAdjustment(value: number) {
    this._ipv4MssAdjustment = value;
  }
  public resetIpv4MssAdjustment() {
    this._ipv4MssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MssAdjustmentInput() {
    return this._ipv4MssAdjustment;
  }

  // ipv6_mss_adjustment - computed: true, optional: true, required: false
  private _ipv6MssAdjustment?: number; 
  public get ipv6MssAdjustment() {
    return this.getNumberAttribute('ipv6_mss_adjustment');
  }
  public set ipv6MssAdjustment(value: number) {
    this._ipv6MssAdjustment = value;
  }
  public resetIpv6MssAdjustment() {
    this._ipv6MssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MssAdjustmentInput() {
    return this._ipv6MssAdjustment;
  }
}
export interface DataPanosEthernetInterfaceLayer3Arp {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hw_address DataPanosEthernetInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3ArpToTerraform(struct?: DataPanosEthernetInterfaceLayer3Arp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3ArpToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Arp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3ArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Arp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Arp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: true, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3ArpList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Arp[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3ArpOutputReference {
    return new DataPanosEthernetInterfaceLayer3ArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Bonjour {
  /**
  * Set to support Bonjour service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * default 0: NO-Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#group_id DataPanosEthernetInterface#group_id}
  */
  readonly groupId?: number;
  /**
  * Set to check and update TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ttl_check DataPanosEthernetInterface#ttl_check}
  */
  readonly ttlCheck?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3BonjourToTerraform(struct?: DataPanosEthernetInterfaceLayer3Bonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    ttl_check: cdktf.booleanToTerraform(struct!.ttlCheck),
  }
}


export function dataPanosEthernetInterfaceLayer3BonjourToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Bonjour | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_check: {
      value: cdktf.booleanToHclTerraform(struct!.ttlCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3BonjourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Bonjour | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._ttlCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlCheck = this._ttlCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Bonjour | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._groupId = undefined;
      this._ttlCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._groupId = value.groupId;
      this._ttlCheck = value.ttlCheck;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // ttl_check - computed: true, optional: true, required: false
  private _ttlCheck?: boolean | cdktf.IResolvable; 
  public get ttlCheck() {
    return this.getBooleanAttribute('ttl_check');
  }
  public set ttlCheck(value: boolean | cdktf.IResolvable) {
    this._ttlCheck = value;
  }
  public resetTtlCheck() {
    this._ttlCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlCheckInput() {
    return this._ttlCheck;
  }
}
export interface DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#value DataPanosEthernetInterface#value}
  */
  readonly value?: string;
}

export function dataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigToTerraform(struct?: DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigOutputReference {
    return new DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3DdnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_cert_profile DataPanosEthernetInterface#ddns_cert_profile}
  */
  readonly ddnsCertProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_enabled DataPanosEthernetInterface#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * ddns hostname variable or real address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_hostname DataPanosEthernetInterface#ddns_hostname}
  */
  readonly ddnsHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_ip DataPanosEthernetInterface#ddns_ip}
  */
  readonly ddnsIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_ipv6 DataPanosEthernetInterface#ddns_ipv6}
  */
  readonly ddnsIpv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_update_interval DataPanosEthernetInterface#ddns_update_interval}
  */
  readonly ddnsUpdateInterval?: number;
  /**
  * Vendor and product type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_vendor DataPanosEthernetInterface#ddns_vendor}
  */
  readonly ddnsVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_vendor_config DataPanosEthernetInterface#ddns_vendor_config}
  */
  readonly ddnsVendorConfig?: DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3DdnsConfigToTerraform(struct?: DataPanosEthernetInterfaceLayer3DdnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns_cert_profile: cdktf.stringToTerraform(struct!.ddnsCertProfile),
    ddns_enabled: cdktf.booleanToTerraform(struct!.ddnsEnabled),
    ddns_hostname: cdktf.stringToTerraform(struct!.ddnsHostname),
    ddns_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsIp),
    ddns_ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsIpv6),
    ddns_update_interval: cdktf.numberToTerraform(struct!.ddnsUpdateInterval),
    ddns_vendor: cdktf.stringToTerraform(struct!.ddnsVendor),
    ddns_vendor_config: cdktf.listMapper(dataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigToTerraform, false)(struct!.ddnsVendorConfig),
  }
}


export function dataPanosEthernetInterfaceLayer3DdnsConfigToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3DdnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns_cert_profile: {
      value: cdktf.stringToHclTerraform(struct!.ddnsCertProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_hostname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsIpv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_update_interval: {
      value: cdktf.numberToHclTerraform(struct!.ddnsUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_vendor: {
      value: cdktf.stringToHclTerraform(struct!.ddnsVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_vendor_config: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigToHclTerraform, false)(struct!.ddnsVendorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3DdnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3DdnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddnsCertProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsCertProfile = this._ddnsCertProfile;
    }
    if (this._ddnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnabled = this._ddnsEnabled;
    }
    if (this._ddnsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostname = this._ddnsHostname;
    }
    if (this._ddnsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsIp = this._ddnsIp;
    }
    if (this._ddnsIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsIpv6 = this._ddnsIpv6;
    }
    if (this._ddnsUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateInterval = this._ddnsUpdateInterval;
    }
    if (this._ddnsVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendor = this._ddnsVendor;
    }
    if (this._ddnsVendorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsVendorConfig = this._ddnsVendorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3DdnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddnsCertProfile = undefined;
      this._ddnsEnabled = undefined;
      this._ddnsHostname = undefined;
      this._ddnsIp = undefined;
      this._ddnsIpv6 = undefined;
      this._ddnsUpdateInterval = undefined;
      this._ddnsVendor = undefined;
      this._ddnsVendorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddnsCertProfile = value.ddnsCertProfile;
      this._ddnsEnabled = value.ddnsEnabled;
      this._ddnsHostname = value.ddnsHostname;
      this._ddnsIp = value.ddnsIp;
      this._ddnsIpv6 = value.ddnsIpv6;
      this._ddnsUpdateInterval = value.ddnsUpdateInterval;
      this._ddnsVendor = value.ddnsVendor;
      this._ddnsVendorConfig.internalValue = value.ddnsVendorConfig;
    }
  }

  // ddns_cert_profile - computed: true, optional: true, required: false
  private _ddnsCertProfile?: string; 
  public get ddnsCertProfile() {
    return this.getStringAttribute('ddns_cert_profile');
  }
  public set ddnsCertProfile(value: string) {
    this._ddnsCertProfile = value;
  }
  public resetDdnsCertProfile() {
    this._ddnsCertProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsCertProfileInput() {
    return this._ddnsCertProfile;
  }

  // ddns_enabled - computed: true, optional: true, required: false
  private _ddnsEnabled?: boolean | cdktf.IResolvable; 
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }
  public set ddnsEnabled(value: boolean | cdktf.IResolvable) {
    this._ddnsEnabled = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled;
  }

  // ddns_hostname - computed: true, optional: true, required: false
  private _ddnsHostname?: string; 
  public get ddnsHostname() {
    return this.getStringAttribute('ddns_hostname');
  }
  public set ddnsHostname(value: string) {
    this._ddnsHostname = value;
  }
  public resetDdnsHostname() {
    this._ddnsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameInput() {
    return this._ddnsHostname;
  }

  // ddns_ip - computed: true, optional: true, required: false
  private _ddnsIp?: string[]; 
  public get ddnsIp() {
    return this.getListAttribute('ddns_ip');
  }
  public set ddnsIp(value: string[]) {
    this._ddnsIp = value;
  }
  public resetDdnsIp() {
    this._ddnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsIpInput() {
    return this._ddnsIp;
  }

  // ddns_ipv6 - computed: true, optional: true, required: false
  private _ddnsIpv6?: string[]; 
  public get ddnsIpv6() {
    return this.getListAttribute('ddns_ipv6');
  }
  public set ddnsIpv6(value: string[]) {
    this._ddnsIpv6 = value;
  }
  public resetDdnsIpv6() {
    this._ddnsIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsIpv6Input() {
    return this._ddnsIpv6;
  }

  // ddns_update_interval - computed: true, optional: true, required: false
  private _ddnsUpdateInterval?: number; 
  public get ddnsUpdateInterval() {
    return this.getNumberAttribute('ddns_update_interval');
  }
  public set ddnsUpdateInterval(value: number) {
    this._ddnsUpdateInterval = value;
  }
  public resetDdnsUpdateInterval() {
    this._ddnsUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateIntervalInput() {
    return this._ddnsUpdateInterval;
  }

  // ddns_vendor - computed: true, optional: true, required: false
  private _ddnsVendor?: string; 
  public get ddnsVendor() {
    return this.getStringAttribute('ddns_vendor');
  }
  public set ddnsVendor(value: string) {
    this._ddnsVendor = value;
  }
  public resetDdnsVendor() {
    this._ddnsVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorInput() {
    return this._ddnsVendor;
  }

  // ddns_vendor_config - computed: true, optional: true, required: false
  private _ddnsVendorConfig = new DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfigList(this, "ddns_vendor_config", false);
  public get ddnsVendorConfig() {
    return this._ddnsVendorConfig;
  }
  public putDdnsVendorConfig(value: DataPanosEthernetInterfaceLayer3DdnsConfigDdnsVendorConfig[] | cdktf.IResolvable) {
    this._ddnsVendorConfig.internalValue = value;
  }
  public resetDdnsVendorConfig() {
    this._ddnsVendorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsVendorConfigInput() {
    return this._ddnsVendorConfig.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3DhcpClientSendHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set Interface Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hostname DataPanosEthernetInterface#hostname}
  */
  readonly hostname?: string;
}

export function dataPanosEthernetInterfaceLayer3DhcpClientSendHostnameToTerraform(struct?: DataPanosEthernetInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataPanosEthernetInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3DhcpClientSendHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._hostname = value.hostname;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface DataPanosEthernetInterfaceLayer3DhcpClient {
  /**
  * Automatically create default route pointing to default gateway provided by server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#create_default_route DataPanosEthernetInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#default_route_metric DataPanosEthernetInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#send_hostname DataPanosEthernetInterface#send_hostname}
  */
  readonly sendHostname?: DataPanosEthernetInterfaceLayer3DhcpClientSendHostname;
}

export function dataPanosEthernetInterfaceLayer3DhcpClientToTerraform(struct?: DataPanosEthernetInterfaceLayer3DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    send_hostname: dataPanosEthernetInterfaceLayer3DhcpClientSendHostnameToTerraform(struct!.sendHostname),
  }
}


export function dataPanosEthernetInterfaceLayer3DhcpClientToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.createDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_hostname: {
      value: dataPanosEthernetInterfaceLayer3DhcpClientSendHostnameToHclTerraform(struct!.sendHostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3DhcpClientSendHostname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3DhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultRoute = this._createDefaultRoute;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sendHostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHostname = this._sendHostname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3DhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDefaultRoute = undefined;
      this._defaultRouteMetric = undefined;
      this._enable = undefined;
      this._sendHostname.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDefaultRoute = value.createDefaultRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._enable = value.enable;
      this._sendHostname.internalValue = value.sendHostname;
    }
  }

  // create_default_route - computed: true, optional: true, required: false
  private _createDefaultRoute?: boolean | cdktf.IResolvable; 
  public get createDefaultRoute() {
    return this.getBooleanAttribute('create_default_route');
  }
  public set createDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._createDefaultRoute = value;
  }
  public resetCreateDefaultRoute() {
    this._createDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultRouteInput() {
    return this._createDefaultRoute;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // send_hostname - computed: true, optional: true, required: false
  private _sendHostname = new DataPanosEthernetInterfaceLayer3DhcpClientSendHostnameOutputReference(this, "send_hostname");
  public get sendHostname() {
    return this._sendHostname;
  }
  public putSendHostname(value: DataPanosEthernetInterfaceLayer3DhcpClientSendHostname) {
    this._sendHostname.internalValue = value;
  }
  public resetSendHostname() {
    this._sendHostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHostnameInput() {
    return this._sendHostname.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ips {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * Gateway IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#sdwan_gateway DataPanosEthernetInterface#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
}

export function dataPanosEthernetInterfaceLayer3IpsToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
  }
}


export function dataPanosEthernetInterfaceLayer3IpsToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ips | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3IpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ips | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ips | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sdwanGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sdwanGateway = value.sdwanGateway;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // sdwan_gateway - computed: true, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }
}

export class DataPanosEthernetInterfaceLayer3IpsList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ips[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3IpsOutputReference {
    return new DataPanosEthernetInterfaceLayer3IpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#auto_config_flag DataPanosEthernetInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#onlink_flag DataPanosEthernetInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#preferred_lifetime DataPanosEthernetInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#valid_lifetime DataPanosEthernetInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
    preferred_lifetime: cdktf.stringToTerraform(struct!.preferredLifetime),
    valid_lifetime: cdktf.stringToTerraform(struct!.validLifetime),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifetime = value.preferredLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // auto_config_flag - computed: true, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: true, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: string; 
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: string) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: string; 
  public get validLifetime() {
    return this.getStringAttribute('valid_lifetime');
  }
  public set validLifetime(value: string) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast {
}

export function dataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix {
}

export function dataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#advertise DataPanosEthernetInterface#advertise}
  */
  readonly advertise?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#anycast DataPanosEthernetInterface#anycast}
  */
  readonly anycast?: DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast;
  /**
  * configure this address on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_on_interface DataPanosEthernetInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix DataPanosEthernetInterface#prefix}
  */
  readonly prefix?: DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix;
}

export function dataPanosEthernetInterfaceLayer3Ipv6AddressesToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseToTerraform(struct!.advertise),
    anycast: dataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: dataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixToTerraform(struct!.prefix),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6AddressesToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise",
    },
    anycast: {
      value: dataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastToHclTerraform(struct!.anycast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: dataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._anycast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycast = this._anycast?.internalValue;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._anycast.internalValue = undefined;
      this._enableOnInterface = undefined;
      this._name = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._anycast.internalValue = value.anycast;
      this._enableOnInterface = value.enableOnInterface;
      this._name = value.name;
      this._prefix.internalValue = value.prefix;
    }
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: true, optional: true, required: false
  private _anycast = new DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycastOutputReference(this, "anycast");
  public get anycast() {
    return this._anycast;
  }
  public putAnycast(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesAnycast) {
    this._anycast.internalValue = value;
  }
  public resetAnycast() {
    this._anycast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast.internalValue;
  }

  // enable_on_interface - computed: true, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
  }

  // name - computed: true, optional: false, required: true
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

  // prefix - computed: true, optional: true, required: false
  private _prefix = new DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: DataPanosEthernetInterfaceLayer3Ipv6AddressesPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class DataPanosEthernetInterfaceLayer3Ipv6AddressesList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6AddressesOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 {
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#server DataPanosEthernetInterface#server}
  */
  readonly server?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server.internalValue = value.server;
    }
  }

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcpv6 DataPanosEthernetInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#manual DataPanosEthernetInterface#manual}
  */
  readonly manual?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#source DataPanosEthernetInterface#source}
  */
  readonly source?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 {
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#suffix DataPanosEthernetInterface#suffix}
  */
  readonly suffix?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix.internalValue = value.suffix;
    }
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcpv6 DataPanosEthernetInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#manual DataPanosEthernetInterface#manual}
  */
  readonly manual?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#source DataPanosEthernetInterface#source}
  */
  readonly source?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hw_address DataPanosEthernetInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: true, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dad_attempts DataPanosEthernetInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dns_server DataPanosEthernetInterface#dns_server}
  */
  readonly dnsServer?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dns_suffix DataPanosEthernetInterface#dns_suffix}
  */
  readonly dnsSuffix?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate ADdress Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_dad DataPanosEthernetInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_ndp_monitor DataPanosEthernetInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Static entries in neighbor cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor DataPanosEthernetInterface#neighbor}
  */
  readonly neighbor?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ns_interval DataPanosEthernetInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#reachable_time DataPanosEthernetInterface#reachable_time}
  */
  readonly reachableTime?: number;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_server: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    if (this._dnsSuffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix?.internalValue;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._dnsServer.internalValue = undefined;
      this._dnsSuffix.internalValue = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._dnsServer.internalValue = value.dnsServer;
      this._dnsSuffix.internalValue = value.dnsSuffix;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: true, optional: true, required: false
  private _dnsSuffix = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: true, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: true, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo {
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes {
  /**
  * Configure unique Prefix Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#pfx_pool_name DataPanosEthernetInterface#pfx_pool_name}
  */
  readonly pfxPoolName?: string;
  /**
  * Hint DHCP Prefix Length (bits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_len DataPanosEthernetInterface#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Send prefix length hint to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_len_hint DataPanosEthernetInterface#prefix_len_hint}
  */
  readonly prefixLenHint?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pfx_pool_name: cdktf.stringToTerraform(struct!.pfxPoolName),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    prefix_len_hint: cdktf.booleanToTerraform(struct!.prefixLenHint),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pfx_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.pfxPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_len_hint: {
      value: cdktf.booleanToHclTerraform(struct!.prefixLenHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pfxPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfxPoolName = this._pfxPoolName;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._prefixLenHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLenHint = this._prefixLenHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pfxPoolName = undefined;
      this._prefixLen = undefined;
      this._prefixLenHint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pfxPoolName = value.pfxPoolName;
      this._prefixLen = value.prefixLen;
      this._prefixLenHint = value.prefixLenHint;
    }
  }

  // pfx_pool_name - computed: true, optional: true, required: false
  private _pfxPoolName?: string; 
  public get pfxPoolName() {
    return this.getStringAttribute('pfx_pool_name');
  }
  public set pfxPoolName(value: string) {
    this._pfxPoolName = value;
  }
  public resetPfxPoolName() {
    this._pfxPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPoolNameInput() {
    return this._pfxPoolName;
  }

  // prefix_len - computed: true, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // prefix_len_hint - computed: true, optional: true, required: false
  private _prefixLenHint?: boolean | cdktf.IResolvable; 
  public get prefixLenHint() {
    return this.getBooleanAttribute('prefix_len_hint');
  }
  public set prefixLenHint(value: boolean | cdktf.IResolvable) {
    this._prefixLenHint = value;
  }
  public resetPrefixLenHint() {
    this._prefixLenHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenHintInput() {
    return this._prefixLenHint;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#no DataPanosEthernetInterface#no}
  */
  readonly no?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#yes DataPanosEthernetInterface#yes}
  */
  readonly yes?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoToTerraform(struct!.no),
    yes: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesToTerraform(struct!.yes),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo",
    },
    yes: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableToTerraform(struct!.enable),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable.internalValue = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo {
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes {
  /**
  * Request Non-Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#non_temp_addr DataPanosEthernetInterface#non_temp_addr}
  */
  readonly nonTempAddr?: boolean | cdktf.IResolvable;
  /**
  * Request Temporary Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#temp_addr DataPanosEthernetInterface#temp_addr}
  */
  readonly tempAddr?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_temp_addr: cdktf.booleanToTerraform(struct!.nonTempAddr),
    temp_addr: cdktf.booleanToTerraform(struct!.tempAddr),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_temp_addr: {
      value: cdktf.booleanToHclTerraform(struct!.nonTempAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    temp_addr: {
      value: cdktf.booleanToHclTerraform(struct!.tempAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonTempAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonTempAddr = this._nonTempAddr;
    }
    if (this._tempAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempAddr = this._tempAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonTempAddr = undefined;
      this._tempAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonTempAddr = value.nonTempAddr;
      this._tempAddr = value.tempAddr;
    }
  }

  // non_temp_addr - computed: true, optional: true, required: false
  private _nonTempAddr?: boolean | cdktf.IResolvable; 
  public get nonTempAddr() {
    return this.getBooleanAttribute('non_temp_addr');
  }
  public set nonTempAddr(value: boolean | cdktf.IResolvable) {
    this._nonTempAddr = value;
  }
  public resetNonTempAddr() {
    this._nonTempAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonTempAddrInput() {
    return this._nonTempAddr;
  }

  // temp_addr - computed: true, optional: true, required: false
  private _tempAddr?: boolean | cdktf.IResolvable; 
  public get tempAddr() {
    return this.getBooleanAttribute('temp_addr');
  }
  public set tempAddr(value: boolean | cdktf.IResolvable) {
    this._tempAddr = value;
  }
  public resetTempAddr() {
    this._tempAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempAddrInput() {
    return this._tempAddr;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#no DataPanosEthernetInterface#no}
  */
  readonly no?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#yes DataPanosEthernetInterface#yes}
  */
  readonly yes?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoToTerraform(struct!.no),
    yes: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesToTerraform(struct!.yes),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo",
    },
    yes: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options {
  /**
  * Select DUID-LLT/DUID-LL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#duid_type DataPanosEthernetInterface#duid_type}
  */
  readonly duidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable;
  /**
  * Enable Rapid Commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#rapid_commit DataPanosEthernetInterface#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCPv6 Server Re-Configuration Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#support_srvr_reconfig DataPanosEthernetInterface#support_srvr_reconfig}
  */
  readonly supportSrvrReconfig?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duid_type: cdktf.stringToTerraform(struct!.duidType),
    enable: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableToTerraform(struct!.enable),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    support_srvr_reconfig: cdktf.booleanToTerraform(struct!.supportSrvrReconfig),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duid_type: {
      value: cdktf.stringToHclTerraform(struct!.duidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableToHclTerraform(struct!.enable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable",
    },
    rapid_commit: {
      value: cdktf.booleanToHclTerraform(struct!.rapidCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    support_srvr_reconfig: {
      value: cdktf.booleanToHclTerraform(struct!.supportSrvrReconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.duidType = this._duidType;
    }
    if (this._enable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable?.internalValue;
    }
    if (this._rapidCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCommit = this._rapidCommit;
    }
    if (this._supportSrvrReconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportSrvrReconfig = this._supportSrvrReconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duidType = undefined;
      this._enable.internalValue = undefined;
      this._rapidCommit = undefined;
      this._supportSrvrReconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duidType = value.duidType;
      this._enable.internalValue = value.enable;
      this._rapidCommit = value.rapidCommit;
      this._supportSrvrReconfig = value.supportSrvrReconfig;
    }
  }

  // duid_type - computed: true, optional: true, required: false
  private _duidType?: string; 
  public get duidType() {
    return this.getStringAttribute('duid_type');
  }
  public set duidType(value: string) {
    this._duidType = value;
  }
  public resetDuidType() {
    this._duidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duidTypeInput() {
    return this._duidType;
  }

  // enable - computed: true, optional: true, required: false
  private _enable = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnableOutputReference(this, "enable");
  public get enable() {
    return this._enable;
  }
  public putEnable(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsEnable) {
    this._enable.internalValue = value;
  }
  public resetEnable() {
    this._enable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable.internalValue;
  }

  // rapid_commit - computed: true, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // support_srvr_reconfig - computed: true, optional: true, required: false
  private _supportSrvrReconfig?: boolean | cdktf.IResolvable; 
  public get supportSrvrReconfig() {
    return this.getBooleanAttribute('support_srvr_reconfig');
  }
  public set supportSrvrReconfig(value: boolean | cdktf.IResolvable) {
    this._supportSrvrReconfig = value;
  }
  public resetSupportSrvrReconfig() {
    this._supportSrvrReconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSrvrReconfigInput() {
    return this._supportSrvrReconfig;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6DhcpClient {
  /**
  * Accept Router Advertised Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#accept_ra_route DataPanosEthernetInterface#accept_ra_route}
  */
  readonly acceptRaRoute?: boolean | cdktf.IResolvable;
  /**
  * Metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#default_route_metric DataPanosEthernetInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Enable DHCPv6 Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor_discovery DataPanosEthernetInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery;
  /**
  * Select Low/Medium/High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#preference DataPanosEthernetInterface#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_delegation DataPanosEthernetInterface#prefix_delegation}
  */
  readonly prefixDelegation?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#v6_options DataPanosEthernetInterface#v6_options}
  */
  readonly v6Options?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options;
}

export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ra_route: cdktf.booleanToTerraform(struct!.acceptRaRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
    preference: cdktf.stringToTerraform(struct!.preference),
    prefix_delegation: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationToTerraform(struct!.prefixDelegation),
    v6_options: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsToTerraform(struct!.v6Options),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6DhcpClientToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_ra_route: {
      value: cdktf.booleanToHclTerraform(struct!.acceptRaRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_delegation: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationToHclTerraform(struct!.prefixDelegation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation",
    },
    v6_options: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsToHclTerraform(struct!.v6Options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6DhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6DhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptRaRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptRaRoute = this._acceptRaRoute;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._prefixDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelegation = this._prefixDelegation?.internalValue;
    }
    if (this._v6Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Options = this._v6Options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptRaRoute = undefined;
      this._defaultRouteMetric = undefined;
      this._enable = undefined;
      this._neighborDiscovery.internalValue = undefined;
      this._preference = undefined;
      this._prefixDelegation.internalValue = undefined;
      this._v6Options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptRaRoute = value.acceptRaRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._enable = value.enable;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
      this._preference = value.preference;
      this._prefixDelegation.internalValue = value.prefixDelegation;
      this._v6Options.internalValue = value.v6Options;
    }
  }

  // accept_ra_route - computed: true, optional: true, required: false
  private _acceptRaRoute?: boolean | cdktf.IResolvable; 
  public get acceptRaRoute() {
    return this.getBooleanAttribute('accept_ra_route');
  }
  public set acceptRaRoute(value: boolean | cdktf.IResolvable) {
    this._acceptRaRoute = value;
  }
  public resetAcceptRaRoute() {
    this._acceptRaRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRaRouteInput() {
    return this._acceptRaRoute;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientNeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_delegation - computed: true, optional: true, required: false
  private _prefixDelegation = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegationOutputReference(this, "prefix_delegation");
  public get prefixDelegation() {
    return this._prefixDelegation;
  }
  public putPrefixDelegation(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientPrefixDelegation) {
    this._prefixDelegation.internalValue = value;
  }
  public resetPrefixDelegation() {
    this._prefixDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelegationInput() {
    return this._prefixDelegation.internalValue;
  }

  // v6_options - computed: true, optional: true, required: false
  private _v6Options = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6OptionsOutputReference(this, "v6_options");
  public get v6Options() {
    return this._v6Options;
  }
  public putV6Options(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClientV6Options) {
    this._v6Options.internalValue = value;
  }
  public resetV6Options() {
    this._v6Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6OptionsInput() {
    return this._v6Options.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#auto_config_flag DataPanosEthernetInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * Enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#onlink_flag DataPanosEthernetInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
    }
  }

  // auto_config_flag - computed: true, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: true, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic {
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId {
  /**
  * Range [0-4095] must be unqiue for this prefix-pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#identifier DataPanosEthernetInterface#identifier}
  */
  readonly identifier?: number;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.numberToTerraform(struct!.identifier),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.numberToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
    }
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: number; 
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }
  public set identifier(value: number) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dynamic DataPanosEthernetInterface#dynamic}
  */
  readonly dynamic?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dynamic_id DataPanosEthernetInterface#dynamic_id}
  */
  readonly dynamicId?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicToTerraform(struct!.dynamic),
    dynamic_id: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToTerraform(struct!.dynamicId),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic",
    },
    dynamic_id: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdToHclTerraform(struct!.dynamicId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._dynamicId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicId = this._dynamicId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._dynamicId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._dynamicId.internalValue = value.dynamicId;
    }
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // dynamic_id - computed: true, optional: true, required: false
  private _dynamicId = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicIdOutputReference(this, "dynamic_id");
  public get dynamicId() {
    return this._dynamicId;
  }
  public putDynamicId(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeDynamicId) {
    this._dynamicId.internalValue = value;
  }
  public resetDynamicId() {
    this._dynamicId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIdInput() {
    return this._dynamicId.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#advertise DataPanosEthernetInterface#advertise}
  */
  readonly advertise?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise;
  /**
  * Enable on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_on_interface DataPanosEthernetInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#pool_type DataPanosEthernetInterface#pool_type}
  */
  readonly poolType?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType;
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_pool DataPanosEthernetInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseToTerraform(struct!.advertise),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    pool_type: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeToTerraform(struct!.poolType),
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_type: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeToHclTerraform(struct!.poolType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType",
    },
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._poolType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolType = this._poolType?.internalValue;
    }
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise.internalValue = undefined;
      this._enableOnInterface = undefined;
      this._poolType.internalValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise.internalValue = value.advertise;
      this._enableOnInterface = value.enableOnInterface;
      this._poolType.internalValue = value.poolType;
      this._prefixPool = value.prefixPool;
    }
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // enable_on_interface - computed: true, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
  }

  // pool_type - computed: true, optional: true, required: false
  private _poolType = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolTypeOutputReference(this, "pool_type");
  public get poolType() {
    return this._poolType;
  }
  public putPoolType(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaPoolType) {
    this._poolType.internalValue = value;
  }
  public resetPoolType() {
    this._poolType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType.internalValue;
  }

  // prefix_pool - computed: true, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise {
  /**
  * Set the Auto Address Configuration Flag (A-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#auto_config_flag DataPanosEthernetInterface#auto_config_flag}
  */
  readonly autoConfigFlag?: boolean | cdktf.IResolvable;
  /**
  * enable advertising this prefix in router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set the On-Link Flag (L-bit) of the prefix in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#onlink_flag DataPanosEthernetInterface#onlink_flag}
  */
  readonly onlinkFlag?: boolean | cdktf.IResolvable;
  /**
  * Preferred Lifetime (in seconds) of the prefix advertised in Router advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#preferred_lifetime DataPanosEthernetInterface#preferred_lifetime}
  */
  readonly preferredLifetime?: string;
  /**
  * Valid Lifetime (in seconds) of the prefix advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#valid_lifetime DataPanosEthernetInterface#valid_lifetime}
  */
  readonly validLifetime?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_config_flag: cdktf.booleanToTerraform(struct!.autoConfigFlag),
    enable: cdktf.booleanToTerraform(struct!.enable),
    onlink_flag: cdktf.booleanToTerraform(struct!.onlinkFlag),
    preferred_lifetime: cdktf.stringToTerraform(struct!.preferredLifetime),
    valid_lifetime: cdktf.stringToTerraform(struct!.validLifetime),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_config_flag: {
      value: cdktf.booleanToHclTerraform(struct!.autoConfigFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    onlink_flag: {
      value: cdktf.booleanToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfigFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfigFlag = this._autoConfigFlag;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoConfigFlag = undefined;
      this._enable = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifetime = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoConfigFlag = value.autoConfigFlag;
      this._enable = value.enable;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifetime = value.preferredLifetime;
      this._validLifetime = value.validLifetime;
    }
  }

  // auto_config_flag - computed: true, optional: true, required: false
  private _autoConfigFlag?: boolean | cdktf.IResolvable; 
  public get autoConfigFlag() {
    return this.getBooleanAttribute('auto_config_flag');
  }
  public set autoConfigFlag(value: boolean | cdktf.IResolvable) {
    this._autoConfigFlag = value;
  }
  public resetAutoConfigFlag() {
    this._autoConfigFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigFlagInput() {
    return this._autoConfigFlag;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // onlink_flag - computed: true, optional: true, required: false
  private _onlinkFlag?: boolean | cdktf.IResolvable; 
  public get onlinkFlag() {
    return this.getBooleanAttribute('onlink_flag');
  }
  public set onlinkFlag(value: boolean | cdktf.IResolvable) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: string; 
  public get preferredLifetime() {
    return this.getStringAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: string) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: string; 
  public get validLifetime() {
    return this.getStringAttribute('valid_lifetime');
  }
  public set validLifetime(value: string) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla {
  /**
  * Configure ULA (Unique Local Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#addresses DataPanosEthernetInterface#addresses}
  */
  readonly addresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#advertise DataPanosEthernetInterface#advertise}
  */
  readonly advertise?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise;
  /**
  * Anycast Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#anycast DataPanosEthernetInterface#anycast}
  */
  readonly anycast?: boolean | cdktf.IResolvable;
  /**
  * Configure this address on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_on_interface DataPanosEthernetInterface#enable_on_interface}
  */
  readonly enableOnInterface?: boolean | cdktf.IResolvable;
  /**
  * Use this as prefix to form full address with interface id/EUI-64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix DataPanosEthernetInterface#prefix}
  */
  readonly prefix?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.stringToTerraform(struct!.addresses),
    advertise: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseToTerraform(struct!.advertise),
    anycast: cdktf.booleanToTerraform(struct!.anycast),
    enable_on_interface: cdktf.booleanToTerraform(struct!.enableOnInterface),
    prefix: cdktf.booleanToTerraform(struct!.prefix),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.stringToHclTerraform(struct!.addresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertise: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseToHclTerraform(struct!.advertise),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise",
    },
    anycast: {
      value: cdktf.booleanToHclTerraform(struct!.anycast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_on_interface: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.booleanToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._advertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise?.internalValue;
    }
    if (this._anycast !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycast = this._anycast;
    }
    if (this._enableOnInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnInterface = this._enableOnInterface;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._advertise.internalValue = undefined;
      this._anycast = undefined;
      this._enableOnInterface = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._advertise.internalValue = value.advertise;
      this._anycast = value.anycast;
      this._enableOnInterface = value.enableOnInterface;
      this._prefix = value.prefix;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string; 
  public get addresses() {
    return this.getStringAttribute('addresses');
  }
  public set addresses(value: string) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }
  public putAdvertise(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaAdvertise) {
    this._advertise.internalValue = value;
  }
  public resetAdvertise() {
    this._advertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise.internalValue;
  }

  // anycast - computed: true, optional: true, required: false
  private _anycast?: boolean | cdktf.IResolvable; 
  public get anycast() {
    return this.getBooleanAttribute('anycast');
  }
  public set anycast(value: boolean | cdktf.IResolvable) {
    this._anycast = value;
  }
  public resetAnycast() {
    this._anycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast;
  }

  // enable_on_interface - computed: true, optional: true, required: false
  private _enableOnInterface?: boolean | cdktf.IResolvable; 
  public get enableOnInterface() {
    return this.getBooleanAttribute('enable_on_interface');
  }
  public set enableOnInterface(value: boolean | cdktf.IResolvable) {
    this._enableOnInterface = value;
  }
  public resetEnableOnInterface() {
    this._enableOnInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInterfaceInput() {
    return this._enableOnInterface;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: boolean | cdktf.IResolvable; 
  public get prefix() {
    return this.getBooleanAttribute('prefix');
  }
  public set prefix(value: boolean | cdktf.IResolvable) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#gua DataPanosEthernetInterface#gua}
  */
  readonly gua?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ula DataPanosEthernetInterface#ula}
  */
  readonly ula?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gua: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaToTerraform(struct!.gua),
    ula: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaToTerraform(struct!.ula),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gua: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaToHclTerraform(struct!.gua),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua",
    },
    ula: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaToHclTerraform(struct!.ula),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gua?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gua = this._gua?.internalValue;
    }
    if (this._ula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ula = this._ula?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gua.internalValue = undefined;
      this._ula.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gua.internalValue = value.gua;
      this._ula.internalValue = value.ula;
    }
  }

  // gua - computed: true, optional: true, required: false
  private _gua = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGuaOutputReference(this, "gua");
  public get gua() {
    return this._gua;
  }
  public putGua(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeGua) {
    this._gua.internalValue = value;
  }
  public resetGua() {
    this._gua.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaInput() {
    return this._gua.internalValue;
  }

  // ula - computed: true, optional: true, required: false
  private _ula = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUlaOutputReference(this, "ula");
  public get ula() {
    return this._ula;
  }
  public putUla(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeUla) {
    this._ula.internalValue = value;
  }
  public resetUla() {
    this._ula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulaInput() {
    return this._ula.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#type DataPanosEthernetInterface#type}
  */
  readonly type?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeToTerraform(struct!.type),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type.internalValue = value.type;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_pool DataPanosEthernetInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixPool = value.prefixPool;
    }
  }

  // prefix_pool - computed: true, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer {
  /**
  * (4-3600) Lifetime in Seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#server DataPanosEthernetInterface#server}
  */
  readonly server?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerToTerraform, false)(struct!.server),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server.internalValue = value.server;
    }
  }

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcpv6 DataPanosEthernetInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#manual DataPanosEthernetInterface#manual}
  */
  readonly manual?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6",
    },
    manual: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#source DataPanosEthernetInterface#source}
  */
  readonly source?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceToTerraform(struct!.source),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 {
  /**
  * Prefix-Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#prefix_pool DataPanosEthernetInterface#prefix_pool}
  */
  readonly prefixPool?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_pool: cdktf.stringToTerraform(struct!.prefixPool),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_pool: {
      value: cdktf.stringToHclTerraform(struct!.prefixPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPool = this._prefixPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixPool = value.prefixPool;
    }
  }

  // prefix_pool - computed: true, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix {
  /**
  * (4-3600) lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#suffix DataPanosEthernetInterface#suffix}
  */
  readonly suffix?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix.internalValue = value.suffix;
    }
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcpv6 DataPanosEthernetInterface#dhcpv6}
  */
  readonly dhcpv6?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#manual DataPanosEthernetInterface#manual}
  */
  readonly manual?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcpv6: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToTerraform(struct!.dhcpv6),
    manual: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualToTerraform(struct!.manual),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcpv6: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6ToHclTerraform(struct!.dhcpv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6",
    },
    manual: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpv6.internalValue = value.dhcpv6;
      this._manual.internalValue = value.manual;
    }
  }

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6 = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6OutputReference(this, "dhcpv6");
  public get dhcpv6() {
    return this._dhcpv6;
  }
  public putDhcpv6(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceDhcpv6) {
    this._dhcpv6.internalValue = value;
  }
  public resetDhcpv6() {
    this._dhcpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6.internalValue;
  }

  // manual - computed: true, optional: true, required: false
  private _manual = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#source DataPanosEthernetInterface#source}
  */
  readonly source?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    source: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceToTerraform(struct!.source),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._source.internalValue = value.source;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hw_address DataPanosEthernetInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: true, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_consistency_check DataPanosEthernetInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hop_limit DataPanosEthernetInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#link_mtu DataPanosEthernetInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#managed_flag DataPanosEthernetInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#max_interval DataPanosEthernetInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#min_interval DataPanosEthernetInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#other_flag DataPanosEthernetInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#reachable_time DataPanosEthernetInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#retransmission_timer DataPanosEthernetInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Router Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#router_preference DataPanosEthernetInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_consistency_check: cdktf.booleanToTerraform(struct!.enableConsistencyCheck),
    hop_limit: cdktf.stringToTerraform(struct!.hopLimit),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    link_mtu: cdktf.stringToTerraform(struct!.linkMtu),
    managed_flag: cdktf.booleanToTerraform(struct!.managedFlag),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_flag: cdktf.booleanToTerraform(struct!.otherFlag),
    reachable_time: cdktf.stringToTerraform(struct!.reachableTime),
    retransmission_timer: cdktf.stringToTerraform(struct!.retransmissionTimer),
    router_preference: cdktf.stringToTerraform(struct!.routerPreference),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_consistency_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsistencyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_mtu: {
      value: cdktf.stringToHclTerraform(struct!.linkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_flag: {
      value: cdktf.booleanToHclTerraform(struct!.managedFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_flag: {
      value: cdktf.booleanToHclTerraform(struct!.otherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable_time: {
      value: cdktf.stringToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmission_timer: {
      value: cdktf.stringToHclTerraform(struct!.retransmissionTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_preference: {
      value: cdktf.stringToHclTerraform(struct!.routerPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableConsistencyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsistencyCheck = this._enableConsistencyCheck;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._linkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkMtu = this._linkMtu;
    }
    if (this._managedFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFlag = this._managedFlag;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFlag = this._otherFlag;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmissionTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionTimer = this._retransmissionTimer;
    }
    if (this._routerPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerPreference = this._routerPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._enableConsistencyCheck = undefined;
      this._hopLimit = undefined;
      this._lifetime = undefined;
      this._linkMtu = undefined;
      this._managedFlag = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherFlag = undefined;
      this._reachableTime = undefined;
      this._retransmissionTimer = undefined;
      this._routerPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._enableConsistencyCheck = value.enableConsistencyCheck;
      this._hopLimit = value.hopLimit;
      this._lifetime = value.lifetime;
      this._linkMtu = value.linkMtu;
      this._managedFlag = value.managedFlag;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherFlag = value.otherFlag;
      this._reachableTime = value.reachableTime;
      this._retransmissionTimer = value.retransmissionTimer;
      this._routerPreference = value.routerPreference;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_consistency_check - computed: true, optional: true, required: false
  private _enableConsistencyCheck?: boolean | cdktf.IResolvable; 
  public get enableConsistencyCheck() {
    return this.getBooleanAttribute('enable_consistency_check');
  }
  public set enableConsistencyCheck(value: boolean | cdktf.IResolvable) {
    this._enableConsistencyCheck = value;
  }
  public resetEnableConsistencyCheck() {
    this._enableConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsistencyCheckInput() {
    return this._enableConsistencyCheck;
  }

  // hop_limit - computed: true, optional: true, required: false
  private _hopLimit?: string; 
  public get hopLimit() {
    return this.getStringAttribute('hop_limit');
  }
  public set hopLimit(value: string) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // link_mtu - computed: true, optional: true, required: false
  private _linkMtu?: string; 
  public get linkMtu() {
    return this.getStringAttribute('link_mtu');
  }
  public set linkMtu(value: string) {
    this._linkMtu = value;
  }
  public resetLinkMtu() {
    this._linkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMtuInput() {
    return this._linkMtu;
  }

  // managed_flag - computed: true, optional: true, required: false
  private _managedFlag?: boolean | cdktf.IResolvable; 
  public get managedFlag() {
    return this.getBooleanAttribute('managed_flag');
  }
  public set managedFlag(value: boolean | cdktf.IResolvable) {
    this._managedFlag = value;
  }
  public resetManagedFlag() {
    this._managedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFlagInput() {
    return this._managedFlag;
  }

  // max_interval - computed: true, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: true, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_flag - computed: true, optional: true, required: false
  private _otherFlag?: boolean | cdktf.IResolvable; 
  public get otherFlag() {
    return this.getBooleanAttribute('other_flag');
  }
  public set otherFlag(value: boolean | cdktf.IResolvable) {
    this._otherFlag = value;
  }
  public resetOtherFlag() {
    this._otherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFlagInput() {
    return this._otherFlag;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: string; 
  public get reachableTime() {
    return this.getStringAttribute('reachable_time');
  }
  public set reachableTime(value: string) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmission_timer - computed: true, optional: true, required: false
  private _retransmissionTimer?: string; 
  public get retransmissionTimer() {
    return this.getStringAttribute('retransmission_timer');
  }
  public set retransmissionTimer(value: string) {
    this._retransmissionTimer = value;
  }
  public resetRetransmissionTimer() {
    this._retransmissionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionTimerInput() {
    return this._retransmissionTimer;
  }

  // router_preference - computed: true, optional: true, required: false
  private _routerPreference?: string; 
  public get routerPreference() {
    return this.getStringAttribute('router_preference');
  }
  public set routerPreference(value: string) {
    this._routerPreference = value;
  }
  public resetRouterPreference() {
    this._routerPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerPreferenceInput() {
    return this._routerPreference;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dad_attempts DataPanosEthernetInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dns_server DataPanosEthernetInterface#dns_server}
  */
  readonly dnsServer?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dns_suffix DataPanosEthernetInterface#dns_suffix}
  */
  readonly dnsSuffix?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix;
  /**
  * Enable Duplicate ADdress Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_dad DataPanosEthernetInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_ndp_monitor DataPanosEthernetInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Static entries in neighbor cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor DataPanosEthernetInterface#neighbor}
  */
  readonly neighbor?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ns_interval DataPanosEthernetInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#reachable_time DataPanosEthernetInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#router_advertisement DataPanosEthernetInterface#router_advertisement}
  */
  readonly routerAdvertisement?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    dns_server: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerToTerraform(struct!.dnsServer),
    dns_suffix: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixToTerraform(struct!.dnsSuffix),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_server: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerToHclTerraform(struct!.dnsServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer",
    },
    dns_suffix: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixToHclTerraform(struct!.dnsSuffix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advertisement: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    if (this._dnsSuffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix?.internalValue;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._routerAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertisement = this._routerAdvertisement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._dnsServer.internalValue = undefined;
      this._dnsSuffix.internalValue = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
      this._routerAdvertisement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._dnsServer.internalValue = value.dnsServer;
      this._dnsSuffix.internalValue = value.dnsSuffix;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
      this._routerAdvertisement.internalValue = value.routerAdvertisement;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServerOutputReference(this, "dns_server");
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsServer) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // dns_suffix - computed: true, optional: true, required: false
  private _dnsSuffix = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffixOutputReference(this, "dns_suffix");
  public get dnsSuffix() {
    return this._dnsSuffix;
  }
  public putDnsSuffix(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryDnsSuffix) {
    this._dnsSuffix.internalValue = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix.internalValue;
  }

  // enable_dad - computed: true, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: true, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // router_advertisement - computed: true, optional: true, required: false
  private _routerAdvertisement = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryRouterAdvertisement) {
    this._routerAdvertisement.internalValue = value;
  }
  public resetRouterAdvertisement() {
    this._routerAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementInput() {
    return this._routerAdvertisement.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6Inherited {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#assign_addr DataPanosEthernetInterface#assign_addr}
  */
  readonly assignAddr?: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr[] | cdktf.IResolvable;
  /**
  * Enable Inherited Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor_discovery DataPanosEthernetInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery;
}

export function dataPanosEthernetInterfaceLayer3Ipv6InheritedToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_addr: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrToTerraform, false)(struct!.assignAddr),
    enable: cdktf.booleanToTerraform(struct!.enable),
    neighbor_discovery: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6InheritedToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6Inherited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_addr: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrToHclTerraform, false)(struct!.assignAddr),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor_discovery: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6InheritedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6Inherited | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignAddr = this._assignAddr?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6Inherited | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignAddr.internalValue = undefined;
      this._enable = undefined;
      this._neighborDiscovery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignAddr.internalValue = value.assignAddr;
      this._enable = value.enable;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
    }
  }

  // assign_addr - computed: true, optional: true, required: false
  private _assignAddr = new DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddrList(this, "assign_addr", false);
  public get assignAddr() {
    return this._assignAddr;
  }
  public putAssignAddr(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedAssignAddr[] | cdktf.IResolvable) {
    this._assignAddr.internalValue = value;
  }
  public resetAssignAddr() {
    this._assignAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAddrInput() {
    return this._assignAddr.internalValue;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosEthernetInterfaceLayer3Ipv6InheritedNeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor {
  /**
  * MAC address (format xx:xx:xx:xx:xx:xx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hw_address DataPanosEthernetInterface#hw_address}
  */
  readonly hwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hw_address: cdktf.stringToTerraform(struct!.hwAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hw_address: {
      value: cdktf.stringToHclTerraform(struct!.hwAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwAddress = this._hwAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hwAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hwAddress = value.hwAddress;
      this._name = value.name;
    }
  }

  // hw_address - computed: true, optional: true, required: false
  private _hwAddress?: string; 
  public get hwAddress() {
    return this.getStringAttribute('hw_address');
  }
  public set hwAddress(value: string) {
    this._hwAddress = value;
  }
  public resetHwAddress() {
    this._hwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwAddressInput() {
    return this._hwAddress;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer {
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix {
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._name = value.name;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference {
    return new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#server DataPanosEthernetInterface#server}
  */
  readonly server?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#suffix DataPanosEthernetInterface#suffix}
  */
  readonly suffix?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    server: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToTerraform, false)(struct!.server),
    suffix: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToTerraform, false)(struct!.suffix),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerToHclTerraform, false)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList",
    },
    suffix: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixToHclTerraform, false)(struct!.suffix),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._suffix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._server.internalValue = undefined;
      this._suffix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._server.internalValue = value.server;
      this._suffix.internalValue = value.suffix;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // server - computed: true, optional: true, required: false
  private _server = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffixList(this, "suffix", false);
  public get suffix() {
    return this._suffix;
  }
  public putSuffix(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportSuffix[] | cdktf.IResolvable) {
    this._suffix.internalValue = value;
  }
  public resetSuffix() {
    this._suffix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dns_support DataPanosEthernetInterface#dns_support}
  */
  readonly dnsSupport?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * check consistency of RA messages from other routers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_consistency_check DataPanosEthernetInterface#enable_consistency_check}
  */
  readonly enableConsistencyCheck?: boolean | cdktf.IResolvable;
  /**
  * Current Hop Limit advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#hop_limit DataPanosEthernetInterface#hop_limit}
  */
  readonly hopLimit?: string;
  /**
  * Router Lifetime (in seconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lifetime DataPanosEthernetInterface#lifetime}
  */
  readonly lifetime?: number;
  /**
  * value of MTU option in Router Advertisement messages, upto 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#link_mtu DataPanosEthernetInterface#link_mtu}
  */
  readonly linkMtu?: string;
  /**
  * Set the Managed Configuration Flag (M-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#managed_flag DataPanosEthernetInterface#managed_flag}
  */
  readonly managedFlag?: boolean | cdktf.IResolvable;
  /**
  * Maximum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#max_interval DataPanosEthernetInterface#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Minimum interval (seconds) between consecutive unsolicited Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#min_interval DataPanosEthernetInterface#min_interval}
  */
  readonly minInterval?: number;
  /**
  * Set the Other Stateful Configuration Flag (O-bit) in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#other_flag DataPanosEthernetInterface#other_flag}
  */
  readonly otherFlag?: boolean | cdktf.IResolvable;
  /**
  * Reachable Time (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#reachable_time DataPanosEthernetInterface#reachable_time}
  */
  readonly reachableTime?: string;
  /**
  * Retransmission Timer (in milliseconds) advertised in Router Advertisement messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#retransmission_timer DataPanosEthernetInterface#retransmission_timer}
  */
  readonly retransmissionTimer?: string;
  /**
  * Router Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#router_preference DataPanosEthernetInterface#router_preference}
  */
  readonly routerPreference?: string;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_support: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportToTerraform(struct!.dnsSupport),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_consistency_check: cdktf.booleanToTerraform(struct!.enableConsistencyCheck),
    hop_limit: cdktf.stringToTerraform(struct!.hopLimit),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    link_mtu: cdktf.stringToTerraform(struct!.linkMtu),
    managed_flag: cdktf.booleanToTerraform(struct!.managedFlag),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_flag: cdktf.booleanToTerraform(struct!.otherFlag),
    reachable_time: cdktf.stringToTerraform(struct!.reachableTime),
    retransmission_timer: cdktf.stringToTerraform(struct!.retransmissionTimer),
    router_preference: cdktf.stringToTerraform(struct!.routerPreference),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_support: {
      value: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportToHclTerraform(struct!.dnsSupport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_consistency_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsistencyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hop_limit: {
      value: cdktf.stringToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_mtu: {
      value: cdktf.stringToHclTerraform(struct!.linkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_flag: {
      value: cdktf.booleanToHclTerraform(struct!.managedFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_flag: {
      value: cdktf.booleanToHclTerraform(struct!.otherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable_time: {
      value: cdktf.stringToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmission_timer: {
      value: cdktf.stringToHclTerraform(struct!.retransmissionTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_preference: {
      value: cdktf.stringToHclTerraform(struct!.routerPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSupport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSupport = this._dnsSupport?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableConsistencyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsistencyCheck = this._enableConsistencyCheck;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._linkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkMtu = this._linkMtu;
    }
    if (this._managedFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFlag = this._managedFlag;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFlag = this._otherFlag;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmissionTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmissionTimer = this._retransmissionTimer;
    }
    if (this._routerPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerPreference = this._routerPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSupport.internalValue = undefined;
      this._enable = undefined;
      this._enableConsistencyCheck = undefined;
      this._hopLimit = undefined;
      this._lifetime = undefined;
      this._linkMtu = undefined;
      this._managedFlag = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherFlag = undefined;
      this._reachableTime = undefined;
      this._retransmissionTimer = undefined;
      this._routerPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSupport.internalValue = value.dnsSupport;
      this._enable = value.enable;
      this._enableConsistencyCheck = value.enableConsistencyCheck;
      this._hopLimit = value.hopLimit;
      this._lifetime = value.lifetime;
      this._linkMtu = value.linkMtu;
      this._managedFlag = value.managedFlag;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherFlag = value.otherFlag;
      this._reachableTime = value.reachableTime;
      this._retransmissionTimer = value.retransmissionTimer;
      this._routerPreference = value.routerPreference;
    }
  }

  // dns_support - computed: true, optional: true, required: false
  private _dnsSupport = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupportOutputReference(this, "dns_support");
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public putDnsSupport(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementDnsSupport) {
    this._dnsSupport.internalValue = value;
  }
  public resetDnsSupport() {
    this._dnsSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport.internalValue;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_consistency_check - computed: true, optional: true, required: false
  private _enableConsistencyCheck?: boolean | cdktf.IResolvable; 
  public get enableConsistencyCheck() {
    return this.getBooleanAttribute('enable_consistency_check');
  }
  public set enableConsistencyCheck(value: boolean | cdktf.IResolvable) {
    this._enableConsistencyCheck = value;
  }
  public resetEnableConsistencyCheck() {
    this._enableConsistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsistencyCheckInput() {
    return this._enableConsistencyCheck;
  }

  // hop_limit - computed: true, optional: true, required: false
  private _hopLimit?: string; 
  public get hopLimit() {
    return this.getStringAttribute('hop_limit');
  }
  public set hopLimit(value: string) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // link_mtu - computed: true, optional: true, required: false
  private _linkMtu?: string; 
  public get linkMtu() {
    return this.getStringAttribute('link_mtu');
  }
  public set linkMtu(value: string) {
    this._linkMtu = value;
  }
  public resetLinkMtu() {
    this._linkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMtuInput() {
    return this._linkMtu;
  }

  // managed_flag - computed: true, optional: true, required: false
  private _managedFlag?: boolean | cdktf.IResolvable; 
  public get managedFlag() {
    return this.getBooleanAttribute('managed_flag');
  }
  public set managedFlag(value: boolean | cdktf.IResolvable) {
    this._managedFlag = value;
  }
  public resetManagedFlag() {
    this._managedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFlagInput() {
    return this._managedFlag;
  }

  // max_interval - computed: true, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: true, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_flag - computed: true, optional: true, required: false
  private _otherFlag?: boolean | cdktf.IResolvable; 
  public get otherFlag() {
    return this.getBooleanAttribute('other_flag');
  }
  public set otherFlag(value: boolean | cdktf.IResolvable) {
    this._otherFlag = value;
  }
  public resetOtherFlag() {
    this._otherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFlagInput() {
    return this._otherFlag;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: string; 
  public get reachableTime() {
    return this.getStringAttribute('reachable_time');
  }
  public set reachableTime(value: string) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmission_timer - computed: true, optional: true, required: false
  private _retransmissionTimer?: string; 
  public get retransmissionTimer() {
    return this.getStringAttribute('retransmission_timer');
  }
  public set retransmissionTimer(value: string) {
    this._retransmissionTimer = value;
  }
  public resetRetransmissionTimer() {
    this._retransmissionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionTimerInput() {
    return this._retransmissionTimer;
  }

  // router_preference - computed: true, optional: true, required: false
  private _routerPreference?: string; 
  public get routerPreference() {
    return this.getStringAttribute('router_preference');
  }
  public set routerPreference(value: string) {
    this._routerPreference = value;
  }
  public resetRouterPreference() {
    this._routerPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerPreferenceInput() {
    return this._routerPreference;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery {
  /**
  * Number of consecutive neighbor solicitation messages sent for duplicate address detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dad_attempts DataPanosEthernetInterface#dad_attempts}
  */
  readonly dadAttempts?: number;
  /**
  * Enable Duplicate ADdress Detection (DAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_dad DataPanosEthernetInterface#enable_dad}
  */
  readonly enableDad?: boolean | cdktf.IResolvable;
  /**
  * Enable NDP Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable_ndp_monitor DataPanosEthernetInterface#enable_ndp_monitor}
  */
  readonly enableNdpMonitor?: boolean | cdktf.IResolvable;
  /**
  * Static entries in neighbor cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor DataPanosEthernetInterface#neighbor}
  */
  readonly neighbor?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable;
  /**
  * Interval (in seconds) between consecutive neighbor solicitation messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ns_interval DataPanosEthernetInterface#ns_interval}
  */
  readonly nsInterval?: number;
  /**
  * Time (in seconds) that the Reachable status for a neighbor can be maintained
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#reachable_time DataPanosEthernetInterface#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#router_advertisement DataPanosEthernetInterface#router_advertisement}
  */
  readonly routerAdvertisement?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement;
}

export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dad_attempts: cdktf.numberToTerraform(struct!.dadAttempts),
    enable_dad: cdktf.booleanToTerraform(struct!.enableDad),
    enable_ndp_monitor: cdktf.booleanToTerraform(struct!.enableNdpMonitor),
    neighbor: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborToTerraform, false)(struct!.neighbor),
    ns_interval: cdktf.numberToTerraform(struct!.nsInterval),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    router_advertisement: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementToTerraform(struct!.routerAdvertisement),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dad_attempts: {
      value: cdktf.numberToHclTerraform(struct!.dadAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_dad: {
      value: cdktf.booleanToHclTerraform(struct!.enableDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ndp_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableNdpMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbor: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborList",
    },
    ns_interval: {
      value: cdktf.numberToHclTerraform(struct!.nsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advertisement: {
      value: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementToHclTerraform(struct!.routerAdvertisement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dadAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dadAttempts = this._dadAttempts;
    }
    if (this._enableDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDad = this._enableDad;
    }
    if (this._enableNdpMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNdpMonitor = this._enableNdpMonitor;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._nsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsInterval = this._nsInterval;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._routerAdvertisement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertisement = this._routerAdvertisement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dadAttempts = undefined;
      this._enableDad = undefined;
      this._enableNdpMonitor = undefined;
      this._neighbor.internalValue = undefined;
      this._nsInterval = undefined;
      this._reachableTime = undefined;
      this._routerAdvertisement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dadAttempts = value.dadAttempts;
      this._enableDad = value.enableDad;
      this._enableNdpMonitor = value.enableNdpMonitor;
      this._neighbor.internalValue = value.neighbor;
      this._nsInterval = value.nsInterval;
      this._reachableTime = value.reachableTime;
      this._routerAdvertisement.internalValue = value.routerAdvertisement;
    }
  }

  // dad_attempts - computed: true, optional: true, required: false
  private _dadAttempts?: number; 
  public get dadAttempts() {
    return this.getNumberAttribute('dad_attempts');
  }
  public set dadAttempts(value: number) {
    this._dadAttempts = value;
  }
  public resetDadAttempts() {
    this._dadAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dadAttemptsInput() {
    return this._dadAttempts;
  }

  // enable_dad - computed: true, optional: true, required: false
  private _enableDad?: boolean | cdktf.IResolvable; 
  public get enableDad() {
    return this.getBooleanAttribute('enable_dad');
  }
  public set enableDad(value: boolean | cdktf.IResolvable) {
    this._enableDad = value;
  }
  public resetEnableDad() {
    this._enableDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDadInput() {
    return this._enableDad;
  }

  // enable_ndp_monitor - computed: true, optional: true, required: false
  private _enableNdpMonitor?: boolean | cdktf.IResolvable; 
  public get enableNdpMonitor() {
    return this.getBooleanAttribute('enable_ndp_monitor');
  }
  public set enableNdpMonitor(value: boolean | cdktf.IResolvable) {
    this._enableNdpMonitor = value;
  }
  public resetEnableNdpMonitor() {
    this._enableNdpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNdpMonitorInput() {
    return this._enableNdpMonitor;
  }

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // ns_interval - computed: true, optional: true, required: false
  private _nsInterval?: number; 
  public get nsInterval() {
    return this.getNumberAttribute('ns_interval');
  }
  public set nsInterval(value: number) {
    this._nsInterval = value;
  }
  public resetNsInterval() {
    this._nsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIntervalInput() {
    return this._nsInterval;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // router_advertisement - computed: true, optional: true, required: false
  private _routerAdvertisement = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisementOutputReference(this, "router_advertisement");
  public get routerAdvertisement() {
    return this._routerAdvertisement;
  }
  public putRouterAdvertisement(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryRouterAdvertisement) {
    this._routerAdvertisement.internalValue = value;
  }
  public resetRouterAdvertisement() {
    this._routerAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementInput() {
    return this._routerAdvertisement.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3Ipv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#addresses DataPanosEthernetInterface#addresses}
  */
  readonly addresses?: DataPanosEthernetInterfaceLayer3Ipv6Addresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcp_client DataPanosEthernetInterface#dhcp_client}
  */
  readonly dhcpClient?: DataPanosEthernetInterfaceLayer3Ipv6DhcpClient;
  /**
  * Enable IPv6 on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enabled DataPanosEthernetInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#inherited DataPanosEthernetInterface#inherited}
  */
  readonly inherited?: DataPanosEthernetInterfaceLayer3Ipv6Inherited;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#interface_id DataPanosEthernetInterface#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#neighbor_discovery DataPanosEthernetInterface#neighbor_discovery}
  */
  readonly neighborDiscovery?: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery;
}

export function dataPanosEthernetInterfaceLayer3Ipv6ToTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(dataPanosEthernetInterfaceLayer3Ipv6AddressesToTerraform, false)(struct!.addresses),
    dhcp_client: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientToTerraform(struct!.dhcpClient),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inherited: dataPanosEthernetInterfaceLayer3Ipv6InheritedToTerraform(struct!.inherited),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    neighbor_discovery: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryToTerraform(struct!.neighborDiscovery),
  }
}


export function dataPanosEthernetInterfaceLayer3Ipv6ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Ipv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3Ipv6AddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6AddressesList",
    },
    dhcp_client: {
      value: dataPanosEthernetInterfaceLayer3Ipv6DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6DhcpClient",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited: {
      value: dataPanosEthernetInterfaceLayer3Ipv6InheritedToHclTerraform(struct!.inherited),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6Inherited",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_discovery: {
      value: dataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryToHclTerraform(struct!.neighborDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3Ipv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Ipv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inherited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherited = this._inherited?.internalValue;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._neighborDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborDiscovery = this._neighborDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Ipv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._dhcpClient.internalValue = undefined;
      this._enabled = undefined;
      this._inherited.internalValue = undefined;
      this._interfaceId = undefined;
      this._neighborDiscovery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._enabled = value.enabled;
      this._inherited.internalValue = value.inherited;
      this._interfaceId = value.interfaceId;
      this._neighborDiscovery.internalValue = value.neighborDiscovery;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses = new DataPanosEthernetInterfaceLayer3Ipv6AddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataPanosEthernetInterfaceLayer3Ipv6Addresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // dhcp_client - computed: true, optional: true, required: false
  private _dhcpClient = new DataPanosEthernetInterfaceLayer3Ipv6DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: DataPanosEthernetInterfaceLayer3Ipv6DhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // inherited - computed: true, optional: true, required: false
  private _inherited = new DataPanosEthernetInterfaceLayer3Ipv6InheritedOutputReference(this, "inherited");
  public get inherited() {
    return this._inherited;
  }
  public putInherited(value: DataPanosEthernetInterfaceLayer3Ipv6Inherited) {
    this._inherited.internalValue = value;
  }
  public resetInherited() {
    this._inherited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited.internalValue;
  }

  // interface_id - computed: true, optional: true, required: false
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // neighbor_discovery - computed: true, optional: true, required: false
  private _neighborDiscovery = new DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscoveryOutputReference(this, "neighbor_discovery");
  public get neighborDiscovery() {
    return this._neighborDiscovery;
  }
  public putNeighborDiscovery(value: DataPanosEthernetInterfaceLayer3Ipv6NeighborDiscovery) {
    this._neighborDiscovery.internalValue = value;
  }
  public resetNeighborDiscovery() {
    this._neighborDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborDiscoveryInput() {
    return this._neighborDiscovery.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3LldpHighAvailability {
  /**
  * Enable LLDP pre-negotiation in HA passive state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#passive_pre_negotiation DataPanosEthernetInterface#passive_pre_negotiation}
  */
  readonly passivePreNegotiation?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3LldpHighAvailabilityToTerraform(struct?: DataPanosEthernetInterfaceLayer3LldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passive_pre_negotiation: cdktf.booleanToTerraform(struct!.passivePreNegotiation),
  }
}


export function dataPanosEthernetInterfaceLayer3LldpHighAvailabilityToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3LldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passive_pre_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.passivePreNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3LldpHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3LldpHighAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passivePreNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.passivePreNegotiation = this._passivePreNegotiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3LldpHighAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = value.passivePreNegotiation;
    }
  }

  // passive_pre_negotiation - computed: true, optional: true, required: false
  private _passivePreNegotiation?: boolean | cdktf.IResolvable; 
  public get passivePreNegotiation() {
    return this.getBooleanAttribute('passive_pre_negotiation');
  }
  public set passivePreNegotiation(value: boolean | cdktf.IResolvable) {
    this._passivePreNegotiation = value;
  }
  public resetPassivePreNegotiation() {
    this._passivePreNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passivePreNegotiationInput() {
    return this._passivePreNegotiation;
  }
}
export interface DataPanosEthernetInterfaceLayer3Lldp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#high_availability DataPanosEthernetInterface#high_availability}
  */
  readonly highAvailability?: DataPanosEthernetInterfaceLayer3LldpHighAvailability;
  /**
  * LLDP profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#profile DataPanosEthernetInterface#profile}
  */
  readonly profile?: string;
}

export function dataPanosEthernetInterfaceLayer3LldpToTerraform(struct?: DataPanosEthernetInterfaceLayer3Lldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    high_availability: dataPanosEthernetInterfaceLayer3LldpHighAvailabilityToTerraform(struct!.highAvailability),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosEthernetInterfaceLayer3LldpToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Lldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_availability: {
      value: dataPanosEthernetInterfaceLayer3LldpHighAvailabilityToHclTerraform(struct!.highAvailability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3LldpHighAvailability",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3LldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Lldp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._highAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Lldp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._highAvailability.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._highAvailability.internalValue = value.highAvailability;
      this._profile = value.profile;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // high_availability - computed: true, optional: true, required: false
  private _highAvailability = new DataPanosEthernetInterfaceLayer3LldpHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: DataPanosEthernetInterfaceLayer3LldpHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DataPanosEthernetInterfaceLayer3NdpProxyAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name: string;
  /**
  * put the prefix or address on a block list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#negate DataPanosEthernetInterface#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3NdpProxyAddressesToTerraform(struct?: DataPanosEthernetInterfaceLayer3NdpProxyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    negate: cdktf.booleanToTerraform(struct!.negate),
  }
}


export function dataPanosEthernetInterfaceLayer3NdpProxyAddressesToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3NdpProxyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3NdpProxyAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosEthernetInterfaceLayer3NdpProxyAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3NdpProxyAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._negate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._negate = value.negate;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }
}

export class DataPanosEthernetInterfaceLayer3NdpProxyAddressesList extends cdktf.ComplexList {
  public internalValue? : DataPanosEthernetInterfaceLayer3NdpProxyAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataPanosEthernetInterfaceLayer3NdpProxyAddressesOutputReference {
    return new DataPanosEthernetInterfaceLayer3NdpProxyAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosEthernetInterfaceLayer3NdpProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#addresses DataPanosEthernetInterface#addresses}
  */
  readonly addresses?: DataPanosEthernetInterfaceLayer3NdpProxyAddresses[] | cdktf.IResolvable;
  /**
  * Enable proxy NDP on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enabled DataPanosEthernetInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3NdpProxyToTerraform(struct?: DataPanosEthernetInterfaceLayer3NdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(dataPanosEthernetInterfaceLayer3NdpProxyAddressesToTerraform, false)(struct!.addresses),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataPanosEthernetInterfaceLayer3NdpProxyToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3NdpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3NdpProxyAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3NdpProxyAddressesList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3NdpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3NdpProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3NdpProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._enabled = value.enabled;
    }
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses = new DataPanosEthernetInterfaceLayer3NdpProxyAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataPanosEthernetInterfaceLayer3NdpProxyAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataPanosEthernetInterfaceLayer3PppoePassive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3PppoePassiveToTerraform(struct?: DataPanosEthernetInterfaceLayer3PppoePassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataPanosEthernetInterfaceLayer3PppoePassiveToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3PppoePassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3PppoePassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3PppoePassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3PppoePassive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataPanosEthernetInterfaceLayer3PppoeStaticAddress {
  /**
  * static ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ips DataPanosEthernetInterface#ips}
  */
  readonly ips?: string;
}

export function dataPanosEthernetInterfaceLayer3PppoeStaticAddressToTerraform(struct?: DataPanosEthernetInterfaceLayer3PppoeStaticAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.stringToTerraform(struct!.ips),
  }
}


export function dataPanosEthernetInterfaceLayer3PppoeStaticAddressToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3PppoeStaticAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.stringToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3PppoeStaticAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3PppoeStaticAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3PppoeStaticAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ips = value.ips;
    }
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}
export interface DataPanosEthernetInterfaceLayer3Pppoe {
  /**
  * desired access concentrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#access_concentrator DataPanosEthernetInterface#access_concentrator}
  */
  readonly accessConcentrator?: string;
  /**
  * authentication protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#authentication DataPanosEthernetInterface#authentication}
  */
  readonly authentication?: string;
  /**
  * automatically create default route pointing to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#create_default_route DataPanosEthernetInterface#create_default_route}
  */
  readonly createDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * metric of the default route created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#default_route_metric DataPanosEthernetInterface#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#passive DataPanosEthernetInterface#passive}
  */
  readonly passive?: DataPanosEthernetInterfaceLayer3PppoePassive;
  /**
  * password for ppp autentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#password DataPanosEthernetInterface#password}
  */
  readonly password?: string;
  /**
  * desired service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#service DataPanosEthernetInterface#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#static_address DataPanosEthernetInterface#static_address}
  */
  readonly staticAddress?: DataPanosEthernetInterfaceLayer3PppoeStaticAddress;
  /**
  * username for ppp authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#username DataPanosEthernetInterface#username}
  */
  readonly username?: string;
}

export function dataPanosEthernetInterfaceLayer3PppoeToTerraform(struct?: DataPanosEthernetInterfaceLayer3Pppoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_concentrator: cdktf.stringToTerraform(struct!.accessConcentrator),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    create_default_route: cdktf.booleanToTerraform(struct!.createDefaultRoute),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    enable: cdktf.booleanToTerraform(struct!.enable),
    passive: dataPanosEthernetInterfaceLayer3PppoePassiveToTerraform(struct!.passive),
    password: cdktf.stringToTerraform(struct!.password),
    service: cdktf.stringToTerraform(struct!.service),
    static_address: dataPanosEthernetInterfaceLayer3PppoeStaticAddressToTerraform(struct!.staticAddress),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosEthernetInterfaceLayer3PppoeToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3Pppoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_concentrator: {
      value: cdktf.stringToHclTerraform(struct!.accessConcentrator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.createDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive: {
      value: dataPanosEthernetInterfaceLayer3PppoePassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3PppoePassive",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_address: {
      value: dataPanosEthernetInterfaceLayer3PppoeStaticAddressToHclTerraform(struct!.staticAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3PppoeStaticAddress",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3PppoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3Pppoe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessConcentrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConcentrator = this._accessConcentrator;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._createDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultRoute = this._createDefaultRoute;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._staticAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticAddress = this._staticAddress?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3Pppoe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessConcentrator = undefined;
      this._authentication = undefined;
      this._createDefaultRoute = undefined;
      this._defaultRouteMetric = undefined;
      this._enable = undefined;
      this._passive.internalValue = undefined;
      this._password = undefined;
      this._service = undefined;
      this._staticAddress.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessConcentrator = value.accessConcentrator;
      this._authentication = value.authentication;
      this._createDefaultRoute = value.createDefaultRoute;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._enable = value.enable;
      this._passive.internalValue = value.passive;
      this._password = value.password;
      this._service = value.service;
      this._staticAddress.internalValue = value.staticAddress;
      this._username = value.username;
    }
  }

  // access_concentrator - computed: true, optional: true, required: false
  private _accessConcentrator?: string; 
  public get accessConcentrator() {
    return this.getStringAttribute('access_concentrator');
  }
  public set accessConcentrator(value: string) {
    this._accessConcentrator = value;
  }
  public resetAccessConcentrator() {
    this._accessConcentrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConcentratorInput() {
    return this._accessConcentrator;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // create_default_route - computed: true, optional: true, required: false
  private _createDefaultRoute?: boolean | cdktf.IResolvable; 
  public get createDefaultRoute() {
    return this.getBooleanAttribute('create_default_route');
  }
  public set createDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._createDefaultRoute = value;
  }
  public resetCreateDefaultRoute() {
    this._createDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultRouteInput() {
    return this._createDefaultRoute;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // passive - computed: true, optional: true, required: false
  private _passive = new DataPanosEthernetInterfaceLayer3PppoePassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: DataPanosEthernetInterfaceLayer3PppoePassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // static_address - computed: true, optional: true, required: false
  private _staticAddress = new DataPanosEthernetInterfaceLayer3PppoeStaticAddressOutputReference(this, "static_address");
  public get staticAddress() {
    return this._staticAddress;
  }
  public putStaticAddress(value: DataPanosEthernetInterfaceLayer3PppoeStaticAddress) {
    this._staticAddress.internalValue = value;
  }
  public resetStaticAddress() {
    this._staticAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAddressInput() {
    return this._staticAddress.internalValue;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns {
}

export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsToTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * Upstream NAT address FQDN name configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#fqdn DataPanosEthernetInterface#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Upstream NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ip_address DataPanosEthernetInterface#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns DataPanosEthernetInterface#ddns}
  */
  readonly ddns?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns;
  /**
  * Enable upstream NAT IP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#static_ip DataPanosEthernetInterface#static_ip}
  */
  readonly staticIp?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp;
}

export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatToTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsToTerraform(struct!.ddns),
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns: {
      value: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsToHclTerraform(struct!.ddns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddns = this._ddns?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddns.internalValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddns.internalValue = value.ddns;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // ddns - computed: true, optional: true, required: false
  private _ddns = new DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdnsOutputReference(this, "ddns");
  public get ddns() {
    return this._ddns;
  }
  public putDdns(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatDdns) {
    this._ddns.internalValue = value;
  }
  public resetDdns() {
    this._ddns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsInput() {
    return this._ddns.internalValue;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static_ip - computed: true, optional: true, required: false
  private _staticIp = new DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3SdwanLinkSettings {
  /**
  * Enable sdwan on this ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Sdwan link characteristics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#sdwan_interface_profile DataPanosEthernetInterface#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#upstream_nat DataPanosEthernetInterface#upstream_nat}
  */
  readonly upstreamNat?: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat;
}

export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsToTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function dataPanosEthernetInterfaceLayer3SdwanLinkSettingsToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3SdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3SdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3SdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // sdwan_interface_profile - computed: true, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: true, optional: true, required: false
  private _upstreamNat = new DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLayer3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#adjust_tcp_mss DataPanosEthernetInterface#adjust_tcp_mss}
  */
  readonly adjustTcpMss?: DataPanosEthernetInterfaceLayer3AdjustTcpMss;
  /**
  * ARP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#arp DataPanosEthernetInterface#arp}
  */
  readonly arp?: DataPanosEthernetInterfaceLayer3Arp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#bonjour DataPanosEthernetInterface#bonjour}
  */
  readonly bonjour?: DataPanosEthernetInterfaceLayer3Bonjour;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#cluster_interconnect DataPanosEthernetInterface#cluster_interconnect}
  */
  readonly clusterInterconnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ddns_config DataPanosEthernetInterface#ddns_config}
  */
  readonly ddnsConfig?: DataPanosEthernetInterfaceLayer3DdnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#decrypt_forward DataPanosEthernetInterface#decrypt_forward}
  */
  readonly decryptForward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#df_ignore DataPanosEthernetInterface#df_ignore}
  */
  readonly dfIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#dhcp_client DataPanosEthernetInterface#dhcp_client}
  */
  readonly dhcpClient?: DataPanosEthernetInterfaceLayer3DhcpClient;
  /**
  * Interface management profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#interface_management_profile DataPanosEthernetInterface#interface_management_profile}
  */
  readonly interfaceManagementProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ips DataPanosEthernetInterface#ips}
  */
  readonly ips?: DataPanosEthernetInterfaceLayer3Ips[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ipv6 DataPanosEthernetInterface#ipv6}
  */
  readonly ipv6?: DataPanosEthernetInterfaceLayer3Ipv6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lldp DataPanosEthernetInterface#lldp}
  */
  readonly lldp?: DataPanosEthernetInterfaceLayer3Lldp;
  /**
  * Maximum Transfer Unit, up to 9216 in Jumbo-Frame mode, up to 1500 otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#mtu DataPanosEthernetInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ndp_proxy DataPanosEthernetInterface#ndp_proxy}
  */
  readonly ndpProxy?: DataPanosEthernetInterfaceLayer3NdpProxy;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#netflow_profile DataPanosEthernetInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#pppoe DataPanosEthernetInterface#pppoe}
  */
  readonly pppoe?: DataPanosEthernetInterfaceLayer3Pppoe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#sdwan_link_settings DataPanosEthernetInterface#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: DataPanosEthernetInterfaceLayer3SdwanLinkSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#traffic_interconnect DataPanosEthernetInterface#traffic_interconnect}
  */
  readonly trafficInterconnect?: boolean | cdktf.IResolvable;
  /**
  * Enable untagged sub-interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#untagged_sub_interface DataPanosEthernetInterface#untagged_sub_interface}
  */
  readonly untaggedSubInterface?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceLayer3ToTerraform(struct?: DataPanosEthernetInterfaceLayer3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjust_tcp_mss: dataPanosEthernetInterfaceLayer3AdjustTcpMssToTerraform(struct!.adjustTcpMss),
    arp: cdktf.listMapper(dataPanosEthernetInterfaceLayer3ArpToTerraform, false)(struct!.arp),
    bonjour: dataPanosEthernetInterfaceLayer3BonjourToTerraform(struct!.bonjour),
    cluster_interconnect: cdktf.booleanToTerraform(struct!.clusterInterconnect),
    ddns_config: dataPanosEthernetInterfaceLayer3DdnsConfigToTerraform(struct!.ddnsConfig),
    decrypt_forward: cdktf.booleanToTerraform(struct!.decryptForward),
    df_ignore: cdktf.booleanToTerraform(struct!.dfIgnore),
    dhcp_client: dataPanosEthernetInterfaceLayer3DhcpClientToTerraform(struct!.dhcpClient),
    interface_management_profile: cdktf.stringToTerraform(struct!.interfaceManagementProfile),
    ips: cdktf.listMapper(dataPanosEthernetInterfaceLayer3IpsToTerraform, false)(struct!.ips),
    ipv6: dataPanosEthernetInterfaceLayer3Ipv6ToTerraform(struct!.ipv6),
    lldp: dataPanosEthernetInterfaceLayer3LldpToTerraform(struct!.lldp),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    ndp_proxy: dataPanosEthernetInterfaceLayer3NdpProxyToTerraform(struct!.ndpProxy),
    netflow_profile: cdktf.stringToTerraform(struct!.netflowProfile),
    pppoe: dataPanosEthernetInterfaceLayer3PppoeToTerraform(struct!.pppoe),
    sdwan_link_settings: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsToTerraform(struct!.sdwanLinkSettings),
    traffic_interconnect: cdktf.booleanToTerraform(struct!.trafficInterconnect),
    untagged_sub_interface: cdktf.booleanToTerraform(struct!.untaggedSubInterface),
  }
}


export function dataPanosEthernetInterfaceLayer3ToHclTerraform(struct?: DataPanosEthernetInterfaceLayer3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjust_tcp_mss: {
      value: dataPanosEthernetInterfaceLayer3AdjustTcpMssToHclTerraform(struct!.adjustTcpMss),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3AdjustTcpMss",
    },
    arp: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3ArpToHclTerraform, false)(struct!.arp),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3ArpList",
    },
    bonjour: {
      value: dataPanosEthernetInterfaceLayer3BonjourToHclTerraform(struct!.bonjour),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Bonjour",
    },
    cluster_interconnect: {
      value: cdktf.booleanToHclTerraform(struct!.clusterInterconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_config: {
      value: dataPanosEthernetInterfaceLayer3DdnsConfigToHclTerraform(struct!.ddnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3DdnsConfig",
    },
    decrypt_forward: {
      value: cdktf.booleanToHclTerraform(struct!.decryptForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    df_ignore: {
      value: cdktf.booleanToHclTerraform(struct!.dfIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_client: {
      value: dataPanosEthernetInterfaceLayer3DhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3DhcpClient",
    },
    interface_management_profile: {
      value: cdktf.stringToHclTerraform(struct!.interfaceManagementProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(dataPanosEthernetInterfaceLayer3IpsToHclTerraform, false)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosEthernetInterfaceLayer3IpsList",
    },
    ipv6: {
      value: dataPanosEthernetInterfaceLayer3Ipv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Ipv6",
    },
    lldp: {
      value: dataPanosEthernetInterfaceLayer3LldpToHclTerraform(struct!.lldp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Lldp",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ndp_proxy: {
      value: dataPanosEthernetInterfaceLayer3NdpProxyToHclTerraform(struct!.ndpProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3NdpProxy",
    },
    netflow_profile: {
      value: cdktf.stringToHclTerraform(struct!.netflowProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pppoe: {
      value: dataPanosEthernetInterfaceLayer3PppoeToHclTerraform(struct!.pppoe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3Pppoe",
    },
    sdwan_link_settings: {
      value: dataPanosEthernetInterfaceLayer3SdwanLinkSettingsToHclTerraform(struct!.sdwanLinkSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLayer3SdwanLinkSettings",
    },
    traffic_interconnect: {
      value: cdktf.booleanToHclTerraform(struct!.trafficInterconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    untagged_sub_interface: {
      value: cdktf.booleanToHclTerraform(struct!.untaggedSubInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLayer3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLayer3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustTcpMss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustTcpMss = this._adjustTcpMss?.internalValue;
    }
    if (this._arp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arp = this._arp?.internalValue;
    }
    if (this._bonjour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonjour = this._bonjour?.internalValue;
    }
    if (this._clusterInterconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInterconnect = this._clusterInterconnect;
    }
    if (this._ddnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConfig = this._ddnsConfig?.internalValue;
    }
    if (this._decryptForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptForward = this._decryptForward;
    }
    if (this._dfIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfIgnore = this._dfIgnore;
    }
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._interfaceManagementProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceManagementProfile = this._interfaceManagementProfile;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._lldp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp?.internalValue;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._ndpProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndpProxy = this._ndpProxy?.internalValue;
    }
    if (this._netflowProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowProfile = this._netflowProfile;
    }
    if (this._pppoe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pppoe = this._pppoe?.internalValue;
    }
    if (this._sdwanLinkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanLinkSettings = this._sdwanLinkSettings?.internalValue;
    }
    if (this._trafficInterconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficInterconnect = this._trafficInterconnect;
    }
    if (this._untaggedSubInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedSubInterface = this._untaggedSubInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLayer3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustTcpMss.internalValue = undefined;
      this._arp.internalValue = undefined;
      this._bonjour.internalValue = undefined;
      this._clusterInterconnect = undefined;
      this._ddnsConfig.internalValue = undefined;
      this._decryptForward = undefined;
      this._dfIgnore = undefined;
      this._dhcpClient.internalValue = undefined;
      this._interfaceManagementProfile = undefined;
      this._ips.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._lldp.internalValue = undefined;
      this._mtu = undefined;
      this._ndpProxy.internalValue = undefined;
      this._netflowProfile = undefined;
      this._pppoe.internalValue = undefined;
      this._sdwanLinkSettings.internalValue = undefined;
      this._trafficInterconnect = undefined;
      this._untaggedSubInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustTcpMss.internalValue = value.adjustTcpMss;
      this._arp.internalValue = value.arp;
      this._bonjour.internalValue = value.bonjour;
      this._clusterInterconnect = value.clusterInterconnect;
      this._ddnsConfig.internalValue = value.ddnsConfig;
      this._decryptForward = value.decryptForward;
      this._dfIgnore = value.dfIgnore;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._interfaceManagementProfile = value.interfaceManagementProfile;
      this._ips.internalValue = value.ips;
      this._ipv6.internalValue = value.ipv6;
      this._lldp.internalValue = value.lldp;
      this._mtu = value.mtu;
      this._ndpProxy.internalValue = value.ndpProxy;
      this._netflowProfile = value.netflowProfile;
      this._pppoe.internalValue = value.pppoe;
      this._sdwanLinkSettings.internalValue = value.sdwanLinkSettings;
      this._trafficInterconnect = value.trafficInterconnect;
      this._untaggedSubInterface = value.untaggedSubInterface;
    }
  }

  // adjust_tcp_mss - computed: true, optional: true, required: false
  private _adjustTcpMss = new DataPanosEthernetInterfaceLayer3AdjustTcpMssOutputReference(this, "adjust_tcp_mss");
  public get adjustTcpMss() {
    return this._adjustTcpMss;
  }
  public putAdjustTcpMss(value: DataPanosEthernetInterfaceLayer3AdjustTcpMss) {
    this._adjustTcpMss.internalValue = value;
  }
  public resetAdjustTcpMss() {
    this._adjustTcpMss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustTcpMssInput() {
    return this._adjustTcpMss.internalValue;
  }

  // arp - computed: true, optional: true, required: false
  private _arp = new DataPanosEthernetInterfaceLayer3ArpList(this, "arp", false);
  public get arp() {
    return this._arp;
  }
  public putArp(value: DataPanosEthernetInterfaceLayer3Arp[] | cdktf.IResolvable) {
    this._arp.internalValue = value;
  }
  public resetArp() {
    this._arp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp.internalValue;
  }

  // bonjour - computed: true, optional: true, required: false
  private _bonjour = new DataPanosEthernetInterfaceLayer3BonjourOutputReference(this, "bonjour");
  public get bonjour() {
    return this._bonjour;
  }
  public putBonjour(value: DataPanosEthernetInterfaceLayer3Bonjour) {
    this._bonjour.internalValue = value;
  }
  public resetBonjour() {
    this._bonjour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourInput() {
    return this._bonjour.internalValue;
  }

  // cluster_interconnect - computed: true, optional: true, required: false
  private _clusterInterconnect?: boolean | cdktf.IResolvable; 
  public get clusterInterconnect() {
    return this.getBooleanAttribute('cluster_interconnect');
  }
  public set clusterInterconnect(value: boolean | cdktf.IResolvable) {
    this._clusterInterconnect = value;
  }
  public resetClusterInterconnect() {
    this._clusterInterconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInterconnectInput() {
    return this._clusterInterconnect;
  }

  // ddns_config - computed: true, optional: true, required: false
  private _ddnsConfig = new DataPanosEthernetInterfaceLayer3DdnsConfigOutputReference(this, "ddns_config");
  public get ddnsConfig() {
    return this._ddnsConfig;
  }
  public putDdnsConfig(value: DataPanosEthernetInterfaceLayer3DdnsConfig) {
    this._ddnsConfig.internalValue = value;
  }
  public resetDdnsConfig() {
    this._ddnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConfigInput() {
    return this._ddnsConfig.internalValue;
  }

  // decrypt_forward - computed: true, optional: true, required: false
  private _decryptForward?: boolean | cdktf.IResolvable; 
  public get decryptForward() {
    return this.getBooleanAttribute('decrypt_forward');
  }
  public set decryptForward(value: boolean | cdktf.IResolvable) {
    this._decryptForward = value;
  }
  public resetDecryptForward() {
    this._decryptForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptForwardInput() {
    return this._decryptForward;
  }

  // df_ignore - computed: true, optional: true, required: false
  private _dfIgnore?: boolean | cdktf.IResolvable; 
  public get dfIgnore() {
    return this.getBooleanAttribute('df_ignore');
  }
  public set dfIgnore(value: boolean | cdktf.IResolvable) {
    this._dfIgnore = value;
  }
  public resetDfIgnore() {
    this._dfIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfIgnoreInput() {
    return this._dfIgnore;
  }

  // dhcp_client - computed: true, optional: true, required: false
  private _dhcpClient = new DataPanosEthernetInterfaceLayer3DhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: DataPanosEthernetInterfaceLayer3DhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // interface_management_profile - computed: true, optional: true, required: false
  private _interfaceManagementProfile?: string; 
  public get interfaceManagementProfile() {
    return this.getStringAttribute('interface_management_profile');
  }
  public set interfaceManagementProfile(value: string) {
    this._interfaceManagementProfile = value;
  }
  public resetInterfaceManagementProfile() {
    this._interfaceManagementProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceManagementProfileInput() {
    return this._interfaceManagementProfile;
  }

  // ips - computed: true, optional: true, required: false
  private _ips = new DataPanosEthernetInterfaceLayer3IpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: DataPanosEthernetInterfaceLayer3Ips[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosEthernetInterfaceLayer3Ipv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosEthernetInterfaceLayer3Ipv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // lldp - computed: true, optional: true, required: false
  private _lldp = new DataPanosEthernetInterfaceLayer3LldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }
  public putLldp(value: DataPanosEthernetInterfaceLayer3Lldp) {
    this._lldp.internalValue = value;
  }
  public resetLldp() {
    this._lldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp.internalValue;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // ndp_proxy - computed: true, optional: true, required: false
  private _ndpProxy = new DataPanosEthernetInterfaceLayer3NdpProxyOutputReference(this, "ndp_proxy");
  public get ndpProxy() {
    return this._ndpProxy;
  }
  public putNdpProxy(value: DataPanosEthernetInterfaceLayer3NdpProxy) {
    this._ndpProxy.internalValue = value;
  }
  public resetNdpProxy() {
    this._ndpProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpProxyInput() {
    return this._ndpProxy.internalValue;
  }

  // netflow_profile - computed: true, optional: true, required: false
  private _netflowProfile?: string; 
  public get netflowProfile() {
    return this.getStringAttribute('netflow_profile');
  }
  public set netflowProfile(value: string) {
    this._netflowProfile = value;
  }
  public resetNetflowProfile() {
    this._netflowProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowProfileInput() {
    return this._netflowProfile;
  }

  // pppoe - computed: true, optional: true, required: false
  private _pppoe = new DataPanosEthernetInterfaceLayer3PppoeOutputReference(this, "pppoe");
  public get pppoe() {
    return this._pppoe;
  }
  public putPppoe(value: DataPanosEthernetInterfaceLayer3Pppoe) {
    this._pppoe.internalValue = value;
  }
  public resetPppoe() {
    this._pppoe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeInput() {
    return this._pppoe.internalValue;
  }

  // sdwan_link_settings - computed: true, optional: true, required: false
  private _sdwanLinkSettings = new DataPanosEthernetInterfaceLayer3SdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: DataPanosEthernetInterfaceLayer3SdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
  }

  // traffic_interconnect - computed: true, optional: true, required: false
  private _trafficInterconnect?: boolean | cdktf.IResolvable; 
  public get trafficInterconnect() {
    return this.getBooleanAttribute('traffic_interconnect');
  }
  public set trafficInterconnect(value: boolean | cdktf.IResolvable) {
    this._trafficInterconnect = value;
  }
  public resetTrafficInterconnect() {
    this._trafficInterconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInterconnectInput() {
    return this._trafficInterconnect;
  }

  // untagged_sub_interface - computed: true, optional: true, required: false
  private _untaggedSubInterface?: boolean | cdktf.IResolvable; 
  public get untaggedSubInterface() {
    return this.getBooleanAttribute('untagged_sub_interface');
  }
  public set untaggedSubInterface(value: boolean | cdktf.IResolvable) {
    this._untaggedSubInterface = value;
  }
  public resetUntaggedSubInterface() {
    this._untaggedSubInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedSubInterfaceInput() {
    return this._untaggedSubInterface;
  }
}
export interface DataPanosEthernetInterfaceLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ngfw_device DataPanosEthernetInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosEthernetInterfaceLocationNgfwToTerraform(struct?: DataPanosEthernetInterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosEthernetInterfaceLocationNgfwToHclTerraform(struct?: DataPanosEthernetInterfaceLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosEthernetInterfaceLocationShared {
}

export function dataPanosEthernetInterfaceLocationSharedToTerraform(struct?: DataPanosEthernetInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosEthernetInterfaceLocationSharedToHclTerraform(struct?: DataPanosEthernetInterfaceLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosEthernetInterfaceLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosEthernetInterfaceLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ngfw_device DataPanosEthernetInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#panorama_device DataPanosEthernetInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#vsys DataPanosEthernetInterface#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosEthernetInterfaceLocationTemplateToTerraform(struct?: DataPanosEthernetInterfaceLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosEthernetInterfaceLocationTemplateToHclTerraform(struct?: DataPanosEthernetInterfaceLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._vsys = value.vsys;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosEthernetInterfaceLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#name DataPanosEthernetInterface#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ngfw_device DataPanosEthernetInterface#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#panorama_device DataPanosEthernetInterface#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosEthernetInterfaceLocationTemplateStackToTerraform(struct?: DataPanosEthernetInterfaceLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosEthernetInterfaceLocationTemplateStackToHclTerraform(struct?: DataPanosEthernetInterfaceLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosEthernetInterfaceLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ngfw DataPanosEthernetInterface#ngfw}
  */
  readonly ngfw?: DataPanosEthernetInterfaceLocationNgfw;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#shared DataPanosEthernetInterface#shared}
  */
  readonly shared?: DataPanosEthernetInterfaceLocationShared;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#template DataPanosEthernetInterface#template}
  */
  readonly template?: DataPanosEthernetInterfaceLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#template_stack DataPanosEthernetInterface#template_stack}
  */
  readonly templateStack?: DataPanosEthernetInterfaceLocationTemplateStack;
}

export function dataPanosEthernetInterfaceLocationToTerraform(struct?: DataPanosEthernetInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosEthernetInterfaceLocationNgfwToTerraform(struct!.ngfw),
    shared: dataPanosEthernetInterfaceLocationSharedToTerraform(struct!.shared),
    template: dataPanosEthernetInterfaceLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosEthernetInterfaceLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosEthernetInterfaceLocationToHclTerraform(struct?: DataPanosEthernetInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosEthernetInterfaceLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLocationNgfw",
    },
    shared: {
      value: dataPanosEthernetInterfaceLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLocationShared",
    },
    template: {
      value: dataPanosEthernetInterfaceLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLocationTemplate",
    },
    template_stack: {
      value: dataPanosEthernetInterfaceLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._shared.internalValue = value.shared;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new DataPanosEthernetInterfaceLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosEthernetInterfaceLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new DataPanosEthernetInterfaceLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosEthernetInterfaceLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosEthernetInterfaceLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosEthernetInterfaceLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosEthernetInterfaceLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosEthernetInterfaceLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface DataPanosEthernetInterfaceLogCard {
  /**
  * log forwarding card default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#default_gateway DataPanosEthernetInterface#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * IP address for the log card forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ip_address DataPanosEthernetInterface#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPv6 address for the log card forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ipv6_address DataPanosEthernetInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * log forwarding IPv6 card default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#ipv6_default_gateway DataPanosEthernetInterface#ipv6_default_gateway}
  */
  readonly ipv6DefaultGateway?: string;
  /**
  * IP netmask for the log card forwarding interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#netmask DataPanosEthernetInterface#netmask}
  */
  readonly netmask?: string;
}

export function dataPanosEthernetInterfaceLogCardToTerraform(struct?: DataPanosEthernetInterfaceLogCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_default_gateway: cdktf.stringToTerraform(struct!.ipv6DefaultGateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}


export function dataPanosEthernetInterfaceLogCardToHclTerraform(struct?: DataPanosEthernetInterfaceLogCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceLogCardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceLogCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6DefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DefaultGateway = this._ipv6DefaultGateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceLogCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipv6Address = undefined;
      this._ipv6DefaultGateway = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipv6Address = value.ipv6Address;
      this._ipv6DefaultGateway = value.ipv6DefaultGateway;
      this._netmask = value.netmask;
    }
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_default_gateway - computed: true, optional: true, required: false
  private _ipv6DefaultGateway?: string; 
  public get ipv6DefaultGateway() {
    return this.getStringAttribute('ipv6_default_gateway');
  }
  public set ipv6DefaultGateway(value: string) {
    this._ipv6DefaultGateway = value;
  }
  public resetIpv6DefaultGateway() {
    this._ipv6DefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultGatewayInput() {
    return this._ipv6DefaultGateway;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface DataPanosEthernetInterfacePoe {
  /**
  * PoE Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enabled DataPanosEthernetInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Reserved Power
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#poe_reserved_power DataPanosEthernetInterface#poe_reserved_power}
  */
  readonly poeReservedPower?: number;
}

export function dataPanosEthernetInterfacePoeToTerraform(struct?: DataPanosEthernetInterfacePoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    poe_reserved_power: cdktf.numberToTerraform(struct!.poeReservedPower),
  }
}


export function dataPanosEthernetInterfacePoeToHclTerraform(struct?: DataPanosEthernetInterfacePoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    poe_reserved_power: {
      value: cdktf.numberToHclTerraform(struct!.poeReservedPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfacePoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfacePoe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._poeReservedPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeReservedPower = this._poeReservedPower;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfacePoe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._poeReservedPower = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._poeReservedPower = value.poeReservedPower;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // poe_reserved_power - computed: true, optional: true, required: false
  private _poeReservedPower?: number; 
  public get poeReservedPower() {
    return this.getNumberAttribute('poe_reserved_power');
  }
  public set poeReservedPower(value: number) {
    this._poeReservedPower = value;
  }
  public resetPoeReservedPower() {
    this._poeReservedPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeReservedPowerInput() {
    return this._poeReservedPower;
  }
}
export interface DataPanosEthernetInterfaceTap {
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#netflow_profile DataPanosEthernetInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
}

export function dataPanosEthernetInterfaceTapToTerraform(struct?: DataPanosEthernetInterfaceTap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    netflow_profile: cdktf.stringToTerraform(struct!.netflowProfile),
  }
}


export function dataPanosEthernetInterfaceTapToHclTerraform(struct?: DataPanosEthernetInterfaceTap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    netflow_profile: {
      value: cdktf.stringToHclTerraform(struct!.netflowProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceTapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceTap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netflowProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowProfile = this._netflowProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceTap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._netflowProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._netflowProfile = value.netflowProfile;
    }
  }

  // netflow_profile - computed: true, optional: true, required: false
  private _netflowProfile?: string; 
  public get netflowProfile() {
    return this.getStringAttribute('netflow_profile');
  }
  public set netflowProfile(value: string) {
    this._netflowProfile = value;
  }
  public resetNetflowProfile() {
    this._netflowProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowProfileInput() {
    return this._netflowProfile;
  }
}
export interface DataPanosEthernetInterfaceVirtualWireLacpHighAvailability {
  /**
  * Allow LACP traffic to traverse this device in HA passive state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#passive_pre_negotiation DataPanosEthernetInterface#passive_pre_negotiation}
  */
  readonly passivePreNegotiation?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityToTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLacpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passive_pre_negotiation: cdktf.booleanToTerraform(struct!.passivePreNegotiation),
  }
}


export function dataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityToHclTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLacpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passive_pre_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.passivePreNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceVirtualWireLacpHighAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passivePreNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.passivePreNegotiation = this._passivePreNegotiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceVirtualWireLacpHighAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = value.passivePreNegotiation;
    }
  }

  // passive_pre_negotiation - computed: true, optional: true, required: false
  private _passivePreNegotiation?: boolean | cdktf.IResolvable; 
  public get passivePreNegotiation() {
    return this.getBooleanAttribute('passive_pre_negotiation');
  }
  public set passivePreNegotiation(value: boolean | cdktf.IResolvable) {
    this._passivePreNegotiation = value;
  }
  public resetPassivePreNegotiation() {
    this._passivePreNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passivePreNegotiationInput() {
    return this._passivePreNegotiation;
  }
}
export interface DataPanosEthernetInterfaceVirtualWireLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#high_availability DataPanosEthernetInterface#high_availability}
  */
  readonly highAvailability?: DataPanosEthernetInterfaceVirtualWireLacpHighAvailability;
}

export function dataPanosEthernetInterfaceVirtualWireLacpToTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_availability: dataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityToTerraform(struct!.highAvailability),
  }
}


export function dataPanosEthernetInterfaceVirtualWireLacpToHclTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLacp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_availability: {
      value: dataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityToHclTerraform(struct!.highAvailability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceVirtualWireLacpHighAvailability",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceVirtualWireLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceVirtualWireLacp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceVirtualWireLacp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highAvailability.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highAvailability.internalValue = value.highAvailability;
    }
  }

  // high_availability - computed: true, optional: true, required: false
  private _highAvailability = new DataPanosEthernetInterfaceVirtualWireLacpHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: DataPanosEthernetInterfaceVirtualWireLacpHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }
}
export interface DataPanosEthernetInterfaceVirtualWireLldpHighAvailability {
  /**
  * Enable LLDP pre-negotiation in HA passive state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#passive_pre_negotiation DataPanosEthernetInterface#passive_pre_negotiation}
  */
  readonly passivePreNegotiation?: boolean | cdktf.IResolvable;
}

export function dataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityToTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passive_pre_negotiation: cdktf.booleanToTerraform(struct!.passivePreNegotiation),
  }
}


export function dataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityToHclTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLldpHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passive_pre_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.passivePreNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceVirtualWireLldpHighAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passivePreNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.passivePreNegotiation = this._passivePreNegotiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceVirtualWireLldpHighAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passivePreNegotiation = value.passivePreNegotiation;
    }
  }

  // passive_pre_negotiation - computed: true, optional: true, required: false
  private _passivePreNegotiation?: boolean | cdktf.IResolvable; 
  public get passivePreNegotiation() {
    return this.getBooleanAttribute('passive_pre_negotiation');
  }
  public set passivePreNegotiation(value: boolean | cdktf.IResolvable) {
    this._passivePreNegotiation = value;
  }
  public resetPassivePreNegotiation() {
    this._passivePreNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passivePreNegotiationInput() {
    return this._passivePreNegotiation;
  }
}
export interface DataPanosEthernetInterfaceVirtualWireLldp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#enable DataPanosEthernetInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#high_availability DataPanosEthernetInterface#high_availability}
  */
  readonly highAvailability?: DataPanosEthernetInterfaceVirtualWireLldpHighAvailability;
  /**
  * LLDP profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#profile DataPanosEthernetInterface#profile}
  */
  readonly profile?: string;
}

export function dataPanosEthernetInterfaceVirtualWireLldpToTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    high_availability: dataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityToTerraform(struct!.highAvailability),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosEthernetInterfaceVirtualWireLldpToHclTerraform(struct?: DataPanosEthernetInterfaceVirtualWireLldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_availability: {
      value: dataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityToHclTerraform(struct!.highAvailability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceVirtualWireLldpHighAvailability",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceVirtualWireLldpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceVirtualWireLldp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._highAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceVirtualWireLldp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._highAvailability.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._highAvailability.internalValue = value.highAvailability;
      this._profile = value.profile;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // high_availability - computed: true, optional: true, required: false
  private _highAvailability = new DataPanosEthernetInterfaceVirtualWireLldpHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: DataPanosEthernetInterfaceVirtualWireLldpHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DataPanosEthernetInterfaceVirtualWire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lacp DataPanosEthernetInterface#lacp}
  */
  readonly lacp?: DataPanosEthernetInterfaceVirtualWireLacp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#lldp DataPanosEthernetInterface#lldp}
  */
  readonly lldp?: DataPanosEthernetInterfaceVirtualWireLldp;
  /**
  * Netflow Server Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#netflow_profile DataPanosEthernetInterface#netflow_profile}
  */
  readonly netflowProfile?: string;
}

export function dataPanosEthernetInterfaceVirtualWireToTerraform(struct?: DataPanosEthernetInterfaceVirtualWire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lacp: dataPanosEthernetInterfaceVirtualWireLacpToTerraform(struct!.lacp),
    lldp: dataPanosEthernetInterfaceVirtualWireLldpToTerraform(struct!.lldp),
    netflow_profile: cdktf.stringToTerraform(struct!.netflowProfile),
  }
}


export function dataPanosEthernetInterfaceVirtualWireToHclTerraform(struct?: DataPanosEthernetInterfaceVirtualWire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lacp: {
      value: dataPanosEthernetInterfaceVirtualWireLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceVirtualWireLacp",
    },
    lldp: {
      value: dataPanosEthernetInterfaceVirtualWireLldpToHclTerraform(struct!.lldp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosEthernetInterfaceVirtualWireLldp",
    },
    netflow_profile: {
      value: cdktf.stringToHclTerraform(struct!.netflowProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosEthernetInterfaceVirtualWireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosEthernetInterfaceVirtualWire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    if (this._lldp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp?.internalValue;
    }
    if (this._netflowProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowProfile = this._netflowProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosEthernetInterfaceVirtualWire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lacp.internalValue = undefined;
      this._lldp.internalValue = undefined;
      this._netflowProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lacp.internalValue = value.lacp;
      this._lldp.internalValue = value.lldp;
      this._netflowProfile = value.netflowProfile;
    }
  }

  // lacp - computed: true, optional: true, required: false
  private _lacp = new DataPanosEthernetInterfaceVirtualWireLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: DataPanosEthernetInterfaceVirtualWireLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }

  // lldp - computed: true, optional: true, required: false
  private _lldp = new DataPanosEthernetInterfaceVirtualWireLldpOutputReference(this, "lldp");
  public get lldp() {
    return this._lldp;
  }
  public putLldp(value: DataPanosEthernetInterfaceVirtualWireLldp) {
    this._lldp.internalValue = value;
  }
  public resetLldp() {
    this._lldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp.internalValue;
  }

  // netflow_profile - computed: true, optional: true, required: false
  private _netflowProfile?: string; 
  public get netflowProfile() {
    return this.getStringAttribute('netflow_profile');
  }
  public set netflowProfile(value: string) {
    this._netflowProfile = value;
  }
  public resetNetflowProfile() {
    this._netflowProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowProfileInput() {
    return this._netflowProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface panos_ethernet_interface}
*/
export class DataPanosEthernetInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ethernet_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosEthernetInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosEthernetInterface to import
  * @param importFromId The id of the existing DataPanosEthernetInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosEthernetInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ethernet_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ethernet_interface panos_ethernet_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosEthernetInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosEthernetInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ethernet_interface',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateGroup = config.aggregateGroup;
    this._comment = config.comment;
    this._decryptMirror.internalValue = config.decryptMirror;
    this._ha.internalValue = config.ha;
    this._lacp.internalValue = config.lacp;
    this._layer2.internalValue = config.layer2;
    this._layer3.internalValue = config.layer3;
    this._linkDuplex = config.linkDuplex;
    this._linkSpeed = config.linkSpeed;
    this._linkState = config.linkState;
    this._location.internalValue = config.location;
    this._logCard.internalValue = config.logCard;
    this._name = config.name;
    this._poe.internalValue = config.poe;
    this._tap.internalValue = config.tap;
    this._virtualWire.internalValue = config.virtualWire;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_group - computed: true, optional: true, required: false
  private _aggregateGroup?: string; 
  public get aggregateGroup() {
    return this.getStringAttribute('aggregate_group');
  }
  public set aggregateGroup(value: string) {
    this._aggregateGroup = value;
  }
  public resetAggregateGroup() {
    this._aggregateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateGroupInput() {
    return this._aggregateGroup;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // decrypt_mirror - computed: true, optional: true, required: false
  private _decryptMirror = new DataPanosEthernetInterfaceDecryptMirrorOutputReference(this, "decrypt_mirror");
  public get decryptMirror() {
    return this._decryptMirror;
  }
  public putDecryptMirror(value: DataPanosEthernetInterfaceDecryptMirror) {
    this._decryptMirror.internalValue = value;
  }
  public resetDecryptMirror() {
    this._decryptMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptMirrorInput() {
    return this._decryptMirror.internalValue;
  }

  // ha - computed: true, optional: true, required: false
  private _ha = new DataPanosEthernetInterfaceHaOutputReference(this, "ha");
  public get ha() {
    return this._ha;
  }
  public putHa(value: DataPanosEthernetInterfaceHa) {
    this._ha.internalValue = value;
  }
  public resetHa() {
    this._ha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha.internalValue;
  }

  // lacp - computed: true, optional: true, required: false
  private _lacp = new DataPanosEthernetInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: DataPanosEthernetInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }

  // layer2 - computed: true, optional: true, required: false
  private _layer2 = new DataPanosEthernetInterfaceLayer2OutputReference(this, "layer2");
  public get layer2() {
    return this._layer2;
  }
  public putLayer2(value: DataPanosEthernetInterfaceLayer2) {
    this._layer2.internalValue = value;
  }
  public resetLayer2() {
    this._layer2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2Input() {
    return this._layer2.internalValue;
  }

  // layer3 - computed: true, optional: true, required: false
  private _layer3 = new DataPanosEthernetInterfaceLayer3OutputReference(this, "layer3");
  public get layer3() {
    return this._layer3;
  }
  public putLayer3(value: DataPanosEthernetInterfaceLayer3) {
    this._layer3.internalValue = value;
  }
  public resetLayer3() {
    this._layer3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Input() {
    return this._layer3.internalValue;
  }

  // link_duplex - computed: true, optional: true, required: false
  private _linkDuplex?: string; 
  public get linkDuplex() {
    return this.getStringAttribute('link_duplex');
  }
  public set linkDuplex(value: string) {
    this._linkDuplex = value;
  }
  public resetLinkDuplex() {
    this._linkDuplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDuplexInput() {
    return this._linkDuplex;
  }

  // link_speed - computed: true, optional: true, required: false
  private _linkSpeed?: string; 
  public get linkSpeed() {
    return this.getStringAttribute('link_speed');
  }
  public set linkSpeed(value: string) {
    this._linkSpeed = value;
  }
  public resetLinkSpeed() {
    this._linkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSpeedInput() {
    return this._linkSpeed;
  }

  // link_state - computed: true, optional: true, required: false
  private _linkState?: string; 
  public get linkState() {
    return this.getStringAttribute('link_state');
  }
  public set linkState(value: string) {
    this._linkState = value;
  }
  public resetLinkState() {
    this._linkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateInput() {
    return this._linkState;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosEthernetInterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosEthernetInterfaceLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // log_card - computed: true, optional: true, required: false
  private _logCard = new DataPanosEthernetInterfaceLogCardOutputReference(this, "log_card");
  public get logCard() {
    return this._logCard;
  }
  public putLogCard(value: DataPanosEthernetInterfaceLogCard) {
    this._logCard.internalValue = value;
  }
  public resetLogCard() {
    this._logCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCardInput() {
    return this._logCard.internalValue;
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

  // poe - computed: true, optional: true, required: false
  private _poe = new DataPanosEthernetInterfacePoeOutputReference(this, "poe");
  public get poe() {
    return this._poe;
  }
  public putPoe(value: DataPanosEthernetInterfacePoe) {
    this._poe.internalValue = value;
  }
  public resetPoe() {
    this._poe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeInput() {
    return this._poe.internalValue;
  }

  // tap - computed: true, optional: true, required: false
  private _tap = new DataPanosEthernetInterfaceTapOutputReference(this, "tap");
  public get tap() {
    return this._tap;
  }
  public putTap(value: DataPanosEthernetInterfaceTap) {
    this._tap.internalValue = value;
  }
  public resetTap() {
    this._tap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapInput() {
    return this._tap.internalValue;
  }

  // virtual_wire - computed: true, optional: true, required: false
  private _virtualWire = new DataPanosEthernetInterfaceVirtualWireOutputReference(this, "virtual_wire");
  public get virtualWire() {
    return this._virtualWire;
  }
  public putVirtualWire(value: DataPanosEthernetInterfaceVirtualWire) {
    this._virtualWire.internalValue = value;
  }
  public resetVirtualWire() {
    this._virtualWire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireInput() {
    return this._virtualWire.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_group: cdktf.stringToTerraform(this._aggregateGroup),
      comment: cdktf.stringToTerraform(this._comment),
      decrypt_mirror: dataPanosEthernetInterfaceDecryptMirrorToTerraform(this._decryptMirror.internalValue),
      ha: dataPanosEthernetInterfaceHaToTerraform(this._ha.internalValue),
      lacp: dataPanosEthernetInterfaceLacpToTerraform(this._lacp.internalValue),
      layer2: dataPanosEthernetInterfaceLayer2ToTerraform(this._layer2.internalValue),
      layer3: dataPanosEthernetInterfaceLayer3ToTerraform(this._layer3.internalValue),
      link_duplex: cdktf.stringToTerraform(this._linkDuplex),
      link_speed: cdktf.stringToTerraform(this._linkSpeed),
      link_state: cdktf.stringToTerraform(this._linkState),
      location: dataPanosEthernetInterfaceLocationToTerraform(this._location.internalValue),
      log_card: dataPanosEthernetInterfaceLogCardToTerraform(this._logCard.internalValue),
      name: cdktf.stringToTerraform(this._name),
      poe: dataPanosEthernetInterfacePoeToTerraform(this._poe.internalValue),
      tap: dataPanosEthernetInterfaceTapToTerraform(this._tap.internalValue),
      virtual_wire: dataPanosEthernetInterfaceVirtualWireToTerraform(this._virtualWire.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_group: {
        value: cdktf.stringToHclTerraform(this._aggregateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrypt_mirror: {
        value: dataPanosEthernetInterfaceDecryptMirrorToHclTerraform(this._decryptMirror.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceDecryptMirror",
      },
      ha: {
        value: dataPanosEthernetInterfaceHaToHclTerraform(this._ha.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceHa",
      },
      lacp: {
        value: dataPanosEthernetInterfaceLacpToHclTerraform(this._lacp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceLacp",
      },
      layer2: {
        value: dataPanosEthernetInterfaceLayer2ToHclTerraform(this._layer2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceLayer2",
      },
      layer3: {
        value: dataPanosEthernetInterfaceLayer3ToHclTerraform(this._layer3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceLayer3",
      },
      link_duplex: {
        value: cdktf.stringToHclTerraform(this._linkDuplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_speed: {
        value: cdktf.stringToHclTerraform(this._linkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_state: {
        value: cdktf.stringToHclTerraform(this._linkState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: dataPanosEthernetInterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceLocation",
      },
      log_card: {
        value: dataPanosEthernetInterfaceLogCardToHclTerraform(this._logCard.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceLogCard",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe: {
        value: dataPanosEthernetInterfacePoeToHclTerraform(this._poe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfacePoe",
      },
      tap: {
        value: dataPanosEthernetInterfaceTapToHclTerraform(this._tap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceTap",
      },
      virtual_wire: {
        value: dataPanosEthernetInterfaceVirtualWireToHclTerraform(this._virtualWire.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosEthernetInterfaceVirtualWire",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
