export class Bot {
    name: string = ""
    account_id:number = -1
    pairs: string[] = []
    max_active_deals ?: number
    base_order_volume : number = -1
    base_order_volume_type ?: string = "quote_currency" || "base_currency" || "percent" || "xbt"
    take_profit : number = -1
    safety_order_volume : number = -1
    safety_order_volume_type ?: string = "quote_currency" || "base_currency" || "percent" || "xbt"
    martingale_volume_coefficient: number = 1
    martingale_step_coefficient : number = 1
    max_safety_orders : number = -1
    active_safety_orders_count: number = -1
    stop_loss_percentage ?: number
    cooldown ?: number
    trailing_enabled ?: boolean
    trailing_deviation ?: number
    btc_price_limit ?: number
    strategy ?: string = "long" || "short"
    safety_order_step_percentage : number = -1
    take_profit_type : string = "base" || "total"
    strategy_list : any[] = []
    leverage_type ?: string
    leverage_custom_value ?: string
    min_price ?: number
    max_price ?: number
    stop_loss_timeout_enabled ?: boolean
    stop_loss_timeout_in_seconds ?: number
    min_volume_btc_24h ?: number
    tsl_enabled ?: boolean
    deal_start_delay_seconds ?: number
    profit_currency ?: string = "quote_currency" || "base_currency"
    start_order_type ?: string = "limit" || "market"
    stop_loss_type ?: string = "stop_loss" || "stop_loss_and_disable_bot"
    disable_after_deals_count ?: number = 0
    allowed_deals_on_same_pair ?: number
    close_deals_timeout ?: number

}